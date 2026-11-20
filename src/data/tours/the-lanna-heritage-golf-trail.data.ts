import type { TourData } from "@/types/tour";

export const theLannaHeritageGolfTrailData: TourData = {
  slug: "the-lanna-heritage-golf-trail",
  titlePrefix: "The Lanna Heritage",
  titleHighlight: "Golf Trail",
  subtitle:
    "A 6-day mountain golf sojourn exploring Northern Thailand's mist-cloaked peaks, ancient Lanna culture, and championship valley courses across Alpine Chiang Mai, Chiangmai Highlands, and Mae Jo.",
  country: "Thailand",
  flag: "🇹🇭",
  heroBadge: "🇹🇭 Northern Mountain Odyssey • Chiang Mai",
  heroImage:
    "/images/courses/thailand/alpine-chiang-mai/alpine-golf-resort-chiang-mai-fairway-3.webp",
  quickStats: [
    { label: "Duration", value: "6 Days / 5 Nights", icon: "🗓️" },
    { label: "Championship Golf", value: "3 Rounds (54 Holes)", icon: "⛳" },
    { label: "Luxury Sanctuary", value: "Tamarind Village Chiang Mai", icon: "🏖️" },
    { label: "Guide Price", value: "From $1,390 USD", sub: "(~$2,140 AUD)", icon: "💎" },
  ],
  curatorBrief: {
    badge: "Curator's Overview",
    title: "Championship Mountain Valleys & Sacred Lanna Soul",
    paragraphs: [
      "Far removed from the coastal heat and urban rush of the south, Chiang Mai presents an entirely different world of Thai golf. Framed by misty Himalayan foothills, ancient teak temples, and mountain streams, the Lanna Heritage Golf Trail blends cooler mountain golf with deep cultural enchantment.",
      "Headquartered within the serene ancient brick courtyards of Tamarind Village inside the historic walled Old City, you unpack once for 5 nights. Your rota features Ron Garl's dramatic mountain layout at Alpine Golf Resort Chiang Mai, Schmidt-Curley's breathtaking valley amphitheater at Chiangmai Highlands, and the rustic orchard charms of Mae Jo. Balanced with organic farm cooking classes, twilight temple visits, and night bazaar dining, this is Northern Thailand at its most memorable.",
    ],
    pacingLabel: "Tour Pacing",
    pacingDesc: "Boutique Sanctuary Balance (3 Rounds, 1 Cultural/Cooking Day, Zero Repacking)",
    quote: "Northern Thailand's cool mountain mornings and Schmidt-Curley elevation changes redefine Asian golf.",
    author: "AGS Northern Thailand Guardian",
  },
  chapters: [
    {
      day: 1,
      id: "day-1",
      title: "Northern Arrival & The Old City Sanctuary",
      subtitle: "Welcome to Chiang Mai & Tamarind Village",
      architect: "AGS Host Welcoming",
      courseName: "Tamarind Village Chiang Mai",
      courseHref: "/accommodations/thailand/tamarind-village/",
      pacing: "Effortless Arrival & Heritage Acclimation",
      transferTime: "20 mins from CNX Airport",
      whyItWorks:
        "Arrive at Chiang Mai International Airport (CNX) to a private VIP greeting. Step beneath the 200-year-old tamarind tree into your serene boutique sanctuary inside the historic walled Old City. Sip chilled lemongrass tea by the pool before an evening riverside dinner.",
      bullets: [
        "Private VIP airport arrival transfer from Chiang Mai International Airport (CNX)",
        "Check-in at Tamarind Village—a boutique heritage retreat set around a 200-year-old sacred tree",
        "Evening welcome cocktail and riverside Lanna dining along the Mae Ping River",
      ],
      logistics: [
        {
          label: "Stay",
          value:
            "<a href='/accommodations/thailand/tamarind-village/' style='color: #D4AF37; text-decoration: underline; text-underline-offset: 4px;'>Tamarind Village Chiang Mai</a>",
        },
        { label: "Transit", value: "Private AGS VIP High-Roof Fleet" },
        { label: "Evening", value: "Riverside Lanna Dining along the Mae Ping" },
      ],
      images: [
        {
          url: "/images/accommodations/thailand/tamarind-village/1.webp",
          caption: "Tamarind Village — Welcoming Entrance Walkway in Chiang Mai Old City",
          alt: "Tamarind Village entrance walkway and historic architecture Chiang Mai",
        },
        {
          url: "/images/accommodations/thailand/tamarind-village/2.webp",
          caption: "Boutique Courtyard Swimming Pool Surrounded by Tropical Bamboo",
          alt: "Courtyard swimming pool at Tamarind Village Chiang Mai",
        },
        {
          url: "/images/tours/thailand/tamarind-village-courtyard-chiang-mai.webp",
          caption: "Historic Lanna Architecture & Shaded Brick Terraces",
          alt: "Lanna courtyard architecture at Tamarind Village resort",
        },
        {
          url: "/images/tours/thailand/tamarind-village-pool-chiang-mai.webp",
          caption: "Peaceful Poolside Lounges for Post-Round Reflection",
          alt: "Tamarind Village swimming pool deck Chiang Mai",
        },
        {
          url: "/images/tours/thailand/tamarind-village-guest-room-chiang-mai.webp",
          caption: "Artisan Lanna Guest Room Suite Featuring Handcrafted Northern Textiles",
          alt: "Deluxe guest room suite at Tamarind Village Chiang Mai",
        },
      ],
      courseSpecs: {
        yardage: "N/A",
        par: "N/A",
        courseType: "Historic Boutique Sanctuary",
      },
    },
    {
      day: 2,
      id: "day-2",
      title: "Valley Links & Mountain Mists",
      subtitle: "Round 1: Alpine Golf Resort Chiang Mai",
      architect: "Ron Garl (2008)",
      courseName: "Alpine Golf Resort Chiang Mai",
      courseHref: "/courses/thailand/alpine-chiang-mai/",
      pacing: "Morning Mountain Championship Round",
      transferTime: "45 mins door-to-door",
      whyItWorks:
        "Nestled in the San Kamphaeng mountain valley, Ron Garl's Northern layout weaves naturally through rolling forests and natural waterways. Dramatic mountain panoramas frame every approach, requiring precision iron control.",
      bullets: [
        "18 championship holes surrounded by misty Himalayan foothill ranges",
        "Ron Garl design featuring island-feel greens and undulating valley fairways",
        "Afternoon return to the Old City for authentic street food and artisan coffee",
      ],
      logistics: [
        {
          label: "Stay",
          value:
            "<a href='/accommodations/thailand/tamarind-village/' style='color: #D4AF37; text-decoration: underline; text-underline-offset: 4px;'>Tamarind Village Chiang Mai</a>",
        },
        {
          label: "Play",
          value:
            "<a href='/courses/thailand/alpine-chiang-mai/' style='color: #D4AF37; text-decoration: underline; text-underline-offset: 4px;'>Alpine Golf Resort Chiang Mai</a>",
        },
        { label: "Evening", value: "Khao Soi Culinary Safari in the Ancient Walled City" },
      ],
      images: [
        {
          url: "/images/courses/thailand/alpine-chiang-mai/alpine-golf-resort-chiang-mai-fairway-3.webp",
          caption: "Alpine Golf Resort Chiang Mai — Majestic Valley Fairway Corridors",
          alt: "Alpine Golf Resort Chiang Mai championship fairway and mountain background",
        },
        {
          url: "/images/courses/thailand/alpine-chiang-mai/alpine-golf-resort-chiang-mai-thailand-1.webp",
          caption: "Championship Putting Green Framed by Towering Mountain Ridges",
          alt: "Putting green complex at Alpine Golf Resort Chiang Mai",
        },
        {
          url: "/images/courses/thailand/alpine-chiang-mai/alpine-golf-resort-chiang-mai-mountain-view-2.webp",
          caption: "Lush Mountain Forest Elevation Changes & Native Creeks",
          alt: "Mountain scenery and green complex at Alpine Chiang Mai",
        },
        {
          url: "/images/courses/thailand/alpine-chiang-mai/alpine-golf-resort-chiang-mai-green-4.webp",
          caption: "Pristine Green Complex Guarded by Deep White Sand Bunkers",
          alt: "Championship bunker and green at Alpine Golf Resort Chiang Mai",
        },
        {
          url: "/images/courses/thailand/alpine-chiang-mai/alpine-golf-resort-chiang-mai-scenic-5.webp",
          caption: "Dramatic Water Hazard Reflecting the Northern Thai Peaks",
          alt: "Scenic lake and mountain view at Alpine Chiang Mai",
        },
      ],
      courseSpecs: {
        yardage: "7,541",
        par: "72",
        courseType: "Himalayan Valley Parkland",
      },
    },
    {
      day: 3,
      id: "day-3",
      title: "Mountain Vistas & Amphitheater Drama",
      subtitle: "Round 2: Chiangmai Highlands Golf & Spa Resort",
      architect: "Schmidt-Curley Design (2005)",
      courseName: "Chiangmai Highlands",
      courseHref: "/courses/thailand/chiang-mai-highlands/",
      pacing: "Morning Championship Round",
      transferTime: "50 mins door-to-door",
      whyItWorks:
        "Voted one of Asia's top resort courses, Chiangmai Highlands features over 100 strategic bunkers carved into soaring mountain amphitheaters. With crisp morning breezes and downhill elevated drives, it is a visual masterpiece.",
      bullets: [
        "18 championship holes designed by Schmidt-Curley in an emerald mountain bowl",
        "Over 100 sculpted flash-faced bunkers and sweeping elevation swings",
        "Post-round craft beers and lunch on the clubhouse terrace overlooking the 18th green",
      ],
      logistics: [
        {
          label: "Stay",
          value:
            "<a href='/accommodations/thailand/tamarind-village/' style='color: #D4AF37; text-decoration: underline; text-underline-offset: 4px;'>Tamarind Village Chiang Mai</a>",
        },
        {
          label: "Play",
          value:
            "<a href='/courses/thailand/chiang-mai-highlands/' style='color: #D4AF37; text-decoration: underline; text-underline-offset: 4px;'>Chiangmai Highlands</a>",
        },
        { label: "Refreshment", value: "Clubhouse Terrace Craft Beers with 360° Mountain Views" },
      ],
      images: [
        {
          url: "/images/courses/thailand/chiang-mai-highlands/chiang-mai-highlands-golf-country-club-thailand-1.webp",
          caption: "Chiangmai Highlands — Soaring Mountain Amphitheater Setting",
          alt: "Chiangmai Highlands Golf and Country Club signature fairway and peaks",
        },
        {
          url: "/images/courses/thailand/chiang-mai-highlands/chiang-mai-highlands-mountain-view-2.webp",
          caption: "Dramatic Elevation Drops Framing Lush Fairways",
          alt: "Mountain elevation shot at Chiangmai Highlands",
        },
        {
          url: "/images/courses/thailand/chiang-mai-highlands/chiang-mai-highlands-rolling-hills-3.webp",
          caption: "Sculpted Flash-Faced Sand Bunkers Along Rolling Contours",
          alt: "Strategic bunkering at Chiangmai Highlands Golf Club",
        },
        {
          url: "/images/courses/thailand/chiang-mai-highlands/chiang-mai-highlands-scenic-hole-4.webp",
          caption: "Scenic Green Approach Framed by Wild Mountain Flora",
          alt: "Green complex and mountains at Chiangmai Highlands",
        },
        {
          url: "/images/courses/thailand/chiang-mai-highlands/chiang-mai-highlands-championship-green-5.webp",
          caption: "Immaculate Paspalum Green Complex & Strategic Water Hazard",
          alt: "Championship green at Chiangmai Highlands Thailand",
        },
      ],
      courseSpecs: {
        yardage: "7,003",
        par: "72",
        courseType: "Mountain Valley / Resort",
      },
    },
    {
      day: 4,
      id: "day-4",
      title: "Lanna Flavors & Sacred Mountain Heritage",
      subtitle: "Rest Day | Organic Cooking Class & Doi Suthep",
      architect: "AGS Cultural Immersion",
      courseName: "Chiang Mai Cultural Heritage",
      courseHref: "",
      pacing: "Tactical Rest & Cultural Discovery",
      transferTime: "30 mins to Organic Farm",
      whyItWorks:
        "The clubs rest while your senses awaken. Harvest fresh herbs and organic produce with an expert local chef to craft authentic Northern dishes, followed by an afternoon visit to Wat Phra That Doi Suthep high above the city.",
      bullets: [
        "Hands-on organic farm culinary class mastering traditional Northern Thai dishes",
        "Scenic afternoon drive up Mount Suthep to the golden chedi of Wat Phra That Doi Suthep",
        "Evening at leisure exploring the vibrant Sunday Walking Street or Night Bazaar",
      ],
      logistics: [
        {
          label: "Stay",
          value:
            "<a href='/accommodations/thailand/tamarind-village/' style='color: #D4AF37; text-decoration: underline; text-underline-offset: 4px;'>Tamarind Village Chiang Mai</a>",
        },
        { label: "Culinary", value: "Private Organic Farm Master Cooking Class" },
        { label: "Culture", value: "Sunset Visit to Wat Phra That Doi Suthep" },
      ],
      images: [
        {
          url: "/images/tours/thailand/chiang-mai-cooking-class.webp",
          caption: "Organic Farm Culinary Class — Mastering Authentic Northern Thai Cuisine",
          alt: "Traditional Thai cooking class ingredients and master chef Chiang Mai",
        },
        {
          url: "/images/accommodations/thailand/tamarind-village/3.webp",
          caption: "Lanna Artisan Craftsmanship & Intricate Wooden Details",
          alt: "Artisan woodwork and textiles at Tamarind Village Chiang Mai",
        },
        {
          url: "/images/accommodations/thailand/tamarind-village/4.webp",
          caption: "Shaded Brick Walkways Bordered by Native Tropical Flora",
          alt: "Tropical walkway at Tamarind Village Chiang Mai",
        },
        {
          url: "/images/accommodations/thailand/tamarind-village/5.webp",
          caption: "Lantern-Lit Courtyards & Twilight Serenity",
          alt: "Evening lantern lights at Tamarind Village courtyard",
        },
        {
          url: "/images/tours/thailand/tamarind-village-courtyard-chiang-mai.webp",
          caption: "The Historic 200-Year-Old Tamarind Tree Canopy",
          alt: "Ancient tamarind tree canopy in resort courtyard",
        },
      ],
      courseSpecs: {
        yardage: "N/A",
        par: "N/A",
        courseType: "Cultural Rest & Culinary Day",
      },
    },
    {
      day: 5,
      id: "day-5",
      title: "Orchard Golf & The Championship Toast",
      subtitle: "Round 3: Mae Jo Golf Club & Gala",
      architect: "Seni Thirawat (2004)",
      courseName: "Mae Jo Golf Club",
      courseHref: "/courses/thailand/mae-jo/",
      pacing: "Tour Championship Round & Gala Dinner",
      transferTime: "30 mins door-to-door",
      whyItWorks:
        "Meandering through natural longan and lychee orchards, Mae Jo offers a scenic, tight parkland test that rewards shot-shaping and discipline. In the evening, gather for the Champions Dinner and Horn of Plenty trophy ceremony.",
      bullets: [
        "18 championship holes weaving through historic fruit orchards and rolling hills",
        "Strategic doglegs and testing green complexes demanding calculated approach play",
        "Champions Farewell Dinner & Horn of Plenty trophy presentation at Tamarind Restaurant",
      ],
      logistics: [
        {
          label: "Stay",
          value:
            "<a href='/accommodations/thailand/tamarind-village/' style='color: #D4AF37; text-decoration: underline; text-underline-offset: 4px;'>Tamarind Village Chiang Mai</a>",
        },
        {
          label: "Play",
          value:
            "<a href='/courses/thailand/mae-jo/' style='color: #D4AF37; text-decoration: underline; text-underline-offset: 4px;'>Mae Jo Golf Club</a>",
        },
        { label: "Celebration", value: "Champions Farewell Dinner & Horn of Plenty Presentation" },
      ],
      images: [
        {
          url: "/images/courses/thailand/mae-jo/mae-jo-1.webp",
          caption: "Mae Jo Golf Club — Parkland Fairways Flanked by Mature Fruit Orchards",
          alt: "Mae Jo Golf Club championship fairway Chiang Mai Thailand",
        },
        {
          url: "/images/courses/thailand/mae-jo/mae-jo-2.webp",
          caption: "Strategic Water Hazards Guarding Delicate Approach Shots",
          alt: "Water hazard and putting green at Mae Jo Golf Club",
        },
        {
          url: "/images/courses/thailand/mae-jo/mae-jo-3.webp",
          caption: "Lush Mountain Backdrop and Serene Northern Thai Countryside",
          alt: "Scenic mountain landscape at Mae Jo Golf Club Chiang Mai",
        },
        {
          url: "/images/courses/thailand/mae-jo/mae-jo-golf-club-2.webp",
          caption: "Rolling Fairway Contours Demanding Disciplined Placement",
          alt: "Fairway contours and trees at Mae Jo Golf Club",
        },
        {
          url: "/images/homepage/ags-difference/horn-of-plenty-winner.webp",
          caption: "The Horn of Plenty — AGS Tour Champion Trophy Ceremony",
          alt: "AGS Horn of Plenty trophy ceremony for tour champion",
        },
      ],
      courseSpecs: {
        yardage: "6,730",
        par: "72",
        courseType: "Orchard Parkland",
      },
    },
    {
      day: 6,
      id: "day-6",
      title: "Northern Departure & Farewell Lanna",
      subtitle: "Morning Courtyard Breakfast & Executive Transit",
      architect: "AGS Concierge",
      courseName: "Departure",
      courseHref: "",
      pacing: "Effortless Departure",
      transferTime: "20 mins to CNX Airport",
      whyItWorks:
        "Savor a leisurely breakfast of Northern artisan coffee and tropical fruits under the ancient tamarind canopy. Your private executive transfer whisks you directly to Chiang Mai International Airport (CNX) for your flight home or connecting journey.",
      bullets: [
        "Leisurely courtyard breakfast and morning coffee under the historic tamarind tree",
        "Private VIP high-roof executive transfer to Chiang Mai International Airport (CNX)",
        "Luggage coordination, souvenir packing, and fond farewell from your Local Guardian",
      ],
      logistics: [
        {
          label: "Stay",
          value:
            "<a href='/accommodations/thailand/tamarind-village/' style='color: #D4AF37; text-decoration: underline; text-underline-offset: 4px;'>Tamarind Village Chiang Mai</a>",
        },
        { label: "Transfer", value: "Private VIP Executive Transit to CNX Airport" },
        { label: "Concierge", value: "Luggage Coordination & Departure Escort" },
      ],
      images: [
        {
          url: "/images/tours/thailand/tamarind-village-pool-chiang-mai.webp",
          caption: "Morning Serenity by the Tamarind Village Courtyard Pool",
          alt: "Courtyard pool in the morning light at Tamarind Village",
        },
        {
          url: "/images/tours/thailand/tamarind-village-guest-room-chiang-mai.webp",
          caption: "Handcrafted Northern Linens in Deluxe Lanna Suite",
          alt: "Artisan bedroom interior at Tamarind Village Chiang Mai",
        },
        {
          url: "/images/accommodations/thailand/tamarind-village/1.webp",
          caption: "Final Walk Through the Peaceful Historic Entrance Walkway",
          alt: "Tamarind Village historic entrance corridor",
        },
        {
          url: "/images/accommodations/thailand/tamarind-village/2.webp",
          caption: "Lanna Pavilions Nestled Among Protected Bamboo Groves",
          alt: "Resort pavilions and tropical gardens Tamarind Village",
        },
        {
          url: "/images/homepage/ags-difference/horn-of-plenty-winner.webp",
          caption: "Championship Memories Across the Lanna Heritage Golf Trail",
          alt: "Asia Golf Specialists tour celebration and memories",
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
    name: "Tamarind Village Chiang Mai",
    tagline:
      "A serene boutique heritage sanctuary nestled in the heart of historic Chiang Mai, set around a magnificent 200-year-old tamarind tree.",
    location: "Old City, Chiang Mai, Northern Thailand",
    href: "/accommodations/thailand/tamarind-village/",
    overview:
      "Tamarind Village is a tranquil oasis of historic Lanna architecture surrounded by ancient temples within Chiang Mai's historic walled city. Featuring peaceful brick courtyards, a sparkling central pool shaded by bamboo groves, and rooms decorated with authentic tribal textiles, it is the quintessential sanctuary for golfers exploring Northern Thailand.",
    categories: [
      { id: "grounds", label: "Courtyards & Pool", count: 4 },
      { id: "rooms", label: "Heritage Rooms", count: 3 },
      { id: "dining", label: "Dining & Spa", count: 3 },
    ],
    photos: [
      {
        url: "/images/accommodations/thailand/tamarind-village/1.webp",
        caption: "Tamarind Village — Welcoming Bamboo Walkway into the Sacred Courtyard",
        category: "grounds",
      },
      {
        url: "/images/accommodations/thailand/tamarind-village/2.webp",
        caption: "Central Swimming Pool Surrounded by Lush Lanna Gardens",
        category: "grounds",
      },
      {
        url: "/images/tours/thailand/tamarind-village-courtyard-chiang-mai.webp",
        caption: "Historic 200-Year-Old Tamarind Tree Shading the Inner Courtyard",
        category: "grounds",
      },
      {
        url: "/images/tours/thailand/tamarind-village-pool-chiang-mai.webp",
        caption: "Poolside Lounges for Post-Round Mountain Recovery",
        category: "grounds",
      },
      {
        url: "/images/tours/thailand/tamarind-village-guest-room-chiang-mai.webp",
        caption: "Deluxe Lanna Suite with Custom Teak Woodwork & Handcrafted Bedding",
        category: "rooms",
      },
      {
        url: "/images/accommodations/thailand/tamarind-village/3.webp",
        caption: "Authentic Northern Thai Tribal Art & High Timber Ceilings",
        category: "rooms",
      },
      {
        url: "/images/accommodations/thailand/tamarind-village/4.webp",
        caption: "Spacious En-Suite Bathroom with Soaking Tub & Artisan Toiletries",
        category: "rooms",
      },
      {
        url: "/images/accommodations/thailand/tamarind-village/5.webp",
        caption: "Ruen Tamarind Restaurant — Open-Air Lanna Dining by the Pool",
        category: "dining",
      },
      {
        url: "/images/tours/thailand/chiang-mai-cooking-class.webp",
        caption: "Private Culinary Experiences Featuring Organic Northern Herbs",
        category: "dining",
      },
      {
        url: "/images/homepage/ags-difference/horn-of-plenty-winner.webp",
        caption: "Post-Tour Celebration in the Lantern-Lit Courtyard",
        category: "dining",
      },
    ],
    inclusions: [
      {
        icon: "🌳",
        title: "Historic 200-Year-Old Tamarind Canopy",
        desc: "Relax in a serene courtyard sanctuary anchored by the resort's iconic sacred tamarind tree.",
      },
      {
        icon: "🏊‍♂️",
        title: "Courtyard Swimming Pool",
        desc: "Cool off after your round in a secluded swimming pool nestled within tropical bamboo groves.",
      },
      {
        icon: "🏮",
        title: "Heart of Old Town Chiang Mai",
        desc: "Walk in minutes to ancient teak temples, night walking markets, artisan cafes, and massage spas.",
      },
      {
        icon: "🍜",
        title: "Ruen Tamarind Restaurant",
        desc: "Authentic Northern Thai recipes, khao soi curry bowls, and fine international cuisine.",
      },
    ],
  },
  inclusions: {
    included: [
      {
        title: "3 Championship Mountain Rounds (54 Holes)",
        desc: "Alpine Golf Resort Chiang Mai, Chiangmai Highlands, and Mae Jo Golf Club with pre-booked prime morning tee times.",
      },
      {
        title: "1:1 Dedicated Caddies & Shared Motorized Carts",
        desc: "Experienced local caddies assigned to every golfer for mountain yardage and slope reading, plus motorized carts.",
      },
      {
        title: "5 Nights Luxury Boutique Accommodation",
        desc: "Exclusive 5-night stay at Tamarind Village Chiang Mai (twin/king share) with daily artisan courtyard breakfasts.",
      },
      {
        title: "Private VIP Executive Fleet Transit",
        desc: "All airport arrivals, daily mountain course transfers, and city logistics in private high-roof VIP vehicles.",
      },
      {
        title: "AGS Local Guardian Concierge Service",
        desc: "Dedicated Northern Thailand concierge managing tee times, golf equipment coordination, dinner reservations, and live scoring.",
      },
    ],
        excluded: [
      {
        title: "International & Domestic Flights",
        desc: "Guests arrange their own flights to Chiang Mai International Airport (CNX). AGS coordinates private VIP airport transfers directly from your arrival gate.",
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
        desc: "Private organic farm master cooking classes, Wat Phra That Doi Suthep tours, and temple night walks are optional add-ons that our team can quote and organize for your group upon request.",
      },
      {
        title: "Personal Travel & Golf Equipment Insurance",
        desc: "We strongly advise comprehensive travel insurance covering international golf gear, baggage transit, and medical care.",
      },
    ],
  },
  pricing: {
    guidePriceUSD: "$1,390",
    guidePriceAUD: "~$2,140 AUD",
    perGolferLabel: "Per golfer, twin-share • Covers Accommodation, Golf Green Fees (with Carts & Caddies) & Private Fleet Transfers",
    seasonWindows: [
      {
        season: "Peak Season",
        months: "Nov – Feb",
        status: "Crisp Mountain Breezes • Prime Golf Weather (15–28°C)",
        statusColor: "#22C55E",
      },
      {
        season: "Shoulder Season",
        months: "Jul – Oct",
        status: "Emerald Green Mountain Vistas • Mild Showers",
        statusColor: "#EAB308",
      },
      {
        season: "Value Season",
        months: "Mar – Jun",
        status: "Warm Mountain Sun • Exceptional Value",
        statusColor: "#38BDF8",
      },
    ],
    customizationNote:
      "* Guide pricing strictly covers your core golf package: championship green fees, carts, caddies, luxury accommodation, and private vehicle fleet transfers. All dining recommendations, rest-day yacht charters, and cultural excursions are suggested highlights that our concierge team can seamlessly organize and book for your group on request.",
  },
  faqs: [
    {
      q: "Which golf courses are played on The Lanna Heritage Golf Trail?",
      a: "The tour includes 3 championship rounds in Chiang Mai: Alpine Golf Resort Chiang Mai (Ron Garl), Chiangmai Highlands Golf & Spa Resort (Schmidt-Curley Design), and Mae Jo Golf Club (Seni Thirawat).",
    },
    {
      q: "What makes golf in Chiang Mai different from Bangkok or the islands?",
      a: "Chiang Mai offers a significantly cooler mountain climate (especially November to February with morning temperatures of 15–20°C), dramatic Himalayan foothill elevation changes, and serene mountain amphitheaters surrounded by fruit orchards and native forests.",
    },
    {
      q: "Can our group upgrade the hotel or add extra rounds?",
      a: "Yes. We frequently arrange upgrades to 137 Pillars House or Four Seasons Resort Chiang Mai, and can add extra rounds at Gassan Legacy or Summit Green Valley.",
    },
    {
      q: "What is included with our golf green fees?",
      a: "Each 18-hole championship round includes pre-booked prime morning green fees, shared motorized golf carts, 1:1 dedicated caddie service, and private round-trip VIP vehicle transfers.",
    },
  ],
  schema: {
    name: "The Lanna Heritage Golf Trail",
    description:
      "A 6-Day luxury Northern Thailand golf tour in Chiang Mai featuring Alpine Chiang Mai, Chiangmai Highlands, and Mae Jo, based at Tamarind Village.",
    canonicalUrl: "https://www.asiagolfspecialists.com/tours/the-lanna-heritage-golf-trail/",
    heroImage:
      "https://www.asiagolfspecialists.com/images/courses/thailand/alpine-chiang-mai/alpine-golf-resort-chiang-mai-fairway-3.webp",
    minPrice: "1390",
    priceCurrency: "USD",
  },
};
