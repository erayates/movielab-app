import React from 'react'
import { Link } from 'react-router-dom'

import './styles.css'

function Header() {
  return (
    <>
  
    <header className='header relative bg-zinc-100'>
    
      <nav className='container mx-auto flex justify-between items-center'>
        <div className='logo pb-3'>
          <img src='./logo2.png' alt='logo' className='logo w-[150px] mx-auto block mt-5'/>
        </div>
        <div className='menu'>
          <ul className='flex'>
            <li className='mr-5'>
              <Link to='/'>Home</Link>
            </li>
            <li className='mr-5'>
              <Link to='/movies'>Movies</Link>
            </li>
            <li className='mr-5'>
              <Link to='/tv'>TV Shows</Link>
            </li>
            <li className='mr-5'>
              <Link to='/people'>People</Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
    </>
  )
}

export default Header