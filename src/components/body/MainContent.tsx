import "../../index.scss"
import { Auth } from "../../containers/Auth"
import { Route, Routes } from "react-router-dom"

export const MainContent: React.FC = () => {
  const { auth, user, isLoading } = Auth.useContainer()
  const paddingAtTop = auth?.currentUser ? "" : "pt-4"

  return (
    <div className="flex h-full justify-center">
      <div
        className={`${paddingAtTop} flex max-w-[52em] grow flex-col gap-3 px-3`}
      >
        <Routes>
          <Route path="/" element={<div>home</div>} />
        </Routes>
        <div className="h-72 w-full rounded-md border bg-black" />
        <div className="h-72 w-full rounded-md border bg-black" />
        <div className="h-72 w-full rounded-md border bg-black" />
        <div className="h-72 w-full rounded-md border bg-black" />
        <div className="h-72 w-full rounded-md border bg-black" />
        <div className="h-72 w-full rounded-md border bg-black" />
        <div className="h-72 w-full rounded-md border bg-black" />
        <div className="h-72 w-full rounded-md border bg-black" />
        <div className="h-72 w-full rounded-md border bg-black" />
        <div className="h-72 w-full rounded-md border bg-black" />
        <div className="h-72 w-full rounded-md border bg-black" />
        <div className="h-72 w-full rounded-md border bg-black" />
      </div>
    </div>
  )
}
