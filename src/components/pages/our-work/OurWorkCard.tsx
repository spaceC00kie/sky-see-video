import { Link } from "react-router-dom"

interface Props {
  image: string
  title: string
  description: string
  path: string
}

export const OurWorkCard: React.FC<Props> = ({
  image,
  title,
  description,
  path,
}) => {
  return (
    <div className="flex flex-col items-start gap-2 text-lg">
      <Link
        to={path}
        className="group relative block w-full overflow-hidden rounded"
      >
        <div className="aspect-[4/3] w-full overflow-hidden">
          <img
            src={image}
            loading="lazy"
            decoding="async"
            className="h-full w-full object-cover"
          />
        </div>
        <span className="pointer-events-none absolute inset-0 bg-white opacity-0 transition-opacity group-hover:opacity-40" />
      </Link>
      <h2 className="font-bold">{title}</h2>
      <p>{description}</p>
    </div>
  )
}
