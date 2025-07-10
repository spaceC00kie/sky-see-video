import { Helmet } from "react-helmet-async"
import Carousel from "react-material-ui-carousel"
import { useLocation } from "react-router-dom"
import { cards } from "./ourWorkData"
import { OurWorkCard } from "./OurWorkCard"

interface Props {
  title: string
  description: string
  videoUrl: string
}

export const ProjectPage: React.FC<Props> = ({ title, description, videoUrl }) => (
  <>
    <Helmet>
      <title>{title} | SkySee Video</title>
      <meta name="description" content={description} />
    </Helmet>
    <div className="flex flex-col items-center gap-4 py-20 px-4">
      {videoUrl && (
        <div className="aspect-video w-full max-w-4xl">
          <iframe
            src={videoUrl}
            title={title}
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
            className="h-full w-full"
          />
        </div>
      )}
      <h1 className="text-3xl font-bold text-center">{title}</h1>
      <p className="max-w-4xl text-center">{description}</p>
    </div>
    <RelatedProjects />
  </>
)

const RelatedProjects: React.FC = () => {
  const { pathname } = useLocation()
  const otherCards = cards.filter((c) => c.path !== pathname)

  return (
    <div className="w-full px-4 pb-20">
      <h2 className="mb-4 text-center text-2xl font-bold">More Projects</h2>
      <Carousel
        navButtonsAlwaysVisible
        indicators={false}
        autoPlay={false}
        className="mx-auto w-full max-w-5xl"
      >
        {otherCards.map((card) => (
          <div key={card.path} className="flex justify-center py-4">
            <OurWorkCard {...card} />
          </div>
        ))}
      </Carousel>
    </div>
  )
}
