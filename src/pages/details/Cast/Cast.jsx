import { useState, useEffect } from 'react'
import { fetchData } from '../../../utils/api';


function Cast({ mediaType, id }) {
    const [cast, setCast] = useState(null);

    useEffect(() => {
        fetchData(`/${mediaType}/${id}/credits`).then((response) => {
            setCast(response)
        })
    }, [id])

    return (
        <>
         <h1 class="carousel__title">Casts</h1>
            <p class="carousel__subtitle">All actors of this series or movie</p>

        <div className='details-cast bg-[#151515]'>
            <div className='cast-list flex overflow-x-hidden'>
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




        </div>
        </>
    )
}

export default Cast