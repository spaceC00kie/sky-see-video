import React from "react"
import { Link } from "react-router-dom"

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
}) => (
  <div className="flex max-w-xl flex-col items-start gap-2 text-lg w-full flex-1">
    <Link
      to={path}
      className="group relative block w-full overflow-hidden rounded"
    >
      <div className="aspect-[4/3] w-full overflow-hidden flex items-center justify-center">
        <img
          src={image}
          srcSet={srcSet}
          alt={title}
          loading={lazy ? "lazy" : "eager"}
          className="w-full h-full object-cover border border-stone-300"
        />
      </div>
      <span className="pointer-events-none absolute inset-0 bg-white opacity-0 transition-opacity group-hover:opacity-40" />
    </Link>
    <h2 className="font-bold">{title}</h2>
    <p className="line-clamp-3 overflow-hidden text-ellipsis min-h-[4.5em]">
      {description || "\u00A0"}
    </p>
  </div>
)
