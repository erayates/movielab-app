import React from 'react'

const NotFound = ({type}) => {
  return (
    <div className='recommendations-not-found flex flex-col text-center items-center justify-center mt-20'>
          <h1 className='text-[24px] text-white font-bold uppercase'>No {type} Found!</h1>
          <p className='text-[#888888] text-[14px] mt-2'>We couldn't find any {type} for this movie.</p>
    </div>
  )
}

export default NotFound