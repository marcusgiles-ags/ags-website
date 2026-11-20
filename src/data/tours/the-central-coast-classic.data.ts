import type { TourData } from "@/types/tour";

export const theCentralCoastClassicData: TourData = {
  slug: "the-central-coast-classic",
  titlePrefix: "The Central Coast",
  titleHighlight: "Golf & Wellness Classic",
  subtitle:
    "7 days of championship golf across Robert Trent Jones Jr., Luke Donald, Sir Nick Faldo, and Jack Nicklaus layouts. Anchored in private pool villas at Namia River Retreat with inclusive daily 90-minute spa treatments, riverfront Tai Chi, and holistic physical recovery.",
  country: "Vietnam",
  flag: "🇻🇳",
  heroBadge: "🇻🇳 Vietnam Flagship Circuit • Da Nang & Hoi An",
  heroImage:
    "/images/courses/vietnam/hoiana-shores/hoiana-shores-beachfront-golf.webp",
  quickStats: [
    { label: "Duration", value: "7 Days / 6 Nights", icon: "🗓️" },
    { label: "Championship Golf", value: "4 Rounds (72 Holes)", icon: "⛳" },
    { label: "Daily Wellness", value: "Inclusive 90-Min Spa", icon: "🌿" },
    { label: "Luxury Sanctuary", value: "Namia River Retreat", icon: "💎" },
    { label: "Guide Price", value: "From $2,590 USD", sub: "(~$3,990 AUD)", icon: "✨" },
  ],
  curatorBrief: {
    badge: "Curator's Overview",
    title: "Championship Fairways Meet Restorative Riverfront Wellness",
    paragraphs: [
      "Central Vietnam's coastline represents Asia's most visually thrilling 35-kilometer golf corridor. Here, dunes-land Scottish links DNA merges with towering mist-cloaked mountain ranges, emerald river deltas, and UNESCO World Heritage charm.",
      "The Central Coast Golf & Wellness Classic redefines luxury golf travel by pairing world-class course architecture with deep physical restoration. Based at Namia River Retreat on a serene islet along the Thu Bon River in Hoi An, your party stays in private pool villas while rotating through Robert Trent Jones Jr., Luke Donald, Sir Nick Faldo, and Jack Nicklaus masterpieces. With an inclusive 90-minute bespoke spa treatment following every round, sunrise Tai Chi mobility on the river deck, and private VIP fleet transit, this represents the definitive golf and wellness immersion in Southeast Asia.",
    ],
    pacingLabel: "Tour Pacing",
    pacingDesc: "Golf & Wellness Harmony (4 Morning Rounds, Daily 90-Min Spa Recovery, Zero Repacking)",
    quote: "Central Vietnam's links turf, mountain valleys, and Namia's holistic spa recovery create Southeast Asia's ultimate golf and wellness escape.",
    author: "AGS Senior Tour Director",
  },
  chapters: [
    {
      day: 1,
      id: "day-1",
      title: "Arrival in Da Nang & River Sanctuary Acclimatization",
      subtitle: "Private Tarmac Meet & Namia River Retreat",
      architect: "AGS Host Welcoming",
      courseName: "Namia River Retreat",
      courseHref: "/accommodations/vietnam/namia-river-retreat-hoi-an/",
      pacing: "Effortless Arrival & Jet-Lag Reset",
      transferTime: "35 mins from DAD Airport",
      whyItWorks:
        "Bypass standard hotel check-in lines. Your private AGS chauffeur meets your party airside at Da Nang International Airport, whisking you straight to the tranquil Thu Bon River islet where Namia River Retreat awaits with welcome herbal infusions, private pool villa check-in, and an introductory 90-minute jet-lag recovery spa treatment.",
      bullets: [
        "Private VIP arrival transfer from Da Nang International Airport (DAD) directly to Namia River Retreat",
        "Exclusive check-in to your private pool villa featuring secluded plunge pool, sun terrace, and lush river garden surrounds",
        "Introductory 90-minute restorative herbal spa journey to decompress your spine and reset your body after long-haul transit",
        "Evening welcome dinner & tournament briefing along the tranquil Thu Bon riverfront dining pavilion",
      ],
      logistics: [
        {
          label: "Stay",
          value:
            "<a href='/accommodations/vietnam/namia-river-retreat-hoi-an/' style='color: #D4AF37; text-decoration: underline; text-underline-offset: 4px;'>Namia River Retreat</a>",
        },
        { label: "Transit", value: "Private AGS VIP High-Roof Fleet" },
        { label: "Dining", value: "Curated Riverside Welcome Dinner" },
      ],
      images: [
        {
          url: "/images/accommodations/vietnam/namia-river-retreat-hoi-an/vietnam-luxury-hotel-namia-river-retreat-hoi-an-hero.webp",
          caption: "Namia River Retreat — Secluded Islet Wellness Sanctuary on the Thu Bon River",
          alt: "Namia River Retreat luxury boutique resort Thu Bon River Hoi An",
        },
        {
          url: "/images/accommodations/vietnam/namia-river-retreat-hoi-an/namia-river-retreat-room-pool-view.webp",
          caption: "Private Pool Villa — Direct Bedroom Access to Your Secluded Plunge Pool",
          alt: "Private pool villa bedroom view at Namia River Retreat Hoi An",
        },
        {
          url: "/images/accommodations/vietnam/namia-river-retreat-hoi-an/namia-river-retreat-spa-interior.webp",
          caption: "The Sanctuary Spa — Calming Treatment Suites for Post-Transit Acclimatization",
          alt: "Namia River Retreat spa treatment suite interior Hoi An",
        },
        {
          url: "/images/accommodations/vietnam/namia-river-retreat-hoi-an/vietnam-luxury-hotel-namia-river-retreat-hoi-an-pool-villa.webp",
          caption: "Sunken Outdoor Sun Deck Surrounded by Tropical River Greens",
          alt: "Private plunge pool and daybeds at Namia River Retreat Hoi An",
        },
        {
          url: "/images/accommodations/vietnam/namia-river-retreat-hoi-an/vietnam-luxury-hotel-namia-river-retreat-hoi-an-dining-area.webp",
          caption: "Riverfront Dining Pavilion — Farm-to-Table Welcome Feast",
          alt: "Riverfront dining pavilion at Namia River Retreat Hoi An",
        },
      ],
      courseSpecs: {
        yardage: "N/A",
        par: "N/A",
        courseType: "River Wellness Sanctuary",
      },
    },
    {
      day: 2,
      id: "day-2",
      title: "Coastal Links Challenge & Hammam Therapy",
      subtitle: "Hoiana Shores Golf Club",
      architect: "Robert Trent Jones Jr.",
      courseName: "Hoiana Shores Golf Club",
      courseHref: "/courses/vietnam/hoiana-shores/",
      pacing: "Morning Championship Round & Afternoon Spa",
      transferTime: "20 mins door-to-door",
      whyItWorks:
        "Ranked among the World's Top 100, Hoiana Shores delivers true Scottish links soul under tropical skies. The ocean-side closing stretch from Hole 15 to 18 offers windswept drama, followed by return to Namia's thermal steam hammam to flush walking fatigue from your legs.",
      bullets: [
        "18 holes with dedicated personal caddies & motorized shared carts across pristine Zeon Zoysia fairways",
        "Windswept coastal shot-making testing every club in your bag along the East Sea shoreline",
        "Post-round return to Namia for your included 90-minute herbal steam hammam and tension-release leg massage",
      ],
      logistics: [
        {
          label: "Stay",
          value:
            "<a href='/accommodations/vietnam/namia-river-retreat-hoi-an/' style='color: #D4AF37; text-decoration: underline; text-underline-offset: 4px;'>Namia River Retreat</a>",
        },
        {
          label: "Play",
          value:
            "<a href='/courses/vietnam/hoiana-shores/' style='color: #D4AF37; text-decoration: underline; text-underline-offset: 4px;'>Hoiana Shores Golf Club</a>",
        },
        { label: "Recovery", value: "90-Min Namia Hammam & Herbal Steam Circuit" },
      ],
      images: [
        {
          url: "/images/courses/vietnam/hoiana-shores/hoiana-heart-bunker.webp",
          caption: "Hoiana Shores — The Iconic Heart Bunker and Dunes Fairway",
          alt: "Hoiana Shores Golf Club heart bunker coastal links Vietnam",
        },
        {
          url: "/images/courses/vietnam/hoiana-shores/hoiana-shores-beachfront-golf.webp",
          caption: "Hole 16 Ocean Links — Windswept Coastal Precision Along the East Sea",
          alt: "Hoiana Shores signature ocean hole 16 along East Sea",
        },
        {
          url: "/images/courses/vietnam/hoiana-shores/hoiana-shores-golf-club-dunes-hoi-an-4.webp",
          caption: "Undulating Zoysia Dunes & Strategic Natural Bunkering",
          alt: "Hoiana Shores undulating fairway contours and dunes",
        },
        {
          url: "/images/courses/vietnam/hoiana-shores/club-house-scaled.webp",
          caption: "Palatial 19th Hole Clubhouse — Post-Round Sunset Terrace",
          alt: "Hoiana Shores luxury golf clubhouse terrace and dining",
        },
        {
          url: "/images/accommodations/vietnam/namia-river-retreat-hoi-an/namia-river-retreat-spa-hammam.webp",
          caption: "Post-Round Hammam Recovery — Herbal Steam Therapy to Flush Walking Fatigue",
          alt: "Namia River Retreat herbal steam hammam room Hoi An",
        },
      ],
      courseSpecs: {
        yardage: "7,004",
        par: "71",
        courseType: "Pure Coastal Links",
      },
    },
    {
      day: 3,
      id: "day-3",
      title: "Mountain Mastery & Riverfront Reflexology",
      subtitle: "Ba Na Hills Golf Club",
      architect: "Luke Donald / IMG",
      courseName: "Ba Na Hills Golf Club",
      courseHref: "/courses/vietnam/ba-na-hills/",
      pacing: "Mountain Expedition & Calves/Back Reset",
      transferTime: "50 mins door-to-door",
      whyItWorks:
        "Ascend into the Truong Son foothills where temperatures drop 4-6°C. Luke Donald's design is Asia's Best Golf Course winner, carved through dense rainforest with jaw-dropping elevation shifts. Return to Namia's open-air river reflexology deck to reset your feet and lower back.",
      bullets: [
        "18 holes on Vietnam's premier mountain layout with comprehensive floodlighting capabilities",
        "Severe elevation changes demanding strategic club selection and accurate iron play",
        "Post-round outdoor reflexology on Namia's river deck followed by craft beer tasting at 7 Bridges Brewery",
      ],
      logistics: [
        {
          label: "Stay",
          value:
            "<a href='/accommodations/vietnam/namia-river-retreat-hoi-an/' style='color: #D4AF37; text-decoration: underline; text-underline-offset: 4px;'>Namia River Retreat</a>",
        },
        {
          label: "Play",
          value:
            "<a href='/courses/vietnam/ba-na-hills/' style='color: #D4AF37; text-decoration: underline; text-underline-offset: 4px;'>Ba Na Hills Golf Club</a>",
        },
        { label: "Recovery", value: "90-Min Open-Air Riverfront Reflexology & Plunge" },
      ],
      images: [
        {
          url: "/images/courses/vietnam/ba-na-hills/ba-na-hills-aerial-sunset.webp",
          caption: "Ba Na Hills Golf Club — Twilight Highland Drama in the Foothills",
          alt: "Ba Na Hills Golf Club sunset aerial mountain course Da Nang",
        },
        {
          url: "/images/courses/vietnam/ba-na-hills/ba-na-hills-golf-club-da-nang-vietnam-1.webp",
          caption: "Verdant Jungle Slopes & Luke Donald's Signature Bunkering",
          alt: "Ba Na Hills pristine green complex surrounded by tropical jungle",
        },
        {
          url: "/images/courses/vietnam/ba-na-hills/ba-na-hills-hole-12jpeg.webp",
          caption: "Hole 12 Island-Style Highland Green & Water Hazard",
          alt: "Ba Na Hills Golf Club challenging water carry hole 12",
        },
        {
          url: "/images/courses/vietnam/ba-na-hills/ba-na-hills-golf-club-luke-donald-design-3.webp",
          caption: "Dramatic Elevation Drops Across the Central Valley",
          alt: "Valley panoramic view at Ba Na Hills Golf Club Luke Donald design",
        },
        {
          url: "/images/accommodations/vietnam/namia-river-retreat-hoi-an/namia-river-retreat-spa-outdoor.webp",
          caption: "Outdoor Riverfront Reflexology — Acupressure Foot Therapy After 18 Highland Holes",
          alt: "Namia River Retreat outdoor spa relaxation and reflexology deck",
        },
      ],
      courseSpecs: {
        yardage: "7,857",
        par: "72",
        courseType: "Highland Mountain",
      },
    },
    {
      day: 4,
      id: "day-4",
      title: "Tropical Parklands & Deep-Tissue Sports Therapy",
      subtitle: "Laguna Golf Lăng Cô",
      architect: "Sir Nick Faldo",
      courseName: "Laguna Golf Lăng Cô",
      courseHref: "/courses/vietnam/laguna-lang-co/",
      pacing: "Scenic Coastal Drive & Shoulder/Rotator Reset",
      transferTime: "70 mins via Hai Van Pass",
      whyItWorks:
        "The scenic drive along Hai Van coastal pass is half the experience. Sir Nick Faldo created a masterclass weaving through working rice paddies, coconut groves, and raw granite cliffs. Conclude the day with targeted deep-tissue sports therapy at Namia focused on rotator cuff and thoracic mobility.",
      bullets: [
        "18 championship holes flanked by the East Sea and Bach Ma mountain ranges",
        "Unique golf architecture navigating active rice paddies with resident water buffaloes",
        "Seafood lunch on Lang Co lagoon before returning to Namia for sunset cocktails and 90-min sports massage",
      ],
      logistics: [
        {
          label: "Stay",
          value:
            "<a href='/accommodations/vietnam/namia-river-retreat-hoi-an/' style='color: #D4AF37; text-decoration: underline; text-underline-offset: 4px;'>Namia River Retreat</a>",
        },
        {
          label: "Play",
          value:
            "<a href='/courses/vietnam/laguna-lang-co/' style='color: #D4AF37; text-decoration: underline; text-underline-offset: 4px;'>Laguna Golf Lăng Cô</a>",
        },
        { label: "Recovery", value: "90-Min Golf Swing Musculoskeletal Therapy" },
      ],
      images: [
        {
          url: "/images/courses/vietnam/laguna-lang-co/laguna-golf-lang-co-jungle-tropical-3.webp",
          caption: "Laguna Golf Lăng Cô — Tropical Jungle & Rice Paddy Routing",
          alt: "Laguna Lang Co tropical jungle course hole Vietnam",
        },
        {
          url: "/images/courses/vietnam/laguna-lang-co/laguna-golf-lang-co-nick-faldo-vietnam-1.webp",
          caption: "Bach Ma Mountain Peaks Framing the Pristine Fairways",
          alt: "Laguna Lang Co mountain backdrop and tropical parkland fairways",
        },
        {
          url: "/images/courses/vietnam/laguna-lang-co/laguna-golf-lang-co-championship-layout-4.webp",
          caption: "Championship Layout — Faldo's Thinking-Man's Strategy",
          alt: "Laguna Lang Co championship layout Faldo signature hole",
        },
        {
          url: "/images/courses/vietnam/laguna-lang-co/laguna-golf-lang-co-bach-ma-mountain-5.webp",
          caption: "Granite Rock Formations & Natural Wetlands Challenge",
          alt: "Laguna Lang Co granite boulders and natural hazard features",
        },
        {
          url: "/images/accommodations/vietnam/namia-river-retreat-hoi-an/namia-river-retreat-spa-massage.webp",
          caption: "Targeted Sports Massage — Rotator Cuff & Spine Decompression for Golfers",
          alt: "Namia River Retreat 90-minute therapeutic sports massage Hoi An",
        },
      ],
      courseSpecs: {
        yardage: "7,101",
        par: "71",
        courseType: "Parkland / Oceanfront Dunes",
      },
    },
    {
      day: 5,
      id: "day-5",
      title: "Riverside Wellness Immersion & Flavors of Faifo",
      subtitle: "Dawn Tai Chi, Full Spa Circuit & Hoi An Riverboat",
      architect: "Namia Wellness Master & Local Guardian",
      courseName: "Namia & Hoi An Ancient Town",
      courseHref: "/accommodations/vietnam/namia-river-retreat-hoi-an/",
      pacing: "Full Mind-Body Restoration & Cultural Safari",
      transferTime: "10 mins to Ancient Town",
      whyItWorks:
        "Every elite golf tour demands a tactical recovery day to recharge the swing and savor the destination. Begin with sunrise Tai Chi along the riverfront, followed by a full 90-minute restorative herbal therapy and cold plunge circuit. In the afternoon, board a private riverboat directly from Namia into Hoi An Ancient Town for bespoke tailoring and dinner at Mango Rooms by Chef Duc.",
      bullets: [
        "Sunrise Tai Chi and guided breathwork on Namia's wooden riverfront deck to restore joint mobility",
        "Inclusive 90-minute traditional herbal steam, hot-stone treatment, and pool relaxation",
        "Afternoon private riverboat cruise into Hoi An for bespoke tailoring in heritage shophouses",
        "Curated culinary walk through hidden alleyways sampling Cao Lau, White Rose dumplings, and local craft brews",
      ],
      logistics: [
        {
          label: "Stay",
          value:
            "<a href='/accommodations/vietnam/namia-river-retreat-hoi-an/' style='color: #D4AF37; text-decoration: underline; text-underline-offset: 4px;'>Namia River Retreat</a>",
        },
        { label: "Wellness", value: "Dawn Tai Chi + 90-Min Signature Herbal Therapy" },
        { label: "Activity", value: "Private Riverboat Cruise & Bespoke Hoi An Culinary Walk" },
        { label: "Dinner", value: "Mango Rooms by Chef Duc (Recommended Option)" },
      ],
      images: [
        {
          url: "/images/accommodations/vietnam/namia-river-retreat-hoi-an/namia-river-retreat-tai-chi.webp",
          caption: "Dawn Tai Chi & Mindfulness — Riverfront Movement Practice Before the Sun Heats the Delta",
          alt: "Morning Tai Chi session along the Thu Bon river at Namia River Retreat Hoi An",
        },
        {
          url: "/images/accommodations/vietnam/namia-river-retreat-hoi-an/namia-river-retreat-spa-massage.webp",
          caption: "90-Minute Signature Herbal Therapy — Deep Muscle Restoration and Relaxation",
          alt: "Therapeutic herbal massage at Namia River Retreat spa Hoi An",
        },
        {
          url: "/images/accommodations/vietnam/namia-river-retreat-hoi-an/namia-river-retreat-spa-hammam.webp",
          caption: "Thermal Steam & Cold Plunge Circuit — Complete Cellular Rejuvenation",
          alt: "Herbal hammam steam therapy room at Namia River Retreat Hoi An",
        },
        {
          url: "/images/destinations/vietnam/culture/hoi-an-lantern-boat.webp",
          caption: "Private Thu Bon Riverboat Cruise into Lantern-Lit Hoi An Ancient Town",
          alt: "Hoi An ancient town lantern boats at night Vietnam",
        },
        {
          url: "/images/restaurants-bars/vietnam/morning-glory-vietnamese-restaurant-traditional-local-food.webp",
          caption: "Vibrant Local Gastronomy — Street Food Flavors of Hoi An",
          alt: "Authentic Vietnamese street food and local cuisine in Hoi An",
        },
      ],
      courseSpecs: {
        yardage: "N/A",
        par: "N/A",
        courseType: "Holistic Wellness & Culture",
      },
    },
    {
      day: 6,
      id: "day-6",
      title: "The Nicklaus Finale & Champion's Toast",
      subtitle: "BRG Da Nang Golf Resort (Nicklaus Course)",
      architect: "Jack Nicklaus Design",
      courseName: "BRG Da Nang Golf Resort (Nicklaus)",
      courseHref: "/courses/vietnam/brg-da-nang-nicklaus/",
      pacing: "Final Round Championship Shootout & Riverside Feast",
      transferTime: "25 mins door-to-door",
      whyItWorks:
        "The first true wooden bulkhead course in Asia. Jack Nicklaus crafted this Florida-style stadium test with sparkling water hazards on almost every hole, setting up a thrilling match-play finale before a private riverside celebration at Namia.",
      bullets: [
        "18 championship holes with authentic Florida-style bulkhead timber walls",
        "Tour finale match play shootout with pre-arranged team scoring cards",
        "Post-round herbal muscle treatment followed by a farewell riverside feast with fresh East Sea seafood & tour champion trophy presentation",
      ],
      logistics: [
        {
          label: "Stay",
          value:
            "<a href='/accommodations/vietnam/namia-river-retreat-hoi-an/' style='color: #D4AF37; text-decoration: underline; text-underline-offset: 4px;'>Namia River Retreat</a>",
        },
        {
          label: "Play",
          value:
            "<a href='/courses/vietnam/brg-da-nang-nicklaus/' style='color: #D4AF37; text-decoration: underline; text-underline-offset: 4px;'>BRG Da Nang (Nicklaus)</a>",
        },
        { label: "Celebration", value: "Riverside Farewell Dinner & Horn of Plenty Presentation" },
      ],
      images: [
        {
          url: "/images/courses/vietnam/brg-da-nang-nicklaus/brg-da-nang-golf-resort-nicklaus-fairway-vietnam-4.webp",
          caption: "BRG Da Nang Nicklaus — Florida-Style Stadium Precision",
          alt: "BRG Da Nang Golf Resort Nicklaus course fairway Da Nang",
        },
        {
          url: "/images/courses/vietnam/brg-da-nang-nicklaus/brg-da-nang-golf-resort-nicklaus-course-da-nang-1.webp",
          caption: "Wooden Bulkhead Retaining Walls & Manicured Water Hazards",
          alt: "BRG Da Nang Nicklaus course timber bulkhead green complex",
        },
        {
          url: "/images/courses/vietnam/brg-da-nang-nicklaus/brg-da-nang-golf-resort-nicklaus-water-feature-3.webp",
          caption: "Bulkhead Water Hazard — Demanding Ultimate Iron Precision",
          alt: "BRG Da Nang Nicklaus course water feature hazard Vietnam",
        },
        {
          url: "/images/courses/vietnam/brg-da-nang-nicklaus/brg-da-nang-golf-resort-nicklaus-fairway-vietnam-4.webp",
          caption: "Late Afternoon Reflections Across the Nicklaus Stadium Lake",
          alt: "Scenic lake reflections on BRG Da Nang Nicklaus championship fairway",
        },
        {
          url: "/images/homepage/ags-difference/horn-of-plenty-winner.webp",
          caption: "The Horn of Plenty — AGS Tour Champion Trophy Presentation",
          alt: "AGS Horn of Plenty trophy presentation ceremony for tour winner",
        },
      ],
      courseSpecs: {
        yardage: "7,380",
        par: "72",
        courseType: "Timber Bulkhead Stadium",
      },
    },
    {
      day: 7,
      id: "day-7",
      title: "Farewell to the River & Mindful Departure",
      subtitle: "Morning Tai Chi, Breakfast & VIP Departure",
      architect: "AGS Concierge",
      courseName: "Departure",
      pacing: "Relaxed Departure & Departure Reset",
      transferTime: "35 mins to DAD Airport",
      whyItWorks:
        "No rushed 6:00 AM checkouts. Enjoy a peaceful riverside breakfast at Namia, a final dip in your private plunge pool, and your final 90-minute wellness therapy before your private executive vehicle transfers your group directly to Da Nang Airport.",
      bullets: [
        "Leisurely all-day breakfast overlooking the Thu Bon River and final plunge pool swim",
        "Final inclusive morning spa treatment or herbal bath therapy before departure",
        "Dedicated private VIP airport transfer timed precisely to your departure flight from DAD",
      ],
      logistics: [
        {
          label: "Stay",
          value:
            "<a href='/accommodations/vietnam/namia-river-retreat-hoi-an/' style='color: #D4AF37; text-decoration: underline; text-underline-offset: 4px;'>Namia River Retreat</a>",
        },
        { label: "Transfer", value: "Private VIP Departure Transfer to DAD" },
        { label: "Inclusions", value: "All Villa Amenities & Bag Coordination" },
      ],
      images: [
        {
          url: "/images/accommodations/vietnam/namia-river-retreat-hoi-an/vietnam-luxury-hotel-namia-river-retreat-hoi-an-luxury-on-the-river.webp",
          caption: "Morning River Mist — Final Meditative Walk on the Thu Bon River Islet",
          alt: "Morning river mist over Namia River Retreat Hoi An",
        },
        {
          url: "/images/accommodations/vietnam/namia-river-retreat-hoi-an/namia-river-retreat-room-pool-view.webp",
          caption: "Final Plunge Pool Swim & Private Villa Coffee",
          alt: "Private pool villa morning repose at Namia River Retreat Hoi An",
        },
        {
          url: "/images/accommodations/vietnam/namia-river-retreat-hoi-an/namia-river-retreat-spa-exterior.webp",
          caption: "The Spa Sanctuary Pavilion — Farewell Herbal Infusion & Departure Therapy",
          alt: "Namia River Retreat spa pavilion exterior in tropical gardens Hoi An",
        },
        {
          url: "/images/accommodations/vietnam/namia-river-retreat-hoi-an/vietnam-luxury-hotel-namia-river-retreat-hoi-an-dining-area.webp",
          caption: "Riverfront Artisanal Breakfast Before VIP Airport Transfer",
          alt: "Breakfast pavilion at Namia River Retreat Hoi An",
        },
        {
          url: "/images/accommodations/vietnam/namia-river-retreat-hoi-an/vietnam-luxury-hotel-namia-river-retreat-hoi-an-premium-private-villa.webp",
          caption: "Namia River Retreat — The Definitive Vietnamese Golf & Wellness Escape",
          alt: "Namia River Retreat luxury architecture Hoi An",
        },
      ],
      courseSpecs: {
        yardage: "N/A",
        par: "N/A",
        courseType: "VIP Departure",
      },
    },
  ],
  sanctuary: {
    name: "Namia River Retreat",
    tagline:
      "An exclusive all-pool-villa wellness haven on the Thu Bon River, uniting championship golf with daily restorative therapies.",
    location: "Thu Bon River Islet, Hoi An, Vietnam",
    href: "/accommodations/vietnam/namia-river-retreat-hoi-an/",
    overview:
      "Nestled on a peaceful islet along the Thu Bon River just 10 minutes from Hoi An Ancient Town, Namia River Retreat is designed for complete mind-body rejuvenation. Every guest villa features a private plunge pool, open-air sun deck, and artisanal teak interiors. What truly elevates Namia for traveling golfers is its holistic wellness philosophy: every adult guest receives an inclusive daily 90-minute bespoke spa treatment, combining traditional Vietnamese herbal steam, thermal hammam, pressure-point therapies, and mindfulness rituals to completely restore the body after 18 holes of championship golf.",
    categories: [
      { id: "villas", label: "Private Pool Villas", count: 3 },
      { id: "wellness", label: "Spa & Recovery", count: 6 },
      { id: "grounds", label: "Riverfront & Dining", count: 3 },
    ],
    photos: [
      {
        url: "/images/accommodations/vietnam/namia-river-retreat-hoi-an/vietnam-luxury-hotel-namia-river-retreat-hoi-an-pool-villa.webp",
        caption: "Stand-Alone Private Pool Villa with Secluded Daybeds",
        category: "villas",
      },
      {
        url: "/images/accommodations/vietnam/namia-river-retreat-hoi-an/namia-river-retreat-spa-massage.webp",
        caption: "90-Minute Signature Herbal Massage — Targeted Golf Musculoskeletal Therapy",
        category: "wellness",
      },
      {
        url: "/images/accommodations/vietnam/namia-river-retreat-hoi-an/namia-river-retreat-spa-hammam.webp",
        caption: "Herbal Steam Hammam — Pre-Treatment Warm-Up & Toxin Elimination",
        category: "wellness",
      },
      {
        url: "/images/accommodations/vietnam/namia-river-retreat-hoi-an/namia-river-retreat-tai-chi.webp",
        caption: "Daily Morning Tai Chi & Yoga on the Thu Bon Riverfront",
        category: "wellness",
      },
      {
        url: "/images/accommodations/vietnam/namia-river-retreat-hoi-an/namia-river-retreat-spa-outdoor.webp",
        caption: "Open-Air Reflexology Deck — Post-Round Foot & Leg Recovery",
        category: "wellness",
      },
      {
        url: "/images/accommodations/vietnam/namia-river-retreat-hoi-an/namia-river-retreat-spa-interior.webp",
        caption: "Private Couple & Individual Treatment Suites",
        category: "wellness",
      },
      {
        url: "/images/accommodations/vietnam/namia-river-retreat-hoi-an/namia-river-retreat-spa-exterior.webp",
        caption: "Spa Pavilion Set Amidst Frangipani & River Palms",
        category: "wellness",
      },
      {
        url: "/images/accommodations/vietnam/namia-river-retreat-hoi-an/namia-river-retreat-room-pool-view.webp",
        caption: "Pool Villa Master Bedroom Opening Directly to Private Plunge Pool",
        category: "villas",
      },
      {
        url: "/images/accommodations/vietnam/namia-river-retreat-hoi-an/vietnam-luxury-hotel-namia-river-retreat-hoi-an-suite-interior.webp",
        caption: "Handcrafted Teak Furniture & Artisanal Vietnamese Bath Amenities",
        category: "villas",
      },
      {
        url: "/images/accommodations/vietnam/namia-river-retreat-hoi-an/vietnam-luxury-hotel-namia-river-retreat-hoi-an-hero.webp",
        caption: "Panoramic Islet Setting Along the Serene Thu Bon River",
        category: "grounds",
      },
      {
        url: "/images/accommodations/vietnam/namia-river-retreat-hoi-an/vietnam-luxury-hotel-namia-river-retreat-hoi-an-dining-area.webp",
        caption: "Organic Farm-to-Table Riverfront Dining Pavilion",
        category: "grounds",
      },
      {
        url: "/images/accommodations/vietnam/namia-river-retreat-hoi-an/vietnam-luxury-hotel-namia-river-retreat-hoi-an-riverfront-luxury.webp",
        caption: "Sunset Deck with Private Wooden Boat Jetty",
        category: "grounds",
      },
    ],
    inclusions: [
      {
        icon: "🌿",
        title: "Daily 90-Min Inclusive Spa",
        desc: "Every adult guest enjoys an inclusive daily 90-minute treatment: herbal steam, pressure-point therapy, sports recovery, and hot stone rituals.",
      },
      {
        icon: "🏊‍♂️",
        title: "All-Pool Villa Seclusion",
        desc: "Stand-alone villa accommodations featuring private plunge pools, sun terraces, and lush tropical islet gardens.",
      },
      {
        icon: "🧘‍♂️",
        title: "Dawn Tai Chi & Movement",
        desc: "Complimentary morning mindfulness and mobility sessions along the Thu Bon River to prime your swing and focus.",
      },
      {
        icon: "🛶",
        title: "Private River Cruise & Bicycles",
        desc: "Complimentary river shuttle into Hoi An Ancient Town and artisanal bicycles for exploring tranquil river paths.",
      },
    ],
  },
  inclusions: {
    included: [
      {
        title: "4 Championship Rounds (72 Holes)",
        desc: "Hoiana Shores, Ba Na Hills, Laguna Lăng Cô, and BRG Da Nang Nicklaus Course with pre-booked prime morning tee times.",
      },
      {
        title: "1:1 Dedicated Caddies & Shared Motorized Carts",
        desc: "Experienced local caddies assigned to every golfer for expert yardages and green reading, plus modern carts.",
      },
      {
        title: "6 Nights Luxury Pool Villa Accommodation at Namia River Retreat",
        desc: "Private pool villa accommodation with secluded plunge pool, all-day breakfast, and bicycle immersion.",
      },
      {
        title: "Inclusive Daily 90-Minute Spa & Physical Therapy",
        desc: "Every adult guest receives a daily 90-minute bespoke treatment (herbal steam hammam, traditional acupressure, sports muscle release, or hot stone therapy).",
      },
      {
        title: "Daily Riverfront Movement & Mindfulness",
        desc: "Complimentary morning Tai Chi and yoga sessions along the Thu Bon River deck to optimize golf mobility and mental clarity.",
      },
      {
        title: "Private VIP Executive Fleet Transit",
        desc: "All airport, golf course, and dinner transfers in private high-roof VIP vehicles with chilled water and cold towels.",
      },
      {
        title: "AGS Local Guardian Concierge On the Ground",
        desc: "Expat concierge based in Hoi An managing all tee times, dinner reservations, equipment storage, and live scoring.",
      },
    ],
    excluded: [
      {
        title: "International & Domestic Flights",
        desc: "Guests arrange their own flights to Da Nang International Airport (DAD). AGS coordinates private VIP airport transfers directly from your arrival gate.",
      },
      {
        title: "Meals & Dining (Outside Daily Breakfast)",
        desc: "Lunches, dinners, and clubhouse drinks are at own expense. Our concierge reserves preferred tables at top venues or can organize private feasts on request.",
      },
      {
        title: "Caddie Gratuities",
        desc: "Standard tipping in Southeast Asia (400,000–500,000 VND (~$25–$30 AUD) per round) is paid directly to your caddie upon completion of play.",
      },
      {
        title: "Optional Rest-Day Excursions & Charters",
        desc: "Private yacht charters, street food safaris, and tailoring packages are optional add-ons that our team can quote and organize for your group upon request.",
      },
      {
        title: "Personal Travel & Golf Equipment Insurance",
        desc: "We strongly advise comprehensive travel insurance covering international golf gear, baggage transit, and medical care.",
      },
    ],
  },
  pricing: {
    guidePriceUSD: "$2,590",
    guidePriceAUD: "~$3,990 AUD",
    perGolferLabel: "Per golfer, twin-share • Covers Namia Pool Villa Accommodation, Daily 90-Min Spa, 4 Championship Rounds (with Carts & Caddies) & Private Fleet Transfers",
    seasonWindows: [
      {
        season: "Peak Season",
        months: "Feb – Apr",
        status: "Prime Conditions • Warm & Dry",
        statusColor: "#22C55E",
      },
      {
        season: "Shoulder Season",
        months: "May – Aug",
        status: "Summer Sun • Calm Ocean Seas",
        statusColor: "#EAB308",
      },
      {
        season: "Value Season",
        months: "Sep – Jan",
        status: "Cooler Breeze • Maximum Value",
        statusColor: "#38BDF8",
      },
    ],
    customizationNote:
      "* Guide pricing covers your core championship golf and wellness package: green fees, carts, caddies, luxury private pool villa accommodation at Namia River Retreat with daily 90-minute spa treatments, all-day breakfast, and private vehicle fleet transfers. Dining reservations, bespoke tailoring, and cultural river excursions can be seamlessly personalized by our local concierge team on request.",
  },
  faqs: [
    {
      q: "What makes this tour a dedicated Golf & Wellness experience?",
      a: "Unlike standard golf trips, this itinerary balances world-class competition with intensive physical recovery. Guests stay in private pool villas at Namia River Retreat on the Thu Bon River, receiving an inclusive daily 90-minute spa treatment (herbal steam hammam, sports massage, pressure-point therapy) and morning riverfront Tai Chi to ensure peak performance on the fairways every day.",
    },
    {
      q: "Where do we stay during this tour?",
      a: "Guests stay at Namia River Retreat, an exclusive all-pool-villa wellness sanctuary set on an islet along the Thu Bon River in Hoi An. Each golfer enjoys a standalone private pool villa, all-day breakfast, bicycle immersion, and inclusive daily 90-minute spa treatments.",
    },
    {
      q: "What golf courses are played on this tour?",
      a: "The tour includes 4 championship rounds: Hoiana Shores Golf Club (Robert Trent Jones Jr.), Ba Na Hills Golf Club (Luke Donald), Laguna Golf Lăng Cô (Sir Nick Faldo), and BRG Da Nang Golf Resort (Jack Nicklaus Design).",
    },
    {
      q: "What is included with our golf rounds?",
      a: "Each 18-hole championship round includes pre-booked morning green fees, shared motorized golf carts, 1:1 dedicated caddie service, practice range balls, and door-to-door private VIP vehicle transfers.",
    },
    {
      q: "Can our group customize the itinerary or add extra nights?",
      a: "Absolutely. Every AGS tour is fully tailored. We can add rest days, swap courses (such as adding Montgomerie Links), upgrade villa categories, or arrange private golf clinics.",
    },
    {
      q: "How does payment and booking work?",
      a: "We require a 30% deposit upon itinerary confirmation to secure your private pool villas and prime morning tee times. The remaining balance is payable 45 days prior to arrival via secure bank transfer or major credit cards.",
    },
  ],
  schema: {
    name: "The Central Coast Golf & Wellness Classic",
    description:
      "A 7-Day luxury championship golf and wellness journey across Da Nang and Hoi An, Vietnam, staying in private pool villas at Namia River Retreat with inclusive daily 90-minute spa treatments.",
    canonicalUrl:
      "https://www.asiagolfspecialists.com/tours/the-central-coast-classic/",
    heroImage:
      "https://www.asiagolfspecialists.com/images/courses/vietnam/hoiana-shores/hoiana-shores-beachfront-golf.webp",
    minPrice: "2590",
    priceCurrency: "USD",
  },
};
