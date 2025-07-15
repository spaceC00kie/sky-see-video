import { Header } from "./components/header/Header"
import { MainContent } from "./components/body/MainContent"
import ReactGA from "react-ga4"
import { useMouseNavigation } from "./hooks/useMouseNavigation"

export const App: React.FC = () => {
  ReactGA.initialize("G-8KMS1CZ8CF", {
    gtagOptions: {
      cookie_flags: "SameSite=None;Secure",
    },
  })
  useMouseNavigation()

  return (
    <div id="app" className="scrollbar flex h-screen flex-col">
      <Header />
      <MainContent />
    </div>
  )
}
