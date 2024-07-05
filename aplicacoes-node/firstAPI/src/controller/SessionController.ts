import { Request, Response } from "express"
import { prisma } from "../database/prisma"
import { compare } from "bcrypt"
import { sign } from "jsonwebtoken"

export const signIn = async (req: Request, res: Response) => {
    try {
        const { email, password } = req.body
        const user = await prisma.user.findUnique({
            where: {
                email,
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

        if (!user) {
            return res.status(400).json({ message: "Usuário ou senha inválidos" })
        }

        const isPasswordValid = await compare(password, user.password)

        if (!isPasswordValid) {
            return res.status(400).json({ message: "Usuário ou senha inválidos" })
        }

        const MY_SECRET_KEY = process.env.MY_SECRET_KEY

        if (!MY_SECRET_KEY) {
            throw new Error("Chave secreta não fornecida")
        }

        const token = sign(
            {
                userId: user.id,
                roles: user.user_access.map((permission) => permission.Access?.name),
            },
            MY_SECRET_KEY,
            {
                algorithm: "HS256",
                expiresIn: "1h",
            }
        )

        return res.status(200).json({ token })
    } catch (error) {
        return res.status(400).json(error)
    }
}
