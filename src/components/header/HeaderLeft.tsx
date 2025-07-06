import { WindowSize } from "../../containers/WindowSize"
import { default as skyseeLogo } from "/src/assets/skysee-7.png"
import { Link } from "react-router-dom"
import { GiHamburgerMenu } from "react-icons/gi"

export const HeaderLeft: React.FC = () => {
  const { isSmall } = WindowSize.useContainer()
  return (
    <div className="grid place-content-center">
      {isSmall ? (
        // @todo connect button functionality
        <button className="grid place-content-center p-1"> 
          <GiHamburgerMenu size={25}/>
        </button>
      ) : (
        <Link to="/" className="flex-none py-1">
          <img src={skyseeLogo} className="h-16 w-auto" />
        </Link>
      )}
    </div>
  )
}
