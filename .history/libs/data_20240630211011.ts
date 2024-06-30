import { prisma } from "@/libs/prisma"

export const getContacts = async () => {
    try {

        const contatcs = await prisma.contact.findMany();
        return contatcs;
        
    } catch (error) {
        throw new Error (" Failed to Fecth data")
    }
}

export const getContactsById = async (id:string) => {
    try {

        const contact = await prisma.contact.findUnique({where:{id}});
        return contact;
        
    } catch (error) {
        throw new Error (" Failed to Fecth data")
    }
}