
import React from 'react';
import { Project, Skill, EducationItem, Testimonial } from './types';

export const FULL_NAME = "Touseef Panjtan";

export const SOCIAL_LINKS = {
  github: "https://github.com/touseef78286",
  linkedin: "https://www.linkedin.com/in/touseef-panjtan-162a04375",
  email: "mailto:touseefpanjtan52@gmail.com"
};

export const PROFILE_PIC_URL = "/zenithprofile.jpeg"; 

export const RESUME_SUMMARY = "Software Engineering Student | Aspiring Software Engineer | Seeking Internship Opportunities | Web Developer | App Developer | AI & Web3D Developer | Creative Technologist. Dedicated to building high-impact digital solutions and immersive experiences at the intersection of AI and modern web technologies.";

export const PROJECTS: Project[] = [
  {
    id: 1,
    name: "NeuroFlow: AI Content Engine",
    description: "Architected a sophisticated content generation platform leveraging Gemini & OpenAI APIs. Features real-time streaming responses and contextual memory for long-form creative writing.",
    tech: ["Next.js", "TypeScript", "AI APIs", "Tailwind"],
    githubUrl: "https://github.com/touseef78286",
    imageUrl: "https://picsum.photos/seed/ai-engine/800/500"
  },
  {
    id: 2,
    name: "Aether: Immersive 3D Workspace",
    description: "An experimental Web3D productivity hub built with Three.js. Implements spatial UI components and physics-based interactions for a futuristic desktop experience.",
    tech: ["Three.js", "React Three Fiber", "Framer Motion"],
    githubUrl: "https://github.com/touseef78286",
    imageUrl: "https://picsum.photos/seed/3d-world/800/500"
  },
  {
    id: 3,
    name: "Visionary: Object Recognition Suite",
    description: "A real-time computer vision application that detects and classifies objects with 92% accuracy using TensorFlow.js integrated into a React Native mobile shell.",
    tech: ["TensorFlow.js", "React Native", "Python", "Flask"],
    githubUrl: "https://github.com/touseef78286",
    imageUrl: "https://picsum.photos/seed/vision/800/500"
  },
  {
    id: 4,
    name: "Nexus: Decentralized Auth System",
    description: "A secure, scalable authentication microservice utilizing JWT and Web3 principles. Built with a focus on zero-trust architecture and seamless UX.",
    tech: ["Node.js", "PostgreSQL", "Web3.js", "Docker"],
    githubUrl: "https://github.com/touseef78286",
    imageUrl: "https://picsum.photos/seed/auth/800/500"
  }
];

export const TECH_DESCRIPTIONS: Record<string, string> = {
  "React": "Expertise in building complex, stateful single-page applications.",
  "TypeScript": "Leveraging static typing for mission-critical software reliability.",
  "Three.js": "Engineering immersive 3D graphics for the modern web.",
  "AI APIs": "Integrating LLMs and generative models into user-facing products.",
  "Tailwind": "Implementing pixel-perfect, highly responsive design systems.",
  "Node.js": "Building scalable, event-driven backend services.",
  "TensorFlow.js": "Deploying machine learning models directly in the browser."
};

export const SKILLS: Skill[] = [
  { name: "Full-Stack Development", level: 92 },
  { name: "Web3D & Computer Graphics", level: 85 },
  { name: "AI/ML Integration", level: 80 },
  { name: "UI/UX Engineering", level: 95 },
  { name: "Software Architecture", level: 88 },
  { name: "Mobile App Development", level: 82 }
];

export const EDUCATION: EducationItem[] = [
  {
    institution: "Ibadat International University Islamabad",
    degree: "Bachelors in Software Engineering (BSSE)",
    period: "2023 - 2027 (Currently 4th Semester)",
    description: "Advancing core software engineering principles, algorithms, and data structures. Actively researching the intersection of AI and spatial computing."
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Johnson",
    company: "TechFlow Solutions",
    content: "Touseef is an exceptional developer. He transformed our complex requirements into a seamless, high-performance web application.",
    avatar: "https://i.pravatar.cc/150?u=sarah"
  },
  {
    id: 2,
    name: "Michael Chen",
    company: "Visionary Apps",
    content: "His attention to detail in UI/UX and expertise in modern React frameworks is truly world-class.",
    avatar: "https://i.pravatar.cc/150?u=michael"
  },
  {
    id: 3,
    name: "Elena Rodriguez",
    company: "Creative Studio",
    content: "The level of professionalism Touseef brings to the table is outstanding. He delivered our project ahead of schedule and the code quality exceeded our expectations.",
    avatar: "https://i.pravatar.cc/150?u=elena"
  },
  {
    id: 4,
    name: "David Smith",
    company: "InnoTech Systems",
    content: "Touseef's ability to solve complex architectural problems is impressive. He significantly improved our application's performance and accessibility, resulting in much better user engagement.",
    avatar: "https://i.pravatar.cc/150?u=david"
  },
  {
    id: 5,
    name: "Anjali Rao",
    company: "Nexus Digital",
    content: "A highly skilled developer with a deep understanding of modern frontend ecosystems. Touseef always goes the extra mile to ensure the product is polished and bug-free.",
    avatar: "https://i.pravatar.cc/150?u=anjali"
  },
];

export const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Education', href: '#education' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];
