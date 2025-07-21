import { render, fireEvent } from '@testing-library/react'
import { Checkbox } from './Checkbox'

describe('Checkbox', () => {
  const mockLabel = 'Test Checkbox Label'

  it('renders without crashing', () => {
    const { container } = render(<Checkbox label={mockLabel} />)
    expect(container.firstChild).toBeInTheDocument()
  })

  it('displays the correct label', () => {
    const { getByText, getByLabelText } = render(<Checkbox label={mockLabel} />)
    expect(getByText(mockLabel)).toBeInTheDocument()
    expect(getByLabelText(mockLabel)).toBeInTheDocument()
  })

  it('renders as checkbox input type', () => {
    const { getByRole } = render(<Checkbox label={mockLabel} />)
    const checkbox = getByRole('checkbox')
    expect(checkbox).toHaveAttribute('type', 'checkbox')
  })

  it('applies custom className to container', () => {
    const { container } = render(<Checkbox label={mockLabel} className="custom-class" />)
    expect(container.firstChild).toHaveClass('flex', 'items-center', 'gap-2', 'custom-class')
  })

  it('forwards all input props correctly', () => {
    const handleChange = jest.fn()
    const { getByRole } = render(
      <Checkbox 
        label={mockLabel}
        checked={true}
        onChange={handleChange}
        disabled={true}
        value="test-value"
      />
    )
    const checkbox = getByRole('checkbox')
    expect(checkbox).toBeChecked()
    expect(checkbox).toBeDisabled()
    expect(checkbox).toHaveAttribute('value', 'test-value')
  })

  it('calls onChange when clicked', () => {
    const handleChange = jest.fn()
    const { getByRole } = render(<Checkbox label={mockLabel} onChange={handleChange} />)
    const checkbox = getByRole('checkbox')
    
    fireEvent.click(checkbox)
    expect(handleChange).toHaveBeenCalledTimes(1)
  })

  it('can be checked and unchecked', () => {
    const { getByRole } = render(<Checkbox label={mockLabel} />)
    const checkbox = getByRole('checkbox')
    
    expect(checkbox).not.toBeChecked()
    
    fireEvent.click(checkbox)
    expect(checkbox).toBeChecked()
    
    fireEvent.click(checkbox)
    expect(checkbox).not.toBeChecked()
  })

  it('has correct default structure and styling', () => {
    const { container } = render(<Checkbox label={mockLabel} />)
    expect(container.firstChild).toHaveClass('flex', 'items-center', 'gap-2')
  })

  it('label is clickable and toggles checkbox', () => {
    const { getByText, getByRole } = render(<Checkbox label={mockLabel} />)
    const label = getByText(mockLabel)
    const checkbox = getByRole('checkbox')
    
    expect(checkbox).not.toBeChecked()
    
    fireEvent.click(label)
    expect(checkbox).toBeChecked()
  })

  it('handles default className correctly', () => {
    const { container } = render(<Checkbox label={mockLabel} />)
    // When className is undefined, it should not add undefined to the class list
    expect(container.firstChild).toHaveClass('flex', 'items-center', 'gap-2')
    expect(container.firstChild).not.toHaveClass('undefined')
  })
})
