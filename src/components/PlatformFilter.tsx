import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import usePlatforms from "../hooks/usePlatforms";
import { Platform } from "../hooks/useGames";

interface Props {
	onSelectedPlatform: (platform: Platform) => void;
	selectedPlatform: Platform | null;
}

function PlatformFilter({ onSelectedPlatform, selectedPlatform }: Props) {
	const { data, error } = usePlatforms();

	if (error) return null;

	return (
		<Menu>
			<MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
				{selectedPlatform?.name || "Platforms"}
			</MenuButton>
			<MenuList>
				{data.map((d) => (
					<MenuItem
						key={d.id}
						onClick={() => {
							onSelectedPlatform(d);
						}}
					>
						{d.name}
					</MenuItem>
				))}
			</MenuList>
		</Menu>
	);
}

export default PlatformFilter;
