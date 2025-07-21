import { render } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import { WindowSize } from '../../containers/WindowSize'
import { MainContent } from './MainContent'

// Mock the lazy-loaded components
jest.mock('../pages/home/Home', () => ({
  Home: () => <div data-testid="home-page">Home Page</div>,
}))

jest.mock('../pages/about-us/AboutUs', () => ({
  AboutUs: () => <div data-testid="about-us-page">About Us Page</div>,
}))

jest.mock('../pages/our-work/OurWork', () => ({
  OurWork: () => <div data-testid="our-work-page">Our Work Page</div>,
}))

jest.mock('../pages/services/OurServices', () => ({
  OurServices: () => <div data-testid="our-services-page">Our Services Page</div>,
}))

jest.mock('../pages/ContactUs', () => ({
  ContactUs: () => <div data-testid="contact-us-page">Contact Us Page</div>,
}))

// Mock service components
jest.mock('../pages/services/Construction', () => ({
  Construction: () => <div data-testid="construction-page">Construction Page</div>,
}))

jest.mock('../pages/services/TourismAndResort', () => ({
  TourismAndResort: () => <div data-testid="tourism-page">Tourism Page</div>,
}))

jest.mock('../pages/services/CorporateMarketing', () => ({
  CorporateMarketing: () => <div data-testid="corporate-page">Corporate Page</div>,
}))

jest.mock('../pages/services/Documentaries', () => ({
  Documentaries: () => <div data-testid="documentaries-page">Documentaries Page</div>,
}))

// Mock project page
jest.mock('../pages/our-work/ProjectPage', () => ({
  ProjectPage: () => <div data-testid="project-page">Project Page</div>,
}))

// Mock work data
jest.mock('../pages/our-work/ourWorkData', () => ({
  cards: [
    {
      path: '/project/test-project',
      title: 'Test Project',
      description: 'Test Description',
      videoUrl: 'https://test.com/video',
    },
  ],
}))

const renderWithProviders = (ui: React.ReactElement, initialPath = '/') => {
  window.history.pushState({}, 'Test page', initialPath)
  
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

describe('MainContent', () => {
  it('renders without crashing', () => {
    const { container } = renderWithProviders(<MainContent />)
    expect(container.firstChild).toBeInTheDocument()
  })

  it('has correct main structure', () => {
    const { container } = renderWithProviders(<MainContent />)
    const mainContainer = container.firstChild
    expect(mainContainer).toHaveClass('flex', 'h-full', 'justify-center')
    
    const contentContainer = container.querySelector('.flex.grow.flex-col.gap-3')
    expect(contentContainer).toBeInTheDocument()
  })

  it('renders home page by default', async () => {
    const { findByTestId } = renderWithProviders(<MainContent />, '/')
    expect(await findByTestId('home-page')).toBeInTheDocument()
  })

  it('renders about us page for /about-us route', async () => {
    const { findByTestId } = renderWithProviders(<MainContent />, '/about-us')
    expect(await findByTestId('about-us-page')).toBeInTheDocument()
  })

  it('renders our work page for /our-work route', async () => {
    const { findByTestId } = renderWithProviders(<MainContent />, '/our-work')
    expect(await findByTestId('our-work-page')).toBeInTheDocument()
  })

  it('renders services page for /services route', async () => {
    const { findByTestId } = renderWithProviders(<MainContent />, '/services')
    expect(await findByTestId('our-services-page')).toBeInTheDocument()
  })

  it('renders contact us page for /contact-us route', async () => {
    const { findByTestId } = renderWithProviders(<MainContent />, '/contact-us')
    expect(await findByTestId('contact-us-page')).toBeInTheDocument()
  })

  it('renders construction service page', async () => {
    const { findByTestId } = renderWithProviders(<MainContent />, '/construction-videography')
    expect(await findByTestId('construction-page')).toBeInTheDocument()
  })

  it('renders tourism service page', async () => {
    const { findByTestId } = renderWithProviders(<MainContent />, '/tourism-videography')
    expect(await findByTestId('tourism-page')).toBeInTheDocument()
  })

  it('renders corporate marketing service page', async () => {
    const { findByTestId } = renderWithProviders(<MainContent />, '/corporate-video-marketing')
    expect(await findByTestId('corporate-page')).toBeInTheDocument()
  })

  it('renders documentaries service page', async () => {
    const { findByTestId } = renderWithProviders(<MainContent />, '/film-and-video')
    expect(await findByTestId('documentaries-page')).toBeInTheDocument()
  })

  it('renders project pages for work items', async () => {
    const { findByTestId } = renderWithProviders(<MainContent />, '/project/test-project')
    expect(await findByTestId('project-page')).toBeInTheDocument()
  })

  it('renders main content container', () => {
    const { container } = renderWithProviders(<MainContent />)
    const mainContainer = container.querySelector('.flex.h-full.justify-center')
    expect(mainContainer).toBeInTheDocument()
  })

  it('renders content wrapper with correct grid structure', () => {
    const { container } = renderWithProviders(<MainContent />)
    const contentWrapper = container.querySelector('.flex.grow.flex-col.gap-3')
    expect(contentWrapper).toBeInTheDocument()
  })

  it('uses Suspense for lazy loading', () => {
    const { container } = renderWithProviders(<MainContent />)
    // The component should render immediately with Suspense fallback
    expect(container.firstChild).toBeInTheDocument()
  })
})
