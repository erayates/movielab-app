import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import SwitchTabs from '../SwitchTabs'

import { getTopRated } from '../../../store/homeSlicer'

import Carousel from '../../../components/Carousel/Carousel'


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

        <div className='container mx-auto top-rated relative mt-[50px]'>
            <div className='top-rated-header flex justify-between mr-5 mb-3'>
                <h3 className='text-[20px] inline-block text-transparent bg-clip-text bg-gradient-to-r font-bold from-white to-orange-500'>Top Rated</h3>
                <SwitchTabs setMediaType={setMediaType} mediaType={mediaType} />
            </div>
            <Carousel data={topRatedMedias} mediaType={mediaType}/>
        </div>


    )
}

export default TopRated
