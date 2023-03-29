import { HStack, List, ListItem, Text, Image, Spinner } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";

function GenresList() {
	const { data, isLoading, error } = useGenres();
	if (error) return null;
	if (isLoading) return <Spinner />;
	return (
		<List>
			{data.map((d) => (
				<ListItem key={d.id}>
					<HStack spacing={3} p="2">
						<Image
							src={getCroppedImageUrl(d.image_background)}
							boxSize={8}
							borderRadius="5"
						/>
						<Text fontSize="lg">{d.name}</Text>
					</HStack>
				</ListItem>
			))}
		</List>
	);
}

export default GenresList;
