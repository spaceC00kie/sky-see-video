import { render } from "@testing-library/react"
import { TedsAboutUsCard } from "./TedsAboutUsCard"

describe("TedsAboutUsCard", () => {
  it("renders without crashing", () => {
    render(<TedsAboutUsCard />)
  })

  it("displays Ted's name and title", () => {
    const { getByText } = render(<TedsAboutUsCard />)

    expect(getByText("Ted Intorcio")).toBeInTheDocument()
    expect(getByText("Creative Director")).toBeInTheDocument()
  })

  it("displays Ted's image with correct attributes", () => {
    const { getByAltText } = render(<TedsAboutUsCard />)

    const image = getByAltText("Ted Intorcio")
    expect(image).toBeInTheDocument()
    expect(image).toHaveClass("h-full", "w-full", "object-cover")
  })

  it("displays Ted's description", () => {
    const { getByText } = render(<TedsAboutUsCard />)

    expect(getByText(/Ted loves stuff that moves/)).toBeInTheDocument()
    expect(getByText(/Combined with his passion/)).toBeInTheDocument()
  })

  it("includes external link to portfolio", () => {
    const { getByRole } = render(<TedsAboutUsCard />)

    const portfolioLink = getByRole("link", { name: "his personal website" })
    expect(portfolioLink).toBeInTheDocument()
    expect(portfolioLink).toHaveAttribute(
      "href",
      "https://tintorcio.myportfolio.com/",
    )
    expect(portfolioLink).toHaveAttribute("target", "_blank")
    expect(portfolioLink).toHaveAttribute("rel", "noopener noreferrer")
  })

  it("has correct styling classes", () => {
    const { container } = render(<TedsAboutUsCard />)

    const mainContainer = container.firstChild
    expect(mainContainer).toHaveClass(
      "flex",
      "flex-col",
      "items-start",
      "gap-2",
      "text-lg",
    )
  })

  it("has proper image container styling", () => {
    const { container } = render(<TedsAboutUsCard />)

    const imageContainer = container.querySelector(".aspect-\\[4\\/3\\]")
    expect(imageContainer).toBeInTheDocument()
    expect(imageContainer).toHaveClass("w-full")
  })

  it("has blue text for name and title", () => {
    const { container } = render(<TedsAboutUsCard />)

    const nameAndTitleContainer = container.querySelector(".text-blue-700")
    expect(nameAndTitleContainer).toBeInTheDocument()
  })

  it("has correct description styling", () => {
    const { getByText } = render(<TedsAboutUsCard />)

    const description = getByText(/Ted loves stuff that moves/)
    expect(description).toHaveClass("text-sm")
  })

  it("portfolio link has correct styling", () => {
    const { getByRole } = render(<TedsAboutUsCard />)

    const portfolioLink = getByRole("link", { name: "his personal website" })
    expect(portfolioLink).toHaveClass(
      "text-blue-600",
      "underline",
      "hover:text-blue-800",
    )
  })

  it("mentions client names in description", () => {
    const { getByText } = render(<TedsAboutUsCard />)

    expect(getByText(/Turner Broadcasting/)).toBeInTheDocument()
    expect(getByText(/Starz Entertainment/)).toBeInTheDocument()
    expect(getByText(/ESPN/)).toBeInTheDocument()
    expect(getByText(/NatGeo/)).toBeInTheDocument()
  })

  it("has hover effect element", () => {
    const { container } = render(<TedsAboutUsCard />)

    const hoverEffect = container.querySelector(
      ".opacity-0.transition-opacity.group-hover\\:opacity-40",
    )
    expect(hoverEffect).toBeInTheDocument()
  })
})
