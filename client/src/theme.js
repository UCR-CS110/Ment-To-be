import { useColorModeValue, extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";
import { createBreakpoints } from "@chakra-ui/theme-tools";

const styles = {
  global: (props) => ({
    body: {
      bg: mode("light.200", "dark.800")(props),
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
      800: "#232946",
      900: "#121629",

      // ...
    },
    light: {
      100: "#fffffe",
      200: "#faeee7",
      300: "#ffc6c7",
      400: "#ff8ba7",
      500: "#c3f0ca",
      600: "#594a4e",
      900: "#33272a",
      1000: "#0e172c",
    },
  },
  components: {
    Tabs: {
      variants: {
        unstyled: {
          tab: {
            borderRadius: "md",

            _selected: {
              bg: mode("dark.300", "light.300"),
              color: mode("dark.900", "light.300"),
            },
          },
        },
      },
    },
  },
});

export default theme;
