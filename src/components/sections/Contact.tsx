"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Mail, Phone, MapPin, Send, CheckCircle, XCircle } from "lucide-react";

const contactData = {
  title: "Let's Work Together",
  subtitle: "Have a project in mind? I'd love to hear about it.",
  description:
    "Whether you need a new website, mobile app, or want to discuss a creative project, I'm here to help bring your ideas to life.",
  email: "Mk772542@gmail.com",
  phone: "7065942794",
  location: "Ghaziabad, Up ,India",
  socialLinks: {
    linkedin: "https://linkedin.com/in/manish",
    github: "https://github.com/manish",
    twitter: "https://twitter.com/manish",
  },
};

type FormValues = {
  name: string;
  phone: number;
  email: string;
  message: string;
};

export default function Contact() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>();

  const [apiStatus, setApiStatus] = useState<null | {
    type: "success" | "error";
    message: string;
  }>(null);

  const onSubmit = async (data: FormValues) => {
    setApiStatus(null); // reset previous messages

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const json = await res.json();

      if (!res.ok) {
        // API error response
        setApiStatus({
          type: "error",
          message: json.error || "Something went wrong.",
        });
        return;
      }

      // Success
      setApiStatus({
        type: "success",
        message: json.message || "Message sent successfully!",
      });
      reset();
    } catch (error) {
      setApiStatus({
        type: "error",
        message: "Network error. Please try again.",
      });
    }
  };

  return (
    <section
      id="contact"
      className="py-20 px-6 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden"
    >
      {/* Background Illustrations */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute top-10 left-10 w-32 h-32 bg-blue-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-purple-400 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-pink-400 rounded-full blur-2xl"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 pb-3 bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
            {contactData.title}
          </h2>
          <p className="text-xl text-gray-600 mb-4 max-w-2xl mx-auto">
            {contactData.subtitle}
          </p>
          <p className="text-gray-500 max-w-3xl mx-auto leading-relaxed">
            {contactData.description}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Info & Illustration */}
          <div className="space-y-8">
            {/* Illustration */}
            <div className="bg-gradient-to-br from-blue-100 to-purple-100 rounded-3xl p-8 text-center">
              <div className="relative inline-block">
                <div className="w-48 h-48 mx-auto bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center mb-4 relative overflow-hidden">
                  <Mail className="w-20 h-20 text-white" />
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-400 rounded-full animate-pulse"></div>
                  <div className="absolute -bottom-4 -left-4 w-8 h-8 bg-yellow-400 rounded-full animate-bounce"></div>
                </div>
                <div className="text-gray-600 font-medium">
                  Ready to Connect
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div className="space-y-6">
              <div className="flex items-center space-x-4 p-4 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <Mail className="w-6 h-6 text-blue-600" aria-hidden="true" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Email</div>
                  <a
                    href={`https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
                      contactData.email
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 transition-colors"
                    aria-label={`Send an email to ${contactData.email}`}
                  >
                    {contactData.email}
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-4 p-4 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <Phone className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Phone</div>
                  <a
                    href={`tel:${contactData.phone}`}
                    className="text-green-600 hover:text-green-800 transition-colors"
                  >
                    {contactData.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-4 p-4 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-purple-600" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Location</div>
                  <div className="text-purple-600">{contactData.location}</div>
                </div>
              </div>
            </div>

            {/* Response Time */}
            <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-xl p-6 border border-green-100">
              <div className="flex items-center space-x-3 mb-2">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                <span className="font-semibold text-gray-900">
                  Quick Response
                </span>
              </div>
              <p className="text-gray-600 text-sm">
                I typically respond within ASAP. For urgent matters, feel free
                to Email & call directly.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <form
            className="bg-white rounded-3xl shadow-xl p-8 border border-gray-100"
            onSubmit={handleSubmit(onSubmit)}
            noValidate
          >
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Send a Message
              </h3>
              <p className="text-gray-600">
                Fill out the form below and I&apos;ll get back to you soon.
              </p>
            </div>

            <div className="space-y-6">
              {/* Name */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-semibold text-gray-700 mb-2"
                >
                  Full Name *
                </label>
                <input
                  id="name"
                  {...register("name", { required: "Name is required" })}
                  className={`w-full px-4 py-3 border rounded-xl transition-all duration-200 bg-gray-50 focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                    errors.name ? "border-red-500" : "border-gray-300"
                  }`}
                  placeholder="Your full name"
                />
                {errors.name && (
                  <p className="mt-1 text-red-600 text-sm">
                    {errors.name.message}
                  </p>
                )}
              </div>

              {/* Phone Number */}
              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-semibold text-gray-700 mb-2"
                >
                  Phone Number (optional)
                </label>
                <input
                  id="phone"
                  type="tel"
                  {...register("phone", {
                    pattern: {
                      value: /^\+?[\d\s\-]{7,15}$/,
                      message: "Please enter a valid phone number",
                    },
                  })}
                  className={`w-full px-4 py-3 border rounded-xl transition-all duration-200 bg-gray-50 focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                    errors.phone ? "border-red-500" : "border-gray-300"
                  }`}
                  placeholder="+1 234 567 890"
                />
                {errors.phone && (
                  <p className="mt-1 text-red-600 text-sm">
                    {errors.phone.message}
                  </p>
                )}
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold text-gray-700 mb-2"
                >
                  Email Address *
                </label>
                <input
                  id="email"
                  type="email"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                      message: "Invalid email address",
                    },
                  })}
                  className={`w-full px-4 py-3 border rounded-xl transition-all duration-200 bg-gray-50 focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                    errors.email ? "border-red-500" : "border-gray-300"
                  }`}
                  placeholder="your.email@example.com"
                />
                {errors.email && (
                  <p className="mt-1 text-red-600 text-sm">
                    {errors.email.message}
                  </p>
                )}
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-semibold text-gray-700 mb-2"
                >
                  Message *
                </label>
                <textarea
                  id="message"
                  rows={5}
                  {...register("message", { required: "Message is required" })}
                  className={`w-full px-4 py-3 border rounded-xl transition-all duration-200 bg-gray-50 focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none ${
                    errors.message ? "border-red-500" : "border-gray-300"
                  }`}
                  placeholder="Tell me about your project or how I can help you..."
                />
                {errors.message && (
                  <p className="mt-1 text-red-600 text-sm">
                    {errors.message.message}
                  </p>
                )}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold py-4 px-6 rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-200 flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-[1.02] active:scale-[0.98]"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    <span>Send Message</span>
                  </>
                )}
              </button>

              {/* Status Messages */}
              {/* Status Messages */}
              {apiStatus?.type === "success" && (
                <div className="flex items-center space-x-2 text-green-600 bg-green-50 p-4 rounded-xl border border-green-200">
                  <CheckCircle className="w-5 h-5" />
                  <span className="font-medium">{apiStatus.message}</span>
                </div>
              )}
              {apiStatus?.type === "error" && (
                <div className="flex items-center space-x-2 text-red-600 bg-red-50 p-4 rounded-xl border border-red-200">
                  <XCircle className="w-5 h-5" />
                  <span className="font-medium">{apiStatus.message}</span>
                </div>
              )}
            </div>

            {/* Alternative Contact */}
            <div className="mt-8 pt-6 border-t border-gray-200 text-center">
              <p className="text-gray-600 text-sm mb-4">
                Or reach out directly:
              </p>
              <a
                href={`mailto:${contactData.email}`}
                className="inline-flex items-center space-x-2 text-blue-600 hover:text-blue-800 font-medium transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span>{contactData.email}</span>
              </a>
            </div>
          </form>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-gray-900 to-gray-700 text-white rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">
              Ready to Start Your Project?
            </h3>
            <p className="text-gray-300 mb-6">
              Let&apos;s discuss your ideas and turn them into reality. No
              project is too big or too small.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href={`https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
                  contactData.email
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-gray-900 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors"
              >
                Email Me
              </a>

              <a
                href={`tel:${contactData.phone}`}
                className="border-2 border-white text-white px-6 py-3 rounded-full font-semibold hover:bg-white hover:text-gray-900 transition-colors"
              >
                Call Now
              </a>
              <a
                href="https://wa.me/917065942794?text=Hello%20I%20am%20interested"
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-white text-white px-6 py-3 rounded-full font-semibold hover:bg-white hover:text-gray-900 transition-colors"
              >
                Whatsapp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
