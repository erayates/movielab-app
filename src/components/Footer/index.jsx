import React from 'react'
import './styles.css'

function Footer() {
  return (
    
    <footer className='footer bg-white'>
      <div className='container mx-auto p-10'>
        <div className='flex justify-center mb-5'>
         <ul className='footer-menu flex'>
            <li className='footer-menu-item mr-3'>
              <a href='#' className='footer-menu-link text-[12px]'>Terms Of Use</a>
            </li>
            <li className='footer-menu-item mr-3'>
              <a href='#' className='footer-menu-link text-[12px]'>Privacy Policy</a>
            </li>

            <li className='footer-menu-item mr-3'>
              <a href='#' className='footer-menu-link text-[12px]'>Contact Us</a>
            </li>
            <li className='footer-menu-item'>
              <a href='#' className='footer-menu-link text-[12px]'>FAQ</a>
            </li>
         </ul>
     
        </div>
        <div className=''>
          <p className='footer-text text-sm text-center font-'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero sed repellat voluptas magni aliquid adipisci id fuga ut. Repudiandae magnam enim tempore impedit ratione inventore autem harum voluptatibus quae, mollitia eius accusantium doloremque facere expedita nemo iste nulla id eligendi quo? Officia dicta laborum perspiciatis maiores est, culpa sit iste!
          </p>
        </div>
      </div>
    </footer>
 
  )
}

export default Footer