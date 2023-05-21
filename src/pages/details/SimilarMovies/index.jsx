import { useEffect,useState } from 'react'
import Carousel from '../../../components/Carousel/Carousel'
import { fetchData } from '../../../utils/api'
import '../../../styles/globals.css'



function SimilarMovies({mediaType,id}) {
  const [similarMovies, setSimilarMovies] = useState(null);

  useEffect(() => {
    fetchData(`/${mediaType}/${id}/similar`).then((response) => {
      setSimilarMovies(response.results)
    })
  }, [id])



  return (
    <div className='details__section mb-10'>
      <h2 class="carousel__title">Similar Movies</h2>
      <p class="carousel__subtitle">Similar movies for this TV series or movie</p>
      {similarMovies !== [] ? <Carousel data={similarMovies} mediaType={mediaType} /> : (
        <div className='recommendations-not-found flex flex-col items-center justify-center mt-20'>
          <h3 className='text-[24px] text-white font-bold'>No Similar Movies Found!</h3>
          <p className='text-[#888888] text-[14px] mt-2'>We couldn't find any similar movies for this movie.</p>
        </div>
      )}
    </div>
  )
}

export default SimilarMovies