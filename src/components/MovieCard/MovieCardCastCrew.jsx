import { imgApi } from '../../services/api/api';
import PropTypes from 'prop-types';

export const MovieCastAndCrew = ({ actor }) => {
  const imageUrl = imgApi.defaults.baseURL + actor.profile_path;

  return (
    <div className="cast-member">
      <img src={imageUrl} alt={actor.name} />
      <p>{actor.name}</p>
      <p>Character: {actor.character}</p>
    </div>
  );
};

MovieCastAndCrew.propTypes = {
  actor: PropTypes.shape({
    profile_path: PropTypes.string,
    name: PropTypes.string,
    character: PropTypes.string
  })
}


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

MovieCredits.propTypes = {
  credits: PropTypes.shape({
    name: PropTypes.string,
    job: PropTypes.string
  })
}


export const CastCardCredits = ({ actor }) => {
  const characterName = actor.character;

  return (
    <div className="movie-credits">
      <img 
        src={`https://image.tmdb.org/t/p/w92/${actor.profile_path}`} 
        alt={actor.name}    
      />
      <div>
        <p>{actor.name}</p>
        <p>as {characterName}</p>
      </div>
    </div>
  );
};

CastCardCredits.propTypes = {
  actor: PropTypes.shape({
    profile_path: PropTypes.string,
    name: PropTypes.string,
    character: PropTypes.string
  })
}
