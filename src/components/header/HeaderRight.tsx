import { NavLink } from "react-router-dom"

export const HeaderRight: React.FC = () => (
  <div className="mx-1 flex flex-auto flex-nowrap items-center justify-end gap-6 px-2 align-middle text-xs">
    <NavLink to="/" className="whitespace-nowrap hover:text-blue-400">
      HOME
    </NavLink>
    <NavLink to="/about-us" className="whitespace-nowrap hover:text-blue-400">
      ABOUT US
    </NavLink>
    <NavLink to="/our-work" className="whitespace-nowrap hover:text-blue-400">
      OUR WORK
    </NavLink>
    <NavLink to="/our-services" className="whitespace-nowrap hover:text-blue-400">
      OUR SERVICES
    </NavLink>
    <NavLink to="/contact-us" className="whitespace-nowrap hover:text-blue-400">
      CONTACT US
    </NavLink>
    <div>
      <div>678-304-9920</div>
      <NavLink to="/contact-us" className="whitespace-nowrap rounded-md bg-blue-500 p-2 text-white hover:bg-blue-300">
        GET QUOTE
      </NavLink>
    </div>
  </div>
)
