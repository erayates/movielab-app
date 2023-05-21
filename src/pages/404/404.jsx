import React from 'react'
import '../../styles/globals.css'
import { Link } from 'react-router-dom'



function Page404() {
  return (
    <section className='ml-96 h-[100vh] flex flex-col items-center justify-center'>
      <h1 className='carousel__title'>404 Not Found!</h1>
      <p className='carousel__subtitle'>The page you are looking for does not exist.</p>
      <Link to='/' className='show-more__btn'>Go Homepage</Link>
 
    </section>
  )
}

export default Page404