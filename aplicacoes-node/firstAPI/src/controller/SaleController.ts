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




        return res.json(value)
    } catch (error) {
        console.log(error)
    }
}