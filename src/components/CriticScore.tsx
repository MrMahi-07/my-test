import { Badge } from "@chakra-ui/react";

interface Props {
	score: number;
}

function CriticScore({ score }: Props) {
	let color = score > 50 ? "green" : score > 60 ? "yellow" : "red";
	return (
		<Badge fontSize={10} colorScheme={color} px="2">
			{score}
		</Badge>
	);
}

export default CriticScore;
