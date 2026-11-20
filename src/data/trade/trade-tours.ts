export interface TradeImageMedia {
  url: string;
  title: string;
  category: "resort" | "golf" | "lifestyle";
  caption: string;
  alt: string;
  resolution: string;
  aspectRatio: string;
}

export interface TradeDayLogistics {
  label: string;
  value: string;
}

export interface TradeUpgradeOption {
  title: string;
  courseName: string;
  architect: string;
  priceDiffAUD: number;
  seasonNote: string;
  description: string;
}

export interface TradeDayItinerary {
  day: number;
  title: string;
  subtitle: string;
  courseName?: string;
  architect?: string;
  courseType?: string;
  yardage?: string;
  par?: string;
  pacing: string;
  transferTime: string;
  transferNote?: string;
  overview: string;
  bullets: string[];
  logistics: TradeDayLogistics[];
  images: TradeImageMedia[];
  upgradeOption?: TradeUpgradeOption;
}

export interface TradeSalesSnippet {
  title: string;
  description: string;
  content: string;
}

export interface TradeCourseProfile {
  name: string;
  designer: string;
  tagline: string;
  par: string;
  yardage: string;
  established: string;
  transferTime: string;
  transferExpectation: string;
  heroImage: string;
  paragraphs: string[];
}

export interface TradeAccommodationProfile {
  name: string;
  category: string;
  starRating: string;
  location: string;
  setting: string;
  nearestGolf: string;
  transferTimeFromAirport: string;
  heroImage: string;
  paragraphs: string[];
  keyFeatures: string[];
}

export interface TradeExcursionProfile {
  title: string;
  tagline: string;
  duration: string;
  type: string;
  image: string;
  overview: string;
  features: string[];
  pricingNote?: string;
}

export interface TradeDiningProfile {
  name: string;
  cuisine: string;
  vibe: string;
  location: string;
  image: string;
  overview: string;
  highlights: string[];
}

export interface TradeTourData {
  slug: string;
  canonicalTradeUrl: string;
  titlePrefix: string;
  titleHighlight: string;
  resortName: string;
  resortType: string;
  location: string;
  duration: string;
  roundsCount: number;
  holesCount: number;
  nettPriceAUD: number;
  singleSupplementAUD: number;
  heroImage: string;
  heroBadge: string;
  executiveSummary: string;
  targetMarket: string;
  keyHighlights: string[];
  includedInNett: {
    category: string;
    items: string[];
  }[];
  excludedFromNett: string[];
  salesToolkit: TradeSalesSnippet[];
  mediaAssets: TradeImageMedia[];
  itinerary: TradeDayItinerary[];
  accommodationProfile: TradeAccommodationProfile;
  courseProfiles: TradeCourseProfile[];
  optionalExcursions: TradeExcursionProfile[];
  recommendedDining: TradeDiningProfile[];
  upgradeOption?: TradeUpgradeOption;
}

