import { render } from '@testing-library/react'
import { Spinner } from './Spinner'

describe('Spinner', () => {
  it('renders without crashing', () => {
    const { getByRole } = render(<Spinner />)
    const spinner = getByRole('status')
    expect(spinner).toBeInTheDocument()
  })

  it('has the correct accessibility attributes', () => {
    const { getByRole } = render(<Spinner />)
    const spinner = getByRole('status')
    expect(spinner).toHaveAttribute('aria-label', 'loading')
  })

  it('has the correct CSS classes', () => {
    const { getByRole } = render(<Spinner />)
    const spinner = getByRole('status')
    expect(spinner).toHaveClass(
      'h-12',
      'w-12',
      'animate-spin',
      'rounded-full',
      'border-4',
      'border-gray-300',
      'border-t-blue-700'
    )
  })
})
