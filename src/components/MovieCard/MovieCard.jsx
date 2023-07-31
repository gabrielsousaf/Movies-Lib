import { Link } from "react-router-dom";
import {FaStar}  from "react-icons/fa";
import axios from "axios";
import { useEffect, useState } from "react";

const imageUrl = import.meta.env.VITE_IMG;
const ApiKey = import.meta.env.VITE_API_KEY;
const MovieEndpoint = import.meta.env.VITE_API;


const MovieCard = ({ movie, showLink = true }) => {
  const [ trailerLink, setTrailerLink ] = useState(null);

  useEffect(() => {
    axios.get(`${MovieEndpoint}/${movie.id}?${ApiKey}&append_to_response=videos`)
      .then(response => {
        if (response.data.videos?.results.length > 0) {
          const trailerKey = response.data.videos.results[0].key;
          setTrailerLink(`https://www.youtube.com/watch?v=${trailerKey}`);
        }
      })
      .catch(error => {
        console.error('Erro ao buscar detalhes do filme:', error)
      });
  },[movie.id]);
  
  return (
    <div className="movie-card">
      <img src={imageUrl + movie.poster_path} alt={movie.title} />
      <p> <FaStar /> {movie.vote_average} </p>
      <h2>{movie.title}</h2>
      <div className="teste">
        {showLink && <Link to={`/movie/${movie.id}`}>Detalhes</Link>}
        {trailerLink && <a href={trailerLink} target="_blank" rel="noopener noreferrer">Assistir Trailer</a>}

      </div>
    </div>
  )
}

export default MovieCard