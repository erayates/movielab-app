import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import 'react-circular-progressbar/dist/styles.css'
import dayjs from 'dayjs'
import { BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill } from 'react-icons/bs'
import { nanoid } from 'nanoid'
import { useNavigate } from 'react-router-dom'
import Img from '../LazyLoadImage/img'


import '../../styles/globals.css'


function Carousel({ data, mediaType }) {
    const navigate = useNavigate();

    const scrollLeft = (e) => {
        e.target.parentNode.parentNode.children[3].scrollLeft -= 242
    }
    const scrollRight = (e) => {
        e.target.parentNode.parentNode.children[3].scrollLeft += 242
    }

    const { genres } = useSelector((state) => state.home)

    const getMovieGenres = (item) => {
        const movieGenreList = [];
        if (genres.length > 0) {
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
            <BsFillArrowLeftCircleFill className='text-white  text-[30px] hidden md:block cursor-pointer z-30 absolute left-[-20px] top-[62%]' onClick={(e) => scrollLeft(e)} />
            <div className='carousel flex overflow-x-auto overflow-y-hidden scroll-smooth '>
                {data?.map((item) => {
                    const movieGenreList = getMovieGenres(item)
                    return (
                        <div className='carousel__item' key={item.id} onClick={() => navigate(`/${mediaType}/${item.id}`)}>
                            <div className='carousel__item-img w-full h-full'>
                                <Img src={`https://image.tmdb.org/t/p/w500${item.poster_path}`} alt="" className='w-full h-full object-cover' />
                                <div className='genre-list flex flex-wrap flex-auto absolute top-[0] p-1 w-full'>
                                    {movieGenreList.map((genre) => <span key={nanoid()} className=' bg-red-600 m-1 py-1 px-2 text-white text-[12px] '>{genre}</span>)}
                                </div>

                                <div className='w-full absolute bottom-0 left-0 flex flex-col pt-3 p-4 z-30'>
                                    <h3 className='text-white text-[16px] font-semibold'>{mediaType === 'movie' ? item.title : item.name}</h3>
                                    <p className=' text-gray-400 text-[14px]'>{mediaType === 'movie' ? dayjs(item.release_date).format('MMM D, YYYY') : dayjs(item.first_air_date).format('MMM D, YYYY')}</p>
                                </div>
                            </div>
                            <div className='carousel__item-average' >{item.vote_average.toFixed(1)}</div>
                        </div>
                    )

                })}



            </div>
            <BsFillArrowRightCircleFill className='text-white text-[30px] hidden md:block cursor-pointer absolute right-[-10px] top-[62%] z-30' onClick={(e) => scrollRight(e)} background={true} />
        </>
    )
}

export default Carousel