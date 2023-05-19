import React, { useEffect,useState } from 'react'
import './style.css'
import HeroBanner from './HeroBanner/HeroBanner'
import Loading from '../../components/Loading/Loading'
import Trending from './Trending'
import { useDispatch, useSelector } from 'react-redux'
import { getTrending } from '../../store/homeSlicer'
import Popular from './Popular'
import TopRated from './TopRated'
import VideoPopup from '../../components/VideoPopup'

function Home() {
  
  const {videoPopupOpen} = useSelector((state) => state.details)


return (
  <>

    <section className= 'relative ml-[5rem] w-7/8 pt-16 pl-8 pr-8 md:w-auto  md:ml-24 lg:ml-96 md:p-16 '>  
      <HeroBanner/>
      <Trending/>
      <Popular/>
      <TopRated/>
      {videoPopupOpen && <VideoPopup />}
    </section>
  </>
  )
}

export default Home