import {useEffect, useState, useCallback} from 'react'
import { useSelector,useDispatch} from 'react-redux'
import './style.css'

import {BsFillArrowLeftCircleFill,BsFillArrowRightCircleFill} from 'react-icons/bs'
import { useFetch } from '../../../hooks/useFetch'
import { getTrending } from '../../../store/homeSlicer'
import SwitchTabs from '../SwitchTabs'

function Trending() {
    
    const [trendingMovies, setTrendingMovies] = useState(null)
    const [dateRange, setDateRange] = useState('day')
    const dispatch = useDispatch();
    
    const carousel = document.querySelector('.carousel')
    const {trending} = useSelector((state) => state.home)

 

   useEffect(() => {
        setTrendingMovies(trending.results)
   },[trending])


    useEffect(() => {
        dispatch(getTrending(dateRange))
   },[dateRange])

  
  
    const scrollLeft = () => {
        carousel.scrollLeft -= 200
    }
    const scrollRight = () => {
        carousel.scrollLeft += 200
    }

  return (
    <div className='container mx-auto trending relative'>
        <h3 className='text-white text-[20px]'>Trending Movies</h3>
        <SwitchTabs dateRange={dateRange}/>
        <BsFillArrowLeftCircleFill className='text-black text-opacity-50 text-[30px] hidden md:block cursor-pointer z-30 absolute left-[2px] top-[calc(50%-7.5px)]' onClick={scrollLeft}/>
        <div className='carousel flex overflow-x-auto scroll-smooth '>
         
            {trendingMovies?.map((movie) => {
                return (
                    <div className='flex-grow-0 flex-shrink-0 w-[150px] h-[250px]  md:w-[200px] md:h-[300px] bg-white rounded-lg my-2 mr-5' key={movie.id}>
                        <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt="" className='w-full h-full object-cover rounded-lg'/>
                    </div>
                )
            })}
      
      
        </div>
        <BsFillArrowRightCircleFill className='text-black text-opacity-50 text-[30px] hidden md:block cursor-pointer absolute right-[2px] top-[calc(50%-7.5px)]' onClick={scrollRight}/>
    </div>
  )
}

export default Trending