export const CENTRAL_COAST_CLASSIC_TRADE: TradeTourData = {
  slug: "the-central-coast-classic-7k9p4m",
  canonicalTradeUrl: "/trade-portal/tours/the-central-coast-classic-7k9p4m/",
  titlePrefix: "The Central Coast",
  titleHighlight: "Golf & Wellness Classic",
  resortName: "Namia River Retreat",
  resortType: "5-Star Private Pool Villas",
  location: "Hoi An & Da Nang, Central Vietnam",
  duration: "7 Days / 6 Nights",
  roundsCount: 4,
  holesCount: 72,
  nettPriceAUD: 3790,
  singleSupplementAUD: 2000,
  heroImage: "/images/courses/vietnam/hoiana-shores/hoiana-shores-beachfront-golf.webp",
  heroBadge: "🇻🇳 Confidential Wholesale Tariff • Da Nang & Hoi An Circuit",
  executiveSummary:
    "An ultra-premium golf and physical restoration circuit designed for discerning golfers and non-playing partners. Unpack once in private pool villas at Namia River Retreat on the Thu Bon River. Features 4 premier championship layouts—Robert Trent Jones Jr., Luke Donald, Sir Nick Faldo, and Jack Nicklaus—balanced by inclusive daily 90-minute spa therapies, riverfront Tai Chi, and private VIP fleet logistics.",
  targetMarket: "High-net-worth Australian golfers, executive corporate groups, couples seeking premium golf + wellness.",
  keyHighlights: [
    "Nett Rate: $3,790 AUD per golfer twin-share (Single Supplement: $2,000 AUD)",
    "6 Nights in Private Pool Villas at Namia River Retreat with private plunge pool",
    "Inclusive daily 90-minute bespoke spa treatment per adult (herbal hammam, sports massage, acupressure)",
    "4 Championship Rounds: Hoiana Shores, Ba Na Hills, Laguna Lăng Cô, BRG Da Nang Nicklaus",
    "1:1 dedicated caddies & shared motorized carts for all 72 holes",
    "Private VIP executive high-roof vehicle fleet for all airport, course, and dinner transfers",
    "Dedicated on-the-ground English-speaking private concierge handling tee times, bags, and dining reservations",
  ],
  includedInNett: [
    {
      category: "Championship Golf (72 Holes)",
      items: [
        "18 Holes at Hoiana Shores Golf Club (Robert Trent Jones Jr.) — World Top 100 coastal links (~20 mins transfer)",
        "18 Holes at Ba Na Hills Golf Club (Luke Donald / IMG) — Asia's premier mountain layout (~50 mins transfer)",
        "18 Holes at Laguna Golf Lăng Cô (Sir Nick Faldo) — Scenic parkland through rice paddies & beach (~75 mins transfer)",
        "18 Holes at BRG Da Nang Golf Resort (Jack Nicklaus Design) — Florida-style timber bulkhead stadium course (~25 mins transfer)",
        "Dedicated 1:1 local caddie for every player on every round",
        "Shared motorized golf carts & range warmup balls at all courses",
        "Pre-blocked prime morning tee times with pre-arranged scoring and bag transfers",
      ],
    },
    {
      category: "5-Star Luxury Sanctuary Accommodation",
      items: [
        "6 Nights accommodation in stand-alone Private Pool Villas at Namia River Retreat, Hoi An",
        "Private outdoor plunge pool, sun terrace, and lush tropical river gardens for each villa",
        "Daily artisanal all-day breakfast overlooking the Thu Bon River",
        "Complimentary scheduled resort shuttle into Hoi An Ancient Town and artisanal bicycles",
      ],
    },
    {
      category: "Inclusive Daily Spa & Physical Recovery",
      items: [
        "Inclusive daily 90-minute bespoke spa treatment per adult guest at Namia Sanctuary Spa",
        "Choices include: Herbal Steam Hammam circuit, deep-tissue golf sports massage, reflexology, or hot stone therapy",
        "Daily sunrise Tai Chi and mobility sessions along the river deck to prime golf swings",
      ],
    },
    {
      category: "Private Ground Fleet & Concierge",
      items: [
        "Airside meet-and-greet at Da Nang International Airport (DAD) with private VIP transit (~35 mins)",
        "Dedicated private air-conditioned VIP executive vehicles for all golf courses and scheduled excursions",
        "Complimentary chilled bottled water, cold towels, and equipment storage in vehicles",
        "Dedicated local private concierge on call throughout the tour for dining bookings and tournament scoring",
      ],
    },
  ],
  excludedFromNett: [
    "International and domestic airfares to/from Da Nang International Airport (DAD)",
    "Lunches, dinners, and clubhouse refreshments (outside daily breakfast & welcome reception)",
    "Caddie gratuity tips (standard guideline: 400,000–500,000 VND / ~$25–$30 AUD per round paid directly to caddie)",
    "Personal travel and golf equipment insurance (strongly recommended)",
    "Personal discretionary items, premium alcoholic beverages, and personal laundry",
  ],
  salesToolkit: [
    {
      title: "Executive Summary for Client Itinerary / Proposal PDF",
      description: "Drop this high-polish overview directly into your custom agency proposal documents or Axus/Travefy itineraries.",
      content: `THE CENTRAL COAST GOLF & WELLNESS CLASSIC — 7 DAYS / 6 NIGHTS
Base: Namia River Retreat, Hoi An (Private Pool Villas)
Golf Rota: Hoiana Shores • Ba Na Hills • Laguna Lăng Cô • BRG Da Nang Nicklaus

The Central Coast Golf & Wellness Classic redefines luxury golf travel by pairing architectural masterpieces with deep daily restorative wellness. Anchored on a tranquil islet along Hoi An's Thu Bon River, guests stay in private pool villas while rotating through courses designed by Robert Trent Jones Jr., Luke Donald, Sir Nick Faldo, and Jack Nicklaus. 

Every round features dedicated 1:1 caddies and motorized carts, followed by an inclusive 90-minute therapeutic spa treatment back at the retreat to rejuvenate legs, shoulders, and spine. With private VIP transfers, sunrise riverfront Tai Chi, and on-the-ground dedicated concierge coordination, this represents the benchmark golf immersion in Southeast Asia.`,
    },
    {
      title: "5 Key Selling Points for Australian Golfers",
      description: "Bullet points addressing common client questions and objections.",
      content: `1. Unpack Once Sanctuary: Zero hotel changes. Base yourself in private pool villas at Namia River Retreat for the entire 6 nights—just 10 minutes from historic Hoi An.
2. World-Class Architect Rota: Play 4 distinct architectural tests designed by Robert Trent Jones Jr. (coastal dunes links), Luke Donald (rainforest mountain), Sir Nick Faldo (rice paddies & ocean), and Jack Nicklaus (timber bulkhead stadium).
3. Built-In Daily Recovery: Includes a 90-minute restorative spa treatment every day (herbal steam hammam, sports deep-tissue massage, reflexology) to guarantee players feel fresh through all 72 holes.
4. Stress-Free Logistics: Private VIP fleet meet-and-greet at Da Nang Airport (DAD), door-to-door golf transfers, pre-cleared tee times, and expat concierge handling every club bag and detail.
5. Ideal for Non-Golfing Partners: While golfers are on course, partners enjoy luxury spa journeys, peaceful pool villa tranquility, and excursions into Hoi An Ancient Town.`,
    },
    {
      title: "Client-Facing Inclusions List",
      description: "Ready-to-paste inclusions block for client quote letters or booking vouchers.",
      content: `INCLUSIONS:
• 6 Nights accommodation in Private Pool Villas at Namia River Retreat, Hoi An
• 4 Rounds of 18-hole championship golf across Hoiana Shores, Ba Na Hills, Laguna Lăng Cô, and BRG Da Nang Nicklaus
• Dedicated 1:1 local caddie for each golfer on every round
• Shared motorized golf carts and driving range practice balls
• Daily 90-minute bespoke spa treatment per adult guest at Namia Sanctuary Spa
• Daily sunrise Tai Chi & mobility sessions on the river deck
• Daily artisanal all-day breakfast overlooking the Thu Bon River
• Private VIP executive vehicle fleet transfers for airport and all golf courses
• Full golf bag coordination, pre-booked tee times, and on-site concierge support
• Complimentary scheduled resort shuttle into Hoi An Ancient Town and villa bicycles`,
    },
  ],
  mediaAssets: [
    {
      url: "/images/accommodations/vietnam/namia-river-retreat-hoi-an/vietnam-luxury-hotel-namia-river-retreat-hoi-an-hero.webp",
      title: "Namia River Retreat — Islet Aerial",
      category: "resort",
      caption: "Namia River Retreat luxury islet sanctuary along the tranquil Thu Bon River in Hoi An.",
      alt: "Namia River Retreat luxury boutique resort Thu Bon River Hoi An",
      resolution: "2400 x 1400 (Ultra-HD WebP)",
      aspectRatio: "16:9",
    },
    {
      url: "/images/accommodations/vietnam/namia-river-retreat-hoi-an/vietnam-luxury-hotel-namia-river-retreat-hoi-an-pool-villa.webp",
      title: "Private Pool Villa Exterior & Daybeds",
      category: "resort",
      caption: "Stand-alone private pool villa with secluded plunge pool and tropical garden daybeds.",
      alt: "Private plunge pool and daybeds at Namia River Retreat Hoi An",
      resolution: "1920 x 1280 (High-Res WebP)",
      aspectRatio: "3:2",
    },
    {
      url: "/images/accommodations/vietnam/namia-river-retreat-hoi-an/namia-river-retreat-room-pool-view.webp",
      title: "Pool Villa Master Bedroom View",
      category: "resort",
      caption: "Direct bedroom access to private plunge pool and lush river foliage.",
      alt: "Private pool villa bedroom view at Namia River Retreat Hoi An",
      resolution: "1920 x 1280 (High-Res WebP)",
      aspectRatio: "3:2",
    },
    {
      url: "/images/accommodations/vietnam/namia-river-retreat-hoi-an/namia-river-retreat-spa-massage.webp",
      title: "Namia 90-Minute Sports Massage",
      category: "resort",
      caption: "Inclusive daily 90-minute therapeutic massage targeting golf swing muscle recovery.",
      alt: "Namia River Retreat 90-minute therapeutic sports massage Hoi An",
      resolution: "1920 x 1280 (High-Res WebP)",
      aspectRatio: "3:2",
    },
    {
      url: "/images/accommodations/vietnam/namia-river-retreat-hoi-an/namia-river-retreat-spa-hammam.webp",
      title: "Namia Thermal Steam Hammam",
      category: "resort",
      caption: "Herbal steam and thermal hammam circuit for post-round muscle relaxation.",
      alt: "Namia River Retreat herbal steam hammam room Hoi An",
      resolution: "1920 x 1280 (High-Res WebP)",
      aspectRatio: "3:2",
    },
    {
      url: "/images/accommodations/vietnam/namia-river-retreat-hoi-an/namia-river-retreat-tai-chi.webp",
      title: "Morning Riverfront Tai Chi",
      category: "lifestyle",
      caption: "Daily sunrise mobility and breathwork session along the Thu Bon River deck.",
      alt: "Morning Tai Chi session along the Thu Bon river at Namia River Retreat Hoi An",
      resolution: "1920 x 1280 (High-Res WebP)",
      aspectRatio: "3:2",
    },
    {
      url: "/images/courses/vietnam/hoiana-shores/hoiana-shores-beachfront-golf.webp",
      title: "Hoiana Shores — Ocean Links Hole 16",
      category: "golf",
      caption: "Robert Trent Jones Jr. links design sweeping along the East Sea shoreline.",
      alt: "Hoiana Shores signature ocean hole 16 along East Sea",
      resolution: "2400 x 1350 (Ultra-HD WebP)",
      aspectRatio: "16:9",
    },
    {
      url: "/images/courses/vietnam/hoiana-shores/hoiana-heart-bunker.webp",
      title: "Hoiana Shores — Iconic Heart Bunker",
      category: "golf",
      caption: "Natural undulating Zoysia dunes and signature bunkering at Hoiana Shores.",
      alt: "Hoiana Shores Golf Club heart bunker coastal links Vietnam",
      resolution: "1920 x 1280 (High-Res WebP)",
      aspectRatio: "3:2",
    },
    {
      url: "/images/courses/vietnam/ba-na-hills/ba-na-hills-aerial-sunset.webp",
      title: "Ba Na Hills — Twilight Mountain Aerial",
      category: "golf",
      caption: "Luke Donald's dramatic mountain layout nestled in the Truong Son foothills.",
      alt: "Ba Na Hills Golf Club sunset aerial mountain course Da Nang",
      resolution: "2400 x 1350 (Ultra-HD WebP)",
      aspectRatio: "16:9",
    },
    {
      url: "/images/courses/vietnam/ba-na-hills/ba-na-hills-hole-12jpeg.webp",
      title: "Ba Na Hills — Hole 12 Island Green",
      category: "golf",
      caption: "Highland jungle water hazard and approach shot to the 12th green.",
      alt: "Ba Na Hills Golf Club challenging water carry hole 12",
      resolution: "1920 x 1280 (High-Res WebP)",
      aspectRatio: "3:2",
    },
    {
      url: "/images/courses/vietnam/laguna-lang-co/laguna-golf-lang-co-bach-ma-mountain-5.webp",
      title: "Laguna Lăng Cô — Bach Ma Mountain Backdrop",
      category: "golf",
      caption: "Sir Nick Faldo's championship fairways framed by the misty peaks of Bach Ma National Park.",
      alt: "Laguna Lang Co Bach Ma mountain backdrop Central Vietnam",
      resolution: "2400 x 1350 (Ultra-HD WebP)",
      aspectRatio: "16:9",
    },
    {
      url: "/images/courses/vietnam/laguna-lang-co/laguna-golf-lang-co-jungle-tropical-3.webp",
      title: "Laguna Lăng Cô — Working Rice Paddies & Tropical Jungle",
      category: "golf",
      caption: "Authentic Vietnamese golf routing through active rice paddies and granite rocks.",
      alt: "Laguna Lang Co rice paddies and water hazard fairway routing",
      resolution: "1920 x 1280 (High-Res WebP)",
      aspectRatio: "3:2",
    },
    {
      url: "/images/courses/vietnam/brg-da-nang-nicklaus/brg-da-nang-golf-resort-nicklaus-course-da-nang-1.webp",
      title: "BRG Da Nang Nicklaus — Bulkhead Stadium",
      category: "golf",
      caption: "Asia's first authentic Florida-style wooden bulkhead course by Jack Nicklaus.",
      alt: "BRG Da Nang Nicklaus course timber bulkhead green complex",
      resolution: "2400 x 1350 (Ultra-HD WebP)",
      aspectRatio: "16:9",
    },
    {
      url: "/images/courses/vietnam/brg-da-nang-nicklaus/brg-da-nang-golf-resort-nicklaus-water-feature-3.webp",
      title: "BRG Da Nang Nicklaus — Bulkhead Water Feature",
      category: "golf",
      caption: "Signature water carry hole to an authentic wooden bulkhead-faced green complex.",
      alt: "BRG Da Nang Nicklaus course water feature hazard Vietnam",
      resolution: "2400 x 1350 (Ultra-HD WebP)",
      aspectRatio: "16:9",
    },
    {
      url: "/images/destinations/vietnam/culture/hoi-an-lantern-boat.webp",
      title: "Hoi An Ancient Town — Twilight Lantern Boat",
      category: "lifestyle",
      caption: "Private wooden boat cruise along the Thu Bon River into lantern-lit UNESCO shophouses.",
      alt: "Hoi An ancient town lantern boats at night Vietnam",
      resolution: "1920 x 1280 (High-Res WebP)",
      aspectRatio: "3:2",
    },
  ],
  itinerary: [
    {
      day: 1,
      title: "Arrival in Da Nang & River Sanctuary Acclimatization",
      subtitle: "Private Tarmac Meet & Namia River Retreat",
      pacing: "Effortless Arrival & Jet-Lag Reset",
      transferTime: "35 mins from DAD Airport",
      transferNote: "Private VIP executive fleet transfer directly from Da Nang International Airport (DAD) to Namia River Retreat.",
      overview:
        "Your private VIP chauffeur meets the group at Da Nang International Airport, escorting you straight to the tranquil Thu Bon River islet where Namia River Retreat awaits. Check into private pool villas and enjoy an introductory 90-minute restorative massage.",
      bullets: [
        "Private VIP arrival transfer from Da Nang Airport (DAD) to Namia River Retreat (~35 mins)",
        "Exclusive check-in to your private pool villa with private plunge pool and sun terrace",
        "Introductory 90-minute herbal spa therapy to decompress the spine after air travel",
        "Evening welcome drinks along the tranquil Thu Bon riverfront dining pavilion",
      ],
      logistics: [
        { label: "Stay", value: "Namia River Retreat (Private Pool Villa)" },
        { label: "Transit", value: "Private VIP Executive High-Roof Van (~35 mins)" },
        { label: "Wellness", value: "90-Min Jet-Lag Acclimatization Massage" },
      ],
      images: [
        {
          url: "/images/accommodations/vietnam/namia-river-retreat-hoi-an/vietnam-luxury-hotel-namia-river-retreat-hoi-an-hero.webp",
          title: "Namia River Retreat Islet Sanctuary",
          category: "resort",
          caption: "Namia River Retreat — Islet sanctuary on the Thu Bon River",
          alt: "Namia River Retreat luxury boutique resort Thu Bon River Hoi An",
          resolution: "2400 x 1400",
          aspectRatio: "16:9",
        },
        {
          url: "/images/accommodations/vietnam/namia-river-retreat-hoi-an/vietnam-luxury-hotel-namia-river-retreat-hoi-an-pool-villa.webp",
          title: "Stand-Alone Private Pool Villa",
          category: "resort",
          caption: "Private pool villa with secluded plunge pool and sun terrace",
          alt: "Private plunge pool and daybeds at Namia River Retreat Hoi An",
          resolution: "1920 x 1280",
          aspectRatio: "3:2",
        },
      ],
    },
    {
      day: 2,
      title: "Coastal Links Challenge & Hammam Therapy",
      subtitle: "Hoiana Shores Golf Club",
      courseName: "Hoiana Shores Golf Club",
      architect: "Robert Trent Jones Jr.",
      courseType: "Pure Coastal Links",
      yardage: "7,004 Yards",
      par: "Par 71",
      pacing: "Morning Championship Round & Afternoon Spa",
      transferTime: "20 mins door-to-door",
      transferNote: "Located directly south of Hoi An along the coastal highway. Smooth 20-minute private VIP transfer.",
      overview:
        "Ranked among the World's Top 100, Hoiana Shores delivers true Scottish links soul under tropical skies. The ocean-side closing stretch from Hole 15 to 18 offers windswept drama, followed by return to Namia's thermal steam hammam to flush golfing fatigue from your legs.",
      bullets: [
        "18 holes with dedicated 1:1 personal caddies & motorized shared carts across pristine Zeon Zoysia fairways",
        "Windswept coastal shot-making testing every club in your bag along the East Sea shoreline",
        "Post-round return to Namia for your included 90-minute herbal steam hammam and tension-release leg massage",
      ],
      logistics: [
        { label: "Play", value: "Hoiana Shores Golf Club (Robert Trent Jones Jr.)" },
        { label: "Transfer Time", value: "~20 minutes door-to-door from Namia" },
        { label: "Recovery", value: "90-Min Namia Hammam & Herbal Steam Circuit" },
      ],
      images: [
        {
          url: "/images/courses/vietnam/hoiana-shores/hoiana-heart-bunker.webp",
          title: "Hoiana Shores Heart Bunker",
          category: "golf",
          caption: "Iconic heart bunker and dunes fairway at Hoiana Shores",
          alt: "Hoiana Shores Golf Club heart bunker coastal links Vietnam",
          resolution: "1920 x 1280",
          aspectRatio: "3:2",
        },
        {
          url: "/images/courses/vietnam/hoiana-shores/hoiana-shores-beachfront-golf.webp",
          title: "Hoiana Shores Ocean Links Hole 16",
          category: "golf",
          caption: "Hole 16 ocean links along the East Sea",
          alt: "Hoiana Shores signature ocean hole 16 along East Sea",
          resolution: "2400 x 1350",
          aspectRatio: "16:9",
        },
      ],
    },
    {
      day: 3,
      title: "Mountain Mastery & Riverfront Reflexology",
      subtitle: "Ba Na Hills Golf Club",
      courseName: "Ba Na Hills Golf Club",
      architect: "Luke Donald / IMG",
      courseType: "Highland Mountain",
      yardage: "7,857 Yards",
      par: "Par 72",
      pacing: "Mountain Expedition & Calves/Back Reset",
      transferTime: "50 mins door-to-door",
      transferNote: "Scenic 50-minute private VIP transfer ascending westward into the cool foothills of the Truong Son mountain range.",
      overview:
        "Ascend into the Truong Son foothills where temperatures drop 4–6°C. Luke Donald's layout is Asia's most awarded mountain course, carved through dense rainforest with jaw-dropping elevation shifts. Return to Namia for reflexology and plunge pools.",
      bullets: [
        "18 holes on Vietnam's premier mountain layout with championship conditioning",
        "Severe elevation changes demanding strategic club selection and accurate iron play",
        "Post-round outdoor reflexology on Namia's river deck followed by sunset drinks",
      ],
      logistics: [
        { label: "Play", value: "Ba Na Hills Golf Club (Luke Donald)" },
        { label: "Transfer Time", value: "~50 minutes door-to-door from Namia" },
        { label: "Recovery", value: "90-Min Riverfront Foot Reflexology & Herbal Compress" },
      ],
      images: [
        {
          url: "/images/courses/vietnam/ba-na-hills/ba-na-hills-aerial-sunset.webp",
          title: "Ba Na Hills Mountain Sunset",
          category: "golf",
          caption: "Highland golf at Ba Na Hills at sunset",
          alt: "Ba Na Hills Golf Club sunset aerial mountain course Da Nang",
          resolution: "2400 x 1350",
          aspectRatio: "16:9",
        },
        {
          url: "/images/courses/vietnam/ba-na-hills/ba-na-hills-hole-12jpeg.webp",
          title: "Ba Na Hills Hole 12 Island Green",
          category: "golf",
          caption: "Highland water hazard on Hole 12 at Ba Na Hills",
          alt: "Ba Na Hills Golf Club challenging water carry hole 12",
          resolution: "1920 x 1280",
          aspectRatio: "3:2",
        },
      ],
    },
    {
      day: 4,
      title: "Tropical Parklands & Deep-Tissue Sports Therapy",
      subtitle: "Laguna Golf Lăng Cô",
      courseName: "Laguna Golf Lăng Cô",
      architect: "Sir Nick Faldo",
      courseType: "Parkland Dunes & Oceanfront",
      yardage: "7,101 Yards",
      par: "Par 71",
      pacing: "Scenic Coastal Drive & Shoulder/Rotator Reset",
      transferTime: "75 mins via Hai Van Coastal Highway & Tunnel",
      transferNote: "Laguna Lăng Cô is located north of Da Nang in Lăng Cô Bay, approximately a 75-minute private transfer from Hoi An via the coastal highway and Hai Van Tunnel. While representing the longest transit of the itinerary, the sheer visual grandeur of the course and coastal scenery make it an unmissable golfing journey.",
      overview:
        "The drive along the coastal mountains of the Hai Van Pass sets up a magical day. Sir Nick Faldo created a masterclass weaving through working rice paddies, coconut groves, and granite cliffs. Conclude with deep-tissue sports therapy at Namia.",
      bullets: [
        "18 championship holes flanked by the East Sea and Bach Ma mountain ranges",
        "Unique routing navigating active rice paddies with resident water buffaloes",
        "Scenic mountain & coastal return drive via Hai Van Pass before returning to Namia for a 90-min sports massage",
      ],
      logistics: [
        { label: "Play", value: "Laguna Golf Lăng Cô (Sir Nick Faldo)" },
        { label: "Transfer Time", value: "~75 minutes via Hai Van coastal route & tunnel" },
        { label: "Recovery", value: "90-Min Golf Swing Musculoskeletal Therapy" },
      ],
      images: [
        {
          url: "/images/courses/vietnam/laguna-lang-co/laguna-golf-lang-co-jungle-tropical-3.webp",
          title: "Laguna Lăng Cô Rice Paddy & Tropical Routing",
          category: "golf",
          caption: "Sir Nick Faldo's signature tropical jungle routing and working rice paddy hazards",
          alt: "Laguna Lang Co rice paddies and water hazard fairway routing",
          resolution: "1920 x 1280",
          aspectRatio: "3:2",
        },
        {
          url: "/images/courses/vietnam/laguna-lang-co/laguna-golf-lang-co-bach-ma-mountain-5.webp",
          title: "Laguna Lăng Cô Bach Ma Mountain Backdrop",
          category: "golf",
          caption: "Misty Bach Ma National Park peaks towering over the championship layout",
          alt: "Laguna Lang Co Bach Ma mountain backdrop Central Vietnam",
          resolution: "2400 x 1350",
          aspectRatio: "16:9",
        },
      ],
    },
    {
      day: 5,
      title: "Riverside Wellness Immersion & Flavors of Faifo",
      subtitle: "Dawn Tai Chi, Full Spa Circuit & Ancient Town Heritage",
      pacing: "Full Mind-Body Restoration & Cultural Discovery",
      transferTime: "10 mins to Ancient Town via private vehicle",
      transferNote: "Swift 10-minute door-to-door private VIP vehicle transfer into Hoi An Ancient Town.",
      overview:
        "A tactical mid-tour recovery day to recharge swings and savor the destination. Sunrise Tai Chi on the river deck, followed by a full 90-minute restorative herbal therapy and cold plunge circuit. In the afternoon, visit Hoi An Ancient Town by private chauffeured transfer for world-class bespoke tailoring and cafe culture.",
      bullets: [
        "Sunrise Tai Chi and guided breathwork on Namia's wooden riverfront deck",
        "Inclusive 90-minute traditional herbal steam, hot-stone treatment, and pool relaxation",
        "Afternoon private chauffeured visit into Hoi An Ancient Town for bespoke tailoring in heritage shophouses",
        "Curated culinary discovery through lantern-lit historic alleyways",
      ],
      logistics: [
        { label: "Stay", value: "Namia River Retreat" },
        { label: "Wellness", value: "Dawn Tai Chi + 90-Min Signature Herbal Therapy" },
        { label: "Activity", value: "Private Chauffeured Ancient Town & Tailoring Visit (~10 mins)" },
      ],
      images: [
        {
          url: "/images/accommodations/vietnam/namia-river-retreat-hoi-an/namia-river-retreat-tai-chi.webp",
          title: "Dawn Tai Chi on the River Deck",
          category: "lifestyle",
          caption: "Morning movement practice on the Thu Bon River deck",
          alt: "Morning Tai Chi session along the Thu Bon river at Namia River Retreat Hoi An",
          resolution: "1920 x 1280",
          aspectRatio: "3:2",
        },
        {
          url: "/images/destinations/vietnam/culture/hoi-an-lantern-boat.webp",
          title: "Hoi An Ancient Town Lantern Boat",
          category: "lifestyle",
          caption: "Private wooden boat into lantern-lit Hoi An shophouses",
          alt: "Hoi An ancient town lantern boats at night Vietnam",
          resolution: "1920 x 1280",
          aspectRatio: "3:2",
        },
      ],
    },
    {
      day: 6,
      title: "The Nicklaus Finale & Champion's Toast",
      subtitle: "BRG Da Nang Golf Resort (Nicklaus Course)",
      courseName: "BRG Da Nang Golf Resort (Nicklaus)",
      architect: "Jack Nicklaus Design",
      courseType: "Timber Bulkhead Stadium",
      yardage: "7,380 Yards",
      par: "Par 72",
      pacing: "Final Round Championship Shootout & Riverside Feast",
      transferTime: "25 mins door-to-door",
      transferNote: "Located along the Da Nang - Hoi An coastal boulevard. Quick 25-minute private VIP transfer.",
      overview:
        "The first true wooden bulkhead course in Asia. Jack Nicklaus crafted this Florida-style stadium test with sparkling water hazards on almost every hole, setting up a thrilling match-play finale before a private riverside celebration at Namia.",
      bullets: [
        "18 championship holes with authentic Florida-style bulkhead timber walls",
        "Tour finale match play shootout with pre-arranged team scoring cards",
        "Post-round herbal muscle treatment followed by a farewell riverside dinner and awards toast",
      ],
      logistics: [
        { label: "Play", value: "BRG Da Nang Golf Resort (Nicklaus Course)" },
        { label: "Transfer Time", value: "~25 minutes door-to-door from Namia" },
        { label: "Celebration", value: "Riverside Farewell Dinner at Namia River Retreat" },
      ],
      images: [
        {
          url: "/images/courses/vietnam/brg-da-nang-nicklaus/brg-da-nang-golf-resort-nicklaus-course-da-nang-1.webp",
          title: "BRG Da Nang Nicklaus Course Timber Bulkhead",
          category: "golf",
          caption: "Jack Nicklaus design featuring wooden bulkhead retaining walls",
          alt: "BRG Da Nang Nicklaus course timber bulkhead green complex",
          resolution: "2400 x 1350",
          aspectRatio: "16:9",
        },
        {
          url: "/images/courses/vietnam/brg-da-nang-nicklaus/brg-da-nang-golf-resort-nicklaus-water-feature-3.webp",
          title: "BRG Da Nang Nicklaus Signature Bulkhead Water Feature",
          category: "golf",
          caption: "Jack Nicklaus design featuring timber bulkhead retaining walls and precision water carries",
          alt: "BRG Da Nang Nicklaus course water feature hazard Vietnam",
          resolution: "2400 x 1350",
          aspectRatio: "16:9",
        },
      ],
    },
    {
      day: 7,
      title: "Farewell to the River & Mindful Departure",
      subtitle: "Morning Tai Chi, Breakfast & VIP Departure",
      pacing: "Relaxed Departure & Airport Transfer",
      transferTime: "35 mins to DAD Airport",
      transferNote: "Timed precisely to flight departures from Da Nang International Airport (DAD) with luggage coordination.",
      overview:
        "No rushed 6:00 AM checkouts. Enjoy a peaceful riverside breakfast at Namia, a final dip in your private plunge pool, and your final 90-minute wellness therapy before your private executive vehicle transfers your group directly to Da Nang Airport.",
      bullets: [
        "Leisurely all-day breakfast overlooking the Thu Bon River and final plunge pool swim",
        "Final inclusive morning spa treatment or herbal bath therapy before departure",
        "Dedicated private VIP airport transfer timed precisely to flight departures from DAD (~35 mins)",
      ],
      logistics: [
        { label: "Stay", value: "Namia River Retreat" },
        { label: "Transfer Time", value: "~35 minutes to Da Nang Airport (DAD)" },
        { label: "Inclusions", value: "All Villa Amenities & Full Luggage Coordination" },
      ],
      images: [
        {
          url: "/images/accommodations/vietnam/namia-river-retreat-hoi-an/namia-river-retreat-room-pool-view.webp",
          title: "Final Plunge Pool Morning at Namia",
          category: "resort",
          caption: "Farewell morning swim and private villa coffee overlooking the river foliage",
          alt: "Private pool villa bedroom view at Namia River Retreat Hoi An",
          resolution: "1920 x 1280",
          aspectRatio: "3:2",
        },
      ],
    },
  ],
  accommodationProfile: {
    name: "Namia River Retreat",
    category: "5-Star Luxury Private Pool Villa Sanctuary",
    starRating: "★★★★★ (5-Star)",
    location: "Thu Bon River Islet, Hoi An, Quang Nam, Vietnam",
    setting: "Private River Islet, 10 mins from Hoi An Ancient Town",
    nearestGolf: "Hoiana Shores (20 mins), BRG Da Nang (25 mins), Ba Na Hills (50 mins), Laguna Lăng Cô (75 mins)",
    transferTimeFromAirport: "~35 minutes from Da Nang International Airport (DAD)",
    heroImage: "/images/accommodations/vietnam/namia-river-retreat-hoi-an/vietnam-luxury-hotel-namia-river-retreat-hoi-an-hero.webp",
    paragraphs: [
      "A tranquil luxury retreat located along the serene Thu Bon River, Namia River Retreat offers an intensely evocative and intimate escape. Here, exquisite pool villas are designed to harmonize flawlessly with the surrounding natural beauty, blurring the lines between indoor elegance and outdoor serenity.",
      "What distinguishes Namia for touring golf groups is its integrated wellness philosophy: every adult guest receives an inclusive daily 90-minute bespoke spa treatment (herbal steam hammam, sports deep-tissue muscle recovery, acupressure therapy) paired with morning riverfront Tai Chi sessions. Following 18 holes of championship golf in the tropical sun, returning to Namia provides immediate physical rejuvenation for legs, shoulders, and spine.",
      "Experience world-class dining that celebrates local Vietnamese and farm-to-table flavors, private VIP transfers into the ancient, lantern-lit streets of Hoi An, and deeply personalized concierge service—all without ever repacking for the duration of the 7-day tour.",
    ],
    keyFeatures: [
      "100% Stand-Alone Private Pool Villas with secluded plunge pool, sun terrace, and lush gardens",
      "Inclusive Daily 90-Minute Spa & Hammam Recovery per adult guest",
      "Sunrise Tai Chi & Mobility sessions on the wooden riverfront deck",
      "Scheduled resort shuttle directly into Hoi An Ancient Town",
      "All-day artisanal breakfast overlooking the Thu Bon River",
    ],
  },
  courseProfiles: [
    {
      name: "Hoiana Shores Golf Club",
      designer: "Robert Trent Jones II",
      tagline: "World's Best New Golf Course • Golf Digest World Top 100 • Robert Trent Jones II Seaside Links",
      par: "Par 71",
      yardage: "7,004 Yards",
      established: "2020",
      transferTime: "~20 minutes door-to-door from Namia River Retreat",
      transferExpectation:
        "Located directly south of Hoi An along the coastal highway. Smooth, scenic 20-minute private VIP transfer in our dedicated executive fleet.",
      heroImage: "/images/courses/vietnam/hoiana-shores/hoiana-shores-beachfront-golf.webp",
      paragraphs: [
        "There is no course on your itinerary — and very few in all of Southeast Asia — that can match Hoiana Shores for pure visual drama. Robert Trent Jones II's links masterpiece occupies a finger of duneland between the Eastern Sea and the Thu Bon River estuary, with the Cham Islands visible on the horizon from multiple vantage points. The World Golf Awards named it the 'World's Best New Golf Course' upon opening, and it has consistently earned a place on Golf Digest’s prestigious 'World’s 100 Greatest Golf Courses' list.",
        "True links golf in the classical sense: the sea wind is not incidental but structural. Club selection is rarely straightforward because the breeze shifts in intensity and direction throughout the round. The natural duneland topography provides rollicking fairways with significant contour — the bump-and-run is not only valid but often the optimal approach, particularly on the exposed oceanside holes of the front nine. Several greens are elevated above their surroundings, offering panoramic views across the South China Sea.",
        "Architect Robert Trent Jones II has created an exceptional par-3 sequence — including the dramatic 6th and 16th, playing into the prevailing ocean wind with greens elevated above the dunegrass. The finishing holes, returning toward the palatial 19th hole clubhouse along the river estuary, complete a round that demands strategic shotmaking from the first tee to the final putt.",
      ],
    },
    {
      name: "Ba Na Hills Golf Club",
      designer: "Luke Donald / IMG Worldwide",
      tagline: "Asia's Most Awarded Mountain Course • Luke Donald Masterpiece • Rainforest Foothills",
      par: "Par 72",
      yardage: "7,858 Yards",
      established: "2016",
      transferTime: "~50 minutes door-to-door from Namia River Retreat",
      transferExpectation:
        "Scenic 50-minute private VIP transfer ascending westward from the coastal plains into the cool foothills of the Truong Son mountain range. Temperatures drop 4–6°C as you enter the highlands.",
      heroImage: "/images/courses/vietnam/ba-na-hills/ba-na-hills-aerial-sunset.webp",
      paragraphs: [
        "Ba Na Hills Golf Club has established itself as one of the most visually spectacular golf experiences in Southeast Asia. Set against the imposing backdrop of the Ba Na Hills mountain range — which rises steeply from the coastal plains just 25 kilometres west of Da Nang — the course occupies a landscape of exceptional natural drama, with deep ravines, towering hardwood canopy, and mountain streams that define the character of numerous holes.",
        "At 7,858 yards from the championship tees, the layout is one of Vietnam's longest. The clever use of elevation change, both in terms of topography and psychological effect, is Luke Donald's masterstroke here. The front nine plays through a more open, parkland-influenced terrain with long, sweeping fairways before the back nine ascends into the hills proper, delivering a succession of blind shots, doglegs, and dramatic par-3s with panoramic views across the Ba Na valley floor.",
        "Particular highlights include the par-3 12th hole — a magnificent downhill shot to an island-feel green protected by a natural stream — and the demanding par-5 5th, which requires three precise shots to reach a narrowly guarded green. The comprehensive clubhouse and driving range are managed to IMG's international standard, offering tour-grade conditioning.",
      ],
    },
    {
      name: "Laguna Golf Lăng Cô",
      designer: "Sir Nick Faldo",
      tagline: "Sir Nick Faldo's Coastal Masterwork • Where Ocean Waves Meet Rice Paddies and Mountain Crags",
      par: "Par 71",
      yardage: "7,100 Yards",
      established: "2014",
      transferTime: "~75 minutes via Hai Van Coastal Highway & Tunnel",
      transferExpectation:
        "Laguna Lăng Cô is located north of Da Nang in Lăng Cô Bay, approximately a 75-minute private transfer from Hoi An via the coastal highway and Hai Van Tunnel. While representing the longest transit of the itinerary, the sheer visual grandeur of the course, its pristine Faldo routing, and the breathtaking coastal scenery make it an unmissable golfing journey for every touring group.",
      heroImage: "/images/courses/vietnam/laguna-lang-co/laguna-golf-lang-co-jungle-tropical-3.webp",
      paragraphs: [
        "Six-time major champion Sir Nick Faldo's Laguna Lăng Cô Golf Club is one of the most visually dramatic courses in all of Southeast Asia — and among the most technically impressive. Situated at the heart of Vietnam's first fully integrated luxury resort on the shores of Lăng Cô Bay, the course occupies a stretch of land of exceptional natural beauty: the Hai Van Pass rises sharply to the north, Lăng Cô's turquoise lagoon stretches to the south, and the course threads between rice paddies, jungle waterways, and undulating terrain to create a layout of genuine variety and strategic interest.",
        "At just under 7,100 yards from the back tees, Faldo has successfully designed a course that challenges the scratch player while remaining thoroughly accessible to the higher handicapper. The signature hole is the short par-4 9th, widely considered one of the best par 4s in Vietnam. Running directly parallel to the pristine Lăng Cô beach, it offers unobstructed panoramic views of the East Sea. Coastal winds can significantly impact club selection when trying to find both tight fairway landing zones and when approaching the green.",
        "The back nine introduces working rice paddies tended by local water buffalo, creating a uniquely tranquil Vietnamese agrarian atmosphere before ascending into granite rock outcroppings and beachside dunes. The clubhouse provides panoramic veranda views over the 18th green and the mountains beyond.",
      ],
    },
    {
      name: "BRG Da Nang Golf Resort (Nicklaus Course)",
      designer: "Jack Nicklaus Design",
      tagline: "Asia's First Wooden Bulkhead Course • Florida Stadium Drama • Platinum Paspalum",
      par: "Par 73",
      yardage: "7,380 Yards",
      established: "2020",
      transferTime: "~25 minutes door-to-door from Namia River Retreat",
      transferExpectation:
        "Located along the Da Nang - Hoi An coastal boulevard. Swift 25-minute door-to-door transit in our private VIP vehicles.",
      heroImage: "/images/courses/vietnam/brg-da-nang-nicklaus/brg-da-nang-golf-resort-nicklaus-course-da-nang-1.webp",
      paragraphs: [
        "The Nicklaus Course at BRG Da Nang Golf Resort is a bold architectural statement, bringing Asia's first authentic Florida-style bulkhead course to Vietnam's Central Coast. Designed by the Jack Nicklaus Design team, the layout features dramatic wooden bulkhead retaining walls running along sparkling coastal lagoons and water hazards that flank almost every hole.",
        "Measuring 7,380 yards of Platinum Paspalum turf, it emphasizes shotmaking discipline, risk-reward carries, and target-style iron play. Hole 17 stands as the course's signature test: an unforgettable par-3 requiring a nerve-testing water carry to an island-bulkhead green framed by white sand.",
        "The course delivers a sharp contrast to classic dunes links, providing tour-grade stadium drama for the championship finale with views across the waterways.",
      ],
    },
  ],
  optionalExcursions: [
    {
      title: "Namia Sunset Riverboat Experience (Round-Trip)",
      tagline: "Exclusive Golden Hour Cruise Along the Thu Bon River",
      duration: "90 Minutes (Sunset 16:45 – 18:15)",
      type: "Private Round-Trip River Cruise (Namia Jetty)",
      image: "/images/tours/vietnam/brochure/thu-bon-river-sunset-cruise.webp",
      overview:
        "Step aboard directly from Namia River Retreat's private pier for an intimate, tranquil 90-minute sunset voyage along the peaceful Thu Bon River. Glide past local riverbank hamlets and traditional fishing nets while enjoying chilled wine, craft beer, and chef-prepared canapés as twilight falls over the Truong Son range. Please note: This is an exclusive leisure round-trip cruise returning directly to the resort pier; it is not a water taxi or drop-off service.",
      features: [
        "Private wooden riverboat with captain and crew",
        "Boarding directly from Namia River Retreat private jetty",
        "Chef-curated canapés, chilled wine, and local craft beer",
        "Strictly round-trip leisure experience returning to resort pier",
      ],
      pricingNote: "Optional Add-on • Inquire with private group numbers",
    },
    {
      title: "Ba Na Hills & The Iconic Golden Bridge",
      tagline: "Southeast Asia's Most Spectacular Mountain Vista",
      duration: "Half-Day (approx. 4.5 – 5 Hours)",
      type: "Private Chauffeured Mountain Excursion",
      image: "/images/destinations/vietnam/culture/golden-bridge-ba-na-hills-vietnam.webp",
      overview:
        "Ascend through the mountain mist aboard Southeast Asia's longest modern cable car to King Peak (1,487m elevation). Stroll the world-renowned Golden Bridge, held aloft by giant moss-covered stone hands emerging from the cliffside. Explore French-colonial alpine architecture, Linh Ung Pagoda, cliffside floral gardens at Jardin D'Amour, and sweeping panoramic views across Da Nang and the East Sea.",
      features: [
        "Private air-conditioned executive vehicle & dedicated driver",
        "Round-trip modern cable car express tickets",
        "Full access to the iconic Golden Bridge & Jardin D'Amour",
        "French Village summit viewpoints and Linh Ung Pagoda",
      ],
      pricingNote: "Optional Add-on • Available on any leisure morning or afternoon",
    },
    {
      title: "Hoi An Countryside & Coconut Forest by Vintage Jeep",
      tagline: "Open-Air Jeep Adventure & Bamboo Basket Boats",
      duration: "4 Hours (Morning or Afternoon)",
      type: "Private Open-Air Jeep Safari",
      image: "/images/tours/vietnam/hoi-an-jeep.webp",
      overview:
        "Set off in an open-air vintage military Jeep with your private English-speaking guide to Cam Kim Island. Discover rural agrarian life along lush dyke paths, visit traditional artisan woodcarving and sedge-mat weaving workshops, and embark on an exhilarating bamboo basket boat ride through the water coconut groves of Bay Mau.",
      features: [
        "Private restored open-air vintage Jeep with private driver",
        "English-speaking cultural guide",
        "Bamboo basket boat excursion through Bay Mau coconut forest",
        "Traditional artisan handicraft workshop visits",
      ],
      pricingNote: "Optional Add-on • Popular with golfers and non-golfing partners",
    },
    {
      title: "Tra Que Herb Village & Red Bridge Cooking Masterclass",
      tagline: "Market Tour, River Cruise & Hands-On Culinary Feast",
      duration: "Half-Day (08:15 – 13:00)",
      type: "Culinary Masterclass & Market Tour",
      image: "/images/destinations/vietnam/culinary/take-a-cooking-class-in-tra-que-vegetable-village.webp",
      overview:
        "Commence with a chef-led morning walk through Hoi An's vibrant produce market to touch, smell, and select fresh indigenous herbs and spices. Board a river cruiser along the Thu Bon River to the open-air Red Bridge cooking pavilion. Enjoy a hands-on culinary masterclass creating authentic Vietnamese classics (crisp Banh Xeo pancakes, fresh spring rolls, and clay pot seafood) followed by a celebratory riverside feast.",
      features: [
        "Chef-led morning produce market exploration",
        "Scenic Thu Bon River boat cruise to cooking school",
        "Hands-on cooking class with individual prep stations",
        "Multi-course lunch including your own culinary creations",
      ],
      pricingNote: "Optional Add-on • Highly recommended for all food and wine enthusiasts",
    },
    {
      title: "Marble Mountains & Sacred Buddhist Caves",
      tagline: "Ancient Limestone Karsts, Hidden Grottoes & Coastal Panorama",
      duration: "Half-Day (approx. 3.5 – 4 Hours)",
      type: "Private Guided Heritage & Geology Excursion",
      image: "/images/destinations/vietnam/culture/marble-mountain-sunrise-view.webp",
      overview:
        "Rising dramatically from the coastal plains between Hoi An and Da Nang, the five sacred limestone and marble karsts of Ngu Hanh Son represent the five universal elements. Ascend Thuy Son (Water Mountain) via glass elevator or carved mountain stone pathways into the cavernous Huyen Khong cave, where ethereal shafts of sunlight illuminate centuries-old Buddhist shrines and active altars, culminating in panoramic vistas across the East Sea coastline.",
      features: [
        "Private air-conditioned executive vehicle & dedicated English-speaking cultural guide",
        "Modern glass cliff-elevator access & shaded stone staircase routes",
        "Huyen Khong & Am Phu subterranean cave grottoes with natural skylights",
        "Panoramic coastal viewpoints over Da Nang Bay and Cham Islands",
        "Centuries-old stone carving craft village visit at mountain foot",
      ],
      pricingNote: "Optional Add-on • Just 20 minutes from Hoi An; easily paired with morning golf",
    },
    {
      title: "My Son Sanctuary Private Sunrise & Ancient Champa Heritage",
      tagline: "UNESCO World Heritage Hindu Temples in a Lush Jungle Basin",
      duration: "Half-Day (approx. 4.5 – 5 Hours • Early Morning Departure)",
      type: "Private Chauffeured UNESCO Heritage Journey",
      image: "/images/destinations/vietnam/culture/my-son-sanctuary-sunrise-view.webp",
      overview:
        "Nestled in a verdant valley basin encircled by misty jungle ridges and Hon Quap (Cat's Tooth Mountain), My Son served as the religious and political capital of the Champa Kingdom from the 4th to the 13th century. Depart at dawn in your private executive fleet to explore the red-brick sanctuary towers in cool tranquility before daytime crowds arrive. Discover masterfully fired-brick Hindu shrines dedicated to Shiva and enjoy a traditional live Cham dance performance.",
      features: [
        "Dawn departure in private VIP vehicle to arrive before daytime crowds & heat",
        "Expert historian guide specializing in Champa kingdom architecture & epigraphy",
        "Electric buggy transit through the valley & entry to all UNESCO temple clusters",
        "Live traditional Cham musical and dance performance at the site pavilion",
        "Return to resort in time for lunch or afternoon relaxation by the pool",
      ],
      pricingNote: "Optional Add-on • Highly recommended for history, architecture, and photography lovers",
    },
  ],
  recommendedDining: [
    {
      name: "Morning Glory Original",
      cuisine: "Legendary Authentic Central Vietnamese & Elevated Street Food",
      vibe: "Bustling Open-Kitchen Heritage Landmark",
      location: "Hoi An Old Town (10 mins from Namia)",
      image: "/images/restaurants-bars/vietnam/morning-glory-vietnamese-restaurant-traditional-local-food.webp",
      overview:
        "Founded by celebrated culinary icon and cookbook author Ms Trinh Diem Vy, Morning Glory is the undisputed benchmark of Hoi An gastronomy. Housed in a two-story heritage French-colonial shophouse with a live central cooking theatre, Ms Vy elevates traditional street-food staples—from Cao Lau pork noodles to delicate White Rose dumplings and crispy stuffed squid—into an extraordinary feast.",
      highlights: [
        "Created by Hoi An culinary pioneer Ms Trinh Diem Vy",
        "Live central open-flame cooking theatre and street food stations",
        "Essential tasting experience for Hoi An's UNESCO heritage staple dishes",
      ],
    },
    {
      name: "Mango Rooms & Mango Mango",
      cuisine: "Celebrity Chef Vietnamese Fusion & Signature Cocktails",
      vibe: "Vibrant, Energetic Heritage Riverfront",
      location: "Hoi An Riverside (10 mins from Namia)",
      image: "/images/restaurants-bars/vietnam/mango-room-celebrity-chef-duc-trans-restaurant.webp",
      overview:
        "Helmed by celebrated globetrotting chef Duc Tran, Mango Rooms and its sister venue Mango Mango offer a vibrant explosion of color, music, and inventive flavor. The dishes marry local Vietnamese seafood and spices with Latin and Mediterranean influences overlooking the lantern-lit river.",
      highlights: [
        "Created by legendary Hoi An culinary icon Chef Duc Tran",
        "Unrivalled views of the lantern-illuminated Thu Bon River",
        "High-energy atmosphere perfect for tour group celebrations",
      ],
    },
    {
      name: "Home Hoi An",
      cuisine: "Peerless Royal Vietnamese & Central Coast Heritage Recipes",
      vibe: "Restored French-Indochine Heritage Villa & Garden",
      location: "Hoi An Heritage Quarter (10 mins from Namia)",
      image: "/images/restaurants-bars/vietnam/home-hoi-an-peerless-vietnamese-cuisine.webp",
      overview:
        "Set within a beautifully restored French-colonial heritage residence, Home Hoi An captures the noble elegance of Vietnam's imperial culinary traditions. With vintage tiled verandas, an atmospheric lantern courtyard, and meticulous preparation of royal Hue and Hoi An heritage dishes, it provides an unforgettable setting for an intimate, upscale dinner.",
      highlights: [
        "Restored French-colonial heritage villa with open courtyard",
        "Imperial Hue recipes and Central Vietnamese banquet dining",
        "Exceptional cellar of French and Australian fine wines",
      ],
    },
    {
      name: "The Surf & Turf Beach Club",
      cuisine: "Prime Australian Steaks & Ocean-Fresh Seafood",
      vibe: "Upscale Beachfront Luxury & Sunset Cocktails",
      location: "An Bang Beach (12 mins from Namia)",
      image: "/images/restaurants-bars/vietnam/surf-and-turf-club-amazing-steak-and-seafood.webp",
      overview:
        "Located directly on the white sands of An Bang Beach, this is the region's ultimate destination for prime Australian Black Angus steaks, charcoal-grilled rock lobster, and ocean-fresh seafood. Perfect for an indulgent beachfront evening after a round on the links.",
      highlights: [
        "Charcoal-grilled prime steaks & fresh local seafood",
        "Direct oceanfront dining with panoramic sunset views",
        "Curated international wine list & craft cocktails",
      ],
    },
    {
      name: "Tok Restaurant",
      cuisine: "Modern Vietnamese-Australian Fusion & Farm-to-Table",
      vibe: "Serene Ricefield Architectural Pavilion",
      location: "Cam Thanh (7 mins from Namia)",
      image: "/images/restaurants-bars/vietnam/tok-fusion-dining.webp",
      overview:
        "Set against a peaceful backdrop of lush, emerald-green rice paddies and coconut palms, Tok elevates dining into a scenic event. The menu blends modern Australian culinary techniques with indigenous Vietnamese ingredients, complemented by a world-class cocktail program.",
      highlights: [
        "Tranquil rice paddy views in an open-air architectural pavilion",
        "Inventive farm-to-table seasonal tasting menus",
        "Signature craft cocktails and craft beers",
      ],
    },
    {
      name: "Lim Dining Room",
      cuisine: "Authentic Contemporary Italian & Fine European Wine",
      vibe: "Centuries-Old UNESCO Heritage Shophouse",
      location: "Hoi An Old Town (10 mins from Namia)",
      image: "/images/restaurants-bars/vietnam/lim-dining-room-authentic-italian-food-heritage-setting.webp",
      overview:
        "When your travel party craves authentic European culinary excellence in a heritage setting, Lim delivers. Nestled within an authentic wooden merchant shophouse in Hoi An's UNESCO quarter, Lim serves hand-rolled pastas, artisanal charcuterie, and dry-aged cuts with a stellar Italian wine cellar.",
      highlights: [
        "Historic multi-story merchant shophouse setting",
        "Handmade artisanal pastas & Italian regional specialties",
        "Extensive cellar of fine Italian and French vintages",
      ],
    },
  ],
};

