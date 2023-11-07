import {api, apiKey } from "../api/api";

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
    console.error("Error fetching MovieDetails:", error);
    return null
  }
}


