import axios from "axios";

import { API_KEY } from "constants/apiKey";

export const fetchSearchMovies = async (query, signal) => {
	try {
		return await axios.get("https://api.themoviedb.org/3/search/movie", {
			signal,
			params: {
				api_key: API_KEY,
				query,
				language: "en-US",
			},
		});
	} catch (error) {
		return error;
	}
}