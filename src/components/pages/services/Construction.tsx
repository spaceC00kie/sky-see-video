import { Helmet } from "react-helmet-async"

interface Props {}

export const Construction: React.FC<Props> = ({}) => {
  return (
    <>
      <Helmet>
        <title>Construction Videography | SkySee Video</title>
      </Helmet>

      <div className="flex flex-col items-center justify-center">
        <div className="relative mx-auto mb-6 aspect-video w-full max-w-[95em]">
          <div className="absolute inset-0 grid place-content-center rounded-sm bg-black" />
          <iframe
            src="https://player.vimeo.com/video/193616058?h=af982b45c1&dnt=1"
            className="absolute left-0 top-0 z-10 h-full w-full"
            title="Construction Videography | SkySee Video"
            style={{ border: "none" }}
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
            fetchpriority="high"
          />
        </div>

        <div className="flex max-w-[70em] flex-col gap-8 pb-20">
          <div className="flex w-full flex-col gap-4 px-6">
            <h1 className="text-3xl font-medium text-blue-500">
              Construction Videography
            </h1>
            <div className="flex flex-col gap-3 text-lg">
              <p>
                The construction industry is highly competitive. Residential and
                commercial architecture, general contracting, renovation
                experts, developers and real estate firms need access to
                high-quality marketing materials to grow their business.
              </p>
              <p>
                SkySee Video provides premier quality on the ground and aerial
                cinematography that elevates your brand’s image. We help
                companies create emotional connections with its viewers by
                allowing builders and their marketing teams to tell their unique
                stories and focusing on key selling points of the property. We
                provide 3-camera interviews with motorized sliders, as well as
                smooth walking/talking interviews with gimbals to keep the
                energy going, as key areas provided by the marketing team are
                featured. Our videos are complemented with compelling aerial
                views for perspective, motion graphics and animations. We offer
                customized aerial and ground-based video services for a range of
                construction industry needs.
              </p>
            </div>
          </div>
          <div className="flex w-full flex-col gap-4 px-6">
            <h2 className="text-blue-500 text-2xl">
              Our Construction Industry Video Services
            </h2>
            <p className="text-lg">
              Many of our construction industry clients come to us wondering
              what we can do to add value to their work. We pride ourselves on
              our ability to create custom construction industry videos for:
            </p>
            <ul className="list-[circle] ml-5">
              <li>
                <span className="font-bold m-2">General Marketing.</span>
                <span>
                  We’ll work with your marketing team to provide specific,
                  stylized video to create ‘hero shots’ of your projects and
                  services. We can help you maximize your budget by shooting for
                  multiple projects, including website updates, social media
                  platforms, conventions, and more. SkySee Video also offers
                  retainer packages to tell the complete story of a project that
                  includes time lapse aerial videos to highlight the project’s
                  progress. With location locked broadcast quality cameras on
                  the ground and specialized drones we can fly duplicate aerial
                  patterns during key phases of the project to create a seamless
                  video of the build from start to finish.
                </span>
              </li>
              <li>
                <span className="font-bold m-2">
                  Full Service Video Production.
                </span>
                <span>
                  SkySee Video offers complete pre and post-production services
                  to clients looking to leverage their marketing dollars. With
                  more than 2 decades of advertising and on-air promotion
                  experience we’ll develop advertising materials, work on
                  sponsorship projects, and create complete video packages,
                  including editing, GFX (logos & contact info) and music/sound
                  design.
                </span>
              </li>
              <li>
                <span className="font-bold m-2">Events.</span>
                <span>
                  If you’re hosting or participating in an upcoming trade show,
                  parade of homes, or another marketing event, consider working
                  with SkySee Video for pre-recorded looping sizzle reels and
                  live broadcasts. Showcase the event with a live stream on
                  social media, record a promotional video to play at your
                  booth, or bolster your presentation with captivating imagery.
                  We’ll make your brand stand out.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}
