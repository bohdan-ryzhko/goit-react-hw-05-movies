import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchMovieCredits } from "services/fetchMovieCredits";

const Cast = () => {

	const { movieId } = useParams();

	const [cast, setCast] = useState([]);

	useEffect(() => {
		fetchMovieCredits(movieId)
			.then(data => {
				if (data.status !== 200) {
					return Promise.reject(data);
				}
				setCast(data.data.cast);
			}).catch(error => {
				console.log(error);
			})
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