import React, { useEffect,useState} from 'react'
import { useSelector } from 'react-redux'
import { CircularProgressbar,buildStyles} from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'
import dayjs from 'dayjs'
import {BsFillArrowLeftCircleFill,BsFillArrowRightCircleFill} from 'react-icons/bs'
import { nanoid } from 'nanoid'
import { useNavigate } from 'react-router-dom'



function Carousel({data}) {
    const navigate = useNavigate();

    const scrollLeft = (e) => {
        e.target.parentNode.parentNode.children[2].scrollLeft -= 220
    }
    const scrollRight = (e) => {

        e.target.parentNode.parentNode.children[2].scrollLeft += 220
       
    }

    const {movieGenres} = useSelector((state) => state.home)

    const getMovieGenres = (genre_ids) => {
        const movieGenreList = []
       genre_ids.map((id) => {
        movieGenres.map((genre) => {
            id === genre.id && movieGenreList.push(genre.name);
        })
       })
      
       return movieGenreList;
    }


  return (
    <>
   
<BsFillArrowLeftCircleFill className='text-white text-opacity-50 text-[30px] hidden md:block cursor-pointer z-30 absolute left-[-20px] top-[calc(50%-25px)]' onClick={(e) => scrollLeft(e)}/>
<div className='carousel flex overflow-x-auto overflow-y-hidden scroll-smooth '>
 
    {data?.map((item) => {
        const movieGenreList = getMovieGenres(item.genre_ids)
   
        return (
            <div className='flex-grow-0 flex-shrink-0 w-[150px] h-[250px]  md:w-[200px] md:h-[350px] bg-transparent rounded-lg my-2 mr-5 relative' key={item.id} onClick={() => navigate(`/${item.media_type}/${item.id}`)}>
                <div className='w-full h-3/4 bg-black bg-opacity-50 rounded-lg'>
                <img src={`https://image.tmdb.org/t/p/w500${item.poster_path}`} alt="" className='w-full h-full object-cover rounded-lg'/>
                    <div className='genre-list flex flex-wrap flex-auto absolute top-[0] p-1 w-full'>
                    {movieGenreList.map((genre) => <span key={nanoid()}className=' bg-[#f08080] m-1 py-1 px-2 text-white text-[12px] rounded-lg '>{genre}</span>)}
                    </div>
                </div>
                <CircularProgressbar 
                    value={item.vote_average * 10} 
                    text={`${item.vote_average.toFixed(1)}`} 
                    className='w-[50px] h-[50px] mt-3 absolute bottom-[20%] right-[-15px] z-30'
                    background
                    backgroundPadding={6}
                    styles={buildStyles({
                        backgroundColor: "#f08080",
                        textColor: "white",
                        pathColor: "white",
                        trailColor: "transparent", 
                        textSize: '24px'
                    })}
                />
                <div className='w-full h-full flex flex-col pt-3'>
                    <h3 className='text-white text-[16px]'>{item.title}</h3>
                    <p className=' text-gray-500 text-[12px]'>{dayjs( item.release_date).format('MMM D, YYYY') }</p>
                    
                </div>
               
            </div>
        )
            
    })}



</div>
<BsFillArrowRightCircleFill className='text-white text-opacity-50 text-[30px] hidden md:block cursor-pointer absolute right-[-20px] top-[calc(50%-30px)]' onClick={(e) => scrollRight(e)} background={true}/>
</>
  )
}

export default Carousel