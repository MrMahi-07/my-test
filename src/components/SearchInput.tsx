import { SearchIcon } from "@chakra-ui/icons";
import {
	InputGroup,
	InputLeftElement,
	Input,
	IconButton,
} from "@chakra-ui/react";

function SearchInput() {
	return (
		<InputGroup overflow={"hidden"}>
			<InputLeftElement
				children={
					<IconButton
						aria-label="Search database"
						icon={<SearchIcon />}
					/>
				}
			/>
			<Input type="tel" placeholder="Search games..." />
		</InputGroup>
	);
}

export default SearchInput;
