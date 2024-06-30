import { getContacts } from "@/libs/data"
import { formatDate } from "@/libs/utils"
import { DeleteButton, EditButton } from "./Button"

const ContactsTable = async () => {
    const contacts = await getContacts()
    return (
        <table className="w-full text-sm text-left text-gray-500">
            <thead className="text-sm text-gray-700 uppercase bg-gray-100">
                <tr>
                    <th className="py-3 px-6">No</th>
                    <th className="py-3 px-6">Name</th>
                    <th className="py-3 px-6">Phone Number</th>
                    <th className="py-3 px-6">Email</th>
                    <th className="py-3 px-6">Created At</th>
                    <th className="py-3 px-6">Action</th>
                </tr>
            </thead>
            <tbody className="">
                {contacts.map((contact, index) => (
                    <tr className="border border-b" key={contact.id}>
                        <td className="py-3 px-6">{index + 1}.</td>
                        <td className="py-3 px-6">{contact.name}</td>
                        <td className="py-3 px-6">{contact.phone}</td>
                        <td className="py-3 px-6">{contact.email}</td>
                        <td className="py-3 px-6">{formatDate(contact.createdAt.toString())}</td>
                        <td className="flex gap-2 justify-center items-end py-3 ">
                            <EditButton/>
                            <DeleteButton/>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

export default ContactsTable
