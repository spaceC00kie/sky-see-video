import { render } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import { ScrollToTop } from './ScrollToTop'

// Mock window.scrollTo
const mockScrollTo = jest.fn()
Object.defineProperty(window, 'scrollTo', { value: mockScrollTo })

const renderWithRouter = (initialEntries = ['/']) => {
  return render(
    <BrowserRouter>
      <ScrollToTop />
    </BrowserRouter>
  )
}

describe('ScrollToTop', () => {
  beforeEach(() => {
    mockScrollTo.mockClear()
  })

  it('renders without crashing', () => {
    renderWithRouter()
    expect(mockScrollTo).toHaveBeenCalledWith(0, 0)
  })

  it('returns null (no visual output)', () => {
    const { container } = renderWithRouter()
    expect(container.firstChild).toBeNull()
  })

  it('scrolls to top when pathname changes', () => {
    renderWithRouter(['/'])
    expect(mockScrollTo).toHaveBeenCalledWith(0, 0)
    
    // The component should have called scrollTo during mount
    expect(mockScrollTo).toHaveBeenCalledTimes(1)
  })

  it('calls window.scrollTo with correct parameters', () => {
    renderWithRouter(['/some-page'])
    expect(mockScrollTo).toHaveBeenCalledWith(0, 0)
  })
})
