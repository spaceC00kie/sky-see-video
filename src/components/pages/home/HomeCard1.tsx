import { ReactNode } from "react"

interface Props {
  image: ReactNode
  title: string
  description: string
}

export const HomeCard1: React.FC<Props> = ({ image, title, description }) => (
  <div className="sm:w-56 flex flex-col items-center gap-3 justify-between">
    <div className="grid place-content-center pb-2">
      <div className="relative group ">
        <span className="pointer-events-none absolute inset-0 -z-10 translate-x-0.5 translate-y-0.5 rounded-full bg-black/40 blur-sm transition-transform duration-500 ease-in-out group-hover:scale-110" />
        <div className="grid h-24 w-28 place-content-center rounded-full bg-blue-700">
          {image}
        </div>
      </div>
    </div>
    <h2 className="text-2xl text-blue-700">{title}</h2>
    <p className="text-lg">{description}</p>
  </div>
)
