import { Link } from "react-router-dom";
import { imgApi } from "../../services/api/api";
import PropTypes from "prop-types";
import { useMemo } from "react";
import { getProgressStyles } from "../../utils/getProgressStyles";

import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

import { format } from 'date-fns';
import { enUS } from 'date-fns/locale';


export const MovieCardRecommend = ({ movie }) => {
  const imageUrl = useMemo(() => imgApi.defaults.baseURL + movie.poster_path, [movie.poster_path]);

  const formattedDate = useMemo(() => {
    if (!movie.release_date) return "";
    try {
      return format(new Date(movie.release_date), 'LLL d, yyyy', { locale: enUS });
    } catch {
      return String(movie.release_date);
    }
  }, [movie.release_date]);

  const notePercentage = useMemo(() => {
    const avg = typeof movie.vote_average === 'number' ? movie.vote_average : 0;
    return Math.round((avg / 10) * 100);
  }, [movie.vote_average]);

  const colorStyles = useMemo(() => getProgressStyles(notePercentage), [notePercentage]);


  return (
    <div className="series-card">
      <Link className="details" to={`/movie/${movie.id}`}>
        <img src={imageUrl} alt={movie.original_title} />
        <div className="DateProgress">
          <p>{formattedDate}</p>
          <div className="progressbar" style={{ width: "50px" }}>
            <CircularProgressbar
              value={notePercentage}
              text={`${notePercentage.toString()}%`}
              styles={colorStyles}
            />
          </div>
        </div>
        <h2 className="series-title">{movie.title}</h2>
      </Link>
    </div>
  );
};

MovieCardRecommend.propTypes = {
  movie: PropTypes.shape({
    poster_path: PropTypes.string,
    release_date: PropTypes.number,
    original_title: PropTypes.string,
    name: PropTypes.string,
    first_air_date: PropTypes.string,
    vote_average: PropTypes.number,
    title: PropTypes.string,
    id:PropTypes.number,
  }).isRequired,
}








// export const CastCard = ({ actor }) => {
//   return (
//     <div className="movie-card">
//       <div className="details">
//         <img 
//           src={`https://image.tmdb.org/t/p/w200/${actor.profile_path}`} 
//           alt={actor.name}    
//         />
//       </div>

//     </div>
//   );
// };



// export const MovieImage = ({ image }) => {
//   console.log('Image ID:', image.id);
//   return (
//     <div className="movie-card">
//       <img 
//         src={imgApi.defaults.baseURL + image.file_path} 
//         alt={`Imagem ${image.name}`} 
//       />
//     </div>
//   );
// };



// export const MovieCredits = ({ credits }) => {
//   return (
//     <div className="movie-card">
//       <div className="details">
//         <dl>
//           <dt>{credits.name}</dt>
//           <dd>{credits.job}</dd>
//         </dl>
//       </div>

//     </div>
//   );
// };



// export const CastCardCredits = ({ actor }) => {
//   const characterName = actor.character;

//   return (
//     <div className="movie-card">
//       <img 
//         src={`https://image.tmdb.org/t/p/w92/${actor.profile_path}`} 
//         alt={actor.name}    
//       />
//       <div>
//         <p>{actor.name}</p>
//         <p>as {characterName}</p>
//       </div>


//     </div>
//   );
// };


