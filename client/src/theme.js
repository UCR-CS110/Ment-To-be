import { extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";
import { createBreakpoints } from "@chakra-ui/theme-tools";

const styles = {
  global: (props) => ({
    body: {
      bg: mode("light.300", "dark.900")(props),
      color: mode("light.900", "dark.100")(props),
    },
  }),
};
const breakpoints = createBreakpoints({
  xs: "320px",
  sm: "481px",
  md: "769px",
  lg: "1025px",
});

const theme = extendTheme({
  styles,
  breakpoints,
  fonts: {
    heading: "Sora",
    body: "Inter",
  },
  colors: {
    dark: {
      100: "#fffffe",
      200: "#b8c1ec",
      300: "#eebbc3",
      800: "#121629",
      900: "#232946",
      // ...
    },
    light: {
      100: "#fffffe",
      200: "#fef6e4",
      300: "#f3d2c1",
      400: "#f582ae",
      500: "#8bd3dd",
      600: "#172c66",
      900: "#001858",
    },
  },
});
export default theme;
