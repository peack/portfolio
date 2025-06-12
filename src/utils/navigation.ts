export const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId)
  if (element) {
    // Use a slower, more controlled scroll
    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    })
  }
}

// Alternative with custom smooth scroll for more control
export const scrollToSectionSlow = (sectionId: string) => {
  const element = document.getElementById(sectionId)
  if (element) {
    const targetPosition = element.offsetTop
    const startPosition = window.pageYOffset
    const distance = targetPosition - startPosition
    const duration = 1200 // Slower duration (1.2 seconds)
    let start: number | null = null

    const step = (timestamp: number) => {
      if (!start) start = timestamp
      const progress = timestamp - start
      const percentage = Math.min(progress / duration, 1)

      // Easing function for smoother deceleration
      const easeInOutCubic = (t: number) => (t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1)

      window.scrollTo(0, startPosition + distance * easeInOutCubic(percentage))

      if (progress < duration) {
        window.requestAnimationFrame(step)
      }
    }

    window.requestAnimationFrame(step)
  }
}

// Enhanced mobile-friendly scroll function
export const scrollToSectionMobile = (sectionId: string) => {
  const element = document.getElementById(sectionId)
  if (element) {
    const isMobile = window.innerWidth < 1024
    const viewportHeight = window.visualViewport?.height || window.innerHeight

    if (isMobile) {
      // Calculate offset for mobile to ensure section is properly visible
      const elementRect = element.getBoundingClientRect()
      const offsetTop = window.pageYOffset + elementRect.top

      // Adjust for mobile browser UI
      const mobileOffset = viewportHeight * 0.05 // 5% offset for mobile UI

      window.scrollTo({
        top: Math.max(0, offsetTop - mobileOffset),
        behavior: "smooth",
      })
    } else {
      // Use existing desktop behavior
      scrollToSectionSlow(sectionId)
    }
  }
}

// Auto-detect and use appropriate scroll method
export const scrollToSectionAuto = (sectionId: string) => {
  const isMobile = window.innerWidth < 1024

  if (isMobile) {
    scrollToSectionMobile(sectionId)
  } else {
    scrollToSectionSlow(sectionId)
  }
}

export const createScrollHandler = (sectionId: string) => {
  return () => scrollToSectionSlow(sectionId)
}

export const createScrollHandlerAuto = (sectionId: string) => {
  return () => scrollToSectionAuto(sectionId)
}
