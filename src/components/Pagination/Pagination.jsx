import { scrollToTop } from '../../utils/helpers';
import '../../styles/globals.css'

const Pagination = ({ setPage, page, totalPage, totalMovies }) => {
    const increasePageCount = () => {
        if (page < totalPage) {
            scrollToTop();
            setPage((prev) => prev + 1);
        }
    }

    const decreasePageCount = () => {
        if (page !== 1) {
            scrollToTop();
            setPage((prev) => prev - 1);
        }
    }

    return (
        <div className='pagination'>
            <div className='pagination-pages'>
                <span className='text-[14px] text-white/50'>Showing {page} page of {totalPage} page results | Total Movies: {totalMovies}</span>
            </div>
            <div className='pagination-buttons'>
                <button className='pagination-button mx-5' onClick={decreasePageCount}>Previous</button>
                <button className='pagination-button' onClick={increasePageCount}>Next</button>
            </div>
        </div>
    )
}

export default Pagination