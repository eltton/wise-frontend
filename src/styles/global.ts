import { createGlobalStyle } from "styled-components";
import { DefaultTheme } from "styled-components";

export const theme: DefaultTheme = {
  colors: {
    primary: "#FAF5FF",
    backgroundGradient:
      "linear-gradient(0, #130525 0%, rgba(105, 57, 153, 0) 100%)",
    primaryGradient: "linear-gradient(267.79deg, #383E71 0%, #9D25B0 99.18%)",
    primaryInvertedGradient:
      "linear-gradient(267.79deg, #9D25B0 0%, #383E71 99.18%)",
    title: "#383E71",
    text: "#989FDB",
    link: "#9D25B0",
    error: "#FF377F",
  },
  font: {
    family: "Montserrat",
  },
  style: {
    borderValid: "1px solid #989FDB",
    borderInvalid: "1px solid #FF377F",
  },
};

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    padding: 0;
    font-family: 'Montserrat', sans-serif;    
    background-color: #130525;
  }

  html, body {
    min-height: 100vh;
    @media screen and (min-width: 768px) {
    background-color: #FAF5FF;
  }
  }
`;
