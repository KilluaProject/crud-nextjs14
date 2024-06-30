import React from 'react'
import { saveContact } from '@/libs/actions'
import { useFormState } from 'react-dom'

const CreateForm = () => {
  const [state, formAction] = useFormState(saveContact, null)

  return (
    <div className='bg-white drop-shadow-sm rounded-sm p-10'>
      <form className='flex flex-col gap-5' action={formAction}>
        <div>
          <label htmlFor="name" className='block text-sm font-medium text-gray-900'>Full Name</label>
          <input type="text" name='name' id='name' placeholder='Full Name...' className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-3' />
          <div id='name-error' aria-live='polite' aria-atomic='true'>
            <p>{state?.Error?.name}</p>
          </div>
        </div>

        <div>
          <label htmlFor="phone" className='block text-sm font-medium text-gray-900'>Phone Number</label>
          <input type="text" name='phone' id='phone' placeholder='Phone Number ...' className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-3' />
        </div>

        <div>
          <label htmlFor="email" className='block text-sm font-medium text-gray-900'>Email Address</label>
          <input type="email" name='email' id='email' placeholder='Enter your email ...' className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-3' />
        </div>

        <button type='submit' className='text-white bg-blue-500 hover:bg-blue-800 font-medium rounded-sm text-sm w-full py-3 px-5'>Submit</button>
      </form>
    </div>
  )
}

export default CreateForm