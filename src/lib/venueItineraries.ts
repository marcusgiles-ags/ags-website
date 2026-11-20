import fs from 'fs';
import path from 'path';

export interface VenueItineraryTour {
  slug: string;
  title: string;
  duration: string;
  heroImage: string;
  highlight: string;
  href: string;
}

export interface VenueItineraryPackage {
  slug: string;
  title: string;
  duration: string;
  heroImage: string;
  highlight: string;
  guidePrice?: string;
  href: string;
}

export interface VenueItinerariesResult {
  signatureTour: VenueItineraryTour;
  packages: VenueItineraryPackage[];
}

// Regional fallback maps
const REGIONAL_SIGNATURE_TOURS: Record<string, VenueItineraryTour> = {
  vietnam_central: {
    slug: 'the-central-coast-classic',
    title: 'The Central Coast Classic',
    duration: '7 Days / 6 Nights',
    heroImage: '/images/courses/vietnam/hoiana-shores/hoiana-shores-beachfront-golf.webp',
    highlight: 'Our all-inclusive, fully hosted signature luxury expedition across Central Vietnam’s premier links.',
    href: '/tours/the-central-coast-classic/'
  },
  vietnam_hoian_bliss: {
    slug: 'hoi-an-beachfront-bliss',
    title: 'Hoi An Beachfront Bliss',
    duration: '7 Days / 6 Nights',
    heroImage: '/images/courses/vietnam/laguna-lang-co/laguna-golf-lang-co-jungle-tropical-3.webp',
    highlight: '7-day luxury beachfront golf tour in Hoi An playing Montgomerie Links, Vinpearl Nam Hoi An, Laguna Lang Co, and Ba Na Hills.',
    href: '/tours/hoi-an-beachfront-bliss/'
  },
  vietnam_anbang_society: {
    slug: 'vietnam-central-coast',
    title: 'The An Bang Invitational (Vietnam Central Coast)',
    duration: '7 Days / 6 Nights',
    heroImage: '/images/courses/vietnam/hoiana-shores/hoiana-heart-bunker.webp',
    highlight: '7-day Central Vietnam society golf tour playing Hoiana Shores, Ba Na Hills, Laguna Lang Co, and BRG Da Nang from An Bang Beach Villa.',
    href: '/tours/vietnam-central-coast/'
  },
  vietnam_coastal_sprint: {
    slug: 'the-coastal-sprint',
    title: 'The Coastal Sprint',
    duration: '4 Days / 3 Nights',
    heroImage: '/images/courses/vietnam/ba-na-hills/ba-na-hills-golf-club-night-golf-4.webp',
    highlight: '4-day Central Vietnam executive golf escape playing Hoiana Shores and Ba Na Hills Night Golf with VIP transfers.',
    href: '/tours/the-coastal-sprint/'
  },
  vietnam_north: {
    slug: 'the-emperors-fairways',
    title: "The Emperor's Fairways",
    duration: '9 Days / 8 Nights',
    heroImage: '/images/courses/vietnam/legend-hill/legend-hill-1.webp',
    highlight: 'Hosted championship golf across Northern Vietnam paired with heritage luxury in Hanoi and Ha Long Bay.',
    href: '/tours/the-emperors-fairways/'
  },
  vietnam_south: {
    slug: 'the-saigon-and-shores-escape',
    title: 'The Saigon & Shores Escape',
    duration: '8 Days / 7 Nights',
    heroImage: '/images/courses/vietnam/the-bluffs-ho-tram/the-bluffs-ho-tram-strip-vietnam-1.webp',
    highlight: 'Metropolitan Saigon luxury paired with Greg Norman’s dramatic ocean dunes at The Bluffs Grand Ho Tram.',
    href: '/tours/the-saigon-and-shores-escape/'
  },
  vietnam_all: {
    slug: 'the-grand-vietnam-odyssey',
    title: 'The Grand Vietnam Odyssey',
    duration: '14 Days / 13 Nights',
    heroImage: '/images/homepage/hero-slider/vietnam-coastal-golf-course-hoiana-shores-aerial-beachside.webp',
    highlight: 'The ultimate 14-day cross-country expedition traversing Hanoi, Da Nang, and Saigon.',
    href: '/tours/the-grand-vietnam-odyssey/'
  },
  thailand_phuket: {
    slug: 'thailand-royal-siam',
    title: 'Thailand Royal Siam Odyssey',
    duration: '14 Days / 13 Nights',
    heroImage: '/images/courses/thailand/red-mountain/red-mountain-golf-club-phuket-thailand-1.webp',
    highlight: 'Flagship hosted luxury journey connecting Bangkok’s private clubs with Phuket’s dramatic island fairways.',
    href: '/tours/thailand-royal-siam/'
  },
  thailand_huahin: {
    slug: 'the-bangkok-and-hua-hin-fairways',
    title: 'The Bangkok & Hua Hin Fairways',
    duration: '9 Days / 8 Nights',
    heroImage: '/images/courses/thailand/black-mountain/black-mountain-golf-club-hua-hin-thailand-1.webp',
    highlight: 'Metropolitan championship play paired with royal seaside relaxation in historic Hua Hin.',
    href: '/tours/the-bangkok-and-hua-hin-fairways/'
  },
  thailand_chiangmai: {
    slug: 'the-lanna-heritage-golf-trail',
    title: 'The Lanna Heritage Golf Trail',
    duration: '8 Days / 7 Nights',
    heroImage: '/images/courses/thailand/chiang-mai-highlands/chiang-mai-highlands-golf-country-club-thailand-1.webp',
    highlight: 'Highland mountain golf amidst ancient northern Lanna culture and private four-star retreats.',
    href: '/tours/the-lanna-heritage-golf-trail/'
  },
  thailand_bangkok: {
    slug: 'the-bangkok-and-hua-hin-fairways',
    title: 'The Bangkok & Hua Hin Fairways',
    duration: '9 Days / 8 Nights',
    heroImage: '/images/courses/thailand/thai-country-club/thai-country-club-1.webp',
    highlight: 'Metropolitan championship play paired with royal seaside relaxation in historic Hua Hin.',
    href: '/tours/the-bangkok-and-hua-hin-fairways/'
  },
  cambodia_siemreap: {
    slug: 'cambodia-angkor-odyssey',
    title: 'Cambodia Angkor Odyssey',
    duration: '7 Days / 6 Nights',
    heroImage: '/images/courses/cambodia/angkor-golf-resort/angkor-golf-resort-siem-reap-cambodia-1.webp',
    highlight: 'Championship Sir Nick Faldo golf integrated with private VIP access to the ancient temples of Angkor.',
    href: '/tours/cambodia-angkor-odyssey/'
  },
  cambodia_temple_trail: {
    slug: 'the-khmer-temple-trail',
    title: 'The Khmer Temple Trail',
    duration: '5 Days / 4 Nights',
    heroImage: '/images/courses/cambodia/phokeethra/phokeethra-country-club-asian-tour-2.webp',
    highlight: '5-day Siem Reap boutique golf & Angkor Wat tour playing Angkor Golf Resort, Phokeethra & Booyoung.',
    href: '/tours/the-khmer-temple-trail/'
  },
  indochina_golden_age: {
    slug: 'the-indochina-golden-age',
    title: 'The Indochina Golden Age',
    duration: '12 Days / 11 Nights',
    heroImage: '/images/courses/vietnam/hoiana-shores/hoiana-heart-bunker.webp',
    highlight: '12-day luxury golf expedition across Cambodia, Vietnam & Thailand playing 7 championship rounds.',
    href: '/tours/the-indochina-golden-age/'
  },
  cambodia_all: {
    slug: 'the-khmer-kingdom-links',
    title: 'The Khmer Kingdom Links',
    duration: '10 Days / 9 Nights',
    heroImage: '/images/courses/cambodia/vattanac/vattanac-1.webp',
    highlight: 'The definitive 10-day Cambodian passage combining Siem Reap, Phnom Penh, and private island recovery.',
    href: '/tours/the-khmer-kingdom-links/'
  }
};

