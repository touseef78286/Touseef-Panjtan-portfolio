
import React from 'react';
import { Project, Skill, EducationItem, Testimonial } from './types';
import { 
  Github, 
  Linkedin, 
  Mail, 
  ExternalLink, 
  Download, 
  Code2, 
  Layout, 
  Database, 
  Smartphone,
  Server,
  Terminal
} from 'lucide-react';

export const SOCIAL_LINKS = {
  github: "https://github.com/touseef78286",
  linkedin: "https://www.linkedin.com/in/touseef-panjtan-162a04375",
  email: "mailto:touseefpanjtan52@gmail.com"
};

export const CV_URL = "#"; // Replace with actual CV link

export const PROJECTS: Project[] = [
  {
    id: 1,
    name: "Modern E-Commerce Dashboard",
    description: "A full-featured admin dashboard with real-time analytics, inventory management, and customer tracking using React and Tailwind.",
    tech: ["React", "TypeScript", "Tailwind", "Recharts"],
    githubUrl: "https://github.com/touseef78286",
    imageUrl: "https://picsum.photos/seed/dash/800/500"
  },
  {
    id: 2,
    name: "AI Content Generator",
    description: "An interface for interacting with Large Language Models to generate blog posts, social media content, and code snippets.",
    tech: ["Next.js", "OpenAI API", "Framer Motion"],
    githubUrl: "https://github.com/touseef78286",
    imageUrl: "https://picsum.photos/seed/ai/800/500"
  },
  {
    id: 3,
    name: "Task Management Suite",
    description: "Collaborative project management tool with Kanban boards, file sharing, and team chat features.",
    tech: ["React", "Firebase", "DragDropContext"],
    githubUrl: "https://github.com/touseef78286",
    imageUrl: "https://picsum.photos/seed/task/800/500"
  },
  {
    id: 4,
    name: "Weather Real-time App",
    description: "Hyper-local weather forecasting application with interactive maps and historical data visualizations.",
    tech: ["TypeScript", "OpenWeather API", "D3.js"],
    githubUrl: "https://github.com/touseef78286",
    imageUrl: "https://picsum.photos/seed/weather/800/500"
  }
];

export const TECH_DESCRIPTIONS: Record<string, string> = {
  "React": "A JavaScript library for building user interfaces with components.",
  "TypeScript": "A typed superset of JavaScript that scales.",
  "Tailwind": "A utility-first CSS framework for rapid UI development.",
  "Recharts": "A composable charting library built on React components.",
  "Next.js": "The React framework for the web, optimized for performance and SEO.",
  "OpenAI API": "Integration with advanced AI models for NLP tasks.",
  "Framer Motion": "A production-ready motion library for React.",
  "Firebase": "Platform for building mobile and web applications without a backend.",
  "DragDropContext": "Utility for implementing drag-and-drop interfaces in React.",
  "OpenWeather API": "Real-time weather data and forecast information service.",
  "D3.js": "A library for producing dynamic, interactive data visualizations in browsers."
};

export const SKILLS: Skill[] = [
  { name: "React / Next.js", level: 95 },
  { name: "TypeScript", level: 90 },
  { name: "Tailwind CSS", level: 98 },
  { name: "Node.js", level: 85 },
  { name: "State Management (Redux/Zustand)", level: 88 },
  { name: "REST / GraphQL", level: 82 },
  { name: "Git & CI/CD", level: 90 },
  { name: "UI/UX Design Principles", level: 85 }
];

export const EDUCATION: EducationItem[] = [
  {
    institution: "University of Technology",
    degree: "Bachelors in Computer Science",
    period: "2019 - 2023",
    description: "Focused on software engineering, web technologies, and data structures."
  },
  {
    institution: "Web Academy",
    degree: "Advanced Frontend Certification",
    period: "2023 - 2024",
    description: "Intensive training on modern React frameworks, performance optimization, and accessibility."
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Johnson",
    company: "TechFlow Solutions",
    content: "Touseef is an exceptional developer. He transformed our complex requirements into a seamless, high-performance web application. His attention to detail in UI/UX is truly world-class.",
    avatar: "https://i.pravatar.cc/150?u=sarah"
  },
  {
    id: 2,
    name: "Michael Chen",
    company: "Visionary Apps",
    content: "Working with Touseef was a breeze. He's not only technically proficient in React and TypeScript but also a great communicator who understands business goals perfectly.",
    avatar: "https://i.pravatar.cc/150?u=michael"
  },
  {
    id: 3,
    name: "Elena Rodriguez",
    company: "Creative Studio",
    content: "The level of professionalism Touseef brings to the table is outstanding. He delivered our project ahead of schedule and the code quality exceeded our expectations.",
    avatar: "https://i.pravatar.cc/150?u=elena"
  }
];

export const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Education', href: '#education' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Contact', href: '#contact' }
];
