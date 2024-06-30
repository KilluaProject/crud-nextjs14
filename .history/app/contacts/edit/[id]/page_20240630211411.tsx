import { getContactsById } from '@/libs/data'
import UpdateForm from '@/components/EditForm'
import React from 'react'

const UpdateContact = () => {
  return (
    <div className='max-w-md m-auto my-10 flex flex-col gap-10 '>
      <h1 className='text-4xl text-center uppercase font-semibold'>
        Update Contact
      </h1>
       <UpdateForm/>
    </div>
  )
}

export default UpdateContact