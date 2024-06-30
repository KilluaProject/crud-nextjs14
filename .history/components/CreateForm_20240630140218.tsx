import React from 'react'

const CreateForm = () => {
  return (
    <div>
      <form action="">
        <div>
          <label htmlFor="name" className='block text-sm font-medium text-gray-900'>Full Name</label>
          <input type="text" name='name' id='name' placeholder='Full Name...' />
        </div>
      </form>
    </div>
  )
}

export default CreateForm