import './Home.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { useState, useEffect } from "react";

import { useCarousel } from '../../components/Carousel/CarouselFunction';
import { carouselSettings, carouselSettings2 } from '../../components/Carousel/Carousel';
import { MovieCard, MovieCardBackdrop } from "../../components/MovieCard/MovieCard";

import { fetchInTheaters } from "../../services/TheatersMovies"; 
import { fetchTrendingMovies } from "../../services/TrendingMovies";


import { BiChevronLeft, BiChevronRight, BiUpArrowAlt } from "react-icons/bi";

const Home = () => {

  const { sliderRef, nextSlide, prevSlide, Carousel } = useCarousel(carouselSettings);
  const { sliderRef: sliderRef2, nextSlide: nextSlide2, prevSlide: prevSlide2, Carousel: Carousel2 } = useCarousel(carouselSettings2);

  const [TrendingsMovies, setTrendingsMovies] = useState([]);
  const [theaters, setTheaters] = useState([]);

  useEffect(() => {
    fetchTrendingMovies().then((trendingMovies) => {
      setTrendingsMovies(trendingMovies.results);
    });

    fetchInTheaters().then((InTheaters) => {
      setTheaters(InTheaters.results);
    });
  }, []);


 
  return (
    <main className='container-home'>
      {/* Carrossel 1 - Trending Today */}
      <div className='container-context'>
        <div className='text'>
          <h2>Trending Today</h2>
          <div className='buttons'>
            <span onClick={prevSlide}> <BiChevronLeft /> </span>
            <span onClick={nextSlide}> <BiChevronRight /> </span>
          </div>
        </div>

        <div className='image'>
          <Carousel>
            {TrendingsMovies.length === 0 && <p>Loading...</p>}
            {TrendingsMovies.length > 0 &&
              TrendingsMovies.map((movie) => (
                <MovieCardBackdrop key={movie.id} movie={movie} />
              ))}
          </Carousel>
        </div>
      </div>

      {/* Carrossel 2 - Now In Theaters */}
      <div className='container-context'>
        <div className='text'>
          <h2>Now In Theaters</h2>
          <div className='buttons'>
            <span onClick={prevSlide2}> <BiChevronLeft /> </span>
            <span onClick={nextSlide2}> <BiChevronRight /> </span>
          </div>
        </div>

        <div className='image'>
          <Carousel2>
            {theaters.length === 0 && <p>Loading...</p>}
            {theaters.length > 0 &&
              theaters.map((movie) => (
                <MovieCard key={movie.id} movie={movie} />
              ))}
          </Carousel2>
        </div>
      </div>
      
      <a href='#' className='scrollup'>
        <BiUpArrowAlt />
      </a>
    </main>
  );
};

export default Home;
