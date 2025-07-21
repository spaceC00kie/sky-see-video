import { render } from "@testing-library/react"
import { AboutUsCard } from "./AboutUsCard"

const mockProps = {
  image: "/test-person-image.jpg",
  name: "John Doe",
  title: "Director of Photography",
  description:
    "John has over 10 years of experience in the video production industry and specializes in cinematic storytelling.",
}

describe("AboutUsCard", () => {
  it("renders without crashing", () => {
    const { container } = render(<AboutUsCard {...mockProps} />)
    expect(container.firstChild).toBeInTheDocument()
  })

  it("displays all person information", () => {
    const { getByText } = render(<AboutUsCard {...mockProps} />)
    expect(getByText(mockProps.name)).toBeInTheDocument()
    expect(getByText(mockProps.title)).toBeInTheDocument()
    expect(getByText(mockProps.description)).toBeInTheDocument()
  })

  it("displays image with correct attributes", () => {
    const { getByRole } = render(<AboutUsCard {...mockProps} />)
    const image = getByRole("img")
    expect(image).toHaveAttribute("src", mockProps.image)
    expect(image).toHaveAttribute("alt", mockProps.title)
  })

  it("has correct container structure", () => {
    const { container } = render(<AboutUsCard {...mockProps} />)
    expect(container.firstChild).toHaveClass(
      "flex",
      "flex-col",
      "items-start",
      "gap-2",
      "text-lg",
    )
  })

  it("image container has correct aspect ratio", () => {
    const { container } = render(<AboutUsCard {...mockProps} />)
    const imageContainer = container.querySelector(".aspect-\\[4\\/3\\].w-full")
    expect(imageContainer).toBeInTheDocument()
  })

  it("image has correct styling", () => {
    const { getByRole } = render(<AboutUsCard {...mockProps} />)
    const image = getByRole("img")
    expect(image).toHaveClass("h-full", "w-full", "object-cover")
  })

  it("name and title have correct styling", () => {
    const { getByText } = render(<AboutUsCard {...mockProps} />)
    const nameElement = getByText(mockProps.name)
    const titleElement = getByText(mockProps.title)

    expect(nameElement.parentElement).toHaveClass("text-blue-700")
    expect(titleElement.parentElement).toHaveClass("text-blue-700")
  })

  it("description has correct styling", () => {
    const { getByText } = render(<AboutUsCard {...mockProps} />)
    const description = getByText(mockProps.description)
    expect(description).toHaveClass("text-sm")
  })

  it("name is rendered as h2 heading", () => {
    const { getAllByRole } = render(<AboutUsCard {...mockProps} />)
    const headings = getAllByRole("heading", { level: 2 })
    expect(headings).toHaveLength(2) // name and title
    expect(headings[0]).toHaveTextContent(mockProps.name)
    expect(headings[1]).toHaveTextContent(mockProps.title)
  })

  it("handles long description text", () => {
    const longDescriptionProps = {
      ...mockProps,
      description:
        "This is a very long description that goes into great detail about the person's background, experience, and expertise in the video production field. It should still render correctly within the card layout.",
    }
    const { getByText } = render(<AboutUsCard {...longDescriptionProps} />)
    expect(getByText(longDescriptionProps.description)).toBeInTheDocument()
  })

  it("handles long name and title", () => {
    const longNameProps = {
      ...mockProps,
      name: "John Christopher Alexander Doe",
      title: "Senior Director of Photography and Cinematography",
    }
    const { getByText } = render(<AboutUsCard {...longNameProps} />)
    expect(getByText(longNameProps.name)).toBeInTheDocument()
    expect(getByText(longNameProps.title)).toBeInTheDocument()
  })

  it("renders all elements in correct order", () => {
    const { container } = render(<AboutUsCard {...mockProps} />)
    const cardContainer = container.firstChild as HTMLElement
    const children = Array.from(cardContainer.children)

    // First child should be image container
    expect(children[0]).toHaveClass("aspect-[4/3]", "w-full")

    // Second child should be the overlay span (but it's positioned absolutely)
    expect(children[1]).toHaveClass("pointer-events-none", "absolute")

    // Third child should be the name/title container
    expect(children[2]).toHaveClass("text-blue-700")

    // Fourth child should be description
    expect(children[3]).toHaveClass("text-sm")
  })

  it("has hover effect styling", () => {
    const { container } = render(<AboutUsCard {...mockProps} />)
    const overlaySpan = container.querySelector(
      ".pointer-events-none.absolute.inset-0.bg-white.opacity-0",
    )
    expect(overlaySpan).toBeInTheDocument()
  })
})
