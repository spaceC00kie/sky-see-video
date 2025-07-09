import { lazy, Suspense } from "react"
import { Route, Routes } from "react-router-dom"
import { cards } from "../pages/our-work/OurWork"
import { ProjectPage } from "../pages/our-work/ProjectPage"


const Home = lazy(() =>
  import("../pages/home/Home").then((m) => ({ default: m.Home })),
)
const AboutUs = lazy(() =>
  import("../pages/about-us/AboutUs").then((m) => ({ default: m.AboutUs })),
)
const OurWork = lazy(() =>
  import("../pages/our-work/OurWork").then((m) => ({ default: m.OurWork })),
)
const OurServices = lazy(() =>
  import("../pages/our-services/OurServices").then((m) => ({
    default: m.OurServices,
  })),
)
const ContactUs = lazy(() =>
  import("../pages/ContactUs").then((m) => ({ default: m.ContactUs })),
)

export const MainContent: React.FC = () => (
  <div className="flex h-full justify-center">
    <div className="flex grow flex-col gap-3">
      <Suspense fallback={null}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/our-work" element={<OurWork />} />
          <Route path="/our-services" element={<OurServices />} />
          <Route path="/contact-us" element={<ContactUs />} />
          {cards.map((card) => (
            <Route
              key={card.path}
              path={card.path}
              element={<ProjectPage {...card} />}
            />
          ))}
        </Routes>
      </Suspense>
    </div>
  </div>
)
