import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";

function GameGrid() {
	const { error, games } = useGames();
	if (error) return <Text color={"tomato"}>{error}</Text>;

	return (
		<SimpleGrid columns={{ sm: 2, md: 2, lg: 3, xl: 5 }} spacing={5} p="3">
			{games.map((game) => (
				<GameCard games={game} key={game.id} />
			))}
		</SimpleGrid>
	);
}

export default GameGrid;
