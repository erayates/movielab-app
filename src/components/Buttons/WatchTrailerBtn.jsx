import React from 'react'
import BtnPlayIcon from '../Icons/BtnPlayIcon'
import { fetchData } from '../../utils/api'
import { useDispatch } from 'react-redux'
import { handleVideoPopupToggle,setVideoId } from '../../store/detailsSlicer'

const WatchTrailerBtn = ({randomData}) => {
    const dispatch = useDispatch();
    
    const handleTrailerBtn = () => {
        fetchData(`/movie/${randomData.id}/videos`).then((response) => {
            dispatch(handleVideoPopupToggle())
            response.results.map((item) => {
                item.type === 'Trailer' && dispatch(setVideoId(item.key))
            })
        })
    }
    return (
        <button className='bg-red-600 text-white py-2 px-6 mt-3 rounded-lg shadow-lg shadow-red-600 block text-[12px] md:text-[16px] animate-pulse' onClick={handleTrailerBtn}>
            <BtnPlayIcon />
            Watch The Trailer
        </button>
    )
}

export default WatchTrailerBtn