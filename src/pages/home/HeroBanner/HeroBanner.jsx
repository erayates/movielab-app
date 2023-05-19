import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useFetch } from '../../../hooks/useFetch';
import Img from '../../../components/LazyLoadImage/img';


import './styles.css'
import BtnPlayIcon from '../../../components/Icons/BtnPlayIcon';
import { fetchData } from '../../../utils/api';
import { handleVideoPopupToggle, setVideoId } from '../../../store/detailsSlicer';

function HeroBanner() {
  const [backgroundImg, setBackgroundImg] = useState('');
  const [randomData, setRandomData] = useState(null);
  const { url } = useSelector((state) => state.home)

  const navigate = useNavigate();
  const dispatch = useDispatch();




  const { data, loading, error } = useFetch("/movie/upcoming")

  useEffect(() => {
    const randomData = data?.results?.[Math.floor(Math.random() * data.results.length)];
    const bg = url.backdrop + randomData?.backdrop_path;
    setBackgroundImg(bg);
    setRandomData(randomData)
  }, [data])

  const handleTrailerBtn = () => {
    fetchData(`/movie/${randomData.id}/videos`).then((response) => {
      dispatch(handleVideoPopupToggle())
      response.results.map((item) => {
        item.type === 'Trailer' && dispatch(setVideoId(item.key))
      })
    })
  }

  const {videoPopupOpen} = useSelector((state) => state.details)

  return (
    <div className={videoPopupOpen ? 'hero_banner w-full h-[450px] flex relative bg-black rounded-2xl mt-[7rem]' : 'hero_banner w-full h-[450px] flex relative bg-black rounded-2xl'}>
      <div className='backdrop_img w-full h-full absolute top-0 left-0 opacity-30 overflow-hidden rounded-2xl backdrop-blur-md clip'>
        {!loading && <Img src={backgroundImg} />}
      </div>
      <div className='wrapper container z-[2] w-full lg:w-3/4 px-4 md:px-8 h-full rounded-s-2xl  bg-gradient-to-r from-black to-black/20 '>
        <div className="hero_banner_content p-4">
          <h2 className='title text-[36px] md:text-[48px] lg:text-[52px] block font-semibold text-white'>Welcome.</h2>
          <p className='subtitle block md:text-[16px] lg:text-[20px] mt-[-10px] text-red-300'>Millions of movies, TV Shows and people to discover. Explore Now!</p>
          {randomData && (
            <div className='mt-10 text-[#888888] '>
              <p className='font-semibold md:text-[16px] lg:text-[20px] mb-3'>{randomData.original_title}</p>
              <p className="text-[14px] mb-3 lg:w-96">{randomData.overview.split('').slice(0, 100).join("")}... </p>
              <button className='font-bold text-black bg-white px-2 py-1 rounded-lg text-[12px]' onClick={() => navigate(`/movie/${randomData.id}`)}>Show More</button>
              <button className='bg-red-600 text-white py-2 px-6 mt-3 rounded-lg shadow-lg shadow-red-600 block text-[12px] md:text-[16px] animate-pulse' onClick={handleTrailerBtn}>
                <BtnPlayIcon />
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