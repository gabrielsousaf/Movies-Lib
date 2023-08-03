import { useState, useEffect } from "react";
import MovieCard from "../../components/MovieCard/MovieCard";
import { fetchTopRatedMovies } from "../../services/api";

import './HomeGrid.css'


const Home = () => {
  const [ topRatedMoveis, setRatedMoveis ] = useState([])

  useEffect(() => {
    fetchTopRatedMovies().then((RatedMoveis) => {
      setRatedMoveis(RatedMoveis);
    })
  }, [])

  return (
    <div className="container">
      <h2 className="title">Top Rated:</h2>
      <div className="movies-container">
        {topRatedMoveis.length === 0 && <p>Loanding...</p>}
        {topRatedMoveis.length > 0 &&
          topRatedMoveis.map((movie) => 
          <MovieCard key={movie.id} movie={movie} />
        )}
      </div> 
    </div>

  )
}

export default Home