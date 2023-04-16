import { AdditionalInformation } from "components/AdditionalInformation/AdditionalInformation"
import { MovieCard, CardTitle, OverviewDescription, GenresList, Genre, Description } from "./Card.styled"
import { Outlet } from "react-router-dom"
import { useEffect, useState } from "react"
import { fetchImage } from "services/fetchImage"

export const Card = ({ popularMovie: { poster_path, title, overview, genres, vote_count } }) => {

	const [imageUrl, setImageUrl] = useState('');

	useEffect(() => {
		fetchImage()
			.then(({ data: { images } }) => {
				setImageUrl(images.base_url + "w500");
			})
			.catch(error => console.log(error));
	}, []);

	return (
		<>
			<MovieCard>
				<div>
					<img width={350} src={imageUrl + poster_path} alt="" />
				</div>
				<Description>
					<CardTitle>{title}</CardTitle>
					<span>User score: </span>
					<span>{vote_count} %</span>
					<div>
						<CardTitle>Overview</CardTitle>
						<OverviewDescription>{overview}</OverviewDescription>
					</div>
					<div>
						<CardTitle>Genres</CardTitle>
						<GenresList>
						{
							genres.map(genre => <Genre key={genre.name}>{genre.name}</Genre>)
						}
					</GenresList>
					</div>
				</Description>
			</MovieCard>
			<hr/>
			<AdditionalInformation />
			<hr/>
			<Outlet />
		</>
	)
}