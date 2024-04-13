
import { XIcon } from "@/components/icons/x";
import { customMetadata } from "@/site.config";
import {
  CloudIcon,
  GithubIcon,
  LinkedinIcon,
  Send,
  Instagram,
  Phone,
  MessagesSquare,
  SquareCode,
  CodeXml,
  SquareTerminal,
  Mail,
} from "lucide-react";

export const links = [
  { href: customMetadata.githubUrl, Icon: GithubIcon, label: "GitHub" },
  { href: customMetadata.linkedInUrl, Icon: LinkedinIcon, label: "LinkedIn" },
  { href: customMetadata.xUrl, Icon: XIcon, label: "X (formerly Twitter)" },
  { href: customMetadata.telegramUrl, Icon: Send, label: "Telegram" },
  { href: customMetadata.instagramUrl, Icon: Instagram, label: "Instagram" },
  { href: customMetadata.whatsappUrl, Icon: Phone, label: "WhatsApp" },
  { href: customMetadata.discordUrl, Icon: MessagesSquare, label: "Discord" },
  { href: customMetadata.googledevUrl, Icon: SquareCode, label: "Google Dev Profile" },
  { href: customMetadata.personalwebUrl, Icon: CodeXml, label: "Personal Web" },
  { href: customMetadata.emailUrl, Icon: Mail, label: "Email" },
];

export const wholeLinks = [
  { href: customMetadata.personalwebUrl, Icon: CodeXml, label: "Personal Web" },
  { href: customMetadata.googledevUrl, Icon: SquareCode, label: "Google Dev Profile" },
  { href: customMetadata.githubUrl, Icon: GithubIcon, label: "GitHub" },
  { href: customMetadata.linkedInUrl, Icon: LinkedinIcon, label: "LinkedIn" },
  { href: customMetadata.xUrl, Icon: XIcon, label: "X (formerly Twitter)" },
  { href: customMetadata.instagramUrl, Icon: Instagram, label: "Instagram" },
  { href: customMetadata.telegramUrl, Icon: Send, label: "Telegram" },
  { href: customMetadata.whatsappUrl, Icon: Phone, label: "WhatsApp" },
  { href: customMetadata.emailUrl, Icon: Mail, label: "Email" },
];
