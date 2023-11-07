import { imgApi } from '../../services/api/api';
import PropTypes from 'prop-types';
import { FaStar } from 'react-icons/fa';
import { Helmet } from 'react-helmet';

export const MovieCardSingle = ({ movie }) => {
  const imageBackdrop = imgApi.defaults.baseURL + movie.backdrop_path;
  const imageUrl = imgApi.defaults.baseURL + movie.poster_path;

  const firstAirDate = new Date(movie.release_date);
  const durationInHours = Math.floor(movie.runtime / 60);
  const durationInMinutes = movie.runtime % 60;

  return (
    <div className="movie-card">
      <Helmet title={`${movie.title}: Details`} />

      <div className='poster'>
        <img src={imageBackdrop} alt={movie.original_name} />
      </div>

      <div className="card-info">
        <div className="container-serie">

          <div className="serie-poster">
            <img src={imageUrl} alt={movie.original_name} />
          </div>

          <div className="content-info">
            <div className="title">
              <h2> {movie.title} <span>      
                ({firstAirDate.getFullYear()}) </span> </h2>
            </div>

            <div className="info">
              <ul>
                <li> <FaStar/> {movie.vote_average.toFixed(1)} / 10</li>
                <li> {durationInHours}h{durationInMinutes} </li>
              </ul>

              <hr />
              <p className="resume">
                {movie.overview}
              </p>

              <div className="tags">
                {movie.genres.map((genre) => (
                  <span key={genre.id}>{genre.name}</span>
                ))}
              </div>

              {movie.created_by && movie.created_by.length > 0 && (
                <div className="creators">
                  {movie.created_by.map((creator, index) => (
                    <div key={index}>
                      <h3>{creator.name}</h3>
                      <p>Creator</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

MovieCardSingle.propTypes = {
  movie: PropTypes.shape({
    release_date: PropTypes.number,
    runtime: PropTypes.number,
    title: PropTypes.string,
    backdrop_path: PropTypes.string,
    poster_path: PropTypes.string,
    original_name: PropTypes.string,
    name: PropTypes.string,
    first_air_date: PropTypes.string,
    vote_average: PropTypes.number,
    overview: PropTypes.string,
    number_of_seasons: PropTypes.number,
    seasons: PropTypes.arrayOf(
      PropTypes.shape({
        season_number: PropTypes.number,
        episodes: PropTypes.arrayOf(
          PropTypes.shape({
            name: PropTypes.string,
            vote_average: PropTypes.number,
            still_path: PropTypes.string,
          })
        ),
      })
    ),
    id: PropTypes.number,
    homepage: PropTypes.string,
    networks: PropTypes.arrayOf(
      PropTypes.shape({
        logo_path: PropTypes.string,
      })
    ),
    genres: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string,
      })
    ),
    created_by: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string,
      })
    ),
    last_episode_to_air: PropTypes.shape({
      season_number: PropTypes.number,
      episode_number: PropTypes.number,
      name: PropTypes.string,
      overview: PropTypes.string,
      vote_average: PropTypes.number,
      still_path: PropTypes.string,
    }),
  }).isRequired,
};



