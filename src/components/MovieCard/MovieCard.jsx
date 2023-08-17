import { Link } from "react-router-dom";
import { imgApi } from "../../services/api";

export const MovieCard = ({ movie }) => {
  const imageUrl = imgApi.defaults.baseURL + movie.poster_path;

  return (
    <div className="movie-card">
      <Link className="details" to={`/movie/${movie.id}`}>
        <img src={imageUrl} alt={movie.original_title} />
        <h2>{movie.title}</h2>
      </Link>
    </div>
  );
};



export const MovieRecomend = ({ movie }) => {
  const imageUrl = imgApi.defaults.baseURL + movie.poster_path;

  return (
    <div className="movie-card">
      <Link className="details" to={`/movie/${movie.id}`}>
        <img src={imageUrl} alt={movie.original_title} />
      </Link>
    </div>
  );
};


export const CastCard = ({ actor }) => {
  return (
    <div className="cast-card">
      <img 
        src={`https://image.tmdb.org/t/p/w200/${actor.profile_path}`} 
        alt={actor.name} 
      />
    </div>
  );
};


export const MovieImageGallery = ({ image }) => {
  return (
    <div className="image-gallery">
      <img 
        src={imgApi.defaults.baseURL + image.file_path} 
        alt={`Image ${image.id}`} 
      />
    </div>
  );
};