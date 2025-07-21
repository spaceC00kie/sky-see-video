import { render, fireEvent } from '@testing-library/react'
import { TextInput } from './TextInput'

describe('TextInput', () => {
  it('renders without crashing', () => {
    const { container } = render(<TextInput />)
    expect(container.firstChild).toBeInTheDocument()
  })

  it('renders with label when provided', () => {
    const { getByLabelText, getByText } = render(<TextInput label="Test Label" />)
    expect(getByText('Test Label')).toBeInTheDocument()
    expect(getByLabelText('Test Label')).toBeInTheDocument()
  })

  it('renders without label when not provided', () => {
    const { container } = render(<TextInput />)
    const label = container.querySelector('label')
    expect(label).toBeNull()
  })

  it('applies custom className to input', () => {
    const { getByRole } = render(<TextInput className="custom-class" />)
    const input = getByRole('textbox')
    expect(input).toHaveClass('border', 'p-2', 'custom-class')
  })

  it('applies custom containerClassName', () => {
    const { container } = render(<TextInput containerClassName="custom-container" />)
    expect(container.firstChild).toHaveClass('flex', 'flex-col', 'gap-2', 'custom-container')
  })

  it('forwards all input props correctly', () => {
    const { getByRole } = render(
      <TextInput 
        placeholder="Test placeholder" 
        value="test value"
        onChange={() => {}}
        type="email"
      />
    )
    const input = getByRole('textbox')
    expect(input).toHaveAttribute('placeholder', 'Test placeholder')
    expect(input).toHaveAttribute('value', 'test value')
    expect(input).toHaveAttribute('type', 'email')
  })

  it('calls onChange when input value changes', () => {
    const handleChange = jest.fn()
    const { getByRole } = render(<TextInput onChange={handleChange} />)
    const input = getByRole('textbox')
    
    fireEvent.change(input, { target: { value: 'new value' } })
    expect(handleChange).toHaveBeenCalledTimes(1)
  })

  it('has default styling classes', () => {
    const { getByRole } = render(<TextInput />)
    const input = getByRole('textbox')
    expect(input).toHaveClass('border', 'p-2')
  })

  it('label has correct styling', () => {
    const { getByText } = render(<TextInput label="Test Label" />)
    const label = getByText('Test Label')
    expect(label).toHaveClass('font-semibold')
  })
})
