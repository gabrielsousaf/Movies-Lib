import { api, apiKey } from "./api";

export const fetchInTheaters = async (page) => {
  try{
    const response = await api.get("now_playing", {
      params: {
        api_key: apiKey,
        page,
      }
    });
    return response.data;
  }
  catch (error) {
    console.error("Error fetching Theaters movies:", error);
    return { results: [], total_pages: 1}
  }
}
