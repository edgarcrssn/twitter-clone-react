import Header from "./Header/Header"
import Main from "./Main/Main"
import { BrowserRouter } from "react-router-dom"
import GlobalStyle from "../utils/style/GlobalStyles"
import { ThemeProvider } from "styled-components"
import styled from "styled-components"

const StyledApp = styled.div`
  display: flex;
  flex-direction: row;
`

const theme = {
  colors: {
    main: "#1D9BEF",
    main_lighter: "#EBF5FE",
    main_darker: "#1A8CD8",
    background: "#FFF",
    background_hover: "#F7F7F7",
    background_darker: "#EEF1F1",
    text: "#0F141A",
    text_smaller: "#536471"
  }
}

const App = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <GlobalStyle />
            <StyledApp>
              <Header />
              <Main />
            </StyledApp>
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
}

export default App