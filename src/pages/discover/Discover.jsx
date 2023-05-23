import React, { useState, useEffect } from 'react'
import { useTransition, animated, useSpringRef } from '@react-spring/web'

import './style.css'
import { fetchData } from '../../utils/api'
import CircularProgress from '../../components/CircularProgress/CircularProgress'
import ClickIcon from '../../components/Icons/ClickIcon'

import WatchTrailerBtn from '../../components/Buttons/WatchTrailerBtn'
import '../../styles/globals.css'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { handleVideoPopupToggle } from '../../store/detailsSlicer'
const pages = [];

export default function Discover() {
  const [index, set] = useState(0);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {videoPopupOpen} = useSelector((state) => state.details)


  const handlePageChange = () => set((state) => index < pages.length ? state + 1 : 0);
  const transRef = useSpringRef();
  const transitions = useTransition(index, {
    ref: transRef,
    keys: null,
    from: { opacity: 0, transform: 'translate3d(100%,0,0)' },
    enter: { opacity: 1, transform: 'translate3d(0%,0,0)' },
    leave: { opacity: 0, transform: 'translate3d(-50%,0,0)' },
  })

  useEffect(() => {
    videoPopupOpen && dispatch(handleVideoPopupToggle())
  },[])


  useEffect(() => {
    fetchData('/discover/movie').then(response => {
      response.results.map((item, idx) => {
        pages.push(({ style }) => <animated.div key={idx}
          className='animated__div'
          style={{ ...style }}>
          <div className='discover__container' style={{ backgroundImage: `url(https://image.tmdb.org/t/p/original${item.backdrop_path})`, backgroundColor: 'rgba(0,0,0,0.8)', backgroundBlendMode: 'darken', }}>
            <div className='discover__content' >
              <div className='discover__content-container'>
                <h2 className='discover__content-title'>{item.original_title}</h2>
                <p className='discover__content-overview'>{item.overview}</p>
                <div className='flex items-center'>
                  <CircularProgress value={item.vote_average} className={'w-[45px] h-[45px] mr-3 z-30'} />
                  <button className='show-more__btn' onClick={() => navigate(`/movie/${item.id}`)}>
                    Go To Details
                  </button>
                </div>
                <div className='mt-3'>
                  <WatchTrailerBtn randomData={item} />
                </div>
              </div>
            </div>
            <div className='discover__info'>
              <h2 className='discover__info-order'>{idx + 1}</h2>
              <p className='discover__info-title'>
                <ClickIcon />
                Click the screen to swipe!
              </p>
            </div>
          </div>
        </animated.div>)
      })
    })
  }, [])
  useEffect(() => {
    transRef.start()
  }, [index])
  return (
    <div className={`flex fill discover-container`} onClick={handlePageChange}>
      {pages.length > 0 &&
        transitions((style, i) => {
          const Page = pages[i]
          return (
            <Page style={style} />
          )
        })
      }
    </div>
  )
}
