import { useState, useEffect } from "react";
import MovieCard from "../../components/MovieCard/MovieCard";
import { fetchInTheaters } from "../../services/api";

import '../Home/HomeGrid.css'


const Trending = () => {
  const [ theaters, setTheaters ] = useState([])

  useEffect(() => {
    fetchInTheaters().then((trendingMoveis) => {
      setTheaters(trendingMoveis);
    })
  }, [])

  return (
    <div className="container">
      <h2 className="title">In Theaters:</h2>
      <div className="movies-container">
        {theaters.length === 0 && <p>Loading...</p>}
        {theaters.length > 0 &&
          theaters.map((movie) => 
          <MovieCard key={movie.id} movie={movie} />
        )}
      </div> 
    </div>

  )
}

export default Trending;