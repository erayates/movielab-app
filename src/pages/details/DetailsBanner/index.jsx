import CircularProgress from '../../../components/CircularProgress/CircularProgress';
import WatchTrailerBtn from '../../../components/Buttons/WatchTrailerBtn';

function DetailsBanner({ mediaDetails, mediaType, id }) {
  return (
    <div className='details__banner relative'>
      <div className='details__header-poster'>
        <img src={`https://image.tmdb.org/t/p/original${mediaDetails?.poster_path}`} alt="" className='details__header-poster-img' />
      </div>

      <div className='details__overview'>
        <h1 className="details__overview-title">{mediaType === 'movie' ? mediaDetails?.original_title : mediaDetails?.name}</h1>
        <div className="details__overview-info">
          <CircularProgress value={mediaDetails?.vote_average} className={'w-[60px] h-[60px] z-30 mr-5'} />
          <WatchTrailerBtn randomData={mediaDetails}/>
        </div>
        <div className="details__content">
          <h2 className='details__content-title'>Overview</h2>
          <p className='details__content-subtitle'>{mediaDetails?.overview}</p>
          <div className='details__content-info'>
            <p className='.details__content-info-title'>Release Date: <span className='text-[#888888]'>{mediaType === 'movie' ? mediaDetails?.release_date : mediaDetails?.first_air_date}</span></p>
            {mediaType === 'movie' && <p className='.details__content-info-title mt-3'>Runtime: <span className='text-[#888888]'>{mediaDetails?.runtime} minutes</span></p>}
            <p className='.details__content-info-title mt-3'>Status: <span className='text-[#888888]'>{mediaDetails?.status}</span></p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailsBanner
