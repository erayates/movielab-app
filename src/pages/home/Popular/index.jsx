import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import SwitchTabs from '../SwitchTabs'

import { getPopular } from '../../../store/homeSlicer'

import Carousel from '../../../components/Carousel/Carousel'
import '../../../styles/globals.css'


function Popular() {
    const [popularMedia, setPopularMedia] = useState(null);
    const [mediaType, setMediaType] = useState('movie');

    const dispatch = useDispatch();

    const { popular } = useSelector((state) => state.home)


    useEffect(() => {
        setPopularMedia(popular.results)
    }, [popular])

    useEffect(() => {
        dispatch(getPopular(mediaType))
    }, [mediaType])

    return (
        <div className='carousel__container'>
            <div className='carousel__header'>
                <div>
                    <h3 className='carousel__title'>Popular</h3>
                    <p className='carousel__subtitle'>List of latest popular TV series or movies</p>
                </div>
                <SwitchTabs setMediaType={setMediaType} mediaType={mediaType} />
            </div>
            <Carousel data={popularMedia} mediaType={mediaType} />
        </div>
    )
}

export default Popular