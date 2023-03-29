import { List, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";

function GameGrid() {
	const { error, games } = useGames();
	if (error) return <Text color={"tomato"}>{error}</Text>;

	return (
		<List>
			{games.map((game) => (
				<li key={game.id}>{game.name}</li>
			))}
		</List>
	);
}

export default GameGrid;
