import { useState, useEffect } from "react";
import MovieCard from "../../components/MovieCard/MovieCard";
import { fetchTrendingMovies } from "../../services/api";

import '../Home/HomeGrid.css'


const Trending = () => {
  const [ topMovies, setTopMoveis ] = useState([])

  useEffect(() => {
    fetchTrendingMovies().then((trendingMoveis) => {
      setTopMoveis(trendingMoveis);
    })
  }, [])

  return (
    <div className="container">
      <h2 className="title">Tendencias:</h2>
      <div className="movies-container">
        {topMovies.length === 0 && <p>Carregando...</p>}
        {topMovies.length > 0 &&
          topMovies.map((movie) => 
          <MovieCard key={movie.id} movie={movie} />
        )}
      </div> 
    </div>

  )
}

export default Trending;