import React, { useState, useEffect } from 'react'

import './style.css'
import { fetchData } from '../../utils/api'

import ListItem from '../../components/ListItem/ListItem'
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry'
import { useSelector } from 'react-redux'
import Img from '../../components/LazyLoadImage/img'
import { nanoid } from 'nanoid'
import dayjs from 'dayjs'

export default function Discover() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData('/discover/movie').then(response => {
      setData(response.results)
    })
  }, [])
  
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
    <ResponsiveMasonry className='discover relative ml-20  lg:ml-[24rem]'>
      <Masonry columnsCount={4}>
        {
          data.length > 0 &&
          data.map((item) => {
            const movieGenreList = getMovieGenres(item)
            return (
              <div className='movies__content-container' key={item.id}>
                <div className='movies__content'>
                  <Img src={`https://image.tmdb.org/t/p/w500${item.poster_path}`} alt="" className='w-full h-full object-cover' />
                  <div className='genre-list flex flex-wrap flex-auto absolute top-[0] p-1 w-full'>
                    {movieGenreList.map((genre) => <span key={nanoid()} className=' bg-red-600 m-1 py-1 px-2 text-white text-[12px] '>{genre}</span>)}
                  </div>

                  <div className='w-full absolute bottom-0 left-0 flex flex-col pt-3 p-4 z-30'>
                    <h3 className='text-white text-[16px] font-semibold'>{item.title}</h3>
                    <p className=' text-gray-400 text-[14px]'>{dayjs(item.release_date).format('MMM D, YYYY')}</p>
                  </div>

                </div>

              </div>
            )
          })
        }
      </Masonry>

   
    </ResponsiveMasonry>
  )

}

