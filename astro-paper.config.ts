import { defineAstroPaperConfig } from "./src/types/config";

export default defineAstroPaperConfig({
  site: {
    url: "https://0xikon.github.io",
    title: "0xiKOn",
    description:
      "Ali Gill — security and AI/ML, with interests in the history and philosophy of science and technology and in mathematics. HackTheBox writeups and notes.",
    tagline: "HackTheBox writeups, security research and notes",
    author: "0xiKOn",
    profile: "https://github.com/0xiKOn",
    ogImage: "default-og.jpg",
    lang: "en",
    timezone: "Asia/Karachi",
    dir: "ltr",
  },
  posts: {
    perPage: 4,
    perIndex: 4,
    scheduledPostMargin: 15 * 60 * 1000,
  },
  features: {
    lightAndDarkMode: true,
    dynamicOgImage: true,
    showArchives: true,
    showBackButton: true,
    editPost: {
      enabled: true,
      url: "https://github.com/0xiKOn/0xiKOn.github.io/edit/master/",
    },
    search: "pagefind",
  },
  socials: [
    { name: "github",   url: "https://github.com/0xiKOn" },
    { name: "linkedin", url: "https://www.linkedin.com/in/ali-aizid-gill" },
    { name: "mail",     url: "mailto:alig91666@gmail.com" },
  ],
  shareLinks: [
    { name: "whatsapp", url: "https://wa.me/?text=" },
    { name: "facebook", url: "https://www.facebook.com/sharer.php?u=" },
    { name: "x",        url: "https://x.com/intent/post?url=" },
    { name: "telegram", url: "https://t.me/share/url?url=" },
    { name: "pinterest", url: "https://pinterest.com/pin/create/button/?url=" },
    { name: "mail",     url: "mailto:?subject=See%20this%20post&body=" },
  ],
});