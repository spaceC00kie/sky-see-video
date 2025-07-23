import "@testing-library/jest-dom"

// Polyfill for TextEncoder/TextDecoder for jest environment
if (typeof TextEncoder === "undefined") {
  // Simple polyfill for tests
  Object.assign(global, {
    TextEncoder: class {
      encode(input: string) {
        return new Uint8Array(Buffer.from(input, "utf8"))
      }
    },
    TextDecoder: class {
      decode(input: Uint8Array) {
        return Buffer.from(input).toString("utf8")
      }
    },
  })
}

// Mock window.matchMedia
Object.defineProperty(window, "matchMedia", {
  writable: true,
  value: jest.fn().mockImplementation((query) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(), // deprecated
    removeListener: jest.fn(), // deprecated
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  })),
})

// Mock window.navigator.share
Object.defineProperty(window.navigator, "share", {
  writable: true,
  value: jest.fn().mockResolvedValue(undefined),
})

// Mock window.navigator.clipboard
Object.defineProperty(window.navigator, "clipboard", {
  value: {
    writeText: jest.fn().mockResolvedValue(undefined),
  },
})

// Mock ResizeObserver
Object.defineProperty(window, "ResizeObserver", {
  writable: true,
  value: jest.fn().mockImplementation(() => ({
    observe: jest.fn(),
    unobserve: jest.fn(),
    disconnect: jest.fn(),
  })),
})

// Mock IntersectionObserver
Object.defineProperty(window, "IntersectionObserver", {
  writable: true,
  value: jest.fn().mockImplementation(() => ({
    observe: jest.fn(),
    unobserve: jest.fn(),
    disconnect: jest.fn(),
  })),
})

// Mock fetch
;(window as any).fetch = jest.fn()

// Mock Google Analytics
jest.mock("react-ga4", () => ({
  initialize: jest.fn(),
  pageview: jest.fn(),
  event: jest.fn(),
}))

// Mock sweet alert
jest.mock("sweetalert2", () => ({
  fire: jest.fn().mockResolvedValue({ isConfirmed: true }),
  close: jest.fn(),
}))

// Silence console errors during tests unless we're specifically testing them
const originalError = console.error
beforeAll(() => {
  console.error = (...args) => {
    if (typeof args[0] === "string" && args[0].includes("Warning:")) {
      return
    }
    originalError.call(console, ...args)
  }
})

afterAll(() => {
  console.error = originalError
})
