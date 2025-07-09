import { Helmet } from "react-helmet-async"

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
  </>
)
