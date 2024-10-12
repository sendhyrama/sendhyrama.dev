import { customMetadata } from "@/site.config";
import {
  BookOpenTextIcon,
  CalendarIcon,
  Code2Icon,
  HomeIcon,
  LibrarySquareIcon,
  LinkIcon,
  SmileIcon,
  SpeakerIcon,
  SwordsIcon,
} from "lucide-react";

export const routes = [
  { Icon: HomeIcon, children: "Home", href: "/" },
  { Icon: SmileIcon, children: "About", href: "/about" },
  { Icon: BookOpenTextIcon, children: "Articles", href: "/articles" },
  { Icon: Code2Icon, children: "Projects", href: "/projects" },
  { Icon: SpeakerIcon, children: "Talks", href: "/talks" },
  { Icon: LinkIcon, children: "Socials", href: "/links" },
  { Icon: CalendarIcon, children: "Appointment", href: customMetadata.scheduleUrl },
];

export const routeGroups = [
  {
    heading: "Navigation",
    items: [
      { Icon: HomeIcon, children: "Home", href: "/" },
      { Icon: SmileIcon, children: "About", href: "/about" },
      { Icon: BookOpenTextIcon, children: "Articles", href: "/articles" },
      { Icon: Code2Icon, children: "Projects", href: "/projects" },
      { Icon: SpeakerIcon, children: "Talks", href: "/talks" },
      { Icon: LinkIcon, children: "Socials", href: "/links" },
      { Icon: CalendarIcon, children: "Appointment", href: customMetadata.scheduleUrl },
    ],
  },
  {
    heading: "Other",
    items: [
      { Icon: LinkIcon, children: "Links", href: "/links" },
      { Icon: SwordsIcon, children: "Uses", href: "/uses" },
      { Icon: LibrarySquareIcon, children: "Keystatic Admin", href: "/keystatic" },
      //
    ],
  },
];
