import { Link } from "react-router-dom";
import { imgApi } from "../../services/api/api";
import PropTypes from "prop-types";

import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

import { format } from 'date-fns';
import { enUS } from 'date-fns/locale';


export const MovieCard = ({ movie }) => {
  const imageUrl = imgApi.defaults.baseURL + movie.poster_path;

  let formattedDate = "";
  if (movie.release_date) {
    formattedDate = format(new Date(movie.release_date), 'LLL d, yyyy', { locale: enUS });
  }

  const notePercentage = Math.round((movie.vote_average / 10) * 100) ;

  const getColorStyles = () => {
    if (notePercentage < 40) {
      return {
        trail: {
          stroke: '#571435', 
        },
        path: {
          stroke: "#C9225A",
        },
        text: {
          fill: "#FFF",
          fontSize: '2rem',
          fontWeight: 'bold',
        },     
      };
    } else if (notePercentage < 70) {
      return {
        trail: {
          stroke: '#423D0F',
        },
        path: {
          stroke: "#CED130",
        },
        text: {
          fill: "#FFF",
          fontSize: '2rem',
          fontWeight: 'bold',
        },
      };
    } else {
      return {
        trail: {
          stroke: '#204529',
        },
        path: {
          stroke: "#21D07A",
        },
        text: {
          fill: "#FFF",
          fontSize: '2rem',
          fontWeight: 'bold',
        },
      }
    }
  };

  const colorStyles = getColorStyles();


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

MovieCard.propTypes = {
  movie: PropTypes.shape({
    release_date: PropTypes.number,
    poster_path: PropTypes.string,
    original_title: PropTypes.string,
    name: PropTypes.string,
    first_air_date: PropTypes.string,
    vote_average: PropTypes.number,
    title: PropTypes.string,
    id:PropTypes.number,
  }).isRequired,
}


