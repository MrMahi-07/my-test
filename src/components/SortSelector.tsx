import { ChevronDownIcon } from "@chakra-ui/icons";
import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";

interface Props {
	onSelectSortOrder: (sortOrder: string) => void;
	sortOrder: string;
}

function SortSelector({ onSelectSortOrder, sortOrder }: Props) {
	const sortOrders = [
		{ key: 1, value: "", label: "Relevance" },
		{ key: 3, value: "-added", label: "Date added" },
		{ key: 4, value: "", label: "Name" },
		{ key: 5, value: "-released", label: "Release date" },
		{ key: 6, value: "-metacritic", label: "Popularity" },
		{ key: 7, value: "-rating", label: "Average rating" },
	];

	const currentSortOrder = sortOrders.find(
		(order) => order.value === sortOrder
	);

	return (
		<Menu>
			<MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
				Order by: {currentSortOrder?.label || "Relevance"}
			</MenuButton>
			<MenuList>
				{sortOrders.map((order) => (
					<MenuItem
						onClick={() => onSelectSortOrder(order.value)}
						key={order.key}
						value={order.value}
					>
						{order.label}
					</MenuItem>
				))}
			</MenuList>
		</Menu>
	);
}

export default SortSelector;
