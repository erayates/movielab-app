import React, { useState } from 'react'




import Navigation from './Navigation'


function Header() {

  const [searchBar, setSearchBar] = useState(false)

  const settingSearchBar = () => {
    setSearchBar(false)
  }
  return (
    <>
 
      <header className='header fixed w-20 lg:w-96 h-full bg-[#151515] '>
        <Navigation/>
      </header>

    </>
  )
}

export default Header