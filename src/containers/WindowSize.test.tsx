import { renderHook, act } from '@testing-library/react'
import { WindowSize } from './WindowSize'

// Mock window.innerWidth
const mockInnerWidth = (width: number) => {
  Object.defineProperty(window, 'innerWidth', {
    writable: true,
    configurable: true,
    value: width,
  })
}

const triggerResize = (width: number) => {
  mockInnerWidth(width)
  // Trigger resize event
  act(() => {
    window.dispatchEvent(new Event('resize'))
  })
}

describe('WindowSize', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('initializes with current window width', () => {
    mockInnerWidth(1024)
    const { result } = renderHook(() => WindowSize.useContainer(), {
      wrapper: WindowSize.Provider,
    })

    expect(result.current.windowWidth).toBe(1024)
    expect(result.current.isSmall).toBe(false)
  })

  it('detects small screens correctly (width < 768)', () => {
    mockInnerWidth(600)
    const { result } = renderHook(() => WindowSize.useContainer(), {
      wrapper: WindowSize.Provider,
    })

    expect(result.current.windowWidth).toBe(600)
    expect(result.current.isSmall).toBe(true)
  })

  it('detects large screens correctly (width >= 768)', () => {
    mockInnerWidth(1200)
    const { result } = renderHook(() => WindowSize.useContainer(), {
      wrapper: WindowSize.Provider,
    })

    expect(result.current.windowWidth).toBe(1200)
    expect(result.current.isSmall).toBe(false)
  })

  it('handles window resize events', () => {
    mockInnerWidth(1024)
    const { result } = renderHook(() => WindowSize.useContainer(), {
      wrapper: WindowSize.Provider,
    })

    expect(result.current.windowWidth).toBe(1024)
    expect(result.current.isSmall).toBe(false)

    triggerResize(600)

    expect(result.current.windowWidth).toBe(600)
    expect(result.current.isSmall).toBe(true)
  })

  it('adds resize event listener on mount', () => {
    const addEventListenerSpy = jest.spyOn(window, 'addEventListener')
    
    renderHook(() => WindowSize.useContainer(), {
      wrapper: WindowSize.Provider,
    })

    expect(addEventListenerSpy).toHaveBeenCalledWith('resize', expect.any(Function))
    
    addEventListenerSpy.mockRestore()
  })

  it('removes resize event listener on unmount', () => {
    const removeEventListenerSpy = jest.spyOn(window, 'removeEventListener')
    
    const { unmount } = renderHook(() => WindowSize.useContainer(), {
      wrapper: WindowSize.Provider,
    })

    unmount()

    expect(removeEventListenerSpy).toHaveBeenCalledWith('resize', expect.any(Function))
    
    removeEventListenerSpy.mockRestore()
  })

  it('boundary test: exactly 768px should be large screen', () => {
    mockInnerWidth(768)
    const { result } = renderHook(() => WindowSize.useContainer(), {
      wrapper: WindowSize.Provider,
    })

    expect(result.current.windowWidth).toBe(768)
    expect(result.current.isSmall).toBe(false)
  })

  it('boundary test: 767px should be small screen', () => {
    mockInnerWidth(767)
    const { result } = renderHook(() => WindowSize.useContainer(), {
      wrapper: WindowSize.Provider,
    })

    expect(result.current.windowWidth).toBe(767)
    expect(result.current.isSmall).toBe(true)
  })

  it('handles multiple resize events correctly', () => {
    mockInnerWidth(1024)
    const { result } = renderHook(() => WindowSize.useContainer(), {
      wrapper: WindowSize.Provider,
    })

    // First resize
    triggerResize(600)
    expect(result.current.windowWidth).toBe(600)
    expect(result.current.isSmall).toBe(true)

    // Second resize
    triggerResize(1200)
    expect(result.current.windowWidth).toBe(1200)
    expect(result.current.isSmall).toBe(false)

    // Third resize
    triggerResize(500)
    expect(result.current.windowWidth).toBe(500)
    expect(result.current.isSmall).toBe(true)
  })
})
