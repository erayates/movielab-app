import { useSelector } from 'react-redux'

import HeroBanner from './HeroBanner/HeroBanner'
import Trending from './Trending'

import Popular from './Popular'
import TopRated from './TopRated'
import VideoPopup from '../../components/VideoPopup'

import '../../styles/globals.css'
import './style.css'


function Home() {
  const { videoPopupOpen } = useSelector((state) => state.details)
  
  return (
    <section className='home'>
      <HeroBanner />
      <Trending />
      <Popular />
      <TopRated />
      {videoPopupOpen && <VideoPopup />}
    </section>
  )
}

export default Home