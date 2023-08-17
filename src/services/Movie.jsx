import {api, apiKey } from "./api";

export const fetchMovieDetails = async (movieId) => {
  try {
    const response = await api.get(`${movieId}`, {
      params: {
        api_key: apiKey
      }
    });
    
    return response.data;
  }
  catch (error) {
    console.error("Error fetching movies:", error);
    return null
  }
}


