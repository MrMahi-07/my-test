import { List } from "@chakra-ui/react";
import React from "react";
import useGenres from "../hooks/useGenres";

function GenresList() {
	const { genres } = useGenres();
	return (
		<List>
			{genres.map((genre) => (
				<li key={genre.id}>{genre.name}</li>
			))}
		</List>
	);
}

export default GenresList;
