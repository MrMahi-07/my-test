import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";

function NavBar() {
	return (
		<HStack justifyContent="space-between" padding="10px" spacing={5}>
			<Image src={logo} boxSize="16"></Image>
			<SearchInput />
			<ColorModeSwitch></ColorModeSwitch>
		</HStack>
	);
}

export default NavBar;
