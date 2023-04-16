import axios from "axios";

import { API_KEY } from "constants/apiKey";

export const fetchMovieCredits = async (movieId) => {
	try {
		return await axios.get(`https://api.themoviedb.org/3/movie/${movieId}/credits`, {
			params: {
				api_key: API_KEY,
			},
		});
	} catch (error) {
		return error;
	}
}