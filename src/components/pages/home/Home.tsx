import ReactPlayer from "react-player"
import { CiMail } from "react-icons/ci"
import { HomeCard1 } from "./HomeCard1"
import { HiFilm } from "react-icons/hi"
import { FaCartPlus } from "react-icons/fa"
import { TiCamera } from "react-icons/ti"
import { HomeCard2 } from "./HomeCard2"
import { default as kompasThumbnail } from "/src/assets/home/kompas-thumbnail.jpg"
import { default as hyundaiThumbnail } from "/src/assets/home/hyundai-thumbnail.png"

interface Props {}

export const Home: React.FC<Props> = ({}) => {
  return (
    <div className="flex flex-col gap-4 py-20 shrink-0 overflow-hidden">
      <div className="h-96">
        <ReactPlayer
          src="https://vimeo.com/806447198"
          playing
          muted
          loop
          width="100%"
          height="100%"
          controls
        />
      </div>
      <div className="flex max-w-3xl flex-col gap-10 px-6">
        <p className="text-3xl text-blue-500">
          Business Videos That Connect to Your Audience
        </p>
        <div className="flex flex-col gap-7 text-2xl">
          <p>
            SkySee Video provides complete video production and graphic design,
            supporting companies with every step of the production process.
          </p>

          <p>
            Demand for effective media increases every year, and so does your
            production schedule. With marketing departments stretched thin and
            team members working overtime to meet project deadlines, the need
            for outside consultation and production support has never been
            greater.
          </p>

          <p>
            Picking the right team you can trust means less oversight, more
            efficient use of internal time &amp; resources, and the assurance
            that deadlines are met. At SkySee Video, we’ll respect, protect and
            project your brand, creating work that drives viewers and grows your
            business. From long-form campaigns to snackable social media
            content, you’ve got marketing needs and we’ve got video solutions.
          </p>

          <p>
            Christiansen Communications is the parent company of SkySee Video.
          </p>
        </div>
        <button className="flex w-64 items-center justify-center gap-2 rounded-sm bg-sky-600 p-3 text-white hover:bg-blue-300">
          <CiMail />
          <p>Need an Estimate? Let's Talk</p>
        </button>
        <p className="text-3xl text-blue-500">Services</p>
        <hr />
        <div className="flex flex-col justify-evenly items-center gap-5 text-center sm:flex-row">
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
        <p className="text-3xl text-blue-500">Latest Projects</p>
        <hr />
        <div className="flex flex-col justify-center items-center gap-5 sm:flex-row">
          <HomeCard2
            image={kompasThumbnail}
            title="Kompas Communications / Mission"
            description="Kompas Communications is a strategic, creative and digital marketing & communications company. In this promo their graphic mark illustrates the company’s mission statement and customer service."
            link="" //@ todo!
          />
          <HomeCard2
            image={hyundaiThumbnail}
            title="Hyundai HCEA / Amerigo Recycling"
            description="Hyundai Construction Equipment of America talked with the owner of Amerigo Recycling in Atlanta about his satisfaction with HCEA equipment, dedication to service, and quick turnaround on delivery."
            link="" //@ todo!
          />
        </div>
      </div>
    </div>
  )
}
