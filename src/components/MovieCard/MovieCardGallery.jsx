import { imgApi } from '../../services/api/api';
import PropTypes from "prop-types";

export const MovieCardGallery = ({ image }) => {
  return (
    <div className="movie-card-gallery">
      <img 
        src={imgApi.defaults.baseURL + image.file_path} 
        alt={`Image ${image.name}`} 
      />
    </div>
  );
};

MovieCardGallery.propTypes = {
  image: PropTypes.shape({
    file_path: PropTypes.string,
    name: PropTypes.string,
    id: PropTypes.number,
  }).isRequired,
}