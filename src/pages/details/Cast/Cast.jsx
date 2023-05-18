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
    <div className='details-cast container mx-auto mt-10 bg-[#151515] p-8 rounded-2xl'>
        <h2 className='text-[20px] inline-block text-transparent bg-clip-text bg-gradient-to-r font-bold from-white to-orange-500'>Cast</h2>
        <div className='cast-list flex  mt-5 overflow-x-hidden'>
            {cast?.cast.map((item) => (
                <div className='cast-item flex flex-col mr-8' key={item.id}>
                    <div className='w-[150px] h-[200px]'>
                        <img src={`https://image.tmdb.org/t/p/original${item.profile_path}`} alt="No Image Founded!" className='w-full h-full rounded-2xl object-cover '/>
                    </div>
                    <div className='mt-2'>
                        <p className='text-white text-[14px] mt-2 font-semibold '>{item.name}</p>
                        <p className='text-[#888888] text-[12px] mt-1 '>{item.character}</p>
                    </div>
                </div>
            ))}
        </div>



    </div>
  )
}

export default Cast