import { StrictMode } from "react";
import ReactDOM from "react-dom/client"
import { App } from "./App"
import { createTheme, ThemeProvider } from "@mui/material/styles"
import { HelmetProvider } from "react-helmet-async"
//@ts-ignore
import { registerSW } from "virtual:pwa-register"
import { WindowSize } from "./containers/WindowSize"
import "./index.scss"
import { BrowserRouter } from "react-router-dom"
import { ScrollToTop } from "./components/ScrollToTop"

const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#93c5fd",
    },
    background: {
      default: "#192231",
      paper: "#24344d",
    },
  },
})

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <StrictMode>
    <HelmetProvider>
        <WindowSize.Provider>
            <ThemeProvider theme={theme}>
              <BrowserRouter>
                <ScrollToTop />
                <App />
              </BrowserRouter>
            </ThemeProvider>
        </WindowSize.Provider>
    </HelmetProvider>
  </StrictMode>,
)

registerSW({})
