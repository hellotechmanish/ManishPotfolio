"use client";

import React, { useState, useEffect } from 'react';
import { 
  ExternalLink, 
  Github, 
  Star, 
  Award,
  Heart,
  Eye,
  ArrowRight,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';

// TypeScript interfaces for better type safety
interface ProjectLink {
  live?: string;
  github?: string;
  case_study?: string;
}

interface Project {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  type: string;
  technologies: string[];
  status: string;
  client: string;
  links: ProjectLink;
  featured: boolean;
  awards?: string[];
}

interface ProjectsData {
  featured: {
    title: string;
    subtitle: string;
    description: string;
  };
  stats: {
    totalProjects: number;
    clientSatisfaction: string;
    technologiesUsed: number;
    yearsExperience: number;
  };
  projects: Project[];
}

const Projects = () => {
  // Demo data - replace with your database calls
  const projectsData: ProjectsData = {
    featured: {
      title: "Featured Projects",
      subtitle: "Showcasing my best work and recent achievements",
      description: "A collection of projects that demonstrate my expertise in modern web development, mobile apps, and creative solutions."
    },
    stats: {
      totalProjects: 47,
      clientSatisfaction: "98%",
      technologiesUsed: 25,
      yearsExperience: 5
    },
    projects: [
      {
        id: 1,
        title: "E-Commerce Platform",
        description: "Full-stack e-commerce solution with advanced analytics, inventory management, and payment integration. Built for scalability and performance.",
        longDescription: "A comprehensive e-commerce platform built with Next.js and Node.js, featuring real-time inventory tracking, advanced analytics dashboard, multiple payment gateways, and AI-powered product recommendations.",
        image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop",
        type: 'Full Stack Development',
        technologies: ['Next.js', 'Node.js', 'PostgreSQL', 'Stripe', 'Redis', 'AWS'],
        status: 'Live',
        client: 'RetailCorp Inc.',
        links: {
          live: 'https://demo-ecommerce.com',
          github: 'https://github.com/user/ecommerce',
          case_study: '#'
        },
        featured: true,
        awards: ['Best E-commerce Solution 2024']
      },
      {
        id: 2,
        title: "Healthcare Mobile App",
        description: "React Native app for healthcare providers with patient management, appointment scheduling, and telemedicine features.",
        longDescription: "A comprehensive healthcare mobile application that connects patients with healthcare providers. Features include secure video consultations, prescription management, health tracking, and emergency services integration.",
        image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=800&h=600&fit=crop",
        type: 'Mobile Development',
        technologies: ['React Native', 'Firebase', 'WebRTC', 'HealthKit', 'Node.js'],
        status: 'Live',
        client: 'HealthTech Solutions',
        links: {
          live: 'https://app.healthtech.com',
          github: 'https://github.com/user/healthcare-app'
        },
        featured: true,
        awards: ['Healthcare Innovation Award 2024']
      },
      {
        id: 3,
        title: "Financial Dashboard",
        description: "Advanced analytics dashboard for financial institutions with real-time data visualization and reporting capabilities.",
        longDescription: "A sophisticated financial dashboard providing real-time market data, portfolio analysis, risk assessment, and automated reporting. Built with modern charting libraries and optimized for high-frequency data updates.",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
        type: 'Data Visualization',
        technologies: ['React', 'D3.js', 'Python', 'FastAPI', 'WebSockets', 'Docker'],
        status: 'Live',
        client: 'FinanceFlow Corp',
        links: {
          live: 'https://dashboard.financeflow.com',
          case_study: '#'
        },
        featured: false
      },
      {
        id: 4,
        title: "Social Media Platform",
        description: "Modern social networking platform with real-time messaging, content sharing, and community features.",
        longDescription: "A full-featured social media platform with real-time chat, story sharing, advanced privacy controls, and AI-powered content moderation. Supports millions of users with high availability.",
        image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&h=600&fit=crop",
        type: 'Social Platform',
        technologies: ['React', 'Node.js', 'Socket.io', 'MongoDB', 'Redis', 'Kubernetes'],
        status: 'Live',
        client: 'SocialConnect Ltd',
        links: {
          live: 'https://socialconnect.app',
          github: 'https://github.com/user/social-platform'
        },
        featured: true
      },
      {
        id: 5,
        title: "Learning Management System",
        description: "Comprehensive LMS with course creation, student tracking, and interactive learning modules.",
        longDescription: "An advanced learning management system featuring course authoring tools, progress tracking, interactive assessments, video streaming, and AI-powered personalized learning paths.",
        image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=600&fit=crop",
        type: 'Educational Platform',
        technologies: ['Vue.js', 'Laravel', 'MySQL', 'FFmpeg', 'ElasticSearch'],
        status: 'Live',
        client: 'EduTech Institute',
        links: {
          live: 'https://learn.edutech.com',
          case_study: '#'
        },
        featured: false
      },
      {
        id: 6,
        title: "Restaurant Management App",
        description: "Complete restaurant management solution with POS, inventory, staff scheduling, and customer analytics.",
        longDescription: "An all-in-one restaurant management application featuring point-of-sale system, inventory tracking, staff scheduling, customer relationship management, and detailed analytics dashboard.",
        image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=800&h=600&fit=crop",
        type: 'Business Management',
        technologies: ['Flutter', 'Firebase', 'Node.js', 'PostgreSQL', 'Stripe'],
        status: 'Live',
        client: 'RestaurantPro Chain',
        links: {
          live: 'https://restaurantpro.app',
          github: 'https://github.com/user/restaurant-app'
        },
        featured: false
      }
    ]
  };

  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState<boolean>(true);

  const featuredProjects: Project[] = projectsData.projects.filter((p: Project) => p.featured);

  // Auto-play carousel
  useEffect(() => {
    if (isAutoPlaying && featuredProjects.length > 0) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % featuredProjects.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [isAutoPlaying, featuredProjects.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % featuredProjects.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + featuredProjects.length) % featuredProjects.length);
  };

  const ProjectCard = ({ project, featured = false }: { project: Project; featured?: boolean }) => (
    <div className={`group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 ${featured ? 'transform hover:scale-[1.02]' : ''}`}>
      <div className="relative overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Status Badge */}
        <div className="absolute top-4 left-4">
          <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
            project.status === 'Live' ? 'bg-green-500 text-white' : 'bg-orange-500 text-white'
          }`}>
            {project.status}
          </span>
        </div>

        {/* Category Badge */}
        <div className="absolute top-4 right-4">
          <span className="bg-white/90 text-gray-800 px-3 py-1 rounded-full text-xs font-medium">
            {project.type}
          </span>
        </div>

        {/* Overlay Actions */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="flex space-x-3">
            {project.links.live && (
              <a
                href={project.links.live}
                className="bg-white text-gray-900 p-3 rounded-full hover:bg-blue-500 hover:text-white transition-colors shadow-lg"
                title="View Live Project"
              >
                <ExternalLink className="w-5 h-5" />
              </a>
            )}
            {project.links.github && (
              <a
                href={project.links.github}
                className="bg-white text-gray-900 p-3 rounded-full hover:bg-gray-800 hover:text-white transition-colors shadow-lg"
                title="View Source Code"
              >
                <Github className="w-5 h-5" />
              </a>
            )}
            <button
              onClick={() => setSelectedProject(project)}
              className="bg-white text-gray-900 p-3 rounded-full hover:bg-purple-500 hover:text-white transition-colors shadow-lg"
              title="View Details"
            >
              <Eye className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      <div className="p-6">
        <div className="flex items-start justify-between mb-3">
          <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
            {project.title}
          </h3>
          {project.awards && (
            <Award className="w-5 h-5 text-yellow-500 flex-shrink-0" />
          )}
        </div>

        <p className="text-gray-600 mb-4 line-clamp-2">
          {project.description}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.slice(0, 3).map((tech: string, index: number) => (
            <span
              key={index}
              className="bg-blue-50 text-blue-700 px-2 py-1 rounded-lg text-xs font-medium"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 3 && (
            <span className="text-gray-500 text-xs">+{project.technologies.length - 3} more</span>
          )}
        </div>

        {/* Client */}
        <div className="text-sm text-gray-500">
          <span className="font-medium">Client: </span>
          <span>{project.client}</span>
        </div>
      </div>
    </div>
  );

  return (
    <section id="projects" className="py-20 px-6 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-400 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-40 right-20 w-40 h-40 bg-purple-400 rounded-full blur-3xl animate-bounce"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-pink-400 rounded-full blur-2xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Star className="w-6 h-6 text-yellow-500" />
            <span className="text-yellow-600 font-semibold">Portfolio Showcase</span>
            <Star className="w-6 h-6 text-yellow-500" />
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-blue-600 bg-clip-text text-transparent">
            {projectsData.featured.title}
          </h2>
          <p className="text-xl text-gray-600 mb-4 max-w-3xl mx-auto">
            {projectsData.featured.subtitle}
          </p>
          <p className="text-gray-500 max-w-4xl mx-auto leading-relaxed">
            {projectsData.featured.description}
          </p>

          {/* Stats Row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 max-w-4xl mx-auto">
            <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
              <div className="text-3xl font-bold text-blue-600 mb-2">{projectsData.stats.totalProjects}</div>
              <div className="text-gray-600 text-sm">Projects Completed</div>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
              <div className="text-3xl font-bold text-green-600 mb-2">{projectsData.stats.clientSatisfaction}</div>
              <div className="text-gray-600 text-sm">Client Satisfaction</div>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
              <div className="text-3xl font-bold text-purple-600 mb-2">{projectsData.stats.technologiesUsed}</div>
              <div className="text-gray-600 text-sm">Technologies Used</div>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
              <div className="text-3xl font-bold text-orange-600 mb-2">{projectsData.stats.yearsExperience}</div>
              <div className="text-gray-600 text-sm">Years Experience</div>
            </div>
          </div>
        </div>

        {/* Featured Projects Carousel */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-center mb-8 text-gray-900">Featured Projects</h3>
          <div className="relative">
            <div className="overflow-hidden rounded-3xl">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {featuredProjects.map((project: Project, index: number) => (
                  <div key={project.id} className="w-full flex-shrink-0">
                    <div className="bg-white rounded-2xl shadow-2xl overflow-hidden mx-4">
                      <div className="md:flex">
                        <div className="md:w-1/2">
                          <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-80 md:h-full object-cover"
                          />
                        </div>
                        <div className="md:w-1/2 p-8 flex flex-col justify-center">
                          <div className="flex items-center space-x-2 mb-4">
                            <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">
                              {project.status}
                            </span>
                            <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold">
                              {project.type}
                            </span>
                          </div>
                          <h4 className="text-3xl font-bold text-gray-900 mb-4">{project.title}</h4>
                          <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                            {project.longDescription}
                          </p>
                          
                          {/* Technologies */}
                          <div className="flex flex-wrap gap-2 mb-6">
                            {project.technologies.map((tech: string, index: number) => (
                              <span
                                key={index}
                                className="bg-blue-50 text-blue-700 px-3 py-1 rounded-lg text-sm font-medium"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>

                          <div className="flex space-x-4">
                            {project.links.live && (
                              <a
                                href={project.links.live}
                                className="bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition-colors flex items-center space-x-2"
                              >
                                <ExternalLink className="w-4 h-4" />
                                <span>View Live</span>
                              </a>
                            )}
                            {project.links.github && (
                              <a
                                href={project.links.github}
                                className="border-2 border-gray-300 text-gray-700 px-6 py-3 rounded-xl hover:bg-gray-50 transition-colors flex items-center space-x-2"
                              >
                                <Github className="w-4 h-4" />
                                <span>Source Code</span>
                              </a>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Carousel Controls */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-3 rounded-full shadow-lg transition-all"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-3 rounded-full shadow-lg transition-all"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Carousel Dots */}
            <div className="flex justify-center space-x-2 mt-6">
              {featuredProjects.map((_: Project, index: number) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    currentSlide === index ? 'bg-blue-600' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* All Projects Grid */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center mb-8 text-gray-900">All Projects</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projectsData.projects.map((project: Project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-3xl p-12 max-w-4xl mx-auto">
            <Heart className="w-12 h-12 mx-auto mb-6 text-pink-300" />
            <h3 className="text-3xl font-bold mb-4">Ready to Start Your Project?</h3>
            <p className="text-blue-100 mb-8 text-lg max-w-2xl mx-auto">
              Let's work together to create something amazing. I'm passionate about turning your ideas into reality.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="#contact"
                className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-colors flex items-center space-x-2 shadow-lg"
              >
                <span>Start a Project</span>
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-colors"
              >
                View All Work
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Project Detail Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-8">
              <div className="flex justify-between items-start mb-6">
                <h3 className="text-3xl font-bold text-gray-900">{selectedProject.title}</h3>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="text-gray-500 hover:text-gray-700 text-2xl"
                >
                  ×
                </button>
              </div>
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-64 object-cover rounded-xl mb-6"
              />
              <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                {selectedProject.longDescription}
              </p>
              
              {/* Technologies */}
              <div className="mb-6">
                <h4 className="font-semibold text-gray-900 mb-3">Technologies Used</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.technologies.map((tech: string, index: number) => (
                    <span
                      key={index}
                      className="bg-blue-50 text-blue-700 px-3 py-1 rounded-lg text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Client */}
              <div className="mb-6">
                <h4 className="font-semibold text-gray-900 mb-3">Client</h4>
                <p className="text-gray-600">{selectedProject.client}</p>
              </div>

              {/* Links */}
              <div className="flex space-x-4">
                {selectedProject.links.live && (
                  <a
                    href={selectedProject.links.live}
                    className="bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition-colors flex items-center space-x-2"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>View Live Project</span>
                  </a>
                )}
                {selectedProject.links.github && (
                  <a
                    href={selectedProject.links.github}
                    className="border-2 border-gray-300 text-gray-700 px-6 py-3 rounded-xl hover:bg-gray-50 transition-colors flex items-center space-x-2"
                  >
                    <Github className="w-4 h-4" />
                    <span>Source Code</span>
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;