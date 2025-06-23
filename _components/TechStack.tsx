import { techStack } from "@/content";

const TechStack = () => {
  return (
    <section className="my-8" aria-labelledby="techstack-heading">
      <h2 id="techstack-heading" className="sr-only">
        Tech Stack
      </h2>
      <div className="my-8 mt-6 grid grid-cols-4 gap-8 md:grid-cols-5">
        {techStack.map(({ logo: Icon, name }, i) => (
          <figure key={i} className="flex flex-col gap-2">
            <Icon
              className="size-8 text-zinc-600 transition-colors hover:text-zinc-900 dark:text-zinc-400 hover:dark:text-neutral-50"
              role="img"
              aria-label={name}
              title={name}
            />
            <figcaption className="text-xs whitespace-nowrap text-zinc-500 dark:text-zinc-400">
              {name}
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
};

export default TechStack;
