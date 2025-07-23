import { render } from "@testing-library/react"
import { HeroBanner } from "./HeroBanner"

const mockProps = {
  img: "/test-banner.jpg",
  srcSet: "/test-banner-640.jpg 640w, /test-banner-1024.jpg 1024w",
  alt: "Test banner",
  heightClass: "h-64",
  overlayText: "Test overlay text",
}

describe("HeroBanner", () => {
  it("renders without crashing", () => {
    const { container } = render(<HeroBanner {...mockProps} />)
    expect(container.firstChild).toBeInTheDocument()
  })

  it("renders image with correct attributes", () => {
    const { getByRole } = render(<HeroBanner {...mockProps} />)
    const image = getByRole("img")
    expect(image).toHaveAttribute("src", mockProps.img)
    expect(image).toHaveAttribute("srcSet", mockProps.srcSet)
    expect(image).toHaveAttribute("alt", mockProps.alt)
    expect(image).toHaveAttribute("fetchPriority", "high")
    expect(image).toHaveAttribute("sizes", "100vw")
  })

  it("applies custom height class", () => {
    const { container } = render(<HeroBanner {...mockProps} />)
    const bannerContainer = container.firstChild
    expect(bannerContainer).toHaveClass("h-64")
  })

  it("applies default height class when not provided", () => {
    const propsWithoutHeight = {
      img: mockProps.img,
      srcSet: mockProps.srcSet,
      alt: mockProps.alt,
      overlayText: mockProps.overlayText,
    }
    const { container } = render(<HeroBanner {...propsWithoutHeight} />)
    const bannerContainer = container.firstChild
    expect(bannerContainer).toHaveClass("h-32", "sm:h-96")
  })

  it("renders overlay text when provided", () => {
    const { getByText } = render(<HeroBanner {...mockProps} />)
    expect(getByText(mockProps.overlayText)).toBeInTheDocument()
  })

  it("does not render overlay when text is not provided", () => {
    const propsWithoutOverlay = {
      img: mockProps.img,
      srcSet: mockProps.srcSet,
      alt: mockProps.alt,
      heightClass: mockProps.heightClass,
    }
    const { queryByText } = render(<HeroBanner {...propsWithoutOverlay} />)
    expect(queryByText("Test overlay text")).not.toBeInTheDocument()
  })

  it("renders with empty alt text by default", () => {
    const propsWithoutAlt = {
      img: mockProps.img,
      srcSet: mockProps.srcSet,
      heightClass: mockProps.heightClass,
      overlayText: mockProps.overlayText,
    }
    const { container } = render(<HeroBanner {...propsWithoutAlt} />)
    const image = container.querySelector("img")
    expect(image).toHaveAttribute("alt", "")
  })

  it("has correct container classes", () => {
    const { container } = render(<HeroBanner {...mockProps} />)
    const bannerContainer = container.firstChild
    expect(bannerContainer).toHaveClass("relative", "w-full")
  })

  it("image has correct styling classes", () => {
    const { getByRole } = render(<HeroBanner {...mockProps} />)
    const image = getByRole("img")
    expect(image).toHaveClass("h-full", "w-full", "object-cover", "object-top")
  })

  it("overlay text has correct styling", () => {
    const { getByText } = render(<HeroBanner {...mockProps} />)
    const overlayText = getByText(mockProps.overlayText)
    expect(overlayText).toHaveClass(
      "relative",
      "z-10",
      "px-6",
      "py-4",
      "text-center",
      "text-3xl",
      "text-white",
    )
  })
})
