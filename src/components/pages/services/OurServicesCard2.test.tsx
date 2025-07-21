import { render } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom"
import { OurServicesCard2 } from "./OurServicesCard2"

const mockProps = {
  image: "/test-service-image.jpg",
  title: "Test Service Title",
  description: "This is a test description for the service card.",
  path: "/test-service-path",
}

const renderWithRouter = (ui: React.ReactElement) => {
  return render(<BrowserRouter>{ui}</BrowserRouter>)
}

describe("OurServicesCard2", () => {
  it("renders without crashing", () => {
    const { container } = renderWithRouter(<OurServicesCard2 {...mockProps} />)
    expect(container.firstChild).toBeInTheDocument()
  })

  it("displays the correct title and description", () => {
    const { getByText } = renderWithRouter(<OurServicesCard2 {...mockProps} />)
    expect(getByText(mockProps.title)).toBeInTheDocument()
    expect(getByText(mockProps.description)).toBeInTheDocument()
  })

  it("displays image with correct attributes", () => {
    const { getByRole } = renderWithRouter(<OurServicesCard2 {...mockProps} />)
    const image = getByRole("img")
    expect(image).toHaveAttribute("src", mockProps.image)
    expect(image).toHaveAttribute("alt", mockProps.title)
  })

  it("has correct navigation links", () => {
    const { getAllByRole } = renderWithRouter(
      <OurServicesCard2 {...mockProps} />,
    )
    const links = getAllByRole("link")

    // Should have two links - one for image, one for title
    expect(links).toHaveLength(2)
    links.forEach((link) => {
      expect(link).toHaveAttribute("href", mockProps.path)
    })
  })

  it("title is clickable and navigates correctly", () => {
    const { getByText } = renderWithRouter(<OurServicesCard2 {...mockProps} />)
    const titleLink = getByText(mockProps.title).closest("a")
    expect(titleLink).toHaveAttribute("href", mockProps.path)
  })

  it("image is clickable and navigates correctly", () => {
    const { getByRole } = renderWithRouter(<OurServicesCard2 {...mockProps} />)
    const image = getByRole("img")
    const imageLink = image.closest("a")
    expect(imageLink).toHaveAttribute("href", mockProps.path)
  })

  it("has correct container structure and styling", () => {
    const { container } = renderWithRouter(<OurServicesCard2 {...mockProps} />)
    expect(container.firstChild).toHaveClass(
      "flex",
      "flex-col",
      "items-center",
      "justify-start",
      "gap-3",
      "p-5",
      "lg:w-64",
    )
  })

  it("image has correct styling", () => {
    const { getByRole } = renderWithRouter(<OurServicesCard2 {...mockProps} />)
    const image = getByRole("img")
    expect(image).toHaveClass("h-36", "w-36", "rounded-full")
  })

  it("title has correct styling", () => {
    const { getByText } = renderWithRouter(<OurServicesCard2 {...mockProps} />)
    const titleElement = getByText(mockProps.title)
    expect(titleElement).toHaveClass("text-lg", "text-blue-700", "underline")
  })

  it("title is rendered as h2 heading", () => {
    const { getByRole } = renderWithRouter(<OurServicesCard2 {...mockProps} />)
    const heading = getByRole("heading", { level: 2 })
    expect(heading).toHaveTextContent(mockProps.title)
  })

  it("description has correct styling", () => {
    const { getByText } = renderWithRouter(<OurServicesCard2 {...mockProps} />)
    const description = getByText(mockProps.description)
    expect(description).toHaveClass("text-md", "text-center")
  })

  it("image container has correct styling", () => {
    const { container } = renderWithRouter(<OurServicesCard2 {...mockProps} />)
    const imageContainer = container.querySelector(
      ".grid.place-content-center.pb-2",
    )
    expect(imageContainer).toBeInTheDocument()
  })

  it("handles long description text", () => {
    const longDescriptionProps = {
      ...mockProps,
      description:
        "This is a very long description that should still render correctly and maintain proper formatting within the card component structure.",
    }
    const { getByText } = renderWithRouter(
      <OurServicesCard2 {...longDescriptionProps} />,
    )
    expect(getByText(longDescriptionProps.description)).toBeInTheDocument()
  })

  it("handles long title text", () => {
    const longTitleProps = {
      ...mockProps,
      title: "This is a Very Long Service Title That Should Still Work",
    }
    const { getByText } = renderWithRouter(
      <OurServicesCard2 {...longTitleProps} />,
    )
    expect(getByText(longTitleProps.title)).toBeInTheDocument()
  })

  it("maintains accessibility with proper link structure", () => {
    const { getByRole } = renderWithRouter(<OurServicesCard2 {...mockProps} />)
    const image = getByRole("img")
    const heading = getByRole("heading", { level: 2 })

    // Image should be inside a link
    expect(image.closest("a")).toBeInTheDocument()
    // Heading should be inside a link
    expect(heading.closest("a")).toBeInTheDocument()
  })
})
