import { Main, Name, Title, ImageGallery } from './Gallery.style'

import { Helmet } from 'react-helmet';

import { Link } from "react-router-dom";
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { fetchGallery } from '../../services/Fetches/GalleryImages';
import { fetchMovieDetails } from '../../services/Fetches/Movie';
import { MovieCardGallery } from '../../components/MovieCard/MovieCardGallery';

const Gallery = () => {
  const { id } = useParams();
  const [images, setImages] = useState([]);
  const [movieDetails, setMovieDetails] = useState({ title: '' }); 

  useEffect(() => {
    fetchMovieDetails(id).then((movieData) => {
      setMovieDetails(movieData);
    });

    fetchGallery(id).then((imageData) => {
      setImages(imageData.backdrops);
    });
  }, [id]);



  return (
    <Main>
      <Helmet title={`${movieDetails.title}: Gallery`} />
      <Link to={`/movie/${id}`}>
        <Name>{movieDetails.title} <span> ({new Date(movieDetails.release_date).getFullYear()}) </span> </Name>
      </Link>
      
      <Title>Gallery</Title>

      <ImageGallery>
        {images.map((image) => (
          <MovieCardGallery  key={image.id} image={image} />
        ))}
      </ImageGallery>
    </Main>
  );
}

export default Gallery;