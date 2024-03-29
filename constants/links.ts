
import { XIcon } from "@/components/icons/x";
import { customMetadata } from "@/site.config";
import { CloudIcon, GithubIcon, LinkedinIcon } from "lucide-react";

export const links = [
  { href: customMetadata.githubUrl, Icon: GithubIcon, label: "GitHub" },
  { href: customMetadata.linkedInUrl, Icon: LinkedinIcon, label: "LinkedIn" },
  { href: customMetadata.xUrl, Icon: XIcon, label: "X (formerly Twitter)" },
];

export const wholeLinks = [
  { href: customMetadata.githubUrl, Icon: GithubIcon, label: "GitHub" },
  { href: customMetadata.linkedInUrl, Icon: LinkedinIcon, label: "LinkedIn" },
  { href: customMetadata.xUrl, Icon: XIcon, label: "X (formerly Twitter)" },
];
