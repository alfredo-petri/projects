import { Request, Response } from "express"
import { prisma } from "../database/prisma"

export const createAccess = async (req: Request, res: Response) => {
    const { name } = req.body

    const access = await prisma.access.create({
        data: { name },
    })

    return res.json(access)
}

export const listAccess = async (req: Request, res: Response) => {
    const listAccess = await prisma.access.findMany()

    return res.json(listAccess)
}
