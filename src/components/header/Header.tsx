// components/header/Header.tsx
import { useState } from "react"
import { HeaderLeft } from "./HeaderLeft"
import { HeaderMiddle } from "./HeaderMiddle"
import { HeaderRight } from "./HeaderRight"
import { NavLink } from "react-router-dom"
import { IoClose } from "react-icons/io5"

export const Header: React.FC = () => {
  const [open, setOpen] = useState(false)
  const close = () => setOpen(false)

  return (
    <>
      <div className="sticky top-0 z-50 flex h-20 w-full shrink-0 items-center justify-center bg-white px-4 pb-3 text-xl">
        <div className="no-wrap relative flex w-full justify-between">
          <HeaderLeft onMenuClick={() => setOpen(true)} />
          <HeaderMiddle />
          <HeaderRight />
        </div>
      </div>

      <div
        onClick={close}
        className={`fixed inset-0 z-40 bg-black/50 transition-opacity duration-300 ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      />

      <nav
        className={`fixed inset-y-0 left-0 z-50 w-64 transform bg-stone-100 bg-white shadow-lg transition-transform duration-300 ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex flex-col">
          <div className="flex w-full justify-end">
            <button onClick={close} className="p-2">
              <IoClose size={35} />
            </button>
          </div>
          <NavLink
            onClick={close}
            to="/"
            className="px-6 py-3 text-sm hover:bg-stone-500 hover:text-white"
          >
            HOME
          </NavLink>
          <NavLink
            onClick={close}
            to="/about-us"
            className="px-6 py-3 text-sm hover:bg-stone-500 hover:text-white"
          >
            ABOUT US
          </NavLink>
          <NavLink
            onClick={close}
            to="/our-work"
            className="px-6 py-3 text-sm hover:bg-stone-500 hover:text-white"
          >
            OUR WORK
          </NavLink>
          <NavLink
            onClick={close}
            to="/our-services"
            className="px-6 py-3 text-sm hover:bg-stone-500 hover:text-white"
          >
            OUR SERVICES
          </NavLink>
          <NavLink
            onClick={close}
            to="/contact-us"
            className="px-6 py-3 text-sm hover:bg-stone-500 hover:text-white"
          >
            CONTACT US
          </NavLink>
          <NavLink
            onClick={close}
            to="/contact-us"
            className="px-6 py-3 text-sm hover:bg-stone-500 hover:text-white"
          >
            GET QUOTE
          </NavLink>
        </div>
      </nav>
    </>
  )
}
