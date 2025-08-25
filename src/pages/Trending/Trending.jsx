import { Main, Title, Container, Pagination } from "./Trending.style"

import { Helmet } from 'react-helmet';

import { useState, useEffect } from "react"

import { MovieCard } from "../../components/MovieCard/MovieCard"
import { handleNextPage, handlePrevPage } from "../../components/Pagination/Pagination"
import { fetchTrendingMovies } from "../../services/Fetches/TrendingMovies"
import { Loader } from "../../components/Loader/Loader";

import { BiRightArrowAlt, BiLeftArrowAlt } from 'react-icons/bi'

const TopRated = () => {
  const [ TrendingMovie, setTrendingMovie ] =useState([]);
  const [ currentPage, setCurrentPage ] = useState(1);
  const [ totalPages, setTotalPages ] = useState(1);
  const [ isLoading, setIsLoading ] = useState(true);


  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  useEffect(() => {
    setIsLoading(true);
    fetchTrendingMovies(currentPage).then(({ results, total_pages}) => {
      setTrendingMovie(results)
      setTotalPages(total_pages);
    }).finally(() => setIsLoading(false));
  }, [currentPage])

  return (
    <Main>
      {isLoading && <Loader />}
      <Helmet title='Trending'/>
      <Title>Trending:</Title>
      <Container>
        {TrendingMovie.length === 0 && !isLoading && <p>Sem resultados.</p>}
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