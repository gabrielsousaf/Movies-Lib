import { api, apiKey } from "./api";

export const fetchMovieCast = async (movieId) => {
  try {
    const response = await api.get(`${movieId}/credits`, {
      params: {
        api_key: apiKey,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching movie cast:", error);
    return null;
  }
};
