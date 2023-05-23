import { useEffect, useState } from 'react'
import Carousel from '../../../components/Carousel/Carousel'
import '../../../styles/globals.css'
import NotFound from '../../../components/NotFound/NotFound';
import { useDispatch, useSelector } from 'react-redux';
import { getRecommendations } from '../../../store/detailsSlicer';
import { useParams } from 'react-router-dom';


function Recommendations({mediaType,id}) {

  const dispatch = useDispatch();

  const { recommendations} = useSelector((state) => state.details)

  useEffect(() => {
  
    dispatch(getRecommendations({mediaType,id}))
  }, [mediaType,id])



  return (
    <div className='details__section'>
      <div>
        <h2 class="carousel__title">Recommandations</h2>
        <p class="carousel__subtitle">Similar movies for this TV series or movie</p>,
      </div>
      {recommendations?.length > 0 ? <Carousel data={recommendations} mediaType={mediaType} /> : (
        <NotFound type={'recommendations'} />
      )}
    </div>
  )
}

export default Recommendations