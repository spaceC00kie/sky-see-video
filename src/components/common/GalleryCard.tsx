import React from "react"
import { Link, useNavigate } from "react-router-dom"

interface Props {
  image: string
  srcSet: string
  title: string
  description: string
  path: string
  lazy?: boolean
}

export const GalleryCard: React.FC<Props> = ({
  image,
  srcSet,
  title,
  description,
  path,
  lazy,
}) => {
  const navigate = useNavigate()

  const to = path.startsWith("/") ? path : `/${path}`

  return (
    <div className="flex max-w-xl flex-col items-start gap-2 text-lg w-full">
      <Link
        to={to}
        onClick={(e) => {
          e.preventDefault()
          navigate(to)
        }}
        className="group relative block w-full overflow-hidden rounded"
      >
        <div className="aspect-[4/3] w-full overflow-hidden">
          <img
            src={image}
            srcSet={srcSet}
            alt={title}
            loading={lazy ? "lazy" : "eager"}
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
