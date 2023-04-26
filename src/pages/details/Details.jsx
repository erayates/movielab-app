import { useEffect,useState } from 'react'
import { useParams } from 'react-router-dom'

import { useDispatch, useSelector } from 'react-redux';
import { getDetails } from '../../store/detailsSlicer';

import { fetchData } from '../../utils/api';
import { CircularProgressbar,buildStyles } from 'react-circular-progressbar';


function Details() {
  const {mediaType,id} = useParams();
  
  const [mediaDetails, setMediaDetails] = useState(null);
  // const dispatch = useDispatch();
  
  // const {details} = useSelector((state) => state.details)

  useEffect(() => {
    fetchData(`/${mediaType}/${id}`).then((response) => {
      setMediaDetails(response)
    })
    
    // setMediaDetails(setMediaDetails)
  },[])
  console.log(mediaDetails)

  useEffect(() => {
    // dispatch(getDetails(mediaType,id))
  },[])
 


  return (
    <div className='details-page relative'>
      <div className='container mx-auto'>
        <div className='details-header'>
          <div className='details-header__poster w-full h-[350px] relative'>
            <img src={`https://image.tmdb.org/t/p/original${mediaDetails?.poster_path}`} alt="" className='w-full h-full object-cover object-center'/>
          </div>
          <div className='details-header__info p-5'>
            <CircularProgressbar value={mediaDetails?.vote_average} 
              text={`${mediaDetails?.vote_average}%`} 
              className='w-[50px] h-[50px] text-[#01b4e4] top-5 right-5'
            />
            <h1 className='text-white text-[24px]'>Overview</h1>
            <p className='text-gray-500 text-[12px]'>{mediaDetails?.overview}</p>

          </div>
        </div>
      </div>
    </div>
  
  )
}

export default Details