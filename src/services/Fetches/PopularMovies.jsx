import { api, apiKey } from '../api/api'

export const fetchPopularMovies = async (page) => {
  try{
    const response = await api.get("popular", {
      params: {
        api_key: apiKey,
        page,
      },
    });
    return response.data;
  }
  catch (error) {
    console.error("Error fetching popular movies:", error);
    return { results: [], total_pages: 1}
  }
}