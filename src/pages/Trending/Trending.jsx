import { Main, Title, Container, Pagination } from "./Trending.style"

import { Helmet } from 'react-helmet';

import { useState, useEffect } from "react"

import { MovieCard } from "../../components/MovieCard/MovieCard"
import { handleNextPage, handlePrevPage } from "../../components/Pagination/Pagination"
import { fetchTrendingMovies } from "../../services/Fetches/TrendingMovies"

import { BiRightArrowAlt, BiLeftArrowAlt } from 'react-icons/bi'

const TopRated = () => {
  const [ TrendingMovie, setTrendingMovie ] =useState([]);
  const [ currentPage, setCurrentPage ] = useState(1);
  const [ totalPages, setTotalPages ] = useState(1);


  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  useEffect(() => {
    fetchTrendingMovies(currentPage).then(({ results, total_pages}) => {
      setTrendingMovie(results)
      setTotalPages(total_pages);
    }, [currentPage])
  })

  return (
    <Main>
      <Helmet title='Trending'/>
      <Title>Trending:</Title>
      <Container>
        {TrendingMovie.length === 0 && <p>Loading...</p>}
          {TrendingMovie.length > 0 &&
            TrendingMovie.map((movie) => 
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

export default TopRated