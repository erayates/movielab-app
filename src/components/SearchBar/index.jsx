import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import slugify from 'slugify'

import '../../styles/globals.css'

const SearchBar = () => {
    const [searchInput, setSearchInput] = useState('')
    const [mediaType, setMediaType] = useState('movie')

    const navigate = useNavigate();
    const handleChangeInput = (event) => {
        if (event.key == 'Enter') {
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

    const { videoPopupOpen } = useSelector((state) => state.details)
    return (
        <section className={videoPopupOpen ? 'absolute w-[calc(100%-24rem)] top-0 left-[24rem] p-8 lg:p-16 lg:pb-0 pb-0 z-0' : 'ml-20 lg:ml-96 lg:p-16 lg:pb-0 p-8 pb-0 z-0'}>
            <div className="flex">
                <select
                    className="search-bar-select"
                    onChange={handleMediaSelect}
                    defaultValue={mediaType}
                >
                    <option value='movie'>
                        Movie
                    </option>
                    <option value='tv'>
                        TV Shows
                    </option>

                </select>

                <div className="search-bar-input-container">
                    <input
                        type="search"
                        className="search-bar-input"
                        placeholder="Search"
                        required
                        onChange={(e) => handleSearch(e)}
                        onKeyUp={handleChangeInput}
                    />
                </div>
            </div>
        </section>
    )
}

export default SearchBar