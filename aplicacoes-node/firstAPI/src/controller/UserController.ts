import { Request, Response } from "express"
import { prisma } from "../database/prisma"
import { hash } from "bcrypt"

export const createUser = async (req: Request, res: Response) => {
    try {
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

        return res.status(201).json(user)
    } catch (error) {
        return res.status(400).json(error)
    }
}

export const deleteAllUsers = async (req: Request, res: Response) => {
    try {
        await prisma.user.deleteMany()

        return res.status(200).json({ message: "all users deleted" })
    } catch (error) {
        return res.status(400).json(error)
    }
}

export const getUser = async (req: Request, res: Response) => {
    try {
        const { id } = req.user

        const user = await prisma.user.findUnique({
            where: {
                id,
            },
            select: {
                id: true,
                name: true,
                email: true,
                store: { select: { name: true } },
                user_access: { select: { Access: { select: { name: true } } } },
            },
        })

        if (!user) {
            return res.status(204).json({ message: "Usuário não encontrado" })
        }

        return res.status(200).json(user)
    } catch (error) {
        return res.status(400).json(error)
    }
}

export const listUsers = async (req: Request, res: Response) => {
   try {
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

       if (!users) {
           return res.status(204).json({ message: "Usuário não encontrado" })
       }

       return res.status(200).json(users)
   } catch (error) {
       return res.status(400).json(error)
   }
}
