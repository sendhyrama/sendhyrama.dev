
import { SoundCloudIcon } from "@/components/icons/soundcloud";
import { SpotifyIcon } from "@/components/icons/spotify";
import { StravaIcon } from "@/components/icons/strava";
import { ThreadsIcon } from "@/components/icons/threads";
import { XIcon } from "@/components/icons/x";
import { customMetadata } from "@/site.config";
import {
  CodeXml,
  GithubIcon,
  Instagram,
  LinkedinIcon,
  Mail,
  Send,
  SquareCode,
  SwitchCamera
} from "lucide-react";

export const links = [
  { href: customMetadata.githubUrl, Icon: GithubIcon, label: "GitHub" },
  { href: customMetadata.linkedInUrl, Icon: LinkedinIcon, label: "LinkedIn" },
  { href: customMetadata.xUrl, Icon: XIcon, label: "X (formerly Twitter)" },
  { href: customMetadata.spotifyUrl, Icon: SpotifyIcon, label: "Spotify" },
  { href: customMetadata.stravaUrl, Icon: StravaIcon, label: "Strava" },
  // { href: customMetadata.telegramUrl, Icon: Send, label: "Telegram" },
  // { href: customMetadata.instagramUrl, Icon: Instagram, label: "Instagram" },
  // { href: customMetadata.discordUrl, Icon: MessagesSquare, label: "Discord" },
  // { href: customMetadata.googledevUrl, Icon: SquareCode, label: "Google Dev Profile" },
  // { href: customMetadata.personalwebUrl, Icon: CodeXml, label: "Personal Web" },
  // { href: customMetadata.emailUrl, Icon: Mail, label: "Email" },
];

export const wholeLinks = [
  { href: customMetadata.lynkIdUrl, Icon: SwitchCamera, label: "Lightroom Presets Pack" },
  { href: customMetadata.personalwebUrl, Icon: CodeXml, label: "Personal Website" },
  { href: customMetadata.googledevUrl, Icon: SquareCode, label: "Google Dev Profile" },
  { href: customMetadata.githubUrl, Icon: GithubIcon, label: "GitHub" },
  { href: customMetadata.linkedInUrl, Icon: LinkedinIcon, label: "LinkedIn" },
  { href: customMetadata.xUrl, Icon: XIcon, label: "X (formerly Twitter)" },
  { href: customMetadata.instagramUrl, Icon: Instagram, label: "Instagram" },
  { href: customMetadata.telegramUrl, Icon: Send, label: "Telegram" },
  { href: customMetadata.emailUrl, Icon: Mail, label: "Email" },
  { href: customMetadata.stravaUrl, Icon: StravaIcon, label: "Strava" },
  { href: customMetadata.spotifyUrl, Icon: SpotifyIcon, label: "Spotify" },
  { href: customMetadata.soundcloudUrl, Icon: SoundCloudIcon, label: "SoundCloud" },
  // { href: customMetadata.threadsUrl, Icon: ThreadsIcon, label: "Threads" },
];
