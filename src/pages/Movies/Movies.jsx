import { SearchForm } from "components/SearchForm/SearchForm";
import { useEffect, useState } from "react";
import { useLocation, useSearchParams } from "react-router-dom";
import { fetchSearchMovies } from "services/fetchSearchMovies";
import { SearchMovie, SectionMovie } from "./Movies.styled";
import { Container } from "index.styled";
import { StyledLink } from "components/AdditionalInformation/AdditionalInformation.styled";
import { MoviesList } from "pages/Home/Home.styled";

const Movies = () => {

	const [searchMovies, setSearchMovies] = useState([]);
	const [searchQuery, setSearchQuery] = useSearchParams();
	const searchValue = searchQuery.get("query") ?? "";

	const location = useLocation();
	
	useEffect(() => {
		const controller = new AbortController();
		if (!searchValue) return;

		fetchSearchMovies(searchValue, controller.signal)
			.then(data => {
				if (data.status !== 200) {
					return Promise.reject(data)
				};
				setSearchMovies(data.data.results);
			})
			.catch(error => {
				console.log(error)
			});

		return () => {
			controller.abort();
		}
	}, [searchValue]);

	return (
		<SectionMovie>
			<Container>
				<SearchForm setSearchQuery={setSearchQuery} />
				<MoviesList>
					{
						searchMovies.length > 0 &&
						searchMovies.map(movie => <SearchMovie key={movie.id}>
							<StyledLink state={{ from:location }} to={`${movie.id}`}>{movie.title}</StyledLink>
						</SearchMovie>)
					}
				</MoviesList>
			</Container>
		</SectionMovie>
	)
}

export default Movies;