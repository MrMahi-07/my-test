import { List } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";

function GenresList() {
	const { data } = useGenres();
	return (
		<List>
			{data.map((d) => (
				<li key={d.id}>{d.name}</li>
			))}
		</List>
	);
}

export default GenresList;
