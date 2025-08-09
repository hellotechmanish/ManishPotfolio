"use client";
import React, { useState, useEffect } from "react";
import {
  Code2,
  Palette,
  Smartphone,
  Zap,
  ArrowRight,
  Check,
  // Removed unused Star, Clock, Users
  TrendingUp,
  Layers,
  Settings,
  ShoppingCart,
  Search,
} from "lucide-react";
import Image from "next/image";

const services = [
  {
    id: "web-development",
    title: "Web Development",
    subtitle: "Full-Stack Solutions",
    description:
      "Build modern, scalable web applications using cutting-edge technologies like React, Node.js, and cloud platforms.",
    icon: Code2,
    color: "from-blue-500 to-blue-700",
    bgColor: "from-blue-50 to-blue-100",
    features: [
      "React & Next.js Development",
      "Node.js Backend Solutions",
      "Database Design & Management",
      "API Development & Integration",
      "Cloud Deployment (AWS, Vercel)",
      "Performance Optimization",
    ],
    technologies: [
      "React",
      "Node.js",
      "MongoDB",
      "PostgreSQL",
      "AWS",
      "Docker",
    ],
    pricing: "Starting from $2,500",
    deliveryTime: "4-8 weeks",
    image:
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=800&h=600&fit=crop",
  },
  {
    id: "ui-ux-design",
    title: "UI/UX Design",
    subtitle: "User-Centered Design",
    description:
      "Create beautiful, intuitive user interfaces and experiences that engage users and drive conversions.",
    icon: Palette,
    color: "from-purple-500 to-pink-600",
    bgColor: "from-purple-50 to-pink-100",
    features: [
      "User Research & Analysis",
      "Wireframing & Prototyping",
      "Visual Design & Branding",
      "Responsive Design Systems",
      "Usability Testing",
      "Design System Creation",
    ],
    technologies: [
      "Figma",
      "Adobe XD",
      "Sketch",
      "Principle",
      "InVision",
      "Miro",
    ],
    pricing: "Starting from $1,500",
    deliveryTime: "2-4 weeks",
    image:
      "https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=800&h=600&fit=crop",
  },
  {
    id: "mobile-development",
    title: "Mobile Development",
    subtitle: "Cross-Platform Apps",
    description:
      "Develop native and cross-platform mobile applications for iOS and Android with React Native and Flutter.",
    icon: Smartphone,
    color: "from-green-500 to-teal-600",
    bgColor: "from-green-50 to-teal-100",
    features: [
      "React Native Development",
      "Flutter Applications",
      "Native iOS & Android",
      "App Store Optimization",
      "Push Notifications",
      "Offline Functionality",
    ],
    technologies: [
      "React Native",
      "Flutter",
      "Swift",
      "Kotlin",
      "Firebase",
      "Expo",
    ],
    pricing: "Starting from $3,500",
    deliveryTime: "6-10 weeks",
    image:
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=800&h=600&fit=crop",
  },
  {
    id: "ecommerce",
    title: "E-Commerce Solutions",
    subtitle: "Online Store Development",
    description:
      "Build powerful e-commerce platforms with secure payment processing, inventory management, and analytics.",
    icon: ShoppingCart,
    color: "from-orange-500 to-red-600",
    bgColor: "from-orange-50 to-red-100",
    features: [
      "Custom E-commerce Platforms",
      "Payment Gateway Integration",
      "Inventory Management",
      "Order Processing Systems",
      "SEO Optimization",
      "Analytics & Reporting",
    ],
    technologies: [
      "Shopify",
      "WooCommerce",
      "Stripe",
      "PayPal",
      "Next.js",
      "Sanity",
    ],
    pricing: "Starting from $4,000",
    deliveryTime: "6-12 weeks",
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=800&h=600&fit=crop",
  },
  {
    id: "web-optimization",
    title: "Web Optimization",
    subtitle: "Performance & SEO",
    description:
      "Optimize your website for speed, search engines, and user experience to maximize conversions and traffic.",
    icon: TrendingUp,
    color: "from-indigo-500 to-blue-600",
    bgColor: "from-indigo-50 to-blue-100",
    features: [
      "Page Speed Optimization",
      "SEO Strategy & Implementation",
      "Core Web Vitals Improvement",
      "Technical SEO Audits",
      "Conversion Rate Optimization",
      "Analytics Setup & Monitoring",
    ],
    technologies: [
      "Google Analytics",
      "PageSpeed Insights",
      "SEMrush",
      "Lighthouse",
      "GTM",
    ],
    pricing: "Starting from $1,200",
    deliveryTime: "2-3 weeks",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&h=600&fit=crop",
  },
  {
    id: "maintenance",
    title: "Website Maintenance",
    subtitle: "Ongoing Support",
    description:
      "Keep your website secure, updated, and running smoothly with regular maintenance and technical support.",
    icon: Settings,
    color: "from-gray-600 to-gray-800",
    bgColor: "from-gray-50 to-gray-100",
    features: [
      "Regular Security Updates",
      "Backup & Recovery",
      "Performance Monitoring",
      "Bug Fixes & Improvements",
      "Content Updates",
      "24/7 Technical Support",
    ],
    technologies: [
      "WordPress",
      "cPanel",
      "Git",
      "Monitoring Tools",
      "SSL Certificates",
    ],
    pricing: "Starting from $500/month",
    deliveryTime: "Ongoing",
    image:
      "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?q=80&w=800&h=600&fit=crop",
  },
];

