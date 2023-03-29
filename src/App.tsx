import { Grid, GridItem, Show } from "@chakra-ui/react";
import { useState } from "react";
import GameGrid from "./components/GameGrid";
import GenresList from "./components/GenresList";
import NavBar from "./components/NavBar";
import PlatformFilter from "./components/PlatformFilter";
import { Genres } from "./hooks/useGenres";

function App() {
	const [selectedGenre, setSelectedGenre] = useState<Genres | null>(null);
	return (
		<Grid
			templateAreas={{
				base: `'nav' 'main'`,
				lg: `'nav nav' 'aside main'`,
			}}
			templateColumns={{
				base: "1fr",
				lg: "200px 1fr",
			}}
		>
			<GridItem area={"nav"}>
				<NavBar></NavBar>
			</GridItem>
			<Show above="lg">
				<GridItem area={"aside"} p="4">
					<GenresList
						selectedGenre={selectedGenre}
						onSelectedGenre={(d) => setSelectedGenre(d)}
					/>
				</GridItem>
			</Show>
			<GridItem area={"main"} p="3">
				<PlatformFilter />
				<GameGrid selectedGenre={selectedGenre} />
			</GridItem>
		</Grid>
	);
}

export default App;
