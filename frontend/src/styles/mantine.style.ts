import { MantineThemeOverride } from "@mantine/core";

export default <MantineThemeOverride>{
  colors: {
    sunset: [
      "#FFF2E0",
      "#FFE1B8",
      "#FFCE8F",
      "#FFB866",
      "#FFA33C",
      "#E68D2F",
      "#CC7823",
      "#B36418",
      "#99500E",
      "#7F3D05",
    ],
  },
  primaryColor: "sunset",
  components: {
    Modal: {
      styles: (theme) => ({
        title: {
          fontSize: theme.fontSizes.lg,
          fontWeight: 700,
        },
      }),
    },
  },
};
