import { Helmet } from "react-helmet-async"

interface Props {}

export const CorporateMarketing: React.FC<Props> = ({}) => {
  return (
    <>
      <Helmet>
        <title>Corporate Marketing Videography | SkySee Video</title>
      </Helmet>

      <div className="flex flex-col items-center justify-center">
        <div className="relative mx-auto mb-6 aspect-video w-full max-w-[95em]">
          <div className="absolute inset-0 grid place-content-center rounded-sm bg-black" />
          <iframe
            src="https://player.vimeo.com/video/810145426?h=af982b45c1&dnt=1"
            className="absolute left-0 top-0 z-10 h-full w-full"
            title="Corporate Marketing Videography | SkySee Video"
            style={{ border: "none" }}
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
          />
        </div>

        <div className="flex max-w-[70em] flex-col gap-8 pb-20">
          <div className="flex w-full flex-col gap-4 px-6">
            <h1 className="text-3xl font-medium text-blue-700">
              Corporate Marketing
            </h1>
            <div className="flex flex-col gap-3 text-lg">
              <p>
                Video is quickly becoming one of the most popular corporate
                marketing tactics used today. Businesses can leverage the medium
                to showcase expertise, highlight company culture, promote
                events, and more. Whether your organization focuses on everyday
                consumers or other businesses, SkySee Video can help you develop
                engaging and conversion-driving video content.
              </p>
              <p>
                Through the art of video, brands can tap into their audience’s
                emotions, tell a story, and convey value. The sounds, imagery,
                and message of a video can bring a brand to life and build
                personal connections with viewers. Some of the most successful
                corporate marketing videos make people laugh, cry, or come to a
                new realization, creating a relationship with their audience
                through professionally produced videos.
              </p>
              <p>
                At SkySee Video, we offer complete, broadcast quality video, on
                the ground and in the air, for all corporate marketing purposes.
                If you need raw footage or beginning-to-end production support,
                we can help.
              </p>
            </div>
          </div>
          <div className="flex w-full flex-col gap-4 px-6">
            <h2 className="text-blue-700 text-2xl">
              Video Services for B2C, B2B, and Nonprofit Marketers
            </h2>
            <p className="text-lg">
              When it comes to video marketing, the quality of the video
              matters. To earn clicks, shares, and sales, you need a video that
              strikes a chord with your viewers and drives action. SkySee Video
              delivers polished and professional videos ideal for:
            </p>
            <h2 className="text-lg italic">Branding</h2>
            <p className="text-lg">
              Highlight your brand’s culture, personality, and voice with
              brand-specific videos. We frequently provide brands with highly
              stylized hero shots for landing pages and evergreen video content
              to drive website engagement levels. Earn brand equity online with
              professional and captivating videos of your people, products,
              premiere locations and other business locations. We can provide
              raw footage for your in-house needs or deliver a completed
              production package with professional video editing, sound design
              and custom graphics.
            </p>
            <h2 className="text-lg italic">General Video Marketing</h2>
            <p className="text-lg">
              In addition to the shorter, stylized pieces we offer for branding
              purposes, we help our clients with a range of general marketing
              video activities. Consider us for your one-stop shop for
              full-service video packaging.
            </p>
            <p className="text-lg">
              When you partner with us to develop videos for promotions, social
              media, special events, testimonials, conventions, and other
              marketing activities, we’ll develop compelling footage to draw in
              your audience and send the right marketing message. Use our work
              for multichannel marketing campaigns or as exclusive offerings for
              existing clients.
            </p>
            <p className="text-lg">
              Tell us your goals and our expert videographers will turn them
              into reality. From creating multiple versions of the video of
              varying lengths and languages, to inserting custom graphics, voice
              over, licensed music, and more, we’re a team of professionals
              ready to help you create successful marketing materials.
            </p>
            <p className="text-lg">
              At SkySee Video, we pride ourselves on our ability to offer custom
              videography at every level. From the most basic requests for
              footage to visionary production projects, we’re here to give you
              access to cost-effective and results-driven video content. We
              offer location scouting, can acquire any necessary shoot permits,
              and obtain FAA permission for drone flights. We’ll also provide a
              concise scope of work for the project that stays within budget,
              and hits the necessary marketing points for success.
            </p>
          </div>
          <div className="flex w-full flex-col gap-4 px-6">
            <h2 className="text-blue-700 text-2xl">
              SkySee Video: Premier Corporate Marketing
            </h2>
            <p className="text-lg">
              When your audience members see a SkySee Video production, they
              will enjoy an immersive experience of footage shot in the sky and
              on the ground. Our managing partner maintains his FAA commercial
              drone pilot certification for day and night operations as well as
              an FAA light sport aircraft pilot certification. SkySee Video is
              fully licensed and insured, and will provide COIs for all
              projects.
            </p>
            <p className="text-lg">
              You can count on us to move quickly to capture the perfect
              moments, deliver useful raw footage, and create beautiful,
              completed productions ready for use across all digital mediums.
            </p>
            <p className="text-lg">
              Customer satisfaction always comes first at SkySee Video. We will
              work with your team throughout the process to ensure proper
              direction and quality control. If you’re ready to see how video
              footage can transform your brand, give us a call at 678-304-9920
              or email us at{" "}
              <a href="mailto:info@skyseevideo.com" className="underline">
                info@skyseevideo.com
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
