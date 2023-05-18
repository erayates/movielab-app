import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import { useDispatch, useSelector } from 'react-redux';
import { getDetails, handleVideoPopupToggle, setVideoId } from '../../store/detailsSlicer';

import { fetchData } from '../../utils/api';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import { PlayIcon } from './PlayButton';

import { dayjs } from "dayjs";
import Cast from './Cast/Cast';
import Videos from './Videos';
import Recommendations from './Recommendations';
import SimilarMovies from './SimilarMovies';

import VideoPopup from './VideoPopup';


function Details() {
  const { mediaType, id } = useParams();
  const [mediaDetails, setMediaDetails] = useState(null);
  const {videoPopupOpen} = useSelector((state) => state.details)

  const dispatch = useDispatch();

  useEffect(() => {
    window.scrollTo({
      top:'0',
      behavior: 'smooth'
    })
    fetchData(`/${mediaType}/${id}`).then((response) => {
      setMediaDetails(response)
    })
  }, [id])

  const handleTrailerBtn = () => {
      fetchData(`/${mediaType}/${id}/videos`).then((response) => {
          dispatch(handleVideoPopupToggle())
          response.results.map((item) => {
            item.type === 'Trailer' && dispatch(setVideoId(item.key))
          })
      })
  }
 
  return (
    <>
    <section className='details-page relative flex flex-col ml-96 p-16 bg-no-repeat bg-cover'  style={{ backgroundImage: `url(https://image.tmdb.org/t/p/original${mediaDetails?.backdrop_path})`, backgroundColor: 'rgba(0,0,0,0.8)', backgroundBlendMode: 'darken', }}>
      <div className='details-banner container mx-auto flex pt-10 bg-[#151515] p-8 rounded-2xl'>
        <div className='details-header__poster w-full h-[350px] relative rounded-lg'>
          <img src={`https://image.tmdb.org/t/p/original${mediaDetails?.poster_path}`} alt="" className='w-full h-full object-cover object-center rounded-lg' />
        </div>
        <div className='details-header__overview px-8'>
          <h1 className="text-white text-[36px] mb-5 font-semibold">{mediaType === 'movie' ? mediaDetails?.original_title : mediaDetails?.name}</h1>
          <div className="flex items-center">
            <CircularProgressbar
              value={mediaDetails?.vote_average * 10}
              text={mediaDetails?.vote_average.toFixed(1)}
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
            <button className='bg-red-600 text-white py-2 px-6  rounded-lg shadow-lg shadow-red-600 block text-[16px] animate-pulse' onClick={handleTrailerBtn}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 mr-2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                <path stroke-linecap="round" stroke-linejoin="round" d="M15.91 11.672a.375.375 0 010 .656l-5.603 3.113a.375.375 0 01-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112z" />
              </svg>

              Watch The Trailer
            </button>
          </div>
          <div className="mt-5">
            <h1 className='text-white text-[20px] font-semibold'>Overview</h1>
            <p className='text-[#888888] text-[12px]'>{mediaDetails?.overview}</p>
            <div className='details-header__info mt-5 font-semibold text-[#888888]'>
              <span className='text-white text-[12px] mr-5 '>Release Date: <span className='text-[#888888]'>{mediaType === 'movie' ? mediaDetails?.release_date : mediaDetails?.first_air_date}</span></span>
              {mediaType === 'movie' && <span className='text-white text-[12px] mr-5 '>Runtime: <span className='text-[#888888]'>{mediaDetails?.runtime} minutes</span></span>}
              <span className='text-white text-[12px]'>Status: <span className='text-[#888888]'>{mediaDetails?.status}</span></span>
              <hr className='opacity-25 mt-2'></hr>
              <p className='text-white text-[12px] my-2'>Director: {mediaDetails?.director}</p>
              <hr className='opacity-25'></hr>
              <p className='text-white text-[12px] my-2'>Writer: {mediaDetails?.writer}</p>
            </div>
          </div>
        </div>
      </div>

      <Cast mediaType={mediaType} id={id} />
      <Videos mediaType={mediaType} id={id} />
      <Recommendations mediaType={mediaType} id={id} />
      <SimilarMovies mediaType={mediaType} id={id} />
      {videoPopupOpen && <VideoPopup />}

    </section>
    </>
  )
}

export default Details