import { useLocation } from "react-router-dom";
import { Movie, StyledNavLink } from "./PopularMovie.styled";

const PopularMovie = ({ movie }) => {

	const location = useLocation();
	return (
		<Movie>
			<StyledNavLink state={{ from: location }} to={`movies/${movie.id}`} >
				{movie.title}
			</StyledNavLink>
		</Movie>
		
	)
}

export default PopularMovie;