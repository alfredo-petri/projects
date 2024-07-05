import { Request, Response } from "express"
import { prisma } from "../database/prisma"
import { hash } from "bcrypt"

export const createUser = async (req: Request, res: Response) => {
    const { name, email, password, accessName } = req.body

    const isUserEmail = await prisma.user.findUnique({
        where: {
            email,
        },
    })

    if (isUserEmail) {
        return res.status(400).json({ message: "o email já existe, por favor digite outro email válido" })
    }

    const isAcessName = await prisma.access.findUnique({
        where: {
            name: accessName,
        },
    })

    if (!isAcessName) {
        return res.status(400).json({ message: "permissao inválida" })
    }

    const hashPassword = await hash(password, 8)

    const user = await prisma.user.create({
        data: {
            name,
            email,
            password: hashPassword,
            user_access: {
                create: {
                    Access: {
                        connect: {
                            name: accessName,
                        },
                    },
                },
            },
        },
        select: {
            id: true,
            name: true,
            email: true,
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

    return res.json(user)
}

export const deleteAllUsers = async (req: Request, res: Response) => {
    await prisma.user.deleteMany()

    return res.json({ message: "all users deleted" })
}

export const listUsers = async (req: Request, res: Response) => {
    const listUsers = await prisma.user.findMany({
        select: {
            id: true,
            name: true,
            email: true,
            store: {
                select: {
                    name: true,
                },
            },
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

    const users = listUsers.map((user) => ({
        id: user.id,
        nome: user.name,
        email: user.email,
        lojas: user.store.map((store) => ({
            loja: store.name,
        })),
        permissoes: user.user_access.map((access) => ({ permicao: access.Access?.name })),
    }))

    return res.json(users)
}