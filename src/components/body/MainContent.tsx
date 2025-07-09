import { lazy, Suspense } from "react"
import { Route, Routes } from "react-router-dom"
import { AliveScope, KeepAlive } from "react-activation"

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
  <AliveScope>
    <div className="flex h-full justify-center">
      <div className="flex grow flex-col gap-3">
        <Suspense fallback={null}>
          <Routes>
            <Route path="/" element={<KeepAlive id="home"><Home /></KeepAlive>} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/our-work" element={<OurWork />} />
            <Route path="/our-services" element={<OurServices />} />
            <Route path="/contact-us" element={<ContactUs />} />
          </Routes>
        </Suspense>
      </div>
    </div>
  </AliveScope>
)
