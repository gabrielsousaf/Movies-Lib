import { Link } from "react-router-dom";
import { imgApi } from "../../services/api/api";
import PropTypes from "prop-types";
import { useMemo } from "react";
import { getProgressStyles } from "../../utils/getProgressStyles";

import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

import { format } from 'date-fns';
import { enUS } from 'date-fns/locale';


export const MovieCard = ({ movie }) => {
  const defaultTitle = movie.title || movie.name || movie.original_title || "Untitled";

  const imageUrl = useMemo(() => {
    const base = imgApi.defaults.baseURL || "";
    return movie.poster_path ? base + movie.poster_path : "";
  }, [movie.poster_path]);

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
        <img src={imageUrl} alt={movie.original_title || defaultTitle} />
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
        <h2 className="series-title">{defaultTitle}</h2>
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


