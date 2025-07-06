import { SignInButton } from "./SignInButton"
import { SignOutButton } from "./SignOutButton"

export const HeaderRight: React.FC = () => {
  return (
    <div className="mx-1 flex flex-auto items-center justify-end gap-1.5 px-2 align-middle">
      <button>HOME</button>
      <button>ABOUT US</button>
      <button>OUR WORK</button>
      <button>OUR SERVICES</button>
      <button>CONTACT US</button>
    </div>
  )
}
