import App from "../App"

import { Routes, Route } from "react-router-dom"

import Home from "../pages/Home/Home"
import Trending from "../pages/Trending/Trending"
import InTheaters from "../pages/In-Theaters/In-Theaters"
import TopRated from "../pages/TopRated/TopRated"
import Popular from "../pages/Popular/Popular"
import Movie from "../pages/Movie/Movie"
import Gallery from "../pages/Gallery/Gallery"
import Search from "../pages/Search/Search"
import CastAndCrew from "../pages/CastAndCrew/CastAndCrew"

const RoutesConfig = () => {
  return(
    <Routes>
      <Route element={<App />}>
        <Route path="/" element={<Home/>} />
        <Route path="/trending" element={<Trending />} />
        <Route path="/in-theaters" element={<InTheaters />} />
        <Route path="/top-rated" element={<TopRated />} />
        <Route path="/popular" element={<Popular />} />
        <Route path='/movie/:id' element={<Movie />} />
        <Route path='/search' element={<Search />} />
        <Route path="/movie/:id/images" element={<Gallery />} />
        <Route path="/movie/:id/credits" element={<CastAndCrew />} />
      </Route>
    </Routes>
  )
}

export default RoutesConfig;