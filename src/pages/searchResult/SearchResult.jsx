import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { fetchData } from '../../utils/api'
import { useSelector, useDispatch } from 'react-redux';
import Pagination from '../../components/Pagination/Pagination';
import ListItem from '../../components/ListItem/ListItem';
import { handleVideoPopupToggle } from '../../store/detailsSlicer';

function SearchResult() {
  const [page, setPage] = useState(1)
  const [searchResult, setSearchResult] = useState({})
  const [rawSearchResult, setRawSearchResult] = useState({})

  const { mediaType, query } = useParams()

  const dispatch = useDispatch();

  const { videoPopupOpen } = useSelector((state) => state.details)


  useEffect(() => {
    videoPopupOpen && dispatch(handleVideoPopupToggle());
  }, [])

  useEffect(() => {
    setPage(1)
    fetchData(`/search/${mediaType}?query=${query}&include_adult=false&language=en-US&page=${page}`)
      .then((res) => {
        setRawSearchResult(res)
        setSearchResult(res.results)

      })
  }, [query, page, mediaType])

  return (
    <section className='search-results ml-20 lg:ml-96  p-8 lg:p-16 pt-8'>
      <h1 className="movies-title text-[32px] text-transparent bg-clip-text bg-gradient-to-r font-bold from-white to-blue-500">{rawSearchResult.total_results} TV Series and Movies Found.</h1>
      <p className='movies-subtitle mt-[-5px] mb-6 font-normal text-white/50 text-[14px]'>You can see all movies that you wish!</p>
      <div className='movies-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full '>
        {
          searchResult.length > 0 && <ListItem pageData={searchResult} />
        }
      </div>
      <hr className='opacity-20' />
      <Pagination setPage={setPage} page={page} totalPage={rawSearchResult.total_pages} totalMovies={rawSearchResult.total_results} />
    </section>
  )
}




export default SearchResult