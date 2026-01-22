"use client";

import React, { useState } from "react";
import {
  ExternalLink,
  Github,
  Star,
  Award,
  Heart,
  Eye,
  ArrowRight,
} from "lucide-react";
import Image from "next/image";
import { projectsData, Project } from "../static/project";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  // const [isAutoPlaying] = useState<boolean>(true);

  // Removed unused featuredProjects, nextSlide, prevSlide, and related unused imports

  const ProjectCard = ({
    project,
    featured = false,
  }: {
    project: Project;
    featured?: boolean;
  }) => (
    <div
      className={`group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 ${
        featured ? "transform hover:scale-[1.02]" : ""
      }`}
    >
      <div className="relative overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          width={600}
          height={400}
          className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {/* Status Badge */}
        <div className="absolute top-4 left-4">
          <span
            className={`px-3 py-1 rounded-full text-xs font-semibold ${
              project.status === "Live"
                ? "bg-green-500 text-white"
                : "bg-orange-500 text-white"
            }`}
          >
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

        <p className="text-gray-600 mb-4 line-clamp-2">{project.description}</p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies
            .slice(0, 3)
            .map((tech: string, index: number) => (
              <span
                key={index}
                className="bg-blue-50 text-blue-700 px-2 py-1 rounded-lg text-xs font-medium"
              >
                {tech}
              </span>
            ))}
          {project.technologies.length > 3 && (
            <span className="text-gray-500 text-xs">
              +{project.technologies.length - 3} more
            </span>
          )}
        </div>

        {/* Client */}
        <div className="text-sm text-gray-500">
          <span className="font-medium">Worked For: </span>
          <span>{project.workedFor}</span>
        </div>
      </div>
    </div>
  );

  return (
    <section
      id="projects"
      className="py-20 px-6 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden"
    >
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
            <span className="text-yellow-600 font-semibold">
              Portfolio Showcase
            </span>
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
              <div className="text-3xl font-bold text-blue-600 mb-2">
                {projectsData.stats.totalProjects}
              </div>
              <div className="text-gray-600 text-sm">Projects Completed</div>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
              <div className="text-3xl font-bold text-green-600 mb-2">
                {projectsData.stats.clientSatisfaction}
              </div>
              <div className="text-gray-600 text-sm">Client Satisfaction</div>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
              <div className="text-3xl font-bold text-purple-600 mb-2">
                {projectsData.stats.technologiesUsed}
              </div>
              <div className="text-gray-600 text-sm">Technologies Used</div>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
              <div className="text-3xl font-bold text-orange-600 mb-2">
                {projectsData.stats.yearsExperience}
              </div>
              <div className="text-gray-600 text-sm">Years Experience</div>
            </div>
          </div>
        </div>

        {/* All Projects Grid */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center mb-8 text-gray-900">
            All Projects
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projectsData.projects.map((project) => (
              <ProjectCard
                key={project.id}
                project={{
                  ...project,
                  type: project.type as Project["type"],
                  status: project.status as Project["status"],
                  workedFor: project.workedFor,
                }}
              />
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-3xl p-12 max-w-4xl mx-auto">
            <Heart className="w-12 h-12 mx-auto mb-6 text-pink-300" />
            <h3 className="text-3xl font-bold mb-4">
              Ready to Start Your Project?
            </h3>
            <p className="text-blue-100 mb-8 text-lg max-w-2xl mx-auto">
              Let&apos;s work together to create something amazing. I&apos;m
              passionate about turning your ideas into reality.
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
                <h3 className="text-3xl font-bold text-gray-900">
                  {selectedProject.title}
                </h3>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="text-gray-500 hover:text-gray-700 text-2xl"
                >
                  ×
                </button>
              </div>
              <Image
                src={selectedProject.image}
                alt={selectedProject.title}
                width={600}
                height={400}
                className="w-full h-64 object-cover rounded-xl mb-6"
              />
              <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                {selectedProject.longDescription}
              </p>

              {/* Technologies */}
              <div className="mb-6">
                <h4 className="font-semibold text-gray-900 mb-3">
                  Technologies Used
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.technologies.map(
                    (tech: string, index: number) => (
                      <span
                        key={index}
                        className="bg-blue-50 text-blue-700 px-3 py-1 rounded-lg text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ),
                  )}
                </div>
              </div>

              {/* Client */}
              <div className="mb-6">
                <h4 className="font-semibold text-gray-900 mb-3">Client</h4>
                <p className="text-gray-600">{selectedProject.workedFor}</p>
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
}
