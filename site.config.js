const CONFIG = {
  // profile setting (required)
  profile: {
    name: "zzunkie",
    image: "/avatar.svg", // If you want to create your own notion avatar, check out https://notion-avatar.vercel.app
    role: "오르카 스튜디오 CTO",
    bio: "team.orcar.kr",
    email: "zzunkie@gmail.com",
    linkedin: "zzunkie",
    github: "zzunkie",
    instagram: "zzunkie",
  },
  projects: [
    {
      name: `섬카`,
      href: "https://fast.sumcar.kr",
    },
    {
      name: `오르카 ERP`,
      href: "https://rent.orcar.kr",
    },
    {
      name: `오르카 파트너스`,
      href: "https://partners.orcar.kr",
    },
    {
      name: `무지개렌터카 직판 사이트`,
      href: "https://rainbowrent.co.kr",
    },
  ],
  // blog setting (required)
  blog: {
    title: "zzunkie",
    description: "zzunkie's blog",
    theme: "dark", // ['light', 'dark', 'auto']
  },

  // CONFIG configration (required)
  link: "https://zzunkie.vercel.app",
  since: 2023, // If leave this empty, current year will be used.
  lang: "ko-KR", // ['en-US', 'zh-CN', 'zh-HK', 'zh-TW', 'ja-JP', 'es-ES', 'ko-KR']
  ogImageGenerateURL: "https://og-image-korean.vercel.app", // The link to generate OG image, don't end with a slash
  seo: {
    keywords: ["Blog", "Website", "Notion"],
  },

  // notion configuration (required)
  notionConfig: {
    pageId: process.env.NOTION_PAGE_ID,
  },

  // plugin configuration (optional)
  googleAnalytics: {
    enable: false,
    config: {
      measurementId: process.env.GOOGLE_MEASUREMENT_ID || "",
    },
  },
  googleSearchConsole: {
    enable: false,
    config: {
      siteVerification: process.env.GOOGLE_SITE_VERIFICATION || "",
    },
  },
  utterances: {
    enable: true,
    config: {
      repo: "zzunkie/morethan-log",
      "issue-term": "og:title",
      label: "💬 Utterances",
    },
  },
  cusdis: {
    enable: false,
    config: {
      host: "https://cusdis.com",
      appid: "", // Embed Code -> data-app-id value
    },
  },
  isProd: process.env.VERCEL_ENV === "production", // distinguish between development and production environment (ref: https://vercel.com/docs/environment-variables#system-environment-variables)
}
module.exports = CONFIG
