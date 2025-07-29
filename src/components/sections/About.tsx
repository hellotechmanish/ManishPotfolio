"use client";

import React, { useState, useEffect } from "react";
import {
  AreaChart,
  Globe,
  Heart,
  Lightbulb,
  ShieldCheck,
  Users,
  Github,
  Linkedin,
  Twitter,
  Instagram,
  Mail,
  MapPin,
  Calendar,
  Star,
  ExternalLink,
} from "lucide-react";
import Image from 'next/image';

// Types
type CompanyValue = {
  id: string;
  name: string;
  description: string;
  icon: React.ElementType;
  color: string;
  bgColor: string;
  principles: string[];
  testimonial?: {
    quote: string;
    author: string;
    role: string;
    image: string;
  };
  image?: string;
  stats?: {
    label: string;
    value: string;
  };
};

// Company values data
const companyValues: CompanyValue[] = [
  {
    id: "innovation",
    name: "Innovation",
    description:
      "We constantly push boundaries and challenge the status quo, fostering a culture where creative thinking and experimentation are encouraged at all levels.",
    icon: Lightbulb,
    color: "text-amber-500",
    bgColor: "bg-amber-50 dark:bg-amber-950/20",
    principles: [
      "Embrace experimentation and calculated risk-taking",
      "Challenge assumptions and existing processes",
      "Dedicate time and resources to exploring new ideas",
      "Learn from failures and iterate quickly",
    ],
    testimonial: {
      quote:
        "Working in an environment that truly values innovation isn't just about having the latest technology—it's about feeling empowered to question, experiment, and sometimes fail.",
      author: "Alex Chen",
      role: "Lead Product Engineer",
      image:
        "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?q=80&w=400",
    },
    image:
      "https://images.unsplash.com/photo-1534120247760-c44c3e4a62f1?q=80&w=800",
    stats: { label: "Innovation Projects", value: "150+" },
  },
  {
    id: "integrity",
    name: "Integrity",
    description:
      "We believe in transparency, honesty, and ethical conduct in everything we do. Trust is the foundation of our relationships with customers, partners, and each other.",
    icon: ShieldCheck,
    color: "text-blue-500",
    bgColor: "bg-blue-50 dark:bg-blue-950/20",
    principles: [
      "Be honest and transparent in all communications",
      "Do what's right, even when it's difficult",
      "Keep commitments and take accountability for mistakes",
      "Protect private data and confidential information",
    ],
    testimonial: {
      quote:
        "In my ten years with the company, I've seen us turn down lucrative opportunities that didn't align with our ethical standards. That consistent commitment to integrity isn't just good ethics—it's built an unparalleled level of trust.",
      author: "Sarah Johnson",
      role: "Senior Account Director",
      image:
        "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?q=80&w=400",
    },
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=800",
    stats: { label: "Trust Score", value: "98%" },
  },
  {
    id: "collaboration",
    name: "Collaboration",
    description:
      "We achieve more together than alone. By combining diverse perspectives and skills, we create solutions that are stronger and more innovative.",
    icon: Users,
    color: "text-indigo-500",
    bgColor: "bg-indigo-50 dark:bg-indigo-950/20",
    principles: [
      "Value and seek diverse perspectives",
      "Share knowledge openly across teams",
      "Give credit and celebrate team achievements",
      "Support colleagues and prioritize team success",
    ],
    testimonial: {
      quote:
        "The collaborative spirit here isn't just talk—it's built into how we work. Even as we've grown globally, we've maintained a culture where everyone's input is valued.",
      author: "Miguel Hernandez",
      role: "Global Operations Manager",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400",
    },
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=800",
    stats: { label: "Team Projects", value: "500+" },
  },
  {
    id: "customer-focus",
    name: "Customer Focus",
    description:
      "Our customers are at the center of everything we do. We're committed to understanding their needs and building lasting relationships based on mutual success.",
    icon: Heart,
    color: "text-red-500",
    bgColor: "bg-red-50 dark:bg-red-950/20",
    principles: [
      "Deeply understand customer needs and pain points",
      "Prioritize features that deliver true customer value",
      "Proactively gather and implement customer feedback",
      "Measure success through customer outcomes",
    ],
    testimonial: {
      quote:
        "I've been amazed at how customer feedback directly shapes our product roadmap. Customer success genuinely drives every decision from product features to support policies.",
      author: "Avery Wilson",
      role: "Customer Success Lead",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=400",
    },
    image:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=800",
    stats: { label: "Customer Satisfaction", value: "96%" },
  },
  {
    id: "excellence",
    name: "Excellence",
    description:
      "We strive for excellence in everything we do, setting high standards and continuously working to exceed them through learning and improvement.",
    icon: AreaChart,
    color: "text-emerald-500",
    bgColor: "bg-emerald-50 dark:bg-emerald-950/20",
    principles: [
      "Set ambitious goals and high standards",
      "Pursue continuous improvement through feedback",
      "Pay attention to details without losing sight of the big picture",
      "Take pride in delivering exceptional quality",
    ],
    testimonial: {
      quote:
        "The most inspiring thing about working here is how everyone strives for excellence while remaining humble. There's always a sense that we can do better—from genuine passion for creating the best possible experience.",
      author: "Jordan Taylor",
      role: "Quality Assurance Director",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400",
    },
    image:
      "https://images.unsplash.com/photo-1515187029135-18ee286d815b?q=80&w=800",
    stats: { label: "Quality Score", value: "99.2%" },
  },
  {
    id: "sustainability",
    name: "Sustainability",
    description:
      "We are committed to creating a positive environmental and social impact, considering long-term sustainability in all our business decisions.",
    icon: Globe,
    color: "text-green-500",
    bgColor: "bg-green-50 dark:bg-green-950/20",
    principles: [
      "Minimize environmental impact in operations and products",
      "Support community initiatives and social causes",
      "Consider long-term sustainability in all business decisions",
      "Measure and report on environmental and social performance",
    ],
    testimonial: {
      quote:
        "When we announced our carbon-neutral initiative, I wasn't sure if it would be more than a marketing exercise. Three years later, we've reduced emissions by 68% and built sustainability into our entire supply chain.",
      author: "Priya Patel",
      role: "Sustainability Program Manager",
      image:
        "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=400",
    },
    image:
      "https://images.unsplash.com/photo-1536859355448-76f92ebdc33d?q=80&w=800",
    stats: { label: "Carbon Reduction", value: "68%" },
  },
];

