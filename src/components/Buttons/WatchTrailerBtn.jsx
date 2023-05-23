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
        <button className='watch-trailer__btn' onClick={handleTrailerBtn}>
            <BtnPlayIcon />
            Watch The Trailer
        </button>
    )
}

export default WatchTrailerBtn