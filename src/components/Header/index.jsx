import React, { useCallback, useState } from 'react'
import { Link } from 'react-router-dom'

import {AiOutlineSearch, AiOutlineClose} from 'react-icons/ai'
import {HiOutlineBars3BottomLeft} from 'react-icons/hi2'

import './styles.css'
import Navigation from './Navigation'
import Search from './Search'

function Header() {
  const [mobileMenu, setMobileMenu] = useState(false)
  const [searchBar, setSearchBar] = useState(false)

  const settingSearchBar = () => {
    setSearchBar(false)
  }




  return (
    <>
       {searchBar && <Search setSearchBar={settingSearchBar} />}
    <header className='header relative bg-zinc-100'>
      
      <nav className='md:container mx-auto flex justify-between items-center relative'>
        <div className='logo pb-3 mx-4'>
          <img src='/logo2.png' alt='logo' className='logo w-[150px] mx-auto block mt-5'/>
        </div>
        <div className='menu'>
          <ul className='md:flex'>
            <div className='menu-list hidden md:flex'>
              <Navigation/>
            </div>
            <div className='search flex'>
              <li className='mr-5'>
                <AiOutlineSearch className='text-2xl' onClick={() => setSearchBar(true && !searchBar || false)}/>

              </li>
              <li className='mr-5'>
                {mobileMenu && <AiOutlineClose className='text-2xl cursor-pointer' onClick={() => setMobileMenu(false)}/> }
                {!mobileMenu && <HiOutlineBars3BottomLeft className='text-2xl cursor-pointer' onClick={() => setMobileMenu(true)}/>}
              </li>
            </div>
          </ul>
        </div>
        <div className='mobile-menu flex flex-col md:hidden fixed top-[81px] bg-zinc-50 w-full z-30'>
          {mobileMenu && 
            <ul>
              <Navigation mobileMenu={mobileMenu}/>
            </ul>
          }
        </div>
      </nav>
    </header>
 
    </>
  )
}

export default Header