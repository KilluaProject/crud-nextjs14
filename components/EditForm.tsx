'use client'

import React from 'react'
import { saveContact } from '@/libs/actions'
import { useFormState } from 'react-dom'
import { SubmitButton } from './Button'
import type { Contact } from '@prisma/client'
import { updateContact } from '@/libs/actions'

const UpdateForm = ({contact}:{contact:Contact}) => {
  const UpdateContactWithId = updateContact.bind(null, contact.id);
  const [state, formAction] = useFormState(UpdateContactWithId, null);
  

  return (
    <div className='bg-white drop-shadow-sm rounded-sm p-10'>
      <form className='flex flex-col gap-5' action={formAction}>
        <div>
          <label htmlFor="name" className='block text-sm font-medium text-gray-900'>Full Name</label>
          <input defaultValue={contact.name} type="text" name='name' id='name' placeholder='Full Name...' className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-3' />
          <div id='name-error' aria-live='polite' aria-atomic='true'>
            <p className='mt-2 text-sm text-red-500'>{state?.Error?.name}</p>
          </div>
        </div>

        <div>
          <label htmlFor="phone" className='block text-sm font-medium text-gray-900'>Phone Number</label>
          <input defaultValue={contact.phone} type="text" name='phone' id='phone' placeholder='Phone Number ...' className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-3' />
          <div id='phone-error' aria-live='polite' aria-atomic='true'>
            <p className='mt-2 text-sm text-red-500'>{state?.Error?.phone}</p>
          </div>
        </div>

        <div>
          <label htmlFor="email" className='block text-sm font-medium text-gray-900'>Email Address</label>
          <input defaultValue={contact.email} type="email" name='email' id='email' placeholder='Enter your email ...' className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-3' />
          <div id='email-error' aria-live='polite' aria-atomic='true'>
            <p className='mt-2 text-sm text-red-500'>{state?.Error?.email}</p>
          </div>
        </div>
        <div id='message-error' aria-live='polite' aria-atomic='true'>
            <p className='mt-2 text-sm text-red-500'>{state?.message}</p>
        </div>
        <SubmitButton label='update'/>
      </form>
    </div>
  )
}

export default UpdateForm