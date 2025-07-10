import { useState, ChangeEvent, FormEvent } from "react"
import { Helmet } from "react-helmet-async"
import Swal from "sweetalert2"
import { RiFacebookFill, RiInstagramLine } from "react-icons/ri"
import { addDoc, collection, getFirestore } from "firebase/firestore"
import { firebaseApp } from "../../../firestore.config"
import { TextInput } from "../forms/TextInput"
import { Textarea } from "../forms/Textarea"
import { Checkbox } from "../forms/Checkbox"
import { HeroBanner } from "../common/HeroBanner"
import contactUsBanner from "/src/assets/contact-us/contact-us-banner.png?width=1600&format=webp"
import contactUsBannerSrcset from "/src/assets/contact-us/contact-us-banner.png?width=640;1024;1600&format=webp&as=srcset"

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
  const today = new Date().toISOString().split("T")[0]

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
        // @todo: change to info@skyseevideo.com
        to: ["kirstie317@gmail.com"],
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
        <HeroBanner
          img={contactUsBanner}
          srcSet={contactUsBannerSrcset}
          heightClass="h-96"
          overlayText="We'd love to talk with you about your project. Give us a call today!"
        />
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
                <TextInput
                  required
                  placeholder="First"
                  containerClassName="flex-1"
                  value={data.firstName}
                  onChange={input("firstName")}
                />
                <TextInput
                  required
                  placeholder="Last"
                  containerClassName="flex-1"
                  value={data.lastName}
                  onChange={input("lastName")}
                />
              </div>
            </div>

            <TextInput
              label="Email *"
              type="email"
              required
              value={data.email}
              onChange={input("email")}
            />

            <TextInput
              label="Company Name"
              value={data.company}
              onChange={input("company")}
            />

            <Textarea
              label="Description of Project"
              rows={4}
              value={data.description}
              onChange={input("description")}
            />

            <TextInput
              label="Project Completion Date"
              type="date"
              min={today}
              value={data.completionDate}
              onChange={input("completionDate")}
            />

            <fieldset className="flex flex-col gap-2">
              <legend className="font-semibold">Services Needed</legend>

              <Checkbox
                label="Pre-Production (Mood Boards, Scripts, Style Framing, Branding & Logo Development)"
                checked={data.services.preProduction}
                onChange={service("preProduction")}
              />
              <Checkbox
                label="Production – Aerial & On-The-Ground Videography"
                checked={data.services.production}
                onChange={service("production")}
              />
              <Checkbox
                label="Post-Production – Editing, 2D & 3D Animation and Sound Design"
                checked={data.services.postProduction}
                onChange={service("postProduction")}
              />
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
