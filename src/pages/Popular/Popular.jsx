import { useState, useEffect } from "react"
import MovieCard from "../../components/MovieCard/MovieCard"
import { fetchPopularMovies } from "../../services/api"

import '../Home/HomeGrid.css'


const Popular = () => {
  const [ topMovies, setTopMoveis ] = useState([])

  useEffect(() => {
    fetchMovies();
  }, [])

  const fetchMovies = async () => {
    const popularMovies = await fetchPopularMovies()
    setTopMoveis(popularMovies)
  }

  return (
    <div className="container">
      <h2 className="title">Populares:</h2>
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

export default Popular;