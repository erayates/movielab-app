import '../../styles/globals.css'
import { useSelector } from 'react-redux'
import Img from '../LazyLoadImage/img'
import { nanoid } from 'nanoid'
import dayjs from 'dayjs'
import { useNavigate } from 'react-router-dom'


const ListItem = ({ pageData,mediaType}) => {
    const navigate = useNavigate();
    const { genres } = useSelector((state) => state.home)

    const getMovieGenres = (item) => {
        const movieGenreList = [];
        if (genres.length > 0) {
            genres.map((genre) => {
                item.genre_ids.map((id) => {
                    genre.id === id && movieGenreList.push(genre.name);
                })
            })
        }
        return movieGenreList;
    }

    console.log(pageData)
    return (
        <>
        {
            pageData.length > 0 &&
                pageData.map((item) => {
                    const movieGenreList = getMovieGenres(item);
                    return (
                        <div className='movies__content-container' key={item.id} onClick={() => navigate(`/${mediaType}/${item.id}`)}>
                            <div className='movies__content'>
                                <Img src={`https://image.tmdb.org/t/p/w500${item.poster_path}`} alt="" className='w-full h-full object-cover' />
                                <div className='genre-list flex flex-wrap flex-auto absolute top-[0] p-1 w-full'>
                                    {movieGenreList.map((genre) => <span key={nanoid()} className=' bg-red-600 m-1 py-1 px-2 text-white text-[12px]'>{genre}</span>)}
                                </div>
                                <div className='movies__info'>
                                    <h3 className='movies__info-title'>{item.name || item.original_title}</h3>
                                    <p className='movies__info-date'>{dayjs(item.release_date).format('MMM D, YYYY')}</p>
                                </div>
                                <div class="carousel__item-average">{item.vote_average.toFixed(1)}</div>
                            </div>
                        </div>
                    )
                })
        }
        </>
    )
}

export default ListItem