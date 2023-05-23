import { useEffect, useState } from 'react'
import Carousel from '../../../components/Carousel/Carousel'
import '../../../styles/globals.css'
import NotFound from '../../../components/NotFound/NotFound';
import { getSimilar } from '../../../store/detailsSlicer';

import { useDispatch, useSelector } from 'react-redux';


function SimilarMovies({ mediaType, id }) {

  const dispatch = useDispatch();

  const { similar } = useSelector((state) => state.details)

  useEffect(() => {
    dispatch(getSimilar({mediaType,id}))
  }, [mediaType,id])

  return (
    <div className='details__section mb-10'>
      <h2 class="carousel__title">Similar Movies</h2>
      <p class="carousel__subtitle">Similar movies for this TV series or movie</p>
      {similar?.length > 0 ? <Carousel data={similar} mediaType={mediaType} /> : (
        <NotFound type={'similar movies'} />
      )}
    </div>
  )
}

export default SimilarMovies