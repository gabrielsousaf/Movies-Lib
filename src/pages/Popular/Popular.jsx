import '../Top_Rated/style.css'

import { useState, useEffect } from "react"
import {MovieCard} from "../../components/MovieCard/MovieCard"
import { handleNextPage, handlePrevPage } from "../../components/Pagination/Pagination"

import { fetchPopularMovies } from "../../services/PopularMovies"

import { BiRightArrowAlt, BiLeftArrowAlt } from 'react-icons/bi'


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
        
      </div>
    </div>
  )
}

export default Popular;