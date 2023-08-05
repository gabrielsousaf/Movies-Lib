import { useState, useEffect } from "react"
import MovieCard from "../../components/MovieCard/MovieCard"
import { fetchPopularMovies } from "../../services/api"

import '../Top_Rated/Top_Rated.css'


const Popular = () => {
  const [ PopularMovies, setPopularMovies ] = useState([])

  useEffect(() => {
    fetchPopularMovies().then((popularMoveis) => {
      setPopularMovies(popularMoveis);
    })
  }, [])

  return (
    <div className="container">
      <h2 className="title">Popular:</h2>
      <div className="movies-container">
        {PopularMovies.length === 0 && <p>Loanding...</p>}
        {PopularMovies.length > 0 &&
          PopularMovies.map((movie) => 
          <MovieCard key={movie.id} movie={movie} />
        )}
      </div>
    </div>
  )
}

export default Popular;