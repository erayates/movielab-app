import React, { useEffect, useState } from 'react'
import { fetchData } from '../../utils/api'

import Pagination from '../../components/Pagination/Pagination';

import '../../styles/globals.css'
import ListItem from '../../components/ListItem/ListItem';


const TVSeries = () => {
    const [page, setPage] = useState(1);
    const [rawData, setRawData] = useState({})
    const [pageData, setPageData] = useState([])
 
    useEffect(() => {
        fetchData(`/tv/airing_today?language=en-US&page=${page}`).then((res) => {
            setRawData(res)
            setPageData(res.results)
        })
    }, [page])



    return (
        <section className='movies'>
            <h1 className="movies__title">Latest TV Series</h1>
            <p className='movies__subtitle'>Check out all the TV series released in the last 14 days!</p>
            <ListItem pageData={pageData} />
            <hr className='opacity-20 mt-5' />
            <Pagination setPage={setPage} page={page} totalPage={rawData.total_pages} totalMovies={rawData.total_results} />
        </section>
    )
}



export default TVSeries