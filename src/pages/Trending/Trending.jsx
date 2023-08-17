import '../Top_Rated/style.css'

import { useState, useEffect } from "react";
import {MovieCard} from "../../components/MovieCard/MovieCard";
import { fetchTrendingMovies } from "../../services/TrendingMovies";
import { handleNextPage, handlePrevPage } from "../../components/Pagination/Pagination"

import { BiRightArrowAlt, BiLeftArrowAlt } from 'react-icons/bi'


const Trending = () => {
  const [ TrendingsMovies, setTreandingsMovies ] = useState([])

  const [ currentPage, setCurrentPage ] = useState(1);
  const [ totalPages, setTotalPages ] = useState(1);

  useEffect(() => {
    fetchTrendingMovies(currentPage).then(({ results, total_pages}) => {
      setTreandingsMovies(results);
      setTotalPages(total_pages);
    })
  }, [currentPage]);


  return (
    <div className="container">
      <h2 className="title">Trending:</h2>
      <div className="movies-container">
        {TrendingsMovies.length === 0 && <p>Loanding...</p>}
        {TrendingsMovies.length > 0 &&
          TrendingsMovies.map((movie) => 
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

export default Trending;