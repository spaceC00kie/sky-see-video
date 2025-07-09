import { Link } from "react-router-dom"

import { Picture, PictureData } from "../../Picture"

interface Props {
  image: PictureData
  title: string
  description: string
  path: string
}

export const HomeCard2: React.FC<Props> = ({
  image,
  title,
  description,
  path,
}) => (
  <div className="flex max-w-md flex-col items-start gap-2 text-lg">
    <Link
      to={path}
      className="group relative block w-full overflow-hidden rounded"
    >
      <div className="aspect-[4/3] w-full">
        <Picture data={image} alt={title} className="h-full w-full object-cover" />
      </div>
      <span className="pointer-events-none absolute inset-0 bg-white opacity-0 transition-opacity group-hover:opacity-40" />
    </Link>
    <h2 className="font-bold">{title}</h2>
    <p>{description}</p>
  </div>
)
