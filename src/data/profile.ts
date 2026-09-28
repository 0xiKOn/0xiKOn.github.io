/**
 * Homepage profile data.
 *
 * The homepage shows short summaries of things the About page covers in full
 * (credential cards with verification links, the complete Elsewhere list), so
 * keep this list to the headline items and let /about carry the detail.
 */

export type Credential = {
  /** Short form shown on the homepage chip. */
  abbr: string;
  /** Full name, used as the chip's title attribute. */
  name: string;
  year: number;
};

export type ProfileLink = {
  label: string;
  url: string;
};

export const credentials: Credential[] = [
  {
    abbr: "CPTS",
    name: "Certified Penetration Testing Specialist",
    year: 2025,
  },
  { abbr: "Security+", name: "CompTIA Security+", year: 2024 },
  { abbr: "Linux+", name: "CompTIA Linux+", year: 2024 },
  { abbr: "PORP", name: "Practical OSINT Research Professional", year: 2024 },
  { abbr: "eJPT", name: "Junior Penetration Tester", year: 2023 },
];

/** Profiles that aren't in `socials` (which drives the icon row). */
export const elsewhere: ProfileLink[] = [
  { label: "Hack The Box", url: "https://app.hackthebox.com/profile/0xikon" },
  { label: "TryHackMe", url: "https://tryhackme.com/p/0xikon" },
  { label: "Medium", url: "https://medium.com/@0xikon" },
  { label: "GitBook notes", url: "https://0xikon.gitbook.io/home" },
];
