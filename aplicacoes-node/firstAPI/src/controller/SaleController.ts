import { Request, Response } from "express";
import { prisma } from "../database/prisma";
import { Product } from "@prisma/client";

export const createSale = async (req: Request, res: Response) => {
    const { products, userSellerId } = req.body
    const { id } = req.user
    
    try {
        const productsByDatabase = await prisma.product.findMany({
            where: {
                id: { in: products.map((product: Product) => product.id)               }
            }
        }) 

        const productAmount = productsByDatabase.map(product => {
            const { id, name, price } = product
            const amount = products.find((p: Product)=> p.id == product.id).amount
            
            return {
                id, name, price, amount 
            }
        })

        let value = 0
        for (const product of productAmount) {
            value += product.price * parseInt(product.amount)
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