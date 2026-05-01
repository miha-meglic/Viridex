import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";

const config: Config = {
  title: "Viridex",
  favicon: "img/favicon.ico",

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true,
  },

  url: "https://viridex.si",
  baseUrl: "/learn",

  organizationName: "miha-meglic",
  projectName: "viridex",

  onBrokenLinks: "throw",

  i18n: {
    defaultLocale: "sl",
    locales: ["sl"],
  },

  presets: [
    [
      "classic",
      {
        docs: false,
        blog: false,
      } satisfies Preset.Options,
    ],
  ],

  plugins: [
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "prirocnik-racunalnistvo",
        path: "prirocnik-racunalnistvo",
        routeBasePath: "prirocnik-racunalnistvo",
        remarkPlugins: [remarkMath],
        rehypePlugins: [rehypeKatex],
      },
    ],
  ],

  scripts: [
    {
      src: "https://analytics.intralab.si/script.js",
      defer: true,
      "data-website-id": "237e0e24-7567-4ebe-98b6-3e57f63a5f95",
    },
  ],

  stylesheets: [
    {
      href: "https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css",
      type: "text/css",
      integrity:
        "sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM",
      crossorigin: "anonymous",
    },
  ],

  themeConfig: {
    image: "img/viridex-social-card.jpg",
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      logo: {
        alt: "Viridex",
        src: "img/logo.svg",
        href: "https://viridex.si/",
      },
    },
    // footer: {
    //   style: "dark",
    //   copyright: `Copyright © ${new Date().getFullYear()} Intralab s.p. -- Built with Docusaurus.`,
    // },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
