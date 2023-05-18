import React from 'react'

const Pagination = ({ setPage, page, totalPage, totalMovies }) => {
    const increasePageCount = () => {
        if (page < totalPage) {
            window.scrollTo({
                top: '0',
                behavior: 'smooth'
            })
            setPage((prev) => prev + 1);
        }

    }

    const decreasePageCount = () => {
        if (page !== 1) {
            window.scrollTo({
                top: '0',
                behavior: 'smooth'
            })
            setPage((prev) => prev - 1);
        }
    }
    console.log(totalPage)

    return (
        <div className='pagination flex justify-between mt-3'>
            <div className='pagination-pages text-white/50'>
                <span className='font-semibold text-[14px]'>Showing {page} page of {totalPage} page results | Total Movies: {totalMovies}</span>
            </div>
            <div className='pagination-buttons text-[14px] font-semibold'>
                <button className='prev bg-white text-[#151515] mx-5 rounded-lg px-4 py-2 active:scale-105' onClick={decreasePageCount}>Previous</button>
                <button className='prev bg-white text-[#151515] rounded-lg px-4 py-2 active:scale-105' onClick={increasePageCount}>Next</button>
            </div>
        </div>
    )
}

export default Pagination