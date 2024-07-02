import { Request, Response } from "express"
import { prisma } from "../database/prisma"


export const createUser = async (request: Request, response: Response) => {
    const { name, email, password } = request.body
    const user = await prisma.user.create({
        data: { name, email, password }
        
    })

    return response.json(user)
}