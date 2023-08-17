import './Movies.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { imgApi } from '../../services/api';
import { fetchMovieDetails} from '../../services/Movie'; 
import { fetchMovieCast } from '../../services/MovieCast';
import { fetchRecommendedMovies } from '../../services/RecommendedMovies';
import { fetchImages } from '../../services/Images';

import { carouselSettingsCast, carouselSettingsRecomended, carouselSettingsGalery} from '../../components/Carousel/Carousel';
import { useCarousel } from '../../components/Carousel/CarouselFunction';

import { MovieRecomend, CastCard, MovieImageGallery } from '../../components/MovieCard/MovieCard'

import { BiChevronLeft, BiChevronRight } from "react-icons/bi";

const MovieDetails = () => {
  const { id } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);
  const [movieCast, setMovieCast] = useState([]);

  const [movieGenres, setMovieGenres] = useState([]);
  const [gallery, setGallery] = useState([]);
  const [recommendedMovies, setRecommendedMovies] = useState([]);

  const { sliderRef, nextSlide, prevSlide, Carousel } = useCarousel(carouselSettingsRecomended);
  const { sliderRef: sliderRef2, Carousel: Carousel2 } = useCarousel(carouselSettingsCast);
  const { sliderRef: gallerySliderRef, Carousel: GalleryCarousel } = useCarousel(carouselSettingsGalery);
  
  useEffect(() => {
    fetchMovieDetails(id).then((details) => {
      setMovieDetails(details);
      setMovieGenres(details.genres)
    });
    
    fetchMovieCast(id).then((cast) => {
      setMovieCast(cast)
    });

    fetchRecommendedMovies(id).then((recommended) => {
      setRecommendedMovies(recommended.results)
    })

    fetchImages(id).then((images) => {
      setGallery(images.backdrops)
    })

  }, [id]);

  if (!movieDetails) {
    return <p>Loading...</p>;
  }

  const firstImage = gallery.length > 0 ? imgApi.defaults.baseURL + gallery[0].file_path : '';
  const durationInHours = Math.floor(movieDetails.runtime / 60);
  const durationInMinutes = movieDetails.runtime % 60;

  
  return (
    <div className="movie-details">

      <img src={firstImage} alt={`Image ${firstImage}`}  /> 
      <h2>{movieDetails.title}</h2>
      <p>{movieDetails.overview}</p>

      <p>Score: {movieDetails.vote_average}</p>
      <div className="tags">
        {movieGenres.map((genre) => (
          <span key={genre.id} className="tag">
            {genre.name}
          </span>
         ))}
      </div>

      <p>Year: {movieDetails.release_date.substring(0, 4)}</p>
      <p>Duration: {durationInHours}h{durationInMinutes}</p>

      
      <div className="recommended-movies">

        <div className='buttons'>
          <span onClick={prevSlide}> <BiChevronLeft /> </span>
          <span onClick={nextSlide}> <BiChevronRight /> </span>
        </div>

        <h2>Recommended:</h2>
        <Carousel>
          {recommendedMovies.length === 0 ? (
            <p>Loading</p>
          ) : (
            recommendedMovies.map((movie) => (
              <MovieRecomend key={movie.id} movie={movie} />
            ))
          )}
        </Carousel>

      </div>  



      <div className="movie-cast">
        <Carousel2>
          {movieCast.cast &&
            movieCast.cast.slice(0, 20).map((actor, index) => (
              <CastCard key={index} actor={actor} />
          ))}
        </Carousel2>
      </div>



      <GalleryCarousel>
        {gallery.map((image) => (
          <MovieImageGallery key={image.id} image={image}  />
        ))}
      </GalleryCarousel>



    
    </div>
  );
};

export default MovieDetails;
