import axios from "axios";

import { API_KEY } from "constants/apiKey";

export const fetchImage = async () => {
	try {
		return await axios.get("https://api.themoviedb.org/3/configuration", {
			params: {
				api_key: API_KEY
			},
		});
	} catch (error) {
		return error;
	}
}