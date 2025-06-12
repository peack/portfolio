import React from "react"
import { motion } from "framer-motion"

interface PolaroidProps {
  src: string
  alt: string
  caption?: string
  className?: string
  size?: "sm" | "md" | "lg"
}

export const Polaroid: React.FC<PolaroidProps> = ({ src, alt, caption, className = "", size = "md" }) => {
  const sizeClasses = {
    sm: "p-3 pb-12 max-w-xs",
    md: "p-4 pb-16 max-w-sm",
    lg: "p-5 pb-20 max-w-md",
  }

  const textClasses = {
    sm: "text-sm",
    md: "text-lg",
    lg: "text-xl",
  }

  return (
    <motion.div
      className={`relative ${className}`}
      initial={{ y: -30, rotate: -12, opacity: 0, scale: 0.8 }}
      whileInView={{ y: 0, rotate: -6, opacity: 1, scale: 1 }}
      transition={{
        duration: 1.2,
        type: "spring",
        stiffness: 80,
        damping: 20,
      }}
      viewport={{ once: true }}
    >
      {/* Drop shadow */}
      <div className="absolute inset-0 bg-black/20 rounded-lg blur-xl transform translate-y-6 translate-x-2 -z-10" />

      {/* Polaroid frame */}
      <div className={`relative bg-white ${sizeClasses[size]} rounded-lg shadow-2xl`}>
        <div className="relative overflow-hidden rounded-md">
          <img src={src} alt={alt} className="object-cover w-full aspect-[3/4]" />
        </div>

        {/* Polaroid caption */}
        {caption && (
          <div className="absolute bottom-4 left-4 right-4 text-center">
            <p
              className={`text-gray-800 ${textClasses[size]} transform rotate-1`}
              style={{
                fontFamily: "'PermanentMarker', 'Marker Felt', cursive",
                fontWeight: "normal",
              }}
            >
              {caption}
            </p>
          </div>
        )}

        {/* Single tape piece */}
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 rotate-2 w-20 h-8 bg-yellow-200/80 rounded-sm shadow-md" />
      </div>
    </motion.div>
  )
}
