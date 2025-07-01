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
    href: "https://drive.google.com/file/d/1AkiUvgJTtOy8w0JKj-DPvf-0o5_nmuwR/view?usp=drive_link",
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
    name: "Cabon",
    description:
      "Real-Time Ride Booking App, map-based ride-booking platform built to connect passengers with nearby drivers—seamlessly and instantly. The app allows users to request a ride, track their driver's live location, and make secure digital payments and more, all from a clean and intuitive interface.",
    github: "https://github.com/taufiqkhan12/cabon",
    live: "https://demo.vercel.app",
    tech: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "Tailwindcss",
      "Socket.io",
    ],
  },
  {
    name: "Dropf",
    description:
      "Dropf lets users instantly create or join a private room to share files in real time. It’s fast, secure, and doesn’t require sign-up. Files stay accessible even if the sender leaves, thanks to MongoDB-based persistence. Simple, reliable, and perfect for quick transfers.",
    github: "https://github.com/Taufiqkhan12/dropf",
    live: "https://dropf.vercel.app",
    tech: ["React", "Socket.io", "Node.js", "MongoDB", "Tailwindcss"],
  },
  {
    name: "My watch box",
    description:
      "MyWatchBox is a movie search app where you can easily find movies by typing their name. It shows you movie posters, titles, release dates, and short descriptions. users can add or remove movie from watchlist The app uses a public movie database to get the latest movie details. It's made to be clean, fast, and easy to use for everyone who loves movies.",
    github: "https://github.com/Taufiqkhan12/mywatchbox",
    live: "https://mywatchbox.vercel.app/",
    tech: ["React", "Css"],
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
      "Cloudinary",
    ],
  },
];
