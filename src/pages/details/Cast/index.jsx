import { useState, useEffect } from 'react'
import { fetchData } from '../../../utils/api';
import { BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill } from 'react-icons/bs';
import { useDispatch, useSelector } from 'react-redux';
import { getCasts } from '../../../store/detailsSlicer';

function Cast({ mediaType, id }) {
    const dispatch = useDispatch();

    const {casts} = useSelector((state) => state.details)

    useEffect(() => {
        dispatch(getCasts({mediaType,id}))
    }, [mediaType,id])

    const scrollLeft = () => {
        document.querySelector('.cast-list').scrollLeft -= 250
    }
    const scrollRight = () => {
        document.querySelector('.cast-list').scrollLeft += 250
    }

    return (
        <>
            <h1 class="carousel__title">Casts</h1>
            <p class="carousel__subtitle">All actors of this series or movie</p>
            <div className='details__cast'>
                <BsFillArrowLeftCircleFill className='carousel__left-arrow' onClick={scrollLeft} />
                <div className='cast-list'>
                    {casts.length > 0 && casts.map((item) => (
                        <div className='cast-item-container' key={item.id}>
                            <div className='cast-item'>
                                <img src={`https://image.tmdb.org/t/p/original${item.profile_path}`} alt="No Image Founded!" className='cast-item-img' />
                                <div className='cast-item-content'>
                                    <p className='cast-item-title'>{item.name}</p>
                                    <p className='cast-item-subtitle'>{item.character}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <BsFillArrowRightCircleFill className='carousel__right-arrow ' onClick={scrollRight} />
            </div>
        </>
    )
}

export default Cast