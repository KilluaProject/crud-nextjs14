"use server"

import {z} from "zod"

const ContactSchema = z.object({
    name: z.string().min(6),
    phone: z.string().min(10),
    email: z.string().min(5),
})

export const saveContact = async(formData: FormData) => {
    const data = Object.fromEntries(formData.entries());
    console.log(data)
}