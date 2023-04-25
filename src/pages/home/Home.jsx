import React, { useEffect,useState } from 'react'
import './style.css'
import HeroBanner from './HeroBanner/HeroBanner'
import Loading from '../../components/Loading/Loading'
import Trending from './Trending'
import { useDispatch, useSelector } from 'react-redux'
import { getTrending } from '../../store/homeSlicer'


function Home() {
  return (
    <>  
        <HeroBanner/>
        <Trending/>
    </>
  )
}

export default Home