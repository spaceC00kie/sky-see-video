import { Helmet } from "react-helmet-async"
import { LazyIframe } from "../../common/LazyIframe"

interface Props {}

export const TourismAndResort: React.FC<Props> = ({}) => {
  return (
    <>
      <Helmet>
        <title>Tourism & Resort Videography | SkySee Video</title>
      </Helmet>

      <div className="flex flex-col items-center justify-center">
        <div className="relative mx-auto mb-6 aspect-video w-full max-w-[95em]">
          <LazyIframe
            videoUrl="https://player.vimeo.com/video/191655429?h=af982b45c1&dnt=1"
            title="Tourism & Resort Videography | SkySee Video"
          />
        </div>

        <div className="flex max-w-[70em] flex-col gap-8 pb-20">
          <div className="flex w-full flex-col gap-4 px-6">
            <h1 className="text-3xl font-medium text-blue-500">
              Tourism & Resort Videography
            </h1>
            <div className="flex flex-col gap-3 text-lg">
              <p>
                Travelers often make purchasing decisions with their eyes first.
                If your resort doesn’t make a clear and compelling statement at
                first glance, you may miss the opportunity to connect with
                potential guests. To make your destination stand out in the
                tourism industry you need to excite them with stunning imagery,
                capture the intimacy your destination offers, and make them feel
                welcome.
              </p>
              <p>
                At SkySee Video, we offer complete on-the-ground and aerial
                video services for the tourism industry. We work with community
                organizers, restaurants, retailers, attractions, and all types
                of lodging facilities to create visually stunning panoramas
                travelers will want to see for their own eyes. Show travelers
                the best impression of what you offer.
              </p>
              <p>
                Show off sparkling blue-green waters, a beautiful fall skyline,
                or your fall boutique product lineup with a custom-produced
                video made with your value proposition in mind. Take viewers on
                a local zip-line or give them a behind-the-scenes view of a chef
                artfully cooking steak flambé. Come to SkySee Video for all your
                tourism video needs.
              </p>
            </div>
          </div>
          <div className="flex w-full flex-col gap-4 px-6">
            <h2 className="text-blue-500 text-2xl">
              Our Tourism & Resort Videography Services
            </h2>
            <p className="text-lg">
              Our clients’ needs dictate the shooting style, video editing
              techniques, and effects we use. As a full-service tourism video
              production firm, we can find the right locations, secure permits,
              book talent, shoot footage, and edit footage to meet your
              specifications. Tourism & Resort clients come to us for:
            </p>
            <ul className="list-[circle] ml-5">
              <li>
                <span className="font-bold m-2">Social media marketing.</span>
                <span>
                  Create more engagement on Twitter, Facebook, Snapchat, and
                  Instagram with vibrant, short, and entertaining videos.
                  Display a highlight reel of your location’s features, make a
                  quick statement, or walk-through an experience. Give your
                  social media followers another reason to book their next
                  outing with your brand.
                </span>
              </li>
              <li>
                <span className="font-bold m-2">Promotional videos.</span>
                <span>
                  Take your marketing strategy to the next level with a short
                  video of your latest promotions and offerings. Create footage
                  for a digital billboard, secure space on a local display, or
                  take advantage of online video advertising opportunities. With
                  our help, your audience will want to watch the video over and
                  over.
                </span>
              </li>
              <li>
                <span className="font-bold m-2">Web design projects.</span>
                <span>
                  Give your homepage or landing added flair with a hero shot of
                  your people, places and products. We’ll work with your
                  marketing team to highlight the best visual cues to give your
                  webpage background depth and meaning. Consider a cinemagraph
                  (a living photograph with only one or two moving elements) to
                  catch your audience off guard. Improve conversions with a
                  video designed with your website needs in mind.
                </span>
              </li>
              <li>
                <span className="font-bold m-2">Special events.</span>
                <span>
                  Make every event count with branded video content designed to
                  attract new and repeat customers. If you’re sponsoring a booth
                  at the local fair, hosting a seasonal gathering, or
                  participating in a tourism promoting event, outshine the
                  competition with a video that sells your brand and complements
                  the event. Live stream an in-house event to draw in the crowds
                  or shoot footage for future marketing campaigns. Event footage
                  is particularly valuable in the marketing space.
                </span>
              </li>
            </ul>
            <p className="text-lg">
              Whether you’re working on general marketing activities or focused
              on a certain campaign, we can help you create a video you’ll love
              to share with your audience. From raw footage handoffs to full
              video packaging, we’ll deliver exactly what you need, on time, and
              on budget.
            </p>
          </div>
          <div className="flex w-full flex-col gap-4 px-6">
            <h2 className="text-blue-500 text-2xl">
              Partner with SkySee Video
            </h2>
            <p className="text-lg">
              When you need fresh marketing and advertising materials, who you
              partner with matters. Your audience will see a poorly executed
              video project a mile away. Instead of relying on amateur teams,
              give your audience an immersive experience with professional
              videography.
            </p>
            <p className="text-lg">
              At SkySee Video, our business is fully FAA certified for
              commercial drone usage during the day and at night. We carry ample
              insurance to protect our clients, and we can travel quickly
              anywhere in the Southeast to capture the right moment for your
              project. With access to a network of professionals who specialize
              in design, writing, and other areas of production, we are truly a
              full-service video service firm.
            </p>
            <p className="text-lg">
              Allow us to bring your location to life, and we’ll deliver a
              finished product you’ll want to share with the entire world. For
              more information about our tourism services, reach out to our team
              at 678-304-9920 or{" "}
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
