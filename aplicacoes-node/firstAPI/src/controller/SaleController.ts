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

        return res.json(productsByDatabase)
    } catch (error) {
        console.log(error)
    }
}