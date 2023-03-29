import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames, { Platform } from "../hooks/useGames";
import { Genres } from "../hooks/useGenres";
import GameCard from "./GameCard";
import GameCardContainer from "./GameCardContainer";
import GameCardSkeleton from "./GameCardSkeleton";

interface Props {
	selectedGenre: Genres | null;
	selectedPlatform: Platform | null;
}

function GameGrid({ selectedGenre, selectedPlatform }: Props) {
	const { error, data, isLoading } = useGames(
		selectedGenre,
		selectedPlatform
	);
	if (error) return <Text color={"tomato"}>{error}</Text>;
	const skeletons = [1, 2, 3, 4, 5, 6];

	return (
		<SimpleGrid columns={{ sm: 2, md: 2, lg: 3, xl: 5 }} spacing={3} py="3">
			{isLoading &&
				skeletons.map((skeleton) => (
					<GameCardContainer key={skeleton}>
						<GameCardSkeleton></GameCardSkeleton>
					</GameCardContainer>
				))}
			{data.map((d) => (
				<GameCardContainer key={d.id}>
					<GameCard games={d} />
				</GameCardContainer>
			))}
		</SimpleGrid>
	);
}

export default GameGrid;
