import { useEffect,useState } from 'react'
import { useParams } from 'react-router-dom'

import { useDispatch, useSelector } from 'react-redux';
import { getDetails } from '../../store/detailsSlicer';

import { fetchData } from '../../utils/api';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import { PlayIcon } from './PlayButton';

import { dayjs } from "dayjs";
import Cast from './Cast/Cast';
import Videos from './Videos';
import Recommendations from './Recommendations';
import SimilarMovies from './SimilarMovies';


function Details() {
  const {mediaType,id} = useParams();
  const [mediaDetails, setMediaDetails] = useState(null);


  useEffect(() => {
    fetchData(`/${mediaType}/${id}`).then((response) => {
      setMediaDetails(response)
    })
  },[mediaDetails])
  
  return (
    <section className='details-page relative flex flex-col ml-96 p-16' style={{
      background: `linear-gradient(90deg, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.5) 100%), url(https://image.tmdb.org/t/p/original${mediaDetails?.backdrop_path}) no-repeat  center center`,
      backgroundSize: 'cover'
    }} >
        <div className='details-banner container mx-auto flex pt-10'>
          <div className='details-header__poster w-full h-[350px] relative rounded-lg'>
            <img src={`https://image.tmdb.org/t/p/original${mediaDetails?.poster_path}`} alt="" className='w-full h-full object-cover object-center rounded-lg'/>
          </div>
          
          <div className='details-header__overview px-8'>
            <h1 className="text-white text-[36px] mb-5">{mediaDetails?.original_title}</h1>
            <div className="">
                <CircularProgressbar
                  text={`${mediaDetails?.vote_average.toFixed(1)}`}
                  value={mediaDetails?.vote_average * 10} 
                  className='w-[50px] h-[50px] text-[#01b4e4] top-5 right-5'
                  styles={buildStyles({
                    textColor: "#fff",
                    pathColor: "#39FF14",
                    trailColor: "white",
                    textSize: "32px"
                  })}
                  />
    
                  <PlayIcon/>
                <span className="text-white ml-2">Watch The Trailer</span>
            </div>
              <div className="mt-5">

              <h1 className='text-white text-[24px]'>Overview</h1>
          
          
              <p className='text-gray-500 text-[12px]'>{mediaDetails?.overview}</p>
          
              <div className='details-header__info mt-5'>
                <span className='text-white text-[12px] mr-5'>Release Date: <span className="text-gray-500">{mediaDetails?.release_date}</span></span>
                <span className='text-white text-[12px] mr-5'>Runtime: <span className="text-gray-500">{mediaDetails?.runtime} minutes</span></span>
                <span className='text-white text-[12px]'>Status: <span className="text-gray-500">{mediaDetails?.status}</span></span>
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
        <Recommendations mediaType={mediaType} id={id}/>
        <SimilarMovies mediaType={mediaType} id={id} />

    </section>
  
  )
}

export default Details