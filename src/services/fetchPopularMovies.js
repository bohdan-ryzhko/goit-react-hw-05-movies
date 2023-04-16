import axios from "axios";

import { API_KEY } from "constants/apiKey";

axios.defaults.baseURL = "https://api.themoviedb.org/3/trending/movie/day";

export const fetchPopularMovies = async () => {
	try {
		return await axios.get("", {
			params: {
				api_key: API_KEY,
			}
		})
	} catch (error) {
		return error;
	}
}