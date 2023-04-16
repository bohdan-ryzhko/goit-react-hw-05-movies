import { useEffect, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import { fetchMovieById } from "services/fetchMovieById";
import { MovieDetailsSection } from "./MovieDetails.styled";
import { Container } from "index.styled";
import { Card } from "components/Card/Card";

const MovieDetails = () => {
	const [popularMovie, setPopularMovie] = useState(null);
	const { movieId } = useParams();
	const location = useLocation();

	useEffect(() => {
		fetchMovieById(movieId)
			.then(data => {
				if (data.status !== 200) {
					return Promise.reject(data);
				}
				setPopularMovie(data.data);
				console.log(data.data);
			}).catch(error => {
				console.log(error);
			})
	}, [movieId]);

	return (
		<MovieDetailsSection>
			<Container>
				<Link to={location.state?.from ?? "/"}>
					Go back
				</Link>
				{
					popularMovie &&
					<>
						<Card popularMovie={popularMovie} movieId={movieId} />
					</>
				}
			</Container>
		</MovieDetailsSection>
	)
}

export default MovieDetails;