import React, { useState, CSSProperties, useEffect } from 'react'
import { useTransition, animated, useSpringRef } from '@react-spring/web'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar'
import styles from './styles.module.css'
import { fetchData } from '../../../utils/api'

const pages = []

export default function DiscoverItem() {
  const [index, set] = useState(0)
  const handlePageChange = () => set(state => (state + 1))
  const transRef = useSpringRef()
  const transitions = useTransition(index, {
    ref: transRef,
    keys: null,
    from: { opacity: 0, transform: 'translate3d(100%,0,0)' },
    enter: { opacity: 1, transform: 'translate3d(0%,0,0)' },
    leave: { opacity: 0, transform: 'translate3d(-200%,0,0)' },
  })

  useEffect(() => {
    fetchData('/discover/movie').then(response => {
      response.results.map((item, idx) => {

        pages.push(({ style }) => <animated.div key={idx}
          className='relative h-full rounded-2xl'
          style={{ ...style }}>
          <div className='w-full h-full rounded-2xl relative bg-no-repeat bg-center bg-cover' style={{ backgroundImage: `url(https://image.tmdb.org/t/p/original${item.backdrop_path})`, backgroundColor: 'rgba(0,0,0,0.8)', backgroundBlendMode: 'darken', }}>
            <div className=' h-full w-[600px] bg-black/50 flex  items-center rounded-s-2xl' style={{ clipPath: 'polygon(0 0, 45% 0, 100% 100%, 0% 100%)' }}>
              <div className='w-[400px] p-12'>
                <h2 className='text-[36px] font-semibold'>{item.original_title}</h2>
                <p className='font-normal text-[#7d7d7d] mb-4'>{item.overview}</p>
                <div className='flex items-center'>
                  <CircularProgressbar
                    value={item.vote_average * 10}
                    text={item.vote_average.toFixed(1)}
                    className='w-[60px] h-[60px] z-30 mr-5'
                    background
                    backgroundPadding={12}
                    styles={buildStyles({
                      backgroundColor: "#151515",
                      textColor: "white",
                      pathColor: "",
                      trailColor: "transparent",
                      textSize: '24px',
                    })}
                  />
                  <button className='bg-white text-[#151515] px-4 rounded-2xl font-semibold text-[12px] z-30 cursor-pointer h-[40px]' onClick={console.log('btn clicked')}>
                    Go To Details
                  </button>
                </div>
                <button className='bg-red-600 text-white py-2 px-6  rounded-lg shadow-lg shadow-red-600 block text-[16px] animate-pulse mt-5'>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 mr-2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15.91 11.672a.375.375 0 010 .656l-5.603 3.113a.375.375 0 01-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112z" />
                  </svg>

                  Watch The Trailer
                </button>
              </div>
            </div>
            <div className='order absolute right-[50px] bottom-[50px]'>
              <h2 className='text-[96px] text-white/50 font-bold text-right'>{idx+1}</h2>
              <p className=' animate-bounce font-semibold'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M15.042 21.672L13.684 16.6m0 0l-2.51 2.225.569-9.47 5.227 7.917-3.286-.672zM12 2.25V4.5m5.834.166l-1.591 1.591M20.25 10.5H18M7.757 14.743l-1.59 1.59M6 10.5H3.75m4.007-4.243l-1.59-1.59" />
                </svg>
                Click the screen to swipe!
              </p>
            </div>
          </div>


        </animated.div>)

      })
    })
  }, [])

  console.log(pages)

  useEffect(() => {
    transRef.start()
  }, [index])
  return (
    <div className={`flex fill ${styles.container}`} onClick={handlePageChange}>
      {pages.length > 0 &&
        transitions((style, i) => {
          const Page = pages[i]
          return <Page style={style} />
        })
      }
    </div>
  )
}
