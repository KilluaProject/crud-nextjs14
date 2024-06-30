import CreateForm from '@/components/CreateForm'
import React from 'react'

const CreateContact = () => {
  return (
    <div className='max-w-md m-auto my-10 flex flex-col gap-10 '>
      <h1 className='text-4xl text-center uppercase font-semibold'>
        Add New Data 
      </h1>
        <CreateForm/>
    </div>
  )
}

export default CreateContact