import { Helmet } from "react-helmet-async"
import { Link } from "react-router-dom"
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel"
import "pure-react-carousel/dist/react-carousel.es.css"
import { FiChevronLeft, FiChevronRight, FiShare2 } from "react-icons/fi"
import { cards } from "./ourWorkData"
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
  const { windowWidth, isSmall } = WindowSize.useContainer()
  const visibleSlides = windowWidth < 640 ? 1 : windowWidth < 1024 ? 2 : 3

  const share = () => {
    const url = window.location.href
    if (navigator.share) {
      navigator.share({ title, text: description, url }).catch(() => null)
    } else {
      navigator.clipboard.writeText(url)
    }
  }

  return (
    <>
      <Helmet>
        <title>{title} | SkySee Video</title>
        <meta name="description" content={description} />
      </Helmet>

      <div className="flex flex-col items-center gap-4 py-20 px-4">
        {videoUrl && (
          <div className="relative mx-auto mb-6 aspect-video w-full max-w-4xl">
            <iframe
              src={videoUrl}
              title={title}
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
              className="absolute inset-0 h-full w-full rounded-sm"
            />
          </div>
        )}

        <h1 className="text-center text-3xl font-bold">{title}</h1>
        <p className="max-w-4xl text-center">{description}</p>
        <button
          onClick={share}
          className="flex items-center gap-2 rounded-md bg-blue-500 px-3 py-2 text-white hover:bg-blue-300"
        >
          <FiShare2 /> Share
        </button>

        <div className="relative mt-8 w-full max-w-6xl">
          <CarouselProvider
            naturalSlideWidth={4}
            naturalSlideHeight={5}
            totalSlides={cards.length}
            visibleSlides={visibleSlides}
            dragEnabled
            touchEnabled
            isPlaying
            infinite={false}
            className="w-full"
          >
            {!isSmall && (
              <>
                <ButtonBack
                  aria-label="Previous"
                  className="absolute left-2 top-1/2 z-20 -translate-y-1/2 rounded-full bg-stone-300/80 p-3 backdrop-blur-sm transition hover:bg-stone-100/90 focus:outline-none disabled:hidden border border-stone-500"
                >
                  <FiChevronLeft size={30} />
                </ButtonBack>
                <ButtonNext
                  aria-label="Next"
                  className="absolute right-2 top-1/2 z-20 -translate-y-1/2 rounded-full bg-stone-300/80 p-3 backdrop-blur-sm transition hover:bg-stone-100/90 focus:outline-none disabled:hidden border border-stone-500"
                >
                  <FiChevronRight size={30} />
                </ButtonNext>
              </>
            )}

            {/* Slider with opacity-fade on both edges */}
            <Slider
              className="px-6 sm:px-8"
              style={{
                // fade 0–40 px on left and right
                WebkitMaskImage:
                  "linear-gradient(to right, transparent 0px, black 40px, black calc(100% - 25px), transparent 100%)",
                maskImage:
                  "linear-gradient(to right, transparent 0px, black 40px, black calc(100% - 25px), transparent 100%)",
              }}
            >
              {cards.map((card, idx) => (
                <Slide
                  key={card.path}
                  index={idx}
                  className="px-2 sm:px-3 border-b"
                >
                  <Link
                    to={card.path}
                    className="flex h-full flex-col overflow-hidden rounded-sm shadow transition hover:shadow-lg"
                  >
                    <div className="relative aspect-[4/3] w-full flex-none overflow-hidden">
                      <picture>
                        {card.srcSet && <source srcSet={card.srcSet} />}
                        <img
                          src={card.image}
                          alt={card.title}
                          className="absolute inset-0 h-full w-full object-cover"
                          loading="lazy"
                        />
                      </picture>
                    </div>

                    <div className="grow p-4">
                      <h3 className="mb-1 text-lg font-semibold">
                        {card.title}
                      </h3>
                      <p className="line-clamp-2 text-sm text-gray-700">
                        {card.description}
                      </p>
                    </div>
                  </Link>
                </Slide>
              ))}
            </Slider>
          </CarouselProvider>
        </div>
      </div>
    </>
  )
}
