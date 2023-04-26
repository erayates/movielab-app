import {useEffect,useState} from 'react'
import { useSelector,useDispatch} from 'react-redux'
import SwitchTabs from '../SwitchTabs'

import { getTopRated } from '../../../store/homeSlicer'

import Carousel from '../../../components/Carousel/Carousel'


function TopRated() {
    const [topRatedMedias, setTopRatedMedias] = useState(null);
    const [mediaType, setMediaType] = useState('movie');
    
    const dispatch = useDispatch();

    const {topRated} = useSelector((state) => state.home)




    useEffect(() => {
        setTopRatedMedias(topRated.results)
    },[topRated])

    useEffect(() => {
        dispatch(getTopRated(mediaType))
    },[mediaType])

  return (

        <div className='container mx-auto top-rated relative mt-[50px]'>
            <div className='top-rated-header flex justify-between mr-5 mb-3'>
                <h3 className='text-white text-[20px] inline-block'>Top Rated</h3>
                <SwitchTabs setMediaType={setMediaType} mediaType={mediaType}/>
            </div>
                <Carousel data = {topRatedMedias} />
        </div>
      
    
  )
}

export default TopRated
