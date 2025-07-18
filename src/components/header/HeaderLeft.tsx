// components/header/HeaderLeft.tsx
import { WindowSize } from "../../containers/WindowSize"
import { default as skyseeLogo } from "/src/assets/skysee-7.png?format=webp"
import { Link } from "react-router-dom"
import { GiHamburgerMenu } from "react-icons/gi"

interface Props {
  onMenuClick: () => void
}

export const HeaderLeft: React.FC<Props> = ({ onMenuClick }) => {
  const { isSmall } = WindowSize.useContainer()
  return (
    <div className="grid place-content-center">
      {isSmall ? (
        <button
          onClick={onMenuClick}
          className="grid place-content-center p-1"
          aria-label="Open menu"
        >
          <GiHamburgerMenu size={25} />
        </button>
      ) : (
        <Link to="/" className="flex-none py-1">
          <img src={skyseeLogo} alt="Sky See Video" className="h-16 w-auto" />
        </Link>
      )}
    </div>
  )
}
