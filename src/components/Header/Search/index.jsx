import React from 'react'
import { AiOutlineClose, AiOutlineSearch } from 'react-icons/ai'

function Search({setSearchBar}) {

  return (
    <div className='search-bar w-full h-full absolute flex justify-center items-center'>
        <AiOutlineClose className='text-2xl text-white cursor-pointer absolute right-[15px] top-[15px] z-30' onClick={setSearchBar} />
        <div className='relative z-30 w-3/4'>
            <input type='text' placeholder='Search' className=' z-30 p-4 w-full rounded-lg outline-none shadow-[0_0_60px_-15px_rgba(255,255,255,0.3)] border-l-2 border-white'/>
            <AiOutlineSearch className='text-2xl z-30 cursor-pointer absolute right-[15px] top-[15px]'/>
        </div>
    </div>
  )
}

export default Search