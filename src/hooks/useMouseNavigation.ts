import { useEffect } from "react"

export const useMouseNavigation = (): void => {
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (e.button === 3) {
        e.preventDefault()
        window.history.back()
      } else if (e.button === 4) {
        e.preventDefault()
        window.history.forward()
      }
    }
    window.addEventListener("mouseup", handler)
    return () => window.removeEventListener("mouseup", handler)
  }, [])
}
