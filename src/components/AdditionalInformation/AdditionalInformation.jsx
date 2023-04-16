import { useLocation } from "react-router-dom"
import { AdditionalTitle, AdditionalList, AdditionInfo, StyledLink } from "./AdditionalInformation.styled"

export const AdditionalInformation = () => {
	const location = useLocation();
	return (
		<>
			<AdditionalTitle>Additional information</AdditionalTitle>
			<AdditionalList>
				<AdditionInfo>
					<StyledLink to="cast" state={{ from: location }}>Cast</StyledLink>
				</AdditionInfo>
				<AdditionInfo>
					<StyledLink to="reviews" state={{ from: location }}>Reviews</StyledLink>
				</AdditionInfo>
			</AdditionalList>
		</>
	)
}