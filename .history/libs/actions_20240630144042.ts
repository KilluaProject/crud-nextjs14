"use server"


import {z} from "zod"
import {prisma} from "@/libs/prisma"

const ContactSchema = z.object({
    name: z.string().min(6),
    phone: z.string().min(10),
    email: z.string().min(5),
})

export const saveContact = async(formData: FormData) => {
    const ValidatedFields = ContactSchema.safeParse(Object.fromEntries(formData.entries()));

    if(!ValidatedFields.success) {
        return {
            Error: ValidatedFields.error.flatten().fieldErrors
        }
    }
    try {
        await prisma.contact.create({
            data: {
                name: ValidatedFields.data.name,
                phone: ValidatedFields.data.phone,
                email: ValidatedFields.data.email
            }
        })
    }   catch(error) {

    }
}