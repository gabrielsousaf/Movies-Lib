import './style.css'

import { Helmet } from 'react-helmet';

import { useState, useEffect } from "react";
import { MovieCard } from "../../components/MovieCard/MovieCard";
import { handleNextPage, handlePrevPage } from "../../components/Pagination/Pagination"

import { fetchTopRatedMovies } from "../../services/TopMovies";
import { BiRightArrowAlt, BiLeftArrowAlt, BiUpArrowAlt } from 'react-icons/bi'


const Home = () => {
  const [ topRatedMoveis, setRatedMoveis ] = useState([])

  const [ currentPage, setCurrentPage ] = useState(1);
  const [ totalPages, setTotalPages ] = useState(1);

  useEffect(() => {
    fetchTopRatedMovies(currentPage).then(({ results, total_pages}) => {
      setRatedMoveis(results);
      setTotalPages(total_pages);
    })
  }, [currentPage]);


  return (
    <main className="container">
      <Helmet title='Top Rated' />
      <h2 className="title">Top Rated:</h2>
      <div className="movies-container">
        {topRatedMoveis.length === 0 && <p>Loanding...</p>}
        {topRatedMoveis.length > 0 &&
          topRatedMoveis.map((movie) => 
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

export default Home