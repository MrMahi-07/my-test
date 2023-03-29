import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardContainer from "./GameCardContainer";
import GameCardSkeleton from "./GameCardSkeleton";

function GameGrid() {
	const { error, data, isLoading } = useGames();
	if (error) return <Text color={"tomato"}>{error}</Text>;
	const skeletons = [1, 2, 3, 4, 5, 6];

	return (
		<SimpleGrid columns={{ sm: 2, md: 2, lg: 3, xl: 5 }} spacing={5} p="3">
			{isLoading &&
				skeletons.map((skeleton) => (
					<GameCardContainer key={skeleton}>
						<GameCardSkeleton key={skeleton}></GameCardSkeleton>
					</GameCardContainer>
				))}
			{data.map((d) => (
				<GameCardContainer key={d.id}>
					<GameCard games={d} key={d.id} />
				</GameCardContainer>
			))}
		</SimpleGrid>
	);
}

export default GameGrid;
