import React, { useEffect, useState, useRef } from "react"
import { motion } from "framer-motion"

interface MobileViewportWrapperProps {
  children: React.ReactNode
  id?: string
  className?: string
  enableSmoothScroll?: boolean
  mobileHeightMode?: "viewport" | "content" | "fixed"
  minHeight?: string
}

const MobileViewportWrapper: React.FC<MobileViewportWrapperProps> = ({
  children,
  id,
  className = "",
  enableSmoothScroll = true,
  mobileHeightMode = "viewport",
  minHeight = "100vh",
}) => {
  const [viewportHeight, setViewportHeight] = useState<number>(0)
  const [isMobile, setIsMobile] = useState<boolean>(false)
  const [isLandscape, setIsLandscape] = useState<boolean>(false)
  const wrapperRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const checkDevice = () => {
      const mobile = window.innerWidth < 1024
      const landscape = window.innerWidth > window.innerHeight
      setIsMobile(mobile)
      setIsLandscape(landscape)
    }

    const updateViewportHeight = () => {
      // Use the smaller of window.innerHeight and visualViewport.height to avoid keyboard issues
      const vh = window.visualViewport?.height || window.innerHeight
      const actualVh = Math.min(window.innerHeight, vh)
      setViewportHeight(actualVh)

      // Update CSS custom property for consistent vh across components
      document.documentElement.style.setProperty("--stable-vh", `${actualVh * 0.01}px`)
    }

    // Initial setup
    checkDevice()
    updateViewportHeight()

    // Throttled resize handler for better performance
    let resizeTimeout: NodeJS.Timeout
    const handleResize = () => {
      clearTimeout(resizeTimeout)
      resizeTimeout = setTimeout(() => {
        checkDevice()
        updateViewportHeight()
      }, 150)
    }

    // Visual viewport handler for mobile browsers
    const handleVisualViewportChange = () => {
      if (window.visualViewport && isMobile) {
        updateViewportHeight()
      }
    }

    // Event listeners
    window.addEventListener("resize", handleResize, { passive: true })
    window.addEventListener("orientationchange", handleResize, { passive: true })

    if (window.visualViewport) {
      window.visualViewport.addEventListener("resize", handleVisualViewportChange, { passive: true })
      window.visualViewport.addEventListener("scroll", handleVisualViewportChange, { passive: true })
    }

    return () => {
      window.removeEventListener("resize", handleResize)
      window.removeEventListener("orientationchange", handleResize)

      if (window.visualViewport) {
        window.visualViewport.removeEventListener("resize", handleVisualViewportChange)
        window.visualViewport.removeEventListener("scroll", handleVisualViewportChange)
      }

      clearTimeout(resizeTimeout)
    }
  }, [isMobile])

  // Enhanced scroll behavior for mobile
  useEffect(() => {
    if (!enableSmoothScroll || !isMobile) return

    const preventMomentumScrolling = (e: TouchEvent) => {
      // Prevent momentum scrolling on iOS
      if (e.touches.length > 1) return

      const target = e.target as Element
      const wrapper = wrapperRef.current

      if (wrapper && wrapper.contains(target)) {
        // Allow scrolling within the component but prevent momentum
        e.stopPropagation()
      }
    }

    document.addEventListener("touchmove", preventMomentumScrolling, { passive: false })

    return () => {
      document.removeEventListener("touchmove", preventMomentumScrolling)
    }
  }, [enableSmoothScroll, isMobile])

  // Calculate height based on mode and device
  const getHeightStyles = () => {
    if (!isMobile) {
      // Desktop: use dvh as intended
      return {
        minHeight: minHeight.includes("dvh") ? minHeight : minHeight,
        height: minHeight.includes("dvh") ? minHeight : "auto",
      }
    }

    // Mobile height handling
    switch (mobileHeightMode) {
      case "fixed":
        return {
          height: `${viewportHeight}px`,
          minHeight: `${viewportHeight}px`,
          maxHeight: `${viewportHeight}px`,
        }

      case "viewport":
        return {
          minHeight: `${viewportHeight}px`,
          height: "auto",
        }

      case "content":
        return {
          minHeight: isLandscape ? `${viewportHeight * 0.9}px` : `${viewportHeight * 0.95}px`,
          height: "auto",
        }

      default:
        return {
          minHeight: `${viewportHeight}px`,
          height: "auto",
        }
    }
  }

  const heightStyles = getHeightStyles()

  // Mobile-specific CSS classes
  const mobileClasses = isMobile
    ? [
        "mobile-optimized",
        isLandscape ? "mobile-landscape" : "mobile-portrait",
        "overflow-x-hidden",
        "will-change-auto",
      ].join(" ")
    : ""

  return (
    <motion.div
      ref={wrapperRef}
      id={id}
      className={`
        relative w-full
        ${mobileClasses}
        ${className}
      `}
      style={heightStyles}
      initial={isMobile ? { opacity: 0 } : undefined}
      animate={isMobile ? { opacity: 1 } : undefined}
      transition={isMobile ? { duration: 0.3, ease: "easeOut" } : undefined}
    >
      {/* Safe area padding for mobile devices */}
      {isMobile && (
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            paddingTop: "env(safe-area-inset-top)",
            paddingBottom: "env(safe-area-inset-bottom)",
            paddingLeft: "env(safe-area-inset-left)",
            paddingRight: "env(safe-area-inset-right)",
          }}
        />
      )}

      {/* Content wrapper with mobile optimizations */}
      <div
        className={`
          relative w-full h-full
          ${isMobile ? "mobile-content-wrapper" : ""}
        `}
        style={
          isMobile
            ? {
                // Prevent layout shift on mobile
                contain: "layout style paint",
                willChange: "auto",
              }
            : undefined
        }
      >
        {children}
      </div>
    </motion.div>
  )
}

export default MobileViewportWrapper
