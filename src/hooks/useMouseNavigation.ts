import { useEffect } from "react"

export const useMouseNavigation = (): void => {
  useEffect(() => {
    const handler = (e: MouseEvent | PointerEvent) => {
      if (e.button === 3) {
        e.preventDefault()
        window.history.back()
      } else if (e.button === 4) {
        e.preventDefault()
        window.history.forward()
      }
    }
    window.addEventListener("pointerup", handler, true)
    window.addEventListener("mouseup", handler, true)
    return () => {
      window.removeEventListener("pointerup", handler, true)
      window.removeEventListener("mouseup", handler, true)
    }
  }, [])
}
