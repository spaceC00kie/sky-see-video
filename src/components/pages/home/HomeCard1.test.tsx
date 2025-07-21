import { render } from "@testing-library/react"
import { ReactNode } from "react"
import { HomeCard1 } from "./HomeCard1"

// Mock react-icons
jest.mock("react-icons/hi", () => ({
  HiFilm: () => <div data-testid="film-icon">Film Icon</div>,
}))

const mockProps = {
  image: (<div data-testid="test-icon">Test Icon</div>) as ReactNode,
  title: "Test Service Title",
  description: "This is a test description for the home service card.",
}

describe("HomeCard1", () => {
  it("renders without crashing", () => {
    const { container } = render(<HomeCard1 {...mockProps} />)
    expect(container.firstChild).toBeInTheDocument()
  })

  it("displays the title and description", () => {
    const { getByText } = render(<HomeCard1 {...mockProps} />)
    expect(getByText(mockProps.title)).toBeInTheDocument()
    expect(getByText(mockProps.description)).toBeInTheDocument()
  })

  it("renders the image/icon", () => {
    const { getByTestId } = render(<HomeCard1 {...mockProps} />)
    expect(getByTestId("test-icon")).toBeInTheDocument()
  })

  it("has correct container structure", () => {
    const { container } = render(<HomeCard1 {...mockProps} />)
    expect(container.firstChild).toHaveClass(
      "sm:w-56",
      "flex",
      "flex-col",
      "items-center",
      "gap-3",
      "justify-between",
    )
  })

  it("title is rendered as h2 heading", () => {
    const { getByRole } = render(<HomeCard1 {...mockProps} />)
    const heading = getByRole("heading", { level: 2 })
    expect(heading).toHaveTextContent(mockProps.title)
  })

  it("title has correct styling", () => {
    const { getByRole } = render(<HomeCard1 {...mockProps} />)
    const heading = getByRole("heading", { level: 2 })
    expect(heading).toHaveClass("text-2xl", "text-blue-700")
  })

  it("description has correct styling", () => {
    const { getByText } = render(<HomeCard1 {...mockProps} />)
    const description = getByText(mockProps.description)
    expect(description).toHaveClass("text-lg")
  })

  it("icon container has correct styling", () => {
    const { container } = render(<HomeCard1 {...mockProps} />)
    const iconContainer = container.querySelector(
      ".grid.place-content-center.pb-2",
    )
    expect(iconContainer).toBeInTheDocument()
  })

  it("icon background has correct styling", () => {
    const { container } = render(<HomeCard1 {...mockProps} />)
    const iconBackground = container.querySelector(
      ".grid.h-24.w-28.place-content-center.rounded-full.bg-blue-700",
    )
    expect(iconBackground).toBeInTheDocument()
  })

  it("has hover effect styling", () => {
    const { container } = render(<HomeCard1 {...mockProps} />)
    const groupContainer = container.querySelector(".relative.group")
    expect(groupContainer).toBeInTheDocument()

    const shadowElement = container.querySelector(
      ".pointer-events-none.absolute.inset-0.-z-10",
    )
    expect(shadowElement).toBeInTheDocument()
  })

  it("shadow element has correct styling", () => {
    const { container } = render(<HomeCard1 {...mockProps} />)
    const shadowElement = container.querySelector(
      ".translate-x-0\\.5.translate-y-0\\.5.rounded-full.bg-black\\/40.blur-sm",
    )
    expect(shadowElement).toBeInTheDocument()
  })

  it("handles long title text", () => {
    const longTitleProps = {
      ...mockProps,
      title:
        "This is a Very Long Service Title That Should Still Render Properly",
    }
    const { getByText } = render(<HomeCard1 {...longTitleProps} />)
    expect(getByText(longTitleProps.title)).toBeInTheDocument()
  })

  it("handles long description text", () => {
    const longDescriptionProps = {
      ...mockProps,
      description:
        "This is a very long description that should still render correctly and maintain proper formatting within the home card component structure and layout.",
    }
    const { getByText } = render(<HomeCard1 {...longDescriptionProps} />)
    expect(getByText(longDescriptionProps.description)).toBeInTheDocument()
  })

  it("renders different icon types correctly", () => {
    const iconProps = {
      ...mockProps,
      image: (
        <div data-testid="different-icon">Different Icon</div>
      ) as ReactNode,
    }
    const { getByTestId } = render(<HomeCard1 {...iconProps} />)
    expect(getByTestId("different-icon")).toBeInTheDocument()
  })
})
