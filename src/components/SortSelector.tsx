import { ChevronDownIcon } from "@chakra-ui/icons";
import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";

function SortSelector() {
	return (
		<Menu>
			<MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
				Order by: Relevance
			</MenuButton>
			<MenuList>
				<MenuItem>Relevance</MenuItem>
				<MenuItem>Date added</MenuItem>
				<MenuItem>Name</MenuItem>
				<MenuItem>Release date</MenuItem>
				<MenuItem>Popularity</MenuItem>
				<MenuItem>Average rating</MenuItem>
			</MenuList>
		</Menu>
	);
}

export default SortSelector;
