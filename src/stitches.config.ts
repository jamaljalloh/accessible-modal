import { createStitches } from "@stitches/react";

export const { styled, css, globalCss } = createStitches({
  theme: {
    colors: {
      grey100: "#eeedef",
      grey200: "#E8E5EA",
      grey300: "#484865",
      green100: "#ddf3e4",
      green200: "#ccebd7",
      green300: "#115336",
      magenta100: "#b936ee",
      blue100: "#2c50f1",
      purple100: "#ddd6fe",
      purple200: "#aa99ec",
      purple300: "#6d28d9",
      fontGradient:
        "linear-gradient(90deg, $blue100 0%, $purple300 31%, $magenta100 74%)",
      backgroundOverlay: "rgba(0, 0, 0, 0.4)"
    },
    fonts: {
      default:
        "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen','Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif"
    },
    media: {
      bp1: "(min-width: 320px)",
      bp2: "(min-width: 768px)",
      bp3: "(min-width: 1200px)"
    }
  }
});

export const useGlobalStyles = globalCss({
  body: {
    margin: 0,
    fontFamily: "$default"
  }
});
