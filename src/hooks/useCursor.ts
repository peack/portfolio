import { useState, useEffect } from "react"

export const useCursor = (blinkSpeed: number = 500) => {
  const [showCursor, setShowCursor] = useState(true)

  useEffect(() => {
    const interval = setInterval(() => {
      setShowCursor((prev) => !prev)
    }, blinkSpeed)
    return () => clearInterval(interval)
  }, [blinkSpeed])

  return showCursor
}
