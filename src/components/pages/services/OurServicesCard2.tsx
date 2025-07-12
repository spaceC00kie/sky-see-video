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
}) => (
  <div className="flex flex-col items-center justify-start gap-3 p-5 lg:w-64">
    <div className="grid place-content-center pb-2">
      <Link to={path}>
        <img src={image} alt={title} className="h-36 w-36 rounded-full" />
      </Link>
    </div>
    <Link to={path}>
      <h2 className="text-lg text-blue-500 underline">{title}</h2>
    </Link>
    <p className="text-md text-center">{description}</p>
  </div>
)
