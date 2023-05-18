import { useEffect, useState } from 'react'
import Carousel from '../../../components/Carousel/Carousel'
import { fetchData } from '../../../utils/api'



function Recommendations({ mediaType, id }) {
  const [recommendations, setRecommendations] = useState(null);
  console.log(mediaType)
  useEffect(() => {
    fetchData(`/${mediaType}/${id}/recommendations`).then((response) => {
      setRecommendations(response.results)

    })
  }, [id])


  return (
    <div className='details-recommendations container mx-auto relative'>
      <h2 class="text-[20px] inline-block text-transparent bg-clip-text bg-gradient-to-r font-bold from-white to-orange-500 mt-[50px]">Recommendations</h2>
      <Carousel data={recommendations} mediaType={mediaType} />
    </div>
  )
}

export default Recommendations