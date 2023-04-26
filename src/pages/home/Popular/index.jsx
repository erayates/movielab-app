import {useEffect,useState} from 'react'
import { useSelector,useDispatch} from 'react-redux'
import SwitchTabs from '../SwitchTabs'

import { getPopular } from '../../../store/homeSlicer'

import Carousel from '../../../components/Carousel/Carousel'

function Popular() {
    const [popularMedia, setPopularMedia] = useState(null);
    const [mediaType, setMediaType] = useState('movie');
    
    const dispatch = useDispatch();

    const {popular} = useSelector((state) => state.home)




    useEffect(() => {
        setPopularMedia(popular.results)
    },[popular])

    useEffect(() => {
        dispatch(getPopular(mediaType))
    },[mediaType])

  return (

        <div className='container mx-auto popular relative mt-[50px]'>
            <div className='popular-header flex justify-between mr-5 mb-3'>
                <h3 className='text-white text-[20px] inline-block'>Popular</h3>
                <SwitchTabs setMediaType={setMediaType} mediaType={mediaType}/>
            </div>
                <Carousel data = {popularMedia} />
        </div>
      
    
  )
}

export default Popular