const socialLinks = [
  {
    name: "GitHub",
    icon: Github,
    url: "https://github.com/yourusername",
    color: "hover:text-gray-900",
    followers: "2.5k",
  },
  {
    name: "LinkedIn",
    icon: Linkedin,
    url: "https://linkedin.com/in/yourprofile",
    color: "hover:text-blue-600",
    followers: "5.2k",
  },
  {
    name: "Twitter",
    icon: Twitter,
    url: "https://twitter.com/yourusername",
    color: "hover:text-blue-400",
    followers: "3.1k",
  },
  {
    name: "Instagram",
    icon: Instagram,
    url: "https://instagram.com/yourusername",
    color: "hover:text-pink-500",
    followers: "1.8k",
  },
];

export default function About() {
  const [activeValue] = useState<string>(companyValues[0].id);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // setActiveValue()
  // Get active value object
  const currentValue =
    companyValues.find((value) => value.id === activeValue) || companyValues[0];

  console.log(currentValue);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {/* Hero Section with Social Presence */}
      <section id='#about' className="relative overflow-hidden py-20">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-pink-600/10 animate-pulse"></div>
        <div className="container mx-auto px-4 md:px-6 2xl:max-w-[1400px] relative">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Column - Personal Info */}
            <div
              className={`space-y-8 transform transition-all duration-1000 ${isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
                }`}
            >
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-medium">
                  <Star className="w-4 h-4" />
                  About Me
                </div>
                <h1 className="text-5xl lg:text-6xl font-bold bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 bg-clip-text text-transparent leading-tight">
                  Building the Future, One Project at a Time
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Passionate developer and innovator dedicated to creating
                  meaningful solutions that make a difference. Based in San
                  Francisco, working with teams globally.
                </p>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-3 gap-6">
                <div className="text-center p-4 bg-white rounded-xl shadow-sm border">
                  <div className="text-2xl font-bold text-blue-600">5+</div>
                  <div className="text-sm text-gray-600">Years Experience</div>
                </div>
                <div className="text-center p-4 bg-white rounded-xl shadow-sm border">
                  <div className="text-2xl font-bold text-purple-600">100+</div>
                  <div className="text-sm text-gray-600">
                    Projects Completed
                  </div>
                </div>
                <div className="text-center p-4 bg-white rounded-xl shadow-sm border">
                  <div className="text-2xl font-bold text-green-600">50+</div>
                  <div className="text-sm text-gray-600">Happy Clients</div>
                </div>
              </div>

              {/* Contact Info */}
              <div className="flex flex-wrap gap-4 text-gray-600">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-red-500" />
                  <span>San Francisco, CA</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-blue-500" />
                  <span>Available for Projects</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-green-500" />
                  <a
                    href="mailto:hello@yourname.com"
                    className="hover:text-blue-600 transition-colors"
                  >
                    hello@yourname.com
                  </a>
                </div>
              </div>

              {/* Social Links */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-900">
                  Connect with me
                </h3>
                <div className="flex gap-4">
                  {socialLinks.map((social) => (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`group flex items-center gap-3 p-3 bg-white rounded-xl shadow-sm border hover:shadow-md transition-all duration-300 ${social.color}`}
                    >
                      <social.icon className="w-5 h-5 transition-transform group-hover:scale-110" />
                      <div className="text-left">
                        <div className="font-medium text-sm">{social.name}</div>
                        <div className="text-xs text-gray-500">
                          {social.followers} followers
                        </div>
                      </div>
                      <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column - Profile Image */}
            <div
              className={`relative transform transition-all duration-1000 delay-300 ${isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
                }`}
            >
              <div className="relative">
                {/* Background decorative elements */}
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full opacity-20 animate-pulse"></div>
                <div className="absolute -bottom-10 -left-10 w-24 h-24 bg-gradient-to-r from-pink-400 to-orange-500 rounded-full opacity-20 animate-pulse delay-1000"></div>

                {/* Main profile image container */}
                <div className="relative bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 p-1 rounded-3xl">
                  <div className="bg-white p-2 rounded-3xl">
                    <Image
                      src="/Me.jpg"
                      alt="Your Profile Photo"
                      width={500}
                      height={500}
                      className="w-full h-[500px] object-cover rounded-2xl"
                    />
                  </div>
                </div>

                {/* Floating elements */}
                <div className="absolute top-4 -left-4 bg-white p-3 rounded-xl shadow-lg border animate-bounce">
                  <Lightbulb className="w-6 h-6 text-yellow-500" />
                </div>
                <div className="absolute bottom-4 -right-4 bg-white p-3 rounded-xl shadow-lg border animate-bounce delay-500">
                  <Heart className="w-6 h-6 text-red-500" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Values Section */}
      {/* <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6 2xl:max-w-[1400px]">
          <div className="mx-auto mb-16 max-w-3xl space-y-4 text-center">
            <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white inline-block rounded-full px-4 py-2 text-sm font-medium">
              Core Values
            </div>
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 bg-clip-text text-transparent">
              What Guides Our Decisions
            </h2>
            <p className="text-xl text-gray-600">
              Our values aren't just words on a wall—they're the principles that guide our daily actions and long-term vision.
            </p>
          </div>

          <div className="mb-12 flex justify-center">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-4xl">
              {companyValues.map((value) => (
                <button
                  key={value.id}
                  onClick={() => setActiveValue(value.id)}
                  className={`group relative p-4 rounded-2xl transition-all duration-300 transform hover:scale-105 ${
                    activeValue === value.id
                      ? `${value.bgColor} shadow-lg scale-105`
                      : 'bg-gray-50 hover:bg-gray-100'
                  }`}
                >
                  <div className="flex flex-col items-center gap-3">
                    <div className={`p-3 rounded-xl ${activeValue === value.id ? 'bg-white shadow-sm' : 'bg-white/50'}`}>
                      <value.icon className={`w-6 h-6 ${value.color}`} />
                    </div>
                    <span className={`text-sm font-medium ${activeValue === value.id ? 'text-gray-900' : 'text-gray-600'}`}>
                      {value.name}
                    </span>
                    {value.stats && (
                      <div className="text-xs text-gray-500">{value.stats.value}</div>
                    )}
                  </div>
                </button>
              ))}
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className={`p-4 rounded-2xl ${currentValue.bgColor}`}>
                    <currentValue.icon className={`w-8 h-8 ${currentValue.color}`} />
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-gray-900">{currentValue.name}</h3>
                    {currentValue.stats && (
                      <div className="text-lg text-gray-600">{currentValue.stats.label}: {currentValue.stats.value}</div>
                    )}
                  </div>
                </div>

                <p className="text-lg text-gray-600 leading-relaxed">
                  {currentValue.description}
                </p>
              </div>

              <div className="space-y-4">
                <h4 className="text-xl font-semibold text-gray-900">Key Principles:</h4>
                <div className="space-y-3">
                  {currentValue.principles.map((principle, i) => (
                    <div key={i} className="flex items-start gap-3 group">
                      <div className={`mt-1 p-1 rounded-full ${currentValue.bgColor} group-hover:scale-110 transition-transform`}>
                        <ArrowUpRight className={`w-4 h-4 ${currentValue.color}`} />
                      </div>
                      <span className="text-gray-700 group-hover:text-gray-900 transition-colors">{principle}</span>
                    </div>
                  ))}
                </div>
              </div>

              {currentValue.testimonial && (
                <div className={`p-6 rounded-2xl ${currentValue.bgColor} border-l-4`} style={{borderLeftColor: currentValue.color.replace('text-', '')}}>
                  <div className="flex items-start gap-4 mb-4">
                    <img
                      src={currentValue.testimonial.image}
                      alt={currentValue.testimonial.author}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <h5 className="font-semibold text-gray-900">{currentValue.testimonial.author}</h5>
                      <p className="text-sm text-gray-600">{currentValue.testimonial.role}</p>
                    </div>
                  </div>
                  <p className="text-gray-700 italic">"{currentValue.testimonial.quote}"</p>
                </div>
              )}
            </div>

            <div className="relative">
              <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                <img
                  src={currentValue.image}
                  alt={`${currentValue.name} illustration`}
                  className="w-full h-[500px] object-cover transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="bg-white/90 backdrop-blur-sm rounded-xl p-4">
                    <div className="flex items-center gap-3">
                      <currentValue.icon className={`w-6 h-6 ${currentValue.color}`} />
                      <div>
                        <h4 className="font-bold text-gray-900">{currentValue.name}</h4>
                        {currentValue.stats && (
                          <p className="text-sm text-gray-600">{currentValue.stats.label}: {currentValue.stats.value}</p>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600">
        <div className="container mx-auto px-4 md:px-6 2xl:max-w-[1400px] text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              Ready to Work Together?
            </h2>
            <p className="text-xl text-white/90">
              These values guide every aspect of our work. Want to be part of a
              team that lives these values every day?
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-gray-900 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-colors shadow-lg hover:shadow-xl transform hover:scale-105">
                Get In Touch
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-gray-900 transition-colors transform hover:scale-105">
                View My Work
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
