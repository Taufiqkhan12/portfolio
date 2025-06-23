const IntroText = () => {
  return (
    <section
      className="mt-6 space-y-3 text-sm text-zinc-600 dark:text-zinc-400"
      aria-labelledby="intro-heading"
    >
      <h2 id="intro-heading" className="sr-only">
        Introduction
      </h2>

      <p>
        I’m a{" "}
        <strong className="font-medium text-zinc-900 dark:text-neutral-50">
          full-stack
        </strong>{" "}
        developer specializing in the{" "}
        <span className="font-medium text-zinc-900 dark:text-neutral-50">
          MERN
        </span>{" "}
        stack — React on the front-end, Node on the back-end, and everything in
        between.
      </p>

      <p>
        <span className="font-medium text-zinc-900 dark:text-neutral-50">
          Clean code?
        </span>{" "}
        Absolutely.{" "}
        <span className="font-medium text-zinc-900 dark:text-neutral-50">
          High performance?
        </span>{" "}
        Always.{" "}
        <span className="font-medium text-zinc-900 dark:text-neutral-50">
          Experiences that matter?
        </span>{" "}
        That’s the goal.
      </p>
    </section>
  );
};

export default IntroText;
