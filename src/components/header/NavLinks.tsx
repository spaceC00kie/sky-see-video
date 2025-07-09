import { NavLink } from "react-router-dom"

export const navItems = [
  { to: "/", label: "HOME" },
  { to: "/about-us", label: "ABOUT US" },
  { to: "/our-work", label: "OUR WORK" },
  { to: "/our-services", label: "OUR SERVICES" },
  { to: "/contact-us", label: "CONTACT US" },
] as const

interface Props {
  onClick?: () => void
  className?: string
}

export const NavLinks: React.FC<Props> = ({ onClick, className = "" }) => (
  <>
    {navItems.map(({ to, label }) => (
      <NavLink key={to} to={to} onClick={onClick} className={className}>
        {label}
      </NavLink>
    ))}
  </>
)
