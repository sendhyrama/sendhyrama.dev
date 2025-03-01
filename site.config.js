// @ts-check

/* #__PURE__ */
const domain =
  process.env.APP_URL?.replace(/https?:\/\//, "").split("/")[0] ||
  process.env.NEXT_PUBLIC_VERCEL_URL ||
  `${process.env.HOST || "localhost"}:${process.env.PORT || 3000}`;

/* #__PURE__ */
const protocol = domain.includes("localhost") || domain.match(/\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}/) ? "http" : "https";

/* #__PURE__ */
const url = `${protocol}://${domain}`;

/* #__PURE__ */
const defaultMetadata = {
  title: "Sendhy Ramadhinata",
  description: "Men in stem (stirring ☕, typing, enjoying, making commit)",
  email: "sendhyrama@gmail.com",
  domain,
  url,
  github: {
    username: "sendhyrama",
    repository: "sendhyrama.dev",
  },
  x: {
    creator: "sendhyrama",
  },
};

/* #__PURE__ */
const customMetadata = {
  emailUrl: `mailto:${defaultMetadata.email}`,
  githubUrl: `https://github.com/${defaultMetadata.github.username}`,
  linkedInUrl: "https://linkedin.com/in/sendhyrama",
  xUrl: `https://x.com/${defaultMetadata.x.creator}`,
  scheduleUrl: `https://cal.com/sendhyrama`,
  telegramUrl: `https://t.me/sendhyrama`,
  instagramUrl: `https://instagram.com/sendhyrama`,
  discordUrl: `https://discordapp.com/users/831460811847106581`,
  googledevUrl: `https://g.dev/sendhyrama`,
  personalwebUrl: `https://sendhyrama.dev`,
  showwcaseUrl: `https://sendhyrama.showwcase.com`,
  devtoUrl: `https://dev.to/sendhyrama`,
  stravaUrl: `https://www.strava.com/athletes/sendhyrama`,
  threadsUrl: `https://www.threads.net/@sendhyrama`,
  spotifyUrl: `https://open.spotify.com/user/31u2aussu6bmb63igjp7j2vnqkce`,
  soundcloudUrl: `https://soundcloud.com/sendhyrama`,
  lynkIdUrl: `https://lynk.id/sendhyrama`,
};

exports.defaultMetadata = defaultMetadata;
exports.customMetadata = customMetadata;
