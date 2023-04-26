import {useEffect, useState, useCallback} from 'react'
import { useSelector,useDispatch} from 'react-redux'
import './style.css'

import { CircularProgressbar, buildStyles } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'


import {BsFillArrowLeftCircleFill,BsFillArrowRightCircleFill} from 'react-icons/bs'

import { getTrending } from '../../../store/homeSlicer'

import SwitchTabs from '../SwitchTabs'
import dayjs from 'dayjs'
import Carousel from '../../../components/Carousel/Carousel'

function Trending() {
    
    const [trendingMovies, setTrendingMovies] = useState(null)
    const [dateRange, setDateRange] = useState('day')
    const dispatch = useDispatch();


    const {trending} = useSelector((state) => state.home)
    const {movieGenres} = useSelector((state) => state.home)
 

   useEffect(() => {
        setTrendingMovies(trending.results)
   },[trending])


    useEffect(() => {
        dispatch(getTrending(dateRange))
   },[dateRange])


  return (
    <div className='container mx-auto trending relative'>
        <div className='trending-header flex justify-between mr-5 mb-3'>
            <h3 className='text-white text-[20px] inline-block'>Trending Movies</h3>
            <SwitchTabs setDateRange={setDateRange} dateRange = {dateRange}/>
        </div>
            <Carousel data = {trendingMovies}/>
    </div>
  )
}

export default Trending