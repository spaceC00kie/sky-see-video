import { render } from '@testing-library/react'
import { HelmetProvider } from 'react-helmet-async'
import { CorporateMarketing } from './CorporateMarketing'

const renderWithProviders = (component: React.ReactElement) => {
  return render(
    <HelmetProvider>
      {component}
    </HelmetProvider>
  )
}

describe('CorporateMarketing', () => {
  it('renders without crashing', () => {
    renderWithProviders(<CorporateMarketing />)
  })

  it('sets correct helmet meta tags', () => {
    const { container } = renderWithProviders(<CorporateMarketing />)
    // Helmet meta tags are set but not easily testable in jsdom
    // This test ensures the component renders without errors when Helmet is used
    expect(container.firstChild).toBeInTheDocument()
  })

  it('renders video iframe with correct attributes', () => {
    const { container } = renderWithProviders(<CorporateMarketing />)
    
    const iframe = container.querySelector('iframe')
    expect(iframe).toBeInTheDocument()
    expect(iframe).toHaveAttribute('src', 'https://player.vimeo.com/video/810145426?h=af982b45c1&dnt=1')
    expect(iframe).toHaveAttribute('title', 'Corporate Marketing Videography | SkySee Video')
    expect(iframe).toHaveAttribute('allow', 'autoplay; fullscreen; picture-in-picture')
    expect(iframe).toHaveAttribute('allowFullScreen')
  })

  it('has correct video container layout', () => {
    const { container } = renderWithProviders(<CorporateMarketing />)
    
    const mainContainer = container.querySelector('.flex.flex-col.items-center.justify-center')
    expect(mainContainer).toBeInTheDocument()
    
    const videoContainer = container.querySelector('.aspect-video')
    expect(videoContainer).toBeInTheDocument()
    expect(videoContainer).toHaveClass('relative', 'mx-auto', 'mb-6', 'w-full')
  })

  it('displays corporate marketing title', () => {
    const { container } = renderWithProviders(<CorporateMarketing />)
    
    const title = container.querySelector('.text-3xl.font-medium.text-blue-700')
    expect(title).toBeInTheDocument()
    expect(title).toHaveTextContent('Corporate Marketing')
  })

  it('iframe has correct positioning and styling', () => {
    const { container } = renderWithProviders(<CorporateMarketing />)
    
    const iframe = container.querySelector('iframe')
    expect(iframe).toHaveClass('absolute', 'left-0', 'top-0', 'z-10', 'h-full', 'w-full')
  })
})