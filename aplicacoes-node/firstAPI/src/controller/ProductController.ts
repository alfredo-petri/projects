import { Request, Response } from "express"
import { prisma } from "../database/prisma"

export const createProduct = async (req: Request, res: Response) => {
    const { name, price, amount } = req.body
    const { storeId } = req.params

    if (storeId) {
        try {
            const product = await prisma.product.create({
                data: {
                    name,
                    price,
                    amount,
                    Store: {
                        connect: {
                            id: storeId,
                        },
                    },
                },
            })
            return res.json(product)
        } catch (error) {
            console.log(error)
            return res.status(500).send(error)
        }
    } else {
        return res.status(400).json({ message: "loja inválida" })
    }
}

export const listProducts = async (req: Request, res: Response) => {
    const products = await prisma.product.findMany({
        select: {
            name: true,
            amount: true,
            price: true,
            id: true,
            Store: true,
        },
    })

    const response = products.map((product) => ({
        id: product.id,
        produto: product.name,
        preco: product.price,
        quantidade: product.amount,
        loja: product.Store?.name,
    }))

    return res.json(response)
}
