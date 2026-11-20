import type { TourData } from "@/types/tour";

export const thailandRoyalSiamData: TourData = {
  slug: "thailand-royal-siam",
  titlePrefix: "The Royal Siam",
  titleHighlight: "Circuit",
  subtitle:
    "A 7-day luxury sojourn tracing Bangkok's high-altitude skyline and Hua Hin's royal coast. 4 championship rounds across Thai Country Club, Pineapple Valley, Springfield Royal, and Black Mountain, anchored at The Standard.",
  country: "Thailand",
  flag: "🇹🇭",
  heroBadge: "🇹🇭 Royal Siamese Circuit • Bangkok & Hua Hin",
  heroImage:
    "/images/tours/thailand/thailand-6d7n-the-standard-hua-hin-hero.webp",
  quickStats: [
    { label: "Duration", value: "7 Days / 6 Nights", icon: "🗓️" },
    { label: "Championship Golf", value: "4 Rounds (72 Holes)", icon: "⛳" },
    { label: "Luxury Sanctuary", value: "The Standard Bangkok & Hua Hin", icon: "🏖️" },
    { label: "Guide Price", value: "From $1,980 USD", sub: "(~$3,050 AUD)", icon: "💎" },
  ],
  curatorBrief: {
    badge: "Curator's Overview",
    title: "Urban Prestige Meets Royal Gulf Serenity",
    paragraphs: [
      "The Royal Siam Circuit delivers Thailand at its most sophisticated. Tracing the historic royal corridor between Bangkok's glittering high-altitude skyline and Hua Hin's aristocratic beaches, this 7-day itinerary seamlessly merges old-money prestige with contemporary barefoot luxury.",
      "We open with Tiger Woods' iconic Asian breakthrough course at Thai Country Club before transitioning south along the Gulf of Thailand to The Standard Hua Hin. From the panoramic ridges of Pineapple Valley to the Jack Nicklaus gauntlet at Springfield Royal and the granite amphitheater finale at European Tour host Black Mountain, every round is paired with prime morning tee times, single caddies, bespoke sartorial tailoring, private yacht charters, and rooftop dining.",
    ],
    pacingLabel: "Tour Pacing",
    pacingDesc: "Dual-Hub Balance (4 Rounds, 1 Rest/Yacht Day, 1 Scenic Coastward Transit)",
    quote: "From Bangkok's rooftop cocktails to Hua Hin's granite fairways, this is Thailand golf at its most refined.",
    author: "AGS Founder & Southeast Asia Director",
  },
  chapters: [
    {
      day: 1,
      id: "day-1",
      title: "The Neon Skyline & High-Altitude Arrival",
      subtitle: "Bangkok Arrival & Rooftop Welcome",
      architect: "AGS Host Welcoming",
      courseName: "The Standard, Bangkok Mahanakhon",
      courseHref: "",
      pacing: "Effortless Arrival & Sky-High Dining",
      transferTime: "40 mins from BKK Airport",
      whyItWorks:
        "Upon arrival at Suvarnabhumi Airport, your private AGS executive chauffeur whisks your party straight to The Standard, Bangkok Mahanakhon—an architectural masterpiece inside King Power Mahanakhon. Celebrate your arrival at Sky Beach, Bangkok's highest open-air rooftop bar, before dining at Mott 32.",
      bullets: [
        "VIP private arrival escort from Bangkok Suvarnabhumi Airport (BKK)",
        "Check-in at The Standard, Bangkok Mahanakhon in iconic retro-futuristic luxury",
        "Sundowners at Sky Beach Bangkok rooftop bar followed by Cantonese dining at Mott 32",
      ],
      logistics: [
        { label: "Stay", value: "The Standard, Bangkok Mahanakhon" },
        { label: "Transit", value: "Private AGS VIP High-Roof Fleet" },
        { label: "Evening", value: "Sky Beach Cocktails & Mott 32 Dinner" },
      ],
      images: [
        {
          url: "/images/tours/thailand/the-standard-bangkok-mahanakhon-lede-king-power-mahanakhon-exterior.webp",
          caption: "King Power Mahanakhon — The Iconic Architectural Landmark of Bangkok",
          alt: "The Standard Bangkok Mahanakhon exterior King Power Mahanakhon tower",
        },
        {
          url: "/images/tours/thailand/thailand-sky-beach-bangkok.webp",
          caption: "Sky Beach Bangkok — The City's Highest Open-Air Rooftop Bar",
          alt: "Sky Beach rooftop bar panoramic city view Bangkok",
        },
        {
          url: "/images/tours/thailand/thailand-the-standard-bangkok-outdoor-swimming-pool.webp",
          caption: "The Standard Bangkok Rooftop Swimming Pool & Skyline Lounges",
          alt: "Outdoor swimming pool at The Standard Bangkok Mahanakhon",
        },
        {
          url: "/images/tours/thailand/the-standard-bangkok-mahanakhon-suite.webp",
          caption: "Deluxe Suite — Bold Retro-Futurism & Floor-to-Ceiling Urban Panoramas",
          alt: "Luxury suite interior at The Standard Bangkok Mahanakhon",
        },
        {
          url: "/images/tours/thailand/thailand-the-standard-bangkok-suite.webp",
          caption: "Designer Master Bedroom Suite at The Standard Bangkok",
          alt: "Master bedroom suite at The Standard Bangkok Thailand",
        },
      ],
      courseSpecs: {
        yardage: "N/A",
        par: "N/A",
        courseType: "Urban Luxury Sanctuary",
      },
    },
    {
      day: 2,
      id: "day-2",
      title: "The Presidential Opener & Coastal Transit",
      subtitle: "Round 1: Thai Country Club & Journey South",
      architect: "Denis Griffiths (1996)",
      courseName: "Thai Country Club",
      courseHref: "/courses/thailand/thai-country-club/",
      pacing: "Morning Championship Round & Coastward Transit",
      transferTime: "45 mins from Hotel / 2.5 hrs to Hua Hin",
      whyItWorks:
        "We open at Thai Country Club, arguably Thailand's most prestigious private golf experience. Famous for its neo-classical clubhouse and hosting Tiger Woods' 1997 Asian Honda Classic triumph, its immaculate Paspalum turf and single caddie service set the benchmark. After lunch, enjoy private high-roof transit south to The Standard, Hua Hin on the Gulf.",
      bullets: [
        "18 championship holes at Thailand's premier private club (Tiger Woods 1997 venue)",
        "Legendary neo-classical clubhouse lunch and white-glove locker room service",
        "Scenic executive transfer south along the Gulf coast to The Standard Hua Hin",
      ],
      logistics: [
        {
          label: "Stay",
          value:
            "<a href='/accommodations/thailand/the-standard-hua-hin/' style='color: #D4AF37; text-decoration: underline; text-underline-offset: 4px;'>The Standard Hua Hin</a>",
        },
        {
          label: "Play",
          value:
            "<a href='/courses/thailand/thai-country-club/' style='color: #D4AF37; text-decoration: underline; text-underline-offset: 4px;'>Thai Country Club</a>",
        },
        { label: "Transit", value: "Private VIP Executive Transfer to Hua Hin" },
      ],
      images: [
        {
          url: "/images/courses/thailand/thai-country-club/thai-country-club-1.webp",
          caption: "Thai Country Club — Immaculate Paspalum Fairways & Strategic Water Hazards",
          alt: "Thai Country Club championship fairway and lake Bangkok",
        },
        {
          url: "/images/courses/thailand/thai-country-club/thai-country-club-2.webp",
          caption: "Pristine Green Complex Framed by Tropical Palm Canopies",
          alt: "Putting green complex at Thai Country Club Thailand",
        },
        {
          url: "/images/courses/thailand/thai-country-club/thai-country-club-3.webp",
          caption: "Neo-Classical Clubhouse & Grand Entrance Portico",
          alt: "Thai Country Club grand clubhouse portico and facilities",
        },
        {
          url: "/images/courses/thailand/thai-country-club/thai-country-club-4.webp",
          caption: "Signature Water-Flanked Approach Demanding Supreme Precision",
          alt: "Approach shot across water hazard at Thai Country Club",
        },
        {
          url: "/images/tours/thailand/thailand-the-standard-beach-sun-lounges-hua-hin.webp",
          caption: "Arrival at The Standard Hua Hin — Beachfront Sun Lounges & Gulf Breeze",
          alt: "The Standard Hua Hin yellow beachfront sun lounges and umbrellas",
        },
      ],
      courseSpecs: {
        yardage: "7,157",
        par: "72",
        courseType: "Parkland / Championship",
      },
    },
    {
      day: 3,
      id: "day-3",
      title: "Coastal Strategic Play",
      subtitle: "Round 2: Pineapple Valley Golf Club",
      architect: "Pirapon Namatra (2008)",
      courseName: "Pineapple Valley Golf Club",
      courseHref: "/courses/thailand/pineapple-valley/",
      pacing: "Morning Round & Beachfront Seafood Dining",
      transferTime: "20 mins door-to-door",
      whyItWorks:
        "Consistently voted among Thailand's finest courses, Pineapple Valley rolls across former pineapple plantation hills with sweeping panoramas of the Burmese mountain ranges and Gulf of Thailand. Afternoon poolside socials at The Standard are followed by dinner on the sand at Big Fish & Bar.",
      bullets: [
        "18 championship holes carved through rolling pineapple plantation terrain",
        "Spectacular elevated ridge tees with sweeping mountain & sea vistas",
        "Beachfront seafood fine dining at Big Fish & Bar overlooking the Gulf",
      ],
      logistics: [
        {
          label: "Stay",
          value:
            "<a href='/accommodations/thailand/the-standard-hua-hin/' style='color: #D4AF37; text-decoration: underline; text-underline-offset: 4px;'>The Standard Hua Hin</a>",
        },
        {
          label: "Play",
          value:
            "<a href='/courses/thailand/pineapple-valley/' style='color: #D4AF37; text-decoration: underline; text-underline-offset: 4px;'>Pineapple Valley Golf Club</a>",
        },
        { label: "Dinner", value: "Beachfront Catch of the Day at Big Fish & Bar" },
      ],
      images: [
        {
          url: "/images/courses/thailand/pineapple-valley/pineapple-valley-golf-club-hua-hin-thailand-1.webp",
          caption: "Pineapple Valley Golf Club — Dramatic Mountain Ridge Elevation",
          alt: "Pineapple Valley Golf Club signature hole Hua Hin Thailand",
        },
        {
          url: "/images/courses/thailand/pineapple-valley/pineapple-valley-golf-club-plantation-2.webp",
          caption: "Sweeping Panoramas Across Former Pineapple Plantation Foothills",
          alt: "Plantation ridge landscape at Pineapple Valley Hua Hin",
        },
        {
          url: "/images/courses/thailand/pineapple-valley/pineapple-valley-golf-club-championship-3.webp",
          caption: "Undulating Fairway Contours & Deep Strategic Sand Bunkering",
          alt: "Championship fairway bunkering at Pineapple Valley Golf Club",
        },
        {
          url: "/images/courses/thailand/pineapple-valley/pineapple-valley-golf-club-green-5.webp",
          caption: "Immaculate Putting Greens Overlooking the Gulf of Thailand",
          alt: "Green complex at Pineapple Valley Golf Club Hua Hin",
        },
        {
          url: "/images/tours/thailand/thailand-big-fish-and-bar-hua-hin.webp",
          caption: "Big Fish & Bar — Oceanfront Seafood Dining Under the Stars",
          alt: "Beachfront seafood fine dining at Big Fish & Bar Hua Hin",
        },
      ],
      courseSpecs: {
        yardage: "7,361",
        par: "72",
        courseType: "Rolling Ridge Parkland",
      },
    },
    {
      day: 4,
      id: "day-4",
      title: "The Sartorial & Yacht Sojourn",
      subtitle: "Rest Day | Private Gulf Charter & Tailoring",
      architect: "AGS Leisure Experience",
      courseName: "Hua Hin Coastal Waters",
      courseHref: "",
      pacing: "Tactical Rest & Gulf Indulgence",
      transferTime: "15 mins to Pier",
      whyItWorks:
        "The clubs rest while your party indulges in Hua Hin's golden age traditions. Visit premier local tailors for bespoke linen trousers or blazers, then board a private Siamtara traditional sailing vessel for sunset champagne on the Gulf of Thailand. Conclude at Vana Nava Sky Bar.",
      bullets: [
        "Morning bespoke tailoring session with master Italian-cut artisans in Hua Hin",
        "Private sunset champagne sailing cruise aboard the Siamtara traditional vessel",
        "Late-night artisan cocktails at Vana Nava Sky Bar on the 27th floor",
      ],
      logistics: [
        {
          label: "Stay",
          value:
            "<a href='/accommodations/thailand/the-standard-hua-hin/' style='color: #D4AF37; text-decoration: underline; text-underline-offset: 4px;'>The Standard Hua Hin</a>",
        },
        { label: "Charter", value: "Private Siamtara Sunset Sailing Expedition" },
        { label: "Evening", value: "Panoramic Cocktails at Vana Nava Sky Bar" },
      ],
      images: [
        {
          url: "/images/tours/thailand/thailand-siamtara-boat-tour-hua-hin.webp",
          caption: "Siamtara Sailing Vessel — Sunset Champagne Cruise Along the Gulf",
          alt: "Private sailing cruise aboard Siamtara boat tour Hua Hin",
        },
        {
          url: "/images/tours/thailand/vana-nava-sky-in-hua-hin-thailand.webp",
          caption: "Vana Nava Sky Bar — 27th Floor Panoramic Sunset Vistas",
          alt: "Vana Nava Sky Bar high-altitude cocktail terrace Hua Hin",
        },
        {
          url: "/images/tours/thailand/thailand-the-standard-beach-restaurant-hua-hin.webp",
          caption: "The Standard Beachfront Restaurant & Tropical Lawn Dining",
          alt: "Beach restaurant at The Standard Hua Hin Thailand",
        },
        {
          url: "/images/tours/thailand/thailand-the-standard-pool-villa-hua-hin.webp",
          caption: "Private Pool Villa Courtyard at The Standard Hua Hin",
          alt: "Pool villa terrace at The Standard Hua Hin resort",
        },
        {
          url: "/images/tours/thailand/thailand-the-standard-entry-hua-hin.webp",
          caption: "Lush Tropical Botanical Grounds at The Standard Hua Hin",
          alt: "Botanical entrance grounds of The Standard Hua Hin",
        },
      ],
      courseSpecs: {
        yardage: "N/A",
        par: "N/A",
        courseType: "Luxury Rest & Gulf Charter",
      },
    },
    {
      day: 5,
      id: "day-5",
      title: "The Nicklaus Gauntlet",
      subtitle: "Round 3: Springfield Royal Country Club",
      architect: "Jack Nicklaus (1993)",
      courseName: "Springfield Royal Country Club",
      courseHref: "/courses/thailand/springfield-royal/",
      pacing: "Morning Championship Round",
      transferTime: "30 mins door-to-door",
      whyItWorks:
        "Jack Nicklaus at his strategic finest. This 27-hole layout features classic Golden Bear trademarks: deep fairway bunkering, dramatic waste areas, and signature island-feel greens. Dinner is hosted at Air Space Hua Hin, an award-winning glasshouse restaurant.",
      bullets: [
        "18 championship holes designed by Jack Nicklaus (Mountain & Lake courses)",
        "Signature island green demanding precision iron play into prevailing breezes",
        "Dinner at Air Space Hua Hin—an architectural glasshouse celebration of Thai gastronomy",
      ],
      logistics: [
        {
          label: "Stay",
          value:
            "<a href='/accommodations/thailand/the-standard-hua-hin/' style='color: #D4AF37; text-decoration: underline; text-underline-offset: 4px;'>The Standard Hua Hin</a>",
        },
        {
          label: "Play",
          value:
            "<a href='/courses/thailand/springfield-royal/' style='color: #D4AF37; text-decoration: underline; text-underline-offset: 4px;'>Springfield Royal Country Club</a>",
        },
        { label: "Dinner", value: "Artisan Thai Dining at Air Space Hua Hin" },
      ],
      images: [
        {
          url: "/images/courses/thailand/springfield-royal/springfield-royal-island-green-1.webp",
          caption: "Springfield Royal — The Iconic Jack Nicklaus Island Green",
          alt: "Springfield Royal Country Club island green hole Hua Hin",
        },
        {
          url: "/images/courses/thailand/springfield-royal/springfield-royal-1.webp",
          caption: "Golden Bear Design — Majestic Parkland Fairways & Deep Bunkers",
          alt: "Springfield Royal Nicklaus championship course fairway",
        },
        {
          url: "/images/courses/thailand/springfield-royal/springfield-royal-2.webp",
          caption: "Expansive Lake Hazards Requiring Strategic Positioning",
          alt: "Lake hazards and approach shot at Springfield Royal Hua Hin",
        },
        {
          url: "/images/courses/thailand/springfield-royal/springfield-royal-3.webp",
          caption: "Mature Tree Canopy & Manicured Fairways",
          alt: "Mature tropical trees and putting green at Springfield Royal",
        },
        {
          url: "/images/tours/thailand/thailand-air-space-restaurant-hua-hin.webp",
          caption: "Air Space Hua Hin — Award-Winning Glasshouse Dining",
          alt: "Air Space restaurant glasshouse architecture Hua Hin",
        },
      ],
      courseSpecs: {
        yardage: "7,043",
        par: "72",
        courseType: "Jack Nicklaus Championship",
      },
    },
    {
      day: 6,
      id: "day-6",
      title: "The Championship Finale",
      subtitle: "Round 4: Black Mountain Golf Club",
      architect: "Phil Ryan (2007)",
      courseName: "Black Mountain Golf Club",
      courseHref: "/courses/thailand/black-mountain/",
      pacing: "Tour Championship Round & Gala Dinner",
      transferTime: "25 mins door-to-door",
      whyItWorks:
        "Carved into sheer black granite boulders in the foothills west of Hua Hin, Black Mountain is a multiple-time European Tour venue and one of Asia's elite layouts. Dramatic elevation changes, rock-framed waterfalls, and immaculate fairways test every club. After the round, gather on the clubhouse terrace for our signature Horn of Plenty trophy ceremony.",
      bullets: [
        "18 championship holes at Thailand's flagship European Tour & Asian Tour host",
        "Granite rock formations, cascading creeks, and extreme elevation swings",
        "Champions Dinner & Horn of Plenty trophy ceremony on the mountain clubhouse terrace",
      ],
      logistics: [
        {
          label: "Stay",
          value:
            "<a href='/accommodations/thailand/the-standard-hua-hin/' style='color: #D4AF37; text-decoration: underline; text-underline-offset: 4px;'>The Standard Hua Hin</a>",
        },
        {
          label: "Play",
          value:
            "<a href='/courses/thailand/black-mountain/' style='color: #D4AF37; text-decoration: underline; text-underline-offset: 4px;'>Black Mountain Golf Club</a>",
        },
        { label: "Celebration", value: "Champions Dinner & Horn of Plenty Trophy Presentation" },
      ],
      images: [
        {
          url: "/images/courses/thailand/black-mountain/black-mountain-golf-club-hua-hin-thailand-1.webp",
          caption: "Black Mountain Golf Club — Majestic Black Granite Foothills",
          alt: "Black Mountain Golf Club championship layout Hua Hin Thailand",
        },
        {
          url: "/images/courses/thailand/black-mountain/black-mountain-golf-club-rock-fairway-2.webp",
          caption: "Dramatic Elevation Changes & Natural Mountain Creek Hazards",
          alt: "Rock-framed fairway and creek at Black Mountain Golf Club",
        },
        {
          url: "/images/courses/thailand/black-mountain/black-mountain-golf-club-asia-best-3.webp",
          caption: "Signature Mountain Green Complex Framed by Native Boulders",
          alt: "Championship green at Black Mountain Golf Club Hua Hin",
        },
        {
          url: "/images/tours/thailand/thailand-black-mountain-clubhouse-hua-hin.webp",
          caption: "Black Mountain Clubhouse Terrace — The Champions Presentation Venue",
          alt: "Black Mountain clubhouse terrace overlooking championship 18th hole",
        },
        {
          url: "/images/homepage/ags-difference/horn-of-plenty-winner.webp",
          caption: "The Horn of Plenty — AGS Tour Champion Trophy Ceremony",
          alt: "AGS Horn of Plenty trophy ceremony for tour champion",
        },
      ],
      courseSpecs: {
        yardage: "7,334",
        par: "72",
        courseType: "Mountain Valley / European Tour",
      },
    },
    {
      day: 7,
      id: "day-7",
      title: "The Royal Departure",
      subtitle: "Morning Gulf Leisure & Executive Transit to Bangkok",
      architect: "AGS Concierge",
      courseName: "Departure",
      courseHref: "",
      pacing: "Effortless Departure",
      transferTime: "3 hrs to Bangkok (BKK) Airport",
      whyItWorks:
        "Enjoy a final morning swim in the Gulf of Thailand or an artisan brunch under the frangipani trees at The Standard. Your luxury private touring vehicle whisks you straight to Bangkok Suvarnabhumi Airport (BKK) for outbound flights.",
      bullets: [
        "Leisurely beachfront breakfast and final morning swim in the Gulf of Thailand",
        "Private VIP high-roof executive transit directly to Bangkok Suvarnabhumi Airport (BKK)",
        "Bespoke suits, tailored trophies, and unforgettable memories of royal Siam",
      ],
      logistics: [
        {
          label: "Stay",
          value:
            "<a href='/accommodations/thailand/the-standard-hua-hin/' style='color: #D4AF37; text-decoration: underline; text-underline-offset: 4px;'>The Standard Hua Hin</a>",
        },
        { label: "Transfer", value: "Private VIP Executive Transit to BKK Airport" },
        { label: "Concierge", value: "Luggage Coordination & Flight Check-in Assistance" },
      ],
      images: [
        {
          url: "/images/tours/thailand/thailand-6d7n-the-standard-hua-hin-hero.webp",
          caption: "The Standard Hua Hin — Lush Tropical Grounds & Morning Sea Breeze",
          alt: "The Standard Hua Hin tropical gardens and resort hero view",
        },
        {
          url: "/images/tours/thailand/thailand-the-standard-beach-sun-lounges-hua-hin.webp",
          caption: "Final Morning Relaxation on Hua Hin Beach",
          alt: "Beachfront sun lounges and umbrellas at The Standard Hua Hin",
        },
        {
          url: "/images/accommodations/thailand/the-standard-hua-hin/the-standard-hua-hin-2.webp",
          caption: "Resort Swimming Pool Surrounded by Shaded Palm Terraces",
          alt: "The Standard Hua Hin swimming pool and sundeck",
        },
        {
          url: "/images/tours/thailand/thailand-the-standard-canopy-suite-hua-hin.webp",
          caption: "Canopy Suite Private Terrace Overlooking the Gardens",
          alt: "Canopy suite balcony terrace at The Standard Hua Hin",
        },
        {
          url: "/images/homepage/ags-difference/horn-of-plenty-winner.webp",
          caption: "Tour Camaraderie & Championship Memories Across Siam",
          alt: "Asia Golf Specialists tour memories and champion toast",
        },
      ],
      courseSpecs: {
        yardage: "N/A",
        par: "N/A",
        courseType: "VIP Transfer",
      },
    },
  ],
  sanctuary: {
    name: "The Standard, Hua Hin",
    tagline:
      "A vibrant beachfront playground nestled in lush tropical gardens on the Gulf of Thailand, blending mid-century glamour with seaside tranquility.",
    location: "Hua Hin Beach, Gulf of Thailand",
    href: "/accommodations/thailand/the-standard-hua-hin/",
    overview:
      "Honored as one of the best resort hotels in Southeast Asia, The Standard Hua Hin brings vibrant mid-century coastal chic to the royal coastline. Set directly on the sands of Hua Hin Beach, this boutique 5-star haven features colorful retro sun lounges, lush tropical greenery, private pool villas, and an energetic dining scene just a short walk from Hua Hin's night markets.",
    categories: [
      { id: "exterior", label: "Beach & Pools", count: 4 },
      { id: "suites", label: "Villas & Suites", count: 4 },
      { id: "lifestyle", label: "Dining & Lifestyle", count: 2 },
    ],
    photos: [
      {
        url: "/images/accommodations/thailand/the-standard-hua-hin/the-standard-hua-hin-2.webp",
        caption: "The Standard Hua Hin — Iconic Resort Pool Deck & Tropical Gardens",
        category: "exterior",
      },
      {
        url: "/images/tours/thailand/thailand-the-standard-beach-sun-lounges-hua-hin.webp",
        caption: "Beachfront Yellow Lounges & Umbrellas Directly on the Sand",
        category: "exterior",
      },
      {
        url: "/images/tours/thailand/thailand-the-standard-entry-hua-hin.webp",
        caption: "Tropical Botanical Walkways Connecting Villas and Resort Pavilions",
        category: "exterior",
      },
      {
        url: "/images/tours/thailand/thailand-6d7n-the-standard-hua-hin-hero.webp",
        caption: "Panoramic Resort Grounds Extending to the Gulf Coastline",
        category: "exterior",
      },
      {
        url: "/images/tours/thailand/thailand-the-standard-pool-villa-hua-hin.webp",
        caption: "Private Pool Villa — Secluded Sun Terrace & Plunge Pool",
        category: "suites",
      },
      {
        url: "/images/tours/thailand/thailand-the-standard-canopy-suite-hua-hin.webp",
        caption: "Canopy Villa Suite — High Ceilings & Private Garden Balcony",
        category: "suites",
      },
      {
        url: "/images/accommodations/thailand/the-standard-hua-hin/1.webp",
        caption: "Contemporary King Bedroom Suite with Tailored Mid-Century Accents",
        category: "suites",
      },
      {
        url: "/images/accommodations/thailand/the-standard-hua-hin/2.webp",
        caption: "Spacious En-Suite Bathroom with Soaking Tub & Rain Shower",
        category: "suites",
      },
      {
        url: "/images/tours/thailand/thailand-the-standard-beach-restaurant-hua-hin.webp",
        caption: "Praça Beach Bar & Restaurant — Heritage Thai Dining on the Beachfront",
        category: "lifestyle",
      },
      {
        url: "/images/accommodations/thailand/the-standard-hua-hin/3.webp",
        caption: "Lido Pool Bar & All-Day Artisan Italian & Thai Dining",
        category: "lifestyle",
      },
    ],
    inclusions: [
      {
        icon: "🏖️",
        title: "Direct Beachfront Access",
        desc: "Step straight from the manicured resort lawns onto the soft white sands of Hua Hin Beach.",
      },
      {
        icon: "🏊‍♂️",
        title: "Resort Pool & Yellow Lounges",
        desc: "The Standard's iconic poolside scene with signature yellow daybeds, poolside cocktails, and DJ sets.",
      },
      {
        icon: "🧖‍♀️",
        title: "The Standard Spa",
        desc: "Holistic wellness therapies, mud lounges, and sports recovery massages after 18 holes of championship golf.",
      },
      {
        icon: "🍸",
        title: "Praça Beachfront Bar & Grill",
        desc: "Restored heritage Thai house serving craft cocktails and grilled seafood directly on the water's edge.",
      },
    ],
  },
  inclusions: {
    included: [
      {
        title: "4 Championship Rounds (72 Holes)",
        desc: "Thai Country Club, Pineapple Valley, Springfield Royal, and Black Mountain with pre-booked prime morning tee times.",
      },
      {
        title: "1:1 Dedicated Caddies & Shared Motorized Carts",
        desc: "Professional local caddies assigned to every golfer for yardage reading and green analysis, plus modern motorized carts.",
      },
      {
        title: "6 Nights Luxury 5-Star Accommodation",
        desc: "1 Night at The Standard Bangkok Mahanakhon + 5 Nights at The Standard Hua Hin (twin/king share with daily gourmet breakfast).",
      },
      {
        title: "Private VIP Executive Fleet Transit",
        desc: "All airport arrivals, golf course transfers, and Bangkok-to-Hua Hin inter-city legs in private high-roof executive vehicles.",
      },
      {
        title: "AGS Local Guardian Concierge Service",
        desc: "On-the-ground concierge managing baggage logistics, bespoke tailoring bookings, dinner reservations, and live tournament scoring.",
      },
    ],
        excluded: [
      {
        title: "International & Domestic Flights",
        desc: "Guests arrange their own flights to Bangkok Suvarnabhumi Airport (BKK). AGS coordinates private VIP airport transfers directly from your arrival gate.",
      },
      {
        title: "Meals & Dining (Outside Daily Breakfast)",
        desc: "Lunches, dinners, and clubhouse drinks are at own expense. Our concierge reserves preferred tables at top venues or can organize private feasts on request.",
      },
      {
        title: "Caddie Gratuities",
        desc: "Standard tipping in Southeast Asia (400–500 THB (~$18–$22 AUD) per round) is paid directly to your caddie upon completion of play.",
      },
      {
        title: "Optional Rest-Day Excursions & Charters",
        desc: "Private Siamtara sunset catamaran sailing charters, bespoke tailoring, and rooftop cocktail passes are optional add-ons that our team can quote and organize for your group upon request.",
      },
      {
        title: "Personal Travel & Golf Equipment Insurance",
        desc: "We strongly advise comprehensive travel insurance covering international golf gear, baggage transit, and medical care.",
      },
    ],
  },
  pricing: {
    guidePriceUSD: "$1,980",
    guidePriceAUD: "~$3,050 AUD",
    perGolferLabel: "Per golfer, twin-share • Covers Accommodation, Golf Green Fees (with Carts & Caddies) & Private Fleet Transfers",
    seasonWindows: [
      {
        season: "Peak Season",
        months: "Nov – Feb",
        status: "Cooler Breeze • Prime Course Conditioning",
        statusColor: "#22C55E",
      },
      {
        season: "Shoulder Season",
        months: "Mar – May",
        status: "Warm & Sunny • Calm Gulf Seas",
        statusColor: "#EAB308",
      },
      {
        season: "Value Season",
        months: "Jun – Oct",
        status: "Tropical Showers • Exceptional Value",
        statusColor: "#38BDF8",
      },
    ],
    customizationNote:
      "* Guide pricing strictly covers your core golf package: championship green fees, carts, caddies, luxury accommodation, and private vehicle fleet transfers. All dining recommendations, rest-day yacht charters, and cultural excursions are suggested highlights that our concierge team can seamlessly organize and book for your group on request.",
  },
  faqs: [
    {
      q: "Which golf courses are included in The Royal Siam Circuit?",
      a: "The tour features 4 championship rounds across Bangkok and Hua Hin: Thai Country Club (Denis Griffiths / Tiger Woods 1997 venue), Pineapple Valley Golf Club (formerly Banyan), Springfield Royal Country Club (Jack Nicklaus), and Black Mountain Golf Club (Phil Ryan European Tour venue).",
    },
    {
      q: "How does the transit between Bangkok and Hua Hin work?",
      a: "On Day 2, following your morning round and lunch at Thai Country Club, your party travels south to Hua Hin in a private high-roof VIP executive vehicle (approx. 2.5 hours). You unpack once for the remaining 5 nights at The Standard, Hua Hin.",
    },
    {
      q: "Can our group customize hotels or add extra rounds?",
      a: "Absolutely. We can upgrade your Hua Hin stay to a private Pool Villa at The Standard, substitute Bangkok accommodations for Sindhorn Kempinski, or add an extra round at Banyan or Lake View.",
    },
    {
      q: "What is included with our golf green fees?",
      a: "Every championship round includes pre-booked prime morning green fees, shared motorized golf carts, 1:1 dedicated caddie service, and private round-trip VIP vehicle transfers.",
    },
  ],
  schema: {
    name: "The Royal Siam Circuit",
    description:
      "A 7-Day luxury golf tour spanning Bangkok and Hua Hin featuring Thai Country Club, Pineapple Valley, Springfield Royal, and Black Mountain, anchored at The Standard.",
    canonicalUrl: "https://www.asiagolfspecialists.com/tours/thailand-royal-siam/",
    heroImage:
      "https://www.asiagolfspecialists.com/images/tours/thailand/thailand-6d7n-the-standard-hua-hin-hero.webp",
    minPrice: "1980",
    priceCurrency: "USD",
  },
};
