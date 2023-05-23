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

        e.target.parentNode.parentNode.children[2].scrollLeft -= 242
    }
    const scrollRight = (e) => {
        e.target.parentNode.parentNode.children[2].scrollLeft += 242
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
        <BsFillArrowLeftCircleFill className='carousel__left-arrow top-[65%]' onClick={(e) => scrollLeft(e)} />
            <div className='carousel'>
                {data?.map((item) => {
                    const movieGenreList = getMovieGenres(item)
                    return (
                        <div className='carousel__item' key={item.id} onClick={() => navigate(`/${mediaType}/${item.id}`)}>
                            <div className='carousel__item-img-container'>
                                <Img src={`https://image.tmdb.org/t/p/w500${item.poster_path}`} alt="" className='carousel__item-img' />
                                <div className='genre-list'>
                                    {movieGenreList.map((genre) => <span key={nanoid()} className='genre-list-box'>{genre}</span>)}
                                </div>
                                <div className='carousel__content'>
                                    <h3 className='carousel__content-title'>{mediaType === 'movie' ? item.title : item.name}</h3>
                                    <p className='carousel__content-date'>{mediaType === 'movie' ? dayjs(item.release_date).format('MMM D, YYYY') : dayjs(item.first_air_date).format('MMM D, YYYY')}</p>
                                </div>
                            </div>
                            <div className='carousel__item-average' >{item.vote_average.toFixed(1)}</div>
                        </div>
                    )
                })}
            </div>
            <BsFillArrowRightCircleFill className='carousel__right-arrow top-[65%]' onClick={(e) => scrollRight(e)} background={true} />
        </>
    )
}

export default Carousel