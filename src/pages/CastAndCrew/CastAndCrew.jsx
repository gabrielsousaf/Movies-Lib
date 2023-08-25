import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieCastAndCrew } from '../../services/MovieCastAndCrew';
import { CastCard, MovieCredits } from '../../components/MovieCard/MovieCard';

const CastAndCrew = () => {
  const { id } = useParams();
  const [castAndCrew, setCastAndCrew] = useState({ cast: [], crew: [] });

  useEffect(() => {
    fetchMovieCastAndCrew(id).then((castAndCrewData) => {
      setCastAndCrew(castAndCrewData);
    });
  }, [id]);

  return (
    <div className="container-movie-cast">
      <h2>Movie Cast and Crew</h2>

      <div className="crew-list">
        <h3>Crew</h3>
        {castAndCrew.crew.slice(0, 10).map((member, index) => (
          <MovieCredits key={index} credits={member} />
        ))}
      </div>

      <div className="cast-list">
        <h3>Cast</h3>
        {castAndCrew.cast.map((actor, index) => (
          <CastCard key={index} actor={actor} />
        ))}
      </div>

    </div>
  );
};

export default CastAndCrew;
