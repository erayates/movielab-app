import React from 'react'
import { Link } from 'react-router-dom'

function Navigation({mobileMenu}) {
  return (
    <>
      <li className={mobileMenu && 'py-4 pl-5' || 'mr-5'} >
        <Link to='/'>Home</Link>
      </li>
      <li className={mobileMenu && 'py-4 pl-5' || 'mr-5'}>
        <Link to='/movies'>Movies</Link>
      </li>
      <li className={mobileMenu && 'py-4 pl-5' || 'mr-5'}>
        <Link to='/tv'>TV Shows</Link>
      </li>
      <li className={mobileMenu && 'py-4 pl-5' || 'mr-5'}>
        <Link to='/people'>People</Link>
      </li>
    </>

  )
}

export default Navigation