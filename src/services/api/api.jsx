import axios from "axios";
export const apiKey = import.meta.env.VITE_TMDB_API_KEY;

export const api = axios.create({
  baseURL: "https://api.themoviedb.org/3/movie/",
})

export const api_trending = axios.create({
  baseURL: "https://api.themoviedb.org/3/trending/",
})

export const searchApi = axios.create({
  baseURL:"https://api.themoviedb.org/3/search/movie"
})

export const imgApi = axios.create({
  baseURL: "https://image.tmdb.org/t/p/w1280/"
})


export const imagesMovie = axios.create({
  baseURL: "https://api.themoviedb.org/3/movie/"
})  