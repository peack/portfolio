import React from "react"
import { motion } from "framer-motion"
import { useMutation } from "@tanstack/react-query"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { ExternalLink } from "lucide-react"

interface ContactFormProps {
  isDesktop: boolean
  variant?: "terminal" | "classic"
}

const baseSchema = {
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  message: z.string().min(10, "Message must be at least 10 characters"),
}

const terminalSchema = z.object(baseSchema)

const classicSchema = z.object({
  ...baseSchema,
  subject: z.string().min(3, "Subject must be at least 3 characters"),
})

type TerminalFormData = z.infer<typeof terminalSchema>
type ClassicFormData = z.infer<typeof classicSchema>

const submitContactForm = async (data: TerminalFormData | ClassicFormData) => {
  const apiUrl = import.meta.env.VITE_API_URL || "http://localhost:3001"

  try {
    const response = await fetch(`${apiUrl}/api/contact`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: data.name,
        email: data.email,
        message: "subject" in data ? `Subject: ${data.subject}\n\n${data.message}` : data.message,
        source: "portfolio",
      }),
    })

    if (!response.ok) {
      if (response.status === 0 || response.type === "opaque") {
        throw new Error("Network error: Please check if the API server is running and CORS is configured correctly.")
      }

      try {
        const errorData = await response.json()
        throw new Error(errorData.message || `Server error: ${response.status}`)
      } catch (jsonError) {
        throw new Error(`Server error: ${response.status} - ${response.statusText}`)
      }
    }

    return response.json()
  } catch (error) {
    if (error instanceof TypeError && error.message.includes("fetch")) {
      throw new Error("Network error: Unable to connect to the server. Please check your connection and try again.")
    }
    if (error.message.includes("CORS")) {
      throw new Error("Configuration error: Please contact the administrator.")
    }
    throw error
  }
}

const ContactForm: React.FC<ContactFormProps> = ({ isDesktop, variant = "terminal" }) => {
  const isTerminal = variant === "terminal"
  const schema = isTerminal ? terminalSchema : classicSchema

  const form = useForm<TerminalFormData | ClassicFormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
      ...(variant === "classic" && { subject: "" }),
    },
  })

  const mutation = useMutation({
    mutationFn: submitContactForm,
    onSuccess: () => {
      form.reset()
    },
  })

  const onSubmit = (data: TerminalFormData | ClassicFormData) => {
    mutation.mutate(data)
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.5 }}
      viewport={{ once: true }}
    >
      {isTerminal && <div className={`text-green-500 ${isDesktop ? "text-base" : "text-sm"}`}>$ nano message.txt</div>}

      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className={`${isTerminal ? "mt-4" : ""} ${isDesktop ? "space-y-3" : "space-y-2"}`}
        >
          {variant === "classic" ? (
            <>
              <div className="grid md:grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem className="space-y-2">
                      <FormLabel className="text-gray-300">Name</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Your name"
                          className="bg-gray-800 border-gray-600 text-white placeholder-gray-400 focus:border-blue-500"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage className="text-red-400 text-xs" />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem className="space-y-2">
                      <FormLabel className="text-gray-300">Email</FormLabel>
                      <FormControl>
                        <Input
                          type="email"
                          placeholder="your@email.com"
                          className="bg-gray-800 border-gray-600 text-white placeholder-gray-400 focus:border-blue-500"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage className="text-red-400 text-xs" />
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={form.control}
                name="subject"
                render={({ field }) => (
                  <FormItem className="space-y-2">
                    <FormLabel className="text-gray-300">Subject</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Project inquiry"
                        className="bg-gray-800 border-gray-600 text-white placeholder-gray-400 focus:border-blue-500"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage className="text-red-400 text-xs" />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem className="space-y-2">
                    <FormLabel className="text-gray-300">Message</FormLabel>
                    <FormControl>
                      <Textarea
                        rows={5}
                        placeholder="Tell me about your project..."
                        className="bg-gray-800 border-gray-600 text-white placeholder-gray-400 focus:border-blue-500 resize-none"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage className="text-red-400 text-xs" />
                  </FormItem>
                )}
              />
            </>
          ) : (
            <>
              <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7 }}>
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className={`block text-green-400 mb-1 ${isDesktop ? "text-sm" : "text-xs"}`}>
                        Name:
                      </FormLabel>
                      <FormControl>
                        <input
                          type="text"
                          placeholder="Enter your name"
                          className={`w-full bg-gray-800/50 border border-green-500/30 rounded px-2 ${isDesktop ? "py-2" : "py-1"} text-white focus:border-green-400 focus:outline-none transition-colors ${isDesktop ? "text-sm" : "text-xs"}`}
                          {...field}
                        />
                      </FormControl>
                      <FormMessage className="text-red-400 text-xs" />
                    </FormItem>
                  )}
                />
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8 }}>
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className={`block text-green-400 mb-1 ${isDesktop ? "text-sm" : "text-xs"}`}>
                        Email:
                      </FormLabel>
                      <FormControl>
                        <input
                          type="email"
                          placeholder="Enter your email"
                          className={`w-full bg-gray-800/50 border border-green-500/30 rounded px-2 ${isDesktop ? "py-2" : "py-1"} text-white focus:border-green-400 focus:outline-none transition-colors ${isDesktop ? "text-sm" : "text-xs"}`}
                          {...field}
                        />
                      </FormControl>
                      <FormMessage className="text-red-400 text-xs" />
                    </FormItem>
                  )}
                />
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.9 }}>
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className={`block text-green-400 mb-1 ${isDesktop ? "text-sm" : "text-xs"}`}>
                        Message:
                      </FormLabel>
                      <FormControl>
                        <textarea
                          rows={isDesktop ? 4 : 2}
                          placeholder="Enter your message"
                          className={`w-full bg-gray-800/50 border border-green-500/30 rounded px-2 ${isDesktop ? "py-2" : "py-1"} text-white focus:border-green-400 focus:outline-none transition-colors ${isDesktop ? "text-sm" : "text-xs"} resize-none`}
                          {...field}
                        />
                      </FormControl>
                      <FormMessage className="text-red-400 text-xs" />
                    </FormItem>
                  )}
                />
              </motion.div>
            </>
          )}

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.0 }}>
            {isTerminal ? (
              <button
                type="submit"
                disabled={mutation.isPending}
                className={`w-full bg-green-600/20 border border-green-500/50 rounded px-3 ${isDesktop ? "py-2" : "py-1"} text-green-400 hover:bg-green-600/30 disabled:opacity-50 disabled:cursor-not-allowed transition-all ${isDesktop ? "text-sm" : "text-xs"}`}
              >
                {mutation.isPending ? "Sending..." : "$ send_message"}
              </button>
            ) : (
              <Button
                type="submit"
                disabled={mutation.isPending}
                className="w-full bg-blue-600 hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {mutation.isPending ? "Sending..." : "Send Message"}
                {/* <ExternalLink className="w-4 h-4 ml-2" /> */}
              </Button>
            )}
          </motion.div>
        </form>
      </Form>

      {mutation.isSuccess && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className={`mt-3 text-green-400 text-sm ${!isTerminal && "text-center"}`}
        >
          ✓ Message sent successfully!
        </motion.div>
      )}

      {mutation.isError && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className={`mt-3 text-red-400 text-sm ${!isTerminal && "text-center"}`}
        >
          ✗ {mutation.error?.message || "Failed to send message. Please try again."}
        </motion.div>
      )}

      {isTerminal && <div className={`text-green-400 opacity-60 mt-4 ${isDesktop ? "text-base" : "text-xs"}`}>EOF</div>}
    </motion.div>
  )
}

export default ContactForm
