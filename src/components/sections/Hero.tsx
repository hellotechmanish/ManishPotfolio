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
import Image from "next/image";

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
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-r from-blue-400/20 to-purple-600/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-r from-pink-400/20 to-orange-600/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 w-full py-20 grid grid-cols-1 lg:grid-cols-2 items-center gap-10 px-6 md:px-20 min-h-screen">
        {/* Profile Image (Mobile: First, Large: Second) */}
        <div
          className={`flex justify-center lg:justify-end transform transition-all duration-1000 delay-300 order-1 lg:order-2 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <div className="relative group">
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 opacity-20 scale-110 group-hover:scale-125 transition-transform duration-500 animate-pulse"></div>
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500 to-pink-600 opacity-15 scale-125 group-hover:scale-140 transition-transform duration-700 animate-pulse delay-300"></div>
            <div className="relative bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 p-1 rounded-full group-hover:scale-105 transition-transform duration-500">
              <div className="bg-white p-2 rounded-full">
                <Image
                  className="rounded-full w-48 h-48 md:w-72 md:h-72 lg:w-96 lg:h-96 object-cover shadow-2xl group-hover:scale-105 transition-transform duration-500"
                  src="/About_me_img1.png"
                  alt="Manish Kumar - Full Stack Developer"
                  width={400}
                  height={400}
                />
              </div>
            </div>
            <div className="absolute -top-4 -right-4 bg-gradient-to-r from-green-400 to-green-600 text-white px-3 py-1 rounded-full text-sm font-semibold animate-bounce shadow-lg">
              Available
            </div>
            <div className="absolute -bottom-4 -left-4 bg-gradient-to-r from-orange-400 to-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold animate-bounce delay-500 shadow-lg">
              5+ Years
            </div>
          </div>
        </div>

        {/* Text Section (Mobile: Second, Large: First) */}
        <div
          className={`text-center lg:text-left space-y-8 transform transition-all duration-1000 order-2 lg:order-1 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <div className="flex items-center gap-2 justify-center lg:justify-start">
            <Sparkles className="w-6 h-6 text-yellow-500 animate-pulse" />
            <span className="text-lg text-gray-600 font-medium">
              Hello, I&apos;m
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
            <span className="inline-block animate-pulse bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-gradient-x">
              Manish Kumar
            </span>
          </h1>

          <div className="h-16 flex items-center justify-center lg:justify-start relative overflow-hidden">
            {roles.map((role, index) => (
              <span
                key={role}
                className={`absolute transition-all duration-500 ${
                  index === currentRole
                    ? "translate-y-0 opacity-100"
                    : index < currentRole
                    ? "-translate-y-full opacity-0"
                    : "translate-y-full opacity-0"
                }`}
              >
                {role}
              </span>
            ))}
          </div>

          <p className="text-lg text-gray-600 max-w-lg mx-auto lg:mx-0 leading-relaxed">
            Passionate about creating beautiful, functional, and user-friendly
            digital experiences. Let&apos;s bring your ideas to life with modern
            web technologies.
          </p>

          <div className="flex gap-2 justify-center lg:justify-start p-2">
            <div className="flex items-center gap-1 bg-white/80 px-3 py-1.5 rounded-full shadow-sm border">
              <Code className="w-4 h-4 text-blue-600" />
              <span className="text-xs font-medium">Development</span>
            </div>
            <div className="flex items-center gap-1 bg-white/80 px-3 py-1.5 rounded-full shadow-sm border">
              <Palette className="w-4 h-4 text-purple-600" />
              <span className="text-xs font-medium">Design</span>
            </div>
            <div className="flex items-center gap-1 bg-white/80 px-3 py-1.5 rounded-full shadow-sm border">
              <Briefcase className="w-4 h-4 text-green-600" />
              <span className="text-xs font-medium">Freelance</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <a
              href="#contact"
              className="group relative inline-flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
            >
              <Mail className="w-5 h-5 group-hover:animate-bounce" />
              Let&apos;s Connect
            </a>
            <a
              href="Image/my_resume_3_0.pdf"
              download
              className="group inline-flex items-center justify-center gap-2 bg-white text-gray-800 px-8 py-4 rounded-full border-2 border-gray-200 hover:border-gray-300 hover:shadow-lg transition-all duration-300 transform hover:scale-105"
            >
              <Download className="w-5 h-5 group-hover:animate-bounce" />
              Download CV
            </a>
          </div>

          <div className="flex gap-4 justify-center lg:justify-start pt-4">
            <a
              href="https://github.com/hellotechmanish"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-3 bg-white/80 rounded-full shadow-sm border hover:shadow-md hover:scale-110 transition-all duration-300"
            >
              <Github className="w-5 h-5 text-gray-700 group-hover:text-black" />
            </a>
            <a
              href="https://linkedin.com/in/manishkumar"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-3 bg-white/80 rounded-full shadow-sm border hover:shadow-md hover:scale-110 transition-all duration-300"
            >
              <Linkedin className="w-5 h-5 text-gray-700 group-hover:text-blue-600" />
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-6 h-6 text-gray-400" />
      </div>

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
