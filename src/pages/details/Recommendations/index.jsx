import { useEffect,useState } from 'react'
import Carousel from '../../../components/Carousel/Carousel'
import { fetchData } from '../../../utils/api'



function Recommendations({mediaType,id}) {
  const [recommendations, setRecommendations] = useState(null);

  useEffect(() => {
    fetchData(`/${mediaType}/${id}/recommendations`).then((response) => {
      setRecommendations(response.results)
      
    })
  }, [id])

  


  return (
    <div className='details-recommendations container mx-auto relative'>
        <h1 className='text-white text-[24px] mt-[50px]'>Recommendations</h1>
      <Carousel data={recommendations} />
    </div>
  )
}

export default Recommendations