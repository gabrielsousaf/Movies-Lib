import { Main, Title, Container, Pagination } from "./Popular.style"

import { Helmet } from 'react-helmet';

import { useState, useEffect } from "react"

import { MovieCard } from "../../components/MovieCard/MovieCard"
import { handleNextPage, handlePrevPage } from "../../components/Pagination/Pagination"
import { fetchPopularMovies } from "../../services/Fetches/PopularMovies"

import { BiRightArrowAlt, BiLeftArrowAlt } from 'react-icons/bi'

const Popular = () => {
  const [ PopularMovie, setPopularMovie ] =useState([]);
  const [ currentPage, setCurrentPage ] = useState(1);
  const [ totalPages, setTotalPages ] = useState(1);


  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  useEffect(() => {
    fetchPopularMovies(currentPage).then(({ results, total_pages}) => {
      setPopularMovie(results)
      setTotalPages(total_pages);
    }, [currentPage])
  })

  return (
    <Main>
      <Helmet title='Popular'/>
      <Title>Popular:</Title>
      <Container>
        {PopularMovie.length === 0 && <p>Loading...</p>}
          {PopularMovie.length > 0 &&
            PopularMovie.map((movie) => 
            <MovieCard key={movie.id} movie={movie} />
          )}
      </Container>

      <Pagination>
      <span 
          onClick={() => handlePrevPage(currentPage, setCurrentPage)} 
          disabled={currentPage === 1}
          className={currentPage === 1 ? "not-page" : "page"}  
        >
          <BiLeftArrowAlt /> 
          Previous Results
        </span>
        <p>Page {currentPage}</p>
        <span 
          onClick={() => handleNextPage(currentPage, totalPages, setCurrentPage)}
          disabled={currentPage === totalPages}
          className="page"
        >
          More Results <BiRightArrowAlt /> 
        </span>
      </Pagination>
    </Main>
  )
}

export default Popular