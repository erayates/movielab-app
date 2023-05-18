import { useEffect,useState } from 'react'
import Carousel from '../../../components/Carousel/Carousel'
import { fetchData } from '../../../utils/api'



function SimilarMovies({mediaType,id}) {
  const [similarMovies, setSimilarMovies] = useState(null);

  useEffect(() => {
    fetchData(`/${mediaType}/${id}/similar`).then((response) => {
      setSimilarMovies(response.results)
    })
  }, [id])



  return (
    <div className='details-recommendations container mx-auto relative'>
      <h2 class="text-[20px] inline-block text-transparent bg-clip-text bg-gradient-to-r font-bold from-white to-orange-500 mt-[50px]">Similar Movies</h2>
      <Carousel data={similarMovies} mediaType={mediaType} />
    </div>
  )
}

export default SimilarMovies