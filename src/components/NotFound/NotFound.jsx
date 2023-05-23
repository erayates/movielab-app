import React from 'react'
import '../../styles/globals.css'

const NotFound = ({type}) => {
  return (
    <div className='not__found'>
          <h1 className='not__found-title'>No {type} Found!</h1>
          <p className='not__found-subtitle'>We couldn't find any {type} for this movie.</p>
    </div>
  )
}

export default NotFound