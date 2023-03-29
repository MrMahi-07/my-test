import { Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import { useState } from "react";
import GameGrid from "./components/GameGrid";
import GenresList from "./components/GenresList";
import NavBar from "./components/NavBar";
import PlatformFilter from "./components/PlatformFilter";
import SortSelector from "./components/SortSelector";
import { Platform } from "./hooks/useGames";
import { Genres } from "./hooks/useGenres";

export interface GameQuery {
	genre: Genres | null;
	platform: Platform | null;
	sortOrder: string;
}

function App() {
	const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

	return (
		<Grid
			templateAreas={{
				base: `'nav' 'main'`,
				lg: `'nav nav' 'aside main'`,
			}}
			templateColumns={{
				base: "1fr",
				lg: "250px 1fr",
			}}
		>
			<GridItem area={"nav"}>
				<NavBar></NavBar>
			</GridItem>
			<Show above="lg">
				<GridItem area={"aside"} p="2">
					<GenresList
						selectedGenre={gameQuery.genre}
						onSelectedGenre={(genre) =>
							setGameQuery({ ...gameQuery, genre })
						}
					/>
				</GridItem>
			</Show>
			<GridItem area={"main"}>
				<HStack spacing={3}>
					<PlatformFilter
						selectedPlatform={gameQuery.platform}
						onSelectedPlatform={(platform) =>
							setGameQuery({ ...gameQuery, platform })
						}
					/>
					<SortSelector
						sortOrder={gameQuery.sortOrder}
						onSelectSortOrder={(sortOrder) =>
							setGameQuery({ ...gameQuery, sortOrder })
						}
					/>
				</HStack>
				<GameGrid gameQuery={gameQuery} />
			</GridItem>
		</Grid>
	);
}

export default App;
