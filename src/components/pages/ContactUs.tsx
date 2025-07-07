import { useState, ChangeEvent, FormEvent } from "react"
import Swal from "sweetalert2"
import { RiFacebookFill } from "react-icons/ri"
import { RiInstagramLine } from "react-icons/ri"

interface FormData {
  firstName: string
  lastName: string
  email: string
  company: string
  description: string
  completionDate: string
  services: {
    preProduction: boolean
    production: boolean
    postProduction: boolean
  }
}

export const ContactUs: React.FC = () => {
  const [data, setData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    description: "",
    completionDate: "",
    services: {
      preProduction: false,
      production: false,
      postProduction: false,
    },
  })

  const input =
    (k: keyof FormData) =>
    (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setData({ ...data, [k]: e.target.value })

  const service =
    (k: keyof FormData["services"]) => (e: ChangeEvent<HTMLInputElement>) =>
      setData({
        ...data,
        services: { ...data.services, [k]: e.target.checked },
      })

  const submit = (e: FormEvent) => {
    e.preventDefault()
    Swal.fire({
      title: "Success!",
      text: "Your project details were sent. We’ll be in touch soon.",
      icon: "success",
    })
  }

  return (
    <div className="flex justify-center">
      <div className="flex max-w-[70em] flex-col gap-8 px-6 pb-20 md:flex-row md:gap-16">
        <div className="grid place-content-center">
          <div className="flex-1 space-y-4 ">
            <p>Make the most of your time & budget!</p>
            <p>
              It can be overwhelming to start a new video project. SkySee Video
              is here to make the process easy for you. Complete this form to
              provide contact information and a quick overview of your project,
              and we’ll work with you to develop a plan that meets your budget
              and hits your target goals.
            </p>
            <p>Located in Atlanta, Georgia</p>
            <p>Email: info@skyseevideo.com</p>
            <p>Phone: 678-304-9920</p>
            <div className="flex gap-2">
              <a
                href=""
                className="grid h-16 w-16 place-content-center rounded-full border-2 border-blue-700"
              >
                <RiFacebookFill size="24" color="blue" />
              </a>
              <a
                href=""
                className="grid h-16 w-16 place-content-center rounded-full border-2 border-blue-700"
              >
                <RiInstagramLine size="24" color="blue" />
              </a>
            </div>
          </div>
        </div>
        <form onSubmit={submit} className="flex flex-1 flex-col gap-4">
          <div className="flex flex-col gap-2">
            <label className="font-semibold">Name *</label>
            <div className="flex gap-2">
              <input
                required
                placeholder="First"
                className="flex-1 border p-2"
                value={data.firstName}
                onChange={input("firstName")}
              />
              <input
                required
                placeholder="Last"
                className="flex-1 border p-2"
                value={data.lastName}
                onChange={input("lastName")}
              />
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <label className="font-semibold">Email *</label>
            <input
              type="email"
              required
              className="border p-2"
              value={data.email}
              onChange={input("email")}
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="font-semibold">Company Name</label>
            <input
              className="border p-2"
              value={data.company}
              onChange={input("company")}
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="font-semibold">Description of Project</label>
            <textarea
              rows={4}
              className="border p-2"
              value={data.description}
              onChange={input("description")}
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="font-semibold">Project Completion Date</label>
            <input
              type="date"
              className="border p-2"
              value={data.completionDate}
              onChange={input("completionDate")}
            />
          </div>

          <fieldset className="flex flex-col gap-2">
            <legend className="font-semibold">Services Needed</legend>

            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={data.services.preProduction}
                onChange={service("preProduction")}
              />
              Pre-Production (Mood Boards, Scripts, Style Framing, Branding &
              Logo Development)
            </label>

            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={data.services.production}
                onChange={service("production")}
              />
              Production – Aerial & On-The-Ground Videography
            </label>

            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={data.services.postProduction}
                onChange={service("postProduction")}
              />
              Post-Production – Editing, 2D & 3D Animation and Sound Design
            </label>
          </fieldset>

          <button
            type="submit"
            className="self-start rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-500 transition-colors duration-300"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  )
}
