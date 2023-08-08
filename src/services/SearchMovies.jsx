import { searchApi, apiKey } from "./api";

export const searchMovies = async (query) => {
  try {
    const response = await searchApi.get("", {
      params: {
        api_key: apiKey,
        query
      },
    });

    console.log("Reponse data:", response.data)
    console.log("Results:", response.data.results)

    return response.data.results;
  }
  catch (error) {
    console.error("Error fetching search movies:", error);
    return [];
  }
}