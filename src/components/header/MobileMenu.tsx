import { NavLink } from "react-router-dom"
import { IoClose } from "react-icons/io5"
import { NAV_ITEMS, QUOTE_ITEM } from "../common/NavItems"

interface Props {
  open: boolean
  onClose: () => void
}

export const MobileMenu: React.FC<Props> = ({ open, onClose }) => (
  <>
    <div
      onClick={onClose}
      className={`fixed inset-0 z-50 bg-black/50 transition-opacity duration-300 ${
        open ? "opacity-100" : "pointer-events-none opacity-0"
      }`}
    />
    <nav
      className={`fixed inset-y-0 left-0 z-50 w-64 transform border-r border-stone-300 bg-stone-100 shadow-lg transition-transform duration-300 ${
        open ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <div className="flex flex-col">
        <div className="flex w-full justify-end">
          <button onClick={onClose} className="p-2">
            <IoClose size={35} />
          </button>
        </div>
        {[...NAV_ITEMS, QUOTE_ITEM].map(({ label, path }) => (
          <NavLink
            key={label}
            onClick={onClose}
            to={path}
            className="px-6 py-3 text-sm hover:bg-stone-500 hover:text-white"
          >
            {label}
          </NavLink>
        ))}
      </div>
    </nav>
  </>
)
