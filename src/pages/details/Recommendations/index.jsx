import { useEffect, useState } from 'react'
import Carousel from '../../../components/Carousel/Carousel'
import { fetchData } from '../../../utils/api'
import '../../../styles/globals.css'



function Recommendations({ mediaType, id }) {
  const [recommendations, setRecommendations] = useState(null);
  console.log(mediaType)
  useEffect(() => {
    fetchData(`/${mediaType}/${id}/recommendations`).then((response) => {
      setRecommendations(response.results)

    })
  }, [id])



  return (
    <div className='details__section'>
      <h2 class="carousel__title">Recommandations</h2>
      <p class="carousel__subtitle">Similar movies for this TV series or movie</p>
      {recommendations !== [] ? <Carousel data={recommendations} mediaType={mediaType} /> : (
        <div className='recommendations-not-found flex flex-col text-center items-center justify-center mt-20'>
          <h1 className='text-[24px] text-white font-bold'>No Recommendations Found!</h1>
          <p className='text-[#888888] text-[14px] mt-2'>We couldn't find any recommendations for this movie.</p>
        </div>
      )}
      
    </div>
  )
}

export default Recommendations