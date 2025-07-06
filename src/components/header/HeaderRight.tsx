import { NavLink } from 'react-router-dom';

export const HeaderRight: React.FC = () => (
  <div className="mx-1 flex flex-auto items-center justify-end gap-1.5 px-2 align-middle">
    <NavLink to="/">HOME</NavLink>
    <NavLink to="/about">ABOUT US</NavLink>
    <NavLink to="/work">OUR WORK</NavLink>
    <NavLink to="/services">OUR SERVICES</NavLink>
    <NavLink to="/contact">CONTACT US</NavLink>
  </div>
);