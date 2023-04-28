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
        <h1 className='text-white text-[24px] mt-[50px]'>Similar Movies</h1>
      <Carousel data={similarMovies} />
    </div>
  )
}

export default SimilarMovies