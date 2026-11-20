export interface TourStat {
  label: string;
  value: string;
  sub?: string;
  icon: string;
}

export interface TourChapterImage {
  url: string;
  caption: string;
  alt: string;
}

export interface TourChapterLogistics {
  label: string;
  value: string;
}

export interface TourChapterSpecs {
  yardage?: string;
  par?: string;
  courseType?: string;
}

export interface TourChapter {
  day: number;
  id: string;
  title: string;
  subtitle: string;
  architect?: string;
  courseName?: string;
  courseHref?: string;
  pacing?: string;
  transferTime?: string;
  whyItWorks?: string;
  content?: string[] | string;
  bullets?: string[];
  logistics: TourChapterLogistics[];
  images: TourChapterImage[];
  courseSpecs?: TourChapterSpecs;
}

export interface SanctuaryCategory {
  id: string;
  label: string;
  count: number;
}

export interface SanctuaryPhoto {
  url: string;
  caption: string;
  category: string;
}

export interface SanctuaryInclusion {
  title: string;
  desc: string;
  icon: string;
}

export interface TourSanctuary {
  name: string;
  tagline: string;
  location: string;
  href: string;
  overview: string;
  categories: SanctuaryCategory[];
  photos: SanctuaryPhoto[];
  inclusions: SanctuaryInclusion[];
}

export interface TourInclusionItem {
  title: string;
  desc: string;
}

export interface TourSeasonWindow {
  season: string;
  months: string;
  status: string;
  statusColor: string;
}

export interface TourPricing {
  guidePriceUSD: string;
  guidePriceAUD: string;
  perGolferLabel: string;
  seasonWindows: TourSeasonWindow[];
  customizationNote: string;
}

export interface TourFAQ {
  q: string;
  a: string;
}

export interface TourCuratorBrief {
  badge: string;
  title: string;
  paragraphs: string[];
  pacingLabel: string;
  pacingDesc: string;
  quote: string;
  author: string;
}

export interface TourSchemaConfig {
  name: string;
  description: string;
  canonicalUrl: string;
  heroImage: string;
  minPrice: string;
  priceCurrency: string;
}

export interface TourData {
  slug: string;
  titlePrefix: string;
  titleHighlight: string;
  subtitle: string;
  country: string;
  flag: string;
  heroBadge: string;
  heroImage: string;
  quickStats: TourStat[];
  curatorBrief: TourCuratorBrief;
  chapters: TourChapter[];
  sanctuary?: TourSanctuary;
  accommodation?: any;
  inclusions: {
    included: TourInclusionItem[];
    excluded: TourInclusionItem[];
  };
  pricing: TourPricing;
  faqs: TourFAQ[];
  schema: TourSchemaConfig;
}
