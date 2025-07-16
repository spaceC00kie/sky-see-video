import { useState, useEffect, useContext } from "react"
import { Link } from "react-router-dom"
import { Slider, Slide, CarouselContext } from "pure-react-carousel"
import { cards } from "./ourWorkData"

interface Props {
  visibleSlides: number
}

export const FadeSlider: React.FC<Props> = ({ visibleSlides }) => {
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
        {cards.map((card, index) => (
          <Slide
            key={card.path}
            index={index}
            className="border-b px-1 sm:px-3"
          >
            <Link
              to={card.path}
              className="flex h-full flex-col overflow-hidden rounded-sm shadow transition hover:shadow-lg"
            >
              <div className="relative aspect-[4/3] w-full flex-none overflow-hidden border-b">
                <picture>
                  {card.srcSet && <source srcSet={card.srcSet} />}
                  <img
                    src={card.image}
                    alt=""
                    role="presentation"
                    className="absolute inset-0 h-full w-full object-cover"
                    loading={index > 5 ? "lazy" : "eager"}
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

      {visibleSlides > 1 && (
        <>
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
        </>
      )}
    </div>
  )
}
