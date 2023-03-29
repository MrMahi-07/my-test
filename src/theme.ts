import { extendTheme, ThemeConfig } from "@chakra-ui/react";

// Add your color mode config
const config = {
	initialColorMode: "dark",
};

const theme = extendTheme({ config });
export default theme;
