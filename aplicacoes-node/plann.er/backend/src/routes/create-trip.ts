import { FastifyInstance } from "fastify"
import { ZodTypeProvider } from "fastify-type-provider-zod"
import { z } from "zod"
import { prisma } from "../lib/prisma"
import dayjs from "dayjs"
import { getMailClient } from "../lib/mail"
import nodemailer from "nodemailer"

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

            const mail = await getMailClient()

            const message = await mail.sendMail({
                from: {
                    name: "Equipe plann.er",
                    address: "contato@plann.er.com",
                },
                to: {
                    name: owner_name,
                    address: owner_email,
                },
                subject: "Email de confirmação de viagem",
                html: `<p>Teste do envio de e-mail</p`,
            })

            console.log(nodemailer.getTestMessageUrl(message))

            return {
                tripId: trip.id,
            }
        }
    )
}