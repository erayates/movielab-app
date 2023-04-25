import React, {useEffect, useState} from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useFetch } from '../../../hooks/useFetch';
import Img from '../../../components/LazyLoadImage/img';

import styles from './styles.css'
import Loading from '../../../components/Loading/Loading';

function HeroBanner() {
  const [backgroundImg,setBackgroundImg] = useState('');
  const [query,setQuery] = useState('');

  const {url} = useSelector((state) => state.home)

  const navigate = useNavigate();

  const {data,loading,error} = useFetch("/movie/upcoming")
  
  useEffect(() => {
    const bg = url.backdrop + data?.results?.[Math.floor(Math.random()* data.results.length)]?.backdrop_path;
    setBackgroundImg(bg);
    console.log(backgroundImg)
  },[data])

  const handleSearchInput = (e) => {
    if(e.key === 'Enter' && query.length > 0){
      navigate(`/search/${query}`);
    }
  }

  return (
    <div className='hero_banner w-full h-[450px] flex items-center relative bg-black'>
  
        <div className='backdrop_img w-full h-full absolute top-0 left-0 opacity-50 overflow-hidden'>
            {!loading && <Img src={backgroundImg} className='' />}
        </div>
        <div className='opacity-layer'></div>
        <div className='wrapper container mx-auto z-[2]'>
            <div className="hero_banner_content p-4">
                <span className='title text-4xl block text-center font-semibold text-white'>Welcome.</span>
                <span className='subtitle text-center block text-md text-white'>Millions of movies, TV Shows and people to discover. Explore Now!</span>
                
                <div className='search w-full flex justify-center mt-5'>
                    <input type='text' placeholder='Search for a movie, tv show, person......' className='rounded-s-2xl py-3 px-4 bg-white outline-none text-sm w-full md:w-2/4' onKeyUp={handleSearchInput} onChange={(e) => setQuery(e.target.value)}/>
                    <button className='bg-gradient-to-r from-neutral-700 via-slate-800 to-black text-white py-3 px-6 rounded-e-2xl text-sm '>Search</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default React.memo( HeroBanner)