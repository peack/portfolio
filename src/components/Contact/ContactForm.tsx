import React, { useState } from "react"
import { motion } from "framer-motion"

interface ContactFormProps {
  isDesktop: boolean
}

const ContactForm: React.FC<ContactFormProps> = ({ isDesktop }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch(`${process.env.REACT_APP_NEXTJS_API_URL}/api/contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          source: "portfolio",
        }),
      })

      if (response.ok) {
        setSubmitStatus("success")
        setFormData({ name: "", email: "", message: "" })
      } else {
        const errorData = await response.json()
        console.error("Error response:", errorData)
        setSubmitStatus("error")
      }
    } catch (error) {
      console.error("Error sending contact form:", error)
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
      setTimeout(() => setSubmitStatus("idle"), 3000)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.5 }}
      viewport={{ once: true }}
    >
      <div className={`text-green-500 ${isDesktop ? "text-base" : "text-sm"}`}>$ nano message.txt</div>

      <form onSubmit={handleSubmit} className={`mt-4 ${isDesktop ? "space-y-3" : "space-y-2"}`}>
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7 }}>
          <label className={`block text-green-400 mb-1 ${isDesktop ? "text-sm" : "text-xs"}`}>Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className={`w-full bg-gray-800/50 border border-green-500/30 rounded px-2 ${isDesktop ? "py-2" : "py-1"} text-white focus:border-green-400 focus:outline-none transition-colors ${isDesktop ? "text-sm" : "text-xs"}`}
            placeholder="Enter your name"
          />
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8 }}>
          <label className={`block text-green-400 mb-1 ${isDesktop ? "text-sm" : "text-xs"}`}>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className={`w-full bg-gray-800/50 border border-green-500/30 rounded px-2 ${isDesktop ? "py-2" : "py-1"} text-white focus:border-green-400 focus:outline-none transition-colors ${isDesktop ? "text-sm" : "text-xs"}`}
            placeholder="Enter your email"
          />
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.9 }}>
          <label className={`block text-green-400 mb-1 ${isDesktop ? "text-sm" : "text-xs"}`}>Message:</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={isDesktop ? 4 : 2}
            className={`w-full bg-gray-800/50 border border-green-500/30 rounded px-2 ${isDesktop ? "py-2" : "py-1"} text-white focus:border-green-400 focus:outline-none transition-colors ${isDesktop ? "text-sm" : "text-xs"} resize-none`}
            placeholder="Enter your message"
          />
        </motion.div>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.0 }}>
          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full bg-green-600/20 border border-green-500/50 rounded px-3 ${isDesktop ? "py-2" : "py-1"} text-green-400 hover:bg-green-600/30 disabled:opacity-50 disabled:cursor-not-allowed transition-all ${isDesktop ? "text-sm" : "text-xs"}`}
          >
            {isSubmitting ? "Sending..." : "$ send_message"}
          </button>
        </motion.div>
      </form>

      {submitStatus === "success" && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-3 text-green-400 text-sm"
        >
          ✓ Message sent successfully!
        </motion.div>
      )}

      {submitStatus === "error" && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-3 text-red-400 text-sm"
        >
          ✗ Failed to send message. Please try again.
        </motion.div>
      )}

      <div className={`text-green-400 opacity-60 mt-4 ${isDesktop ? "text-base" : "text-xs"}`}>EOF</div>
    </motion.div>
  )
}

export default ContactForm
