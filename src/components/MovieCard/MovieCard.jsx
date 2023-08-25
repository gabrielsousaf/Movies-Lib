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
      <Link to={`/movie/${image.id}/images/${image.index} `}>
        <img 
          src={imgApi.defaults.baseURL + image.file_path} 
          alt={`Imagem ${image.name}`} 
        />
      </Link>
    </div>
  );
};


export const MovieCredits = ({ credits }) => {
  return (
    <div className="movie-card">
      <div className="details">
        <dl>
          <dt>{credits.name}</dt>
          <dd>{credits.job}</dd>
        </dl>
      </div>

    </div>
  );
};


export const CastCardCredits = ({ actor }) => {
  const characterName = actor.character;

  return (
    <div className="movie-card">
      <ul className="details">
        <li>        
          <div className="container-image">
            <img 
              src={`https://image.tmdb.org/t/p/w200/${actor.profile_path}`} 
              alt={actor.name}    
            />
          </div>
          
          <div className="info">
            <p>{actor.name}</p>
            <p>{characterName}</p>
          </div>
        </li>
        {/* <div className="container-image">
          <img 
            src={`https://image.tmdb.org/t/p/w200/${actor.profile_path}`} 
            alt={actor.name}    
          />
        </div>

        <p>{actor.name}</p>
        <p>{characterName}</p> */}
      </ul>

    </div>
  );
};
