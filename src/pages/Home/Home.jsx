import './Home.css';
import { useState, useEffect, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import MovieCard from "../../components/MovieCard/MovieCard";
import { fetchInTheaters } from "../../services/TheatersMovies"; // Importando as duas funções de API
import { fetchTrendingMovies } from "../../services/TrendingMovies"; // Importando as duas funções de API

import { BiChevronLeft, BiChevronRight } from "react-icons/bi";

const Home = () => {
  const [TrendingsMovies, setTrendingsMovies] = useState([]);
  const [theaters, setTheaters] = useState([]); // Estado para os filmes em exibição

  useEffect(() => {
    fetchTrendingMovies().then((trendingMovies) => {
      setTrendingsMovies(trendingMovies);
    });

    fetchInTheaters().then((InTheaters) => {
      setTheaters(InTheaters);
    });
  }, []);

  const sliderRef = useRef(null);
  const nextSlide = () => {
    sliderRef.current.slickNext();
  }
  const prevSlide = () => {
    sliderRef.current.slickPrev();
  }

  const sliderRef2 = useRef(null);
  const nextSlide2 = () => {
    sliderRef2.current.slickNext();
  }
  const prevSlide2 = () => {
    sliderRef2.current.slickPrev();
  }

  // Configurações do carrossel
  const carouselSettings = {
    dots: true,
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const carouselSettings2 = {
    dots: true,
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
    responsive: [
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className='container-home'>
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
          <Slider {...carouselSettings} ref={sliderRef}>
            {TrendingsMovies.length === 0 && <p>Loading...</p>}
            {TrendingsMovies.length > 0 &&
              TrendingsMovies.map((movie) => (
                <MovieCard key={movie.id} movie={movie} />
              ))}
          </Slider>
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
          <Slider {...carouselSettings2} ref={sliderRef2}>
            {theaters.length === 0 && <p>Loading...</p>}
            {theaters.length > 0 &&
              theaters.map((movie) => (
                <MovieCard key={movie.id} movie={movie} />
              ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Home;
