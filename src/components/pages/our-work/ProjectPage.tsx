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
        <div className="relative mx-auto mb-6 aspect-video w-full max-w-4xl">
          <div className="absolute inset-0 grid place-content-center rounded-sm bg-black" />
          <iframe
            src={videoUrl}
            title={title}
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
            className="absolute left-0 top-0 z-10 h-full w-full"
          />
        </div>
      )}
      <h1 className="text-3xl font-bold text-center">{title}</h1>
      <p className="max-w-4xl text-center">{description}</p>
    </div>
  </>
)
