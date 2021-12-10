import { ThemeProvider } from "styled-components";
import Header from "layout/header";
import theme from "theme";
import GlobalStyle from "../styles/Global";
import Content from "layout/content";
import { wrapper } from "redux/store";
import Footer from "layout/footer";
import { QueryClientProvider, QueryClient } from "react-query";
import type { AppProps /*, AppContext */ } from "next/app";
import { createTheme } from "@mui/material";
import { ThemeProvider as MUIProvider } from "@mui/material";

const queryClient = new QueryClient();

const outerTheme = createTheme({
  palette: {
    primary: {
      main: theme.colors.green[500],
    },
  },
});

function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <MUIProvider theme={outerTheme}>
          <GlobalStyle />
          <Header />
          <Content>
            <Component {...pageProps} />
          </Content>
          <Footer />
        </MUIProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default wrapper.withRedux(App);