let cachedPackages: any[] | null = null;

function loadPackages(): any[] {
  if (cachedPackages) return cachedPackages;
  try {
    const dir = path.join(process.cwd(), 'src/data/packages');
    if (!fs.existsSync(dir)) return [];
    cachedPackages = fs.readdirSync(dir)
      .filter(f => f.endsWith('.json'))
      .map(f => JSON.parse(fs.readFileSync(path.join(dir, f), 'utf8')));
    return cachedPackages;
  } catch {
    return [];
  }
}

export function getVenueItineraries(
  venueHref: string,
  venueName: string
): VenueItinerariesResult {
  const normHref = venueHref.endsWith('/') ? venueHref : `${venueHref}/`;
  const allPackages = loadPackages();

  // Find all packages that directly list this venue
  const directPackages = allPackages.filter(p =>
    (p.featuredVenues || []).some((v: any) => v.href === normHref)
  );

  const isVietnam = normHref.includes('/vietnam/');
  const isThailand = normHref.includes('/thailand/');
  const isCambodia = normHref.includes('/cambodia/');

  const text = `${normHref} ${venueName}`.toLowerCase();

  // Determine regional signature tour
  let signatureTour: VenueItineraryTour;
  if (isVietnam) {
    if (text.includes('hanoi') || text.includes('legend-hill') || text.includes('sky-lake') || text.includes('thanh-lanh') || text.includes('halong') || text.includes('metropole') || text.includes('capella')) {
      signatureTour = REGIONAL_SIGNATURE_TOURS.vietnam_north;
    } else if (text.includes('saigon') || text.includes('ho-tram') || text.includes('bluffs') || text.includes('reverie') || text.includes('caravelle') || text.includes('park-hyatt')) {
      signatureTour = REGIONAL_SIGNATURE_TOURS.vietnam_south;
    } else if (text.includes('an-bang') || text.includes('hoiana')) {
      signatureTour = REGIONAL_SIGNATURE_TOURS.vietnam_anbang_society;
    } else if (text.includes('palm-gardens') || text.includes('vinpearl-nam-hoi-an') || text.includes('montgomerie') || text.includes('anantara-hoi-an') || text.includes('namia') || text.includes('almanity') || text.includes('little-riverside') || text.includes('bel-marina')) {
      signatureTour = REGIONAL_SIGNATURE_TOURS.vietnam_hoian_bliss;
    } else if (text.includes('ba-na-hills') || text.includes('m-hotel') || text.includes('chicland') || text.includes('fusion-resort-villa-da-nang')) {
      signatureTour = REGIONAL_SIGNATURE_TOURS.vietnam_coastal_sprint;
    } else {
      signatureTour = REGIONAL_SIGNATURE_TOURS.vietnam_central;
    }
  } else if (isThailand) {
    if (text.includes('phuket') || text.includes('red-mountain') || text.includes('blue-canyon') || text.includes('aquella') || text.includes('amanpuri') || text.includes('banyan-tree-phuket')) {
      signatureTour = REGIONAL_SIGNATURE_TOURS.thailand_phuket;
    } else if (text.includes('chiang-mai') || text.includes('highlands') || text.includes('gassan')) {
      signatureTour = REGIONAL_SIGNATURE_TOURS.thailand_chiangmai;
    } else if (text.includes('hua-hin') || text.includes('black-mountain') || text.includes('pineapple') || text.includes('chiva-som') || text.includes('v-villas')) {
      signatureTour = REGIONAL_SIGNATURE_TOURS.thailand_huahin;
    } else {
      signatureTour = REGIONAL_SIGNATURE_TOURS.thailand_bangkok;
    }
  } else {
    // Cambodia
    if (text.includes('song-saa') || text.includes('raffles-hotel-le-royal')) {
      signatureTour = REGIONAL_SIGNATURE_TOURS.indochina_golden_age;
    } else if (text.includes('phnom-penh') || text.includes('vattanac') || text.includes('rosewood') || text.includes('chhun-on') || text.includes('garden-city')) {
      signatureTour = REGIONAL_SIGNATURE_TOURS.cambodia_all;
    } else if (text.includes('phokeethra') || text.includes('booyoung') || text.includes('jaya-house') || text.includes('raffles-grand-dangkor')) {
      signatureTour = REGIONAL_SIGNATURE_TOURS.cambodia_temple_trail;
    } else {
      signatureTour = REGIONAL_SIGNATURE_TOURS.cambodia_siemreap;
    }
  }

  // Selected packages (up to 2)
  let selectedPackages: any[] = [];

  if (directPackages.length > 0) {
    selectedPackages = directPackages.slice(0, 2);
  } else {
    // Fallback based on region
    let fallbackSlugs: string[] = [];
    if (isVietnam) {
      if (text.includes('hanoi') || text.includes('north') || text.includes('halong') || text.includes('yen-tu')) {
        fallbackSlugs = ['hanoi-heritage-golf-classic', 'vietnam-north-to-south-trilogy'];
      } else if (text.includes('saigon') || text.includes('south') || text.includes('bluffs') || text.includes('ho-tram')) {
        fallbackSlugs = ['saigon-bluffs-ho-tram-executive', 'vietnam-north-to-south-trilogy'];
      } else {
        fallbackSlugs = ['da-nang-championship-links', 'da-nang-luxury-villa-sanctuary'];
      }
    } else if (isThailand) {
      if (text.includes('phuket')) {
        fallbackSlugs = ['phuket-banyan-tree-championship', 'amanpuri-phuket-ultimate-sanctuary'];
      } else if (text.includes('chiang-mai')) {
        fallbackSlugs = ['chiang-mai-highlands-golf', 'thailand-dual-coast-bangkok-hua-hin'];
      } else if (text.includes('hua-hin')) {
        fallbackSlugs = ['hua-hin-standard-seaside-golf', 'hua-hin-v-villas-royal-links'];
      } else if (text.includes('pattaya')) {
        fallbackSlugs = ['pattaya-championship-golf-swing', 'bangkok-elite-private-clubs'];
      } else {
        fallbackSlugs = ['bangkok-elite-private-clubs', 'thailand-dual-coast-bangkok-hua-hin'];
      }
    } else {
      // Cambodia
      if (text.includes('phnom-penh')) {
        fallbackSlugs = ['phnom-penh-vattanac-luxury-golf', 'cambodia-dual-city-siem-reap-phnom-penh'];
      } else if (text.includes('song-saa') || text.includes('island')) {
        fallbackSlugs = ['song-saa-private-island-golf-retreat', 'cambodia-dual-city-siem-reap-phnom-penh'];
      } else {
        fallbackSlugs = ['raffles-angkor-golf-and-temples', 'amansara-angkor-vip-expedition'];
      }
    }

    selectedPackages = allPackages.filter(p => fallbackSlugs.includes(p.slug)).slice(0, 2);
    if (selectedPackages.length === 0 && allPackages.length > 0) {
      selectedPackages = [allPackages[0]];
    }
  }

  const packages: VenueItineraryPackage[] = selectedPackages.map(p => ({
    slug: p.slug,
    title: p.title,
    duration: p.duration || '7 Days / 6 Nights',
    heroImage: p.heroImage,
    highlight: p.description,
    guidePrice: p.guidePriceUsd
      ? `From $${p.guidePriceUsd.toLocaleString()} USD (~$${p.guidePriceFrom?.toLocaleString()} AUD)`
      : undefined,
    href: `/packages/${p.slug}/`
  }));

  // If the direct package has its own defined signature tour and no more specific regional override was chosen, consider using it
  if (
    directPackages.length > 0 &&
    directPackages[0].signatureTour &&
    !['hoi-an-beachfront-bliss', 'vietnam-central-coast', 'the-coastal-sprint', 'the-indochina-golden-age', 'the-khmer-temple-trail'].includes(signatureTour.slug)
  ) {
    const st = directPackages[0].signatureTour;
    signatureTour = {
      slug: st.slug,
      title: st.title,
      duration: st.duration,
      heroImage: st.heroImage,
      highlight: st.highlight,
      href: `/tours/${st.slug}/`
    };
  }

  return {
    signatureTour,
    packages
  };
}
