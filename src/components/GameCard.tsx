import {
	Card,
	CardBody,
	Flex,
	Heading,
	HStack,
	Image,
	Text,
} from "@chakra-ui/react";

import { Games } from "../hooks/useGames";
import getCroppedImageUrl from "../services/image-url";
import CriticScore from "./CriticScore";
import PlatformIconList from "./PlatformIconList";

interface Props {
	games: Games;
}

function GameCard({ games }: Props) {
	return (
		<Card borderRadius={10} overflow="hidden">
			<Image src={getCroppedImageUrl(games.background_image)} />
			<CardBody>
				<Heading fontSize={"2xl"}>{games.name}</Heading>
				<HStack justifyContent={"space-between"}>
					<PlatformIconList
						key={games.id}
						platforms={games.parent_platforms.map(
							(p) => p.platform
						)}
					/>
					<CriticScore score={games.metacritic} />
				</HStack>
			</CardBody>
		</Card>
	);
}

export default GameCard;
