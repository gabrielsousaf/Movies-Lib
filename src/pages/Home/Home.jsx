import { useState, useEffect } from "react";
import MovieCard from "../../components/MovieCard/MovieCard";
import { fetchTopRatedMovies } from "../../services/api";

import '../Movie/MovieGrid.css'



const Home = () => {
  const [ topMovies, setTopMoveis ] = useState([])

  useEffect(() => {
    fetchMovies();
  }, [])

  const fetchMovies = async () => {
    const popularMovies = await fetchTopRatedMovies()
    setTopMoveis(popularMovies)
  }

  return (
    <div className="container">
      <h2 className="title">Melhores filmes:</h2>
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

export default Home