export default function ServicesPage() {
  const [selectedService, setSelectedService] = useState(services[0]);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {/* Hero Section */}
      <section id="services" className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-pink-600/10"></div>
        <div className="container mx-auto px-6 relative">
          <div
            className={`text-center max-w-4xl mx-auto transform transition-all duration-1000 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Zap className="w-4 h-4" />
              Professional Services
            </div>
            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 bg-clip-text text-transparent mb-6">
              What I Can Do For You
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              From concept to deployment, I provide comprehensive digital
              solutions that help businesses grow and succeed in the modern web
              landscape.
            </p>

            {/* Stats */}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="container mx-auto px-1">
          {/* Services List */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-12 max-w-7xl mx-auto px-1">
            {services.map((service) => (
              <div
                key={service.id}
                onClick={() => setSelectedService(service)}
                className={`group relative bg-white rounded-xl p-4 sm:p-5 shadow-sm border hover:shadow-md transition-all duration-300 cursor-pointer transform hover:scale-105 max-w-sm mx-auto ${
                  selectedService.id === service.id
                    ? "ring-2 ring-blue-500 shadow-md scale-105"
                    : ""
                }`}
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${service.bgColor} opacity-0 group-hover:opacity-40 rounded-xl transition-opacity duration-300`}
                ></div>

                <div className="relative z-10">
                  <div
                    className={`inline-flex p-2 rounded-lg bg-gradient-to-r ${service.color} mb-3`}
                  >
                    <service.icon className="w-5 h-5 text-white" />
                  </div>

                  <h3 className="text-lg font-semibold text-gray-900 mb-1">
                    {service.title}
                  </h3>
                  <p className="text-blue-600 font-medium mb-2 text-sm">
                    {service.subtitle}
                  </p>
                  <p className="text-gray-600 text-xs mb-3">
                    {service.description}
                  </p>

                  <div className="flex items-center justify-between">
                    <span className="text-lg font-bold text-gray-900">
                      {service.pricing}
                    </span>
                    <ArrowRight
                      className={`w-4 h-4 transform transition-transform group-hover:translate-x-1 ${
                        selectedService.id === service.id
                          ? "text-blue-600"
                          : "text-gray-400"
                      }`}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Selected Service Details */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              {/* Left: Image */}
              <div className="relative h-56 sm:h-64 lg:h-full">
                <Image
                  src={selectedService.image}
                  alt={selectedService.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-3 left-3">
                  <div
                    className={`inline-flex p-2 sm:p-3 rounded-xl bg-gradient-to-r ${selectedService.color}`}
                  >
                    <selectedService.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                </div>
              </div>

              {/* Right: Details */}
              <div className="p-4 sm:p-6 lg:p-8 flex flex-col justify-between">
                <div>
                  <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">
                    {selectedService.title}
                  </h2>
                  <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6 line-clamp-3 sm:line-clamp-none">
                    {selectedService.description}
                  </p>

                  {/* Features */}
                  <div className="mb-4 sm:mb-6">
                    <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2 sm:mb-3">
                      What&apos;s Included:
                    </h3>
                    <div className="grid gap-1 sm:gap-2">
                      {selectedService.features.slice(0, 4).map((feature) => (
                        <div
                          key={feature}
                          className="flex items-center gap-2 text-xs sm:text-sm"
                        >
                          <Check className="w-4 h-4 text-green-500 flex-shrink-0" />
                          <span className="text-gray-700">{feature}</span>
                        </div>
                      ))}
                      {selectedService.features.length > 4 && (
                        <span className="text-xs text-blue-500">
                          + more features
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Technologies */}
                  <div className="mb-4 sm:mb-6">
                    <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2 sm:mb-3">
                      Technologies Used:
                    </h3>
                    <div className="flex flex-wrap gap-1 sm:gap-2">
                      {selectedService.technologies.slice(0, 4).map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-0.5 sm:px-3 sm:py-1 bg-gray-100 text-gray-700 rounded-full text-[10px] sm:text-xs font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                      {selectedService.technologies.length > 4 && (
                        <span className="text-[10px] sm:text-xs text-blue-500">
                          + more
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                {/* Pricing & CTA */}
                <div className="pt-3 sm:pt-4 border-t mt-3 sm:mt-4">
                  <div className="grid grid-cols-2 gap-4 mb-3 sm:mb-4">
                    <div>
                      <h4 className="font-semibold text-gray-900 text-xs sm:text-sm mb-1">
                        Investment
                      </h4>
                      <p className="text-lg sm:text-xl font-bold text-blue-600">
                        {selectedService.pricing}
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 text-xs sm:text-sm mb-1">
                        Timeline
                      </h4>
                      <p className="text-gray-600 text-xs sm:text-sm">
                        {selectedService.deliveryTime}
                      </p>
                    </div>
                  </div>

                  <button
                    onClick={() => {
                      document
                        .getElementById("contact")
                        ?.scrollIntoView({ behavior: "smooth" });
                    }}
                    className={`w-full bg-gradient-to-r ${selectedService.color} text-white py-2 sm:py-3 px-4 sm:px-6 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105 text-xs sm:text-sm`}
                  >
                    Get Started with {selectedService.title}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-r from-gray-50 to-blue-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              My Work Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A proven methodology that ensures quality results and client
              satisfaction
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Discovery",
                description:
                  "Understanding your goals, requirements, and target audience",
                icon: Search,
              },
              {
                step: "02",
                title: "Planning",
                description:
                  "Creating detailed project roadmap and technical specifications",
                icon: Layers,
              },
              {
                step: "03",
                title: "Development",
                description:
                  "Building your solution with best practices and modern technologies",
                icon: Code2,
              },
              {
                step: "04",
                title: "Launch",
                description:
                  "Testing, deployment, and ongoing support for your success",
                icon: Zap,
              },
            ].map((process, index) => (
              <div key={index} className="text-center group">
                <div className="relative mb-6">
                  <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                    <process.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 bg-white rounded-full w-8 h-8 flex items-center justify-center shadow-lg border-2 border-blue-500">
                    <span className="text-sm font-bold text-blue-600">
                      {process.step}
                    </span>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {process.title}
                </h3>
                <p className="text-gray-600">{process.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
