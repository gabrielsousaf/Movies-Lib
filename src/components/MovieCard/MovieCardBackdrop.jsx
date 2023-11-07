import { Link } from "react-router-dom";
import { imgApi } from "../../services/api/api";
import PropTypes from "prop-types";

export const MovieCardBackdrop = ({ movie }) => {
  const imageUrl = imgApi.defaults.baseURL + movie.backdrop_path;

  return (
    <div className="series-card">
      <Link className="details" to={`/movie/${movie.id}`}>
        <img src={imageUrl} alt={movie.original_title} />
        <h2>{movie.title}</h2>
      </Link>
    </div>
  );
};

MovieCardBackdrop.propTypes = {
  movie: PropTypes.shape({
    backdrop_path: PropTypes.string,
    original_title: PropTypes.string,
    title: PropTypes.string,
    id:PropTypes.number,
  }).isRequired,
}