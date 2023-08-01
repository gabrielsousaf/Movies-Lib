import { Link } from "react-router-dom";
import { imgApi } from "../../services/api";

const MovieCard = ({ movie }) => {
  const imageUrl = imgApi.defaults.baseURL + movie.poster_path;

  return (
    <div className="movie-card">
      <Link className="details" to={`/movie/${movie.id}`}>
        <img src={imageUrl} alt={movie.original_title} />
        <h2>{movie.title}</h2>
      </Link>
    </div>
  );
};

export default MovieCard;




















// import { Link } from "react-router-dom";
// // import axios from "axios";
// import { useEffect, useState } from "react";
// import { fetchPopularMovies, searchApi, imgApi } from "../../services/api";

// // const imageUrl = import.meta.env.VITE_IMG;
// // const ApiKey = import.meta.env.VITE_API_KEY;
// // const MovieEndpoint = import.meta.env.VITE_API;


// const MovieCard = () => {
//   // const [ trailerLink, setTrailerLink ] = useState(null);
//   const [movies, setMovies ] = useState([]);

//   useEffect(() => {
//     fetchPopularMovies()
//   }, [])

//   const fetchMovies = async () => {
//     const popularMovies = await fetchPopularMovies();
//     setMovies(popularMovies)
//   }

//   // useEffect(() => {
//   //   axios.get(`${MovieEndpoint}/${movie.id}?${ApiKey}&append_to_response=videos`)
//   //     .then(response => {
//   //       if (response.data.videos?.results.length > 0) {
//   //         const trailerKey = response.data.videos.results[0].key;
//   //         setTrailerLink(`https://www.youtube.com/watch?v=${trailerKey}`);
//   //       }
//   //     })
//   //     .catch(error => {
//   //       console.error('Erro ao buscar detalhes do filme:', error)
//   //     });
//   // },[movie.id]);
  
//   return (
//     <div className="movie-card">
//       <h2>{movie.title}</h2>
    
//       {/* {showLink && <Link className="details" to={`/movie/${movie.id}`}>
//         <img src={imageUrl + movie.poster_path} alt={movie.title} />
//         <h2>{movie.title}</h2>
//       </Link>} */}

//       {/* <p> <FaStar /> {movie.vote_average} </p> */}
 

//       {/* {trailerLink && <a href={trailerLink} target="_blank" className="trailer" rel="noopener noreferrer"> <FaPlay/> <span> Assistir Trailer </span></a>}
//       {showLink && <Link className="details" to={`/movie/${movie.id}`}>Detalhes</Link>} */}


//     </div>
    
//   )
// }

// export default MovieCard