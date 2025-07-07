import { OurServicesCard1 } from "./OurServicesCard1"
import { OurServicesCard2 } from "./OurServicesCard2"

interface Props {}

export const OurServices: React.FC<Props> = ({}) => {
  return (
    <div className="flex flex-col items-center justify-center">
      {/* full length banner here @todo */}
      <div className="flex max-w-[70em] flex-col gap-4 py-20">
        <div>
          <p>OUR SERVICES</p>
          <p>
            SkySee Video offers pre-production, production, and post-production
            services and packaging. We work on corporate marketing videos,
            training videos, social media events, promotional videos, and more.
            Our experience both in the air and on the ground makes us the right
            team for short- and long-form documentaries. These services include:
          </p>
          <div className="flex flex-col flex-wrap justify-evenly gap-5 text-center sm:flex-row">
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
          <p>INDUSTRIES</p>
          <hr />
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            <OurServicesCard2
              image=""
              title="Construction"
              description="Stand out at conventions, trade shows, social media and more. SkySee Video helps today’s home builders and developers highlight the uniqueness of their properties and developments with broadcast quality video packaging. Builders who are LEED compliant can take advantage of SkySee Video’s infrared cameras, emphasizing your company’s green commitment to the environment."
              path=""
            />
            <OurServicesCard2 image="" title="" description="" path="" />
            <OurServicesCard2 image="" title="" description="" path="" />
            <OurServicesCard2 image="" title="" description="" path="" />
          </div>
        </div>
      </div>
    </div>
  )
}
