import { List, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import apiClient from "../services/api-client";

interface Games {
	id: number;
	name: string;
}

interface FetchGamesResponse {
	count: number;
	results: Games[];
}

function GameGrid() {
	const [games, setGames] = useState<Games[]>([]);
	const [error, setError] = useState("");

	useEffect(() => {
		apiClient
			.get<FetchGamesResponse>("/games")
			.then((res) => setGames(res.data.results))
			.catch((err) => {
				// if(err instanceof E)
				setError(err.message);
			});
	});
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
