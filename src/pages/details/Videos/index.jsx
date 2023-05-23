import { useEffect, useState } from 'react'
import { fetchData } from '../../../utils/api';
import { PlayIcon } from '../../../components/Icons/PlayIcon';
import { getVideos, handleVideoPopupToggle, setVideoId } from '../../../store/detailsSlicer';
import { useDispatch, useSelector } from 'react-redux';
import NotFound from '../../../components/NotFound/NotFound';
import { scrollToTop } from '../../../utils/helpers';



function Videos({ mediaType, id }) {
    const dispatch = useDispatch();

    const {videos} = useSelector((state) => state.details)

    const handlePopup = (urlID) => {
        scrollToTop();
        dispatch(handleVideoPopupToggle())
        dispatch(setVideoId(urlID))
    }

    useEffect(() => {
        dispatch(getVideos({mediaType,id}))
    }, [mediaType,id])

    return (
        <>
            <h2 class="carousel__title">Videos</h2>
            <p class="carousel__subtitle">All videos of this series or movie</p>
            {videos.length === 0 && <NotFound type={'videos'} />}
            <div className='details-videos bg-[#151515]'>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  w-full justify-start '>
                    {
                        videos.length > 0 &&  (
                            videos.map((item) => {
                               return (
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
                                )
                            })
                        )
                    }
                </div>
            </div>
        </>
    )
}

export default Videos


