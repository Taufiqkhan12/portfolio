import Link from "next/link";
import { socialLinks } from "@/content";

const SocialLinks = () => {
  return (
    <div className="my-8 flex gap-4" aria-label="Social Media Links">
      {socialLinks.map(({ icon: Icon, href }, index) => (
        <Link href={href} key={index} target="_blank" rel="noopener noreferrer">
          <Icon className="size-6 text-zinc-600 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-neutral-50" />
        </Link>
      ))}
    </div>
  );
};

export default SocialLinks;
