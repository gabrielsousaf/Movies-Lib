import { api, apiKey } from "../api/api";

export const fetchGallery = async (movieId) => {
  try {
    const response = await api.get(`${movieId}/images`, {
      params: {
        api_key: apiKey,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching gallery:", error);
    return null;
  }
};
