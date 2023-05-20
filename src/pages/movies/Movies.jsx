import React, { useEffect, useState } from 'react'
import { fetchData } from '../../utils/api'
import { useSelector } from 'react-redux';
import { nanoid } from 'nanoid';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import dayjs from 'dayjs';
import { useNavigate } from 'react-router-dom';
import Img from '../../components/LazyLoadImage/img';
import Pagination from '../../components/Pagination/Pagination';
import CircularProgress from '../../components/CircularProgress/CircularProgress';

const Movies = () => {
    const [page, setPage] = useState(1);
    const [rawData, setRawData] = useState({})
    const [pageData, setPageData] = useState([])
    const navigate = useNavigate();
    useEffect(() => {
        fetchData(`/movie/now_playing?language=en-US&page=${page}`).then((res) => {
            setRawData(res)
            setPageData(res.results)
        })
    }, [page])


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

    return (
        <section className='movies ml-20 lg:ml-96 p-8 md:p-16 pt-16'>
            <h1 className="movies-title text-[48px] leading-[50px] md:leading-none md:text-[64px] text-transparent bg-clip-text bg-gradient-to-r font-bold from-white to-blue-500">Latest Movies</h1>
            <p className='movies-subtitle mt-[-10px] md:mt-[-20px] mb-6 font-normal text-white/50 text-[14px] pt-5'>Check out all the movies released in the last 14 days!</p>
            <div className='movies-container flex flex-wrap w-full justify-center'>
            {pageData.length > 0 &&
                pageData.map((item) => {
                    const movieGenreList = getMovieGenres(item);
                    return(
                    <div className=' w-[200px] h-[350px] bg-transparent rounded-t-2xl my-5 mr-[1.99rem] relative cursor-pointer' key={item.id} onClick={() => navigate(`/movie/${item.id}`)}>
                        <div className='w-full h-3/4 bg-black bg-opacity-50 rounded-2xl'>
                            <Img src={`https://image.tmdb.org/t/p/w500${item.poster_path}`} alt="" className='w-full h-full object-cover rounded-t-2xl ' />
                            <div className='genre-list flex flex-wrap flex-auto absolute top-[0] p-1 w-full'>
                                {movieGenreList.map((genre) => <span key={nanoid()} className=' bg-red-600 m-1 py-1 px-2 text-white text-[12px] rounded-lg '>{genre}</span>)}
                            </div>
                        </div>
                        <CircularProgress value={item.vote_average} className={'w-[60px] h-[60px] mt-3 absolute bottom-[20%] right-[-15px] z-30'} />
                    
                        <div className='w-full h-1/4 flex flex-col pt-3 bg-[#151515] p-4 rounded-b-2xl'>
                            <h3 className='text-white text-[14px] font-semibold'>{item.title}</h3>
                            <p className=' text-gray-500 text-[12px]'>{dayjs(item.release_date).format('MMM D, YYYY')}</p>
                        </div>

                    </div>
                    )
                })

            }
            </div>
            
            <hr className='opacity-20'/>
            <Pagination setPage={setPage} page={page} totalPage={rawData.total_pages} totalMovies={rawData.total_results}/>
        </section>
    )
}



export default Movies