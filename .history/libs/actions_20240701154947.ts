"use server"


import {z} from "zod"
import { prisma } from "@/libs/prisma"
import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"

const ContactSchema = z.object({
    name: z.string().min(6),
    phone: z.string().max(13),
    email: z.string().min(5),
})

export const saveContact = async(prevState: any, formData: FormData) => {
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
        return {message: "Failed to Create Contact"}
    }
    revalidatePath("/contacts");
    redirect("/contacts")
}

export const updateContact = async (
    id: string,
    prevSate: any,
    formData: FormData
  ) => {
    const validatedFields = ContactSchema.safeParse(
      Object.fromEntries(formData.entries())
    );
  
    if (!validatedFields.success) {
      return {
        Error: validatedFields.error.flatten().fieldErrors,
      };
    }
  
    try {
      await prisma.contact.update({
        data: {
          name: validatedFields.data.name,
          phone: validatedFields.data.phone,
          email: validatedFields.data.email,
        },
        where: { id },
      });
    } catch (error) {
      return { message: "Failed to update contact" };
    }
  
    revalidatePath("/contacts");
    redirect("/contacts");
  };


  export const deleteContact = async (
    id: string,
  ) => {
  
    try {
      await prisma.contact.delete({
        where: { id },
      });
    } catch (error) {
      return { message: "Failed to update contact" };
    }
  
    revalidatePath("/contacts");
  };