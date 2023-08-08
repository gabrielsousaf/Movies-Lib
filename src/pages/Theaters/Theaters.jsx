import { useState, useEffect } from "react";
import MovieCard from "../../components/MovieCard/MovieCard";
import { fetchInTheaters } from "../../services/TheatersMovies";

import { BiRightArrowAlt, BiLeftArrowAlt } from 'react-icons/bi'

import '../Top_Rated/Top_Rated.css'



const Trending = () => {
  const [ theaters, setTheaters ] = useState([]);
  const [ currentPage, setCurrentPage ] = useState(1);
  const [ totalPages, setTotalPages ] = useState(1);

  useEffect(() => {
    fetchInTheaters(currentPage).then(({ results, total_pages}) => {
      setTheaters(results);
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
      <h2 className="title">In Theaters:</h2>
      <div className="movies-container">
        {theaters.length === 0 && <p>Loading...</p>}
        {theaters.length > 0 &&
          theaters.map((movie) => 
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

export default Trending;