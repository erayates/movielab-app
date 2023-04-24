import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import {AiOutlineSearch, AiOutlineClose} from 'react-icons/ai'
import {HiOutlineBars3BottomLeft} from 'react-icons/hi2'

import './styles.css'
import Navigation from './Navigation'

function Header() {
  const [mobileMenu, setMobileMenu] = useState(false)
  const [searchBar, setSearchBar] = useState(false)


  const openSearchBar = () => {
    setSearchBar(true)
  }    


  return (
    <>
    <header className='header relative bg-zinc-100'>
      <nav className='md:container mx-auto flex justify-between items-center relative'>
        <div className='logo pb-3'>
          <img src='./logo2.png' alt='logo' className='logo w-[150px] mx-auto block mt-5'/>
        </div>
        <div className='menu'>
          <ul className='md:flex'>
            <div className='menu-list hidden md:flex'>
              <Navigation/>
            </div>
            <div className='search flex'>
              <li className='mr-5'>
                <AiOutlineSearch className='text-2xl' onClick={openSearchBar}/>
              </li>
              <li className='mr-5'>
                {mobileMenu && <AiOutlineClose className='text-2xl' onClick={() => setMobileMenu(false)}/> }
                {!mobileMenu && <HiOutlineBars3BottomLeft className='text-2xl md:hidden' onClick={() => setMobileMenu(true)}/>}
              </li>
            </div>
          </ul>
        </div>
        <div className='mobile-menu flex flex-col md:hidden absolute top-[82px] bg-zinc-50 w-full z-20'>
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