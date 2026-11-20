import type { TourData } from "@/types/tour";

export const cambodiaAngkorOdysseyData: TourData = {
  slug: "cambodia-angkor-odyssey",
  titlePrefix: "The Angkor",
  titleHighlight: "Odyssey",
  subtitle:
    "A 5-day luxury golf and heritage pilgrimage in Siem Reap featuring Sir Nick Faldo\'s championship masterwork and private VIP access to the ancient stone temples of Angkor. Headquartered at Raffles Grand Hotel d\'Angkor.",
  country: "Cambodia",
  flag: "🇰🇭",
  heroBadge: "🇰🇭 Ancient Khmer Heritage • Siem Reap",
  heroImage:
    "/images/courses/cambodia/angkor-golf-resort/angkor-golf-resort-angkor-wat-view-4.webp",
  quickStats: [
    { label: "Duration", value: "5 Days / 4 Nights", icon: "🗓️" },
    { label: "Championship Golf", value: "3 Rounds (54 Holes)", icon: "⛳" },
    { label: "Luxury Sanctuary", value: "Raffles Grand Hotel d\'Angkor", icon: "🏖️" },
    { label: "Guide Price", value: "From $1,690 USD", sub: "(~$2,600 AUD)", icon: "💎" },
  ],
  curatorBrief: {
    badge: "Curator\'s Overview",
    title: "Ancient Temples, Colonial Grandeur & Faldo\'s Masterpiece",
    paragraphs: [
      "Nowhere on earth does championship golf collide with ancient civilization quite like Siem Reap. Set against the mystic stone spires of the 12th-century Khmer Empire, this 5-day itinerary pairs Asia\'s most decorated heritage hotel with Sir Nick Faldo\'s jewel layout and historical French colonial fairways.",
      "Headquartered at Raffles Grand Hotel d\'Angkor in the historic French Quarter, your party unpacks once for 4 nights of pure timeless luxury. You confront 3 distinct 18-hole tests: the water-laden parkland of Phokeethra Country Club, the strategic bunkering of Faldo\'s Angkor Golf Resort, and the generous fairways of Booyoung. Balanced with private sunrise temple tours, herbal spa therapies, and Elephant Bar sundowners, this is Cambodia at its most evocative.",
    ],
    pacingLabel: "Tour Pacing",
    pacingDesc: "Heritage Balance (3 Rounds, 1 Dedicated Temple Discovery Day, Zero Repacking)",
    quote: "Standing on the 18th green at Angkor Golf Resort with the jungle breeze drifting off ancient stone spires is an unforgettable golfing sensation.",
    author: "AGS Southeast Asia Director",
  },
  chapters: [
    {
      day: 1,
      id: "day-1",
      title: "The French Quarter Residency & Opening Round",
      subtitle: "VIP SAI Arrival & Opening Round at Phokeethra",
      architect: "Sofitel Luxury Golf Design",
      courseName: "Phokeethra Country Club",
      courseHref: "/courses/cambodia/phokeethra/",
      pacing: "Effortless SAI Arrival & Afternoon Parkland Round",
      transferTime: "50 mins from SAI Airport / 25 mins to Course",
      whyItWorks:
        "Upon touchdown at Siem Reap-Angkor International Airport (SAI), your private AGS chauffeur escorts your group directly to Raffles Grand Hotel d\'Angkor before transitioning to Phokeethra Country Club. Playing across sweeping fairways and an authentic 11th-century restored Khmer stone bridge, you shake off travel fatigue before sundowners at the Elephant Bar.",
      bullets: [
        "Private VIP arrival greeting and executive high-roof vehicle transit from Siem Reap-Angkor International Airport (SAI)",
        "18 holes at Phokeethra Country Club—former host of the Asian Tour\'s Cambodian Open—with dedicated caddies and carts",
        "Check-in at Raffles Grand Hotel d\'Angkor followed by signature Femme Fatale cocktails at the historic Elephant Bar",
      ],
      logistics: [
        { label: "Stay", value: "Raffles Grand Hotel d\'Angkor" },
        { label: "Play", value: "18 Holes at Phokeethra Country Club" },
        { label: "Transit", value: "Private AGS Executive VIP Fleet" },
      ],
      images: [
        {
          url: "/images/courses/cambodia/phokeethra/phokeethra-country-club-siem-reap-cambodia-1.webp",
          caption: "Phokeethra Country Club — Restored 11th-Century Khmer Bridge Fairway",
          alt: "Phokeethra Country Club ancient Khmer stone bridge and fairway",
        },
        {
          url: "/images/courses/cambodia/phokeethra/phokeethra-country-club-asian-tour-2.webp",
          caption: "Asian Tour Proven Pedigree — Precision Parkland Corridors",
          alt: "Phokeethra Country Club Asian Tour championship routing",
        },
        {
          url: "/images/courses/cambodia/phokeethra/phokeethra-country-club-water-carry-3.webp",
          caption: "Natural Lagoons and Water-Guarded Island Approaches",
          alt: "Phokeethra Country Club water hazard and green approach",
        },
        {
          url: "/images/courses/cambodia/phokeethra/phokeethra-country-club-fairway-4.webp",
          caption: "Tree-Lined Championship Fairways Demanding Accuracy off the Tee",
          alt: "Phokeethra Country Club tree-lined championship fairway",
        },
        {
          url: "/images/accommodations/cambodia/raffles-grand-dangkor/cambodia-luxury-hotel-raffles-grand-hotel-dangkor-colonial-facade-1.webp",
          caption: "Raffles Grand Hotel d'Angkor — French Colonial Landmark Welcome",
          alt: "Raffles Grand Hotel d'Angkor colonial facade and gardens",
        },
      ],
      courseSpecs: {
        yardage: "7,145 Yards",
        par: "Par 72",
        courseType: "Historic Parkland & Water Hazards",
      },
    },
    {
      day: 2,
      id: "day-2",
      title: "The Eighth Wonder of the World",
      subtitle: "Rest Day | Private VIP Sunrise Angkor Archaeological Exploration",
      architect: "King Suryavarman II (12th Century)",
      courseName: "Angkor Archaeological Park",
      courseHref: "",
      pacing: "Private Cultural Exploration & Michelin-Tier Khmer Cuisine",
      transferTime: "15 mins from Raffles",
      whyItWorks:
        "Today, the golf clubs rest as your party explores the greatest archaeological wonder in Southeast Asia. Avoid the main tourist rush with an exclusive dawn entry organized by our Local Guardian team, taking in sunrise over Angkor Wat\'s iconic central towers before visiting root-strangled Ta Prohm.",
      bullets: [
        "Private sunrise access to Angkor Wat with an elite English-speaking Khmer historical scholar",
        "Mid-morning exploration of Ta Prohm (the celebrated Tomb Raider jungle temple) and the smiling stone faces of Bayon",
        "Afternoon poolside relaxation at the Raffles Heritage Pool with chilled towel service",
        "Gourmet evening dining at Cuisine Wat Damnak, consistently ranked among Asia\'s 50 Best Restaurants",
      ],
      logistics: [
        { label: "Stay", value: "Raffles Grand Hotel d\'Angkor" },
        { label: "Activity", value: "Private VIP Angkor Archaeological Park Tour" },
        { label: "Dining", value: "Cuisine Wat Damnak Fine Dining" },
      ],
      images: [
        {
          url: "/images/tours/cambodia/cambodia-angkor-wat-sunrise-tour.webp",
          caption: "Sunrise Over the Mystic Stone Spires of Angkor Wat",
          alt: "Sunrise over Angkor Wat temple spires reflected in lily pond",
        },
        {
          url: "/images/tours/cambodia/angkor-wat-tour.webp",
          caption: "Ancient Monumental Architecture Across the Angkor Archaeological Park",
          alt: "Ancient temple monument in Angkor Archaeological Park",
        },
        {
          url: "/images/accommodations/cambodia/raffles-grand-dangkor/cambodia-luxury-hotel-raffles-grand-hotel-dangkor-pool-2.webp",
          caption: "Afternoon Poolside Relaxation by the Shaded Heritage Loungers",
          alt: "Poolside loungers at Raffles Grand Hotel d'Angkor",
        },
        {
          url: "/images/tours/cambodia/cuisinewatdamnak-siemreap-cambodia.webp",
          caption: "Cuisine Wat Damnak — Asia\'s 50 Best Modern Khmer Culinary Experience",
          alt: "Fine dining course at Cuisine Wat Damnak in Siem Reap",
        },
        {
          url: "/images/accommodations/cambodia/raffles-grand-dangkor/cambodia-luxury-hotel-raffles-grand-hotel-dangkor-angkor-wat-view-5.webp",
          caption: "Twilight Views and French Colonial Architecture at Raffles Grand",
          alt: "Twilight view from Raffles Grand Hotel d'Angkor",
        },
      ],
    },
    {
      day: 3,
      id: "day-3",
      title: "Faldo\'s Cambodian Jewel",
      subtitle: "Round 2: Angkor Golf Resort | Sir Nick Faldo Masterpiece",
      architect: "Sir Nick Faldo (2008)",
      courseName: "Angkor Golf Resort",
      courseHref: "/courses/cambodia/angkor-golf-resort/",
      pacing: "Championship Morning & Heritage Spa Recovery",
      transferTime: "20 mins from Raffles",
      whyItWorks:
        "Ranked undisputed #1 in Cambodia and widely heralded as one of Sir Nick Faldo\'s finest global achievements. Featuring immaculate Paspalum fairways, bold strategic bunkering, and undulating green complexes, every shot demands tactical intent and crisp ball striking.",
      bullets: [
        "Prime morning tee time at Sir Nick Faldo\'s award-winning Angkor Golf Resort",
        "Expert 1:1 caddies trained to read subtle green grains and strategic approach angles",
        "Post-round herbal compress and recovery massage session at the Raffles Spa",
      ],
      logistics: [
        { label: "Stay", value: "Raffles Grand Hotel d\'Angkor" },
        { label: "Play", value: "18 Holes at Angkor Golf Resort" },
        { label: "Recovery", value: "Raffles Spa Traditional Herbal Compress" },
      ],
      images: [
        {
          url: "/images/courses/cambodia/angkor-golf-resort/angkor-golf-resort-angkor-wat-view-4.webp",
          caption: "Sir Nick Faldo\'s Flagship Cambodian Layout — Flawless Paspalum Conditioning",
          alt: "Angkor Golf Resort pristine fairway and strategic bunkering",
        },
        {
          url: "/images/courses/cambodia/angkor-golf-resort/angkor-golf-resort-faldo-championship-2.webp",
          caption: "Demanding Water Hazards & Bunkered Approaches at Angkor Golf Resort",
          alt: "Angkor Golf Resort water hazard and green approach",
        },
        {
          url: "/images/courses/cambodia/angkor-golf-resort/angkor-golf-resort-signature-green-5.webp",
          caption: "Immaculate Undulating Greens Maintained to Tour Standards",
          alt: "Signature green complex at Angkor Golf Resort",
        },
        {
          url: "/images/courses/cambodia/angkor-golf-resort/angkor-golf-resort-siem-reap-cambodia-1.webp",
          caption: "The Iconic Clubhouse and 18th Hole Green Complex",
          alt: "Clubhouse and 18th hole at Angkor Golf Resort",
        },
        {
          url: "/images/tours/cambodia/cambodia-raffles-dangkor-spa.webp",
          caption: "Post-Round Traditional Herbal Compress Recovery at Raffles Spa",
          alt: "Raffles Spa holistic wellness treatments in Siem Reap",
        },
      ],
      courseSpecs: {
        yardage: "7,279 Yards",
        par: "Par 72",
        courseType: "Championship Resort Links-Parkland Hybrid",
      },
    },
    {
      day: 4,
      id: "day-4",
      title: "Lakeside Fairways & Candlelit Farewell",
      subtitle: "Round 3: Siem Reap Booyoung Country Club & Temple Gala Dinner",
      architect: "Kentaro Sato",
      courseName: "Siem Reap Booyoung Country Club",
      courseHref: "/courses/cambodia/siem-reap-booyoung/",
      pacing: "Championship Finale & Ancient Temple Gala",
      transferTime: "25 mins from Raffles",
      whyItWorks:
        "The final competitive round takes you to Siem Reap Booyoung Country Club (formerly Siem Reap Lake). Designed by celebrated Japanese golf architect Kentaro Sato, generous palms and wide manicured fairways offer scoring opportunities before our bespoke candlelit temple gala finale.",
      bullets: [
        "18 holes at Siem Reap Booyoung Country Club with motorized carts and caddies",
        "Afternoon rest and tournament scoring compilation by your AGS Local Guardian",
        "Exclusive private candlelit dinner set within ancient Khmer temple ruins featuring classical Apsara dance performances and fine wines",
      ],
      logistics: [
        { label: "Stay", value: "Raffles Grand Hotel d\'Angkor" },
        { label: "Play", value: "18 Holes at Siem Reap Booyoung CC" },
        { label: "Evening", value: "Private Temple Gala Champions Dinner" },
      ],
      images: [
        {
          url: "/images/courses/cambodia/siem-reap-booyoung/siem-reap-booyoung-country-club-cambodia-1.webp",
          caption: "Siem Reap Booyoung Country Club — Expansive Fairways Framed by Native Palms",
          alt: "Siem Reap Booyoung Country Club open fairway and tropical palms",
        },
        {
          url: "/images/courses/cambodia/siem-reap-booyoung/siem-reap-booyoung-country-club-generous-fairway-2.webp",
          caption: "Generous Landing Corridors Designed by Kentaro Sato",
          alt: "Siem Reap Booyoung Country Club generous fairway",
        },
        {
          url: "/images/courses/cambodia/siem-reap-booyoung/siem-reap-booyoung-country-club-floral-3.webp",
          caption: "Lush Tropical Landscaping and Native Palm Plantations",
          alt: "Siem Reap Booyoung Country Club floral fairway landscape",
        },
        {
          url: "/images/courses/cambodia/siem-reap-booyoung/siem-reap-booyoung-country-club-scenic-5.webp",
          caption: "Lakeside Water Carries Demanding Accurate Iron Play",
          alt: "Siem Reap Booyoung Country Club water hazard reflection",
        },
        {
          url: "/images/tours/cambodia/cambodia-private-temple-dinner.webp",
          caption: "Private Candlelit Champions Gala Set Against Ancient Khmer Ruins",
          alt: "Exclusive candlelit dinner within ancient temple grounds in Siem Reap",
        },
      ],
      courseSpecs: {
        yardage: "7,396 Yards",
        par: "Par 72",
        courseType: "Expansive Lakeside Parkland",
      },
    },
    {
      day: 5,
      id: "day-5",
      title: "The Heritage Farewell",
      subtitle: "Morning Poolside Repose & Private Airport Escort",
      architect: "AGS Departure Concierge",
      courseName: "Raffles Grand Hotel d\'Angkor",
      courseHref: "/accommodations/cambodia/raffles-grand-dangkor/",
      pacing: "Leisurely Poolside Breakfast & Stress-Free Departure",
      transferTime: "50 mins to SAI Airport",
      whyItWorks:
        "Savor a lingering gourmet breakfast in the colonial dining room before a final morning swim in the legendary Raffles Heritage Pool. Your dedicated executive chauffeur coordinates all luggage transit directly to Siem Reap-Angkor International Airport (SAI) for your onward flight.",
      bullets: [
        "A leisurely morning by Cambodia\'s most celebrated colonial resort swimming pool",
        "Luggage assistance, golf bag sanitization, and seamless checkout coordinated by your AGS host",
        "Private VIP transit to Siem Reap-Angkor International Airport (SAI) timed precisely to your flight",
      ],
      logistics: [
        { label: "Stay", value: "Raffles Grand Hotel d\'Angkor" },
        { label: "Morning", value: "Champagne Breakfast & Poolside Leisure" },
        { label: "Transit", value: "Private Executive Fleet Transit to SAI Airport" },
      ],
      images: [
        {
          url: "/images/accommodations/cambodia/raffles-grand-dangkor/cambodia-luxury-hotel-raffles-grand-hotel-dangkor-heritage-pool-3.webp",
          caption: "The Iconic Raffles Heritage Pool — Inspired by the Ancient Royal Pools of Angkor",
          alt: "Raffles Grand Hotel d'Angkor iconic heritage swimming pool",
        },
        {
          url: "/images/accommodations/cambodia/raffles-grand-dangkor/cambodia-luxury-hotel-raffles-grand-hotel-dangkor-presidential-suite-4.webp",
          caption: "French Colonial Suites with Polished Teak and Antique Furnishings",
          alt: "Interior of colonial suite at Raffles Grand Hotel d'Angkor",
        },
        {
          url: "/images/accommodations/cambodia/raffles-grand-dangkor/cambodia-luxury-hotel-raffles-grand-hotel-dangkor-colonial-facade-1.webp",
          caption: "Historic 1932 French Colonial Facade and Formal Tropical Gardens",
          alt: "Raffles Grand Hotel d'Angkor grand entrance facade",
        },
        {
          url: "/images/accommodations/cambodia/raffles-grand-dangkor/cambodia-luxury-hotel-raffles-grand-hotel-dangkor-pool-2.webp",
          caption: "Morning Sunlounger Repose Before Private Airport Transit",
          alt: "Raffles Grand Hotel d'Angkor sun loungers by pool",
        },
        {
          url: "/images/tours/cambodia/cambodia-angkor-wat-sunrise-tour-mobile.webp",
          caption: "Lasting Memories of Cambodia's Ancient Temples and Championship Fairways",
          alt: "Sunrise over Angkor Wat temple in Cambodia",
        },
      ],
    },
  ],
  sanctuary: {
    name: "Raffles Grand Hotel d\'Angkor",
    tagline: "Landmark Colonial Elegance & Royal Heritage in Siem Reap\'s French Quarter Since 1932",
    location: "Siem Reap, Cambodia",
    href: "/accommodations/cambodia/raffles-grand-dangkor/",
    overview:
      "Opened in 1932 and having welcomed everyone from royalty to Charlie Chaplin and Jacqueline Kennedy, Raffles Grand Hotel d\'Angkor is Southeast Asia\'s premier historic sanctuary. Set amid 15 acres of manicured French gardens directly across from the Royal Palace, it features Cambodia\'s most iconic heritage swimming pool, the legendary Elephant Bar, and authentic colonial teak verandas.",
    categories: [
      { id: "all", label: "All Spaces", count: 5 },
      { id: "rooms", label: "Colonial Suites", count: 2 },
      { id: "pool", label: "Heritage Pool", count: 2 },
      { id: "grounds", label: "French Quarter Grounds", count: 1 },
    ],
    photos: [
      {
        url: "/images/accommodations/cambodia/raffles-grand-dangkor/cambodia-luxury-hotel-raffles-grand-hotel-dangkor-colonial-facade-1.webp",
        caption: "Timeless 1932 French Colonial Facade Across From the Royal Gardens",
        category: "grounds",
      },
      {
        url: "/images/accommodations/cambodia/raffles-grand-dangkor/cambodia-luxury-hotel-raffles-grand-hotel-dangkor-pool-2.webp",
        caption: "The Monumental Swimming Pool Inspired by Angkor\'s Royal Bathing Basins",
        category: "pool",
      },
      {
        url: "/images/accommodations/cambodia/raffles-grand-dangkor/cambodia-luxury-hotel-raffles-grand-hotel-dangkor-heritage-pool-3.webp",
        caption: "Poolside Loungers with Attentive Chilled Towel and Refreshment Service",
        category: "pool",
      },
      {
        url: "/images/accommodations/cambodia/raffles-grand-dangkor/cambodia-luxury-hotel-raffles-grand-hotel-dangkor-presidential-suite-4.webp",
        caption: "Colonial State Suites with Soaring Ceilings and Polished Teak Floorboards",
        category: "rooms",
      },
      {
        url: "/images/accommodations/cambodia/raffles-grand-dangkor/cambodia-luxury-hotel-raffles-grand-hotel-dangkor-angkor-wat-view-5.webp",
        caption: "Serene Balcony Vistas Over Manicured French Quarter Parterres",
        category: "rooms",
      },
    ],
    inclusions: [
      {
        icon: "🏊‍♂️",
        title: "Landmark Heritage Pool",
        desc: "One of the largest and most stylish swimming pools in Cambodia, modeled directly on the royal bathing pools of Angkor.",
      },
      {
        icon: "🍸",
        title: "The Elephant Bar Legacy",
        desc: "Sip the signature Femme Fatale cocktail created for Jacqueline Kennedy during her historic 1967 visit to Cambodia.",
      },
      {
        icon: "🛏️",
        title: "Colonial State Suites",
        desc: "High ceilings, polished teak floorboards, antique clawfoot tubs, and historic French colonial verandas.",
      },
      {
        icon: "🧖‍♂️",
        title: "Raffles Spa Sanctuary",
        desc: "Traditional Khmer herbal compress therapies and signature recovery rituals after 18 holes in the tropical sun.",
      },
    ],
  },
  inclusions: {
    included: [
      {
        title: "3 Championship Rounds (54 Holes)",
        desc: "Angkor Golf Resort (Sir Nick Faldo), Phokeethra Country Club, and Siem Reap Booyoung CC with pre-booked prime morning tee times.",
      },
      {
        title: "1:1 Dedicated Caddies & Shared Motorized Carts",
        desc: "Experienced local caddies assigned to every golfer for expert club selection and green reads, plus modern carts.",
      },
      {
        title: "4 Nights 5-Star Heritage Stay at Raffles Grand Hotel d\'Angkor",
        desc: "State Room twin-share accommodations with gourmet daily Champagne breakfast and full access to heritage amenities.",
      },
      {
        title: "Private Dedicated VIP Fleet Ground Logistics",
        desc: "Private high-roof executive transit van with dedicated chauffeur covering SAI airport runs, all golf courses, and evening standby.",
      },
      {
        title: "AGS Local Guardian Concierge On the Ground",
        desc: "Dedicated on-site host in Siem Reap managing baggage handling, pro-shop check-ins, scorecards, and local logistics.",
      },
    ],
    excluded: [
      {
        title: "International Flights to Siem Reap",
        desc: "Guests arrange their own flights to Siem Reap-Angkor International Airport (SAI). AGS coordinates private VIP airport transfers directly from your arrival gate.",
      },
      {
        title: "Meals & Dinners (Outside Daily Breakfast)",
        desc: "Lunches, dinners, and clubhouse drinks are at own expense. Our concierge reserves preferred tables at top venues like Cuisine Wat Damnak or arranges private dining on request.",
      },
      {
        title: "Caddie Gratuities",
        desc: "Standard tipping in Cambodia ($15 USD per round) is paid directly to your caddie upon completion of play.",
      },
      {
        title: "Angkor Archaeological Park Pass & Private Temple Gala",
        desc: "Official Angkor Park passes ($37 USD 1-day) and optional private candlelit temple gala feasts are quoted and booked on request.",
      },
      {
        title: "Personal Travel & Equipment Insurance",
        desc: "We strongly advise comprehensive travel insurance covering international golf gear, baggage transit, and medical care.",
      },
    ],
  },
  pricing: {
    guidePriceUSD: "$1,690",
    guidePriceAUD: "~$2,600 AUD",
    perGolferLabel: "Per golfer, twin-share • Covers Accommodation, Golf Green Fees (with Carts & Caddies) & Private Fleet Transfers",
    seasonWindows: [
      {
        season: "Peak Season",
        months: "Nov – Feb",
        status: "Crisp Dry Breezes • Flawless Championship Conditioning",
        statusColor: "#22C55E",
      },
      {
        season: "Shoulder Season",
        months: "Mar – May",
        status: "Warm & Sunny • Calm Temple Skies",
        statusColor: "#EAB308",
      },
      {
        season: "Value Season",
        months: "Jun – Oct",
        status: "Lush Emerald Landscapes • Exceptional Value",
        statusColor: "#38BDF8",
      },
    ],
    customizationNote:
      "* Guide pricing strictly covers your core golf package: championship green fees, carts, caddies, luxury accommodation, and private vehicle fleet transfers. All dining recommendations, rest-day temple tours, and private gala events are suggested highlights that our concierge team can seamlessly organize and book for your group on request.",
  },
  faqs: [
    {
      q: "Which golf courses are played on The Angkor Odyssey?",
      a: "The tour features 3 championship rounds across Siem Reap: Sir Nick Faldo\'s award-winning Angkor Golf Resort, the historic parkland at Phokeethra Country Club (former Asian Tour venue), and the expansive layout at Siem Reap Booyoung Country Club.",
    },
    {
      q: "How far is the new Siem Reap-Angkor International Airport (SAI)?",
      a: "The new SAI airport is located approximately 50 km east of Siem Reap (a comfortable 50–55 minute highway transit). Your private AGS chauffeur meets your group right outside the arrival gate in a dedicated air-conditioned executive van.",
    },
    {
      q: "Can our group upgrade our room at Raffles or add extra golf?",
      a: "Yes. We frequently arrange upgrades to Landmark Suites or Private Pool Villas at Raffles, and can easily add an extra twilight round at Angkor Golf Resort or a round at Garden City.",
    },
    {
      q: "What is included with our golf green fees?",
      a: "Every championship round includes pre-booked prime morning green fees, shared motorized golf carts, 1:1 dedicated caddie service, and private round-trip VIP vehicle transfers.",
    },
  ],
  schema: {
    name: "The Angkor Odyssey",
    description:
      "A 5-Day luxury golf tour in Siem Reap featuring Sir Nick Faldo\'s Angkor Golf Resort, Phokeethra CC, and Booyoung CC, anchored at Raffles Grand Hotel d\'Angkor.",
    canonicalUrl: "https://www.asiagolfspecialists.com/tours/cambodia-angkor-odyssey/",
    heroImage:
      "https://www.asiagolfspecialists.com/images/courses/cambodia/angkor-golf-resort/angkor-golf-resort-angkor-wat-view-4.webp",
    minPrice: "1690",
    priceCurrency: "USD",
  },
};
