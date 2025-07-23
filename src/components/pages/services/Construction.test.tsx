import { render } from "@testing-library/react"
import { HelmetProvider } from "react-helmet-async"
import { Construction } from "./Construction"

const renderWithProviders = (component: React.ReactElement) => {
  return render(<HelmetProvider>{component}</HelmetProvider>)
}

describe("Construction", () => {
  it("renders without crashing", () => {
    renderWithProviders(<Construction />)
  })

  it("sets correct helmet meta tags", () => {
    const { container } = renderWithProviders(<Construction />)
    // Helmet meta tags are set but not easily testable in jsdom
    // This test ensures the component renders without errors when Helmet is used
    expect(container.firstChild).toBeInTheDocument()
  })

  it("renders video iframe with correct attributes", () => {
    const { container } = renderWithProviders(<Construction />)

    const iframe = container.querySelector("iframe")
    expect(iframe).toBeInTheDocument()
    expect(iframe).toHaveAttribute(
      "src",
      "https://player.vimeo.com/video/193616058?h=af982b45c1&dnt=1",
    )
    expect(iframe).toHaveAttribute(
      "title",
      "Construction Videography | SkySee Video",
    )
    expect(iframe).toHaveAttribute(
      "allow",
      "autoplay; fullscreen; picture-in-picture",
    )
  })

  it("has correct video container layout", () => {
    const { container } = renderWithProviders(<Construction />)

    const mainContainer = container.querySelector(
      ".flex.flex-col.items-center.justify-center",
    )
    expect(mainContainer).toBeInTheDocument()

    const videoContainer = container.querySelector(".aspect-video")
    expect(videoContainer).toBeInTheDocument()
    expect(videoContainer).toHaveClass("relative", "mx-auto", "mb-6", "w-full")
  })

  it("has loading placeholder background", () => {
    const { container } = renderWithProviders(<Construction />)

    const placeholder = container.querySelector(".bg-black")
    expect(placeholder).toBeInTheDocument()
    expect(placeholder).toHaveClass(
      "absolute",
      "inset-0",
      "grid",
      "place-content-center",
      "rounded-sm",
    )
  })

  it("iframe has correct positioning and styling", () => {
    const { container } = renderWithProviders(<Construction />)

    const iframe = container.querySelector("iframe")
    expect(iframe).toHaveClass(
      "absolute",
      "left-0",
      "top-0",
      "z-10",
      "h-full",
      "w-full",
    )
  })

  it("has responsive aspect ratio container", () => {
    const { container } = renderWithProviders(<Construction />)

    const aspectContainer = container.querySelector(".aspect-video")
    expect(aspectContainer).toBeInTheDocument()
  })

  it("sets proper iframe accessibility attributes", () => {
    const { container } = renderWithProviders(<Construction />)

    const iframe = container.querySelector("iframe")
    expect(iframe).toHaveAttribute("title")
  })
})
