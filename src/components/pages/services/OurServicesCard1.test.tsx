import { render } from "@testing-library/react"
import { OurServicesCard1 } from "./OurServicesCard1"

const mockProps = {
  title: "Test Service Title",
  bulletPoints: [
    "First bullet point",
    "Second bullet point",
    "Third bullet point",
  ],
}

describe("OurServicesCard1", () => {
  it("renders without crashing", () => {
    const { container } = render(<OurServicesCard1 {...mockProps} />)
    expect(container.firstChild).toBeInTheDocument()
  })

  it("displays the correct title", () => {
    const { getByText } = render(<OurServicesCard1 {...mockProps} />)
    expect(getByText(mockProps.title)).toBeInTheDocument()
  })

  it("title is rendered as h2 heading", () => {
    const { getByRole } = render(<OurServicesCard1 {...mockProps} />)
    const heading = getByRole("heading", { level: 2 })
    expect(heading).toHaveTextContent(mockProps.title)
  })

  it("displays all bullet points", () => {
    const { getByText } = render(<OurServicesCard1 {...mockProps} />)
    mockProps.bulletPoints.forEach((point) => {
      expect(getByText(point)).toBeInTheDocument()
    })
  })

  it("renders bullet points as list items", () => {
    const { getAllByRole } = render(<OurServicesCard1 {...mockProps} />)
    const listItems = getAllByRole("listitem")
    expect(listItems).toHaveLength(mockProps.bulletPoints.length)
  })

  it("has correct container structure and styling", () => {
    const { container } = render(<OurServicesCard1 {...mockProps} />)
    expect(container.firstChild).toHaveClass(
      "flex",
      "flex-col",
      "justify-start",
      "gap-3",
      "w-full",
      "sm:max-w-64",
    )
  })

  it("title has correct styling", () => {
    const { getByRole } = render(<OurServicesCard1 {...mockProps} />)
    const heading = getByRole("heading", { level: 2 })
    expect(heading).toHaveClass("w-full", "text-xl", "text-blue-700")
  })

  it("list has correct styling", () => {
    const { getByRole } = render(<OurServicesCard1 {...mockProps} />)
    const list = getByRole("list")
    expect(list).toHaveClass("list-none", "w-full", "space-y-1")
  })

  it("list items have correct styling", () => {
    const { getAllByRole } = render(<OurServicesCard1 {...mockProps} />)
    const listItems = getAllByRole("listitem")
    listItems.forEach((item) => {
      expect(item).toHaveClass(
        "flex",
        "items-start",
        "gap-2",
        "pl-2",
        "text-xl",
      )
    })
  })

  it("bullet points have bullet characters", () => {
    const { container } = render(<OurServicesCard1 {...mockProps} />)
    const bulletSpans = container.querySelectorAll("span.leading-6")
    // First span in each list item should contain the bullet character
    expect(bulletSpans[0]).toHaveTextContent("•")
  })

  it("handles empty bullet points array", () => {
    const emptyProps = { title: "Test Title", bulletPoints: [] }
    const { getByRole, queryAllByRole } = render(
      <OurServicesCard1 {...emptyProps} />,
    )

    expect(getByRole("heading", { level: 2 })).toHaveTextContent("Test Title")
    expect(queryAllByRole("listitem")).toHaveLength(0)
  })

  it("handles single bullet point", () => {
    const singleProps = { title: "Test Title", bulletPoints: ["Single point"] }
    const { getAllByRole, getByText } = render(
      <OurServicesCard1 {...singleProps} />,
    )

    expect(getAllByRole("listitem")).toHaveLength(1)
    expect(getByText("Single point")).toBeInTheDocument()
  })

  it("uses correct key for list items", () => {
    const { container } = render(<OurServicesCard1 {...mockProps} />)
    const listItems = container.querySelectorAll("li")

    // Verify that each list item is rendered (React keys are internal)
    expect(listItems).toHaveLength(mockProps.bulletPoints.length)
  })
})
