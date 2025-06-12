import { useState, useEffect } from "react"

interface UseTypewriterOptions {
  phrases: string[]
  typingSpeed?: number
  deletingSpeed?: number
  pauseTime?: number
}

export const useTypewriter = ({ 
  phrases, 
  typingSpeed = 75, 
  deletingSpeed = 50, 
  pauseTime = 1500 
}: UseTypewriterOptions) => {
  const [displayedText, setDisplayedText] = useState("")
  const [currentPhase, setCurrentPhase] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    if (currentPhase >= phrases.length) return

    const currentPhrase = phrases[currentPhase]
    const isCompletePhrase = displayedText === currentPhrase
    const isLastPhrase = currentPhase === phrases.length - 1

    let timeout: NodeJS.Timeout

    if (!isDeleting && displayedText.length < currentPhrase.length) {
      // Typing phase
      timeout = setTimeout(
        () => {
          setDisplayedText(currentPhrase.slice(0, displayedText.length + 1))
        },
        typingSpeed + Math.random() * 25
      )
    } else if (!isDeleting && isCompletePhrase && !isLastPhrase) {
      // Wait before starting to delete
      timeout = setTimeout(() => {
        setIsDeleting(true)
      }, pauseTime)
    } else if (isDeleting && displayedText.length > 0) {
      // Deleting phase
      timeout = setTimeout(
        () => {
          setDisplayedText(displayedText.slice(0, -1))
        },
        deletingSpeed + Math.random() * 20
      )
    } else if (isDeleting && displayedText.length === 0) {
      // Deletion complete, move to next phrase
      setIsDeleting(false)
      setCurrentPhase((prev) => prev + 1)
    }

    return () => clearTimeout(timeout)
  }, [displayedText, currentPhase, isDeleting, phrases, typingSpeed, deletingSpeed, pauseTime])

  return displayedText
}
