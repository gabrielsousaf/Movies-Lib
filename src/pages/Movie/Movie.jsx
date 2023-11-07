import { Main, Container, TitleButton, Title, Buttons, Span, Button } from './Movie.style'

import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { useParams } from 'react-router-dom';
import { MovieCardSingle } from '../../components/MovieCard/MovieCardSingle';
import { MovieCastAndCrew } from '../../components/MovieCard/MovieCardCastCrew';
import { MovieCardRecommend } from '../../components/MovieCard/MovieCardRecommend';
import { MovieCardGallery } from '../../components/MovieCard/MovieCardGallery';
import { fetchMovieDetails } from '../../services/Fetches/Movie';
import { fetchMovieCastAndCrew } from '../../services/Fetches/MovieCastAndCrew';
import { fetchRecommendedMovies } from '../../services/Fetches/RecommendedMovies';
import { fetchGallery } from '../../services/Fetches/GalleryImages';

import { BiChevronLeft, BiChevronRight } from "react-icons/bi";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { carouselSettingsCast, carouselSettingsRecomended, carouselSettingsGallery } from '../../components/Carousel/Carousel';
import { useCarousel } from '../../components/Carousel/CarouselFunction';

const Movie = () => {
  const { id } = useParams();
  const [Cast, setCast] = useState([]);
  const [MovieCast, setMovieCast] = useState(null);
  const [MovieRecommend, setMovieRecommend] = useState([]);
  const [gallery, setGallery] = useState([]);

  const { sliderRef, nextSlide, prevSlide, Carousel } = useCarousel(carouselSettingsCast);
  const { sliderRef: recommendSliderRef, nextSlide: nextRecommendSlide, prevSlide: prevRecommendSlide, Carousel: RecommendCarousel } = useCarousel(carouselSettingsRecomended);
  const { sliderRef: GallerySliderRef, nextSlide: nextGallerySlide, prevSlide: prevGallerySlide, Carousel: GalleryCarousel } = useCarousel(carouselSettingsGallery);

  useEffect(() => {
    fetchMovieDetails(id).then((tvShowData) => {
      console.log(tvShowData)
      setMovieCast(tvShowData);
    });
  }, [id]);

  useEffect(() => {
    fetchMovieCastAndCrew(id).then((cast) => {
      setCast(cast);
    });
  }, [id]);

  useEffect(() => {
    fetchRecommendedMovies(id).then((recommend) => {
      setMovieRecommend(recommend.results);
    });
  }, [id]);

  useEffect(() => {
    fetchGallery(id).then((images) => {
      setGallery(images.backdrops);
    });
  }, [id]);

  return (
    <Main>
      <Container>
        {MovieCast=== null && <p>Loading...</p>}
        {MovieCast !== null && <MovieCardSingle movie={MovieCast} />}
      </Container>



      <Container>
        <TitleButton>
          <Title>Cast</Title>
          <Link to={`/movie/${id}/credits`}>
            <Button>See full cast & crew</Button>
          </Link>
        </TitleButton>

        <RecommendCarousel>
          {Cast.cast &&
            Cast.cast.map((actor, index) => (
              <MovieCastAndCrew actor={actor} key={index} />
            ))
          }
        </RecommendCarousel>
      </Container>



      <Container>
        <TitleButton>
          <Title>Recommended</Title>
          <Buttons>
            <Span onClick={prevSlide}> <BiChevronLeft /> </Span>
            <Span onClick={nextSlide} > <BiChevronRight /> </Span>
          </Buttons>
        </TitleButton>

        <Carousel>
          {MovieRecommend.length === 0 ? (
            <p>Loading</p>
          ) : (
            MovieRecommend.map((movie) => (
              <MovieCardRecommend key={movie.id} movie={movie} />
            ))
          )}
        </Carousel>
      </Container>

      <Container>
        <TitleButton>
          <Title>Gallery</Title>
          <Link to={`/movie/${id}/images`}>
            <Button>See all Images</Button>
          </Link>
        </TitleButton>

        <GalleryCarousel>
          {gallery.map((image) => (
            <MovieCardGallery key={image.id} image={image} />
          ))}
        </GalleryCarousel>
      </Container>
    </Main>
  );
};

export default Movie;
