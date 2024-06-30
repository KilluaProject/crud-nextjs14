import { CreateButton } from '@/components/Button'
import ContactsTable from '@/components/ContactsTable'
import Search from '@/components/Search'


const ContactsPage = () => {
  return (
    <div className='max-w-screen-lg mx-auto mt-5'>
        <div className='flex flex-1'>
            <Search/>
            <CreateButton/>
        </div>
        <ContactsTable/>
    </div>
  )
}

export default ContactsPage