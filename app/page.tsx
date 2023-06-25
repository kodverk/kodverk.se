import Link from "next/link";

import { Icons } from "~/components/icons";
import { ThemeToggle } from "~/components/theme-toggle";
import { buttonVariants } from "~/components/ui/button";
import { siteConfig } from "~/config/site";

import "~/styles/globals.css";

export default function IndexPage() {
  return (
    <section className="container mx-auto flex max-w-screen-md flex-col justify-center gap-2 pt-80">
      <h1 className="flex items-end gap-4 leading-tight tracking-tighter">
        <b className="text-2xl font-extrabold sm:text-4xl">Kodverk</b>
        <i className="text-lg font-medium sm:text-3xl">kodverket, plural</i>
      </h1>
      <p className="ml-6 text-lg text-muted-foreground">
        [Orklass]: Substantiv <br />
        [Uttal]: /kɔdˈværk/ <br />
      </p>
      <div className="flex flex-1 items-center justify-end space-x-4">
        <nav className="flex items-center space-x-1">
          <Link href={siteConfig.links.github} target="_blank" rel="noreferrer">
            <div
              className={buttonVariants({
                size: "sm",
                variant: "ghost",
              })}
            >
              <Icons.gitHub className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </div>
          </Link>
          <Link
            href={siteConfig.links.twitter}
            target="_blank"
            rel="noreferrer"
          >
            <div
              className={buttonVariants({
                size: "sm",
                variant: "ghost",
              })}
            >
              <Icons.twitter className="h-5 w-5 fill-current" />
              <span className="sr-only">Twitter</span>
            </div>
          </Link>
          <ThemeToggle />
        </nav>
      </div>
    </section>
  );
}
