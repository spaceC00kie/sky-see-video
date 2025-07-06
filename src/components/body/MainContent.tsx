import "../../index.scss"
import { Route, Routes } from "react-router-dom"
import { Home } from "../pages/home/Home"
import { AboutUs } from "../pages/AboutUs"
import { OurWork } from "../pages/OurWork"
import { OurServices } from "../pages/OurServices"
import { ContactUs } from "../pages/ContactUs"

export const MainContent: React.FC = () => (
  <div className="flex h-full justify-center">
    <div className="flex max-w-[52em] grow flex-col gap-3 px-3">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/our-work" element={<OurWork />} />
        <Route path="/our-services" element={<OurServices />} />
        <Route path="/contact-us" element={<ContactUs />} />
      </Routes>
    </div>
  </div>
)
