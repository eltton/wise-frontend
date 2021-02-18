import { createGlobalStyle } from "styled-components";

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
