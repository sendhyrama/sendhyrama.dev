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
  description: "Software engineer specialized in mobile development",
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
};

exports.defaultMetadata = defaultMetadata;
exports.customMetadata = customMetadata;
