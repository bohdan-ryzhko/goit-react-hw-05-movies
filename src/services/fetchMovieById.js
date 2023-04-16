import axios from "axios";

import { API_KEY } from "constants/apiKey";

export const fetchMovieById = async (movieId) => {
	try {
		return await axios.get(`https://api.themoviedb.org/3/movie/${movieId}`, {
			params: {
				api_key: API_KEY,
			}
		})
	} catch (error) {
		return error;
	}
}