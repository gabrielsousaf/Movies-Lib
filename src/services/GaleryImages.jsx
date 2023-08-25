import { api, apiKey, imagesMovie } from "./api";

export const fetchImages = async (movieId) => {
  try {
    const response = await api.get(`${movieId}/images`, {
      params: {
        api_key: apiKey,
      },
    });
    console.log('Response from fetchImages:', response.data);
    return response.data;
  } catch (error) {
    console.error("Error fetching movie cast:", error);
    return null;
  }
};
