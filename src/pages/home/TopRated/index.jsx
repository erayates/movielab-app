import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import SwitchTabs from '../SwitchTabs'

import { getTopRated } from '../../../store/homeSlicer'

import Carousel from '../../../components/Carousel/Carousel'
import '../../../styles/globals.css'

function TopRated() {
    const [topRatedMedias, setTopRatedMedias] = useState(null);
    const [mediaType, setMediaType] = useState('movie');
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
                <div>
                    <h3 className='carousel__title'>Top Rated</h3>
                    <p className='carousel__subtitle'>The most popular TV shows or movies of all time</p>
                </div>
                <SwitchTabs setMediaType={setMediaType} mediaType={mediaType} />
            </div>
            <Carousel data={topRatedMedias} mediaType={mediaType} />
        </div>
    )
}

export default TopRated
