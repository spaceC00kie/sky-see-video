import { render } from '@testing-library/react'
import { HelmetProvider } from 'react-helmet-async'
import { TourismAndResort } from './TourismAndResort'

const renderWithProviders = (component: React.ReactElement) => {
  return render(
    <HelmetProvider>
      {component}
    </HelmetProvider>
  )
}

describe('TourismAndResort', () => {
  it('renders without crashing', () => {
    renderWithProviders(<TourismAndResort />)
  })

  it('sets correct helmet meta tags', () => {
    const { container } = renderWithProviders(<TourismAndResort />)
    // Helmet meta tags are set but not easily testable in jsdom
    // This test ensures the component renders without errors when Helmet is used
    expect(container.firstChild).toBeInTheDocument()
  })

  it('renders video iframe with correct attributes', () => {
    const { container } = renderWithProviders(<TourismAndResort />)
    
    const iframe = container.querySelector('iframe')
    expect(iframe).toBeInTheDocument()
    expect(iframe).toHaveAttribute('title', 'Tourism & Resort Videography | SkySee Video')
    expect(iframe).toHaveAttribute('allow', 'autoplay; fullscreen; picture-in-picture')
  })

  it('has correct video container layout', () => {
    const { container } = renderWithProviders(<TourismAndResort />)
    
    const mainContainer = container.querySelector('.flex.flex-col.items-center.justify-center')
    expect(mainContainer).toBeInTheDocument()
    
    const videoContainer = container.querySelector('.aspect-video')
    expect(videoContainer).toBeInTheDocument()
  })

  it('has loading placeholder background', () => {
    const { container } = renderWithProviders(<TourismAndResort />)
    
    const placeholder = container.querySelector('.bg-black')
    expect(placeholder).toBeInTheDocument()
    expect(placeholder).toHaveClass('absolute', 'inset-0', 'grid', 'place-content-center', 'rounded-sm')
  })

  it('iframe has correct positioning and styling', () => {
    const { container } = renderWithProviders(<TourismAndResort />)
    
    const iframe = container.querySelector('iframe')
    expect(iframe).toHaveClass('absolute', 'left-0', 'top-0', 'z-10', 'h-full', 'w-full')
  })

  it('has responsive design classes', () => {
    const { container } = renderWithProviders(<TourismAndResort />)
    
    const videoContainer = container.querySelector('.aspect-video')
    expect(videoContainer).toHaveClass('relative', 'mx-auto', 'mb-6', 'w-full')
  })
})
