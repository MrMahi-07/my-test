import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import usePlatforms from "../hooks/usePlatforms";

function PlatformFilter() {
	const { data, error } = usePlatforms();
	const platforms = {
		2: "PlayStation",
		1: "PC",
		3: "Xbox",
		4: "iOS",
		5: "Apple Macintosh",
		6: "Linux",
		7: "Nintendo",
		8: "Android",
	};

	if (error) return null;

	return (
		<Menu>
			<MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
				Platforms
			</MenuButton>
			<MenuList>
				{data.map((d) => (
					<MenuItem key={d.id}>{d.name}</MenuItem>
				))}
			</MenuList>
		</Menu>
	);
}

export default PlatformFilter;
