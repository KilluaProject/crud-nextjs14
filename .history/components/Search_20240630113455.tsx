import React from 'react'
import { IoSearch } from 'react-icons/io5'

const Search = () => {
  return (
    <div className='relative flex flex-1'>
        <input
        className='w-full border border-gray-200 py-2 pl-10 text-sm outline-2 rounded-sm'
        type="text" />

        <IoSearch/>

    </div>
  )
}

export default Search