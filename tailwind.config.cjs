/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: "class",
  theme: {
    fontSize: {
      xs: ["0.8125rem", { lineHeight: "1.5rem" }],
      sm: ["0.875rem", { lineHeight: "1.5rem" }],
      base: ["1rem", { lineHeight: "1.75rem" }],
      lg: ["1.125rem", { lineHeight: "1.75rem" }],
      xl: ["1.25rem", { lineHeight: "2rem" }],
      "2xl": ["1.5rem", { lineHeight: "2rem" }],
      "3xl": ["1.875rem", { lineHeight: "2.25rem" }],
      "4xl": ["2rem", { lineHeight: "2.5rem" }],
      "5xl": ["3rem", { lineHeight: "3.5rem" }],
      "6xl": ["3.75rem", { lineHeight: "1" }],
      "7xl": ["4.5rem", { lineHeight: "1" }],
      "8xl": ["6rem", { lineHeight: "1" }],
      "9xl": ["8rem", { lineHeight: "1" }],
    },
    fontFamily: {
      squartiqa: ["Squartiqa4FStrike", "sans-serif"],
    },
    extend: {
      colors: {
        primary: {
          100: "hsl(49, 100%, 96%)",
          200: "hsl(48, 100%, 88%)",
          300: "hsl(48, 95%, 76%)",
          400: "hsl(48, 94%, 68%)",
          500: "hsl(44, 92%, 63%)",
          600: "hsl(42, 87%, 55%)",
          700: "hsl(36, 77%, 49%)",
          800: "hsl(29, 80%, 44%)",
          900: "hsl(22, 82%, 39%)",
          1000: "hsl(15, 86%, 30%)",
        },
        neutral: {
          100: "hsl(0, 0%, 97%)",
          200: "hsl(0, 0%, 88%)",
          300: "hsl(0, 0%, 81%)",
          400: "hsl(0, 0%, 69%)",
          500: "hsl(0, 0%, 62%)",
          600: "hsl(0, 0%, 49%)",
          700: "hsl(0, 0%, 38%)",
          800: "hsl(0, 0%, 23%)",
          900: "hsl(0, 0%, 13%)",
          1000: "hsl(0, 0%, 1.2%)",
        },
        red: {
          100: "hsl(360, 100%, 95%)",
          200: "hsl(360, 100%, 87%)",
          300: "hsl(360, 100%, 80%)",
          400: "hsl(360, 91%, 69%)",
          500: "hsl(360, 83%, 62%)",
          600: "hsl(356, 75%, 53%)",
          700: "hsl(354, 85%, 44%)",
          800: "hsl(352, 90%, 35%)",
          900: "hsl(350, 94%, 28%)",
          1000: "hsl(348, 94%, 20%)",
        },
        green: {
          100: "hsl(165, 67%, 96%)",
          200: "hsl(163, 75%, 87%)",
          300: "hsl(162, 73%, 74%)",
          400: "hsl(164, 70%, 63%)",
          500: "hsl(166, 64%, 49%)",
          600: "hsl(168, 78%, 41%)",
          700: "hsl(170, 91%, 32%)",
          800: "hsl(172, 94%, 26%)",
          900: "hsl(172, 98%, 20%)",
          1000: "hsl(176, 100%, 13%)",
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      },
      listStyleType: {
        square: "square",
        roman: "upper-roman",
      },
      animation: {
        "slide-left": "slide-left 0.5s ease-in 0s 1 normal forwards",
        jellow: "jellow 2s ease 1s 1 normal forwards",
        swing: "swing 2s ease-out 0s 1 normal forwards",
        "rotate-blob": "rotate-blob 20s infinite",
        wave: "wave 2s ease-in-out infinite",
        "background-pan": "background-pan 4s linear infinite",
        "toast-enter":
          "toast-enter 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both",
        "toast-leave":
          "toast-leave 0.5s cubic-bezier(0.550, 0.085, 0.680, 0.530) both",
      },
      keyframes: {
        "slide-left": {
          "0%": { opacity: "0", transform: "translateX(-40px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        jellow: {
          "0%": { transform: "scale3d(1, 1, 1)" },
          "30%": { transform: "scale3d(1.25, 0.75, 1)" },
          "40%": { transform: "scale3d(0.75, 1.25, 1)" },
          "50%": { transform: "scale3d(1.15, 0.85, 1)" },
          "65%%": { transform: "scale3d(0.95, 1.05, 1)" },
          "75%": { transform: "scale3d(1.05, 0.95, 1)" },
          "100%": { transform: "scale3d(1, 1, 1)" },
        },
        swing: {
          "0%": { transform: "rotate3d(0, 0, 1, 0deg)" },
          "10%": { transform: "rotate3d(0, 0, 1, 15deg)" },
          "30%": { transform: "rotate3d(0, 0, 1, -10deg)" },
          "50%": { transform: "rotate3d(0, 0, 1, 5deg)" },
          "70%": { transform: "rotate3d(0, 0, 1, -5deg)" },
          "100%": { transform: "rotate3d(0, 0, 1, 0deg)" },
        },
        "rotate-blob": {
          "0%": { transform: "rotate(0deg)" },
          "50%": { transform: "rotate(180deg) scale(1, 1.5)" },
          "100%": { transform: "rotate(360deg)" },
        },
        wave: {
          "0%": { transform: "rotate(0deg)" },
          "10%": { transform: "rotate(14deg)" },
          "20%": { transform: "rotate(-8deg)" },
          "30%": { transform: "rotate(14deg)" },
          "40%": { transform: "rotate(-4deg)" },
          "50%": { transform: "rotate(10deg)" },
          "60%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(0deg)" },
        },
        "background-pan": {
          "0%": { backgroundPosition: "0 center" },
          "100%": { backgroundPosition: "-200% center" },
        },
        "toast-enter": {
          "0%": { opacity: "0", transform: "translateY(24rem)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "toast-leave": {
          "0%": { opacity: "1", transform: "translateY(0)" },
          "100%": { opacity: "0", transform: "translateY(24rem)" },
        },
      },
      screens: {
        // Custom Screen styles
        "3xl": "2000px",
        xs: "480px",
      },
      minHeight: {
        "1/2": "50%",
      },
    },

    typography: (theme) => ({
      invert: {
        css: {
          "--tw-prose-body": "var(--tw-prose-invert-body)",
          "--tw-prose-headings": "var(--tw-prose-invert-headings)",
          "--tw-prose-links": "var(--tw-prose-invert-links)",
          "--tw-prose-links-hover": "var(--tw-prose-invert-links-hover)",
          "--tw-prose-underline": "var(--tw-prose-invert-underline)",
          "--tw-prose-underline-hover":
            "var(--tw-prose-invert-underline-hover)",
          "--tw-prose-bold": "var(--tw-prose-invert-bold)",
          "--tw-prose-counters": "var(--tw-prose-invert-counters)",
          "--tw-prose-bullets": "var(--tw-prose-invert-bullets)",
          "--tw-prose-hr": "var(--tw-prose-invert-hr)",
          "--tw-prose-quote-borders": "var(--tw-prose-invert-quote-borders)",
          "--tw-prose-captions": "var(--tw-prose-invert-captions)",
          "--tw-prose-code": "var(--tw-prose-invert-code)",
          "--tw-prose-code-bg": "var(--tw-prose-invert-code-bg)",
          "--tw-prose-pre-code": "var(--tw-prose-invert-pre-code)",
          "--tw-prose-pre-bg": "var(--tw-prose-invert-pre-bg)",
          "--tw-prose-pre-border": "var(--tw-prose-invert-pre-border)",
          "--tw-prose-th-borders": "var(--tw-prose-invert-th-borders)",
          "--tw-prose-td-borders": "var(--tw-prose-invert-td-borders)",
        },
      },
      DEFAULT: {
        css: {
          "--tw-prose-body": theme("colors.neutral.800"),
          "--tw-prose-headings": theme("colors.neutral.1000"),
          "--tw-prose-links": theme("colors.yellow.500"),
          "--tw-prose-links-hover": theme("colors.yellow.600"),
          "--tw-prose-underline": theme("colors.yellow.500 / 0.2"),
          "--tw-prose-underline-hover": theme("colors.yellow.500"),
          "--tw-prose-bold": theme("colors.neutral.900"),
          "--tw-prose-counters": theme("colors.neutral.900"),
          "--tw-prose-bullets": theme("colors.neutral.900"),
          "--tw-prose-hr": theme("colors.neutral.100"),
          "--tw-prose-quote-borders": theme("colors.neutral.200"),
          "--tw-prose-captions": theme("colors.neutral.400"),
          "--tw-prose-code": theme("colors.neutral.700"),
          "--tw-prose-code-bg": theme("colors.neutral.300 / 0.2"),
          "--tw-prose-pre-code": theme("colors.neutral.100"),
          "--tw-prose-pre-bg": theme("colors.neutral.900"),
          "--tw-prose-pre-border": "transparent",
          "--tw-prose-th-borders": theme("colors.neutral.200"),
          "--tw-prose-td-borders": theme("colors.neutral.100"),

          "--tw-prose-invert-body": theme("colors.neutral.200"),
          "--tw-prose-invert-headings": theme("colors.neutral.50"),
          "--tw-prose-invert-links": theme("colors.yellow.400"),
          "--tw-prose-invert-links-hover": theme("colors.yellow.300"),
          "--tw-prose-invert-underline": theme("colors.yellow.400 / 0.3"),
          "--tw-prose-invert-underline-hover": theme("colors.yellow.400"),
          "--tw-prose-invert-bold": theme("colors.neutral.200"),
          "--tw-prose-invert-counters": theme("colors.neutral.200"),
          "--tw-prose-invert-bullets": theme("colors.neutral.200"),
          "--tw-prose-invert-hr": theme("colors.neutral.700 / 0.4"),
          "--tw-prose-invert-quote-borders": theme("colors.neutral.500"),
          "--tw-prose-invert-captions": theme("colors.neutral.500"),
          "--tw-prose-invert-code": theme("colors.neutral.300"),
          "--tw-prose-invert-code-bg": theme("colors.neutral.200 / 0.05"),
          "--tw-prose-invert-pre-code": theme("colors.neutral.100"),
          "--tw-prose-invert-pre-bg": "rgb(0 0 0 / 0.4)",
          "--tw-prose-invert-pre-border": theme("colors.neutral.200 / 0.1"),
          "--tw-prose-invert-th-borders": theme("colors.neutral.700"),
          "--tw-prose-invert-td-borders": theme("colors.neutral.800"),

          // Base
          color: "var(--tw-prose-body)",
          lineHeight: theme("lineHeight.7"),
          "> *": {
            marginTop: theme("spacing.10"),
            marginBottom: theme("spacing.10"),
          },
          p: {
            marginTop: theme("spacing.7"),
            marginBottom: theme("spacing.7"),
          },

          // Headings
          "h2, h3": {
            color: "var(--tw-prose-headings)",
            fontWeight: theme("fontWeight.semibold"),
          },
          h2: {
            fontSize: theme("fontSize.xl")[0],
            lineHeight: theme("lineHeight.7"),
            marginTop: theme("spacing.20"),
            marginBottom: theme("spacing.4"),
          },
          h3: {
            fontSize: theme("fontSize.base")[0],
            lineHeight: theme("lineHeight.7"),
            marginTop: theme("spacing.16"),
            marginBottom: theme("spacing.4"),
          },
          ":is(h2, h3) + *": {
            marginTop: 0,
          },

          // Images
          img: {
            borderRadius: theme("borderRadius.3xl"),
          },

          // Inline elements
          a: {
            color: "var(--tw-prose-links)",
            fontWeight: theme("fontWeight.semibold"),
            textDecoration: "underline",
            textDecorationColor: "var(--tw-prose-underline)",
            transitionProperty: "color, text-decoration-color",
            transitionDuration: theme("transitionDuration.150"),
            transitionTimingFunction: theme("transitionTimingFunction.in-out"),
          },
          "a:hover": {
            color: "var(--tw-prose-links-hover)",
            textDecorationColor: "var(--tw-prose-underline-hover)",
          },
          strong: {
            color: "var(--tw-prose-bold)",
            fontWeight: theme("fontWeight.semibold"),
          },
          code: {
            display: "inline-block",
            color: "var(--tw-prose-code)",
            fontSize: theme("fontSize.sm")[0],
            fontWeight: theme("fontWeight.semibold"),
            backgroundColor: "var(--tw-prose-code-bg)",
            borderRadius: theme("borderRadius.lg"),
            paddingLeft: theme("spacing.1"),
            paddingRight: theme("spacing.1"),
          },
          "a code": {
            color: "inherit",
          },
          ":is(h2, h3) code": {
            fontWeight: theme("fontWeight.bold"),
          },

          // Quotes
          blockquote: {
            paddingLeft: theme("spacing.6"),
            borderLeftWidth: theme("borderWidth.2"),
            borderLeftColor: "var(--tw-prose-quote-borders)",
            fontStyle: "italic",
          },

          // Figures
          figcaption: {
            color: "var(--tw-prose-captions)",
            fontSize: theme("fontSize.sm")[0],
            lineHeight: theme("lineHeight.6"),
            marginTop: theme("spacing.3"),
          },
          "figcaption > p": {
            margin: 0,
          },

          // Lists
          ul: {
            listStyleType: "disc",
          },
          ol: {
            listStyleType: "decimal",
          },
          "ul, ol": {
            paddingLeft: theme("spacing.6"),
          },
          li: {
            marginTop: theme("spacing.6"),
            marginBottom: theme("spacing.6"),
            paddingLeft: theme("spacing[3.5]"),
          },
          "li::marker": {
            fontSize: theme("fontSize.sm")[0],
            fontWeight: theme("fontWeight.semibold"),
          },
          "ol > li::marker": {
            color: "var(--tw-prose-counters)",
          },
          "ul > li::marker": {
            color: "var(--tw-prose-bullets)",
          },
          "li :is(ol, ul)": {
            marginTop: theme("spacing.4"),
            marginBottom: theme("spacing.4"),
          },
          "li :is(li, p)": {
            marginTop: theme("spacing.3"),
            marginBottom: theme("spacing.3"),
          },

          // Code blocks
          pre: {
            color: "var(--tw-prose-pre-code)",
            fontSize: theme("fontSize.sm")[0],
            fontWeight: theme("fontWeight.medium"),
            backgroundColor: "var(--tw-prose-pre-bg)",
            borderRadius: theme("borderRadius.3xl"),
            padding: theme("spacing.8"),
            overflowX: "auto",
            border: "1px solid",
            borderColor: "var(--tw-prose-pre-border)",
          },
          "pre code": {
            display: "inline",
            color: "inherit",
            fontSize: "inherit",
            fontWeight: "inherit",
            backgroundColor: "transparent",
            borderRadius: 0,
            padding: 0,
          },

          // Horizontal rules
          hr: {
            marginTop: theme("spacing.20"),
            marginBottom: theme("spacing.20"),
            borderTopWidth: "1px",
            borderColor: "var(--tw-prose-hr)",
            "@screen lg": {
              marginLeft: `calc(${theme("spacing.12")} * -1)`,
              marginRight: `calc(${theme("spacing.12")} * -1)`,
            },
          },

          // Tables
          table: {
            width: "100%",
            tableLayout: "auto",
            textAlign: "left",
            fontSize: theme("fontSize.sm")[0],
          },
          thead: {
            borderBottomWidth: "1px",
            borderBottomColor: "var(--tw-prose-th-borders)",
          },
          "thead th": {
            color: "var(--tw-prose-headings)",
            fontWeight: theme("fontWeight.semibold"),
            verticalAlign: "bottom",
            paddingBottom: theme("spacing.2"),
          },
          "thead th:not(:first-child)": {
            paddingLeft: theme("spacing.2"),
          },
          "thead th:not(:last-child)": {
            paddingRight: theme("spacing.2"),
          },
          "tbody tr": {
            borderBottomWidth: "1px",
            borderBottomColor: "var(--tw-prose-td-borders)",
          },
          "tbody tr:last-child": {
            borderBottomWidth: 0,
          },
          "tbody td": {
            verticalAlign: "baseline",
          },
          tfoot: {
            borderTopWidth: "1px",
            borderTopColor: "var(--tw-prose-th-borders)",
          },
          "tfoot td": {
            verticalAlign: "top",
          },
          ":is(tbody, tfoot) td": {
            paddingTop: theme("spacing.2"),
            paddingBottom: theme("spacing.2"),
          },
          ":is(tbody, tfoot) td:not(:first-child)": {
            paddingLeft: theme("spacing.2"),
          },
          ":is(tbody, tfoot) td:not(:last-child)": {
            paddingRight: theme("spacing.2"),
          },
        },
      },
    }),
  },
  plugins: [
    require("@tailwindcss/line-clamp"),
    require("tailwind-scrollbar-hide"),
    require("@tailwindcss/typography"),
  ],
};
