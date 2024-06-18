import { customMetadata } from "@/site.config";

export const routes = [
  { children: "Home", href: "/", exact: true },
  { children: "About", href: "/about" },
  { children: "Articles", href: "/articles" },
  { children: "Projects", href: "/projects" },
  { children: "Book an Appointment", href: customMetadata.scheduleUrl },
];
