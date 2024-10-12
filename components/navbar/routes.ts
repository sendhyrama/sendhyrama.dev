import { customMetadata } from "@/site.config";

export const routes = [
  { children: "Home", href: "/", exact: true },
  { children: "About", href: "/about" },
  { children: "Articles", href: "/articles" },
  { children: "Projects", href: "/projects" },
  { children: "Talks", href: "/talks" },
  { children: "Socials", href: "/links" },
  { children: "Book an Appointment", href: customMetadata.scheduleUrl },
];
