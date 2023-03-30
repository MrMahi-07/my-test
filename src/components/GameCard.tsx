import { Card, CardBody, Heading, HStack, Image } from "@chakra-ui/react";

import { Games } from "../hooks/useGames";
import getCroppedImageUrl from "../services/image-url";
import CriticScore from "./CriticScore";
import Emoji from "./Emoji";
import PlatformIconList from "./PlatformIconList";

interface Props {
	games: Games;
}

function GameCard({ games }: Props) {
	return (
		<Card>
			<Image src={getCroppedImageUrl(games.background_image)} />
			<CardBody>
				<HStack justifyContent={"space-between"} mb="3">
					<PlatformIconList
						key={games.id}
						platforms={games.parent_platforms.map(
							(p) => p.platform
						)}
					/>
					<CriticScore score={games.metacritic} />
				</HStack>
				<Heading fontSize={"2xl"}>
					{games.name} <Emoji rating={games.rating_top} />
				</Heading>
			</CardBody>
		</Card>
	);
}

export default GameCard;
