import axios from "axios";

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3/movie/",
})

const apiKey = "86a78313a0e0b982cbb7de56b7620574";

export const searchApi = axios.create({
  baseURL:"https://api.themoviedb.org/3/search/movie/"
})

export const imgApi = axios.create({
  baseURL: "https://image.tmdb.org/t/p/w500/"
})

export const fetchTopRatedMovies = async () => {
  try {
    const response = await api.get("top_rated", {
      params: {
        api_key: apiKey,
      }
    });
    return response.data.results;
  }
  catch (error) {
    console.error("Error fetching popular movies:", error);
    return[]
  }
}

export default api;

