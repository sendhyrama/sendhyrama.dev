import { AdaptiveLink } from "@/components/adaptive-link";
import { ContainerSection } from "@/components/container-section";
import { getProjects } from "@/server/keystatic";
import { trimHttp } from "@/utils/string";
import { cn } from "@/utils/ui";
import { BracesIcon, GithubIcon, LinkIcon } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects",
  description: "Things I've made trying to put my dent in the universe.",
};

export default async function Page() {
  const projects = await getProjects();
  return (
    <ContainerSection
      className="relative space-y-4"
      enableNavShadow
      data-stagger-children
    >
      <h1 className="max-w-screen-sm text-balance text-4xl font-bold">
        Things I&apos;ve made trying to put my dent in the universe.
      </h1>
      <p className="!mb-16 max-w-screen-sm space-y-4 text-balance text-zinc-700 dark:text-zinc-300">
      Please wait abangkuh, this page is under construction 🚧
      </p>
      <ul
        className={cn(
          "grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3",
          "sm:max-w-screen-sm lg:max-w-screen-lg",
          //
        )}
        data-stagger-children
      >
        {projects.map((project, i) => {
          function ProjectIcon() {
            if (project.iconUrl)
              return (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={project.iconUrl}
                  alt={project.name}
                />
              );
            if (project.link.value?.href.includes("github.com")) return <GithubIcon />;
            return <BracesIcon />;
          }
          return (
            <li
              key={i}
              className={cn(
                "group relative text-sm",
                "flex-col items-start sm:flex",
                "before:absolute before:-z-10 before:transition-[opacity,inset]",
                "before:rounded-lg before:bg-zinc-500/5 dark:before:bg-zinc-500/10",
                "before:opacity-0 hover:before:opacity-100",
                "before:-inset-1 hover:before:-inset-4",
              )}
            >
              <div
                className={cn(
                  "mb-2 rounded-full border border-zinc-500/25 bg-zinc-500/5",
                  "[&>*]:m-1 [&>*]:h-8 [&>*]:w-8 [&>*]:rounded-full [&>*]:object-cover",
                  "[&>svg]:p-1",
                  "float-right sm:float-none",
                )}
              >
                <ProjectIcon />
              </div>
              <div className="mb-2 text-lg font-bold">{project.name}</div>
              <div className="mb-4 line-clamp-2 h-auto text-balance text-zinc-700 dark:text-zinc-300 sm:h-16">
                {project.description}
              </div>
              <div className="mb-4 text-zinc-500">{project.subtitle}</div>
              {project.link.value && (
                <AdaptiveLink
                  href={project.link.value.href}
                  className={cn(
                    "flex items-center gap-x-2 hover:underline",
                    "text-primary-600 dark:text-primary-500",
                    "before:absolute before:-inset-4",
                  )}
                >
                  <LinkIcon className="h-3 w-3" />
                  <span className="line-clamp-1">{project.link.value.label || trimHttp(project.link.value.href)}</span>
                </AdaptiveLink>
              )}
            </li>
          );
        })}
      </ul>
    </ContainerSection>
  );
}
