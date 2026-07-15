import en from './en';
import fr from './fr';
import es from './es';

export const locales = ['en', 'fr', 'es'] as const;
export type Locale = (typeof locales)[number];

export interface TimelineItem {
  dates: string;
  title: string;
  org: string;
  orgUrl?: string;
  points?: string[];
}

export interface Certification {
  year: string;
  title: string;
  org: string;
  url?: string;
  note?: string;
}

export interface SkillGroup {
  name: string;
  items: string[];
}

export interface Dictionary {
  meta: {
    title: string;
    description: string;
  };
  nav: {
    about: string;
    experience: string;
    education: string;
    skills: string;
    contact: string;
  };
  hero: {
    statusAvailable: string;
    statusLocation: string;
    intro: string;
    roles: string[];
    ctaContact: string;
    ctaResume: string;
    scrollHint: string;
  };
  about: {
    key: string;
    heading: string;
    body: string;
    factName: string;
    factAge: string;
    factAgeUnit: string;
    factLocation: string;
    factEmail: string;
    uptimeLabel: string;
    cvNote: string;
  };
  experience: {
    key: string;
    heading: string;
    items: TimelineItem[];
  };
  education: {
    key: string;
    heading: string;
    items: TimelineItem[];
  };
  certifications: {
    key: string;
    heading: string;
    view: string;
    items: Certification[];
  };
  skills: {
    key: string;
    heading: string;
    groups: SkillGroup[];
  };
  contact: {
    key: string;
    heading: string;
    body: string;
    button: string;
    locationLabel: string;
    emailLabel: string;
    githubLabel: string;
    linkedinLabel: string;
  };
  footer: {
    linksTitle: string;
    statusLink: string;
    questionsTitle: string;
    madeWith: string;
  };
  a11y: {
    skipToContent: string;
    languageMenu: string;
    openMenu: string;
  };
}

export const dictionaries: Record<Locale, Dictionary> = { en, fr, es };

export function getLocaleFromUrl(url: URL): Locale {
  const [, first] = url.pathname.split('/');
  if ((locales as readonly string[]).includes(first)) return first as Locale;
  return 'en';
}

export function pathForLocale(locale: Locale): string {
  return locale === 'en' ? '/' : `/${locale}/`;
}

export function t(locale: Locale): Dictionary {
  return dictionaries[locale];
}

const BIRTH_DATE = new Date(1999, 5, 16);

export function currentAge(): number {
  const now = new Date();
  let age = now.getFullYear() - BIRTH_DATE.getFullYear();
  const beforeBirthday =
    now.getMonth() < BIRTH_DATE.getMonth() ||
    (now.getMonth() === BIRTH_DATE.getMonth() && now.getDate() < BIRTH_DATE.getDate());
  if (beforeBirthday) age -= 1;
  return age;
}
