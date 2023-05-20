import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import SwitchTabs from '../SwitchTabs'

import { getTopRated } from '../../../store/homeSlicer'

import Carousel from '../../../components/Carousel/Carousel'
import '../../../styles/globals.css'

function TopRated() {
    const [topRatedMedias, setTopRatedMedias] = useState(null);
    const [mediaType, setMediaType] = useState('movie');
    console.log('mediaType')
    const dispatch = useDispatch();

    const { topRated } = useSelector((state) => state.home)




    useEffect(() => {
        setTopRatedMedias(topRated.results)
    }, [topRated])

    useEffect(() => {
        dispatch(getTopRated(mediaType))
    }, [mediaType])

    return (

        <div className='carousel__container'>
            <div className='carousel__header'>
                <h3 className='carousel__header-title'>Top Rated</h3>
                <SwitchTabs setMediaType={setMediaType} mediaType={mediaType} />
            </div>
            <Carousel data={topRatedMedias} mediaType={mediaType}/>
        </div>


    )
}

export default TopRated
