import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useFetch } from '../../../hooks/useFetch';
import Img from '../../../components/LazyLoadImage/img';


import './styles.css'

function HeroBanner() {
  const [backgroundImg, setBackgroundImg] = useState('');
  const [randomData, setRandomData] = useState(null);
  const { url } = useSelector((state) => state.home)

  const navigate = useNavigate();

  const { data, loading, error } = useFetch("/movie/upcoming")

  useEffect(() => {
    const randomData = data?.results?.[Math.floor(Math.random() * data.results.length)];
    const bg = url.backdrop + randomData?.backdrop_path;
    setBackgroundImg(bg);
    setRandomData(randomData)
  }, [data])

  console.log(randomData)

  // const handleSearchInput = (e) => {
  //   if (e.key === 'Enter' && query.length > 0) {
  //     navigate(`/search/${query}`);
  //   }
  // }

  return (
    <div className='hero_banner w-full h-[450px] flex relative bg-black rounded-2xl'>
      <div className='backdrop_img w-full h-full absolute top-0 left-0 opacity-30 overflow-hidden rounded-2xl backdrop-blur-md clip'>
          {!loading && <Img src={backgroundImg} />}
      </div>
      <div className='wrapper container z-[2] w-full md:w-3/4 px-8 h-full rounded-s-2xl  bg-gradient-to-r from-black to-black/20 '>
        <div className="hero_banner_content p-4">

          <h2 className='title text-[64px] block font-semibold text-white'>Welcome.</h2>
          <p className='subtitle block text-[24px] mt-[-10px] text-red-300'>Millions of movies, TV Shows and people to discover. Explore Now!</p>


          {randomData && (
            <div className='mt-10 text-[#888888] '>
              <p className='font-semibold text-[24px] mb-3'>{randomData.original_title}</p>
              <p className="text-[14px] mb-3 w-96">{randomData.overview.split('').slice(0,100).join("")}... </p>
              <span className='font-bold cursor-pointer  text-black bg-white px-2 py-1 rounded-lg text-[12px]'>Show More</span>
              
              <button className='bg-red-600 text-white py-2 px-6 mt-3 rounded-lg shadow-lg shadow-red-600 block text-[16px] animate-pulse'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 mr-2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  <path stroke-linecap="round" stroke-linejoin="round" d="M15.91 11.672a.375.375 0 010 .656l-5.603 3.113a.375.375 0 01-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112z" />
                </svg>

                Watch The Trailer
              </button>



            </div>

          )
          }




        </div>
      </div>
    </div>
  )
}

export default React.memo(HeroBanner)