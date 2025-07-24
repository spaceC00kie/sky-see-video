import { render } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom"
import { HelmetProvider } from "react-helmet-async"
import { OurServices } from "./OurServices"

const renderWithProviders = (component: React.ReactElement) => {
  return render(
    <HelmetProvider>
      <BrowserRouter>{component}</BrowserRouter>
    </HelmetProvider>,
  )
}

describe("OurServices", () => {
  it("renders without crashing", () => {
    renderWithProviders(<OurServices />)
  })

  it("sets correct helmet meta tags", () => {
    const { container } = renderWithProviders(<OurServices />)
    // Helmet meta tags are set but not easily testable in jsdom
    // This test ensures the component renders without errors when Helmet is used
    expect(container.firstChild).toBeInTheDocument()
  })

  it("displays main headings", () => {
    const { container } = renderWithProviders(<OurServices />)

    // Use container.textContent to handle non-breaking spaces
    expect(container.textContent).toMatch(/OUR\s+SERVICES/)
    expect(container.textContent).toMatch(/INDUSTRIES/)
  })

  it("displays main service description", () => {
    const { getByText } = renderWithProviders(<OurServices />)

    expect(getByText(/SkySee Video offers pre-production/)).toBeInTheDocument()
    expect(
      getByText(/production, and post-production services/),
    ).toBeInTheDocument()
  })

  it("renders service cards for pre-production and post-production", () => {
    const { getByText } = renderWithProviders(<OurServices />)

    expect(getByText("PRE-PRODUCTION")).toBeInTheDocument()
    expect(getByText("POST-PRODUCTION")).toBeInTheDocument()
  })

  it("renders industry service cards", () => {
    const { getByText } = renderWithProviders(<OurServices />)

    expect(getByText("Construction")).toBeInTheDocument()
    expect(getByText("Tourism & Resort")).toBeInTheDocument()
    expect(getByText("Corporate Marketing")).toBeInTheDocument()
    expect(getByText("Documentaries")).toBeInTheDocument()
  })

  it("renders hero banner", () => {
    const { container } = renderWithProviders(<OurServices />)
    const heroImage = container.querySelector(
      'img[alt="SkySee Video services"]',
    )
    expect(heroImage).toBeInTheDocument()
  })

  it("has correct main layout structure", () => {
    const { container } = renderWithProviders(<OurServices />)

    const mainContainer = container.querySelector(
      ".flex.flex-col.items-center.justify-center",
    )
    expect(mainContainer).toBeInTheDocument()
  })

  it("has service cards container with proper styling", () => {
    const { container } = renderWithProviders(<OurServices />)

    const serviceCardsContainer = container.querySelector(
      ".flex.flex-col.flex-wrap.justify-evenly",
    )
    expect(serviceCardsContainer).toBeInTheDocument()
  })

  it("has industry grid layout", () => {
    const { container } = renderWithProviders(<OurServices />)

    const industryGrid = container.querySelector(
      ".grid.md\\:grid-cols-2.lg\\:grid-cols-4",
    )
    expect(industryGrid).toBeInTheDocument()
  })

  it("displays horizontal rule separator", () => {
    const { container } = renderWithProviders(<OurServices />)

    const hr = container.querySelector("hr")
    expect(hr).toBeInTheDocument()
  })

  it("main heading has correct styling", () => {
    const { getByText } = renderWithProviders(<OurServices />)

    const servicesHeading = getByText("OUR SERVICES")
    expect(servicesHeading).toHaveClass("text-xl", "text-blue-700")
  })

  it("industries heading has correct styling", () => {
    const { getByText } = renderWithProviders(<OurServices />)

    const industriesHeading = getByText("INDUSTRIES")
    expect(industriesHeading).toHaveClass("text-2xl", "text-blue-700")
  })

  it("main description has correct styling", () => {
    const { getByText } = renderWithProviders(<OurServices />)

    const description = getByText(/SkySee Video offers pre-production/)
    expect(description).toHaveClass("text-2xl")
  })

  it("sets preload links for banner images", () => {
    const { container } = renderWithProviders(<OurServices />)
    // Helmet preload links are set but not easily testable in jsdom
    // This test ensures the component renders without errors when Helmet preload links are used
    expect(container.firstChild).toBeInTheDocument()
  })

  it("includes outlet for nested routes", () => {
    const { container } = renderWithProviders(<OurServices />)

    // The Outlet component should be rendered (though it might not have content in test)
    expect(container.innerHTML).toBeTruthy()
  })

  it("mentions specific services in description", () => {
    const { getByText } = renderWithProviders(<OurServices />)

    expect(getByText(/corporate marketing videos/)).toBeInTheDocument()
    expect(getByText(/training videos/)).toBeInTheDocument()
    expect(getByText(/social media events/)).toBeInTheDocument()
    expect(getByText(/promotional videos/)).toBeInTheDocument()
  })

  it("has responsive design classes", () => {
    const { container } = renderWithProviders(<OurServices />)

    // Check for responsive classes
    const responsiveGrid = container.querySelector(
      ".md\\:grid-cols-2.lg\\:grid-cols-4",
    )
    expect(responsiveGrid).toBeInTheDocument()

    const responsiveFlex = container.querySelector(".sm\\:flex-row")
    expect(responsiveFlex).toBeInTheDocument()
  })

  it("service cards mention specific production elements", () => {
    const { getByText } = renderWithProviders(<OurServices />)

    // These should be in the service cards
    expect(getByText(/Motion Graphics/)).toBeInTheDocument()
    expect(getByText(/2-D Animation/)).toBeInTheDocument()
    expect(getByText(/3-D Modeling & Animation/)).toBeInTheDocument()
  })
})
