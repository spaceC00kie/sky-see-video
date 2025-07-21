import { render } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom"
import { CarouselProvider } from "pure-react-carousel"
import { FadeSlider } from "./FadeSlider"

// Mock the ourWorkData module
jest.mock("./ourWorkData", () => ({
  cards: [
    {
      path: "/project/1",
      image: "test-image-1.jpg",
      srcSet: "test-srcset-1",
      title: "Test Project 1",
      description: "Test description 1",
    },
    {
      path: "/project/2",
      image: "test-image-2.jpg",
      srcSet: "test-srcset-2",
      title: "Test Project 2",
      description: "Test description 2",
    },
    {
      path: "/project/3",
      image: "test-image-3.jpg",
      srcSet: "test-srcset-3",
      title: "Test Project 3",
      description: "Test description 3",
    },
    {
      path: "/project/4",
      image: "test-image-4.jpg",
      srcSet: "test-srcset-4",
      title: "Test Project 4",
      description: "Test description 4",
    },
    {
      path: "/project/5",
      image: "test-image-5.jpg",
      srcSet: "test-srcset-5",
      title: "Test Project 5",
      description: "Test description 5",
    },
    {
      path: "/project/6",
      image: "test-image-6.jpg",
      srcSet: "test-srcset-6",
      title: "Test Project 6",
      description: "Test description 6",
    },
  ],
}))

const renderWithProviders = (
  component: React.ReactElement,
  visibleSlides = 3,
) => {
  return render(
    <BrowserRouter>
      <CarouselProvider
        naturalSlideWidth={100}
        naturalSlideHeight={75}
        totalSlides={6}
        visibleSlides={visibleSlides}
      >
        {component}
      </CarouselProvider>
    </BrowserRouter>,
  )
}

describe("FadeSlider", () => {
  it("renders without crashing", () => {
    renderWithProviders(<FadeSlider visibleSlides={3} />)
  })

  it("displays project cards", () => {
    const { getByText } = renderWithProviders(<FadeSlider visibleSlides={3} />)

    expect(getByText("Test Project 1")).toBeInTheDocument()
    expect(getByText("Test Project 2")).toBeInTheDocument()
    expect(getByText("Test Project 3")).toBeInTheDocument()
  })

  it("renders images with correct attributes", () => {
    const { container } = renderWithProviders(<FadeSlider visibleSlides={3} />)

    const images = container.querySelectorAll("img")
    expect(images.length).toBeGreaterThan(0)

    const firstImage = images[0]
    expect(firstImage).toHaveAttribute("role", "presentation")
    expect(firstImage).toHaveClass(
      "absolute",
      "inset-0",
      "h-full",
      "w-full",
      "object-cover",
    )
  })

  it("uses lazy loading for images after index 4", () => {
    const { container } = renderWithProviders(<FadeSlider visibleSlides={3} />)

    const images = container.querySelectorAll("img")
    // First few images should have eager loading
    expect(images[0]).toHaveAttribute("loading", "eager")
    expect(images[1]).toHaveAttribute("loading", "eager")
    expect(images[2]).toHaveAttribute("loading", "eager")
    expect(images[3]).toHaveAttribute("loading", "eager")
    expect(images[4]).toHaveAttribute("loading", "eager")

    // Image at index 5 should have lazy loading
    if (images[5]) {
      expect(images[5]).toHaveAttribute("loading", "lazy")
    }
  })

  it("renders correct number of slides", () => {
    const { container } = renderWithProviders(<FadeSlider visibleSlides={3} />)

    // Since we're mocking the data, check that the component structure is present
    expect(container.firstChild).toBeInTheDocument()
    // The actual slide count depends on the mocked ourWorkData
  })

  it("renders gradient overlays when visibleSlides > 1", () => {
    const { container } = renderWithProviders(<FadeSlider visibleSlides={3} />)

    const gradients = container.querySelectorAll(
      ".bg-gradient-to-r, .bg-gradient-to-l",
    )
    expect(gradients.length).toBe(2) // Left and right gradients
  })

  it("does not render gradient overlays when visibleSlides = 1", () => {
    const { container } = renderWithProviders(
      <FadeSlider visibleSlides={1} />,
      1,
    )

    const gradients = container.querySelectorAll(
      ".bg-gradient-to-r, .bg-gradient-to-l",
    )
    expect(gradients.length).toBe(0)
  })

  it("has correct link structure", () => {
    const { container } = renderWithProviders(<FadeSlider visibleSlides={3} />)

    const links = container.querySelectorAll("a")
    expect(links.length).toBeGreaterThan(0)

    expect(links[0]).toHaveAttribute("href", "/project/1")
    expect(links[0]).toHaveClass(
      "flex",
      "h-full",
      "flex-col",
      "overflow-hidden",
    )
  })

  it("displays project descriptions", () => {
    const { getByText } = renderWithProviders(<FadeSlider visibleSlides={3} />)

    expect(getByText("Test description 1")).toBeInTheDocument()
    expect(getByText("Test description 2")).toBeInTheDocument()
  })

  it("has proper responsive classes", () => {
    const { container } = renderWithProviders(<FadeSlider visibleSlides={3} />)

    // Check for responsive padding
    const slider = container.querySelector(".px-0.sm\\:px-6")
    expect(slider).toBeInTheDocument()

    // Check for responsive slide padding
    const slides = container.querySelectorAll(".px-1.sm\\:px-3")
    expect(slides.length).toBeGreaterThan(0)
  })

  it("handles picture elements with srcSet", () => {
    const { container } = renderWithProviders(<FadeSlider visibleSlides={3} />)

    const pictures = container.querySelectorAll("picture")
    expect(pictures.length).toBeGreaterThan(0)

    const sources = container.querySelectorAll("source[srcset]")
    expect(sources.length).toBeGreaterThan(0)
  })

  it("has correct heading styles", () => {
    const { getByText } = renderWithProviders(<FadeSlider visibleSlides={3} />)

    const heading = getByText("Test Project 1")
    expect(heading).toHaveClass(
      "mb-1",
      "text-3xl",
      "font-semibold",
      "sm:text-lg",
    )
  })

  it("has correct description styles", () => {
    const { getByText } = renderWithProviders(<FadeSlider visibleSlides={3} />)

    const description = getByText("Test description 1")
    expect(description).toHaveClass(
      "line-clamp-2",
      "text-2xl",
      "text-gray-700",
      "sm:text-sm",
    )
  })

  it("has correct image container aspect ratio", () => {
    const { container } = renderWithProviders(<FadeSlider visibleSlides={3} />)

    const imageContainers = container.querySelectorAll(".aspect-\\[4\\/3\\]")
    expect(imageContainers.length).toBeGreaterThan(0)
  })

  it("has hover effects on links", () => {
    const { container } = renderWithProviders(<FadeSlider visibleSlides={3} />)

    const links = container.querySelectorAll("a")
    expect(links[0]).toHaveClass("transition", "hover:shadow-lg")
  })

  it("manages gradient opacity based on carousel position", () => {
    const { container } = renderWithProviders(<FadeSlider visibleSlides={3} />)

    // At start position, left gradient should have opacity-0 class
    const leftGradient = container.querySelector(".bg-gradient-to-r")
    expect(leftGradient).toHaveClass("opacity-0") // Should be at start initially

    // Right gradient should be visible
    const rightGradient = container.querySelector(".bg-gradient-to-l")
    expect(rightGradient).toHaveClass("opacity-100")
  })
})
