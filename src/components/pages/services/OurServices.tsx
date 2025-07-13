import { Helmet } from "react-helmet-async"
import { Outlet } from "react-router-dom"
import { OurServicesCard1 } from "./OurServicesCard1"
import { OurServicesCard2 } from "./OurServicesCard2"
import ourServicesBanner from "/src/assets/services/services-banner.png?w=1600&format=webp"
import ourServicesBannerSrcset from "/src/assets/services/services-banner.png?w=640;1024;1600&format=webp&as=srcset"
import { HeroBanner } from "../../common/HeroBanner"
import construction from "/src/assets/services/construction.png?format=webp"
import tourism from "/src/assets/services/tourism.jpg?format=webp"
import corporate from "/src/assets/services/corporate.jpeg?format=webp"
import documentaries from "/src/assets/services/documentaries.jpeg?format=webp"

interface Props {}

export const OurServices: React.FC<Props> = () => (
  <>
    <Helmet>
      <link
        rel="preload"
        as="image"
        href={ourServicesBanner}
        fetchPriority="high"
      />
      <link
        rel="preload"
        as="image"
        href={ourServicesBannerSrcset}
        fetchPriority="high"
      />
      <title>Services | SkySee Video</title>
      <meta
        name="description"
        content="Pre-production, production and post—see everything SkySee Video can do for your brand."
      />
    </Helmet>

    <div className="flex flex-col items-center justify-center">
      <HeroBanner
        img={ourServicesBanner}
        srcSet={ourServicesBannerSrcset}
        alt="SkySee Video services"
      />

      <div className="flex max-w-[70em] flex-col gap-4 px-6 py-20">
        <p className="text-xl text-blue-500">OUR&nbsp;SERVICES</p>

        <p className="text-2xl">
          SkySee Video offers pre-production, production and post-production
          services and packaging. We work on corporate marketing videos,
          training videos, social media events, promotional videos, and more.
          Our experience both in the air and on the ground makes us the right
          team for short and long form documentaries. These services include:
        </p>

        <div className="flex flex-col flex-wrap justify-evenly items-start gap-5 sm:flex-row">
          <OurServicesCard1
            title="PRE-PRODUCTION"
            bulletPoints={[
              "Concepting",
              "Mood Boards",
              "Style Framing",
              "Branding & Logo Development",
              "Script Writing",
              "Story Boarding",
            ]}
          />
          <OurServicesCard1
            title="PRODUCTION"
            bulletPoints={[
              "3-Camera Interviews",
              "Motorized Parallax Slider",
              "Gimbals",
              "Licensed, Insured Drones",
              "Stylized B-roll",
              "Live Streaming",
            ]}
          />
          <OurServicesCard1
            title="POST-PRODUCTION"
            bulletPoints={[
              "Editing",
              "Sound Design",
              "Motion Graphics",
              "Social Media Videos",
              "2-D Animation",
              "3-D Modeling & Animation",
              "Digital Asset Management",
            ]}
          />
        </div>

        <p className="text-2xl text-blue-500">INDUSTRIES</p>
        <hr />

        <div className="grid md:grid-cols-2 lg:grid-cols-4">
          <OurServicesCard2
            image={construction}
            title="Construction"
            description="Stand out at conventions, trade shows, social media and more. SkySee Video helps today’s home builders and developers highlight the uniqueness of their properties and developments with broadcast quality video packaging. Builders who are LEED compliant can take advantage of SkySee Video’s infrared cameras, emphasizing your company’s green commitment to the environment."
            path="/construction-videography"
          />
          <OurServicesCard2
            image={tourism}
            title="Tourism & Resort"
            description="Inspire travelers to pack their bags and book your rooms by capturing the beauty and uniqueness of your vacation paradise. Promote the once-in-a-lifetime experience you have to offer with broadcast quality video, shot on the ground and in the air. SkySee Video works with marketing teams to provide promotion video packages for social media, trade shows, conventions and more."
            path="/tourism-videography"
          />
          <OurServicesCard2
            image={corporate}
            title="Corporate Marketing"
            description="Capture your target audience with professional, polished video packaging, including 2-D and 3-D animation. Whether you’re a B2B, B2C or not-for-profit organization, SkySee Video has the solution. SkySee Video works with marketing teams to provide broadcast quality video, shot on the ground, and in the air for social media, trade shows, conventions and more."
            path="/corporate-video-marketing"
          />
          <OurServicesCard2
            image={documentaries}
            title="Documentaries"
            description="Broadcast quality, on the ground and aerial cinematography, field producing, DAM, 2-D & 3-D animation, and more. SkySee Video has everything you need for your next documentary, including gimbals for smooth run ‘n gun interviews, walk ‘n talks, and b-roll. SkySee Video uses Frame.io’s Camera to Cloud, allowing clients/producers to view shots in real time."
            path="/film-and-video"
          />
        </div>
      </div>
    </div>
    <Outlet />
  </>
)
