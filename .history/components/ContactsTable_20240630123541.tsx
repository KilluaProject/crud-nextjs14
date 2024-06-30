import { getContacts } from "@/libs/data"

const ContactsTable = async () => {
    const contactc = await getContacts()
  return (
    <table className="w-full text-sm text-left text-gray-500">
        <thead className="text-sm text-gray-700 uppercase bg-gray-100">
            <tr>
                <th className="py-3 px-6">#</th>
                <th className="py-3 px-6">Name</th>
                <th className="py-3 px-6">Phone Number</th>
                <th className="py-3 px-6">Email</th>
                <th className="py-3 px-6">Created At</th>
                <th className="py-3 px-6">Action</th>
            </tr>
        </thead>
        <tbody>
            
            <tr>
                <td className="py-3 px-6"></td>
                <td className="py-3 px-6"></td>
                <td className="py-3 px-6"></td>
                <td className="py-3 px-6"></td>
                <td className="py-3 px-6"></td>
                <td className="py-3 px-6"></td>
            </tr>
        </tbody>
    </table>
  )
}

export default ContactsTable