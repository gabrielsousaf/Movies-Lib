import {api, apiKey } from "../api/api";

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
    console.error("Error fetching Top Rated movies:", error);
    return { results: [], total_pages: 1}
  }
}
