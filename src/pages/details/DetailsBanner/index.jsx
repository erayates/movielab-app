import { fetchData } from '../../../utils/api';
import CircularProgress from '../../../components/CircularProgress/CircularProgress';
import BtnPlayIcon from '../../../components/Icons/BtnPlayIcon';

function DetailsBanner({ mediaDetails, mediaType, id }) {

  const handleTrailerBtn = () => {
    fetchData(`/${mediaType}/${id}/videos`).then((response) => {
      dispatch(handleVideoPopupToggle());
      response.results.map((item) => {
        item.type === 'Trailer' && dispatch(setVideoId(item.key));
      });
    });
  };

  return (
    <div className='details__banner relative'>
      <div className='details__header-poster absolute left-0 top-0 opacity-50'>
        <img src={`https://image.tmdb.org/t/p/original${mediaDetails?.poster_path}`} alt="" className='details__header-poster-img' />
      </div>

      <div className='details__header-overview z-30'>
        <h1 className="text-white text-[32px] mb-5 font-semibold">{mediaType === 'movie' ? mediaDetails?.original_title : mediaDetails?.name}</h1>
        <div className="flex items-center flex-row">

          <CircularProgress value={mediaDetails?.vote_average} className={'w-[60px] h-[60px] z-30 mr-5'} />

          <button className='bg-red-600 text-white py-2 px-3 lg:px-6  rounded-lg shadow-lg shadow-red-600 block text-[12px] lg:text-[16px] animate-pulse' onClick={handleTrailerBtn}>
            <BtnPlayIcon />
            Watch The Trailer
          </button>

        </div>
        <div className="mt-5">
          <h1 className='text-white text-[16px] md:text-[24px] '>Overview</h1>
          <p className='text-[#888888] text-[14px] md:text-[16px]'>{mediaDetails?.overview}</p>
          <div className='details-header__info mt-10 text-[#888888]'>
            <p className='text-white  text-[14px] md:text-[16px]  mr-5 '>Release Date: <span className='text-[#888888]'>{mediaType === 'movie' ? mediaDetails?.release_date : mediaDetails?.first_air_date}</span></p>
            {mediaType === 'movie' && <p className='text-white mt-3 text-[16px]  mr-5 '>Runtime: <span className='text-[#888888]'>{mediaDetails?.runtime} minutes</span></p>}
            <p className='text-white  text-[14px] md:text-[16px] mt-3'>Status: <span className='text-[#888888]'>{mediaDetails?.status}</span></p>

          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailsBanner
