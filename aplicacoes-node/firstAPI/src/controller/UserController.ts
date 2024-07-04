import { Request, Response } from "express"
import { prisma } from "../database/prisma"


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

    const user = await prisma.user.create({
        data: {
            name,
            email,
            password,
            Access: {
                connect: {
                    name: accessName,
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