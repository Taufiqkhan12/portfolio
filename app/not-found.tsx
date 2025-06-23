import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[68vh] text-center p-8 m-4">
      <h1 className="text-5xl font-bold text-zinc-800 dark:text-zinc-100 mb-4">
        404
      </h1>
      <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-6">
        Page not found. Let&apos;s get you back on track.
      </p>
      <Link
        href="/"
        className="text-sm font-medium underline underline-offset-4 text-zinc-900 dark:text-zinc-100 hover:text-blue-500 transition"
      >
        Go back home →
      </Link>
    </div>
  );
}
