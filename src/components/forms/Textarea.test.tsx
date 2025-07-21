import { render, fireEvent } from "@testing-library/react"
import { Textarea } from "./Textarea"

describe("Textarea", () => {
  it("renders without crashing", () => {
    const { container } = render(<Textarea label="Test Label" />)
    expect(container.firstChild).toBeInTheDocument()
  })

  it("renders with label", () => {
    const { getByText, getByRole } = render(<Textarea label="Test Label" />)
    expect(getByText("Test Label")).toBeInTheDocument()
    expect(getByRole("textbox")).toBeInTheDocument()
  })

  it("applies custom className to textarea", () => {
    const { getByRole } = render(
      <Textarea label="Test" className="custom-class" />,
    )
    const textarea = getByRole("textbox")
    expect(textarea).toHaveClass("border", "p-2", "custom-class")
  })

  it("applies custom containerClassName", () => {
    const { container } = render(
      <Textarea label="Test" containerClassName="custom-container" />,
    )
    expect(container.firstChild).toHaveClass(
      "flex",
      "flex-col",
      "gap-2",
      "custom-container",
    )
  })

  it("forwards all textarea props correctly", () => {
    const { getByRole } = render(
      <Textarea
        label="Test"
        placeholder="Test placeholder"
        defaultValue="test value"
        onChange={() => {}}
        rows={5}
      />,
    )
    const textarea = getByRole("textbox")
    expect(textarea).toHaveAttribute("placeholder", "Test placeholder")
    expect(textarea).toHaveValue("test value")
    expect(textarea).toHaveAttribute("rows", "5")
  })

  it("calls onChange when textarea value changes", () => {
    const handleChange = jest.fn()
    const { getByRole } = render(
      <Textarea label="Test" onChange={handleChange} />,
    )
    const textarea = getByRole("textbox")

    fireEvent.change(textarea, { target: { value: "new value" } })
    expect(handleChange).toHaveBeenCalledTimes(1)
  })

  it("has default styling classes", () => {
    const { getByRole } = render(<Textarea label="Test" />)
    const textarea = getByRole("textbox")
    expect(textarea).toHaveClass("border", "p-2")
  })

  it("label has correct styling", () => {
    const { getByText } = render(<Textarea label="Test Label" />)
    const label = getByText("Test Label")
    expect(label).toHaveClass("font-semibold")
  })

  it("container has correct default structure", () => {
    const { container } = render(<Textarea label="Test" />)
    expect(container.firstChild).toHaveClass("flex", "flex-col", "gap-2")
  })
})
