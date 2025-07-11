import React from "react"

interface Props {
  img: string
  srcSet?: string
  alt?: string
  heightClass?: string
  overlayText?: React.ReactNode
}

export const HeroBanner: React.FC<Props> = ({
  img,
  srcSet,
  alt = "",
  heightClass = "h-32 sm:h-96",
  overlayText,
}) => (
  <div className={`relative w-full ${heightClass}`}>
    <img
      src={img}
      srcSet={srcSet}
      sizes="100vw"
      alt={alt}
      className="h-full w-full object-cover object-top"
      fetchPriority="high"
    />
    {overlayText && (
      <div className="absolute inset-0 flex items-end justify-center pb-20">
        <div className="relative inline-block">
          <span className="pointer-events-none absolute inset-0 rounded-full bg-stone-800/80 blur-xl" />
          <p className="relative z-10 px-6 py-4 text-center text-3xl text-white drop-shadow-2xl">
            {overlayText}
          </p>
        </div>
      </div>
    )}
  </div>
)
