// src/components/static/services.tsx

import {
  Code2,
  Palette,
  Smartphone,
  Settings,
  Server,
  LayoutDashboard,
  Bot,
  CreditCard,
  ShieldCheck,
} from "lucide-react";

export const services = [
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
    technologies: ["Figma", "Adobe XD", "Sketch", "InVision"],
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
      "Develop native and cross-platform mobile applications for iOS and Android.",
    icon: Smartphone,
    color: "from-green-500 to-teal-600",
    bgColor: "from-green-50 to-teal-100",
    features: [
      "React Native Apps",
      "Flutter Apps",
      "Push Notifications",
      "Offline Support",
      "App Store Deployment",
    ],
    technologies: ["React Native", "Flutter", "Firebase"],
    pricing: "Starting from $3,500",
    deliveryTime: "6-10 weeks",
    image:
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=800&h=600&fit=crop",
  },

  {
    id: "backend-api",
    title: "Backend & API Development",
    subtitle: "Scalable Server Systems",
    description:
      "Design and build secure, fast, and scalable backend systems with REST APIs.",
    icon: Server,
    color: "from-cyan-500 to-blue-600",
    bgColor: "from-cyan-50 to-blue-100",
    features: [
      "REST API Development",
      "Authentication & Authorization",
      "Database Architecture",
      "JWT Security",
      "High Performance APIs",
    ],
    technologies: ["Node.js", "Express", "MongoDB", "PostgreSQL", "JWT"],
    pricing: "Starting from $1,800",
    deliveryTime: "2-5 weeks",
    image:
      "https://images.unsplash.com/photo-1555949963-aa79dcee981c?q=80&w=800&h=600&fit=crop",
  },

  {
    id: "admin-dashboard",
    title: "Admin Dashboard Systems",
    subtitle: "Control Panels",
    description:
      "Powerful admin dashboards with analytics and role-based access.",
    icon: LayoutDashboard,
    color: "from-emerald-500 to-green-700",
    bgColor: "from-emerald-50 to-green-100",
    features: [
      "Role Based Access (RBAC)",
      "User Management",
      "Reports & Analytics",
      "Secure Admin Panels",
    ],
    technologies: ["Next.js", "React", "Node.js", "MongoDB", "Tailwind"],
    pricing: "Starting from $2,200",
    deliveryTime: "3-6 weeks",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&h=600&fit=crop",
  },

  {
    id: "ai-automation",
    title: "AI & Automation",
    subtitle: "Smart Systems",
    description:
      "AI powered automation and smart workflows using modern AI APIs.",
    icon: Bot,
    color: "from-purple-600 to-indigo-700",
    bgColor: "from-purple-50 to-indigo-100",
    features: [
      "AI API Integration",
      "Automation Systems",
      "Chatbots",
      "Smart Workflows",
    ],
    technologies: ["Gemini API", "Python", "Node.js"],
    pricing: "Starting from $2,500",
    deliveryTime: "4-7 weeks",
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=800&h=600&fit=crop",
  },

  {
    id: "payment-integration",
    title: "Payment Integration",
    subtitle: "Secure Payments",
    description:
      "Integrate Stripe and Razorpay for safe and smooth online payments.",
    icon: CreditCard,
    color: "from-rose-500 to-pink-600",
    bgColor: "from-rose-50 to-pink-100",
    features: [
      "Stripe Integration",
      "Razorpay Integration",
      "Payment Verification",
      "Webhook Handling",
    ],
    technologies: ["Stripe", "Razorpay", "Node.js"],
    pricing: "Starting from $900",
    deliveryTime: "1-2 weeks",
    image:
      "https://images.unsplash.com/photo-1605902711622-cfb43c44367f?q=80&w=800&h=600&fit=crop",
  },

  {
    id: "auth-security",
    title: "Authentication & Security",
    subtitle: "Secure Access",
    description:
      "Strong authentication systems with OTP, JWT, and role-based access.",
    icon: ShieldCheck,
    color: "from-red-500 to-orange-600",
    bgColor: "from-red-50 to-orange-100",
    features: [
      "JWT Auth",
      "OTP Login",
      "Password Encryption",
      "Role Based Access",
    ],
    technologies: ["JWT", "Node.js", "bcrypt", "Nodemailer"],
    pricing: "Starting from $700",
    deliveryTime: "1-2 weeks",
    image:
      "https://images.unsplash.com/photo-1555949963-6c07c1c96f6b?q=80&w=800&h=600&fit=crop",
  },

  {
    id: "maintenance",
    title: "Website Maintenance",
    subtitle: "Ongoing Support",
    description: "Keep your website secure, updated, and running smoothly.",
    icon: Settings,
    color: "from-gray-600 to-gray-800",
    bgColor: "from-gray-50 to-gray-100",
    features: [
      "Security Updates",
      "Bug Fixes",
      "Performance Monitoring",
      "Content Updates",
    ],
    technologies: ["Git", "Monitoring Tools", "SSL"],
    pricing: "Starting from $500/month",
    deliveryTime: "Ongoing",
    image:
      "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?q=80&w=800&h=600&fit=crop",
  },
];

export default services;
