import { Main, Container, TextButton, Title, Buttons, Button, Image } from './Home.style'

import { Helmet } from 'react-helmet';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useCarousel } from '../../components/Carousel/CarouselFunction';
import { carouselSettings, carouselSettings2 } from '../../components/Carousel/Carousel';

import { BiChevronLeft, BiChevronRight } from "react-icons/bi";

import { useState, useEffect} from "react"

import { MovieCardBackdrop } from "../../components/MovieCard/MovieCardBackdrop";
import { MovieCard } from '../../components/MovieCard/MovieCard';
import { fetchTrendingMovies } from "../../services/Fetches/TrendingMovies"
import { fetchInTheaters } from "../../services/Fetches/TheatersMovies"

const Home = () => {

  const { sliderRef, nextSlide, prevSlide, Carousel } = useCarousel(carouselSettings);
  const { sliderRef: sliderRef2, nextSlide: nextSlide2, prevSlide: prevSlide2, Carousel: Carousel2 } = useCarousel(carouselSettings2);


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
            <Button onClick={prevSlide}> <BiChevronLeft /> </Button>
            <Button onClick={nextSlide}> <BiChevronRight /> </Button>
          </Buttons>
        </TextButton>
      </Container>
      <Image>
        <Carousel>
          {TrendingMovie.length === 0 && <p>Loading...</p>}
              {TrendingMovie.length > 0 &&
                TrendingMovie.map((movie) => (
                  <MovieCardBackdrop key={movie.id} movie={movie} />
                ))}
        </Carousel>
      </Image>

      <Container>
        <TextButton>
          <Title> now in theaters</Title>
          <Buttons>
            <Button onClick={prevSlide2}> <BiChevronLeft /> </Button>
            <Button onClick={nextSlide2}> <BiChevronRight /> </Button>
          </Buttons>
        </TextButton>
      </Container>
      <Image>
        <Carousel2>
          {TheatersMovie.length === 0 && <p>Loading...</p>}
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