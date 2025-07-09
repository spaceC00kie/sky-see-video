import React from "react"
import { Logo } from "./Logo"
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
          <Logo className="h-12 w-auto" />
        </Link>
      )}
    </div>
  )
}
