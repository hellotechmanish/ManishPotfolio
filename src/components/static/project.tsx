// src/components/static/project.tsx

export interface ProjectLink {
  live?: string;
  github?: string;
  case_study?: string;
}

export type ProjectType =
  | "Company Project"
  | "Client Project"
  | "Personal Project";

export type ProjectStatus = "Live" | "In Development";

export interface Project {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  type: ProjectType;
  technologies: string[];
  status: ProjectStatus;
  workedFor: string;
  links: ProjectLink;
  featured: boolean;
  awards?: string[];
}

export interface ProjectsdataType {
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

export const projectsData = {
  featured: {
    title: "Featured Projects",
    subtitle: "Showcasing my best work and real-world experience",
    description:
      "A complete collection of my company, client, and personal projects that demonstrate my skills in Full Stack Development, system design, and scalable applications.",
  },

  stats: {
    totalProjects: 14,
    clientSatisfaction: "95%",
    technologiesUsed: 12,
    yearsExperience: 2,
  },

  projects: [
    {
      id: 1,
      title: "Ramyoz – IT Services Platform",
      description:
        "Official website with service enquiry and requirement form.",
      longDescription:
        "Corporate IT services platform with requirement form, SEO optimization, and responsive UI.",
      image:
        "https://raw.githubusercontent.com/hellotechmanish/Project_image/main/ramyoz.png",
      type: "Company Project",
      technologies: ["Next.js", "Node.js", "MongoDB", "Tailwind CSS"],
      status: "Live",
      workedFor: "company",
      links: { live: "https://ramyoz.com/" },
      featured: true,
    },
    {
      id: 2,
      title: "Diginfluencers – Influencer Marketing Platform",
      description:
        "Platform connecting brands and influencers with campaign & payment system.",
      longDescription:
        "Multi-role platform with Admin, Company, and Influencer dashboards, campaign flow, and payment integration.",
      image:
        "https://raw.githubusercontent.com/hellotechmanish/Project_image/main/diginfluencers.png",
      type: "Company Project",
      technologies: ["Next.js", "Node.js", "MongoDB", "Stripe", "AWS"],
      status: "Live",
      workedFor: "company",
      links: { live: "https://diginfluencers.com/" },
      featured: true,
    },
    {
      id: 3,
      title: "Vendor Management System (VMS)",
      description:
        "Admin panel for vendor & visitor management with dashboards.",
      longDescription:
        "Internal dashboard system with authentication, data tables, analytics, and automation.",
      image:
        "https://raw.githubusercontent.com/hellotechmanish/Project_image/main/VMS.jpg",
      type: "Company Project",
      technologies: ["Next.js", "Node.js", "MongoDB", "TypeScript"],
      status: "Live",
      workedFor: "company",
      links: { live: "https://panel.ramyoz.com/" },
      featured: false,
    },

    {
      id: 4,
      title: "TRISHA’S Website",
      description: "Business website for real estate, paints, and healthcare.",
      longDescription:
        "Client website built using modern stack with enquiry forms and service listings.",
      image:
        "https://raw.githubusercontent.com/hellotechmanish/Project_image/main/trisha.png",
      type: "Client Project",
      technologies: ["Next.js", "TypeScript", "Tailwind", "Supabase"],
      status: "Live",
      workedFor: "client",
      links: {
        live: "https://www.trishas.co.in/",
        github: "https://gitlab.com/hellotechmanish/realesate_enquiry_website",
      },
      featured: true,
    },
    {
      id: 5,
      title: "Doctor Diagnostic Lab",
      description: "Diagnostic booking platform with test & report system.",
      longDescription:
        "Healthcare web app with test booking, home sample collection, reports dashboard.",
      image:
        "https://raw.githubusercontent.com/hellotechmanish/Project_image/main/drdiagnosticlab.png",
      type: "Client Project",
      technologies: ["React", "TypeScript", "Node.js", "MongoDB"],
      status: "Live",
      workedFor: "client",
      links: { live: "https://www.drdiagnosticlab.com/" },
      featured: true,
    },
    {
      id: 6,
      title: "AC AMC Service Website",
      description: "AC AMC inventory and service management platform.",
      longDescription:
        "Client project with frontend and backend repositories for service management.",
      image:
        "https://raw.githubusercontent.com/hellotechmanish/Project_image/main/anc.png",
      type: "Client Project",
      technologies: ["React", "TypeScript", "Node.js"],
      status: "In Development",
      workedFor: "client",
      links: { github: "https://github.com/helodeepakji/ac_amc_frontend" },
      featured: false,
    },

    {
      id: 7,
      title: "LearnMock – AI Quiz Platform",
      description: "AI based quiz generator using Gemini API.",
      longDescription:
        "Dynamic quiz generation with scoring and result analysis.",
      image:
        "https://raw.githubusercontent.com/hellotechmanish/Project_image/main/LearnMock.png",
      type: "Personal Project",
      technologies: ["Node.js", "Express", "MongoDB", "Gemini API"],
      status: "Live",
      workedFor: "Personal",
      links: { live: "https://learnmock.onrender.com/" },
      featured: false,
    },
    {
      id: 8,
      title: "Noteswaleybhai",
      description: "Notes sharing platform with user upload feature.",
      longDescription:
        "Platform for uploading, managing and sharing study notes.",
      image:
        "https://raw.githubusercontent.com/hellotechmanish/Project_image/main/Noteswaleybhai.png",
      type: "Personal Project",
      technologies: ["Next.js", "TypeScript", "Supabase"],
      status: "In Development",
      workedFor: "Personal",
      links: { github: "https://gitlab.com/hellotechmanish/noteswaleybhai" },
      featured: false,
    },
    {
      id: 9,
      title: "Manish Portfolio",
      description: "Personal portfolio website.",
      longDescription: "Modern developer portfolio with project showcase.",
      image:
        "https://raw.githubusercontent.com/hellotechmanish/Project_image/main/Potfolio.png",
      type: "Personal Project",
      technologies: ["Next.js", "TypeScript", "Tailwind"],
      status: "Live",
      workedFor: "Personal",
      links: { live: "https://my-potfolio-pink.vercel.app/" },
      featured: false,
    },
    {
      id: 10,
      title: "NodeMailer Email Service",
      description: "Email service for sending OTPs and notifications.",
      longDescription: "Backend email service using SMTP and Nodemailer.",
      image:
        "https://raw.githubusercontent.com/hellotechmanish/Project_image/main/nodemailer.jpg",
      type: "Personal Project",
      technologies: ["Node.js", "Express", "Nodemailer"],
      status: "Live",
      workedFor: "Personal",
      links: { github: "https://github.com/hellotechmanish/nodeMailer" },
      featured: false,
    },
    {
      id: 11,
      title: "Payment Gateway Integration",
      description: "Payment system using Razorpay and Stripe.",
      longDescription: "Secure payment integration demo.",
      image:
        "https://raw.githubusercontent.com/hellotechmanish/Project_image/main/paymentgateway.jpg",
      type: "Personal Project",
      technologies: ["Node.js", "Stripe", "Razorpay"],
      status: "Live",
      workedFor: "Personal",
      links: {
        github:
          "https://github.com/hellotechmanish/Payment_gateway_intigration",
      },
      featured: false,
    },
    {
      id: 12,
      title: "MERN Todo List App",
      description: "Task manager using MERN stack.",
      longDescription: "CRUD based todo app with authentication.",
      image:
        "https://raw.githubusercontent.com/hellotechmanish/Project_image/main/todolist.jpg",
      type: "Personal Project",
      technologies: ["MongoDB", "Express", "React", "Node.js"],
      status: "Live",
      workedFor: "Personal",
      links: { github: "https://github.com/hellotechmanish/todolist_mern" },
      featured: false,
    },
    {
      id: 13,
      title: "Biometric Attendance System",
      description: "Face based attendance system.",
      longDescription:
        "Biometric authentication and attendance management system.",
      image:
        "https://raw.githubusercontent.com/hellotechmanish/Project_image/main/biomatric.jpg",
      type: "Personal Project",
      technologies: ["Python", "OpenCV", "Node.js"],
      status: "In Development",
      workedFor: "Personal",
      links: {
        github: "https://github.com/hellotechmanish/Biomatric_Attendence",
      },
      featured: false,
    },
    {
      id: 14,
      title: "SmartToolBox",
      description: "All-in-one online tools platform.",
      longDescription:
        "Utility platform for PDF, image, video, audio, and web tools.",
      image:
        "https://raw.githubusercontent.com/hellotechmanish/Project_image/main/SmartToolBox.png",
      type: "Personal Project",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
      status: "Live",
      workedFor: "Personal",
      links: {
        live: "https://smarttoolbox-jade.vercel.app/",
        github: "https://github.com/hellotechmanish/smarttoolbox",
      },
      featured: true,
    },
  ],
};

export default projectsData;
