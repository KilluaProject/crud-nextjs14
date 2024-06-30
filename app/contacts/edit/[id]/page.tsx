import { getContactsById } from '@/libs/data'
import UpdateForm from '@/components/EditForm'
import React from 'react'
import { notFound } from 'next/navigation'

const UpdateContact = async ({params} : {params:{id:string}}) => {
    const id = params.id
    const contact = await getContactsById(id);

    if (!contact) {
        notFound();
    }
  return (
    <div className='max-w-md m-auto my-10 flex flex-col gap-10 '>
      <h1 className='text-4xl text-center uppercase font-semibold'>
        Update Contact
      </h1>
       <UpdateForm contact={contact}/>
    </div>
  )
}

export default UpdateContact