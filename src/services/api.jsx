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





export const fetchTopRatedMovies = async (page) => {
  try {
    const response = await api.get("top_rated", {
      params: {
        api_key: apiKey,
        page,
      }
    });
    return response.data;
  }
  catch (error) {
    console.error("Error fetching popular movies:", error);
    return { results: [], total_pages: 1}
  }
}


export const fetchPopularMovies = async (page) => {
  try{
    const response = await api.get("popular", {
      params: {
        api_key: apiKey,
        page,
      },
    });
    return response.data;
  }
  catch (error) {
    console.error("Error fetching popular movies:", error);
    return { results: [], total_pages: 1}
  }
}

export const fetchTrendingMovies = async (page) => {
  try{
    const response = await api_trending.get("movie/day", {
      params: {
        api_key: apiKey,
        page,
      }
    });
    return response.data;
  }
  catch (error) {
    console.error("Error fetching trending movies:", error);
    return { results: [], total_pages: 1}
  }
}

export const fetchInTheaters = async (page) => {
  try{
    const response = await api.get("now_playing", {
      params: {
        api_key: apiKey,
        page,
      }
    });

    return response.data;
  }
  catch (error) {
    console.error("Error fetching Theaters movies:", error);
    return { results: [], total_pages: 1}
  }
}


export const searchMovies = async (query) => {
  try {
    const response = await searchApi.get("", {
      params: {
        api_key: apiKey,
        query
      },
    });

    console.log("Reponse data:", response.data)
    console.log("Results:", response.data.results)

    return response.data.results;
  }
  catch (error) {
    console.error("Error fetching search movies:", error);
    console.log("ta errado merda")
    return [];
  }
}


