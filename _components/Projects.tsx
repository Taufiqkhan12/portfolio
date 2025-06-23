import Link from "next/link";
import { projects } from "@/content";
import { LuExternalLink } from "react-icons/lu";

const Projects = () => {
  return (
    <section className="my-8" aria-labelledby="projects-heading">
      <h2 id="projects-heading" className="sr-only">
        Projects
      </h2>
      <div className="space-y-8">
        {projects.map((project) => (
          <ProjectCard key={project.name} {...project} />
        ))}
      </div>
    </section>
  );
};

interface ProjectCardProps {
  name: string;
  description: string;
  github: string;
  live: string;
  tech: string[];
}

const ProjectCard = ({
  name,
  description,
  github,
  live,
  tech,
}: ProjectCardProps) => {
  return (
    <article>
      {/* header */}
      <header className="mb-1 flex items-center justify-between">
        <h3 className="text-md font-medium text-zinc-800 dark:text-zinc-200">
          {name}
        </h3>
        <nav className="flex gap-3 text-xs" aria-label={`${name} links`}>
          {github && <ExternalLink href={github} label="GitHub" />}
          {live && <ExternalLink href={live} label="Live" />}
        </nav>
      </header>

      {/* description */}
      <p className="mb-2 text-sm text-zinc-600 dark:text-zinc-400">
        {description}
      </p>

      {/* tech stack */}
      <footer>
        <ul
          className="flex flex-wrap gap-2 text-xs text-zinc-400 dark:text-zinc-500"
          aria-label={`${name} tech stack`}
        >
          {tech.map((item, index) => (
            <li key={`${item}-${index}`} className="flex items-center">
              {item}
              {index !== tech.length - 1 && <span className="mx-1">/</span>}
            </li>
          ))}
        </ul>
      </footer>
    </article>
  );
};

const ExternalLink = ({ href, label }: { href: string; label: string }) => (
  <Link
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={label}
    className="inline-flex items-center gap-1 text-zinc-600 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-neutral-50"
  >
    <span>{label}</span>
    <LuExternalLink className="-mt-0.5 size-3" />
  </Link>
);

export default Projects;
