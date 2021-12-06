import { ThemeProvider } from "styled-components";
import Header from "layout/header";
import theme from "theme";
import GlobalStyle from "../styles/Global";
import Content from "layout/content";
import { wrapper } from "redux/store";
import Footer from "layout/footer";
import { QueryClientProvider, QueryClient } from "react-query";

const queryClient = new QueryClient();

function App({ Component, pageProps }) {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Header />
        <Content>
          <Component {...pageProps} />
        </Content>
        <Footer />
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default wrapper.withRedux(App);
