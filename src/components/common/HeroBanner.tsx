import React from "react";

interface Props {
  img: string
  /** optional srcset for responsive images */
  srcSet?: string
  alt?: string
  /** tailwind height classes like "h-96" */
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
        <p className="max-w-[90%] text-center text-3xl text-white drop-shadow-2xl">
          {overlayText}
        </p>
      </div>
    )}
  </div>
);
