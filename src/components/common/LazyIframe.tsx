import React, { useState } from "react"
import { FiPlay } from "react-icons/fi"

interface Props {
  videoUrl: string
  title: string
}

export const LazyIframe: React.FC<Props> = ({ videoUrl, title }) => {
  const [loaded, setLoaded] = useState(false)
  let thumbnail: string | undefined
  if (videoUrl.includes("vimeo")) {
    const match = /video\/(\d+)/.exec(videoUrl)
    thumbnail = match ? `https://vumbnail.com/${match[1]}.jpg` : undefined
  } else if (videoUrl.includes("youtube")) {
    const match = /embed\/([\w-]+)/.exec(videoUrl)
    thumbnail = match ? `https://img.youtube.com/vi/${match[1]}/hqdefault.jpg` : undefined
  }

  return loaded ? (
    <iframe
      src={videoUrl}
      className="absolute left-0 top-0 z-10 h-full w-full"
      title={title}
      style={{ border: "none" }}
      allow="autoplay; fullscreen; picture-in-picture"
      allowFullScreen
      loading="lazy"
    />
  ) : (
    <button
      type="button"
      aria-label={`Play ${title}`}
      onClick={() => setLoaded(true)}
      className="absolute left-0 top-0 z-10 h-full w-full"
    >
      {thumbnail ? (
        <img
          src={thumbnail}
          alt={title}
          loading="lazy"
          className="h-full w-full object-cover"
        />
      ) : (
        <div className="h-full w-full bg-black" />
      )}
      <span className="absolute inset-0 grid place-content-center bg-black/50">
        <FiPlay size={56} className="text-white" />
      </span>
    </button>
  )
}
