import { customMetadata } from "@/site.config";

export const routes = [
  { children: "Home", href: "/", exact: true },
  { children: "About", href: "/about" },
  { children: "Talks", href: "/talks" },
  { children: "Articles", href: "/articles" },
  { children: "Projects", href: "/projects" },
  { children: "Links", href: "/links" },
  { children: "Appointment", href: customMetadata.scheduleUrl },
];
