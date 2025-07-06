import { NavLink } from "react-router-dom"

export const HeaderRight: React.FC = () => (
  <div className="mx-1 flex flex-auto flex-nowrap items-end justify-end gap-6 px-2 text-xs">
    <NavLink to="/" className="whitespace-nowrap pb-2 hover:text-blue-400">
      HOME
    </NavLink>
    <NavLink
      to="/about-us"
      className="whitespace-nowrap pb-2 hover:text-blue-400"
    >
      ABOUT US
    </NavLink>
    <NavLink
      to="/our-work"
      className="whitespace-nowrap pb-2 hover:text-blue-400"
    >
      OUR WORK
    </NavLink>
    <NavLink
      to="/our-services"
      className="whitespace-nowrap pb-2 hover:text-blue-400"
    >
      OUR SERVICES
    </NavLink>
    <NavLink
      to="/contact-us"
      className="whitespace-nowrap pb-2 hover:text-blue-400"
    >
      CONTACT US
    </NavLink>
    <div className="flex flex-col gap-2 whitespace-nowrap">
      <div className="pt-4 text-center">678-304-9920</div>
      <NavLink
        to="/contact-us"
        className="whitespace-nowrap rounded-md bg-blue-500 px-3 py-2 text-white hover:bg-blue-300"
      >
        GET QUOTE
      </NavLink>
    </div>
  </div>
)
