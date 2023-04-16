import PopularMovie from "components/PopularMovie/PopularMovie";
import { Container } from "index.styled";
import { useEffect, useState } from "react";
import { fetchPopularMovies } from "services/fetchPopularMovies";
import { Title, MoviesList } from "./Home.styled";

const Home = () => {

	const [popularMovies, setPopularMovies] = useState([]);

	useEffect(() => {
		const controller = new AbortController();
		fetchPopularMovies(controller.signal)
			.then(data => {
				if (data.status !== 200) {
					return Promise.reject(data);
				}
				console.log(data);
				setPopularMovies(data.data.results);
			}).catch(error => {
				console.log(error);
			})
		
		return () => {
			controller.abort();
		}
	}, []);

	return (
		<Container>
			<Title>Trending today</Title>
			<MoviesList>
				{
					popularMovies.map(movie => <PopularMovie key={movie.id} movie={movie} />)
				}
			</MoviesList>
		</Container>
	)
}

export default Home;