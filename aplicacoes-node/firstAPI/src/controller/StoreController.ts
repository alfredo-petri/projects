import { Request, Response } from "express"
import { prisma } from "../database/prisma"

export const createStore = async (req: Request, res: Response) => {
    const { name } = req.body
    const { id } = req.user
    // const { userId } = req.params

    const isUser = await prisma.user.findUnique({
        where: {
            // id: userId,
            id,
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
                    // id: userId,
                    id,
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
            Product: {
                select: {
                    id: true,
                    name: true,
                    amount: true,
                    price: true,
                },
            },
        },
    })

    const response = stores.map((store) => ({
        id: store.id,
        loja: store.name,
        dono: store.User?.name,
        produtos: store.Product.map((product) => ({ id: product.id, produto: product.name, quantidade: product.amount, preco: product.price })),
    }))

    return res.json(response)
}
