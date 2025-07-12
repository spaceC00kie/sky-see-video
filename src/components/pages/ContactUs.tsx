import { useState, ChangeEvent, FormEvent } from "react"
import { Helmet } from "react-helmet-async"
import Swal from "sweetalert2"
import { RiFacebookFill, RiInstagramLine } from "react-icons/ri"
import { HeroBanner } from "../common/HeroBanner"
import contactUsBanner from "/src/assets/contact-us/contact-us-banner.png?width=1600&format=webp"
import contactUsBannerSrcset from "/src/assets/contact-us/contact-us-banner.png?width=640;1024;1600&format=webp&as=srcset"
import {
  TextField,
  Checkbox,
  FormControlLabel,
  Button,
  FormGroup,
  createTheme,
  ThemeProvider,
} from "@mui/material"
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider"
import { DatePicker } from "@mui/x-date-pickers/DatePicker"
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns"

const muiTheme = createTheme({ palette: { mode: "light" } })

// @todo get soren to sign up and give you the access key, paste here
const WEB3FORMS_ACCESS_KEY = "8b464d25-3c6f-4a8e-a029-033e6e23086d"

interface FormData {
  firstName: string
  lastName: string
  email: string
  company: string
  description: string
  completionDate: Date | null
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
  completionDate: null,
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

  const submit = (e: FormEvent) => {
    e.preventDefault()

    Swal.fire({
      title: "Sending…",
      allowOutsideClick: false,
      didOpen: () => Swal.showLoading(),
    })

    const servicesArr = Object.entries(data.services)
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

    const servicesText = servicesArr.join(", ") || "N/A"
    const dateString = data.completionDate?.toISOString().split("T")[0] ?? "N/A"

    const plainBody = [
      "New Project Inquiry",
      `Name: ${data.firstName} ${data.lastName}`,
      `Email: ${data.email}`,
      `Company: ${data.company || "N/A"}`,
      "",
      "Description:",
      data.description || "N/A",
      "",
      `Target Completion Date: ${dateString}`,
      `Services Needed: ${servicesText}`,
    ].join("\n")

    fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        access_key: WEB3FORMS_ACCESS_KEY,
        subject: "New Project Inquiry",
        from_name: `${data.firstName} ${data.lastName}`,
        replyto: data.email,
        first_name: data.firstName,
        last_name: data.lastName,
        company: data.company || "N/A",
        completion_date: dateString,
        services_needed: servicesText,
        message: plainBody,
      }),
    })
      .then((r) => r.json())
      .then((res) => {
        if (res.success) {
          Swal.close()
          Swal.fire({
            icon: "success",
            title: "Success!",
            text: "Your project details were sent. We’ll be in touch soon.",
          })
          setData(defaultData)
        } else {
          throw new Error(res.message)
        }
      })
      .catch(() => {
        Swal.close()
        Swal.fire({
          icon: "error",
          title: "Something went wrong",
          text: "Please call 678-304-9920 or email info@skyseevideo.com directly.",
        })
      })
  }

  return (
    <ThemeProvider theme={muiTheme}>
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
            <div className="grid w-full place-content-center md:w-1/2">
              <div className="flex-1 space-y-4">
                <p className="text-2xl">Make the most of your time & budget!</p>
                <p>
                  It can be overwhelming to start a new video project. SkySee
                  Video is here to make the process easy for you. Complete this
                  form to provide contact information and a quick overview of
                  your project, and we’ll work with you to develop a plan that
                  meets your budget and hits your target goals.
                </p>
                <p>Located in Atlanta, Georgia</p>
                <div className="flex flex-col gap-1">
                  <p>
                    Email:{" "}
                    <a href="mailto:info@skyseevideo.com" className="underline">
                      info@skyseevideo.com
                    </a>
                  </p>
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

            <form
              onSubmit={submit}
              className="flex w-full flex-col gap-4 md:w-1/2"
            >
              <div className="flex gap-2">
                <TextField
                  required
                  label="First Name"
                  variant="outlined"
                  fullWidth
                  value={data.firstName}
                  onChange={input("firstName")}
                />
                <TextField
                  required
                  label="Last Name"
                  variant="outlined"
                  fullWidth
                  value={data.lastName}
                  onChange={input("lastName")}
                />
              </div>

              <TextField
                required
                label="Email"
                type="email"
                variant="outlined"
                fullWidth
                value={data.email}
                onChange={input("email")}
              />

              <TextField
                label="Company Name"
                variant="outlined"
                fullWidth
                value={data.company}
                onChange={input("company")}
              />

              <TextField
                label="Description of Project"
                variant="outlined"
                multiline
                rows={4}
                fullWidth
                value={data.description}
                onChange={input("description")}
              />

              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DatePicker
                  label="Project Completion Date"
                  disablePast
                  value={data.completionDate}
                  onChange={(newDate) =>
                    setData({ ...data, completionDate: newDate })
                  }
                  slotProps={{
                    textField: { fullWidth: true, variant: "outlined" },
                  }}
                />
              </LocalizationProvider>

              <FormGroup>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={data.services.preProduction}
                      onChange={service("preProduction")}
                    />
                  }
                  label="Pre-Production (Mood Boards, Scripts, Style Framing, Branding & Logo Development)"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={data.services.production}
                      onChange={service("production")}
                    />
                  }
                  label="Production – Aerial & On-The-Ground Videography"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={data.services.postProduction}
                      onChange={service("postProduction")}
                    />
                  }
                  label="Post-Production – Editing, 2D & 3D Animation and Sound Design"
                />
              </FormGroup>

              <Button type="submit" variant="contained" className="self-start">
                Submit
              </Button>
            </form>
          </div>
        </div>
      </>
    </ThemeProvider>
  )
}
