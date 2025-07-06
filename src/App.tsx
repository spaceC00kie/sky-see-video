import { motion } from "framer-motion"
import { Header } from "./components/header/Header"
import { MainContent } from "./components/body/MainContent"
import { Auth } from "./containers/Auth"
import ReactGA from "react-ga4"

export const App: React.FC = () => {
  ReactGA.initialize("G-8KMS1CZ8CF", {
    gtagOptions: {
      cookie_flags: "SameSite=None;Secure",
    },
  })
  const { auth } = Auth.useContainer()
  const overflow = auth?.currentUser ? "overflow-clip" : "overflow-y-scroll"

  return (
    <div id="app" className={`${overflow} scrollbar flex h-screen flex-col`}>
      <Header />
      <MainContent />
    </div>
  )
}
