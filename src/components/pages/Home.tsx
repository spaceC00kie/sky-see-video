import ReactPlayer from "react-player"
import { CiMail } from "react-icons/ci"

interface Props {}

export const Home: React.FC<Props> = ({}) => {
  return (
    <div className="flex flex-col gap-4 py-20">
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
      <div className="flex max-w-3xl flex-col gap-10 px-14">
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
      </div>
    </div>
  )
}
