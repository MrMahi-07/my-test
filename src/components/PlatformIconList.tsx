import { HStack, Icon } from "@chakra-ui/react";
import { Platform } from "../hooks/useGames";

import {
	BsPlaystation,
	BsWindows,
	BsXbox,
	BsApple,
	BsAndroid2,
} from "react-icons/bs";

import { SiLinux, SiNintendo } from "react-icons/si";
import { IconType } from "react-icons/lib";

interface Props {
	platforms: Platform[];
}

const iconMap: { [key: string]: IconType } = {
	1: BsWindows,
	2: BsPlaystation,
	3: BsXbox,
	4: BsApple,
	5: BsApple,
	6: SiLinux,
	7: SiNintendo,
	8: BsAndroid2,
};

function PlatformIconList({ platforms }: Props) {
	return (
		<HStack my="1">
			{platforms.map((platform) => (
				<Icon
					key={platform.id}
					as={iconMap[platform.id]}
					color="gray.500"
				/>
			))}
		</HStack>
	);
}

export default PlatformIconList;
