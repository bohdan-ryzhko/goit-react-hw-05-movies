import Movie from "components/Movie/Movie";
import { useEffect, useState } from "react";
import { fetchMovies } from "services/fetchMovies";

const Home = () => {

	const [popularMovies, setPopularMovies] = useState([]);

	useEffect(() => {
		fetchMovies()
			.then(({ data }) => {
				setPopularMovies(data.results)
			});
	}, []);

	return (
		<div>
			<ul>
				{
					popularMovies.map(movie => <Movie key={movie.id} movie={movie} />)
				}
			</ul>
		</div>
	)
}

export default Home;