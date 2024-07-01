import { CreateButton, SubmitButton } from '@/components/Button'
import ContactsTable from '@/components/ContactsTable'
import Search from '@/components/Search'


const ContactsPage = () => {
  return (
    <div className='max-w-screen-lg mx-auto mt-5'>
        <div className='flex flex-1 gap-2 mb-3'>
            <Search/>
            <SubmitButtonButton/>
        </div>
        <ContactsTable/>
    </div>
  )
}

export default ContactsPage