import { Link } from 'react-router-dom'

import { useSelector } from 'react-redux'
import '../../../styles/globals.css'

import '../styles.css'
import HomeIcon from '../../Icons/HomeIcon'
import DiscoverIcon from '../../Icons/DiscoverIcon'
import MovieIcon from '../../Icons/MovieIcon'
import TvIcon from '../../Icons/TvIcon'
import TagIcon from '../../Icons/TagIcon'
import LoginBtn from '../../Buttons/LoginBtn'


function Navigation() {
  const { genres } = useSelector((state) => state.home)

  return (
    <aside className='sidebar'>
      <div className='sidebar__logo'>
        <h1 className='sidebar__title' >
          <span className='uppercase text-white'>Movie</span>
          <span className='uppercase sidebar__subtitle'>.Lab</span>
        </h1>
        <h1 className="mobile__sidebar__title">
          <span>M</span>
        </h1>
        <p className='sidebar__logo__subtitle'>Discover, share and watch!</p>
      </div>

      <div className='sidebar__menu'>
        <ul className='sidebar__menu-list'>
          <li className="sidebar__menu-list-item">
            <Link to='/'>
              <HomeIcon />
              <span className="hidden lg:inline-block">
                Home
              </span>
            </Link>
          </li>

          <li className="sidebar__menu-list-item">
            <Link to='/discover'>
              <DiscoverIcon />
              <span className="hidden lg:inline-block">
                Discover
              </span>
            </Link>
          </li>

          <li className="sidebar__menu-list-item">
            <Link to='/tv-series'>
              <TvIcon />
              <span className="hidden lg:inline-block">
                TV Shows
              </span>
            </Link>
          </li>

          <li className="sidebar__menu-list-item">
            <Link to='/movies'>
              <MovieIcon />
              <span className="hidden lg:inline-block">
                Movies
              </span>
            </Link>
          </li>
          <li className="sidebar__menu-list-item">
            <TagIcon />

            <span className="hidden lg:inline-block mt-5">Categories</span>
            <div className='mt-5 hidden lg:flex lg:flex-wrap'>
              {genres.length > 0 && genres.map((genre) => {
                return (
                    <span key={genre.id} className='text-[14px] mr-2 text-[#6C6C6C] font-medium'>#{genre.name}</span>
                )
              })}
            </div>
          </li>
        </ul>
      </div>

      <LoginBtn />
    </aside>
  )
}

export default Navigation