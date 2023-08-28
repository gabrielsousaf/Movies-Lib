import './CastAndCrew.css'

import { Helmet } from 'react-helmet';

import { Link } from "react-router-dom";
import { BiUpArrowAlt } from 'react-icons/bi'
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { fetchMovieCastAndCrew } from '../../services/MovieCastAndCrew';
import { fetchMovieDetails } from '../../services/Movie';

import { CastCardCredits, MovieCredits } from '../../components/MovieCard/MovieCard';



const CastAndCrew = () => {
  const { id } = useParams();
  const [movieDetails, setMovieDetails] = useState({ title: '' }); 
  const [castAndCrew, setCastAndCrew] = useState({ cast: [], crew: [] });

  useEffect(() => {
    fetchMovieDetails(id).then((movieData) => {
      setMovieDetails(movieData);
    });

    fetchMovieCastAndCrew(id).then((castAndCrewData) => {
      setCastAndCrew(castAndCrewData);
    });
  }, [id]);

  const directors = castAndCrew.crew.filter((member) => member.job === 'Director');
  const writers = castAndCrew.crew.filter((member) => member.department === 'Writing');
  const otherCrew = castAndCrew.crew.filter((member) => member.job !== 'Director' && member.department !== 'Writing');

  return (
    <main className="container-movie-cast">

      <Helmet title={`${movieDetails.title}: Cast & Crew`} />

      <Link to={`/movie/${id}`}>
        <p>{movieDetails.title} <span> ({new Date(movieDetails.release_date).getFullYear()}) </span> </p>
      </Link>
      
      <h2>Cast & Crew</h2>

      <div className="crew-list">
        <h3>Directors</h3>
        {directors.map((director, index) => (
          <MovieCredits key={index} credits={director} />
        ))}
      </div>


      <div className="crew-list">
        <h3>Writers</h3>
        {writers.map((writer, index) => (
          <MovieCredits key={index} credits={writer} />
        ))}
      </div>



      <div className="cast-list">
        <h3>Cast</h3>

        <div>
          {castAndCrew.cast.map((actor, index) => (
            <CastCardCredits key={index} actor={actor} />
          ))}
        </div>

      </div>


      <div className="crew-list">
        <h3>Crew</h3>
        {otherCrew.map((crewMember, index) => (
          <MovieCredits key={index} credits={crewMember} />
        ))}
      </div>

      <a href='#' className='scrollup'>
        <BiUpArrowAlt />
      </a>

    </main>
  );
};

export default CastAndCrew;
