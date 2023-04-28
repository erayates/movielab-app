import {useState,useEffect} from 'react'
import ReactPlayer from 'react-player'
import {AiOutlineClose} from 'react-icons/ai'

import './style.css'

function VideoPopup({id,setPopup}) {
    const [video, setVideo] = useState(null);

    useEffect(() => {
        setVideo('https://www.youtube.com/watch?' + id)
    },[])
  return (
    <div className='video-popup flex justify-center items-center '>
        <div className='video-content w-full h:full flex justify-center relative'>
            <ReactPlayer url={video} controls={true} width='80%' height='100%'/>
            <div className='close-btn relative top-[-30px]' onClick={() => setPopup(false)}>
                <AiOutlineClose className='text-white text-[30px] z-30'/>
            </div>
        </div>
    </div>
  )
}

export default VideoPopup