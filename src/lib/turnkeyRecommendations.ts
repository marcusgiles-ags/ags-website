import fs from 'fs';
import path from 'path';

export interface TurnkeyItineraryOption {
  slug: string;
  title: string;
  duration: string;
  heroImage: string;
  highlight: string;
  guidePrice?: string;
  url: string;
}

export interface TurnkeyRecommendations {
  signatureTour: TurnkeyItineraryOption;
  flagshipPackage: TurnkeyItineraryOption;
}

export function getTurnkeyRecommendations(
  country: string,
  slug: string,
  title?: string
): TurnkeyRecommendations {
  const text = `${country} ${slug} ${title || ''}`.toLowerCase();

  let targetPackageSlug = 'da-nang-championship-links';

  if (country === 'vietnam') {
    if (text.includes('lang-co') || text.includes('laguna') || text.includes('banyan-tree')) {
      targetPackageSlug = 'lang-co-bay-secluded-links';
    } else if (text.includes('hanoi') || text.includes('north') || text.includes('legend-hill') || text.includes('sky-lake') || text.includes('thanh-lanh') || text.includes('silk-path') || text.includes('metropole') || text.includes('capella')) {
      targetPackageSlug = 'hanoi-heritage-golf-classic';
    } else if (text.includes('saigon') || text.includes('bluffs') || text.includes('ho-tram') || text.includes('south')) {
      targetPackageSlug = 'saigon-bluffs-ho-tram-executive';
    } else if (text.includes('villa') || text.includes('namia')) {
      targetPackageSlug = 'da-nang-luxury-villa-sanctuary';
    } else if (text.includes('nam-hai') || text.includes('four-seasons')) {
      targetPackageSlug = 'four-seasons-nam-hai-prestige';
    } else if (text.includes('intercontinental') || text.includes('son-tra')) {
      targetPackageSlug = 'intercontinental-danang-escape';
    } else if (text.includes('nightlife') || text.includes('bar') || text.includes('speakeasy')) {
      targetPackageSlug = 'da-nang-golf-and-nightlife';
    } else if (text.includes('trilogy') || text.includes('north-to-south') || text.includes('multi-city')) {
      targetPackageSlug = 'vietnam-north-to-south-trilogy';
    } else {
      targetPackageSlug = 'da-nang-championship-links';
    }
  } else if (country === 'thailand') {
    if (text.includes('phuket') || text.includes('red-mountain') || text.includes('blue-canyon') || text.includes('aquella')) {
      if (text.includes('amanpuri') || text.includes('ultra-luxe')) {
        targetPackageSlug = 'amanpuri-phuket-ultimate-sanctuary';
      } else if (text.includes('nightlife') || text.includes('beach-club')) {
        targetPackageSlug = 'phuket-beach-club-golf-nightlife';
      } else {
        targetPackageSlug = 'phuket-banyan-tree-championship';
      }
    } else if (text.includes('hua-hin') || text.includes('black-mountain') || text.includes('pineapple') || text.includes('banyan')) {
      if (text.includes('wellness') || text.includes('chiva-som')) {
        targetPackageSlug = 'chiva-som-hua-hin-wellness-golf';
      } else if (text.includes('v-villas') || text.includes('royal')) {
        targetPackageSlug = 'hua-hin-v-villas-royal-links';
      } else {
        targetPackageSlug = 'hua-hin-standard-seaside-golf';
      }
    } else if (text.includes('chiang-mai') || text.includes('highlands') || text.includes('gassan') || text.includes('lanna')) {
      targetPackageSlug = 'chiang-mai-highlands-golf';
    } else if (text.includes('pattaya') || text.includes('siam-country')) {
      targetPackageSlug = 'pattaya-championship-golf-swing';
    } else if (text.includes('bangkok') || text.includes('thai-country-club') || text.includes('alpine')) {
      targetPackageSlug = 'bangkok-elite-private-clubs';
    } else {
      targetPackageSlug = 'thailand-dual-coast-bangkok-hua-hin';
    }
  } else if (country === 'cambodia') {
    if (text.includes('phnom-penh') || text.includes('vattanac') || text.includes('rosewood')) {
      targetPackageSlug = 'phnom-penh-vattanac-luxury-golf';
    } else if (text.includes('song-saa') || text.includes('island') || text.includes('sihanoukville')) {
      targetPackageSlug = 'song-saa-private-island-golf-retreat';
    } else if (text.includes('amansara')) {
      targetPackageSlug = 'amansara-angkor-vip-expedition';
    } else if (text.includes('boutique') || text.includes('jaya-house')) {
      targetPackageSlug = 'siem-reap-boutique-retreat-golf';
    } else if (text.includes('dual-city')) {
      targetPackageSlug = 'cambodia-dual-city-siem-reap-phnom-penh';
    } else {
      targetPackageSlug = 'raffles-angkor-golf-and-temples';
    }
  }

  // Load package from src/data/packages
  const pkgPath = path.join(process.cwd(), 'src/data/packages', `${targetPackageSlug}.json`);
  let pkgData: any = null;
  if (fs.existsSync(pkgPath)) {
    pkgData = JSON.parse(fs.readFileSync(pkgPath, 'utf8'));
  }

  if (!pkgData) {
    // Fallback safe package
    const fallbackPath = path.join(process.cwd(), 'src/data/packages/da-nang-championship-links.json');
    pkgData = JSON.parse(fs.readFileSync(fallbackPath, 'utf8'));
  }

  const flagshipPackage: TurnkeyItineraryOption = {
    slug: pkgData.slug,
    title: pkgData.title,
    duration: pkgData.duration || '7 Days / 6 Nights',
    heroImage: pkgData.heroImage,
    highlight: pkgData.description,
    guidePrice: pkgData.guidePriceUsd
      ? `From $${pkgData.guidePriceUsd.toLocaleString()} USD (~$${pkgData.guidePriceFrom?.toLocaleString()} AUD)`
      : undefined,
    url: `/packages/${pkgData.slug}/`
  };

  let signatureTour: TurnkeyItineraryOption = pkgData.signatureTour
    ? {
        slug: pkgData.signatureTour.slug,
        title: pkgData.signatureTour.title,
        duration: pkgData.signatureTour.duration,
        heroImage: pkgData.signatureTour.heroImage,
        highlight: pkgData.signatureTour.highlight,
        url: `/tours/${pkgData.signatureTour.slug}/`
      }
    : {
        slug: 'the-central-coast-classic',
        title: 'The Central Coast Classic',
        duration: '7 Days / 6 Nights',
        heroImage: '/images/courses/vietnam/hoiana-shores/hoiana-shores-beachfront-golf.webp',
        highlight: 'Our flagship luxury hosted golf tour across Central Vietnam’s premier links.',
        url: '/tours/the-central-coast-classic/'
      };

  // Distribute link equity across specialized regional Signature Tours
  if (country === 'vietnam') {
    if (text.includes('hoi-an') || text.includes('tra-que') || text.includes('red-bridge') || text.includes('tailor') || text.includes('lantern') || text.includes('my-son')) {
      signatureTour = {
        slug: 'hoi-an-beachfront-bliss',
        title: 'Hoi An Beachfront Bliss',
        duration: '7 Days / 6 Nights',
        heroImage: '/images/courses/vietnam/laguna-lang-co/laguna-golf-lang-co-jungle-tropical-3.webp',
        highlight: '7-day luxury beachfront golf tour in Hoi An playing Montgomerie Links, Vinpearl Nam Hoi An, Laguna Lang Co, and Ba Na Hills.',
        url: '/tours/hoi-an-beachfront-bliss/'
      };
    } else if (text.includes('sprint') || text.includes('ba-na-hills') || text.includes('light') || text.includes('sky36') || text.includes('sailing-club')) {
      signatureTour = {
        slug: 'the-coastal-sprint',
        title: 'The Coastal Sprint',
        duration: '4 Days / 3 Nights',
        heroImage: '/images/courses/vietnam/ba-na-hills/ba-na-hills-golf-club-night-golf-4.webp',
        highlight: '4-day Central Vietnam executive golf escape playing Hoiana Shores and Ba Na Hills Night Golf with VIP transfers.',
        url: '/tours/the-coastal-sprint/'
      };
    } else if (text.includes('12-man') || text.includes('villa') || text.includes('corporate') || text.includes('hoiana') || text.includes('australian')) {
      signatureTour = {
        slug: 'vietnam-central-coast',
        title: 'The An Bang Invitational (Vietnam Central Coast)',
        duration: '7 Days / 6 Nights',
        heroImage: '/images/courses/vietnam/hoiana-shores/hoiana-heart-bunker.webp',
        highlight: '7-day Central Vietnam society golf tour playing Hoiana Shores, Ba Na Hills, Laguna Lang Co, and BRG Da Nang from An Bang Beach Villa.',
        url: '/tours/vietnam-central-coast/'
      };
    } else if (text.includes('thailand') || text.includes('hua-hin')) {
      signatureTour = {
        slug: 'the-indochina-golden-age',
        title: 'The Indochina Golden Age',
        duration: '12 Days / 11 Nights',
        heroImage: '/images/courses/vietnam/hoiana-shores/hoiana-heart-bunker.webp',
        highlight: '12-day multi-country luxury golf tour across Cambodia, Vietnam & Thailand playing 7 championship rounds.',
        url: '/tours/the-indochina-golden-age/'
      };
    }
  } else if (country === 'cambodia') {
    if (text.includes('angkor-wat') || text.includes('banteay-srei') || text.includes('sbek-thom') || text.includes('phare') || text.includes('sugar-palm') || text.includes('mahob')) {
      signatureTour = {
        slug: 'the-khmer-temple-trail',
        title: 'The Khmer Temple Trail',
        duration: '5 Days / 4 Nights',
        heroImage: '/images/courses/cambodia/phokeethra/phokeethra-country-club-asian-tour-2.webp',
        highlight: '5-day Siem Reap boutique golf & Angkor Wat tour playing Angkor Golf Resort, Phokeethra & Booyoung.',
        url: '/tours/the-khmer-temple-trail/'
      };
    } else if (text.includes('10-day') || text.includes('kampot') || text.includes('wellness')) {
      signatureTour = {
        slug: 'the-indochina-golden-age',
        title: 'The Indochina Golden Age',
        duration: '12 Days / 11 Nights',
        heroImage: '/images/courses/vietnam/hoiana-shores/hoiana-heart-bunker.webp',
        highlight: '12-day multi-country luxury golf tour across Cambodia, Vietnam & Thailand playing 7 championship rounds.',
        url: '/tours/the-indochina-golden-age/'
      };
    }
  }

  return {
    signatureTour,
    flagshipPackage
  };
}
