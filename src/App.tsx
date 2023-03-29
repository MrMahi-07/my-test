import { Button } from "@chakra-ui/button";
import { Grid, GridItem, Show } from "@chakra-ui/react";
import React from "react";
import NavBar from "./components/NavBar";

function App() {
	return (
		<Grid
			templateAreas={{
				base: `'nav' 'main'`,
				lg: `'nav nav' 'aside main'`,
			}}
		>
			<GridItem area={"nav"}>
				<NavBar></NavBar>
			</GridItem>
			<Show above="lg">
				<GridItem area={"aside"}>hi</GridItem>
			</Show>
			<GridItem area={"main"}>hi</GridItem>
		</Grid>
	);
}

export default App;
