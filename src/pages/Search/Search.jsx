import '../Top_Rated/style.css'

import { Helmet } from 'react-helmet';

import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { MovieCard } from "../../components/MovieCard/MovieCard";
import { searchMovies } from "../../services/SearchMovies";


const Search = () => {
  const [movies, setMovies] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [searchParams] = useSearchParams();

  useEffect(() => {
    const query = searchParams.get("q");
    setSearchQuery(query || "");
  }, [searchParams]);

  useEffect(() => {
    if (searchQuery.trim() !== "") {
      setLoading(true);
      handleSearch(searchQuery);
    } else {
      setMovies([]);
    }
  }, [searchQuery]);

  const handleSearch = async (query) => {
    const searchedMovies = await searchMovies(query);
    setMovies(searchedMovies);
    setLoading(false);
  };

  return (
    <main className="container">
      <Helmet title={`Search Results for: ${searchQuery }`}/>
      <h2 className="title">Search Results for: {searchQuery}</h2>
      <div className="movies-container">
        {loading ? (
          <p>Loading...</p>
        ) : (
          movies &&
          movies.length > 0 &&
          movies.map((movie) => <MovieCard key={movie.id} movie={movie} />)
        )}
      </div>
      
    </main>
  );
};

export default Search;
