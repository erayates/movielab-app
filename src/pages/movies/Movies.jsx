import React, { useEffect, useState } from 'react'
import { fetchData } from '../../utils/api'

import Pagination from '../../components/Pagination/Pagination';


import '../../styles/globals.css'
import ListItem from '../../components/ListItem/ListItem';

const Movies = () => {
    const [page, setPage] = useState(1);
    const [rawData, setRawData] = useState({})
    const [pageData, setPageData] = useState([])

    useEffect(() => {
        fetchData(`/movie/now_playing?language=en-US&page=${page}`).then((res) => {
            setRawData(res)
            setPageData(res.results)
        })
    }, [page])


    return (
        <section className='movies'>
            <h1 className="movies__title">Latest Movies</h1>
            <p className='movies__subtitle'>Check out all the movies released in the last 14 days!</p>
            <div className='movies__container'>
                <ListItem pageData={pageData} />
            </div>
            <hr className='opacity-20 mt-5' />
            <Pagination setPage={setPage} page={page} totalPage={rawData.total_pages} totalMovies={rawData.total_results} />
        </section>
    )
}



export default Movies