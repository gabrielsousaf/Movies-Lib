import { useState, useEffect } from "react";
import MovieCard from "../../components/MovieCard/MovieCard";
import { fetchTrendingMovies } from "../../services/api";

import '../Top_Rated/Top_Rated.css'



const Trending = () => {
  const [ TrendingsMovies, setTreandingsMovies ] = useState([])

  useEffect(() => {
    fetchTrendingMovies().then((trendingMoveis) => {
      setTreandingsMovies(trendingMoveis);
    })
  }, [])

  return (
    <div className="container">
      <h2 className="title">Trending:</h2>
      <div className="movies-container">
        {TrendingsMovies.length === 0 && <p>Loanding...</p>}
        {TrendingsMovies.length > 0 &&
          TrendingsMovies.map((movie) => 
          <MovieCard key={movie.id} movie={movie} />
        )}
      </div> 
    </div>

  )
}

export default Trending;