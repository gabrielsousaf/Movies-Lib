import {api, apiKey } from "./api";

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
