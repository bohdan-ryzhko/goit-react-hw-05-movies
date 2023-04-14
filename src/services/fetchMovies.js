import axios from "axios";

const API_KEY = "af0750e4d5ab7fcdb2e18f6bcc3247e0";

axios.defaults.baseURL = "https://api.themoviedb.org/3/trending/movie/day";

export const fetchMovies = async () => {
	const response = await axios.get("", {
		params: {
			api_key: API_KEY,
		}
	})

	return response;
}