import { Header } from "./components/header/Header"
import { MainContent } from "./components/body/MainContent"
import ReactGA from "react-ga4"

export const App: React.FC = () => {
  ReactGA.initialize("G-8KMS1CZ8CF", {
    gtagOptions: {
      cookie_flags: "SameSite=None;Secure",
    },
  })

  return (
    <div id="app" className="scrollbar flex h-screen flex-col">
      <Header />
      <MainContent />
    </div>
  )
}
