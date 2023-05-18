import { useEffect, useState } from 'react'
import { fetchData } from '../../../utils/api';
import { nanoid } from 'nanoid';
import { PlayIcon } from '../PlayButton';
import { handleVideoPopupToggle, setVideoId } from '../../../store/detailsSlicer';
import { useDispatch } from 'react-redux';

function Videos({ mediaType, id }) {
    const [videos, setVideos] = useState(null);

    const dispatch = useDispatch();

    const handlePopup = (urlID) => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
        dispatch(handleVideoPopupToggle())
        dispatch(setVideoId(urlID))
    }

    useEffect(() => {
        fetchData(`/${mediaType}/${id}/videos`).then((response) => {
            console.log(response)
            setVideos(response)
        })
    }, [id])

    return (
        <> 
        <div className='details-videos container mx-auto mt-10 bg-[#151515] p-8 rounded-2xl'>
            <h2 className='text-[20px] inline-block text-transparent bg-clip-text bg-gradient-to-r font-bold from-white to-orange-500'>Videos</h2>
            <div className='flex flex-wrap w-full justify-start px-5'>
                {
                    videos?.results.map((item) => (
                        <div className='video-item flex flex-col w-[300px] mt-5 mr-5' key={item.id}>
                            <div className='w-[300px] h-[150px] relative'>
                                <img src={`https://img.youtube.com/vi/${item.key}/mqdefault.jpg`} alt="No Image Result!" className='w-full h-full rounded-lg object-cover opacity-75' />
                                <div className='play-icon absolute top-[calc(50%-25px)] left-[35%] cursor-pointer' onClick={() => handlePopup(item.key)}>
                                    <PlayIcon />
                                </div>
                            </div>
                            <div className='mt-3'>
                                <p className='text-white text-[14px] font-semibold mt-2'>{item.name}</p>
                                <p className='text-[#888888] text-[12px] mt-1'>{item.type}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
        </>
    )
}

export default Videos