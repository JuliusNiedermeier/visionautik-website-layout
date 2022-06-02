import { DefaultTheme } from "styled-components";

const theme: DefaultTheme = {
  rootFontSize: "18px",

  devices: {
    landscape: "900px",
  },

  space: {
    sidebarWidth: "18rem",
    micro: { sm: "0.5rem", md: "1rem", lg: "2rem" },
    macro: { sm: "5rem", md: "10rem", lg: "15rem" },
  },

  color: {
    background: {
      primary: { i100: "", i75: "", i50: "", i25: "" },
      secondary: { i100: "", i75: "", i50: "", i25: "" },
    },
    text: {
      primary: { i100: "", i75: "", i50: "", i25: "" },
      secondary: { i100: "", i75: "", i50: "", i25: "" },
    },
    brand: {
      primary: { i100: "", i75: "", i50: "", i25: "" },
      secondary: { i100: "", i75: "", i50: "", i25: "" },
    },
  },
};

export default theme;
