import { Card, CardBody, Heading, Image, Text } from "@chakra-ui/react";

import { Games } from "../hooks/useGames";
import PlatformIconList from "./PlatformIconList";

interface Props {
	games: Games;
}

function GameCard({ games }: Props) {
	return (
		<Card borderRadius={10} overflow="hidden">
			<Image src={games.background_image} />
			<CardBody>
				<Heading fontSize={"2xl"}>{games.name}</Heading>
				<PlatformIconList
					key={games.id}
					platforms={games.parent_platforms.map((p) => p.platform)}
				/>
			</CardBody>
		</Card>
	);
}

export default GameCard;
