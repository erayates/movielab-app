import { useState,useEffect } from 'react'

import './App.css'
import { fetchData } from './utils/api'
import { useDispatch,useSelector } from 'react-redux';
import { getApiConfiguration,getGenres } from './store/homeSlicer';

import { BrowserRouter,Routes,Route } from 'react-router-dom';


import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/home/Home';
import Details from './pages/details/Details';
import SearchResult from './pages/searchResult/SearchResult';
import Page404 from './pages/404/404';
import Discover from './pages/discover/Discover';
import SearchBar from './components/SearchBar';
import Movies from './pages/movies/Movies';
import TVSeries from './pages/tv/TVSeries';
import VideoPopup from './components/VideoPopup';


function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    fetchApiConfig();
    dispatch(getGenres());
  },[])

  const fetchApiConfig = () => {
    fetchData("/configuration").then((response) => {
      const url = {
         backdrop: response.images.secure_base_url + "original",
         poster: response.images.secure_base_url + "original",
         profile: response.images.secure_base_url + "original",
      }
      dispatch(getApiConfiguration(url))
    })
  }
  return (
    <BrowserRouter>
        <Header/>
        <SearchBar/>
        <main>
        <Routes >
          <Route path="/" exact element={<Home />} />
          <Route path="/:mediaType/:id" element={<Details />} />
          <Route path="/search/:mediaType/:query" element={<SearchResult />} />
          <Route path="/discover" element={<Discover />} />
          <Route path='/movies' element={<Movies/>}/>
          <Route path='/tv-series' element={<TVSeries/>} />
          <Route path="*" element={<Page404 />} />
        </Routes>
        </main>
      <Footer/>
    </BrowserRouter>
  )
}

export default App
