"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const socialLinks = [
  {
    name: "GitHub",
    url: "https://github.com/hellotechmanish",
    color: "hover:text-gray-900",
    followers: "200+",
    icon: "M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z",
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/kumarmanish70/",
    color: "hover:text-blue-600",
    followers: "500+",
    icon: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z",
  },
  {
    name: "Twitter",
    url: "https://x.com/Kumarmanish70",
    color: "hover:text-blue-400",
    followers: "50+",
    icon: "M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z",
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/kumar_manish70/",
    color: "hover:text-pink-500",
    followers: "500+",
    icon: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z",
  },
];

const stats = {
  totalProjects: 9,
  clientSatisfaction: "85%",
  technologiesUsed: 8,
  yearsExperience: 2,
};

const statsData = [
  {
    label: "Years Experience",
    value: `${stats.yearsExperience}+`,
    color: "text-blue-600",
  },
  {
    label: "Projects Completed",
    value: `${stats.totalProjects}+`,
    color: "text-purple-600",
  },
  {
    label: "Client Satisfaction",
    value: stats.clientSatisfaction,
    color: "text-green-600",
  },
  {
    label: "Technologies Used",
    value: `${stats.technologiesUsed}+`,
    color: "text-yellow-600",
  },
];

// Simple icon components
const StarIcon = () => (
  <svg className="w-3 h-3 sm:w-4 sm:h-4 fill-current" viewBox="0 0 24 24">
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
  </svg>
);

const MapPinIcon = () => (
  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
  </svg>
);

const CalendarIcon = () => (
  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
    <path d="M9 11H7v2h2v-2zm4 0h-2v2h2v-2zm4 0h-2v2h2v-2zm2-7h-1V2h-2v2H8V2H6v2H5c-1.1 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V9h14v11z" />
  </svg>
);

const MailIcon = () => (
  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.89 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
  </svg>
);

const ExternalLinkIcon = () => (
  <svg className="w-3 h-3 fill-current" viewBox="0 0 24 24">
    <path d="M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z" />
  </svg>
);

const LightbulbIcon = () => (
  <svg className="w-4 h-4 sm:w-6 sm:h-6 fill-current" viewBox="0 0 24 24">
    <path d="M9 21c0 .5.4 1 1 1h4c.6 0 1-.5 1-1v-1H9v1zm3-19C8.1 2 5 5.1 5 9c0 2.4 1.2 4.5 3 5.7V17c0 .5.4 1 1 1h6c.6 0 1-.5 1-1v-2.3c1.8-1.3 3-3.4 3-5.7 0-3.9-3.1-7-7-7z" />
  </svg>
);

const HeartIcon = () => (
  <svg className="w-4 h-4 sm:w-6 sm:h-6 fill-current" viewBox="0 0 24 24">
    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
  </svg>
);

// Removed unused UserIcon

