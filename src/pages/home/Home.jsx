import React, { useEffect,useState } from 'react'
import './style.css'
import HeroBanner from './HeroBanner/HeroBanner'
import Loading from '../../components/Loading/Loading'
import Trending from './Trending'
import { useDispatch, useSelector } from 'react-redux'
import { getTrending } from '../../store/homeSlicer'
import Popular from './Popular'
import TopRated from './TopRated'


function Home() {
  
return (
    <section className='relative ml-96 p-16'>  
      <HeroBanner/>
      <Trending/>
      <Popular/>
      <TopRated/>
    </section>
  )
}

export default Home