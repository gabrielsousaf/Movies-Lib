import axios from "axios";

export const api = axios.create({
  baseURL: "https://api.themoviedb.org/3/movie/",
})

export const api_trending = axios.create({
  baseURL: "https://api.themoviedb.org/3/trending/",
})

export const apiKey = "86a78313a0e0b982cbb7de56b7620574";

export const searchApi = axios.create({
  baseURL:"https://api.themoviedb.org/3/search/movie"
})

export const imgApi = axios.create({
  baseURL: "https://image.tmdb.org/t/p/w500/"
})


export const imagesMovie = axios.create({
  baseURL: "https://api.themoviedb.org/3/movie/"
})  