import { Helmet } from "react-helmet-async"
import { CiMail } from "react-icons/ci"
import { HiFilm } from "react-icons/hi"
import { FaCartPlus } from "react-icons/fa"
import { TiCamera } from "react-icons/ti"
import { Link } from "react-router-dom"

import { HomeCard1 } from "./HomeCard1"
import { cards as workCards } from "../our-work/ourWorkData"
import { GalleryCard } from "../../common/GalleryCard"

interface Props {}

export const Home: React.FC<Props> = () => (
  <>
    <Helmet>
      <link rel="preconnect" href="https://player.vimeo.com" />
      <link rel="preconnect" href="https://i.vimeocdn.com" />
      <link rel="preconnect" href="https://f.vimeocdn.com" />
      <link
        rel="preload"
        as="script"
        href="https://player.vimeo.com/api/player.js"
        crossOrigin="anonymous"
      />
      <link
        rel="preload"
        as="image"
        href="https://i.vimeocdn.com/video/1742868944-1024x576.webp"
        imageSrcSet="
          https://i.vimeocdn.com/video/1742868944-640x360.webp 640w,
          https://i.vimeocdn.com/video/1742868944-1024x576.webp 1024w"
        imageSizes="(max-width: 64em) 100vw, 1024px"
      />
      <title>SkySee Video | Professional Video. Powerful Results.</title>
      <meta
        name="description"
        content="Complete video production and graphic design—cinematic videography, marketing strategy and full post-production."
      />
    </Helmet>

    <div className="flex flex-col items-center justify-center">
      <div className="relative mx-auto mb-6 aspect-video w-full max-w-[95em]">
        <div className="absolute inset-0 grid place-content-center rounded-sm bg-black" />
        <iframe
          src="https://player.vimeo.com/video/821349989?autoplay=1&loop=1&muted=1&controls=1&background=0&dnt=1"
          className="absolute left-0 top-0 z-10 h-full w-full"
          title="SkySee Video Reel"
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
        />
      </div>

      <div className="flex max-w-[70em] flex-col gap-4 pb-20">
        <div className="flex w-full flex-col gap-10 px-6">
          <p className="text-3xl text-blue-700">
            Professional Video. Powerful Results.
          </p>

          <div className="flex flex-col gap-7 text-2xl">
            <p>
              SkySee Video creates award-winning content that elevates brands,
              products, and people. We partner with marketing teams, agencies,
              and organizations to deliver polished, brand-aligned video that
              drives results.
            </p>
            <p>
              From corporate promos to cinematic documentaries, we bring your
              vision to life with multi-camera 4K shoots, smooth gimbal work,
              and stunning aerials. Whether you need full production or a la
              carte support, we’re ready to help you achieve your vision.
            </p>
          </div>

          <Link
            to="/contact-us"
            className="inline-flex w-fit items-center gap-2 self-start rounded-sm bg-sky-700 px-4 py-3 text-white hover:bg-sky-600"
          >
            <CiMail />
            <span>Need an Estimate? Let&rsquo;s Talk</span>
          </Link>

          <p className="text-3xl text-blue-700">Services</p>
          <hr />

          <div className="flex flex-col flex-wrap justify-evenly gap-5 text-center sm:flex-row">
            <HomeCard1
              image={<HiFilm size="4em" color="orange" />}
              title="CINEMATIC VIDEOGRAPHY"
              description="Stunning, cinematic videography shot on the ground and in the air. With our passion and experience we provide the shots you need to reach your targeted audience."
            />
            <HomeCard1
              image={<FaCartPlus size="4em" color="orange" />}
              title="MARKETING MINDSET"
              description="SkySee Video works with businesses to create high-impact campaigns and content marketing that moves the needle and drives the bottom line."
            />
            <HomeCard1
              image={<TiCamera size="4em" color="orange" />}
              title="POST POWERHOUSE"
              description="We have the experts to edit your video, sweeten your sound, color correct and create astounding 2D & 3D motion GFX. With SkySee Video the Sky's the limit!"
            />
          </div>

          <p className="text-3xl text-blue-700">Latest Projects</p>
          <hr />

          <div className="mx-auto grid max-w-fit justify-items-center gap-5 md:grid-cols-2">
            {workCards.slice(0, 2).map((card) => (
              <GalleryCard key={card.title} {...card} />
            ))}
          </div>
        </div>
      </div>
    </div>
  </>
)
