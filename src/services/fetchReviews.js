import axios from "axios";

import { API_KEY } from "constants/apiKey";

export const fetchReviews = async (movieId) => {
	try {
		return await axios.get(`https://api.themoviedb.org/3/movie/${movieId}/reviews`, {
			params: {
				api_key: API_KEY,
			},
		});
	} catch (error) {
		return error;
	}
}