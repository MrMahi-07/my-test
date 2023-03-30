import { SimpleGrid, Text } from "@chakra-ui/react";
import { GameQuery } from "../App";
import useGames, { Platform } from "../hooks/useGames";
import { Genres } from "../hooks/useGenres";
import GameCard from "./GameCard";
import GameCardContainer from "./GameCardContainer";
import GameCardSkeleton from "./GameCardSkeleton";

interface Props {
	gameQuery: GameQuery;
}

function GameGrid({ gameQuery }: Props) {
	const { error, data, isLoading } = useGames(gameQuery);

	const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9];

	if (error) return <Text color={"tomato"}>{error}</Text>;
	return (
		<SimpleGrid columns={{ sm: 2, md: 2, lg: 3, xl: 4 }} spacing={6} py="3">
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
