import { memo, useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useFetch } from '../../../hooks/useFetch';
import Img from '../../../components/LazyLoadImage/img';


import '../../../styles/globals.css'
import WatchTrailerBtn from '../../../components/Buttons/WatchTrailerBtn';

function HeroBanner() {
  const [backgroundImg, setBackgroundImg] = useState('');
  const [randomData, setRandomData] = useState(null);
  const { url } = useSelector((state) => state.home)

  const navigate = useNavigate();

  const { data, loading, error } = useFetch("/movie/upcoming")

  useEffect(() => {
    const randomData = data?.results?.[Math.floor(Math.random() * data.results.length)];
    const bg = url.backdrop + randomData?.backdrop_path;
    setBackgroundImg(bg);
    setRandomData(randomData)
  }, [data])

  const { videoPopupOpen } = useSelector((state) => state.details)

  return (
    <div className={videoPopupOpen ? 'herobanner  mt-[8rem]' : 'herobanner'}>
      <div className='herobanner__img-container'>
        {!loading && <Img src={backgroundImg} className={'herobanner__img'} />}
      </div>
      <div className='container z-[2] w-full  px-4 md:px-8 h-full'>
        <div className="herobanner__content">
          <h2 className='herobanner__title'>Welcome.</h2>
          <p className='herobanner__subtitle'>Millions of movies, TV Shows and people to discover. Explore Now!</p>
          {randomData && (
            <div className='mt-10'>
              <p className='herobanner__movie-title'>{randomData.original_title}</p>
              <p className="herobanner__movie-overview">{randomData.overview.split('').slice(0, 100).join("")}... </p>
              <button className='show-more__btn' onClick={() => navigate(`/movie/${randomData.id}`)}>Show More</button>
              <div className='mt-5'>
                <WatchTrailerBtn randomData={randomData} />
              </div>
            </div>
          )
          }
        </div>
      </div>
    </div>
  )
}

export default memo(HeroBanner)