import { HeaderLeft } from "./HeaderLeft"
import { HeaderMiddle } from "./HeaderMiddle"
import { HeaderRight } from "./HeaderRight"

export const Header: React.FC = () => {
  return (
    <div className="sticky top-0 z-50 flex h-20 w-full shrink-0 items-center justify-center bg-white px-4 text-xl">
      <div className="no-wrap flex w-full justify-between relative">
        <HeaderLeft />
        <HeaderMiddle />
        <HeaderRight />
      </div>
    </div>
  )
}
