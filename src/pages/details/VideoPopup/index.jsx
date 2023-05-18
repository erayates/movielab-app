import {useState,useEffect} from 'react'
import ReactPlayer from 'react-player'
import {AiOutlineClose} from 'react-icons/ai'
import { useSelector, useDispatch } from 'react-redux'

import './style.css'
import { handleVideoPopupToggle } from '../../../store/detailsSlicer'

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
    <div className='video-popup flex justify-center items-center '>
        <div className='video-content w-full h:full flex justify-center'>
            <ReactPlayer url={video} controls={true} width='80%' height='100%'/>
            <div className='close-btn relative top-[-30px]' onClick={handlePopup}>
                <AiOutlineClose className='text-white text-[30px] z-30 cursor-pointer'/>
            </div>
        </div>
    </div>
  )
}

export default VideoPopup