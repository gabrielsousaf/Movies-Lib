import { apiKey, api_trending } from "./api";

export const fetchTrendingMovies = async (page) => {
  try{
    const response = await api_trending.get("movie/day", {
      params: {
        api_key: apiKey,
        page,
      }
    });
    return response.data;
  }
  catch (error) {
    console.error("Error fetching trending movies:", error);
    return { results: [], total_pages: 1}
  }
}
