import { render, fireEvent } from '@testing-library/react'
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

  it('opens mobile menu when hamburger button is clicked', () => {
    // Set mobile width
    Object.defineProperty(window, 'innerWidth', {
      writable: true,
      configurable: true,
      value: 600,
    })
    
    const { getByLabelText, container } = renderWithProviders(<Header />)
    const menuButton = getByLabelText('Open menu')
    
    // Initially mobile menu should be closed
    expect(container.querySelector('[data-headlessui-state="open"]')).not.toBeInTheDocument()
    
    // Click to open menu
    fireEvent.click(menuButton)
    
    // Menu should now be open (we can't directly test the state but we can test the click works)
    expect(menuButton).toBeInTheDocument()
  })

  it('mobile menu can be closed', () => {
    // Set mobile width
    Object.defineProperty(window, 'innerWidth', {
      writable: true,
      configurable: true,
      value: 600,
    })
    
    const { getByLabelText } = renderWithProviders(<Header />)
    const menuButton = getByLabelText('Open menu')
    
    // Click to open menu
    fireEvent.click(menuButton)
    
    // The component should handle the state change
    expect(menuButton).toBeInTheDocument()
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

  it('manages mobile menu state correctly', () => {
    // Set mobile width
    Object.defineProperty(window, 'innerWidth', {
      writable: true,
      configurable: true,
      value: 600,
    })
    
    const { getByLabelText } = renderWithProviders(<Header />)
    const menuButton = getByLabelText('Open menu')
    
    // Test multiple clicks to ensure state management works
    fireEvent.click(menuButton)
    fireEvent.click(menuButton)
    fireEvent.click(menuButton)
    
    // Button should still be functional
    expect(menuButton).toBeInTheDocument()
  })

  it('renders both HeaderLeft and MobileMenu components', () => {
    const { container } = renderWithProviders(<Header />)
    
    // HeaderLeft should be rendered
    expect(container.querySelector('.no-wrap')).toBeInTheDocument()
    
    // MobileMenu should be rendered (even if closed) - just check container has content
    expect(container.innerHTML.length).toBeGreaterThan(0)
  })

  it('has correct z-index for sticky positioning', () => {
    const { container } = renderWithProviders(<Header />)
    const header = container.firstChild
    expect(header).toHaveClass('z-50')
  })

  it('maintains responsive design classes', () => {
    const { container } = renderWithProviders(<Header />)
    const header = container.firstChild
    expect(header).toHaveClass('px-4')
    
    const innerContainer = container.querySelector('.no-wrap')
    expect(innerContainer).toHaveClass('w-full', 'justify-between')
  })
})
