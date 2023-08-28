import './Movies.css'
import '../Home/Home.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { Helmet } from 'react-helmet';

import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { imgApi } from '../../services/api';
import { fetchMovieDetails } from '../../services/Movie';
import { fetchMovieCast } from '../../services/MovieCast';
import { fetchRecommendedMovies } from '../../services/RecommendedMovies';
import { fetchImages } from '../../services/GaleryImages';

import { carouselSettingsCast, carouselSettingsRecomended, carouselSettingsGalery } from '../../components/Carousel/Carousel';
import { useCarousel } from '../../components/Carousel/CarouselFunction';
import { MovieRecomend, CastCard, MovieImage } from '../../components/MovieCard/MovieCard'

import { BiChevronLeft, BiChevronRight, BiSolidStar } from "react-icons/bi";

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
  const imageUrl = imgApi.defaults.baseURL + movieDetails.poster_path;
  const durationInHours = Math.floor(movieDetails.runtime / 60);
  const durationInMinutes = movieDetails.runtime % 60;


  return (
    <main className="container-movie-details">
      <Helmet title={`${movieDetails.title}: Details`} />

      <div className='poster'>
        <img src={firstImage} alt={`Image ${firstImage}`} className='poster-image' />
      </div>

      <div className='card-info'>
        <div className='container-movie'>
          <div className="movie-poster">
            <img src={imageUrl} alt={`${movieDetails.original_title} Poster`} />
          </div>

          <div className='content-info'>
            <div className="title">
              <h1>{movieDetails.title}</h1>
            </div>
            <div className="info"> 
              <ul>
                <li><BiSolidStar /> {movieDetails.vote_average} / 10</li>
                <li>{movieDetails.release_date.substring(0, 4)}</li>
                <li>{durationInHours}h{durationInMinutes}</li>
              </ul>

              <hr />

              <p className='resume'>{movieDetails.overview}</p>

              <div className="tags">
                {movieGenres.map((genre) => (
                  <span key={genre.id} className="tag">
                    {genre.name}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="recommended-movies">
        <div className='container-movies'>
          <div className='text'>
            <h2>Recommended</h2>
            <div className='buttons'>
              <span onClick={prevSlide}> <BiChevronLeft /> </span>
              <span onClick={nextSlide}> <BiChevronRight /> </span>
            </div>
          </div>

          <div className='image'>
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

        </div>
      </div>

      <div className="container-movies">
        <div className='text'>
          <h2>Cast</h2>
          <Link to={`/movie/${id}/credits`}>
            <button>See full cast & crew</button>
          </Link>    
        </div>

        
        <div className='image'>

          <Carousel2>
            {movieCast.cast &&
              movieCast.cast.slice(0, 20).map((actor, index) => (
                <CastCard key={index} actor={actor} />
              ))}
          </Carousel2>
        </div>

      </div>

      <div className='container-movies'>

        <div className='text'>
          <h2>gallery</h2>

          <Link to={`/movie/${id}/images`}>
            <button> See all images </button>
          </Link>
        </div>



        <div className='image'>
          <GalleryCarousel>
            {gallery.map((image) => (
              <MovieImage key={image.id} image={image} />
            ))}
          </GalleryCarousel>
        </div>

      </div>
    </main>
  );
};

export default MovieDetails;
