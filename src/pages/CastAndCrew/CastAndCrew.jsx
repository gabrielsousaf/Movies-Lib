import { Main, CrewList, Name, Title, CastList, Container } from './CastAndCrew.style'

import { Helmet } from 'react-helmet';

import { Link } from "react-router-dom";
import { BiUpArrowAlt } from 'react-icons/bi'
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { fetchMovieCastAndCrew } from '../../services/Fetches/MovieCastAndCrew';
import { fetchMovieDetails } from '../../services/Fetches/Movie';

import { MovieCredits, CastCardCredits } from '../../components/MovieCard/MovieCardCastCrew';


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
    <Main className="container-movie-cast">

      <Helmet title={`${movieDetails.title}: Cast & Crew`} />

      <Link to={`/movie/${id}`}>
        <p>{movieDetails.title} <span> ({new Date(movieDetails.release_date).getFullYear()}) </span> </p>
      </Link>
      
      <Title>Cast & Crew</Title>

      <CrewList className="crew-list">
        <Name>Directors</Name>
        {directors.map((director, index) => (
          <MovieCredits key={index} credits={director} />
        ))}
      </CrewList>


      <CrewList className="crew-list">
        <Name>Writers</Name>
        {writers.map((writer, index) => (
          <MovieCredits key={index} credits={writer} />
        ))}
      </CrewList>



      <CastList className="cast-list">
        <Name>Cast</Name>
        <Container>
          {castAndCrew.cast.map((actor, index) => (
            <CastCardCredits key={index} actor={actor} />
          ))}
        </Container>
      </CastList>


      <CrewList className="crew-list">
        <Name>Crew</Name>
        {otherCrew.map((crewMember, index) => (
          <MovieCredits key={index} credits={crewMember} />
        ))}
      </CrewList>

      <a href='#' className='scrollup'>
        <BiUpArrowAlt />
      </a>

    </Main>
  );
};

export default CastAndCrew;