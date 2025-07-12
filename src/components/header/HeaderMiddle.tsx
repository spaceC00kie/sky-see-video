import React from "react"
import { default as skyseeLogo } from "/src/assets/skysee-7.png?format=webp"
import { WindowSize } from "../../containers/WindowSize"
import { Link } from "react-router-dom"

export const HeaderMiddle: React.FC = () => {
  const { isSmall } = WindowSize.useContainer()
  return (
    <div className="flex-auto">
      {isSmall && (
        <Link
          to="/"
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 py-1 z-10"
        >
          <img src={skyseeLogo} alt="Sky See Video" className="h-12 w-auto" />
        </Link>
      )}
    </div>
  )
}
