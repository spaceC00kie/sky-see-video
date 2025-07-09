import { NavLink } from "react-router-dom"
import { WindowSize } from "../../containers/WindowSize"
import { NavLinks } from "./NavLinks"

export const HeaderRight: React.FC = () => {
  const { isSmall } = WindowSize.useContainer()

  return (
    <div className="mx-1 flex flex-auto flex-wrap items-end justify-end gap-6 px-2 text-xs">
      {!isSmall && (
        <>
          <NavLinks className="whitespace-nowrap pb-2 hover:text-blue-400" />
          <div className="flex flex-col gap-2 whitespace-nowrap">
            <div className="pt-4 text-center">678-304-9920</div>
            <NavLink
              to="/contact-us"
              className="whitespace-nowrap rounded-md bg-blue-500 px-3 py-2 text-white hover:bg-blue-300"
            >
              GET QUOTE
            </NavLink>
          </div>
        </>
      )}
    </div>
  )
}
