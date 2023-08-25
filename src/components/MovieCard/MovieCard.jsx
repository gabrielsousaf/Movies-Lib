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
    <div className="movie-card">
      <div className="details">
        <img 
          src={`https://image.tmdb.org/t/p/w200/${actor.profile_path}`} 
          alt={actor.name}    
        />
      </div>

    </div>
  );
};



export const MovieImageGallery = ({ image }) => {
  console.log('Image ID:', image.id);
  return (
    <div className="movie-card">
      {/* <Link to={`/image/${image.id} `}> */}
        <img 
          src={imgApi.defaults.baseURL + image.file_path} 
          alt={image.name || image.title || 'Image'} 
        />
      {/* </Link> */}
    </div>
  );
};



export const MovieCredits = ({ credits }) => {
  return (
    <div className="movie-card">
      <div className="details">
        <p>{credits.name}</p>
        <p>{credits.job}</p>
      </div>

    </div>
  );
};