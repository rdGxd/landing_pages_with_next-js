import { GlobalStyles } from "@/styles/global-styles";
import { theme } from "@/styles/theme";
import P from "prop-types";
import { ThemeProvider } from "styled-components";

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

App.propTypes = {
  Component: P.elementType.isRequired,
  pageProps: P.any,
};
