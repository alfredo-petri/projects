import { Request, Response } from "express"
import { prisma } from "../database/prisma"

export const createStore = async (req: Request, res: Response) => {
    const { name } = req.body
    const { userId } = req.params

    const isUser = await prisma.user.findUnique({
        where: {
            id: userId,
        },
    })

    if (!isUser) {
        return res.status(400).json({ message: "usuário não existe" })
    }

    const store = await prisma.store.create({
        data: {
            name,
            User: {
                connect: {
                    id: userId,
                },
            },
        },
    })

    return res.json(store)
}

 export const listStores = async (req: Request, res: Response) => {
     const stores = await prisma.store.findMany({
         select: {
             name: true,
             id: true,
             User: {
                 select: {
                     name: true,
                 },
             },
         },
     })

     const response = stores.map((store) => ({ id: store.id, loja: store.name, dono: store.User?.name }))

     return res.json(response)
 }
