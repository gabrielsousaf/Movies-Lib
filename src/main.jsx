import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import './index.css'

import App from './App.jsx'

import Home from './pages/Home/Home.jsx'
import TopRated from './pages/Top_Rated/Top_Rated'
import Movies from './pages/Movie/Movies'
import Search from './pages/Search/Search.jsx'
import Popular from './pages/Popular/Popular.jsx'
import Trending from './pages/Trending/Trending.jsx'
import Theaters from './pages/Theaters/Theaters.jsx'
import MovieImagesGallery from './pages/Gallery/Gallery.jsx'
import CastCrew from './pages/CastAndCrew/CastAndCrew.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<App />}>
          <Route path='/' element={<Home />} />
          <Route path='/top-rated' element={<TopRated />} />
          <Route path='/popular' element={<Popular />} />
          <Route path='/trending' element={<Trending />} />
          <Route path='/in-theaters' element={<Theaters />} />
          <Route path='movie/:id' element={<Movies />} />
          <Route path="/movie/:id/images" element={<MovieImagesGallery />} />
          <Route path="/movie/:id/credits" element={<CastCrew />} />
          <Route path='search' element={<Search />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
