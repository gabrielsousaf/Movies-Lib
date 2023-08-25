// services/MovieCast.js
import { api, apiKey } from './api';

export const fetchMovieCastAndCrew = async (movieId) => {
  try {
    const response = await api.get(`${movieId}/credits`, {
      params: {
        api_key: apiKey,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching movie cast and crew:', error);
    return null;
  }
};