export const HOI_AN_CHAMPIONSHIP_WEEK_TRADE: TradeTourData = {
  slug: "hoi-an-championship-week-8x2b5q",
  canonicalTradeUrl: "/trade-portal/tours/hoi-an-championship-week-8x2b5q/",
  titlePrefix: "Hoi An",
  titleHighlight: "Championship Week",
  resortName: "Palm Gardens Beach Resort & Spa",
  resortType: "5-Star Beachfront Resort",
  location: "Cua Dai Beach & Hoi An, Vietnam",
  duration: "7 Days / 6 Nights",
  roundsCount: 4,
  holesCount: 72,
  nettPriceAUD: 2390,
  singleSupplementAUD: 660,
  upgradeOption: {
    title: "Hoiana Shores Golf Club Swap",
    courseName: "Hoiana Shores Golf Club",
    architect: "Robert Trent Jones Jr.",
    priceDiffAUD: 460,
    seasonNote: "Weekday rate (March–June)",
    description: "Upgrade Day 3 from Vinpearl to Robert Trent Jones Jr.'s World Top 100 links course on the East Sea dunes.",
  },
  heroImage: "/images/courses/vietnam/laguna-lang-co/laguna-golf-lang-co-jungle-tropical-3.webp",
  heroBadge: "🇻🇳 Confidential Wholesale Tariff • 4 Championship Rounds",
  executiveSummary:
    "A 7-day, 6-night high-value championship golf retreat crafted for golfers seeking world-class architectural variety paired with 5-star oceanfront living. Unpack once at Palm Gardens Beach Resort on Cua Dai Beach in Hoi An. Features 4 premier championship rounds across Colin Montgomerie, IMG Worldwide (Vinpearl), Sir Nick Faldo, and Luke Donald designs, combined with vintage Jeep safaris and private VIP transfers. Optional Day 3 upgrade to Hoiana Shores Golf Club (+460 AUD nett/golfer) available.",
  targetMarket: "Australian social golf groups, club four-balls, golf couples seeking high quality at high-value wholesale rates.",
  keyHighlights: [
    "Nett Rate: $2,390 AUD per golfer twin-share (Single Supplement: $660 AUD)",
    "Optional Course Swap: Upgrade Day 3 from Vinpearl to Hoiana Shores Golf Club (+$460 AUD nett/golfer)",
    "6 Nights 5-Star Beachfront Resort at Palm Gardens Beach Resort & Spa on Cua Dai Beach",
    "4 Championship Rounds: Montgomerie Links, Vinpearl Golf Nam Hoi An, Laguna Lăng Cô, Ba Na Hills",
    "1:1 dedicated caddies & shared motorized carts for all 72 holes",
    "Open-top vintage army Jeep safari through Hoi An countryside and organic farming villages",
    "Private VIP executive vehicle fleet for all airport, course, and dinner transfers",
    "Dedicated on-the-ground English-speaking private concierge handling tee times, bags, and dining reservations",
  ],
  includedInNett: [
    {
      category: "Championship Golf (72 Holes)",
      items: [
        "18 Holes at Montgomerie Links Vietnam (Colin Montgomerie) — Top boutique parkland dunes (~15 mins transfer)",
        "18 Holes at Vinpearl Golf Nam Hoi An (IMG Worldwide) — Massive white-sand dunes resort course (~25 mins transfer)",
        "Optional Day 3 Swap: Hoiana Shores Golf Club (Robert Trent Jones Jr.) upgrade available at +$460 AUD nett/golfer",
        "18 Holes at Laguna Golf Lăng Cô (Sir Nick Faldo) — Mountain-flanked links & rice paddy fairways (~75 mins transfer)",
        "18 Holes at Ba Na Hills Golf Club (Luke Donald / IMG) — Award-winning highland rainforest layout (~50 mins transfer)",
        "Dedicated 1:1 local caddie for every player on every round",
        "Shared motorized golf carts & range warmup balls at all courses",
        "Pre-blocked prime morning tee times with pre-arranged scoring and bag transfers",
      ],
    },
    {
      category: "5-Star Beachfront Living",
      items: [
        "6 Nights deluxe accommodation at Palm Gardens Beach Resort & Spa, Hoi An",
        "Spanning 5 hectares of tropical frangipani landscaped gardens fronting Cua Dai Beach",
        "45-meter free-form tropical resort pool and private oceanfront sun loungers",
        "Daily international & Vietnamese buffet breakfast overlooking the gardens",
      ],
    },
    {
      category: "Curated Cultural Safari & Rest Day",
      items: [
        "Private vintage army Jeep safari excursion through Hoi An countryside and rice paddies",
        "VIP bespoke tailoring consultations at Hoi An's premier master ateliers",
        "Flexible afternoon to explore the lantern-lit UNESCO Ancient Town shophouses",
      ],
    },
    {
      category: "Private VIP Ground Fleet & Concierge",
      items: [
        "Airside meet-and-greet at Da Nang International Airport (DAD) with private VIP transit (~35 mins)",
        "Dedicated private air-conditioned VIP executive vehicles for all golf courses and scheduled excursions",
        "Complimentary chilled bottled water, cold towels, and equipment storage in vehicles",
        "Dedicated local private concierge on call throughout the tour for dining bookings and tournament scoring",
      ],
    },
  ],
  excludedFromNett: [
    "International and domestic airfares to/from Da Nang International Airport (DAD)",
    "Lunches, dinners, and clubhouse refreshments (outside daily breakfast & welcome reception)",
    "Caddie gratuity tips (standard guideline: 400,000–500,000 VND / ~$25–$30 AUD per round paid directly to caddie)",
    "Personal travel and golf equipment insurance (strongly recommended)",
    "Personal discretionary items, premium alcoholic beverages, and personal laundry",
  ],
  salesToolkit: [
    {
      title: "Executive Summary for Client Itinerary / Proposal PDF",
      description: "Drop this high-polish overview directly into your custom agency proposal documents or Axus/Travefy itineraries.",
      content: `HOI AN CHAMPIONSHIP WEEK — 7 DAYS / 6 NIGHTS
Base: Palm Gardens Beach Resort & Spa, Hoi An (5-Star Oceanfront)
Golf Rota: Montgomerie Links • Vinpearl Golf Nam Hoi An (or Hoiana Shores Upgrade) • Laguna Lăng Cô • Ba Na Hills

Hoi An Championship Week is crafted for traveling golfers seeking four premier championship rounds paired with 5-star oceanfront relaxation at exceptional wholesale value. Set within 5 hectares of lush tropical palms on Cua Dai Beach, guests unpack once at the 5-star Palm Gardens Beach Resort & Spa, enjoying a peaceful sanctuary just 10 minutes from Hoi An's historic lantern-lit quarter.

The championship rota delivers sensational architectural variety: Colin Montgomerie's boutique dunes layout, IMG's sprawling white-sand dunes course at Vinpearl Nam Hoi An, Sir Nick Faldo's dramatic coastal-mountain masterwork at Laguna Lăng Cô, and Luke Donald's highland rainforest test at Ba Na Hills. Groups seeking World Top 100 links drama can easily swap Day 3 to Robert Trent Jones Jr.'s Hoiana Shores Golf Club.`,
    },
    {
      title: "5 Key Selling Points for Australian Golfers",
      description: "Bullet points addressing common client questions and objections.",
      content: `1. Unbeatable High-Value Championship Base: 5-star beachfront living and 4 championship rounds with dedicated caddies from just $2,390 AUD nett per golfer.
2. Unpack Once Beachfront Living: Palm Gardens Resort gives players a 45m swimming pool, beachfront sun loungers, and tropical gardens without needing to change hotels once.
3. Flexible Day 3 Upgrade: Keep the tour highly cost-effective with Vinpearl, or upgrade to Golf Digest World Top 100 Hoiana Shores for only +$460 AUD nett/golfer.
4. Heavyweight Designers: Test your game on distinct layouts crafted by Colin Montgomerie, IMG Worldwide, Sir Nick Faldo, and Luke Donald.
5. Dedicated 1:1 Caddie Service: Southeast Asia's greatest golf pleasure—personal caddies read your putts, clean your clubs, and navigate every hole.`,
    },
    {
      title: "Client-Facing Inclusions List",
      description: "Ready-to-paste inclusions block for client quote letters or booking vouchers.",
      content: `INCLUSIONS:
• 6 Nights deluxe accommodation at Palm Gardens Beach Resort & Spa Hoi An
• 4 Rounds of 18-hole championship golf across Montgomerie Links, Vinpearl Golf Nam Hoi An, Laguna Lăng Cô, and Ba Na Hills
• Optional Day 3 Course Swap: Hoiana Shores Golf Club available on request
• Dedicated 1:1 local caddie for each golfer on every round
• Shared motorized golf carts and driving range practice balls
• Open-top vintage army Jeep safari through Hoi An countryside and organic farming villages
• Daily international & Vietnamese buffet breakfast overlooking the resort gardens
• Private VIP executive vehicle fleet transfers for airport and all golf courses
• Full golf bag coordination, pre-booked tee times, and on-site concierge support
• Access to Palm Gardens Resort private beach loungers, 45m pool, and tennis courts`,
    },
  ],
  mediaAssets: [
    {
      url: "/images/accommodations/vietnam/palm-gardens-hoi-an/vietnam-luxury-hotel-palm-gardens-hoi-an-hero-1.webp",
      title: "Palm Gardens Resort — Beachfront Entrance",
      category: "resort",
      caption: "5-Star beachfront sanctuary set amidst 5 hectares of lush tropical grounds.",
      alt: "Palm Gardens Resort Hoi An beachfront luxury hotel Vietnam",
      resolution: "1920 x 1280 (High-Res WebP)",
      aspectRatio: "3:2",
    },
    {
      url: "/images/accommodations/vietnam/palm-gardens-hoi-an/vietnam-luxury-hotel-palm-gardens-hoi-an-outdoor-pool-5.webp",
      title: "Palm Gardens 45-Meter Free-Form Pool",
      category: "resort",
      caption: "Expansive swimming pool steps from the beach with poolside cocktail service.",
      alt: "Outdoor pool at Palm Gardens Resort Hoi An",
      resolution: "1920 x 1280 (High-Res WebP)",
      aspectRatio: "3:2",
    },
    {
      url: "/images/accommodations/vietnam/palm-gardens-hoi-an/vietnam-luxury-hotel-palm-gardens-hoi-an-beachfront-3.webp",
      title: "Cua Dai Beachfront Sun Loungers",
      category: "resort",
      caption: "Private ocean loungers along the calm golden sands of Cua Dai Beach.",
      alt: "Beachfront view at Palm Gardens Resort Hoi An",
      resolution: "1920 x 1280 (High-Res WebP)",
      aspectRatio: "3:2",
    },
    {
      url: "/images/accommodations/vietnam/palm-gardens-hoi-an/vietnam-luxury-hotel-palm-gardens-hoi-an-bungalow-4.webp",
      title: "Palm Gardens Garden Bungalow Suite",
      category: "resort",
      caption: "Private garden bungalow suite surrounded by tropical palms and frangipani.",
      alt: "Garden bungalow suite at Palm Gardens Resort Hoi An",
      resolution: "1920 x 1280 (High-Res WebP)",
      aspectRatio: "3:2",
    },
    {
      url: "/images/accommodations/vietnam/palm-gardens-hoi-an/vietnam-luxury-hotel-palm-gardens-hoi-an-aerial-2.webp",
      title: "Palm Gardens Resort Aerial Grounds",
      category: "resort",
      caption: "Spectacular aerial view across the 5 hectares of coastal grounds.",
      alt: "Aerial view of Palm Gardens Resort Hoi An",
      resolution: "1920 x 1280 (High-Res WebP)",
      aspectRatio: "3:2",
    },
    {
      url: "/images/courses/vietnam/montgomerie-links/montgomerie-links-vietnam-da-nang-1-hero.webp",
      title: "Montgomerie Links — Classic Parkland Dunes",
      category: "golf",
      caption: "Colin Montgomerie's boutique layout with casuarina pine tree lines.",
      alt: "Montgomerie Links Vietnam golf course fairway Da Nang",
      resolution: "2400 x 1350 (Ultra-HD WebP)",
      aspectRatio: "16:9",
    },
    {
      url: "/images/courses/vietnam/montgomerie-links/montgomerie-links-vietnam-greens-bunkers-4.webp",
      title: "Montgomerie Links — Green Complex",
      category: "golf",
      caption: "Pristine green complex surrounded by native sandy waste areas.",
      alt: "Montgomerie Links greens and bunkers",
      resolution: "1920 x 1280 (High-Res WebP)",
      aspectRatio: "3:2",
    },
    {
      url: "/images/courses/vietnam/vinpearl-nam-hoi-an/vinpearl-golf-nam-hoi-an-dunes-fairway-2.webp",
      title: "Vinpearl Nam Hoi An — White-Sand Dunes",
      category: "golf",
      caption: "Sweeping white-sand dunes flanking the fairways at Vinpearl Nam Hoi An.",
      alt: "Vinpearl Golf Nam Hoi An sand dunes fairway",
      resolution: "2400 x 1350 (Ultra-HD WebP)",
      aspectRatio: "16:9",
    },
    {
      url: "/images/courses/vietnam/vinpearl-nam-hoi-an/vinpearl-golf-nam-hoi-an-signature-hole-5.webp",
      title: "Vinpearl Nam Hoi An — Signature Water Hole",
      category: "golf",
      caption: "Signature water carry hole reflecting coastal pines and blue skies.",
      alt: "Vinpearl Golf Nam Hoi An signature hole",
      resolution: "1920 x 1280 (High-Res WebP)",
      aspectRatio: "3:2",
    },
    {
      url: "/images/courses/vietnam/hoiana-shores/hoiana-shores-beachfront-golf.webp",
      title: "Hoiana Shores — World Top 100 Links (Upgrade)",
      category: "golf",
      caption: "Robert Trent Jones Jr.'s links masterpiece playing along the East Sea dunes.",
      alt: "Hoiana Shores Golf Club coastal links hole along East Sea",
      resolution: "2400 x 1350 (Ultra-HD WebP)",
      aspectRatio: "16:9",
    },
    {
      url: "/images/courses/vietnam/hoiana-shores/hoiana-heart-bunker.webp",
      title: "Hoiana Shores — Iconic Heart Bunker (Upgrade)",
      category: "golf",
      caption: "Signature heart-shaped revetted pot bunker framed by native dunegrass.",
      alt: "Hoiana Shores Golf Club heart bunker coastal links Vietnam",
      resolution: "1920 x 1280 (High-Res WebP)",
      aspectRatio: "3:2",
    },
    {
      url: "/images/courses/vietnam/laguna-lang-co/laguna-golf-lang-co-bach-ma-mountain-5.webp",
      title: "Laguna Lăng Cô — Bach Ma Mountain Backdrop",
      category: "golf",
      caption: "Sir Nick Faldo's layout playing between mountain peaks and waves of Lang Co Bay.",
      alt: "Laguna Lang Co Bach Ma mountain backdrop Central Vietnam",
      resolution: "2400 x 1350 (Ultra-HD WebP)",
      aspectRatio: "16:9",
    },
    {
      url: "/images/courses/vietnam/ba-na-hills/ba-na-hills-aerial-sunset.webp",
      title: "Ba Na Hills — Highland Mountain Aerial",
      category: "golf",
      caption: "Luke Donald's mountain layout carved through tropical rainforest.",
      alt: "Ba Na Hills Golf Club sunset aerial mountain course Da Nang",
      resolution: "2400 x 1350 (Ultra-HD WebP)",
      aspectRatio: "16:9",
    },
    {
      url: "/images/destinations/vietnam/culture/hoi-an-lantern-boat.webp",
      title: "Hoi An Ancient Town — Twilight Lantern Boat",
      category: "lifestyle",
      caption: "Private wooden boat cruise along the Thu Bon River into lantern-lit shophouses.",
      alt: "Hoi An ancient town lantern boats at night Vietnam",
      resolution: "1920 x 1280 (High-Res WebP)",
      aspectRatio: "3:2",
    },
    {
      url: "/images/tours/vietnam/yaly-couture-experienced-tailor-hoi-an.webp",
      title: "Yaly Couture — Bespoke Master Tailoring",
      category: "lifestyle",
      caption: "VIP custom linen and suit tailoring in historic Hoi An ateliers.",
      alt: "Hoi An custom bespoke suit and shirt tailoring craft",
      resolution: "1920 x 1280 (High-Res WebP)",
      aspectRatio: "3:2",
    },
    {
      url: "/images/tours/vietnam/tok-restaurant-on-rice-paddies.webp",
      title: "TOK Restaurant — Paddy-View Dining",
      category: "lifestyle",
      caption: "Tranquil countryside dining overlooking working rice paddies.",
      alt: "TOK Restaurant's Paddy-View Dining",
      resolution: "1920 x 1280 (High-Res WebP)",
      aspectRatio: "3:2",
    },
  ],
  itinerary: [
    {
      day: 1,
      title: "Welcome to Hoi An & Resort Check-in",
      subtitle: "Arrival & Coastal Sanctuary Settle-in",
      pacing: "Effortless Arrival",
      transferTime: "35 mins from DAD Airport",
      transferNote: "Private VIP executive fleet transfer directly from Da Nang International Airport (DAD) to Palm Gardens Beach Resort.",
      overview:
        "The moment you touch down at Da Nang Airport, our private chauffeur takes over. Settle into Palm Gardens Resort amidst five hectares of lush gardens, sip coconut welcome refreshments, and take an evening dip in the ocean as sunset illuminates Cua Dai Beach.",
      bullets: [
        "Private VIP airport arrival meet-and-greet at Da Nang International Airport (DAD) (~35 mins)",
        "Check-in at Palm Gardens Beach Resort & Spa with welcome drinks and tour orientation",
        "Leisurely afternoon exploring the 45m resort pool and private beachfront loungers",
      ],
      logistics: [
        { label: "Stay", value: "Palm Gardens Beach Resort & Spa" },
        { label: "Transit", value: "Private VIP Executive Vehicle (~35 mins from DAD Airport)" },
        { label: "The Vibe", value: "Tropical beachfront serenity and effortless arrival" },
      ],
      images: [
        {
          url: "/images/accommodations/vietnam/palm-gardens-hoi-an/vietnam-luxury-hotel-palm-gardens-hoi-an-hero-1.webp",
          title: "Palm Gardens Beach Resort & Spa Entrance",
          category: "resort",
          caption: "Grand beachfront resort entrance in Hoi An",
          alt: "Palm Gardens Resort Hoi An beachfront luxury hotel Vietnam",
          resolution: "1920 x 1280",
          aspectRatio: "3:2",
        },
        {
          url: "/images/accommodations/vietnam/palm-gardens-hoi-an/vietnam-luxury-hotel-palm-gardens-hoi-an-outdoor-pool-5.webp",
          title: "45-Meter Free-Form Resort Pool",
          category: "resort",
          caption: "Expansive swimming pool overlooking Cua Dai Beach",
          alt: "Outdoor pool at Palm Gardens Resort Hoi An",
          resolution: "1920 x 1280",
          aspectRatio: "3:2",
        },
      ],
    },
    {
      day: 2,
      title: "The Colin Montgomerie Classic",
      subtitle: "Montgomerie Links Vietnam",
      courseName: "Montgomerie Links Vietnam",
      architect: "Colin Montgomerie",
      courseType: "Parkland Dunes",
      yardage: "7,090 Yards",
      par: "Par 72",
      pacing: "Morning Championship Round",
      transferTime: "15 mins door-to-door",
      transferNote: "Conveniently located along the coastal boulevard just north of Hoi An. Quick 15-minute door-to-door transit.",
      overview:
        "Tee off your tour at Colin Montgomerie's acclaimed layout. Natural wind-blown dunes, indigenous casuarina pines, and sprawling greens demand strategic shotmaking without beating you up on Day 1.",
      bullets: [
        "18 holes on Vietnam's top boutique parkland layout with dedicated 1:1 caddies",
        "Strategic fairway bunkering and undulating greens designed by Ryder Cup legend Colin Montgomerie",
        "Afternoon poolside relaxation and cocktails back at Palm Gardens Resort",
      ],
      logistics: [
        { label: "Play", value: "Montgomerie Links Vietnam (Colin Montgomerie)" },
        { label: "Transfer Time", value: "~15 minutes door-to-door from Palm Gardens" },
        { label: "Stay", value: "Palm Gardens Beach Resort & Spa" },
      ],
      images: [
        {
          url: "/images/courses/vietnam/montgomerie-links/montgomerie-links-vietnam-da-nang-1-hero.webp",
          title: "Montgomerie Links Classic Fairway",
          category: "golf",
          caption: "Classic parkland fairways at Montgomerie Links",
          alt: "Montgomerie Links Vietnam golf course fairway Da Nang",
          resolution: "2400 x 1350",
          aspectRatio: "16:9",
        },
        {
          url: "/images/courses/vietnam/montgomerie-links/montgomerie-links-vietnam-greens-bunkers-4.webp",
          title: "Montgomerie Links Pristine Green Complex",
          category: "golf",
          caption: "Pristine green surrounded by native sandy waste areas",
          alt: "Montgomerie Links greens and bunkers",
          resolution: "1920 x 1280",
          aspectRatio: "3:2",
        },
      ],
    },
    {
      day: 3,
      title: "Rolling White Dunes & Coastal Pines",
      subtitle: "Vinpearl Golf Nam Hoi An | IMG Worldwide",
      courseName: "Vinpearl Golf Nam Hoi An",
      architect: "IMG Worldwide",
      courseType: "Resort Dunes / Wetlands",
      yardage: "7,125 Yards",
      par: "Par 72",
      pacing: "Morning Championship Dunes Round",
      transferTime: "25 mins door-to-door",
      transferNote: "Scenic 25-minute drive south through local fishing villages crossing the Cua Dai bridge.",
      overview:
        "Journey south through tranquil coastal fishing villages to Vinpearl Nam Hoi An. Characterized by wide fairways, sweeping white-sand dunes, and indigenous old-growth casuarina trees, it offers an expansive, enjoyable championship test. Optional Day 3 upgrade to Hoiana Shores Golf Club (+460 AUD nett/golfer) is available for groups seeking pure Scottish links soul.",
      bullets: [
        "18 holes on IMG's expansive resort layout with massive natural sand dunes and old-growth trees",
        "Generous landing areas paired with large undulating greens and water hazards",
        "Dedicated 1:1 caddies navigating ocean breezes and rolling sand waste areas",
        "Optional Course Swap: Upgrade to Hoiana Shores Golf Club (Robert Trent Jones Jr.) for +$460 AUD nett per golfer",
      ],
      logistics: [
        { label: "Play", value: "Vinpearl Golf Nam Hoi An (IMG Worldwide)" },
        { label: "Transfer Time", value: "~25 minutes door-to-door from Palm Gardens" },
        { label: "Upgrade Option", value: "Hoiana Shores Golf Club (+$460 AUD nett/pax)" },
        { label: "Stay", value: "Palm Gardens Beach Resort & Spa" },
      ],
      upgradeOption: {
        title: "Hoiana Shores Golf Club Swap",
        courseName: "Hoiana Shores Golf Club",
        architect: "Robert Trent Jones Jr.",
        priceDiffAUD: 460,
        seasonNote: "Weekday rate (March–June)",
        description: "Replace Vinpearl with Robert Trent Jones Jr.'s World Top 100 links course on the East Sea dunes. Features firm Zeon Zoysia fairways, revetted pot bunkers, and dramatic seaside closing holes.",
      },
      images: [
        {
          url: "/images/courses/vietnam/vinpearl-nam-hoi-an/vinpearl-golf-nam-hoi-an-dunes-fairway-2.webp",
          title: "Vinpearl Nam Hoi An White Dunes",
          category: "golf",
          caption: "Wide white-sand waste areas flanking fairways at Vinpearl Nam Hoi An",
          alt: "Vinpearl Golf Nam Hoi An sand dunes fairway",
          resolution: "2400 x 1350",
          aspectRatio: "16:9",
        },
        {
          url: "/images/courses/vietnam/vinpearl-nam-hoi-an/vinpearl-golf-nam-hoi-an-signature-hole-5.webp",
          title: "Vinpearl Nam Hoi An Signature Hole",
          category: "golf",
          caption: "Signature island-feel hole with water reflections and native coastal pines",
          alt: "Vinpearl Golf Nam Hoi An signature hole",
          resolution: "1920 x 1280",
          aspectRatio: "3:2",
        },
      ],
    },
    {
      day: 4,
      title: "The Flavors of Faifo & Countryside Jeep Safari",
      subtitle: "Rest Day: Heritage, Bespoke Craft & Street Food",
      pacing: "Tactical Rest & Cultural Exploration",
      transferTime: "10 mins to Ancient Town",
      transferNote: "Private vintage army Jeep pick-up directly at Palm Gardens Resort entrance.",
      overview:
        "The clubs take a well-earned rest. Embark on an open-air vintage Jeep safari through the countryside, watch local artisans craft silk lanterns, visit Hoi An's master tailors for custom linens, and dine alongside the Thu Bon River.",
      bullets: [
        "Vintage army Jeep excursion through peaceful organic vegetable villages and rice paddies",
        "VIP bespoke tailoring consultations at Hoi An's premier ateliers",
        "Evening street food discovery walk sampling White Rose dumplings and authentic Cao Lau noodles",
      ],
      logistics: [
        { label: "Stay", value: "Palm Gardens Beach Resort & Spa" },
        { label: "Activity", value: "Vintage Jeep Safari & Tailoring Consultation (~10 mins away)" },
        { label: "Dining", value: "Hoi An Riverfront Street Food Safari" },
      ],
      images: [
        {
          url: "/images/destinations/vietnam/culture/hoi-an-lantern-boat.webp",
          title: "Hoi An Ancient Town Lantern Cruise",
          category: "lifestyle",
          caption: "Twilight lantern cruise on the Thu Bon River",
          alt: "Cultural Exploration in Hoi An",
          resolution: "1920 x 1280",
          aspectRatio: "3:2",
        },
        {
          url: "/images/tours/vietnam/yaly-couture-experienced-tailor-hoi-an.webp",
          title: "Master Tailoring in Hoi An",
          category: "lifestyle",
          caption: "Bespoke master tailoring in historic shophouses",
          alt: "Hoi An custom bespoke suit and shirt tailoring craft",
          resolution: "1920 x 1280",
          aspectRatio: "3:2",
        },
      ],
    },
    {
      day: 5,
      title: "Tropical Parklands & Mountain Pass",
      subtitle: "Laguna Golf Lăng Cô | Sir Nick Faldo Design",
      courseName: "Laguna Golf Lăng Cô",
      architect: "Sir Nick Faldo",
      courseType: "Parkland / Oceanfront Dunes",
      yardage: "7,101 Yards",
      par: "Par 71",
      pacing: "Scenic Excursion Round",
      transferTime: "75 mins via Hai Van Coastal Highway & Tunnel",
      transferNote: "Laguna Lăng Cô is located north of Da Nang in Lăng Cô Bay, approximately a 75-minute private transfer from Hoi An via the coastal highway and Hai Van Tunnel. While representing the longest transit of your itinerary, the sheer visual grandeur of the course, its pristine Faldo routing, and the breathtaking coastal scenery make it an unmissable golfing journey for every touring group.",
      overview:
        "The drive along the coastal mountains of the Hai Van Pass sets up a magical day. Sir Nick Faldo's design winds through dense tropical jungle, active rice paddies with grazing buffalo, and plays directly to the beach.",
      bullets: [
        "18 championship holes flanked by the East Sea and misty Bach Ma mountain peaks",
        "Unique routing featuring active rice paddies and natural granite rock outcrops",
        "Scenic coastal return drive via Hai Van Pass to Palm Garden Beach Resort",
      ],
      logistics: [
        { label: "Play", value: "Laguna Golf Lăng Cô (Sir Nick Faldo)" },
        { label: "Transfer Time", value: "~75 minutes via Hai Van coastal highway & tunnel" },
        { label: "Stay", value: "Palm Gardens Beach Resort & Spa" },
      ],
      images: [
        {
          url: "/images/courses/vietnam/laguna-lang-co/laguna-golf-lang-co-jungle-tropical-3.webp",
          title: "Laguna Lăng Cô Rice Paddy & Tropical Routing",
          category: "golf",
          caption: "Sir Nick Faldo's tropical jungle course hole navigating working rice paddies",
          alt: "Laguna Lang Co rice paddies and water hazard fairway routing",
          resolution: "1920 x 1280",
          aspectRatio: "3:2",
        },
        {
          url: "/images/courses/vietnam/laguna-lang-co/laguna-golf-lang-co-bach-ma-mountain-5.webp",
          title: "Laguna Lăng Cô Mountain Backdrop",
          category: "golf",
          caption: "Bach Ma National Park mountains looming over the championship fairways",
          alt: "Laguna Lang Co mountain backdrop and tropical parkland fairways",
          resolution: "2400 x 1350",
          aspectRatio: "16:9",
        },
      ],
    },
    {
      day: 6,
      title: "Mountain Elevation & Farewell Toast",
      subtitle: "Ba Na Hills Golf Club | Luke Donald Masterpiece",
      courseName: "Ba Na Hills Golf Club",
      architect: "Luke Donald / IMG",
      courseType: "Highland Mountain",
      yardage: "7,857 Yards",
      par: "Par 72",
      pacing: "Highland Championship Finale",
      transferTime: "50 mins door-to-door",
      transferNote: "Scenic 50-minute private VIP transfer climbing into the lush foothills of the Truong Son mountains west of Da Nang.",
      overview:
        "The grand finale ascends into the Truong Son Mountains. Luke Donald's design is Asia's most awarded mountain course—lush highland air, towering ravines, and dramatic elevation shifts followed by a celebratory farewell dinner.",
      bullets: [
        "18 holes on Vietnam's premier highland course with dramatic elevation changes",
        "Tour match play final round with tournament scorecards and caddie coordination",
        "Celebratory farewell dinner at Palm Gardens Resort overlooking Cua Dai Beach",
      ],
      logistics: [
        { label: "Play", value: "Ba Na Hills Golf Club (Luke Donald)" },
        { label: "Transfer Time", value: "~50 minutes door-to-door from Palm Gardens" },
        { label: "Celebration", value: "Farewell Champions Dinner at Palm Gardens Resort" },
      ],
      images: [
        {
          url: "/images/courses/vietnam/ba-na-hills/ba-na-hills-aerial-sunset.webp",
          title: "Ba Na Hills Mountain Elevation",
          category: "golf",
          caption: "Majestic mountain elevation at Ba Na Hills Golf Club",
          alt: "Ba Na Hills Golf Club sunset aerial mountain course Da Nang",
          resolution: "2400 x 1350",
          aspectRatio: "16:9",
        },
        {
          url: "/images/courses/vietnam/ba-na-hills/ba-na-hills-golf-club-da-nang-vietnam-1.webp",
          title: "Ba Na Hills Rainforest Fairway",
          category: "golf",
          caption: "Lush tropical rainforest fairway and green complex at Ba Na Hills",
          alt: "Ba Na Hills Luke Donald championship course Vietnam",
          resolution: "1920 x 1280",
          aspectRatio: "3:2",
        },
      ],
    },
    {
      day: 7,
      title: "Farewell to Hoi An",
      subtitle: "Morning Ocean Stroll & VIP Airport Transfer",
      pacing: "Relaxed Departure",
      transferTime: "35 mins to DAD Airport",
      transferNote: "Timed precisely to flight departures from Da Nang International Airport (DAD) with luggage coordination.",
      overview:
        "Savor a final morning coffee on your private balcony, listening to the gentle crash of ocean waves. A solitary beach walk along Cua Dai reflects an unforgettable week before your private chauffeur transfers you to Da Nang Airport.",
      bullets: [
        "Leisurely buffet breakfast overlooking the ocean at Palm Gardens Resort",
        "Morning beach stroll or final swim in the 45-meter tropical resort pool",
        "Private VIP executive transfer to Da Nang International Airport (DAD) (~35 mins)",
      ],
      logistics: [
        { label: "Stay", value: "Palm Gardens Beach Resort & Spa" },
        { label: "Transfer Time", value: "~35 minutes to Da Nang Airport (DAD)" },
        { label: "Inclusions", value: "Full Luggage Coordination & Flight Monitoring" },
      ],
      images: [
        {
          url: "/images/accommodations/vietnam/palm-gardens-hoi-an/vietnam-luxury-hotel-palm-gardens-hoi-an-beachfront-3.webp",
          title: "Final Morning on Cua Dai Beach",
          category: "resort",
          caption: "A final morning walk along the sands of Cua Dai Beach",
          alt: "Beachfront view at Palm Gardens Resort Hoi An",
          resolution: "1920 x 1280",
          aspectRatio: "3:2",
        },
      ],
    },
  ],
  accommodationProfile: {
    name: "Palm Garden Beach Resort & Spa",
    category: "5-Star Beachfront Luxury Resort & Spa",
    starRating: "★★★★★ (5-Star)",
    location: "Cua Dai Beach, Hoi An, Quang Nam, Vietnam",
    setting: "Direct Beachfront, 10 min to Hoi An Ancient Town",
    nearestGolf: "Montgomerie Links (15 min), Hoiana Shores (20 min), Ba Na Hills (50 min), Laguna Lăng Cô (75 min)",
    transferTimeFromAirport: "~35 minutes from Da Nang International Airport (DAD)",
    heroImage: "/images/accommodations/vietnam/palm-gardens-hoi-an/vietnam-luxury-hotel-palm-gardens-hoi-an-hero-1.webp",
    paragraphs: [
      "Palm Garden Beach Resort & Spa occupies a prime stretch of Cua Dai Beach — consistently rated among Vietnam's finest coastal strips. Set within 5 hectares of beautifully landscaped tropical gardens just ten minutes from the UNESCO World Heritage town of Hoi An, the resort combines accessible luxury with genuine Vietnamese warmth, creating the region's most characterful premium property.",
      "The resort's 186 rooms, pool villas, and beachfront bungalows give touring groups genuine flexibility — from oceanview suites for solo travellers to expansive private bungalows surrounded by frangipani. The three pool areas include a dedicated 45-meter free-form pool that provides the perfect quiet recovery environment after rounds of golf.",
      "For international groups seeking the full Hoi An experience alongside their golf, Palm Garden provides the ideal blend. It is close enough to Montgomerie Links, Hoiana Shores, and Ba Na Hills for efficient daily play, while its position on Cua Dai Beach and proximity to Hoi An's ancient town ensures afternoons and evenings are as memorable as the fairways.",
    ],
    keyFeatures: [
      "5 Hectares of landscaped tropical frangipani gardens fronting Cua Dai Beach",
      "45-Meter Free-Form Swimming Pool with poolside towel and cocktail service",
      "Direct private beachfront sun loungers along calm ocean waters",
      "Daily international & Vietnamese buffet breakfast overlooking the gardens",
      "Palm Spa offering deep-tissue sports massage designed specifically for golfers",
    ],
  },
  courseProfiles: [
    {
      name: "Montgomerie Links Vietnam",
      designer: "Colin Montgomerie",
      tagline: "Ryder Cup Legend's Links Masterwork • Casuarina Pines & Rolling Coastal Dunes",
      par: "Par 72",
      yardage: "7,090 Yards",
      established: "2010",
      transferTime: "~15 minutes door-to-door from Palm Gardens Resort",
      transferExpectation:
        "Conveniently located along the coastal boulevard just north of Hoi An. Quick 15-minute door-to-door transit in private air-conditioned VIP fleet.",
      heroImage: "/images/courses/vietnam/montgomerie-links/montgomerie-links-vietnam-da-nang-1-hero.webp",
      paragraphs: [
        "Created by eight-time European Tour Order of Merit winner and Ryder Cup legend Colin Montgomerie, Montgomerie Links Vietnam carries the unmistakable DNA of traditional European links golf, brilliantly transplanted to the warm sands of the Central Coast. Widely recognized as the pioneer layout that established Da Nang and Hoi An as an elite international golf destination, the course is routed through a natural landscape of wind-swept coastal dunes, indigenous casuarina pine forests, and sandy waste hazards just hundreds of metres from the East Sea.",
        "At 7,090 yards from the championship tees, Montgomerie's design philosophy prioritizes strategy, course management, and precision over sheer brute distance. Firm, fast-running fairways and expansive waste sand hazards demand that players carefully position their tee shots to open up receptive approach angles into complex, heavily contoured greens. Sculpted pot bunkers with deep sod-like revetments penalize offline approaches, mirroring the classic links courses of Scotland and Ireland while playing across manicured SeaIsle 2000 paspalum turf that ensures pristine year-round playing surfaces.",
        "Standout highlights include the signature par-5 12th hole, a visually arresting dogleg wrapped around towering pines and water hazards, and the dramatic par-5 18th that climbs gently toward the iconic, multi-tiered clubhouse with its panoramic terrace overlooking the closing holes.",
      ],
    },
    {
      name: "Vinpearl Golf Nam Hoi An",
      designer: "IMG Worldwide",
      tagline: "IMG Masterplanned Dunes Layout • Massive White-Sand Waste Areas & Coastal Pines",
      par: "Par 72",
      yardage: "7,125 Yards",
      established: "2018",
      transferTime: "~25 minutes door-to-door from Palm Gardens Resort",
      transferExpectation:
        "Located south of Hoi An across Cua Dai Bridge through coastal fishing hamlets. Scenic 25-minute drive in our private VIP vehicles.",
      heroImage: "/images/courses/vietnam/vinpearl-nam-hoi-an/vinpearl-golf-nam-hoi-an-dunes-fairway-2.webp",
      paragraphs: [
        "Vinpearl Golf Nam Hoi An occupies an expansive, visually striking coastal terrain near the UNESCO World Heritage town of Hoi An. Master-planned by IMG Worldwide, the 18-hole championship layout (Par 72, 7,125 yards) flows through sweeping white-sand dunes, large natural waste areas, and indigenous old-growth casuarina and melaleuca trees that give it a timeless character.",
        "Wide, generous fairways welcome golfers of all abilities, yet the strategic placement of bunkering and water hazards ensures that scoring well requires discipline. Prevailing ocean winds off the East Sea come into play on numerous holes, making distance control paramount. Hole 9 — a sweeping par-5 across a natural dune valley — is among the most photographically stunning in Vietnam.",
        "The clubhouse features panoramic vistas over the final greens, luxurious locker rooms, and full PGA-grade practice facilities, making it an essential component of Central Vietnam's premier golf rota.",
      ],
    },
    {
      name: "Hoiana Shores Golf Club (Optional Upgrade)",
      designer: "Robert Trent Jones II",
      tagline: "World's Best New Golf Course • Golf Digest World Top 100 • Optional Day 3 Course Swap (+$460 AUD)",
      par: "Par 71",
      yardage: "7,004 Yards",
      established: "2020",
      transferTime: "~20 minutes door-to-door from Palm Gardens Resort",
      transferExpectation:
        "Located directly south of Hoi An across Cua Dai Bridge along the coastal highway. Smooth, scenic 20-minute private VIP transfer in our dedicated executive fleet.",
      heroImage: "/images/courses/vietnam/hoiana-shores/hoiana-shores-beachfront-golf.webp",
      paragraphs: [
        "There is no course on your itinerary — and very few in all of Southeast Asia — that can match Hoiana Shores for pure visual drama. Robert Trent Jones II's links masterpiece occupies a finger of duneland between the Eastern Sea and the Thu Bon River estuary, with the Cham Islands visible on the horizon from multiple vantage points. The World Golf Awards named it the 'World's Best New Golf Course' upon opening, and it has consistently earned a place on Golf Digest's prestigious 'World's 100 Greatest Golf Courses' list.",
        "True links golf in the classical sense: the sea wind is not incidental but structural. Club selection is rarely straightforward because the breeze shifts in intensity and direction throughout the round. The natural duneland topography provides rollicking fairways with significant contour — the bump-and-run is not only valid but often the optimal approach, particularly on the exposed oceanside holes of the front nine. Several greens are elevated above their surroundings, offering panoramic views across the South China Sea.",
        "Architect Robert Trent Jones II has created an exceptional par-3 sequence — including the dramatic 6th and 16th, playing into the prevailing ocean wind with greens elevated above the dunegrass. The finishing holes, returning toward the palatial 19th hole clubhouse along the river estuary, complete a round that demands strategic shotmaking from the first tee to the final putt.",
      ],
    },
    {
      name: "Laguna Golf Lăng Cô",
      designer: "Sir Nick Faldo",
      tagline: "Sir Nick Faldo's Coastal Masterwork • Where Ocean Waves Meet Rice Paddies and Mountain Crags",
      par: "Par 71",
      yardage: "7,100 Yards",
      established: "2014",
      transferTime: "~75 minutes via Hai Van Coastal Highway & Tunnel",
      transferExpectation:
        "Laguna Lăng Cô is located north of Da Nang in Lăng Cô Bay, approximately a 75-minute private transfer from Hoi An via the coastal highway and Hai Van Tunnel. While representing the longest transit of the itinerary, the sheer visual grandeur of the course, its pristine Faldo routing, and the breathtaking coastal scenery make it an unmissable golfing journey for every touring group.",
      heroImage: "/images/courses/vietnam/laguna-lang-co/laguna-golf-lang-co-jungle-tropical-3.webp",
      paragraphs: [
        "Six-time major champion Sir Nick Faldo's Laguna Lăng Cô Golf Club is one of the most visually dramatic courses in all of Southeast Asia — and among the most technically impressive. Situated at the heart of Vietnam's first fully integrated luxury resort on the shores of Lăng Cô Bay, the course occupies a stretch of land of exceptional natural beauty: the Hai Van Pass rises sharply to the north, Lăng Cô's turquoise lagoon stretches to the south, and the course threads between rice paddies, jungle waterways, and undulating terrain to create a layout of genuine variety and strategic interest.",
        "At just under 7,100 yards from the back tees, Faldo has successfully designed a course that challenges the scratch player while remaining thoroughly accessible to the higher handicapper. The signature hole is the short par-4 9th, widely considered one of the best par 4s in Vietnam. Running directly parallel to the pristine Lăng Cô beach, it offers unobstructed panoramic views of the East Sea. Coastal winds can significantly impact club selection when trying to find both tight fairway landing zones and when approaching the green.",
        "The back nine introduces working rice paddies tended by local water buffalo, creating a uniquely tranquil Vietnamese agrarian atmosphere before ascending into granite rock outcroppings and beachside dunes. The clubhouse provides panoramic veranda views over the 18th green and the mountains beyond.",
      ],
    },
    {
      name: "Ba Na Hills Golf Club",
      designer: "Luke Donald / IMG Worldwide",
      tagline: "Asia's Most Awarded Mountain Course • Luke Donald Masterpiece • Rainforest Foothills",
      par: "Par 72",
      yardage: "7,858 Yards",
      established: "2016",
      transferTime: "~50 minutes door-to-door from Palm Gardens Resort",
      transferExpectation:
        "Scenic 50-minute private VIP transfer climbing into the lush foothills of the Truong Son mountains west of Da Nang. Temperatures drop 4–6°C as you enter the highlands.",
      heroImage: "/images/courses/vietnam/ba-na-hills/ba-na-hills-aerial-sunset.webp",
      paragraphs: [
        "Ba Na Hills Golf Club has established itself as one of the most visually spectacular golf experiences in Southeast Asia. Set against the imposing backdrop of the Ba Na Hills mountain range — which rises steeply from the coastal plains just 25 kilometres west of Da Nang — the course occupies a landscape of exceptional natural drama, with deep ravines, towering hardwood canopy, and mountain streams that define the character of numerous holes.",
        "At 7,858 yards from the championship tees, the layout is one of Vietnam's longest. The clever use of elevation change, both in terms of topography and psychological effect, is Luke Donald's masterstroke here. The front nine plays through a more open, parkland-influenced terrain with long, sweeping fairways before the back nine ascends into the hills proper, delivering a succession of blind shots, doglegs, and dramatic par-3s with panoramic views across the Ba Na valley floor.",
        "Particular highlights include the par-3 12th hole — a magnificent downhill shot to an island-feel green protected by a natural stream — and the demanding par-5 5th, which requires three precise shots to reach a narrowly guarded green. The comprehensive clubhouse and driving range are managed to IMG's international standard, offering tour-grade conditioning.",
      ],
    },
  ],
  optionalExcursions: [
    {
      title: "Thu Bon River & Ancient Town Sunset Cruise",
      tagline: "Exclusive Golden Hour Cruise Along the Thu Bon River",
      duration: "90 Minutes (Sunset 16:45 – 18:15)",
      type: "Private Sunset River Cruise",
      image: "/images/tours/vietnam/brochure/thu-bon-river-sunset-cruise.webp",
      overview:
        "Depart on a private traditional wooden cruiser along the peaceful Thu Bon River as golden hour settles across Hoi An. Drift past fishing hamlets with traditional dip-nets, observe tranquil rural riverbank scenes, and enjoy cold beers, chilled wine, and local canapés before stepping ashore directly by the lantern-lit Ancient Town.",
      features: [
        "Private wooden riverboat with captain and crew",
        "Scenic golden hour photography along the Thu Bon River",
        "Canapés, chilled wine, and local craft refreshments",
        "Arrival into lantern-lit UNESCO Ancient Town at dusk",
      ],
      pricingNote: "Optional Add-on • Ideal for relaxing evening transfer into town",
    },
    {
      title: "Ba Na Hills & The Iconic Golden Bridge",
      tagline: "Southeast Asia's Most Spectacular Mountain Vista",
      duration: "Half-Day (approx. 4.5 – 5 Hours)",
      type: "Private Chauffeured Mountain Excursion",
      image: "/images/destinations/vietnam/culture/golden-bridge-ba-na-hills-vietnam.webp",
      overview:
        "Ascend through the mountain mist aboard Southeast Asia's longest modern cable car to King Peak (1,487m elevation). Stroll the world-renowned Golden Bridge, held aloft by giant moss-covered stone hands emerging from the cliffside. Explore French-colonial alpine architecture, Linh Ung Pagoda, cliffside floral gardens at Jardin D'Amour, and sweeping panoramic views across Da Nang and the East Sea.",
      features: [
        "Private air-conditioned executive vehicle & dedicated driver",
        "Round-trip modern cable car express tickets",
        "Full access to the iconic Golden Bridge & Jardin D'Amour",
        "French Village summit viewpoints and Linh Ung Pagoda",
      ],
      pricingNote: "Optional Add-on • Available on any leisure morning or afternoon",
    },
    {
      title: "Hoi An Countryside & Coconut Forest by Vintage Jeep",
      tagline: "Open-Air Jeep Adventure & Bamboo Basket Boats",
      duration: "4 Hours (Morning or Afternoon)",
      type: "Private Open-Air Jeep Safari",
      image: "/images/tours/vietnam/hoi-an-jeep.webp",
      overview:
        "Set off in an open-air vintage military Jeep with your private English-speaking guide to Cam Kim Island. Discover rural agrarian life along lush dyke paths, visit traditional artisan woodcarving and sedge-mat weaving workshops, and embark on an exhilarating bamboo basket boat ride through the water coconut groves of Bay Mau.",
      features: [
        "Private restored open-air vintage Jeep with private driver",
        "English-speaking cultural guide",
        "Bamboo basket boat excursion through Bay Mau coconut forest",
        "Traditional artisan handicraft workshop visits",
      ],
      pricingNote: "Included in itinerary on Day 4 • Available as an extra round for partner groups",
    },
    {
      title: "Tra Que Herb Village & Red Bridge Cooking Masterclass",
      tagline: "Market Tour, River Cruise & Hands-On Culinary Feast",
      duration: "Half-Day (08:15 – 13:00)",
      type: "Culinary Masterclass & Market Tour",
      image: "/images/destinations/vietnam/culinary/take-a-cooking-class-in-tra-que-vegetable-village.webp",
      overview:
        "Commence with a chef-led morning walk through Hoi An's vibrant produce market to touch, smell, and select fresh indigenous herbs and spices. Board a river cruiser along the Thu Bon River to the open-air Red Bridge cooking pavilion. Enjoy a hands-on culinary masterclass creating authentic Vietnamese classics (crisp Banh Xeo pancakes, fresh spring rolls, and clay pot seafood) followed by a celebratory riverside feast.",
      features: [
        "Chef-led morning produce market exploration",
        "Scenic Thu Bon River boat cruise to cooking school",
        "Hands-on cooking class with individual prep stations",
        "Multi-course lunch including your own culinary creations",
      ],
      pricingNote: "Optional Add-on • Highly recommended for all food and wine enthusiasts",
    },
    {
      title: "Marble Mountains & Sacred Buddhist Caves",
      tagline: "Ancient Limestone Karsts, Hidden Grottoes & Coastal Panorama",
      duration: "Half-Day (approx. 3.5 – 4 Hours)",
      type: "Private Guided Heritage & Geology Excursion",
      image: "/images/destinations/vietnam/culture/marble-mountain-sunrise-view.webp",
      overview:
        "Rising dramatically from the coastal plains between Hoi An and Da Nang, the five sacred limestone and marble karsts of Ngu Hanh Son represent the five universal elements. Ascend Thuy Son (Water Mountain) via glass elevator or carved mountain stone pathways into the cavernous Huyen Khong cave, where ethereal shafts of sunlight illuminate centuries-old Buddhist shrines and active altars, culminating in panoramic vistas across the East Sea coastline.",
      features: [
        "Private air-conditioned executive vehicle & dedicated English-speaking cultural guide",
        "Modern glass cliff-elevator access & shaded stone staircase routes",
        "Huyen Khong & Am Phu subterranean cave grottoes with natural skylights",
        "Panoramic coastal viewpoints over Da Nang Bay and Cham Islands",
        "Centuries-old stone carving craft village visit at mountain foot",
      ],
      pricingNote: "Optional Add-on • Just 15 minutes north of Palm Gardens Resort",
    },
    {
      title: "My Son Sanctuary Private Sunrise & Ancient Champa Heritage",
      tagline: "UNESCO World Heritage Hindu Temples in a Lush Jungle Basin",
      duration: "Half-Day (approx. 4.5 – 5 Hours • Early Morning Departure)",
      type: "Private Chauffeured UNESCO Heritage Journey",
      image: "/images/destinations/vietnam/culture/my-son-sanctuary-sunrise-view.webp",
      overview:
        "Nestled in a verdant valley basin encircled by misty jungle ridges and Hon Quap (Cat's Tooth Mountain), My Son served as the religious and political capital of the Champa Kingdom from the 4th to the 13th century. Depart at dawn in your private executive fleet to explore the red-brick sanctuary towers in cool tranquility before daytime crowds arrive. Discover masterfully fired-brick Hindu shrines dedicated to Shiva and enjoy a traditional live Cham dance performance.",
      features: [
        "Dawn departure in private VIP vehicle to arrive before daytime crowds & heat",
        "Expert historian guide specializing in Champa kingdom architecture & epigraphy",
        "Electric buggy transit through the valley & entry to all UNESCO temple clusters",
        "Live traditional Cham musical and dance performance at the site pavilion",
        "Return to resort in time for lunch or afternoon relaxation by the pool",
      ],
      pricingNote: "Optional Add-on • Highly recommended for history, architecture, and photography lovers",
    },
  ],
  recommendedDining: [
    {
      name: "Morning Glory Original",
      cuisine: "Legendary Authentic Central Vietnamese & Elevated Street Food",
      vibe: "Bustling Open-Kitchen Heritage Landmark",
      location: "Hoi An Old Town (10 mins from Palm Gardens)",
      image: "/images/restaurants-bars/vietnam/morning-glory-vietnamese-restaurant-traditional-local-food.webp",
      overview:
        "Founded by celebrated culinary icon and cookbook author Ms Trinh Diem Vy, Morning Glory is the undisputed benchmark of Hoi An gastronomy. Housed in a two-story heritage French-colonial shophouse with a live central cooking theatre, Ms Vy elevates traditional street-food staples—from Cao Lau pork noodles to delicate White Rose dumplings and crispy stuffed squid—into an extraordinary feast.",
      highlights: [
        "Created by Hoi An culinary pioneer Ms Trinh Diem Vy",
        "Live central open-flame cooking theatre and street food stations",
        "Essential tasting experience for Hoi An's UNESCO heritage staple dishes",
      ],
    },
    {
      name: "Mango Rooms & Mango Mango",
      cuisine: "Celebrity Chef Vietnamese Fusion & Signature Cocktails",
      vibe: "Vibrant, Energetic Heritage Riverfront",
      location: "Hoi An Riverside (10 mins from Palm Gardens)",
      image: "/images/restaurants-bars/vietnam/mango-room-celebrity-chef-duc-trans-restaurant.webp",
      overview:
        "Helmed by celebrated globetrotting chef Duc Tran, Mango Rooms and its sister venue Mango Mango offer a vibrant explosion of color, music, and inventive flavor. The dishes marry local Vietnamese seafood and spices with Latin and Mediterranean influences overlooking the lantern-lit river.",
      highlights: [
        "Created by legendary Hoi An culinary icon Chef Duc Tran",
        "Unrivalled views of the lantern-illuminated Thu Bon River",
        "High-energy atmosphere perfect for tour group celebrations",
      ],
    },
    {
      name: "Home Hoi An",
      cuisine: "Peerless Royal Vietnamese & Central Coast Heritage Recipes",
      vibe: "Restored French-Indochine Heritage Villa & Garden",
      location: "Hoi An Heritage Quarter (10 mins from Palm Gardens)",
      image: "/images/restaurants-bars/vietnam/home-hoi-an-peerless-vietnamese-cuisine.webp",
      overview:
        "Set within a beautifully restored French-colonial heritage residence, Home Hoi An captures the noble elegance of Vietnam's imperial culinary traditions. With vintage tiled verandas, an atmospheric lantern courtyard, and meticulous preparation of royal Hue and Hoi An heritage dishes, it provides an unforgettable setting for an intimate, upscale dinner.",
      highlights: [
        "Restored French-colonial heritage villa with open courtyard",
        "Imperial Hue recipes and Central Vietnamese banquet dining",
        "Exceptional cellar of French and Australian fine wines",
      ],
    },
    {
      name: "The Surf & Turf Beach Club",
      cuisine: "Prime Australian Steaks & Ocean-Fresh Seafood",
      vibe: "Upscale Beachfront Luxury & Sunset Cocktails",
      location: "An Bang Beach (5 mins from Palm Gardens)",
      image: "/images/restaurants-bars/vietnam/surf-and-turf-club-amazing-steak-and-seafood.webp",
      overview:
        "Located directly on the white sands of An Bang Beach just a 5-minute drive from Palm Gardens Resort. This is the premier oceanfront destination for prime Australian Black Angus steaks, charcoal-grilled rock lobster, and ocean-fresh seafood paired with sunset craft cocktails.",
      highlights: [
        "Charcoal-grilled prime steaks & fresh local seafood",
        "Direct oceanfront dining with panoramic sunset views",
        "Curated international wine list & craft cocktails",
      ],
    },
    {
      name: "Tok Restaurant",
      cuisine: "Modern Vietnamese-Australian Fusion & Farm-to-Table",
      vibe: "Serene Ricefield Architectural Pavilion",
      location: "Cam Thanh (8 mins from Palm Gardens)",
      image: "/images/restaurants-bars/vietnam/tok-fusion-dining.webp",
      overview:
        "Set against a peaceful backdrop of lush, emerald-green rice paddies and coconut palms, Tok elevates dining into a scenic event. The menu blends modern Australian culinary techniques with indigenous Vietnamese ingredients, complemented by an outstanding cocktail program.",
      highlights: [
        "Tranquil rice paddy views in an open-air architectural pavilion",
        "Inventive farm-to-table seasonal tasting menus",
        "Signature craft cocktails and craft beers",
      ],
    },
    {
      name: "Lim Dining Room",
      cuisine: "Authentic Contemporary Italian & Fine European Wine",
      vibe: "Centuries-Old UNESCO Heritage Shophouse",
      location: "Hoi An Old Town (10 mins from Palm Gardens)",
      image: "/images/restaurants-bars/vietnam/lim-dining-room-authentic-italian-food-heritage-setting.webp",
      overview:
        "When your travel party craves authentic European culinary excellence in a heritage setting, Lim delivers. Nestled within an authentic wooden merchant shophouse in Hoi An's UNESCO quarter, Lim serves hand-rolled pastas, artisanal charcuterie, and dry-aged cuts with a stellar Italian wine cellar.",
      highlights: [
        "Historic multi-story merchant shophouse setting",
        "Handmade artisanal pastas & Italian regional specialties",
        "Extensive cellar of fine Italian and French vintages",
      ],
    },
  ],
};

// Backward-compatible alias for existing references
export const HOI_AN_BEACHFRONT_BLISS_TRADE = HOI_AN_CHAMPIONSHIP_WEEK_TRADE;

