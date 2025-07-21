import { render, fireEvent, waitFor } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import { ContactUs } from './ContactUs'

// Mock SweetAlert2 first before importing
jest.mock('sweetalert2', () => ({
  fire: jest.fn().mockResolvedValue({ isConfirmed: true }),
  close: jest.fn(),
}))

// Get mocked Swal
import Swal from 'sweetalert2'
const mockSwal = Swal as jest.Mocked<typeof Swal>

// Mock fetch
const mockFetch = jest.fn()
;(window as any).fetch = mockFetch

// Mock react-icons
jest.mock('react-icons/ri', () => ({
  RiFacebookFill: () => <div data-testid="facebook-icon">Facebook</div>,
  RiInstagramLine: () => <div data-testid="instagram-icon">Instagram</div>,
}))

const renderWithProviders = (ui: React.ReactElement) => {
  return render(
    <HelmetProvider>
      <BrowserRouter>
        {ui}
      </BrowserRouter>
    </HelmetProvider>
  )
}

describe('ContactUs', () => {
  beforeEach(() => {
    jest.clearAllMocks()
    mockFetch.mockResolvedValue({
      json: () => Promise.resolve({ success: true }),
    })
  })

  it('renders without crashing', () => {
    const { container } = renderWithProviders(<ContactUs />)
    expect(container.firstChild).toBeInTheDocument()
  })

  it('displays contact information', () => {
    const { getByText } = renderWithProviders(<ContactUs />)
    expect(getByText('info@skyseevideo.com')).toBeInTheDocument()
    expect(getByText('Phone: 678-304-9920')).toBeInTheDocument()
    expect(getByText('Located in Atlanta, Georgia')).toBeInTheDocument()
  })

  it('displays social media links', () => {
    const { getByTestId } = renderWithProviders(<ContactUs />)
    expect(getByTestId('facebook-icon')).toBeInTheDocument()
    expect(getByTestId('instagram-icon')).toBeInTheDocument()
  })

  it('has correct social media link URLs', () => {
    const { container } = renderWithProviders(<ContactUs />)
    const instagramLink = container.querySelector('a[href="https://www.instagram.com/skyseevideo/"]')
    const facebookLink = container.querySelector('a[href="https://www.facebook.com/SkySeeVideo/"]')
    
    expect(instagramLink).toBeInTheDocument()
    expect(facebookLink).toBeInTheDocument()
  })

  it('renders all form fields', () => {
    const { getByLabelText, getByText, getAllByText, container } = renderWithProviders(<ContactUs />)
    
    expect(getByLabelText('First Name *')).toBeInTheDocument()
    expect(getByLabelText('Last Name *')).toBeInTheDocument()
    expect(getByLabelText('Email *')).toBeInTheDocument()
    expect(getByLabelText('Company Name')).toBeInTheDocument()
    expect(getByLabelText('Description of Project')).toBeInTheDocument()
    
    // For date picker, check for at least one instance of the text
    expect(getAllByText('Project Completion Date')[0]).toBeInTheDocument()
    
    expect(getByText('Submit')).toBeInTheDocument()
  })

  it('renders service checkboxes', () => {
    const { getByText } = renderWithProviders(<ContactUs />)
    
    expect(getByText(/Pre-Production/)).toBeInTheDocument()
    expect(getByText(/Production – Aerial & On-The-Ground Videography/)).toBeInTheDocument()
    expect(getByText(/Post-Production/)).toBeInTheDocument()
  })

  it('handles form input changes', async () => {
    const { getByLabelText } = renderWithProviders(<ContactUs />)
    
    const firstNameInput = getByLabelText('First Name *')
    fireEvent.change(firstNameInput, { target: { value: 'John' } })
    expect(firstNameInput).toHaveValue('John')
    
    const emailInput = getByLabelText('Email *')
    fireEvent.change(emailInput, { target: { value: 'john@example.com' } })
    expect(emailInput).toHaveValue('john@example.com')
  })

  it('handles checkbox changes', async () => {
    const { getByRole } = renderWithProviders(<ContactUs />)
    
    const preProductionCheckbox = getByRole('checkbox', { 
      name: /Pre-Production/ 
    })
    
    expect(preProductionCheckbox).not.toBeChecked()
    fireEvent.click(preProductionCheckbox)
    expect(preProductionCheckbox).toBeChecked()
  })

  it('submits form with valid data', async () => {
    const { getByLabelText, getByText, getByRole } = renderWithProviders(<ContactUs />)
    
    // Fill in required fields
    fireEvent.change(getByLabelText('First Name *'), { target: { value: 'John' } })
    fireEvent.change(getByLabelText('Last Name *'), { target: { value: 'Doe' } })
    fireEvent.change(getByLabelText('Email *'), { target: { value: 'john@example.com' } })
    fireEvent.change(getByLabelText('Description of Project'), { target: { value: 'Test project' } })
    
    // Check a service
    const preProductionCheckbox = getByRole('checkbox', { name: /Pre-Production/ })
    fireEvent.click(preProductionCheckbox)
    
    const submitButton = getByText('Submit')
    fireEvent.click(submitButton)
    
    await waitFor(() => {
      expect(mockSwal.fire).toHaveBeenCalledWith({
        title: 'Sending…',
        allowOutsideClick: false,
        didOpen: expect.any(Function),
      })
    })
    
    await waitFor(() => {
      expect(mockFetch).toHaveBeenCalledWith('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: expect.stringContaining('John'),
      })
    })
  })

  it('shows success message on successful submission', async () => {
    const { getByLabelText, getByText, getByRole } = renderWithProviders(<ContactUs />)
    
    // Fill form
    fireEvent.change(getByLabelText('First Name *'), { target: { value: 'John' } })
    fireEvent.change(getByLabelText('Last Name *'), { target: { value: 'Doe' } })
    fireEvent.change(getByLabelText('Email *'), { target: { value: 'john@example.com' } })
    
    const submitButton = getByText('Submit')
    fireEvent.click(submitButton)
    
    // Wait for both calls to complete - success should be the second call
    await waitFor(() => {
      expect(mockSwal.fire).toHaveBeenCalledTimes(2)
    })
    
    // Check that the success call was made
    expect(mockSwal.fire).toHaveBeenNthCalledWith(2, expect.objectContaining({
      icon: 'success',
      title: 'Success!',
    }))
    
    // Check that the text contains the expected message (to avoid apostrophe encoding issues)
    const secondCall = mockSwal.fire.mock.calls[1][0] as any
    expect(secondCall?.text).toContain('Your project details were sent')
    expect(secondCall?.text).toContain('be in touch soon')
  })

  it('shows error message on failed submission', async () => {
    mockFetch.mockRejectedValueOnce(new Error('Network error'))
    
    const { getByLabelText, getByText } = renderWithProviders(<ContactUs />)
    
    // Fill form
    fireEvent.change(getByLabelText('First Name *'), { target: { value: 'John' } })
    fireEvent.change(getByLabelText('Last Name *'), { target: { value: 'Doe' } })
    fireEvent.change(getByLabelText('Email *'), { target: { value: 'john@example.com' } })
    
    const submitButton = getByText('Submit')
    fireEvent.click(submitButton)
    
    await waitFor(() => {
      expect(mockSwal.fire).toHaveBeenCalledWith({
        icon: 'error',
        title: 'Something went wrong',
        text: 'Please call 678-304-9920 or email info@skyseevideo.com directly.',
      })
    })
  })

  it('renders hero banner with correct content', () => {
    const { getByText } = renderWithProviders(<ContactUs />)
    expect(getByText('We\'d love to talk with you about your project. Give us a call today!')).toBeInTheDocument()
  })

  it('has proper form accessibility', () => {
    const { container } = renderWithProviders(<ContactUs />)
    const form = container.querySelector('form')
    expect(form).toBeInTheDocument()
    expect(form).toHaveClass('flex', 'w-full', 'flex-col', 'gap-4', 'md:w-1/2')
  })

  it('displays marketing copy', () => {
    const { getByText } = renderWithProviders(<ContactUs />)
    expect(getByText('Make the most of your time & budget!')).toBeInTheDocument()
    expect(getByText(/It can be overwhelming to start a new video project/)).toBeInTheDocument()
  })

  it('social media icons have correct accessibility attributes', () => {
    const { getByLabelText } = renderWithProviders(<ContactUs />)
    expect(getByLabelText('Instagram')).toBeInTheDocument()
    expect(getByLabelText('Facebook')).toBeInTheDocument()
  })

  it('resets form after successful submission', async () => {
    const { getByLabelText, getByText } = renderWithProviders(<ContactUs />)
    
    const firstNameInput = getByLabelText('First Name *')
    const lastNameInput = getByLabelText('Last Name *')
    const emailInput = getByLabelText('Email *')
    
    // Fill all required form fields
    fireEvent.change(firstNameInput, { target: { value: 'John' } })
    fireEvent.change(lastNameInput, { target: { value: 'Doe' } })
    fireEvent.change(emailInput, { target: { value: 'john@example.com' } })
    
    const submitButton = getByText('Submit')
    fireEvent.click(submitButton)
    
    // Wait for the form submission to complete and form to be reset
    await waitFor(() => {
      expect(mockSwal.fire).toHaveBeenCalledTimes(2)
    }, { timeout: 3000 })
    
    // Give a bit more time for state to update
    await waitFor(() => {
      expect(firstNameInput).toHaveValue('')
      expect(lastNameInput).toHaveValue('')
      expect(emailInput).toHaveValue('')
    }, { timeout: 1000 })
  })
})
