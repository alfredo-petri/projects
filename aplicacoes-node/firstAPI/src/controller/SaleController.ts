import { Request, Response } from "express"
import { prisma } from "../database/prisma"
import { Product } from "@prisma/client"

export const createSale = async (req: Request, res: Response) => {
    const { products, userSellerId } = req.body
    const { id } = req.user

    try {
        const productsByDatabase = await prisma.product.findMany({
            where: {
                id: { in: products.map((product: Product) => product.id) },
            },
        })

        const productAmount = productsByDatabase.map((product) => {
            const { id, name, price } = product
            const amount = products.find((p: Product) => p.id == product.id).amount

            return {
                id,
                name,
                price,
                amount,
            }
        })

        let value = 0
        for (const product of productAmount) {
            value += product.price * parseInt(product.amount)
        }

        if (id === userSellerId) {
            return res.status(400).json({ message: "O ID do vendedor e o ID do comprador devem ser diferentes" })
        }

        const sale = await prisma.sale.create({
            data: {
                total_value: value,
                Seller: { connect: { id: userSellerId } },
                Buyer: { connect: { id } },
                SaleProduct: {
                    create: productAmount.map((product) => ({
                        Product: { connect: { id: product.id } },
                        amount_sale: product.amount,
                    })),
                },
            },
            include: {
                SaleProduct: true,
            },
        })

        productAmount.map(async (product) => {
            await prisma.product.updateMany({
                where: { id: product.id },
                data: {
                    amount: { decrement: parseInt(product.amount) },
                },
            })
        })

        return res.status(201).json({ sale, message: "Compra realizada com sucesso." })
    } catch (error) {
        console.log(error)
    }
}

export const listSales = async (req: Request, res: Response) => {
    const sales = await prisma.sale.findMany({
        select: {
            id: true,
            total_value: true,
            SaleProduct: {
                select: {
                    Product: {
                        select: {
                            id: true,
                            name: true,
                            price: true,
                        },
                    },
                    amount_sale: true,
                },
            },
            Seller: {
                select: {
                    id: true,
                    name: true,
                },
            },
            Buyer: {
                select: {
                    id: true,
                    name: true,
                },
            },
            created_at: true,
        },
    })

    return res.status(200).json(sales)
}

export const listSalesByBuyer = async (req: Request, res: Response) => {
    const { id } = req.user
    const sales = await prisma.sale.findMany({
        where: { buyerId: id },
        select: {
            id: true,
            total_value: true,
            SaleProduct: {
                select: {
                    Product: {
                        select: {
                            id: true,
                            name: true,
                            price: true,
                        },
                    },
                    amount_sale: true,
                },
            },
            Seller: {
                select: {
                    id: true,
                    name: true,
                },
            },
            Buyer: {
                select: {
                    id: true,
                    name: true,
                },
            },
            created_at: true,
        },
    })

    return res.status(200).json(sales)
}

export const listSalesBySeller = async (req: Request, res: Response) => {
    const { id } = req.user
    const sales = await prisma.sale.findMany({
        where: { sellerId: id },
        select: {
            id: true,
            total_value: true,
            SaleProduct: {
                select: {
                    Product: {
                        select: {
                            id: true,
                            name: true,
                            price: true,
                        },
                    },
                    amount_sale: true,
                },
            },
            Seller: {
                select: {
                    id: true,
                    name: true,
                },
            },
            Buyer: {
                select: {
                    id: true,
                    name: true,
                },
            },
            created_at: true,
        },
    })

    return res.status(200).json(sales)
}

