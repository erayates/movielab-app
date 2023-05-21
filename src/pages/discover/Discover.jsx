import React, { useState, useEffect } from 'react'
import { useTransition, animated, useSpringRef } from '@react-spring/web'

import './style.css'
import { fetchData } from '../../utils/api'
import CircularProgress from '../../components/CircularProgress/CircularProgress'
import ClickIcon from '../../components/Icons/ClickIcon'

import WatchTrailerBtn from '../../components/Buttons/WatchTrailerBtn'
import '../../styles/globals.css'

const pages = []

export default function Discover() {
  const [index, set] = useState(0)
  const handlePageChange = () => set((state) => index < pages.length ? state + 1 : 0 )
  const transRef = useSpringRef()
  const transitions = useTransition(index, {
    ref: transRef,
    keys: null,
    from: { opacity: 0, transform: 'translate3d(100%,0,0)' },
    enter: { opacity: 1, transform: 'translate3d(0%,0,0)' },
    leave: { opacity: 0, transform: 'translate3d(-50%,0,0)' },
  })

  useEffect(() => {
    fetchData('/discover/movie').then(response => {
      response.results.map((item, idx) => {
        pages.push(({ style }) => <animated.div key={idx}
          className='relative ml-20 w-full lg:ml-[24rem]'
          style={{ ...style }}>
          <div className='w-full h-full relative bg-no-repeat bg-center bg-cover' style={{ backgroundImage: `url(https://image.tmdb.org/t/p/original${item.backdrop_path})`, backgroundColor: 'rgba(0,0,0,0.8)', backgroundBlendMode: 'darken', }}>
            <div className=' h-full w-full md:w-[600px] bg-black/50 flex items-center' >
              <div className='md:w-[400px] p-6 md:p-12'>
                <h2 className='text-[24px] md:text-[36px] font-semibold'>{item.original_title}</h2>
                <p className='text-[14px] md:text-[16px] font-normal text-[#7d7d7d] mb-4'>{item.overview}</p>
                <div className='flex items-center'>
                  <CircularProgress value={item.vote_average}  className={'w-[45px] h-[45px] mr-3 z-30'}/>
                  <button className='bg-white text-[#151515] px-4 rounded-2xl font-semibold text-[12px] z-30 cursor-pointer h-[40px]' onClick={console.log('btn clicked')}>
                    Go To Details
                  </button>
                </div>
                  <WatchTrailerBtn randomData={item}/>
              </div>
            </div>
            <div className='order absolute right-[30px] bottom-[30px] md:right-[50px] md:bottom-[50px]'>
              <h2 className='text-[48px] md:text-[96px] text-white/50 font-bold text-right'>{idx+1}</h2>
              <p className=' animate-bounce font-semibold text-[12px] md:text-[16px]'>
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
