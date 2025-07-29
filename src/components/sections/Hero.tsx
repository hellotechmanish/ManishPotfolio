"use client";

import React, { useState, useEffect } from "react";
import {
  ChevronDown,
  Github,
  Linkedin,
  Mail,
  Download,
  Sparkles,
  Code,
  Palette,
  Briefcase,
} from "lucide-react";
import Image from 'next/image';

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);
  const [currentRole, setCurrentRole] = useState(0);

  const roles = [
    "Full Stack Developer",
    "Web Designer",
    "Freelancer",
    "UI/UX Designer",
  ];

  useEffect(() => {
    setIsVisible(true);

    // Rotate roles every 3 seconds
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [roles.length]);

  return (
    <section
      id="hero"
      className="relative min-h-screen w-full overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-r from-blue-400/20 to-purple-600/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-r from-pink-400/20 to-orange-600/20 rounded-full blur-3xl animate-pulse delay-1000"></div>

        {/* Floating particles */}
        <div className="absolute top-20 left-20 w-2 h-2 bg-blue-500 rounded-full animate-bounce"></div>
        <div className="absolute top-40 right-32 w-3 h-3 bg-purple-500 rounded-full animate-bounce delay-300"></div>
        <div className="absolute bottom-32 left-32 w-2 h-2 bg-pink-500 rounded-full animate-bounce delay-700"></div>
        <div className="absolute bottom-20 right-20 w-3 h-3 bg-orange-500 rounded-full animate-bounce delay-1000"></div>
      </div>

      <div className="relative z-10 w-full py-20 grid grid-cols-1 lg:grid-cols-2 items-center gap-10 px-6 md:px-20 min-h-screen">
        {/* Left Section */}
        <div
          className={`text-center lg:text-left space-y-8 transform transition-all duration-1000 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
        >
          {/* Greeting with icon */}
          <div className="flex items-center gap-2 justify-center lg:justify-start">
            <Sparkles className="w-6 h-6 text-yellow-500 animate-pulse" />
            <span className="text-lg text-gray-600 font-medium">
              Hello, I&apos;m
            </span>
          </div>

          {/* Animated Name */}
          <div className="space-y-4">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
              <span className="inline-block animate-pulse">
                <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-gradient-x">
                  Manish Kumar
                </span>
              </span>
            </h1>

            {/* Animated Role */}
            <div className="h-16 flex items-center justify-center lg:justify-start">
              <div className="relative overflow-hidden">
                <p className="text-xl md:text-2xl text-gray-600 font-medium transform transition-all duration-500">
                  {roles.map((role, index) => (
                    <span
                      key={role}
                      className={`absolute inset-0 transform transition-all duration-500 ${index === currentRole
                          ? "translate-y-0 opacity-100"
                          : index < currentRole
                            ? "-translate-y-full opacity-0"
                            : "translate-y-full opacity-0"
                        }`}
                    >
                      {role}
                    </span>
                  ))}
                  <span className="opacity-0">{roles[0]}</span>
                </p>
              </div>
            </div>
          </div>

          {/* Description */}
          <p className="text-lg text-gray-600 max-w-lg mx-auto lg:mx-0 leading-relaxed">
            Passionate about creating beautiful, functional, and user-friendly
            digital experiences. Let&apos;s bring your ideas to life with modern web
            technologies.
          </p>

          {/* Skills icons */}
          <div className="flex gap-4 justify-center lg:justify-start">
            <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm border">
              <Code className="w-4 h-4 text-blue-600" />
              <span className="text-sm font-medium">Development</span>
            </div>
            <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm border">
              <Palette className="w-4 h-4 text-purple-600" />
              <span className="text-sm font-medium">Design</span>
            </div>
            <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm border">
              <Briefcase className="w-4 h-4 text-green-600" />
              <span className="text-sm font-medium">Freelance</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <a
              href="#contact"
              className="group relative inline-flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
            >
              <Mail className="w-5 h-5 group-hover:animate-bounce" />
              Let&apos;s Connect
            </a>

            <a
              href="/resume.pdf"
              download
              className="group inline-flex items-center justify-center gap-2 bg-white text-gray-800 px-8 py-4 rounded-full border-2 border-gray-200 hover:border-gray-300 hover:shadow-lg transition-all duration-300 transform hover:scale-105"
            >
              <Download className="w-5 h-5 group-hover:animate-bounce" />
              Download CV
            </a>
          </div>

          {/* Social Links */}
          <div className="flex gap-4 justify-center lg:justify-start pt-4">
            <a
              href="https://github.com/manishkumar"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-3 bg-white/80 backdrop-blur-sm rounded-full shadow-sm border hover:shadow-md hover:scale-110 transition-all duration-300"
            >
              <Github className="w-5 h-5 text-gray-700 group-hover:text-black" />
            </a>
            <a
              href="https://linkedin.com/in/manishkumar"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-3 bg-white/80 backdrop-blur-sm rounded-full shadow-sm border hover:shadow-md hover:scale-110 transition-all duration-300"
            >
              <Linkedin className="w-5 h-5 text-gray-700 group-hover:text-blue-600" />
            </a>
            {/* <a
              href="mailto:manish@example.com"
              className="group p-3 bg-white/80 backdrop-blur-sm rounded-full shadow-sm border hover:shadow-md hover:scale-110 transition-all duration-300"
            >
              <Mail className="w-5 h-5 text-gray-700 group-hover:text-red-500" />
            </a> */}
          </div>
        </div>

        {/* Right Section */}
        <div
          className={`flex justify-center lg:justify-end transform transition-all duration-1000 delay-300 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
        >
          <div className="relative group">
            {/* Decorative rings */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 opacity-20 scale-110 group-hover:scale-125 transition-transform duration-500 animate-pulse"></div>
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500 to-pink-600 opacity-15 scale-125 group-hover:scale-140 transition-transform duration-700 animate-pulse delay-300"></div>

            {/* Profile image container */}
            <div className="relative bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 p-1 rounded-full group-hover:scale-105 transition-transform duration-500">
              <div className="bg-white p-2 rounded-full">
                <Image
                  className="rounded-full w-72 h-72 md:w-96 md:h-96 object-cover shadow-2xl group-hover:scale-105 transition-transform duration-500"
                  src="/About_me_img1.png"
                  alt="Manish Kumar - Full Stack Developer"
                />
              </div>
            </div>

            {/* Floating badges */}
            <div className="absolute -top-4 -right-4 bg-gradient-to-r from-green-400 to-green-600 text-white px-3 py-1 rounded-full text-sm font-semibold animate-bounce shadow-lg">
              Available
            </div>
            <div className="absolute -bottom-4 -left-4 bg-gradient-to-r from-orange-400 to-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold animate-bounce delay-500 shadow-lg">
              5+ Years
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-6 h-6 text-gray-400" />
      </div>

      {/* Custom styles for gradient animation */}
      <style jsx>{`
        @keyframes gradient-x {
          0%,
          100% {
            background-size: 200% 200%;
            background-position: left center;
          }
          50% {
            background-size: 200% 200%;
            background-position: right center;
          }
        }

        .animate-gradient-x {
          animation: gradient-x 3s ease infinite;
        }
      `}</style>
    </section>
  );
}
