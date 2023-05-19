import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import slugify from 'slugify'

const SearchBar = () => {
    const [searchInput, setSearchInput] = useState('')
    const [mediaType, setMediaType] = useState('movie')

    const navigate = useNavigate();
    const handleChangeInput = (event) => {
        if(event.key == 'Enter'){
            navigate(`/search/${mediaType}/${slugify(searchInput)}`);
            setSearchInput('');
        }
    }
    const handleSearch = (e) => {
        setSearchInput(e.target.value)
    }

    const handleMediaSelect = (e) => {
        setMediaType(e.target.value)
    }

    const {videoPopupOpen} = useSelector((state) => state.details)
    return (
        <section className={videoPopupOpen ? 'absolute w-[calc(100%-24rem)] top-0 left-[24rem] p-16 pb-0 z-30' : 'ml-96 p-16 pb-0'}>
            <input
                type='text'
                value={searchInput}
                className='w-3/4 outline:none focus:outline-none text-[14px] font-normal rounded-xl py-3 px-4 bg-white placeholder:text-[#151515] text-[#151515]'
                placeholder='Press ENTER to search...'
                onChange={(e) => handleSearch(e)}
                onKeyUp={handleChangeInput}
            >
            </input>
            <select 
                className='w-[23%] px-4 py-3 rounded-xl outline-none text-[#151515] ml-5' 
                onChange={handleMediaSelect}
                defaultValue={mediaType}
            >
                <option value="movie">Movies</option>
                <option value="tv">TV Shows</option>
            </select>
        </section>
    )
}

export default SearchBar