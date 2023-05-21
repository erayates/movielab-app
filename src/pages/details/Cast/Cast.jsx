import { useState, useEffect } from 'react'
import { fetchData } from '../../../utils/api';
import { BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill } from 'react-icons/bs';

function Cast({ mediaType, id }) {
    const [cast, setCast] = useState(null);

    useEffect(() => {
        fetchData(`/${mediaType}/${id}/credits`).then((response) => {
            setCast(response)
        })
    }, [id])


    const scrollLeft = (e) => {
        document.querySelector('.cast-list').scrollLeft -= 250
    }
    const scrollRight = (e) => {
        document.querySelector('.cast-list').scrollLeft += 250
    }



    return (
        <>
            <h1 class="carousel__title">Casts</h1>
            <p class="carousel__subtitle">All actors of this series or movie</p>
            <div className='details-cast bg-[#151515] relative'>
                <BsFillArrowLeftCircleFill className='text-white  text-[30px] hidden md:block cursor-pointer z-30 absolute left-[-10px] top-[45%]' onClick={(e) => scrollLeft(e)} />
                <div className='cast-list flex overflow-x-hidden scroll-smooth'>
                    {cast?.cast.map((item) => (
                        <div className='cast-item flex flex-col' key={item.id}>
                            <div className='w-[250px] h-[350px] relative'>
                                <img src={`https://image.tmdb.org/t/p/original${item.profile_path}`} alt="No Image Founded!" className='w-full h-full object-cover opacity-30 hover:opacity-75' />
                                <div className='absolute bottom-[20px] left-[20px]'>
                                    <p className='text-white text-[20px] mt-2 font-semibold '>{item.name}</p>
                                    <p className='text-[#888888] text-[14px] mt-1 '>{item.character}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <BsFillArrowRightCircleFill className='text-white  text-[30px] hidden md:block cursor-pointer z-30 absolute right-[-10px] top-[45%]' onClick={(e) => scrollRight(e)} />
            </div>
        </>
    )
}

export default Cast