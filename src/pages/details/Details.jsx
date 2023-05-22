import { useEffect, useState } from 'react'
import { useParams, useSearchParams } from 'react-router-dom'

import { useDispatch, useSelector } from 'react-redux';

import { fetchData } from '../../utils/api';

import Cast from './Cast/Cast';
import Videos from './Videos';
import Recommendations from './Recommendations';
import SimilarMovies from './SimilarMovies';

import VideoPopup from '../../components/VideoPopup';


import '../../styles/globals.css'
import DetailsBanner from "./DetailsBanner";
import { scrollToTop } from '../../utils/helpers';
import { getDetails } from '../../store/detailsSlicer';


function Details() {
  const { mediaType, id } = useParams();

  const {videoPopupOpen,details} = useSelector((state) => state.details)

  const dispatch = useDispatch();

  useEffect(() => {
    scrollToTop();
    dispatch(getDetails({mediaType,id}))
  }, [id])


  return (
    <>
    <section className='details'>
      <>
      <DetailsBanner mediaDetails={details} mediaType={mediaType} id={id}/>
      <Cast mediaType={mediaType} id={id} />
      <Videos mediaType={mediaType} id={id} />
      <Recommendations mediaType={mediaType} id={id}/>
      <SimilarMovies mediaType={mediaType} id={id} />
      {videoPopupOpen && <VideoPopup />}
      </>
    </section>
    </>
  )
}

export default Details