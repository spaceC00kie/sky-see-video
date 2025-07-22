import { render } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom"
import { HelmetProvider } from "react-helmet-async"
import { App } from "./App"
import { WindowSize } from "./containers/WindowSize"

// Mock react-ga4
jest.mock("react-ga4", () => ({
  initialize: jest.fn(),
}))

import ReactGA from "react-ga4"
const mockGA = ReactGA as jest.Mocked<typeof ReactGA>

const renderWithProviders = (ui: React.ReactElement) => {
  return render(
    <HelmetProvider>
      <WindowSize.Provider>
        <BrowserRouter>{ui}</BrowserRouter>
      </WindowSize.Provider>
    </HelmetProvider>,
  )
}

describe("App", () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  it("renders without crashing", () => {
    const { container } = renderWithProviders(<App />)
    expect(container.firstChild).toBeInTheDocument()
  })

  it("initializes Google Analytics", () => {
    renderWithProviders(<App />)
    expect(mockGA.initialize).toHaveBeenCalledWith("G-8KMS1CZ8CF", {
      gtagOptions: {
        cookie_flags: "SameSite=None;Secure",
      },
    })
  })

  it("has the correct app structure", () => {
    renderWithProviders(<App />)
    const appDiv = document.querySelector("#app")
    expect(appDiv).toBeInTheDocument()
    expect(appDiv).toHaveClass("scrollbar", "flex", "h-screen", "flex-col")
  })
})
