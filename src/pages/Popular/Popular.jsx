import { useState, useEffect } from "react"
import MovieCard from "../../components/MovieCard/MovieCard"
import { fetchPopularMovies } from "../../services/PopularMovies"

import { BiRightArrowAlt, BiLeftArrowAlt } from 'react-icons/bi'

import '../Top_Rated/Top_Rated.css'


const Popular = () => {
  const [ PopularMovies, setPopularMovies ] = useState([]);
  const [ currentPage, setCurrentPage ] = useState(1);
  const [ totalPages, setTotalPages ] = useState(1);

  useEffect(() => {
    fetchPopularMovies(currentPage).then(({ results, total_pages}) => {
      setPopularMovies(results);
      setTotalPages(total_pages);
    })
  }, [currentPage]);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1)
    }
  }

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1)
    }
  }

  return (
    <div className="container">
      <h2 className="title">Popular:</h2>
      <div className="movies-container">
        {PopularMovies.length === 0 && <p>Loanding...</p>}
        {PopularMovies.length > 0 &&
          PopularMovies.map((movie) => 
          <MovieCard key={movie.id} movie={movie} />
        )}
      </div>

      <div className="pagination">
        <span 
          onClick={handlePrevPage} 
          disabled={currentPage === 1}
          className={currentPage === 1 ? "not-page" : "page"}  
        >
          <BiLeftArrowAlt /> 
          Previous Results
        </span>
        <p>Page {currentPage}</p>
        <span 
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
          className="page"
        >
          More Results <BiRightArrowAlt /> 
        </span>
      </div>
    </div>
  )
}

export default Popular;