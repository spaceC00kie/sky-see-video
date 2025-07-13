import { useState } from "react"

interface Props extends React.IframeHTMLAttributes<HTMLIFrameElement> {
  poster?: string
  playLabel?: string
}

export const LazyIframe: React.FC<Props> = ({ poster, playLabel = "Play video", ...props }) => {
  const [loaded, setLoaded] = useState(false)

  return (
    <div className="relative w-full h-full">
      {poster && !loaded && (
        <img src={poster} alt="" className="absolute left-0 top-0 h-full w-full object-cover" />
      )}
      {!loaded && (
        <button
          type="button"
          aria-label={playLabel}
          onClick={() => setLoaded(true)}
          className="absolute left-0 top-0 z-10 flex h-full w-full items-center justify-center bg-black/50 text-white"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" width="60" height="60" fill="currentColor">
            <polygon points="70,55 70,145 145,100" />
          </svg>
        </button>
      )}
      {loaded && (
        <iframe {...props} className={`absolute left-0 top-0 h-full w-full ${props.className ?? ""}`} />
      )}
    </div>
  )
}
