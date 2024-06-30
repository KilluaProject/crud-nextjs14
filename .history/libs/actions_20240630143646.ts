"use server"

import {z} from "zod"

const ContactSchema = z.object({
    name: z.string().min(6),
    phone: z.string().min(10),
    email: z.string().min(5),
})

export const saveContact = async(formData: FormData) => {
    const ValidatedFields = ContactSchema.safeParse(Object.fromEntries(formData.entries()));

    if (!ValidatedFields.success) {
        return{
            Error: ValidatedFields.error.flatten().fieldErrors
        }
    }
    
}