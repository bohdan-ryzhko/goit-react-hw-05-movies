import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchImage } from "services/fetchImage";
import { fetchMovieCredits } from "services/fetchMovieCredits";

const Cast = () => {

	const { movieId } = useParams();

	const [cast, setCast] = useState([]);
	const [imageUrl, setImageUrl] = useState('');

	useEffect(() => {
		fetchMovieCredits(movieId)
			.then(data => {
				if (data.status !== 200) {
					return Promise.reject(data);
				}
				console.log(data.data);
				setCast(data.data.cast);
			}).catch(error => {
				console.log(error);
			});
		
		fetchImage()
			.then(data => {
				if (data.status !== 200) {
					throw new Error(data);
				}
				setImageUrl(data.data.images.base_url + "w500");
			})
			.catch(error => console.log(error));
	}, [movieId]);

	return (
		<>
			{
				cast.length > 0 &&
				<ul>
					{
						cast.map(actor => <li key={actor.id}>
							<img width={150} src={imageUrl + actor.profile_path} alt={actor.original_name} />
							{actor.original_name}
						</li>)
					}
				</ul>
			}
		</>
	)
}

export default Cast;