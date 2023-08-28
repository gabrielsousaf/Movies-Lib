import './Gallery.css'
import { Helmet } from 'react-helmet';

import { Link } from "react-router-dom";
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { fetchImages } from '../../services/GaleryImages';
import { fetchMovieDetails } from '../../services/Movie';
import { MovieImage } from '../../components/MovieCard/MovieCard';

const MovieImages = () => {
  const { id } = useParams();
  const [images, setImages] = useState([]);
  const [movieDetails, setMovieDetails] = useState({ title: '' }); 

  useEffect(() => {
    fetchMovieDetails(id).then((movieData) => {
      setMovieDetails(movieData);
    });

    fetchImages(id).then((imageData) => {
      setImages(imageData.backdrops);
    });
  }, [id]);

  return (
    <main className="container-movie-images">
      <Helmet title={`${movieDetails.title}: Gallery`} />
      <Link to={`/movie/${id}`}>
        <p>{movieDetails.title} <span> ({new Date(movieDetails.release_date).getFullYear()}) </span> </p>
      </Link>
      
      <h2>Gallery</h2>

      <div className="image-gallery">
        {images.map((image) => (
          <MovieImage key={image.id} image={image} />
        ))}
      </div>
    </main>
  );
}

export default MovieImages;