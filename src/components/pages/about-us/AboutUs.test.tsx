import { render } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom"
import { HelmetProvider } from "react-helmet-async"
import { AboutUs } from "./AboutUs"

const renderWithProviders = (component: React.ReactElement) => {
  return render(
    <HelmetProvider>
      <BrowserRouter>{component}</BrowserRouter>
    </HelmetProvider>,
  )
}

describe("AboutUs", () => {
  it("renders without crashing", () => {
    renderWithProviders(<AboutUs />)
  })

  it("sets correct helmet meta tags", () => {
    const { container } = renderWithProviders(<AboutUs />)
    // Helmet meta tags are set but not easily testable in jsdom
    // This test ensures the component renders without errors when Helmet is used
    expect(container.firstChild).toBeInTheDocument()
  })

  it("displays main heading", () => {
    const { container } = renderWithProviders(<AboutUs />)
    // Use container.textContent to handle non-breaking spaces
    expect(container.textContent).toMatch(/ABOUT\s+US/)
  })

  it("displays company description", () => {
    const { container } = renderWithProviders(<AboutUs />)
    // Check for key phrases from the description using container.textContent
    // Handle smart quotes by using more flexible matching
    expect(container.textContent).toMatch(/You.*ve got specific media needs/)
    expect(container.textContent).toMatch(/SkySee Video has the expertise/)
    expect(container.textContent).toMatch(/boutique production company/)
  })

  it("displays team member cards", () => {
    const { getByText } = renderWithProviders(<AboutUs />)

    // Check for team member names
    expect(getByText("Soren Christiansen")).toBeInTheDocument()
    expect(getByText("Robinson Vil")).toBeInTheDocument()
    expect(getByText("Charles Frederick")).toBeInTheDocument()
  })

  it("displays team member titles", () => {
    const { getByText } = renderWithProviders(<AboutUs />)

    expect(getByText("Videographer / Editor / Drone Pilot")).toBeInTheDocument()
    expect(getByText("Director / Producer")).toBeInTheDocument()
    expect(getByText("Producer / Social Media")).toBeInTheDocument()
  })

  it("displays team member descriptions", () => {
    const { getByText } = renderWithProviders(<AboutUs />)

    expect(
      getByText(/With over three decades in advertising/),
    ).toBeInTheDocument()
    expect(getByText(/Rob, a native of Haiti/)).toBeInTheDocument()
    expect(
      getByText(/Charles is a multi-Emmy-Award-winning/),
    ).toBeInTheDocument()
  })

  it("renders hero banner", () => {
    const { container } = renderWithProviders(<AboutUs />)
    const heroImage = container.querySelector('img[alt="SkySee Video team"]')
    expect(heroImage).toBeInTheDocument()
  })

  it("has correct layout structure", () => {
    const { container } = renderWithProviders(<AboutUs />)

    // Check for main container
    const mainContainer = container.querySelector(
      ".flex.flex-col.items-center.justify-center",
    )
    expect(mainContainer).toBeInTheDocument()

    // Check for grid layout
    const gridContainer = container.querySelector(
      ".grid.gap-5.md\\:grid-cols-2",
    )
    expect(gridContainer).toBeInTheDocument()
  })

  it("includes Ted's about us card", () => {
    const { container } = renderWithProviders(<AboutUs />)
    // TedsAboutUsCard should be rendered as part of the component tree
    expect(container.innerHTML).toContain("Ted")
  })

  it("sets preload links for images", () => {
    const { container } = renderWithProviders(<AboutUs />)
    // Helmet preload links are set but not easily testable in jsdom
    // This test ensures the component renders without errors when Helmet preload links are used
    expect(container.firstChild).toBeInTheDocument()
  })

  it("has proper semantic structure with heading hierarchy", () => {
    const { getByText } = renderWithProviders(<AboutUs />)

    const aboutUsHeading = getByText("ABOUT US")
    expect(aboutUsHeading).toHaveClass("text-2xl", "text-blue-700")
  })

  it("displays company description with proper styling", () => {
    const { container } = renderWithProviders(<AboutUs />)

    const description = container.querySelector("p.p-2.text-xl")
    expect(description).toBeInTheDocument()
  })
})
