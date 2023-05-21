import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import './style.css'

import { getTrending } from '../../../store/homeSlicer'
import SwitchTabs from '../SwitchTabs'
import Carousel from '../../../components/Carousel/Carousel'
import '../../../styles/globals.css'

function Trending() {

  const [trendingMovies, setTrendingMovies] = useState(null)
  const [dateRange, setDateRange] = useState('day')
  const dispatch = useDispatch();
  const { trending } = useSelector((state) => state.home)

  useEffect(() => {
    setTrendingMovies(trending.results)
  }, [trending])


  useEffect(() => {
    dispatch(getTrending(dateRange))
  }, [dateRange])


  return (
    <div className='carousel__container'>
      <div className='carousel__header'>
        <div>
          <h3 className="carousel__title">Trending Movies</h3>
          <p className='carousel__subtitle'>List of latest trending movies</p>
        </div>
        <SwitchTabs setDateRange={setDateRange} dateRange={dateRange} />
      </div>
      <Carousel data={trendingMovies} mediaType='movie' />
    </div>
  )
}

export default Trending