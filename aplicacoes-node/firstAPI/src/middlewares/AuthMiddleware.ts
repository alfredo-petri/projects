import { NextFunction, Request, Response } from "express"
import { verify } from "jsonwebtoken"
import { prisma } from "../database/prisma"

interface DecodedToken {
    userId: string
}

export function authMiddlewhare(permissions?: string[]) {
    return async (req: Request, res: Response, next: NextFunction) => {
        const authHeader = req.headers.authorization

        if (!authHeader || !authHeader.startsWith("Bearer ")) {
            return res.status(401).json({ message: "Token inválido" })
        }

        const token = authHeader.substring(7)

        try {
            const MY_SECRET_KEY = process.env.MY_SECRET_KEY

            if (!MY_SECRET_KEY) {
                throw new Error("Invalid secret key")
            }

            const decodedToken = verify(token, MY_SECRET_KEY) as DecodedToken

            req.user = { id: decodedToken.userId }

            if (permissions) {
                const user = await prisma.user.findUnique({
                    where: {
                        id: decodedToken.userId,
                    },
                    include: {
                        user_access: {
                            select: {
                                Access: {
                                    select: {
                                        name: true,
                                    },
                                },
                            },
                        },
                    },
                })

                const userPermissions = user?.user_access.map((item) => item.Access?.name) ?? []

                const hasPermissions = permissions.some((permission) => userPermissions.includes(permission))

                if (!hasPermissions) {
                    return res.status(403).json({ message: "Permissão Negada" })
                }
            }

            return next()
        } catch (error) {
            return res.status(401).json({ message: "Token invalido" })
        }
    }
}
