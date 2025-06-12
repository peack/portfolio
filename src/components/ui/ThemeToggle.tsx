import React from "react"
import { Monitor, Terminal } from "lucide-react"
import { useTheme } from "../../contexts/ThemeContext"

export const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme()

  return (
    <button
      onClick={toggleTheme}
      className="fixed top-4 right-4 z-50 flex items-center gap-2 px-4 py-2 bg-gray-900/80 backdrop-blur-sm border border-green-500/30 rounded-lg text-green-400 hover:bg-gray-800/80 transition-all duration-300"
      aria-label={`Switch to ${theme === "terminal" ? "classic" : "terminal"} theme`}
    >
      {theme === "terminal" ? (
        <>
          <Monitor size={16} />
          <span className="text-sm font-mono">Classic</span>
        </>
      ) : (
        <>
          <Terminal size={16} />
          <span className="text-sm font-mono">Terminal</span>
        </>
      )}
    </button>
  )
}
