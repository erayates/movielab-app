import { useEffect,useState } from 'react'
import { fetchData } from '../../../utils/api';
import { nanoid } from 'nanoid';
import { PlayIcon } from '../PlayButton';
import VideoPopup from '../VideoPopup';


function Videos({mediaType,id}) {
    const [videos, setVideos] = useState(null);
    const [popup, setPopup] = useState(false);
    const [videoURLID, setVideoURLID] = useState(null);

    
    const handlePopup = (urlID) => {
        setPopup(true)
        setVideoURLID(urlID)
    }

    useEffect(() => {
        fetchData(`/${mediaType}/${id}/videos`).then((response) => {
            setVideos(response)
        })
    },[id])


  return (
    <>
    <h1 className='text-white text-[24px] container mx-auto mt-10'>Videos</h1>
    {popup && <VideoPopup id={videoURLID} setPopup = {setPopup}/>}
    <div className='details-videos container mx-auto  flex'>
        
        {
            videos?.results.map((item) => (
                <div className='video-item flex flex-wrap mt-5 mr-5' key={item.id}>
                    <div className='w-[200px] h-[150px] relative'>
                        <img src={`https://img.youtube.com/vi/${item.key}/mqdefault.jpg`} alt="No Image Result!" className='w-full h-full rounded-lg object-cover'/>
                        <div className='play-icon absolute top-[calc(50%-25px)] left-[25%]' onClick={() => handlePopup(item.key)}>
                             <PlayIcon/>
                             
                        </div>

                    
                    </div>
                    <div className='ml-5'>
                        <p className='text-white text-[18px] mt-2'>{item.name}</p>
                        <p className='text-gray-500 text-[12px] mt-1'>{item.type}</p>
                    </div>
                </div>
            ))
        }
    </div>
    </>
  )
}

export default Videos