export default function About() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {/* Hero Section */}
      <section
        id="about"
        className="relative overflow-hidden py-8 sm:py-12 md:py-16 lg:py-20"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-pink-600/10 animate-pulse"></div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
            {/* Left Column - Personal Info */}
            <div
              className={`space-y-6 sm:space-y-8 transform transition-all duration-1000 ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
            >
              <div className="space-y-4 sm:space-y-6">
                <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-medium">
                  <StarIcon />
                  About Me
                </div>

                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 bg-clip-text text-transparent leading-tight">
                  Building the Future, One Project at a Time
                </h1>

                <p className="text-base sm:text-lg lg:text-xl text-gray-600 leading-relaxed">
                  Passionate developer and innovator dedicated to creating
                  meaningful solutions that make a difference. Based in San
                  Francisco, working with teams globally.
                </p>
              </div>

              {/* Mobile Profile Image - Shows only on mobile */}
              <div className="block lg:hidden">
                <div className="relative max-w-xs mx-auto">
                  {/* Background decorative elements for mobile */}
                  <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full opacity-20 animate-pulse"></div>
                  <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-gradient-to-r from-pink-400 to-orange-500 rounded-full opacity-20 animate-pulse delay-1000"></div>

                  {/* Main profile image container for mobile */}
                  <div className="relative bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 p-1 rounded-2xl">
                    <div className="bg-white p-1.5 rounded-2xl">
                      <Image
                        src="/Me.jpg"
                        alt="Profile Photo"
                        width={300}
                        height={300}
                        className="w-full h-64 object-cover rounded-xl"
                      />
                    </div>
                  </div>

                  {/* Floating elements for mobile */}
                  <div className="absolute top-2 -left-2 bg-white p-2 rounded-xl shadow-lg border animate-bounce">
                    <div className="text-yellow-500">
                      <LightbulbIcon />
                    </div>
                  </div>
                  <div className="absolute bottom-2 -right-2 bg-white p-2 rounded-xl shadow-lg border animate-bounce delay-500">
                    <div className="text-red-500">
                      <HeartIcon />
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
                {statsData.map(({ label, value, color }, index) => (
                  <div
                    key={index}
                    className="text-center p-3 sm:p-4 bg-white rounded-xl shadow-sm border"
                  >
                    <div
                      className={`text-lg sm:text-xl lg:text-2xl font-bold ${color}`}
                    >
                      {value}
                    </div>
                    <div className="text-xs sm:text-sm text-gray-600">
                      {label}
                    </div>
                  </div>
                ))}
              </div>

              {/* Contact Info */}
              <div className="flex flex-col sm:flex-row sm:flex-wrap gap-3 sm:gap-4 text-sm sm:text-base text-gray-600">
                <div className="flex items-center gap-2">
                  <div className="text-red-500 flex-shrink-0">
                    <MapPinIcon />
                  </div>
                  <span>Uttar Pradesh, India</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="text-blue-500 flex-shrink-0">
                    <CalendarIcon />
                  </div>
                  <span>Available for Projects</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="text-green-500 flex-shrink-0">
                    <MailIcon />
                  </div>
                  <a
                    href="mailto:hello@yourname.com"
                    className="hover:text-blue-600 transition-colors break-all"
                  >
                    mk772542@gmail.com
                  </a>
                </div>
              </div>

              {/* Social Links */}
              <div className="space-y-4">
                <h3 className="text-base sm:text-lg font-semibold text-gray-900">
                  Connect with me
                </h3>
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
                  {socialLinks.map((social) => (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`group flex items-center gap-2 sm:gap-3 p-2.5 sm:p-3 bg-white rounded-xl shadow-sm border hover:shadow-md transition-all duration-300 ${social.color}`}
                    >
                      <svg
                        className="w-4 h-4 sm:w-5 sm:h-5 transition-transform group-hover:scale-110 flex-shrink-0 fill-current"
                        viewBox="0 0 24 24"
                      >
                        <path d={social.icon} />
                      </svg>
                      <div className="text-left min-w-0 flex-1">
                        <div className="font-medium text-xs sm:text-sm truncate">
                          {social.name}
                        </div>
                        <div className="text-xs text-gray-500 truncate">
                          {social.followers} followers
                        </div>
                      </div>
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0">
                        <ExternalLinkIcon />
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column - Profile Image - Desktop Only */}
            <div
              className={`hidden lg:block relative transform transition-all duration-1000 delay-300 ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
            >
              <div className="relative max-w-md mx-auto lg:max-w-none">
                {/* Background decorative elements */}
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full opacity-20 animate-pulse"></div>
                <div className="absolute -bottom-10 -left-10 w-24 h-24 bg-gradient-to-r from-pink-400 to-orange-500 rounded-full opacity-20 animate-pulse delay-1000"></div>

                {/* Main profile image container */}
                <div className="relative bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 p-1 rounded-3xl">
                  <div className="bg-white p-2 rounded-3xl">
                    <Image
                      src="/Me.jpg"
                      alt="Profile Photo"
                      width={500}
                      height={500}
                      className="w-full h-[500px] object-cover rounded-2xl"
                    />
                  </div>
                </div>

                {/* Floating elements */}
                <div className="absolute top-4 -left-4 bg-white p-3 rounded-xl shadow-lg border animate-bounce">
                  <div className="text-yellow-500">
                    <LightbulbIcon />
                  </div>
                </div>
                <div className="absolute bottom-4 -right-4 bg-white p-3 rounded-xl shadow-lg border animate-bounce delay-500">
                  <div className="text-red-500">
                    <HeartIcon />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center">
          <div className="space-y-6 sm:space-y-8">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white">
              Ready to Work Together?
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-white/90 max-w-2xl mx-auto">
              Let&apos;s create something amazing together. Whether it&apos;s a
              new project or collaboration, I&apos;m always excited to discuss
              new opportunities
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center max-w-md sm:max-w-none mx-auto">
              <a
                href="mailto:mk772542@gmail.com"
                className="bg-white text-gray-900 px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold hover:bg-gray-100 transition-colors shadow-lg hover:shadow-xl transform hover:scale-105 flex items-center justify-center"
                aria-label="Get In Touch"
              >
                Get In Touch
              </a>
              <a
                href="#projects"
                className="border-2 border-white text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold hover:bg-white hover:text-gray-900 transition-colors transform hover:scale-105 flex items-center justify-center"
                aria-label="View My Work"
              >
                View My Work
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
