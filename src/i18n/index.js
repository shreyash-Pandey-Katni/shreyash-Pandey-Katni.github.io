// i18n glue: merges Kannada/Mandarin translations over the English source
// (src/data/siteContent.js) with English fallback for any untranslated field.
import * as en from "../data/siteContent.js";
import kn from "./kn.js";
import zh from "./zh.js";
import knPages from "./kn.pages.js";
import zhPages from "./zh.pages.js";

const translations = { kn, zh };
const pageTranslations = { kn: knPages, zh: zhPages };

export const LOCALES = [
  { code: "en", label: "EN", name: "English" },
  { code: "kn", label: "ಕನ್ನಡ", name: "ಕನ್ನಡ" },
  { code: "zh", label: "中文", name: "中文" },
];
export const LOCALE_CODES = LOCALES.map((l) => l.code);

// English UI strings (canonical keys; translations live in each locale's `ui`).
const uiEn = {
  nav_home: "Home", nav_work: "Work", nav_about: "About", nav_projects: "Projects",
  nav_playground: "Playground", nav_cta: "Get in touch", nav_resume: "Resume",
  hero_view_work: "View my work", hero_get_in_touch: "Get in touch",
  home_focus_eyebrow: "What I optimize for", home_experience_eyebrow: "Systems I have shipped",
  home_projects_eyebrow: "Current projects", home_seeall_eyebrow: "See all builds",
  home_seeall_title: "Explore the full project portfolio", home_all_projects: "All projects",
  home_bottom_eyebrow: "Looking for my next role", home_more_about: "More about me",
  proj_view_project: "View project", skills_heading: "Technical skills", principles_heading: "How I operate",
  // Work page
  work_capability_map: "Capability map",
  work_cta_eyebrow: "Interested in working together?", work_cta_title: "Let's discuss role fit",
  work_cta_body: "I am most interested in roles where AI systems, backend engineering, and reliability work intersect.",
  cta_get_in_touch: "Get in touch",
  // About page
  about_education: "Education", about_what_i_value: "What I value",
  about_certifications: "Certifications", about_lets_connect: "Let's connect",
  about_open_to_opportunities: "Open to opportunities",
  about_open_to_opportunities_body: "I'm looking for roles at the intersection of AI systems, backend engineering, and reliability.",
  about_outside_work: "Outside work", about_find_me_online: "Find me online",
  about_book_session: "Book a session on Topmate", about_copy_email: "Copy email address",
  // Projects page
  projects_flagship_builds: "Flagship builds", projects_earlier_work: "Earlier work",
  projects_on_the_roadmap: "On the roadmap", projects_view_details: "View details",
  projects_view_github: "View on GitHub", projects_view_details_arrow: "View details →",
  projects_public_work_eyebrow: "Open-source and public work",
  projects_public_work_title: "Explore models, code, and experiments",
  projects_public_work_body: "All flagship projects are documented on GitHub. Model weights and cards are published on Hugging Face.",
};

function isObj(x) { return x && typeof x === "object" && !Array.isArray(x); }

function deepMerge(base, over) {
  if (over === undefined || over === null) return base;
  if (Array.isArray(base)) {
    if (!Array.isArray(over)) return base;
    return base.map((b, i) => (i in over ? deepMerge(b, over[i]) : b));
  }
  if (isObj(base)) {
    const out = {};
    for (const k of Object.keys(base)) out[k] = deepMerge(base[k], over ? over[k] : undefined);
    if (isObj(over)) for (const k of Object.keys(over)) if (!(k in out)) out[k] = over[k];
    return out;
  }
  return over !== undefined ? over : base;
}

// Snapshot the English named exports into a plain object.
const enContent = {
  siteMeta: en.siteMeta, navigationLinks: en.navigationLinks, socialLinks: en.socialLinks,
  experienceTimeline: en.experienceTimeline, workPrinciples: en.workPrinciples,
  capabilityGroups: en.capabilityGroups, flagshipProjects: en.flagshipProjects,
  homeContent: en.homeContent, pageMeta: en.pageMeta, archiveProjects: en.archiveProjects,
  primaryContactHref: en.primaryContactHref,
  workContent: en.workContent, aboutContent: en.aboutContent, projectsContent: en.projectsContent,
  skillGroups: en.skillGroups, certifications: en.certifications, roadmapProjects: en.roadmapProjects,
};

export function normalizeLocale(locale) {
  return LOCALE_CODES.includes(locale) ? locale : "en";
}

export function getContent(locale = "en") {
  locale = normalizeLocale(locale);
  if (locale === "en") return enContent;
  return deepMerge(deepMerge(enContent, translations[locale]), pageTranslations[locale]);
}

export function getUI(locale = "en") {
  locale = normalizeLocale(locale);
  return { ...uiEn, ...(translations[locale]?.ui || {}) };
}

// /work -> /kn/work etc.; English keeps the bare path.
export function localizedPath(locale, path) {
  locale = normalizeLocale(locale);
  const clean = path.startsWith("/") ? path : "/" + path;
  return locale === "en" ? clean : `/${locale}${clean === "/" ? "" : clean}`;
}

// Strip any locale prefix from a pathname -> the bare ("en") path.
export function stripLocale(pathname) {
  for (const code of LOCALE_CODES) {
    if (code === "en") continue;
    if (pathname === `/${code}` || pathname === `/${code}/`) return "/";
    if (pathname.startsWith(`/${code}/`)) return pathname.slice(code.length + 1);
  }
  return pathname || "/";
}
