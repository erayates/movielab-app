import { useEffect, useState } from 'react'
import { fetchData } from '../../../utils/api';
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
            setVideos(response)
        })
    }, [id])

    return (
        <>
            <h2 class="carousel__title">Videos</h2>
            <p class="carousel__subtitle">All videos of this series or movie</p>
            <div className='details-videos bg-[#151515] rounded-2xl'>

                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  w-full justify-start '>
                    {
                        videos?.results.map((item) => (
                            <div className='flex flex-col' key={item.id}>
                                <div className='video__item h-[250px] relative'>
                                    <img src={`https://img.youtube.com/vi/${item.key}/mqdefault.jpg`} alt="No Image Result!" className='w-full h-full object-cover' />
                                    <div className='play-icon absolute top-[calc(50%-25px)] left-[35%] cursor-pointer' onClick={() => handlePopup(item.key)}>
                                        <PlayIcon />
                                    </div>
                                    <div className='mt-3 absolute bottom-0 left-0 p-4 z-30 w-full'>
                                        <p className='text-white text-[16px] font-semibold mt-2'>{item.name}</p>
                                        <p className='text-[#888888] text-[12px] mt-1'>{item.type}</p>
                                    </div>
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