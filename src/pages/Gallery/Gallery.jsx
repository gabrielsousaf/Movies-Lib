import './Gallery.css'

import { Link } from "react-router-dom";

import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchImages } from '../../services/GaleryImages';
import { fetchMovieDetails } from '../../services/Movie';

import { MovieImageGallery } from '../../components/MovieCard/MovieCard';

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
      <Link to={`/movie/${id}`}>
        <p>{movieDetails.title} <span> ({new Date(movieDetails.release_date).getFullYear()}) </span> </p>
      </Link>
      
      <h2>Gallery</h2>
      <div className="image-gallery">
        {images.map((image) => (
          <MovieImageGallery key={image.id} image={image} />
        ))}
      </div>
    </main>
  );
}

export default MovieImages;