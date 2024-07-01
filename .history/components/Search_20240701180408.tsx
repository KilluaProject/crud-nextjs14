"use client"
import React from 'react'
import { IoSearch } from 'react-icons/io5'
import { useSearchParams, useRouter, usePathname } from 'next/navigation'

const Search = () => {

    const searchParams = useSearchParams();
    const pathname = usePathname()
    const {replace} =  useRouter()

    const handleSearch = (term: string) =>  {
      console.log(term);
      const params = new URLSearchParams(searchParams);

      if (term) {
        params.set("query", term)
      } else {
        params.delete("query")
      }
     replace(`${pathname}?${params.toString()}`)
    }
    
  return (
    <div className='relative flex flex-1'>
        <input
        placeholder='Search...'
        className='w-full border border-gray-200 py-2 pl-10 text-sm outline-2 rounded-sm'
        type="text"
        onChange={(e) => handleSearch(e.target.value)}/>
        <IoSearch className='absolute left-3 top-2 h-5 w-5 text-gray-500'/>
        
    </div>
  )
}

export default Search