import fs from "fs";
import path from "path";

export type CourseCountry = "vietnam" | "thailand" | "cambodia";
export const COURSE_COUNTRIES: CourseCountry[] = ["vietnam", "thailand", "cambodia"];

export interface CourseImage {
  src: string;
  alt: string;
  caption?: string;
}

export interface CourseSpecRow {
  label: string;
  value: string;
  href?: string;
}

export interface CourseCriterion {
  label: string;
  score: number;
  maxScore?: number;
  highlight?: string;
}

export interface CourseData {
  country: CourseCountry;
  countryName: string;
  countryCode: string;
  slug: string;
  url: string;
  metadata: {
    title: string;
    titleIsAbsolute?: boolean;
    description: string;
    keywords: string[];
    ogImage: string;
    ogAlt: string;
  };
  hero: {
    badge: string;
    h1Line1: string;
    h1Gold: string;
    quote: string;
  };
  images: CourseImage[];
  specs: CourseSpecRow[];
  overviewParagraphs: string[];
  subCourseLinks?: { label: string; href: string }[];
  galleryHeading: {
    prefix: string;
    gold: string;
  };
  schema: {
    name: string;
    description: string;
    imageUrl: string;
    addressLocality: string;
    addressCountry: string;
    numberOfHoles: number;
    courseLength: number;
    par: number;
    designer: string;
    sameAs?: string[];
  };
  curatorBriefHtml: string[];
  reviewLink?: { label: string; href: string };
  scorecard: {
    itemName: string;
    itemImage: string;
    overallScore: number;
    maxScore: number;
    gradeBadge: string;
    experienceTier?: "P" | "V" | "C";
    inspectionDate: string;
    criteria: CourseCriterion[];
    verdict: string;
  };
  faqs: { q: string; a: string }[];
  nav: {
    prev: { title: string; path: string } | null;
    next: { title: string; path: string } | null;
  };
}

const COURSES_DATA_DIR = path.join(process.cwd(), "src/data/courses");

export function getAllCourseParams(): { country: CourseCountry; slug: string }[] {
  const params: { country: CourseCountry; slug: string }[] = [];
  for (const country of COURSE_COUNTRIES) {
    const dir = path.join(COURSES_DATA_DIR, country);
    if (!fs.existsSync(dir)) continue;
    const files = fs
      .readdirSync(dir)
      .filter((f) => f.endsWith(".json"))
      .sort();
    for (const file of files) {
      params.push({ country, slug: file.replace(/\.json$/, "") });
    }
  }
  return params;
}

export function getCourseData(country: string, slug: string): CourseData | null {
  if (!COURSE_COUNTRIES.includes(country as CourseCountry)) return null;
  const safeSlug = slug.replace(/[^a-z0-9-]/gi, "");
  const filePath = path.join(COURSES_DATA_DIR, country, `${safeSlug}.json`);
  if (!fs.existsSync(filePath)) return null;
  return JSON.parse(fs.readFileSync(filePath, "utf-8")) as CourseData;
}
