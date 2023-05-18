import React from 'react'

const SearchBar = () => {
  return (
    <section className='ml-96 p-16 pb-0'>
        <form>
            <input 
                type='text'
                className='w-full outline:none focus:outline-none text-[14px] font-normal rounded-xl py-3 px-4 bg-transparent border-2 border-white/50 placeholder:text-white/50 text-white/50'
                placeholder='Press ENTER to search...'
            >
                
            </input>
        </form>
    </section>
  )
}

export default SearchBar