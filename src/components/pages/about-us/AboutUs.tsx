import { Helmet } from "react-helmet-async"
import { AboutUsCard } from "./AboutUsCard"
import { TedsAboutUsCard } from "./TedsAboutUsCard"

import aboutUsBanner from "/src/assets/about-us/about-us-banner.png?format=webp"
import sorenChristiansen from "/src/assets/about-us/soren-christiansen.jpg?format=webp"
import robinsonVil from "/src/assets/about-us/robinson-vil.jpg?format=webp"
import charlesFrederick from "/src/assets/about-us/charles-frederick.jpg?format=webp"

interface Props {}

export const AboutUs: React.FC<Props> = () => (
  <>
    <Helmet>
      {/* hero banner arrives early */}
      <link rel="preload" as="image" href={aboutUsBanner} />
      {/* first portrait shows above the fold on most screens */}
      <link rel="preload" as="image" href={sorenChristiansen} />
      <title>About Us | SkySee Video</title>
      <meta
        name="description"
        content="Meet the SkySee Video team—award-winning directors, producers and drone pilots."
      />
    </Helmet>

    <div className="flex flex-col items-center justify-center">
      <img
        src={aboutUsBanner}
        className="h-32 w-full object-cover object-top sm:h-96"
        fetchPriority="high"
      />

      <div className="flex max-w-[70em] flex-col gap-4 px-6 pt-5 pb-40">
        <p className="text-2xl text-blue-500">ABOUT&nbsp;US</p>

        <p className="p-2 text-xl">
          You’ve got specific media needs, and SkySee Video has the expertise to
          help you achieve them. We’re a boutique production company with film
          and corporate backgrounds, providing fresh perspectives for branding
          and marketing campaigns. From initial concepts to broadcast-quality
          final videos and animations&nbsp;…
        </p>

        <div className="grid gap-5 md:grid-cols-2">
          <AboutUsCard
            image={sorenChristiansen}
            name="Soren Christiansen"
            title="Videographer / Editor / Drone Pilot"
            description="With over three decades in advertising and video production, Soren uses his knowledge and experience to make sure every video package hits its mark and achieves its targeted goals. …"
          />

          <TedsAboutUsCard />

          <AboutUsCard
            image={robinsonVil}
            name="Robinson Vil"
            title="Director / Producer"
            description='Rob, a native of Haiti, is an award-winning director and producer who specializes in films and documentaries. …'
          />

          <AboutUsCard
            image={charlesFrederick}
            name="Charles Frederick"
            title="Producer / Social Media"
            description="Charles is a multi-Emmy-Award-winning writer, producer and editor, creating content for television, radio, online and digital communications. …"
          />
        </div>
      </div>
    </div>
  </>
)
