import { prisma } from "@/libs/prisma"

export const getContacts = async () => {
    try {

        const contatcs = await prisma.contact.findMany();
        
    } catch (error) {
        
    }
}