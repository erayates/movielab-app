import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'
import dayjs from 'dayjs'
import { BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill } from 'react-icons/bs'
import { nanoid } from 'nanoid'
import { useNavigate } from 'react-router-dom'
import Img from '../LazyLoadImage/img'
import CircularProgress from '../CircularProgress/CircularProgress'



function Carousel({ data, mediaType }) {
    const navigate = useNavigate();

    const scrollLeft = (e) => {
        e.target.parentNode.parentNode.children[2].scrollLeft -= 232
    }
    const scrollRight = (e) => {

        e.target.parentNode.parentNode.children[2].scrollLeft += 232

    }

    const { genres } = useSelector((state) => state.home)

    const getMovieGenres = (item) => {
        const movieGenreList = [];
        if(genres.length > 0 ){
            genres.map((genre) => {
                item.genre_ids.map((id) => {
                    genre.id === id && movieGenreList.push(genre.name);
                })
            })
        }
        return movieGenreList;
    }



    return (
        <>
            <BsFillArrowLeftCircleFill className='text-white text-opacity-50 text-[30px] hidden md:block cursor-pointer z-30 absolute left-[-20px] top-[calc(50%-25px)]' onClick={(e) => scrollLeft(e)} />
            <div className='carousel flex overflow-x-auto overflow-y-hidden scroll-smooth '>
                {data?.map((item) => {
                    const movieGenreList = getMovieGenres(item)
                    return (
                        <div className='flex-grow-0 flex-shrink-0 w-[150px] h-[250px]  md:w-[200px] md:h-[350px] bg-transparent rounded-t-2xl my-2 mr-8 relative cursor-pointer' key={item.id} onClick={() => navigate(`/${mediaType}/${item.id}`)}>
                            <div className='w-full h-3/4 bg-black bg-opacity-50 rounded-2xl'>
                                <Img src={`https://image.tmdb.org/t/p/w500${item.poster_path}`} alt="" className='w-full h-full object-cover rounded-t-2xl ' />
                                <div className='genre-list flex flex-wrap flex-auto absolute top-[0] p-1 w-full'>
                                    {movieGenreList.map((genre) => <span key={nanoid()} className=' bg-red-600 m-1 py-1 px-2 text-white text-[12px] rounded-lg '>{genre}</span>)}
                                </div>
                            </div>
                            <CircularProgress value={item.vote_average} className={'w-[60px] h-[60px] mt-3 absolute bottom-[20%] right-[-15px] z-30'}/>
                           
                            <div className='w-full h-1/4 flex flex-col pt-3 bg-[#151515] p-4 rounded-b-2xl'>
                                <h3 className='text-white text-[13px] font-semibold'>{mediaType === 'movie' ? item.title : item.name}</h3>
                                <p className=' text-gray-500 text-[12px]'>{mediaType === 'movie' ? dayjs(item.release_date).format('MMM D, YYYY') : dayjs(item.first_air_date).format('MMM D, YYYY')}</p>
                            </div>

                        </div>
                    )

                })}



            </div>
            <BsFillArrowRightCircleFill className='text-white text-opacity-50 text-[30px] hidden md:block cursor-pointer absolute right-[-20px] top-[calc(50%-30px)]' onClick={(e) => scrollRight(e)} background={true} />
        </>
    )
}

export default Carousel