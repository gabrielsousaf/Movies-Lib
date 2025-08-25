import { Main, Title, Container, Pagination } from "./TopRated.style"

import { Helmet } from 'react-helmet';

import { useState, useEffect } from "react"

import { MovieCard } from "../../components/MovieCard/MovieCard"
import { handleNextPage, handlePrevPage } from "../../components/Pagination/Pagination"
import { fetchTopRatedMovies} from "../../services/Fetches/TopRatedMovies"
import { Loader } from "../../components/Loader/Loader";

import { BiRightArrowAlt, BiLeftArrowAlt } from 'react-icons/bi'

const TopRated = () => {
  const [ TopRatedMovie, setTopRatedMovie ] =useState([]);
  const [ currentPage, setCurrentPage ] = useState(1);
  const [ totalPages, setTotalPages ] = useState(1);
  const [ isLoading, setIsLoading ] = useState(true);


  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  useEffect(() => {
    setIsLoading(true);
    fetchTopRatedMovies(currentPage).then(({ results, total_pages}) => {
      setTopRatedMovie(results)
      setTotalPages(total_pages);
    }).finally(() => setIsLoading(false));
  }, [currentPage])

  return (
    <Main>
      {isLoading && <Loader />}
      <Helmet title='Top Rated'/>
      <Title>Top Rated:</Title>
      <Container>
        {TopRatedMovie.length === 0 && !isLoading && <p>Sem resultados.</p>}
          {TopRatedMovie.length > 0 &&
            TopRatedMovie.map((movie) => 
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