import { NavLink } from "react-router-dom"

export const HeaderRight: React.FC = () => (
  <div className="mx-1 flex flex-auto items-center justify-end gap-6 px-2 align-middle text-xs ">
    <NavLink to="/" className="hover:text-blue-400">
      HOME
    </NavLink>
    <NavLink to="/about-us" className="hover:text-blue-400">
      ABOUT US
    </NavLink>
    <NavLink to="/our-work" className="hover:text-blue-400">
      OUR WORK
    </NavLink>
    <NavLink to="/our-services" className="hover:text-blue-400">
      OUR SERVICES
    </NavLink>
    <NavLink to="/contact-us" className="hover:text-blue-400">
      CONTACT US
    </NavLink>
    <div>
      <div>678-304-9920</div>
      <NavLink to="/contact-us" className="hover:text-blue-400">
        GET QUOTE
      </NavLink>
    </div>
  </div>
)
