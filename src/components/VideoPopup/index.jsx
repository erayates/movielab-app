import {useState,useEffect} from 'react'
import ReactPlayer from 'react-player'
import {AiOutlineClose} from 'react-icons/ai'
import { useSelector, useDispatch } from 'react-redux'

import './style.css'

import { handleVideoPopupToggle } from '../../store/detailsSlicer'

function VideoPopup() {
    const [video, setVideo] = useState(null);
    const {videoId} = useSelector((state) => state.details) 

    const dispatch = useDispatch();

    useEffect(() => {
        setVideo('https://www.youtube.com/watch?v=' + videoId)
    },[videoId])

    const handlePopup = () => {
        dispatch(handleVideoPopupToggle())
    }

  return (
    <div className='video-popup'>
        <div className='video-content'>
            <ReactPlayer url={video} controls={true} width='100%' height='100%'/>
            <div className='close-btn' onClick={handlePopup}>
                <AiOutlineClose className='close-btn-icon'/>
            </div>
        </div>
    </div>
  )
}

export default VideoPopup