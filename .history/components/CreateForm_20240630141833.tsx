import React from 'react'

const CreateForm = () => {
  return (
    <div className='bg-white drop-shadow-sm rounded-sm p-10'>
      <form className='flex flex-col gap-5' action="">
        <div>
          <label htmlFor="name" className='block text-sm font-medium text-gray-900'>Full Name</label>
          <input type="text" name='name' id='name' placeholder='Full Name...' className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-3' />
        </div>

        <div>
          <label htmlFor="phone" className='block text-sm font-medium text-gray-900'>Phone Number</label>
          <input type="text" name='phone' id='phone' placeholder='Phone Number ...' className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-3' />
        </div>

        <div>
          <label htmlFor="email" className='block text-sm font-medium text-gray-900'>Full Name</label>
          <input type="email" name='name' id='name' placeholder='Full Name...' className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-3' />
        </div>
      </form>
    </div>
  )
}

export default CreateForm