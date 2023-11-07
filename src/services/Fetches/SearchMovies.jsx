import { searchApi, apiKey } from "../api/api";

export const searchMovies = async (query) => {
  try {
    const response = await searchApi.get("", {
      params: {
        api_key: apiKey,
        query
      },
    });

    return response.data.results;
  }
  catch (error) {
    console.error("Error fetching search movies:", error);
    return [];
  }
}