import "../styles/globals.css";
import { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import theme from "../theme";

import { PrismicProvider } from "@prismicio/react";
import { PrismicPreview } from "@prismicio/next";
import { linkResolver, repositoryName } from "../prismicio";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <PrismicProvider linkResolver={linkResolver}>
        <PrismicPreview repositoryName={repositoryName}>
          <ThemeProvider theme={theme}>
            <Component {...pageProps} />
          </ThemeProvider>
        </PrismicPreview>
      </PrismicProvider>
    </>
  );
}

export default MyApp;
