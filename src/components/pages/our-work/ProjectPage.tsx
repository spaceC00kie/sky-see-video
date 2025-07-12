import React, { useState, useEffect, useContext } from "react"
import { Helmet } from "react-helmet-async"
import { Link } from "react-router-dom"
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
  CarouselContext,
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

const FadeSlider: React.FC<{ visibleSlides: number }> = ({ visibleSlides }) => {
  const carouselContext = useContext(CarouselContext)
  const [currentSlide, setCurrentSlide] = useState(
    carouselContext.state.currentSlide,
  )

  useEffect(() => {
    const sync = () => setCurrentSlide(carouselContext.state.currentSlide)
    carouselContext.subscribe(sync)
    return () => carouselContext.unsubscribe(sync)
  }, [carouselContext])

  const isAtStart = currentSlide === 0
  const isAtEnd = currentSlide + visibleSlides >= cards.length

  return (
    <div className="relative">
      <Slider className="px-0 sm:px-6">
        {cards.map((card, idx) => (
          <Slide key={card.path} index={idx} className="border-b px-1 sm:px-3">
            <Link
              to={card.path}
              className="flex h-full flex-col overflow-hidden rounded-sm shadow transition hover:shadow-lg"
            >
              <div className="relative aspect-[4/3] w-full flex-none overflow-hidden border-b">
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
                <h3 className="mb-1 text-3xl font-semibold sm:text-lg">
                  {card.title}
                </h3>
                <p className="line-clamp-2 text-2xl text-gray-700 sm:text-sm">
                  {card.description}
                </p>
              </div>
            </Link>
          </Slide>
        ))}
      </Slider>

      <div
        className={`pointer-events-none absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-white to-transparent transition-opacity duration-300 ${
          isAtStart ? "opacity-0" : "opacity-100"
        }`}
      />
      <div
        className={`pointer-events-none absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-white to-transparent transition-opacity duration-300 ${
          isAtEnd ? "opacity-0" : "opacity-100"
        }`}
      />
    </div>
  )
}

export const ProjectPage: React.FC<Props> = ({
  title,
  description,
  videoUrl,
}) => {
  const { windowWidth } = WindowSize.useContainer()
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

      <div className="flex h-full flex-col items-center justify-evenly">
        <div className="relative mx-auto mb-6 aspect-video w-full max-w-[73em]">
          <div className="absolute inset-0 grid place-content-center rounded-sm bg-black" />
          <iframe
            src={videoUrl}
            className="absolute left-0 top-0 z-10 h-full w-full"
            style={{ border: "none" }}
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
          />
        </div>

        <div className="flex flex-col items-center gap-6 px-4 sm:px-24">
          <div className="flex gap-4">
            <h1 className="grid place-content-center text-center text-3xl font-bold">
              {title}
            </h1>
            <button
              onClick={share}
              className="flex h-12 w-28 items-center justify-evenly gap-2 rounded-md bg-blue-500 px-3 py-2 text-white hover:bg-blue-300"
            >
              <FiShare2 /> Share
            </button>
          </div>
          <p className="max-w-4xl text-center">{description}</p>
        </div>

        <div className="relative w-full max-w-6xl overflow-x-hidden py-10">
          <CarouselProvider
            naturalSlideWidth={4}
            naturalSlideHeight={5}
            totalSlides={cards.length}
            visibleSlides={visibleSlides}
            step={visibleSlides}
            dragEnabled
            touchEnabled
            isPlaying
            infinite={false}
            className="w-full"
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
