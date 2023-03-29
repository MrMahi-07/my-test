import {
	HStack,
	List,
	ListItem,
	Image,
	Spinner,
	Button,
} from "@chakra-ui/react";
import useGenres, { Genres } from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";

interface Props {
	onSelectedGenre: (genre: Genres) => void;
}

function GenresList({ onSelectedGenre }: Props) {
	const { data, isLoading, error } = useGenres();

	if (error) return null;
	if (isLoading) return <Spinner />;
	return (
		<List>
			{data
				.sort((a, b) => (a.name > b.name ? 1 : -1))
				.map((d) => (
					<ListItem key={d.id}>
						<HStack spacing={3} p="2">
							<Image
								src={getCroppedImageUrl(d.image_background)}
								boxSize={8}
								borderRadius="5"
							/>
							<Button
								fontSize="lg"
								variant={"link"}
								onClick={() => onSelectedGenre(d)}
							>
								{d.name}
							</Button>
						</HStack>
					</ListItem>
				))}
		</List>
	);
}

export default GenresList;
