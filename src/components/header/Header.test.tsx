import { render } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import { WindowSize } from '../../containers/WindowSize'
import { Header } from './Header'

// Mock react-icons
jest.mock('react-icons/gi', () => ({
  GiHamburgerMenu: () => <div data-testid="hamburger-menu">Menu</div>,
}))

const renderWithProviders = (ui: React.ReactElement) => {
  return render(
    <HelmetProvider>
      <WindowSize.Provider>
        <BrowserRouter>
          {ui}
        </BrowserRouter>
      </WindowSize.Provider>
    </HelmetProvider>
  )
}

describe('Header', () => {
  beforeEach(() => {
    // Reset window size for each test
    Object.defineProperty(window, 'innerWidth', {
      writable: true,
      configurable: true,
      value: 1024,
    })
  })

  it('renders without crashing', () => {
    const { container } = renderWithProviders(<Header />)
    expect(container.firstChild).toBeInTheDocument()
  })

  it('has correct header structure', () => {
    const { container } = renderWithProviders(<Header />)
    const header = container.firstChild
    expect(header).toHaveClass(
      'sticky', 'top-0', 'z-50', 'flex', 'h-28', 'w-full', 'shrink-0', 
      'items-center', 'justify-center', 'bg-white', 'px-4', 'text-xl'
    )
  })

  it('contains header left, middle, and desktop nav components', () => {
    const { container } = renderWithProviders(<Header />)
    // The component structure should be present
    const headerContent = container.querySelector('.no-wrap.relative.flex.w-full.justify-between')
    expect(headerContent).toBeInTheDocument()
  })

  it('renders logo for desktop view', () => {
    // Set desktop width
    Object.defineProperty(window, 'innerWidth', {
      writable: true,
      configurable: true,
      value: 1024,
    })
    
    const { getByAltText } = renderWithProviders(<Header />)
    expect(getByAltText('Sky See Video')).toBeInTheDocument()
  })

  it('renders hamburger menu for mobile view', () => {
    // Set mobile width
    Object.defineProperty(window, 'innerWidth', {
      writable: true,
      configurable: true,
      value: 600,
    })
    
    const { getByTestId } = renderWithProviders(<Header />)
    expect(getByTestId('hamburger-menu')).toBeInTheDocument()
  })

  it('shows phone number in desktop navigation', () => {
    // Set desktop width
    Object.defineProperty(window, 'innerWidth', {
      writable: true,
      configurable: true,
      value: 1024,
    })
    
    const { getByText } = renderWithProviders(<Header />)
    expect(getByText('678-304-9920')).toBeInTheDocument()
  })

  it('shows navigation links in desktop view', () => {
    // Set desktop width
    Object.defineProperty(window, 'innerWidth', {
      writable: true,
      configurable: true,
      value: 1024,
    })
    
    const { getAllByText } = renderWithProviders(<Header />)
    expect(getAllByText('HOME')[0]).toBeInTheDocument()
    expect(getAllByText('ABOUT US')[0]).toBeInTheDocument()
    expect(getAllByText('OUR WORK')[0]).toBeInTheDocument()
    expect(getAllByText('OUR SERVICES')[0]).toBeInTheDocument()
    expect(getAllByText('CONTACT US')[0]).toBeInTheDocument()
  })

  it('shows get quote button in desktop view', () => {
    // Set desktop width
    Object.defineProperty(window, 'innerWidth', {
      writable: true,
      configurable: true,
      value: 1024,
    })
    
    const { getAllByText } = renderWithProviders(<Header />)
    const quoteButtons = getAllByText('GET QUOTE')
    expect(quoteButtons[0]).toBeInTheDocument()
    expect(quoteButtons[0].closest('a')).toHaveAttribute('href', '/contact-us')
  })

  it('hides desktop navigation on mobile', () => {
    // Set mobile width
    Object.defineProperty(window, 'innerWidth', {
      writable: true,
      configurable: true,
      value: 600,
    })
    
    const { queryByText } = renderWithProviders(<Header />)
    expect(queryByText('678-304-9920')).not.toBeInTheDocument()
  })

  it('mobile menu has correct accessibility attributes', () => {
    // Set mobile width
    Object.defineProperty(window, 'innerWidth', {
      writable: true,
      configurable: true,
      value: 600,
    })
    
    const { getByLabelText } = renderWithProviders(<Header />)
    expect(getByLabelText('Open menu')).toBeInTheDocument()
  })
})
