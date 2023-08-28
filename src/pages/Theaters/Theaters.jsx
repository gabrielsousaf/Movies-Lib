import '../Top_Rated/style.css'

import { Helmet } from 'react-helmet';

import { useState, useEffect } from "react";
import { MovieCard } from "../../components/MovieCard/MovieCard";
import { handleNextPage, handlePrevPage } from "../../components/Pagination/Pagination"

import { fetchInTheaters } from "../../services/TheatersMovies";
import { BiRightArrowAlt, BiLeftArrowAlt, BiUpArrowAlt } from 'react-icons/bi'



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


  return (
    <main className="container">
      <Helmet title='Theaters' />
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
      <a href='#' className='scrollup'>
        <BiUpArrowAlt />
      </a>
    </main>

  )
}

export default Trending;