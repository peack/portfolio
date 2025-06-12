import React from "react"
import { motion } from "framer-motion"
import { Mail, Phone, MapPin, Github, Linkedin, ExternalLink, Twitter, ArrowUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Card, CardContent } from "@/components/ui/card"
import GradientBackground from "../ui/GradientBackground"
import socialData from "../../data/socialData.json"
import NavigationArrow from "../ui/NavigationArrow"
import { scrollToSection } from "../../utils/navigation"

interface ContactClassicProps {
  id: string
}

export const ContactClassic: React.FC<ContactClassicProps> = ({ id }) => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "mikael.galliot@proton.me",
      href: "mailto:mikael.galliot@proton.me",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "GMT+1",
      href: null,
    },
  ]

  // Map social data to icons
  const socialIcons = {
    GitHub: Github,
    LinkedIn: Linkedin,
    X: Twitter,
  }

  const socialLinks = socialData.socials
    .filter((social) => social.href && social.name !== "Email" && social.name !== "Instagram")
    .map((social) => ({
      icon: socialIcons[social.name as keyof typeof socialIcons] || ExternalLink,
      label: social.name,
      href: social.name === "X" ? social.href : social.href,
    }))

  return (
    <section
      id={id}
      className="min-h-dvh bg-gray-950 py-16 sm:py-20 relative overflow-hidden flex items-center"
      data-theme="dark"
    >
      {/* Background decoration */}
      <GradientBackground variant="dark" />

      <div className="container mx-auto px-4 relative z-10 w-full">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <motion.div
            className="text-center mb-8 sm:mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">Get In Touch</h2>
            <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto">
              Let's discuss your next project or opportunity. I'm always open to new challenges and collaborations.
            </p>
          </motion.div>

          {/* Contact Grid */}
          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <h3 className="text-2xl font-semibold text-white mb-6">Contact Information</h3>

              {contactInfo.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div key={item.label}>
                    <Card className="bg-gray-900 border-gray-700 hover:border-gray-600 transition-all">
                      <CardContent className="flex items-center gap-4 p-4">
                        <div className="flex-shrink-0 w-12 h-12 bg-blue-600/20 rounded-lg flex items-center justify-center">
                          <item.icon className="w-6 h-6 text-blue-400" />
                        </div>
                        <div className="flex-1">
                          <p className="text-sm text-gray-400 font-medium">{item.label}</p>
                          {item.href ? (
                            <a
                              href={item.href}
                              className="text-white hover:text-blue-400 transition-colors font-medium"
                            >
                              {item.value}
                            </a>
                          ) : (
                            <p className="text-white font-medium">{item.value}</p>
                          )}
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </motion.div>
              ))}

              {/* Social Links */}
              <div className="pt-6">
                <h4 className="text-lg font-semibold text-white mb-4">Connect With Me</h4>
                <div className="flex gap-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <Button
                        variant="outline"
                        size="icon"
                        className="w-12 h-12 bg-gray-800 border-gray-700 text-gray-300 hover:bg-blue-600 hover:text-white hover:border-blue-600"
                      >
                        <social.icon className="w-5 h-5" />
                      </Button>
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div>
                <Card className="bg-gray-900 border-gray-700">
                  <CardContent className="p-4 lg:p-6">
                    <h3 className="text-xl font-semibold text-white mb-4">Send a Message</h3>

                    <form
                      action={`mailto:mikael.galliot@proton.me`}
                      method="post"
                      encType="text/plain"
                      className="space-y-3"
                    >
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="name" className="text-gray-300">
                            Name
                          </Label>
                          <Input
                            type="text"
                            id="name"
                            name="name"
                            placeholder="Your name"
                            className="bg-gray-800 border-gray-600 text-white placeholder-gray-400 focus:border-blue-500"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email" className="text-gray-300">
                            Email
                          </Label>
                          <Input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="your@email.com"
                            className="bg-gray-800 border-gray-600 text-white placeholder-gray-400 focus:border-blue-500"
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="subject" className="text-gray-300">
                          Subject
                        </Label>
                        <Input
                          type="text"
                          id="subject"
                          name="subject"
                          placeholder="Project inquiry"
                          className="bg-gray-800 border-gray-600 text-white placeholder-gray-400 focus:border-blue-500"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="message" className="text-gray-300">
                          Message
                        </Label>
                        <Textarea
                          id="message"
                          name="message"
                          rows={5}
                          placeholder="Tell me about your project..."
                          className="bg-gray-800 border-gray-600 text-white placeholder-gray-400 focus:border-blue-500 resize-none"
                        />
                      </div>

                      <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700">
                        Send Message
                        <ExternalLink className="w-4 h-4 ml-2" />
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Navigation indicators */}
      <motion.div
        className="absolute top-6 sm:top-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.0 }}
        viewport={{ once: true }}
      >
        <NavigationArrow icon={ArrowUp} onClick={() => scrollToSection("experience")} />
      </motion.div>
    </section>
  )
}

export default ContactClassic
