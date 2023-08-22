import { api, apiKey } from "./api";

export const fetchImages = async (movieId) => {
  try {
    const response = await api.get(`${movieId}/images`, {
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
