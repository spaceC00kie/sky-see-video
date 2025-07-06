import { Link } from "react-router-dom"

interface Props {
  image: string
  title: string
  description: string
  path: string
}
export const OurServicesCard2: React.FC<Props> = ({
  image,
  title,
  description,
  path,
}) => {
  return (
    <div className="flex flex-col items-center justify-between gap-3 sm:w-56">
      <div className="grid place-content-center pb-2">
        <Link to={path}>
          <img src={image} className="h-24 w-24 rounded-full" />
        </Link>
      </div>
      <Link to={path}>
        <h2 className="text-2xl text-blue-500">{title}</h2>
      </Link>
      <p className="text-lg">{description}</p>
    </div>
  )
}
