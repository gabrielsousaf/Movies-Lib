import { useRef } from 'react';
import Slider from 'react-slick';

export const useCarousel = (carouselSettings) => {
  const sliderRef = useRef(null);

  const nextSlide = () => {
    sliderRef.current.slickNext();
  };

  const prevSlide = () => {
    sliderRef.current.slickPrev();
  };

  const Carousel = ({ children }) => (
    <Slider {...carouselSettings} ref={sliderRef}>
      {children}
    </Slider>
  );

  return { sliderRef, nextSlide, prevSlide, Carousel };
};
