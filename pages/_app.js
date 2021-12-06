import { createGlobalStyle, ThemeProvider } from "styled-components";
import "../styles/globals.css";

const GlobalStyle = createGlobalStyle`
  html {
    scroll-behavior: smooth;
  }
  body {
    margin: 0;
    padding: 0;
    box-size: border-box;
  }
`;

const theme = {
  colors: {
    primary: "#0070f3"
  }
};

function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default App;
