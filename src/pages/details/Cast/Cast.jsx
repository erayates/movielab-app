import {useState,useEffect} from 'react'
import { fetchData } from '../../../utils/api';


function Cast({mediaType,id}) {
    const [cast, setCast] = useState(null);

    useEffect(() => {
        fetchData(`/${mediaType}/${id}/credits`).then((response) => {
            setCast(response)
        })
    },[id])

  

  return (
    <div className='details-cast container mx-auto mt-10'>
        <h1 className='text-white text-[24px]'>Cast</h1>
        <div className='cast-list flex overflow-x-scroll mt-5'>
            {cast?.cast.map((item) => (
                <div className='cast-item flex flex-col  items-center mr-5' key={item.id}>
                    <div className='w-[150px] h-[150px]'>
                        <img src={`https://image.tmdb.org/t/p/original${item.profile_path}`} alt="No Image Founded!" className='w-full h-full rounded-full object-cover '/>
                    </div>
                    <div className=''>
                        <p className='text-white text-[18px] mt-2 text-center'>{item.name}</p>
                        <p className='text-gray-500 text-[12px] mt-1 text-center'>{item.character}</p>
                    </div>
                </div>
            ))}
        </div>



    </div>
  )
}

export default Cast