import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import slugify from 'slugify'

const SearchBar = () => {
    const [searchInput, setSearchInput] = useState('')
    const navigate = useNavigate();
    const handleChangeInput = (event) => {
        if(event.key == 'Enter'){
            navigate(`/search/${slugify(searchInput)}`);
        }
    }
    const handleSearch = (e) => {
        setSearchInput(e.target.value)
    }
    return (
        <section className='ml-96 p-16 pb-0'>
            <input
                type='text'
                className='w-full outline:none focus:outline-none text-[14px] font-normal rounded-xl py-3 px-4 bg-transparent border-2 border-white/50 placeholder:text-white/50 text-white/50'
                placeholder='Press ENTER to search...'
                onChange={(e) => handleSearch(e)}
                onKeyUp={handleChangeInput}
            >

            </input>
        </section>
    )
}

export default SearchBar