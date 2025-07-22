import { render } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom"
import { HelmetProvider } from "react-helmet-async"
import { GalleryCard } from "./GalleryCard"

const mockProps = {
  image: "/test-image.jpg",
  srcSet: "/test-image-640.jpg 640w, /test-image-1024.jpg 1024w",
  title: "Test Title",
  description: "Test description for the gallery card",
  path: "/test-path",
  lazy: true,
}

const renderWithRouter = (ui: React.ReactElement) => {
  return render(
    <HelmetProvider>
      <BrowserRouter>{ui}</BrowserRouter>
    </HelmetProvider>,
  )
}

describe("GalleryCard", () => {
  it("renders without crashing", () => {
    const { container } = renderWithRouter(<GalleryCard {...mockProps} />)
    expect(container.firstChild).toBeInTheDocument()
  })

  it("displays the correct title and description", () => {
    const { getByText } = renderWithRouter(<GalleryCard {...mockProps} />)
    expect(getByText(mockProps.title)).toBeInTheDocument()
    expect(getByText(mockProps.description)).toBeInTheDocument()
  })

  it("has the correct image attributes", () => {
    const { getByRole } = renderWithRouter(<GalleryCard {...mockProps} />)
    const image = getByRole("img")
    expect(image).toHaveAttribute("src", mockProps.image)
    expect(image).toHaveAttribute("srcSet", mockProps.srcSet)
    expect(image).toHaveAttribute("alt", mockProps.title)
  })

  it("sets lazy loading when lazy prop is true", () => {
    const { getByRole } = renderWithRouter(
      <GalleryCard {...mockProps} lazy={true} />,
    )
    const image = getByRole("img")
    expect(image).toHaveAttribute("loading", "lazy")
  })

  it("sets eager loading when lazy prop is false", () => {
    const { getByRole } = renderWithRouter(
      <GalleryCard {...mockProps} lazy={false} />,
    )
    const image = getByRole("img")
    expect(image).toHaveAttribute("loading", "eager")
  })

  it("has correct link navigation", () => {
    const { getByRole } = renderWithRouter(<GalleryCard {...mockProps} />)
    const link = getByRole("link")
    expect(link).toHaveAttribute("href", mockProps.path)
  })

  it("has proper CSS classes", () => {
    const { container } = renderWithRouter(<GalleryCard {...mockProps} />)
    const cardContainer = container.firstChild
    expect(cardContainer).toHaveClass(
      "flex",
      "max-w-xl",
      "flex-col",
      "items-start",
      "gap-2",
      "text-lg",
      "w-full",
    )
  })

  it("title is rendered as h2 heading", () => {
    const { getByRole } = renderWithRouter(<GalleryCard {...mockProps} />)
    const heading = getByRole("heading", { level: 2 })
    expect(heading).toHaveTextContent(mockProps.title)
    expect(heading).toHaveClass("font-bold")
  })
})
