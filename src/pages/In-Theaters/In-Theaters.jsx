import { Main, Title, Container, Pagination } from "./In-Theaters.style"

import { useState, useEffect } from "react"

import { MovieCard } from "../../components/MovieCard/MovieCard"
import { handleNextPage, handlePrevPage } from "../../components/Pagination/Pagination"
import { fetchInTheaters } from "../../services/Fetches/TheatersMovies"

import { BiRightArrowAlt, BiLeftArrowAlt } from 'react-icons/bi'

const InTheaters = () => {
  const [ InTheatersMovie, setInTheatersMovie ] =useState([]);
  const [ currentPage, setCurrentPage ] = useState(1);
  const [ totalPages, setTotalPages ] = useState(1);


  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  useEffect(() => {
    fetchInTheaters(currentPage).then(({ results, total_pages}) => {
      setInTheatersMovie(results)
      setTotalPages(total_pages);
    }, [currentPage])
  })

  return (
    <Main>
      <Title>In Theaters:</Title>
      <Container>
        { InTheatersMovie.length === 0 && <p>Loading...</p>}
          { InTheatersMovie.length > 0 &&
            InTheatersMovie.map((movie) => 
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

export default InTheaters;