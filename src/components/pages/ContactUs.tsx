import { useState, ChangeEvent, FormEvent } from "react"
import { Helmet } from "react-helmet-async"
import Swal from "sweetalert2"
import { RiFacebookFill, RiInstagramLine } from "react-icons/ri"
import { addDoc, collection, getFirestore } from "firebase/firestore"
import { firebaseApp } from "../../../firestore.config"
import contactUsBanner from "/src/assets/contact-us/contact-us-banner.png?format=webp"

const db = getFirestore(firebaseApp)

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

const defaultData: FormData = {
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
}

export const ContactUs: React.FC = () => {
  const [data, setData] = useState<FormData>(defaultData)

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

  const submit = async (e: FormEvent) => {
    e.preventDefault()
    try {
      const servicesSelected = Object.entries(data.services)
        .filter(([, v]) => v)
        .map(
          ([k]) =>
            ((
              {
                preProduction: "Pre-Production",
                production: "Production",
                postProduction: "Post-Production",
              } as const
            )[k]),
        )
        .join(", ")

      const emailBody = `New Project Inquiry

Name: ${data.firstName} ${data.lastName}
Email: ${data.email}
Company: ${data.company}
Description:
${data.description}

Target Completion Date: ${data.completionDate}
Services Needed: ${servicesSelected || "N/A"}`

      await addDoc(collection(db, "mail"), {
        to: ["info@skyseevideo.com"],
        message: {
          subject: "New Project Inquiry",
          text: emailBody,
        },
      })

      Swal.fire({
        title: "Success!",
        text: "Your project details were sent. We’ll be in touch soon.",
        icon: "success",
      })
      setData(defaultData)
    } catch {
      Swal.fire({
        title: "Something went wrong",
        text: "Please call 678-304-9920 or email info@skyseevideo.com directly.",
        icon: "error",
      })
    }
  }

  return (
    <>
      <Helmet>
        <link rel="preload" as="image" href={contactUsBanner} />
        <title>Contact Us | SkySee Video</title>
        <meta
          name="description"
          content="Tell us about your project—SkySee Video will craft a plan that meets your budget and goals."
        />
      </Helmet>

      <div className="flex flex-col items-center justify-center">
        <div className="relative h-96 w-full">
          <img
            src={contactUsBanner}
            className="h-full w-full object-cover object-top"
            fetchPriority="high"
          />
          <div className="absolute inset-0 flex items-end justify-center pb-20">
            <p className="max-w-[90%] text-center text-3xl text-white drop-shadow-2xl">
              We'd love to talk with you about your project. Give us a call
              today!
            </p>
          </div>
        </div>

        <div className="flex max-w-[70em] flex-col gap-8 px-6 py-20 md:flex-row md:gap-16">
          <div className="grid place-content-center">
            <div className="flex-1 space-y-4">
              <p className="text-xl">Make the most of your time & budget!</p>
              <p>
                It can be overwhelming to start a new video project. SkySee
                Video is here to make the process easy for you. Complete this
                form to provide contact information and a quick overview of your
                project, and we’ll work with you to develop a plan that meets
                your budget and hits your target goals.
              </p>
              <p>Located in Atlanta, Georgia</p>
              <div className="flex flex-col gap-1">
                <p>Email: info@skyseevideo.com</p>
                <p>Phone: 678-304-9920</p>
              </div>
              <div className="flex gap-2">
                <a
                  href="https://www.instagram.com/skyseevideo/"
                  className="group grid h-16 w-16 place-content-center rounded-full border-2 border-cyan-700 transition-colors hover:bg-cyan-700"
                >
                  <RiInstagramLine
                    size={24}
                    className="text-cyan-700 group-hover:text-white"
                  />
                </a>
                <a
                  href="https://www.facebook.com/SkySeeVideo/"
                  className="group grid h-16 w-16 place-content-center rounded-full border-2 border-blue-800 transition-colors hover:bg-blue-800"
                >
                  <RiFacebookFill
                    size={24}
                    className="text-blue-800 group-hover:text-white"
                  />
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
              className="self-start rounded bg-blue-600 px-4 py-2 text-white transition-colors duration-300 hover:bg-blue-500"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  )
}
