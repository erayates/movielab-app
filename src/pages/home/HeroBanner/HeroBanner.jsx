import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useFetch } from '../../../hooks/useFetch';
import Img from '../../../components/LazyLoadImage/img';

import './styles.css'

function HeroBanner() {
  const [backgroundImg, setBackgroundImg] = useState('');
  const [query, setQuery] = useState('');

  const { url } = useSelector((state) => state.home)

  const navigate = useNavigate();

  const { data, loading, error } = useFetch("/movie/upcoming")

  useEffect(() => {
    const bg = url.backdrop + data?.results?.[Math.floor(Math.random() * data.results.length)]?.backdrop_path;
    setBackgroundImg(bg);

  }, [data])

  const handleSearchInput = (e) => {
    if (e.key === 'Enter' && query.length > 0) {
      navigate(`/search/${query}`);
    }
  }

  return (
    <div className='hero_banner w-full h-[450px] flex items-center relative bg-black rounded-2xl'>
      <div className='backdrop_img w-full h-full absolute top-0 left-0 opacity-50 overflow-hidden rounded-2xl'>
        {!loading && <Img src={backgroundImg} className='' />}
      </div>
      <div className='wrapper container mx-auto z-[2]'>
        <div className="hero_banner_content p-4">
          <span className='title text-4xl block text-center font-semibold text-white'>Welcome.</span>
          <span className='subtitle text-center block text-md text-white'>Millions of movies, TV Shows and people to discover. Explore Now!</span>

        </div>
      </div>
    </div>
  )
}

export default React.memo(HeroBanner)