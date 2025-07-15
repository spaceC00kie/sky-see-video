import { lazy, Suspense } from "react"
import { Spinner } from "../ui/Spinner"
import { Route, Routes } from "react-router-dom"
import { cards } from "../pages/our-work/ourWorkData"
import { ProjectPage } from "../pages/our-work/ProjectPage"
import { Construction } from "../pages/services/Construction"
import { TourismAndResort } from "../pages/services/TourismAndResort"
import { CorporateMarketing } from "../pages/services/CorporateMarketing"
import { Documentaries } from "../pages/services/Documentaries"

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
  import("../pages/services/OurServices").then((m) => ({
    default: m.OurServices,
  })),
)
const ContactUs = lazy(() =>
  import("../pages/ContactUs").then((m) => ({ default: m.ContactUs })),
)

export const MainContent: React.FC = () => (
  <div className="flex h-full justify-center">
    <div className="flex grow flex-col gap-3">
      <Suspense
        fallback={
          <div className="grid h-full place-content-center">
            <Spinner />
          </div>
        }
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/our-work" element={<OurWork />} />
          <Route path="/services" element={<OurServices />} />
          <Route path="/construction-videography" element={<Construction />} />
          <Route path="/tourism-videography" element={<TourismAndResort />} />
          <Route
            path="/corporate-video-marketing"
            element={<CorporateMarketing />}
          />
          <Route path="/film-and-video" element={<Documentaries />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/project/:slug" element={<ProjectPage />} />
        </Routes>
      </Suspense>
    </div>
  </div>
)
