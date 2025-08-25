import { Main, Container, TextButton, Title, Buttons, Button, Image } from './Home.style'

import { Helmet } from 'react-helmet';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useCarousel } from '../../components/Carousel/CarouselFunction';
import { carouselSettings, carouselSettings2 } from '../../components/Carousel/Carousel';

import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import { Link } from "react-router-dom";

import { useState, useEffect} from "react"

import { MovieCardBackdrop } from "../../components/MovieCard/MovieCardBackdrop";
import { MovieCard } from '../../components/MovieCard/MovieCard';
import { fetchTrendingMovies } from "../../services/Fetches/TrendingMovies"
import { fetchInTheaters } from "../../services/Fetches/TheatersMovies"

const Home = () => {

  const { nextSlide, prevSlide, Carousel } = useCarousel(carouselSettings);
  const { nextSlide: nextSlide2, prevSlide: prevSlide2, Carousel: Carousel2 } = useCarousel(carouselSettings2);


  const [TrendingMovie, setTrendingMovie] = useState([])
  const [TheatersMovie, setTheatersMovie] = useState([])


  useEffect(() => {
    fetchTrendingMovies().then((TrendingMovie) => {
      setTrendingMovie(TrendingMovie.results)
    });

    fetchInTheaters().then((TheatersMovie) => {
      setTheatersMovie(TheatersMovie.results)
    })
  }, [])

  return (
    <Main>
      <Helmet title='Home'/>
      <Container>
        <TextButton>
          <Title>Trending Today</Title>
          <Buttons>
            <Link className="see-all" to="/trending">See All</Link>
            <Button onClick={prevSlide}> <BiChevronLeft /> </Button>
            <Button onClick={nextSlide}> <BiChevronRight /> </Button>
          </Buttons>
        </TextButton>
      </Container>
      <Image>
        <Carousel>
          {TrendingMovie.length === 0 && (
            <div className="skeleton-row">
              {Array.from({ length: 6 }).map((_, i) => (
                <div key={i} className="skeleton-card" />
              ))}
            </div>
          )}
          {TrendingMovie.length > 0 &&
            TrendingMovie.map((movie) => (
              <MovieCardBackdrop key={movie.id} movie={movie} />
            ))}
        </Carousel>
      </Image>

      <Container>
        <TextButton>
          <Title>Now in Theaters</Title>
          <Buttons>
            <Link className="see-all" to="/in-theaters">See All</Link>
            <Button onClick={prevSlide2}> <BiChevronLeft /> </Button>
            <Button onClick={nextSlide2}> <BiChevronRight /> </Button>
          </Buttons>
        </TextButton>
      </Container>
      <Image>
        <Carousel2>
          {TheatersMovie.length === 0 && (
            <div className="skeleton-row">
              {Array.from({ length: 6 }).map((_, i) => (
                <div key={i} className="skeleton-card" />
              ))}
            </div>
          )}
          {TheatersMovie.length > 0 &&
            TheatersMovie.map((movie) => (
              <MovieCard key={movie.id} movie={movie} />
            ))}
        </Carousel2>
      </Image>
    </Main>
  )
}

export default Home;