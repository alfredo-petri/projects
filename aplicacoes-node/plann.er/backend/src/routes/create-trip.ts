import { FastifyInstance } from "fastify"
import { ZodTypeProvider } from "fastify-type-provider-zod"
import { z } from "zod"
import { prisma } from "../lib/prisma"
import dayjs from "dayjs"

export async function createTrip(app: FastifyInstance) {
    app.withTypeProvider<ZodTypeProvider>().post(
        "/trips",
        {
            schema: {
                body: z.object({
                    destination: z.string().min(4),
                    starts_at: z.coerce.date(),
                    ends_at: z.coerce.date(),
                    owner_name: z.string(),
                    owner_email: z.string().email(),
                }),
            },
        },
        async (req) => {
            const { destination, ends_at, starts_at, owner_name, owner_email } = req.body

            if (dayjs(starts_at).isBefore(new Date())) {
                throw new Error("invalid trip start date")
            }

            if (dayjs(ends_at).isBefore(starts_at)) {
                throw new Error("invalid trip end date")
            }

            const trip = await prisma.trip.create({
                data: { destination, ends_at, starts_at },
            })
            return {
                tripId: trip.id,
            }
        }
    )
}


//todo continuar no min 48