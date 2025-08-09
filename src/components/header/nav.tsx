"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { Button } from "../ui/button";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState("0px");
  const [active, setActive] = useState("home");

  // Smooth scroll effect
  useEffect(() => {
    if (typeof window !== "undefined") {
      document.documentElement.style.scrollBehavior = "smooth";
    }
  }, []);

  useEffect(() => {
    if (dropdownRef.current) {
      setHeight(isOpen ? `${dropdownRef.current.scrollHeight}px` : "0px");
    }
  }, [isOpen]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const linkClasses = (menuItem: string) =>
    `hover:text-blue-600 dark:hover:text-blue-400 cursor-pointer ${
      active === menuItem
        ? "text-blue-600 font-semibold"
        : "text-gray-800 dark:text-white"
    }`;

  // Menu items
  const menuItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "projects", label: "Projects" },
    { id: "services", label: "Services" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <>
      <nav className="fixed top-0 left-0 w-full bg-white shadow dark:bg-gray-900 z-50">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <a href="#home" className="flex items-center cursor-pointer">
              <Image src="/logo.svg" alt="Logo" width={32} height={32} />
              <span className="ml-3 text-xl font-bold text-gray-800 dark:text-white">
                Manish Kumar
              </span>
            </a>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center space-x-8">
              {menuItems.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={() => setActive(item.id)}
                  className={linkClasses(item.id)}
                >
                  {item.label}
                </a>
              ))}
            </div>

            {/* Desktop Admin Button */}
            <div className="hidden lg:block">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white cursor-not-allowed">
                Get Started <span className="ml-1 text-sm">| Only Admin |</span>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition"
                aria-label="Toggle menu"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  {isOpen ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        <div
          ref={dropdownRef}
          className={`lg:hidden px-4 pb-4 space-y-4 bg-gray-50 dark:bg-gray-800 text-center overflow-hidden transition-all duration-300 ease-in-out ${
            isOpen ? "block" : "hidden"
          }`}
          style={{ height: isOpen ? height : 0 }}
        >
          {menuItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={() => {
                setActive(item.id);
                setIsOpen(false); // close menu on link click (optional)
              }}
              className={linkClasses(item.id) + " block"}
            >
              {item.label}
            </a>
          ))}

          {/* Mobile Admin Button */}
          <div className="flex justify-center">
            <Button className="bg-blue-600 hover:bg-blue-700 text-white cursor-not-allowed">
              Get Started <span className="ml-1 text-sm">| Only Admin |</span>
            </Button>
          </div>
        </div>
      </nav>

      {/* Spacer */}
      <div className="h-16"></div>
    </>
  );
}
