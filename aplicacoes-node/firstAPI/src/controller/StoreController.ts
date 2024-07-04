import { Request, Response } from "express"
import { prisma } from "../database/prisma"

export const createStore = async (req: Request, res: Response) => {
    const { name } = req.body
    const { userId } = req.params

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
