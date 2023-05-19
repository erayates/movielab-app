import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { fetchData } from '../../utils/api'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { nanoid } from 'nanoid';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import dayjs from 'dayjs';
import Img from '../../components/LazyLoadImage/img';
import Pagination from '../../components/Pagination/Pagination';


function SearchResult() {
  const [page, setPage] = useState(1)
  const [searchResult, setSearchResult] = useState({})
  const [rawSearchResult, setRawSearchResult] = useState({})

  const navigate = useNavigate();
  const { mediaType,query } = useParams()

  const { genres } = useSelector((state) => state.home)



  const getMovieGenres = (item) => {
    const movieGenreList = [];
    if (genres.length > 0) {
      genres.map((genre) => {
        if (item.genre_ids !== undefined) {
          item.genre_ids.map((id) => {
            genre.id === id && movieGenreList.push(genre.name);
          })
        }
      })
    }
    return movieGenreList;
  }


  useEffect(() => {
    setPage(1)
    fetchData(`/search/${mediaType}?query=${query}&include_adult=false&language=en-US&page=${page}`)
      .then((res) => {
        setRawSearchResult(res)
        setSearchResult(res.results)

      })
  }, [query, page,mediaType])



  return (
    <section className='search-results ml-96 p-16 pt-8'>
      <h1 className="movies-title text-[32px] text-transparent bg-clip-text bg-gradient-to-r font-bold from-white to-blue-500">{rawSearchResult.total_results} TV Series and Movies Found.</h1>
      <p className='movies-subtitle mt-[-5px] mb-6 font-normal text-white/50 text-[14px]'>You can see all movies that you wish!</p>
      <div className='movies-container flex flex-wrap w-full '>
        {
          searchResult.length > 0 &&
          searchResult.map((item) => {
            console.log(item)
            const movieGenreList = getMovieGenres(item);
       

              return (
                <div className=' w-[150px] h-[250px] md:w-[230px] md:h-[400px] bg-transparent rounded-t-2xl my-5 mr-[1.99rem] relative cursor-pointer' key={item.id} onClick={() => navigate(`/${mediaType}/${item.id}`)}>
                  <div className='w-full h-3/4 bg-black bg-opacity-50 rounded-t-2xl'>
                    <Img src={`https://image.tmdb.org/t/p/w500${item.poster_path}`} alt="" className='w-full h-full object-cover rounded-t-2xl' />
                    <div className='genre-list flex flex-wrap flex-auto absolute top-[0] p-1 w-full'>
                      {movieGenreList.map((genre) => <span key={nanoid()} className=' bg-red-600 m-1 py-1 px-2 text-white text-[12px] rounded-lg '>{genre}</span>)}
                    </div>
                  </div>
                  <CircularProgressbar
                    value={item.vote_average * 10}
                    text={typeof item.vote_average === 'number' ? item.vote_average.toFixed(1) : '0'}
                    className='w-[60px] h-[60px] mt-3 absolute bottom-[20%] right-[-15px] z-30'
                    background
                    backgroundPadding={12}
                    styles={buildStyles({
                      backgroundColor: "#151515",
                      textColor: "white",
                      pathColor: "",
                      trailColor: "transparent",
                      textSize: '24px',
                    })}
                  />
                  <div className='w-full h-1/4 flex flex-col pt-3 bg-[#151515] p-4 rounded-b-2xl'>
                    <h3 className='text-white text-[14px] font-semibold'>{mediaType === 'movie' ? item.title : item.name}</h3>
                    <p className=' text-gray-500 text-[12px]'>{dayjs(item.release_date).format('MMM D, YYYY')}</p>
                  </div>

                </div>
              )
         
          })

        }
      </div>

      <hr className='opacity-20' />
      <Pagination setPage={setPage} page={page} totalPage={rawSearchResult.total_pages} totalMovies={rawSearchResult.total_results} />
    </section>
  )
}




export default SearchResult