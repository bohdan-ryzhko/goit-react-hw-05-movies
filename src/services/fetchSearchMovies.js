import axios from "axios";

import { API_KEY } from "constants/apiKey";

export const fetchSearchMovies = async (query) => {
	try {
		return await axios.get("https://api.themoviedb.org/3/search/movie", {
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