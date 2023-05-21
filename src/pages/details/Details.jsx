import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import { useSelector } from 'react-redux';

import { fetchData } from '../../utils/api';

import Cast from './Cast/Cast';
import Videos from './Videos';
import Recommendations from './Recommendations';
import SimilarMovies from './SimilarMovies';

import VideoPopup from '../../components/VideoPopup';


import '../../styles/globals.css'
import DetailsBanner from "./DetailsBanner";


function Details() {
  const { mediaType, id } = useParams();
  const [mediaDetails, setMediaDetails] = useState(null);
  const {videoPopupOpen} = useSelector((state) => state.details)



  useEffect(() => {
    window.scrollTo({
      top:'0',
      behavior: 'smooth'
    })
    fetchData(`/${mediaType}/${id}`).then((response) => {
      setMediaDetails(response)
    })
  }, [id])


 
  return (
    <>
    <section className='details'>
     
      <DetailsBanner mediaDetails={mediaDetails} mediaType={mediaType} id={id}/>
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