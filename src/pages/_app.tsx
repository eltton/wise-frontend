import React from "react";
import Head from "next/head";
import { AppProps } from "next/app";

import { GlobalStyle } from "../styles/global";
import { theme } from "../styles/global";
import { ThemeProvider } from "styled-components";

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,600;1,400;1,600&display=swap"
          rel="stylesheet"
        ></link>
        <title>Login</title>
      </Head>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
};

export default MyApp;
