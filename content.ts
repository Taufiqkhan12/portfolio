import { BiLogoPostgresql } from "react-icons/bi";
import {
  FaGitAlt,
  FaGithub,
  FaJs,
  FaLinkedin,
  FaNode,
  FaReact,
  FaAws,
} from "react-icons/fa";
import { SiPrisma, SiSocketdotio, SiMongodb } from "react-icons/si";
import { IoMailOpen } from "react-icons/io5";
import { PiReadCvLogoFill } from "react-icons/pi";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiExpress } from "react-icons/si";

export const socialLinks = [
  {
    icon: PiReadCvLogoFill,
    href: "https://drive.google.com/file/d/1IvCck14qdppQ05N6dp10F2GJhMF5Ihl8/view?usp=drive_link",
    label: "Resume",
  },
  { icon: FaGithub, href: "https://github.com/Taufiqkhan12", label: "GitHub" },
  {
    icon: FaLinkedin,
    href: "https://www.linkedin.com/in/taufiq-khan-009a1a264/",
    label: "LinkedIn",
  },
  { icon: IoMailOpen, href: "mailto:ktaufiq913@gmail.com ", label: "Email" },
];

export const projects = [
  {
    name: "DevLink",
    description:
      "A developer-focused social platform to share projects, connect, and collaborate.",
    github: "https://github.com/username/devlink",
    live: "https://devlink-demo.vercel.app",
    tech: ["React", "Node.js", "Express", "MongoDB", "TailwindCSS"],
  },
  {
    name: "QuickCart",
    description:
      "An e-commerce web app with cart, payments, and admin dashboard.",
    github: "https://github.com/username/quickcart",
    live: "https://quickcart.shop",
    tech: ["React", "Redux", "Node.js", "MongoDB", "Stripe"],
  },
  {
    name: "TaskZen",
    description:
      "A productivity tool for organizing tasks, notes, and project goals.",
    github: "https://github.com/username/taskzen",
    live: "https://taskzen.io",
    tech: ["Next.js", "MongoDB", "Tailwind", "Framer Motion"],
  },
  {
    name: "Portfolio CMS",
    description:
      "A lightweight headless CMS built to manage personal portfolios or blogs.",
    github: "https://github.com/username/portfolio-cms",
    live: "https://cms-demo.vercel.app",
    tech: ["React", "Express", "MongoDB", "JWT", "Styled Components"],
  },
];

export const techStack = [
  { logo: FaJs, name: "JavaScript" },
  { logo: FaReact, name: "React" },
  { logo: SiExpress, name: "Express" },
  { logo: FaNode, name: "Node" },
  { logo: BiLogoPostgresql, name: "Postgresql" },
  { logo: FaGitAlt, name: "Git" },
  { logo: FaAws, name: "Aws" },
  { logo: RiTailwindCssFill, name: "Tailwind" },
  { logo: SiSocketdotio, name: "Socket.io" },
  { logo: SiPrisma, name: "Prisma" },
  { logo: SiMongodb, name: "MongoDB" },
];

export const experience = [
  {
    title: "Freelance Developer",
    company: "",
    date: "Jan 2025 – Mar 2025",
    description:
      "Built and maintained a tailored backend system for Memon Hajj Umrah Travels, focusing on managing Umrah enquiry forms, admin workflows, and user data with secure authentication. Used technologies like Node.js, Express, MongoDB, and JWT to ensure a smooth experience for both admins and users. Prioritized reliability, speed, and scalability to support real-world travel operations.",
    techStack: [
      "React.js",
      "JavaScript",
      "Tailwind CSS",
      "PostgreSQL",
      "Nodejs",
      "Express",
    ],
  },
];
