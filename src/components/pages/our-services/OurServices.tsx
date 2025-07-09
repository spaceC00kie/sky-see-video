import { Helmet } from "react-helmet-async"
import { OurServicesCard1 } from "./OurServicesCard1"
import { OurServicesCard2 } from "./OurServicesCard2"

import ourServicesBanner from "/src/assets/our-services/our-services-banner.png?format=webp"
import construction from "/src/assets/our-services/construction.png?format=webp"
import tourism from "/src/assets/our-services/tourism.jpg?format=webp"
import corporate from "/src/assets/our-services/corporate.jpeg?format=webp"
import documentaries from "/src/assets/our-services/documentaries.jpeg?format=webp"

interface Props {}

export const OurServices: React.FC<Props> = () => (
  <>
    <Helmet>
      <link rel="preload" as="image" href={ourServicesBanner} />
      <title>Services | SkySee Video</title>
      <meta
        name="description"
        content="Pre-production, production and post—see everything SkySee Video can do for your brand."
      />
    </Helmet>

    <div className="flex flex-col items-center justify-center">
      <img
        src={ourServicesBanner}
        className="h-32 w-full object-cover object-top sm:h-96"
        fetchPriority="high"
      />

      <div className="flex max-w-[70em] flex-col gap-4 px-6 py-20">
        <p className="text-xl text-blue-500">OUR&nbsp;SERVICES</p>

        <p className="text-2xl">
          SkySee Video offers pre-production, production and post-production
          services and packaging.&nbsp;…
        </p>

        <div className="flex flex-col flex-wrap justify-evenly gap-5 sm:flex-row">
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

        <div className="grid place-items-start md:grid-cols-2 lg:grid-cols-4 lg:place-items-start">
          <OurServicesCard2
            image={construction}
            title="Construction"
            description="Stand out at conventions, trade shows, social media and more. …"
            path=""
          />
          <OurServicesCard2
            image={tourism}
            title="Tourism & Resort"
            description="Inspire travelers to pack their bags and book your rooms by capturing the beauty and uniqueness of your vacation paradise. …"
            path=""
          />
          <OurServicesCard2
            image={corporate}
            title="Corporate Marketing"
            description="Capture your target audience with professional, polished video packaging, including 2-D and 3-D animation. …"
            path=""
          />
          <OurServicesCard2
            image={documentaries}
            title="Documentaries"
            description="Broadcast quality on-ground and aerial cinematography, field producing, DAM, 2-D & 3-D animation and more. …"
            path=""
          />
        </div>
      </div>
    </div>
  </>
)
