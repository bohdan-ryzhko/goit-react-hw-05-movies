import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchMovieCredits } from "services/fetchMovieCredits";

const Cast = () => {

	const { movieId } = useParams();
	console.log(movieId);

	const [cast, setCast] = useState([]);

	useEffect(() => {
		const controller = new AbortController();
		fetchMovieCredits(movieId, controller.signal)
			.then(data => {
				if (data.status !== 200) {
					return Promise.reject(data);
				}
				setCast(data.data.cast);
			}).catch(error => {
				console.log(error);
			})
		
		return () => {
			controller.abort();
		}
	}, [movieId]);

	return (
		<>
			{
				cast.length > 0 &&
				<ul>
					{
						cast.map(actor => <li key={actor.id}>
							<img width={20} height={30} src={actor.profile_path} alt="" />
							{actor.original_name}
						</li>)
					}
				</ul>
			}
		</>
	)
}

export default Cast;