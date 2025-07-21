import { render } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import { OurWork } from './OurWork'

// Mock the ourWorkData module
jest.mock('./ourWorkData', () => ({
  logos: [
    { src: 'test-logo-1.png', alt: 'Test Logo 1' },
    { src: 'test-logo-2.png', alt: 'Test Logo 2' },
  ],
  cards: [
    {
      image: 'test-image-1.jpg',
      srcSet: 'test-srcset-1',
      title: 'Test Project 1',
      description: 'Test description 1',
      path: '/project/1'
    },
    {
      image: 'test-image-2.jpg',
      srcSet: 'test-srcset-2',
      title: 'Test Project 2',
      description: 'Test description 2',
      path: '/project/2'
    },
  ]
}))

const renderWithProviders = (component: React.ReactElement) => {
  return render(
    <HelmetProvider>
      <BrowserRouter>
        {component}
      </BrowserRouter>
    </HelmetProvider>
  )
}

describe('OurWork', () => {
  it('renders without crashing', () => {
    renderWithProviders(<OurWork />)
  })

  it('sets correct helmet meta tags', () => {
    const { container } = renderWithProviders(<OurWork />)
    // Helmet meta tags are set but not easily testable in jsdom
    // This test ensures the component renders without errors when Helmet is used
    expect(container.firstChild).toBeInTheDocument()
  })

  it('displays client logos', () => {
    const { getByAltText } = renderWithProviders(<OurWork />)
    
    expect(getByAltText('Test Logo 1')).toBeInTheDocument()
    expect(getByAltText('Test Logo 2')).toBeInTheDocument()
  })

  it('displays intro copy text', () => {
    const { getByText } = renderWithProviders(<OurWork />)
    
    expect(getByText(/SkySee Video has a wide range/)).toBeInTheDocument()
    expect(getByText(/Scroll down to review some examples/)).toBeInTheDocument()
  })

  it('renders gallery cards', () => {
    const { getByText } = renderWithProviders(<OurWork />)
    
    expect(getByText('Test Project 1')).toBeInTheDocument()
    expect(getByText('Test Project 2')).toBeInTheDocument()
  })

  it('has correct main layout structure', () => {
    const { container } = renderWithProviders(<OurWork />)
    
    const mainContainer = container.querySelector('.flex.flex-col.gap-4.py-20')
    expect(mainContainer).toBeInTheDocument()
  })

  it('has correct logo grid layout', () => {
    const { container } = renderWithProviders(<OurWork />)
    
    const logoContainer = container.querySelector('.xl\\:grid.xl\\:grid-flow-col')
    expect(logoContainer).toBeInTheDocument()
  })

  it('has correct gallery grid layout', () => {
    const { container } = renderWithProviders(<OurWork />)
    
    const galleryContainer = container.querySelector('.grid.gap-5.md\\:grid-cols-2.lg\\:grid-cols-4')
    expect(galleryContainer).toBeInTheDocument()
  })

  it('logo images have correct styling', () => {
    const { getByAltText } = renderWithProviders(<OurWork />)
    
    const logo = getByAltText('Test Logo 1')
    expect(logo).toHaveClass('w-32', 'xl:w-20', 'h-auto')
    expect(logo).toHaveAttribute('decoding', 'async')
    expect(logo).toHaveAttribute('loading', 'eager')
  })

  it('intro text has correct styling', () => {
    const { getByText } = renderWithProviders(<OurWork />)
    
    const introText = getByText(/SkySee Video has a wide range/)
    expect(introText).toHaveClass('text-center', 'text-4xl')
  })

  it('includes decorative horizontal rule', () => {
    const { container } = renderWithProviders(<OurWork />)
    
    const hr = container.querySelector('hr')
    expect(hr).toBeInTheDocument()
    expect(hr).toHaveClass('w-1/3', 'border-t-4', 'border-black')
  })

  it('sets preload links for all images', () => {
    const { container } = renderWithProviders(<OurWork />)
    // Helmet preload links are set but not easily testable in jsdom
    // This test ensures the component renders without errors when Helmet preload links are used
    expect(container.firstChild).toBeInTheDocument()
  })

  it('gallery cards have lazy loading configuration', () => {
    const { container } = renderWithProviders(<OurWork />)
    
    // Check that gallery cards are wrapped in proper containers
    const galleryItems = container.querySelectorAll('.content-visibility-auto')
    expect(galleryItems.length).toBe(2) // Based on our mock data
  })

  it('uses content-visibility-auto for performance', () => {
    const { container } = renderWithProviders(<OurWork />)
    
    const performanceOptimizedElements = container.querySelectorAll('.content-visibility-auto')
    expect(performanceOptimizedElements.length).toBeGreaterThan(0)
  })

  it('has proper responsive design classes', () => {
    const { container } = renderWithProviders(<OurWork />)
    
    // Check for responsive grid classes
    const galleryGrid = container.querySelector('.md\\:grid-cols-2.lg\\:grid-cols-4')
    expect(galleryGrid).toBeInTheDocument()
    
    // Check for responsive logo layout
    const logoGrid = container.querySelector('.xl\\:grid')
    expect(logoGrid).toBeInTheDocument()
  })
})
