import {api, apiKey } from "../api/api";

export const fetchRecommendedMovies = async (movieId) => {
  try {
    const response = await api.get(`${movieId}/recommendations?`, {
      params: {
        api_key: apiKey,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching recommended movies:', error);
    return [];
  }
};