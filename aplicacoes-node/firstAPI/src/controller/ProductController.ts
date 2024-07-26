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
            return res.status(200).json(product)
        } catch (error) {
            console.log(error)
            return res.status(500).send(error)
        }
    } else {
        return res.status(400).json({ message: "loja inválida" })
    }
}

export const updateProduct = async (req: Request, res: Response) => {
    const { name, price, amount } = req.body
    const { productId } = req.params
    const { id } = req.user

    try {
        const isProduct = await prisma.product.findUnique({
            where: { id: productId },
            include: { Store: true },
        })

        if (!isProduct) {
            return res.status(404).json({ message: "produto não encontrado" })
        }

        if (id !== isProduct?.Store?.userId) {
            return res.status(404).json({ message: "este produto não pertence a este usuário" })
        }

        const product = await prisma.product.update({
            where: { id: productId },
            data: {
                name,
                price,
                amount,
            },
        })
        return res.status(200).json(product)
    } catch (error) {
        console.log(error)
        return res.status(500).send(error)
    }
}

export const listProducts = async (req: Request, res: Response) => {
    const products = await prisma.product.findMany({
        select: {
            name: true,
            amount: true,
            price: true,
            id: true,
            Store: {
                select: {
                    name: true,
                },
            },
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


export const getProduct = async (req: Request, res: Response) => {
    const { productId } = req.params

    try {
        const product = await prisma.product.findUnique({
            where: { id: productId },

            select: {
                name: true,
                amount: true,
                price: true,
                Store: {
                    select: {
                        name: true,
                    },
                },
            },
        })

        if (!product) return res.status(404).json({ message: "Produto não encontrado" })

        return res.status(200).json(product)
    } catch (error) {
        console.log(error)
        return res.status(400).send(error)
    }
}