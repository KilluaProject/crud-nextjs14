import CreateForm from '@/components/CreateForm'
import React from 'react'

const CreateContact = () => {
  return (
    <div className=' max-w-4xl mx-auto mt-5'>
      <h1 className='text-4xl mx-auto'>
        Add New Data 
      </h1>
        <CreateForm/>
    </div>
  )
}

export default CreateContact