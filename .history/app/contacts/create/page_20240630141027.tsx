import CreateForm from '@/components/CreateForm'
import React from 'react'

const CreateContact = () => {
  return (
    <div className='max-w-1xl m-auto my-10 '>
      <h1 className='text-4xl text-center'>
        Add New Data 
      </h1>
        <CreateForm/>
    </div>
  )
}

export default CreateContact