import { default as skyseeLogo } from "/src/assets/skysee-7.png"
import { Link } from "react-router-dom"

export const HeaderLeft: React.FC = () => (
  <Link to="/" className="flex-none py-1">
    <img src={skyseeLogo} className="h-16 w-auto" />
  </Link>
)
