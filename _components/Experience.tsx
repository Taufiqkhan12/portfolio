import { experience } from "@/content";

const Experience = () => {
  return (
    <section className="my-8" aria-labelledby="experience-heading">
      <h2 id="experience-heading" className="sr-only">
        Experience
      </h2>

      <div className="space-y-8">
        {experience.map(
          ({ title, company, date, description, techStack }, i) => (
            <article key={`${company || title}-${i}`}>
              <header className="mb-1 flex flex-col justify-between sm:flex-row sm:items-baseline">
                <h3 className="text-md font-medium text-zinc-800 dark:text-zinc-200">
                  {company || title}
                </h3>
                <time
                  className="text-xs text-zinc-400 dark:text-zinc-500"
                  dateTime={parseDate(date)}
                >
                  {date}
                </time>
              </header>

              <p className="mb-2 text-sm text-zinc-500 dark:text-zinc-400">
                {description}
              </p>

              <footer>
                <div className="flex flex-wrap gap-2">
                  {techStack.map((tech, index) => (
                    <span
                      key={`${tech}-${index}`}
                      className="text-xs text-zinc-400 dark:text-zinc-500"
                    >
                      {tech}
                      {index !== techStack.length - 1 && (
                        <span className="mx-1">/</span>
                      )}
                    </span>
                  ))}
                </div>
              </footer>
            </article>
          ),
        )}
      </div>
    </section>
  );
};

const parseDate = (date: string) => {
  const parsed = new Date(date);
  return !isNaN(parsed.getTime()) ? parsed.toISOString() : undefined;
};

export default Experience;
