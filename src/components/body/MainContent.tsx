import "../../index.scss"
import { Auth } from "../../containers/Auth"

export const MainContent: React.FC = () => {
  const { auth, user, isLoading } = Auth.useContainer()
  const paddingAtTop = auth?.currentUser ? "" : "pt-4"

  return (
    <div className="flex h-full justify-center">
      <div
        className={`${paddingAtTop} flex max-w-[52em] grow flex-col gap-3 px-3`}
      >
        <div className="border w-full h-72 bg-black rounded-md" />
        <div className="border w-full h-72 bg-black rounded-md" />
        <div className="border w-full h-72 bg-black rounded-md" />
        <div className="border w-full h-72 bg-black rounded-md" />
        <div className="border w-full h-72 bg-black rounded-md" />
        <div className="border w-full h-72 bg-black rounded-md" />
        <div className="border w-full h-72 bg-black rounded-md" />
        <div className="border w-full h-72 bg-black rounded-md" />
        <div className="border w-full h-72 bg-black rounded-md" />
        <div className="border w-full h-72 bg-black rounded-md" />
        <div className="border w-full h-72 bg-black rounded-md" />
        <div className="border w-full h-72 bg-black rounded-md" />
      </div>
    </div>
  )
}
