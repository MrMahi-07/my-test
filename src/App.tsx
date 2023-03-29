import { Button } from "@chakra-ui/button";
import { Grid, GridItem, Show } from "@chakra-ui/react";
import React from "react";

function App() {
	return (
		<Grid
			templateAreas={{
				base: `'nav' 'main'`,
				lg: `'nav nav' 'aside main'`,
			}}
		>
			<GridItem area={"nav"} bg={"gold"}>
				hi
			</GridItem>
			<Show above="lg">
				<GridItem area={"aside"} bg={"red"}>
					hi
				</GridItem>
			</Show>
			<GridItem area={"main"} bg={"teal"}>
				hi
			</GridItem>
		</Grid>
	);
}

export default App;