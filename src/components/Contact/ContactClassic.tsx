import React from "react"
import { Mail, User } from "lucide-react"
import ContactForm from "./ContactForm"
import ContactInfo from "./ContactInfo"

interface ContactClassicProps {
  id: string
}

export const ContactClassic: React.FC<ContactClassicProps> = ({ id }) => {
  return (
    <section id={id} className="min-h-screen bg-gray-50 py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Get In Touch</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">Let's discuss your next project or opportunity</p>
          </div>

          {/* Desktop Layout */}
          <div className="hidden lg:block">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              {/* Contact Info */}
              <div className="bg-white rounded-xl shadow-lg p-8">
                <div className="flex items-center gap-3 mb-6">
                  <User className="text-blue-600" size={24} />
                  <h3 className="text-2xl font-semibold text-gray-900">Contact Information</h3>
                </div>
                <ContactInfo isDesktop={true} />
              </div>

              {/* Contact Form */}
              <div className="bg-white rounded-xl shadow-lg p-8">
                <div className="flex items-center gap-3 mb-6">
                  <Mail className="text-blue-600" size={24} />
                  <h3 className="text-2xl font-semibold text-gray-900">Send Message</h3>
                </div>
                <ContactForm isDesktop={true} />
              </div>
            </div>
          </div>

          {/* Mobile Layout */}
          <div className="lg:hidden">
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex items-center gap-3 mb-6">
                <Mail className="text-blue-600" size={24} />
                <h3 className="text-2xl font-semibold text-gray-900">Contact</h3>
              </div>
              <ContactInfo isDesktop={false} />
              <div className="border-t border-gray-200 pt-6 mt-6">
                <ContactForm isDesktop={false} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
