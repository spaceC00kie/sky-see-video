import { useMemo } from "react"
import { useLocation } from "react-router-dom"
import { Helmet } from "react-helmet-async"
import { CarouselProvider, ButtonBack, ButtonNext } from "pure-react-carousel"
import "pure-react-carousel/dist/react-carousel.es.css"
import { FiChevronLeft, FiChevronRight, FiShare2 } from "react-icons/fi"
import { cards } from "./ourWorkData"
import { FadeSlider } from "./FadeSlider"
import { WindowSize } from "../../../containers/WindowSize"

interface Props {
  title: string
  description: string
  videoUrl: string
}

export const ProjectPage: React.FC<Props> = ({
  title,
  description,
  videoUrl,
}) => {
  const { windowWidth } = WindowSize.useContainer()
  const location = useLocation()
  const visibleSlides = windowWidth < 640 ? 1 : windowWidth < 1024 ? 2 : 3

  const currentProjectIndex = useMemo(() => {
    return cards.findIndex((card) => card.path === location.pathname)
  }, [location.pathname])

  const initialSlide = useMemo(() => {
    if (currentProjectIndex === -1) return 0

    const centerOffset = Math.floor(visibleSlides / 2)
    const targetSlide = Math.max(0, currentProjectIndex - centerOffset)

    const maxSlide = Math.max(0, cards.length - visibleSlides)
    return Math.min(targetSlide, maxSlide)
  }, [currentProjectIndex, visibleSlides])

  const share = () => {
    const url = window.location.href
    navigator.share
      ? navigator.share({ title, text: description, url }).catch(() => null)
      : navigator.clipboard.writeText(url)
  }

  return (
    <>
      <Helmet>
        <title>{title} | SkySee Video</title>
        <meta name="description" content={description} />
      </Helmet>

      <div className="flex h-full flex-col items-center justify-evenly">
        <div className="relative mx-auto mb-6 aspect-video w-full max-w-[73em]">
          <div className="absolute inset-0 grid place-content-center rounded-sm bg-black" />
          <iframe
            src={videoUrl}
            className="absolute left-0 top-0 z-10 h-full w-full"
            style={{ border: "none" }}
            allow="autoplay; fullscreen; picture-in-picture"
            title={title}
            allowFullScreen
          />
        </div>

        <div className="flex flex-col items-center gap-6 px-4 sm:px-24">
          <div className="flex gap-4">
            <p className="grid place-content-center text-center text-3xl font-bold">
              {title}
            </p>
            <button
              onClick={share}
              className="flex h-12 w-28 items-center justify-evenly gap-2 rounded-md bg-blue-700 px-3 py-2 text-white hover:bg-blue-500 border-blue-800 border"
            >
              <FiShare2 /> Share
            </button>
          </div>
          <p className="max-w-4xl text-center">{description}</p>
        </div>

        <div className="relative w-full max-w-6xl flex-shrink-0 overflow-hidden py-10">
          <CarouselProvider
            naturalSlideWidth={4}
            naturalSlideHeight={5}
            totalSlides={cards.length}
            visibleSlides={visibleSlides}
            step={visibleSlides}
            dragEnabled
            touchEnabled
            infinite={false}
            className="w-full"
            currentSlide={initialSlide}
            isPlaying
          >
            <ButtonBack
              aria-label="Previous"
              className="absolute left-2.5 top-1/2 z-20 -translate-y-1/2 rounded-full border border-stone-500 bg-stone-300/80 p-3 backdrop-blur-sm transition hover:bg-stone-100/90 focus:outline-none disabled:hidden"
            >
              <FiChevronLeft size={30} />
            </ButtonBack>
            <ButtonNext
              aria-label="Next"
              className="absolute right-2.5 top-1/2 z-20 -translate-y-1/2 rounded-full border border-stone-500 bg-stone-300/80 p-3 backdrop-blur-sm transition hover:bg-stone-100/90 focus:outline-none disabled:hidden"
            >
              <FiChevronRight size={30} />
            </ButtonNext>
            <FadeSlider visibleSlides={visibleSlides} />
          </CarouselProvider>
        </div>
      </div>
    </>
  )
}
