import type { TourData } from "@/types/tour";

export const hoiAnBeachfrontBlissData: TourData = {
  slug: "hoi-an-beachfront-bliss",
  titlePrefix: "Hoi An Beachfront",
  titleHighlight: "Bliss",
  subtitle:
    "A 7-day, 6-night luxury retreat combining 4 premier championship rounds across Montgomerie Links, Vinpearl Nam Hoi An, Laguna Lăng Cô, and Ba Na Hills with 5-star beachfront living at Palm Gardens Resort in Hoi An.",
  country: "Vietnam",
  flag: "🇻🇳",
  heroBadge: "🇻🇳 Luxury Beach & Fairway Retreat • Central Vietnam",
  heroImage:
    "/images/courses/vietnam/laguna-lang-co/laguna-golf-lang-co-jungle-tropical-3.webp",
  quickStats: [
    { label: "Duration", value: "7 Days / 6 Nights", icon: "🗓️" },
    { label: "Championship Golf", value: "4 Rounds (72 Holes)", icon: "⛳" },
    { label: "Luxury Sanctuary", value: "Palm Gardens Beach Resort", icon: "🏖️" },
    { label: "Guide Price", value: "From $1,580 USD", sub: "(~$2,440 AUD)", icon: "💎" },
  ],
  curatorBrief: {
    badge: "Curator's Overview",
    title: "Championship Fairways & Tropical Serenity",
    paragraphs: [
      "Hoi An Beachfront Bliss is crafted for golfers who appreciate world-class architecture without sacrificing resort-style relaxation. Set within 5 hectares of lush tropical palms on Cua Dai Beach, you unpack once at the 5-star Palm Gardens Beach Resort & Spa, enjoying a peaceful sanctuary just 10 minutes from Hoi An's historic lantern-lit quarter.",
      "The golf rota showcases Central Vietnam's rich architectural variety: Colin Montgomerie's boutique dunes layout, IMG's sprawling white-sand resort course at Vinpearl Nam Hoi An, Sir Nick Faldo's dramatic coastal-mountain course at Laguna Lăng Cô, and Luke Donald's highland masterpiece at Ba Na Hills. Coupled with open-top countryside Jeep tours, private beach dinners, and full caddie services, this is pure barefoot luxury.",
    ],
    pacingLabel: "Tour Pacing",
    pacingDesc: "Resort Cadence (4 Championship Rounds, 1 Cultural Exploration Day, Zero Hotel Swaps)",
    quote: "Wake to ocean surf, play 18 holes of championship golf, and dine riverside under silk lanterns.",
    author: "AGS Senior Travel Designer",
  },
  chapters: [
    {
      day: 1,
      id: "day-1",
      title: "Welcome to Hoi An & Resort Check-in",
      subtitle: "Arrival & Coastal Sanctuary Settle-in",
      architect: "AGS Host Welcoming",
      courseName: "Palm Gardens Beach Resort",
      courseHref: "/accommodations/vietnam/palm-gardens-hoi-an/",
      pacing: "Effortless Arrival",
      transferTime: "35 mins from DAD Airport",
      whyItWorks:
        "The moment you touch down at Da Nang Airport, our private chauffeur takes over. Settle into Palm Gardens Resort amidst five hectares of lush gardens, sip coconut welcome refreshments, and take an evening dip in the ocean as sunset illuminates Cua Dai Beach.",
      bullets: [
        "Private VIP airport arrival meet-and-greet at Da Nang International Airport (DAD)",
        "Check-in at Palm Gardens Beach Resort & Spa with welcome drinks and tour orientation",
        "Leisurely afternoon exploring the resort pools and beachfront loungers",
      ],
      logistics: [
        {
          label: "Stay",
          value:
            "<a href='/accommodations/vietnam/palm-gardens-hoi-an/' style='color: #D4AF37; text-decoration: underline; text-underline-offset: 4px;'>Palm Gardens Resort</a>",
        },
        { label: "Transit", value: "Private VIP Executive Vehicle" },
        { label: "The Vibe", value: "Tropical serenity and effortless arrival" },
      ],
      images: [
        {
          url: "/images/accommodations/vietnam/palm-gardens-hoi-an/vietnam-luxury-hotel-palm-gardens-hoi-an-hero-1.webp",
          caption: "Palm Gardens Resort & Spa — 5-Star Beachfront Sanctuary in Hoi An",
          alt: "Palm Gardens Resort Hoi An beachfront luxury hotel Vietnam",
        },
        {
          url: "/images/accommodations/vietnam/palm-gardens-hoi-an/vietnam-luxury-hotel-palm-gardens-hoi-an-outdoor-pool-5.webp",
          caption: "Expansive Free-Form Tropical Pool Overlooking Cua Dai Beach",
          alt: "Outdoor pool at Palm Gardens Resort Hoi An",
        },
        {
          url: "/images/accommodations/vietnam/palm-gardens-hoi-an/vietnam-luxury-hotel-palm-gardens-hoi-an-beachfront-3.webp",
          caption: "Private Beachfront Loungers on the Golden Sands of Cua Dai",
          alt: "Beachfront view at Palm Gardens Resort Hoi An",
        },
        {
          url: "/images/accommodations/vietnam/palm-gardens-hoi-an/vietnam-luxury-hotel-palm-gardens-hoi-an-bungalow-4.webp",
          caption: "Garden Bungalow Suites Surrounded by Tropical Palms and Frangipani",
          alt: "Garden bungalow suite at Palm Gardens Resort Hoi An",
        },
        {
          url: "/images/destinations/vietnam/culture/vietnam-hoi-an-traditional-culture.webp",
          caption: "Ancient Hoi An Shophouses Glow in the Evening Light",
          alt: "Historic streetscape in Hoi An ancient town",
        },
      ],
      courseSpecs: {
        yardage: "N/A",
        par: "N/A",
        courseType: "Beachfront Resort",
      },
    },
    {
      day: 2,
      id: "day-2",
      title: "The Colin Montgomerie Classic",
      subtitle: "Montgomerie Links Vietnam",
      architect: "Colin Montgomerie",
      courseName: "Montgomerie Links Vietnam",
      courseHref: "/courses/vietnam/montgomerie-links/",
      pacing: "Morning Championship Round",
      transferTime: "15 mins door-to-door",
      whyItWorks:
        "Tee off your tour at Colin Montgomerie's acclaimed layout. Natural wind-blown dunes, indigenous casuarina pines, and sprawling greens demand strategic shotmaking without beating you up on Day 1.",
      bullets: [
        "18 holes on Vietnam's top boutique parkland layout with dedicated 1:1 caddies",
        "Strategic fairway bunkering and undulating greens designed by Ryder Cup legend Colin Montgomerie",
        "Afternoon poolside relaxation and cocktails back at Palm Gardens Resort",
      ],
      logistics: [
        {
          label: "Stay",
          value:
            "<a href='/accommodations/vietnam/palm-gardens-hoi-an/' style='color: #D4AF37; text-decoration: underline; text-underline-offset: 4px;'>Palm Gardens Resort</a>",
        },
        {
          label: "Play",
          value:
            "<a href='/courses/vietnam/montgomerie-links/' style='color: #D4AF37; text-decoration: underline; text-underline-offset: 4px;'>Montgomerie Links Vietnam</a>",
        },
        { label: "Distance", value: "15 minutes door-to-door private transfer" },
      ],
      images: [
        {
          url: "/images/courses/vietnam/montgomerie-links/montgomerie-links-vietnam-da-nang-1-hero.webp",
          caption: "Montgomerie Links Vietnam — Classic Parkland Fairways",
          alt: "Montgomerie Links Vietnam golf course fairway Da Nang",
        },
        {
          url: "/images/courses/vietnam/montgomerie-links/montgomerie-links-vietnam-coastal-hole-3.webp",
          caption: "Casuarina Pines and Strategic Bunkering on Hole 3",
          alt: "Strategic Bunkering at Montgomerie Links Vietnam",
        },
        {
          url: "/images/courses/vietnam/montgomerie-links/montgomerie-links-vietnam-greens-bunkers-4.webp",
          caption: "Pristine Green Complex Surrounded by Native Sandy Waste Areas",
          alt: "Montgomerie Links greens and bunkers",
        },
        {
          url: "/images/courses/vietnam/montgomerie-links/montgomerie-links-vietnam-clubhouse-5.webp",
          caption: "Montgomerie Links Clubhouse & 19th Hole Sunset Terrace",
          alt: "Montgomerie Links Vietnam clubhouse",
        },
        {
          url: "/images/accommodations/vietnam/palm-gardens-hoi-an/vietnam-luxury-hotel-palm-gardens-hoi-an-outdoor.webp",
          caption: "Post-Round Revival at Palm Spa",
          alt: "Palm Gardens spa facilities",
        },
      ],
      courseSpecs: {
        yardage: "7,090",
        par: "72",
        courseType: "Parkland Dunes",
      },
    },
    {
      day: 3,
      id: "day-3",
      title: "White Sands & Coastal Wildlife",
      subtitle: "Vinpearl Golf Nam Hoi An | IMG Worldwide",
      architect: "IMG Worldwide",
      courseName: "Vinpearl Golf Nam Hoi An",
      courseHref: "/courses/vietnam/vinpearl-nam-hoi-an/",
      pacing: "Morning Resort Round",
      transferTime: "25 mins door-to-door",
      whyItWorks:
        "Journey south through tranquil coastal fishing villages to Vinpearl Nam Hoi An. Characterized by wide fairways, sweeping white-sand dunes, and indigenous old-growth trees, it offers a scenic, forgiving round where local wildlife often roams the perimeter.",
      bullets: [
        "18 holes on IMG's expansive resort layout with massive natural sand dunes",
        "Generous landing areas paired with large undulating greens and water hazards",
        "Evening seafood dinner at an authentic local restaurant on Cua Dai Beach",
      ],
      logistics: [
        {
          label: "Stay",
          value:
            "<a href='/accommodations/vietnam/palm-gardens-hoi-an/' style='color: #D4AF37; text-decoration: underline; text-underline-offset: 4px;'>Palm Gardens Resort</a>",
        },
        {
          label: "Play",
          value:
            "<a href='/courses/vietnam/vinpearl-nam-hoi-an/' style='color: #D4AF37; text-decoration: underline; text-underline-offset: 4px;'>Vinpearl Golf Nam Hoi An</a>",
        },
        { label: "Distance", value: "25 minutes door-to-door private transfer" },
      ],
      images: [
        {
          url: "/images/courses/vietnam/vinpearl-nam-hoi-an/vinpearl-golf-nam-hoi-an-dunes-fairway-2.webp",
          caption: "Wide White-Sand Waste Areas Flanking the Pristine Fairways",
          alt: "Vinpearl Golf Nam Hoi An sand dunes fairway",
        },
        {
          url: "/images/courses/vietnam/vinpearl-nam-hoi-an/vinpearl-golf-nam-hoi-an-vietnam-1.webp",
          caption: "Vinpearl Golf Nam Hoi An — Sprawling Dunes and Water Hazards",
          alt: "Vinpearl Golf Nam Hoi An golf course fairway",
        },
        {
          url: "/images/courses/vietnam/vinpearl-nam-hoi-an/vinpearl-golf-nam-hoi-an-old-growth-trees-3.webp",
          caption: "Mature Coastal Casuarina Pines & Strategic Green Framing",
          alt: "Vinpearl Golf Nam Hoi An old-growth trees",
        },
        {
          url: "/images/courses/vietnam/vinpearl-nam-hoi-an/vinpearl-golf-nam-hoi-an-signature-hole-5.webp",
          caption: "Signature Island-Feel Hole with Expansive Water Reflections",
          alt: "Vinpearl Golf Nam Hoi An signature hole",
        },
        {
          url: "/images/courses/vietnam/vinpearl-nam-hoi-an/vinpearl-nam-hoi-an-aerial-clubhouse-view.webp",
          caption: "Modern Clubhouse and Practice Facilities at Vinpearl Nam Hoi An",
          alt: "Vinpearl Nam Hoi An aerial clubhouse view",
        },
      ],
      courseSpecs: {
        yardage: "7,125",
        par: "72",
        courseType: "Resort Dunes / Wetlands",
      },
    },
    {
      day: 4,
      id: "day-4",
      title: "The Flavors of Faifo & Countryside Jeep Safari",
      subtitle: "Rest Day: Heritage, Bespoke Craft & Street Food",
      architect: "Local Guardian Host",
      courseName: "Hoi An Heritage",
      pacing: "Tactical Rest & Cultural Exploration",
      transferTime: "10 mins to Ancient Town",
      whyItWorks:
        "The clubs take a well-earned rest. Embark on an open-air vintage Jeep safari through the countryside, watch local artisans craft silk lanterns, visit Hoi An's master tailors for custom linens, and dine alongside the Thu Bon River.",
      bullets: [
        "Vintage army Jeep excursion through peaceful organic vegetable villages and rice paddies",
        "VIP bespoke tailoring consultations at Hoi An's premier ateliers",
        "Evening street food discovery walk sampling White Rose dumplings and authentic Cao Lau noodles",
      ],
      logistics: [
        {
          label: "Stay",
          value:
            "<a href='/accommodations/vietnam/palm-gardens-hoi-an/' style='color: #D4AF37; text-decoration: underline; text-underline-offset: 4px;'>Palm Gardens Resort</a>",
        },
        { label: "Activity", value: "Vintage Jeep Safari & Tailoring Consultation" },
        { label: "Dining", value: "Hoi An Riverfront Street Food Safari" },
      ],
      images: [
        {
          url: "/images/destinations/vietnam/culture/hoi-an-lantern-boat.webp",
          caption: "Hoi An Ancient Town — Twilight Lantern Cruise on the Thu Bon River",
          alt: "Cultural Exploration in Hoi An",
        },
        {
          url: "/images/tours/vietnam/yaly-couture-experienced-tailor-hoi-an.webp",
          caption: "Bespoke Master Tailoring in Historic Shophouses",
          alt: "Hoi An custom bespoke suit and shirt tailoring craft",
        },
        {
          url: "/images/tours/vietnam/tok-restaurant-on-rice-paddies.webp",
          caption: "Tranquil Paddy-Side Countryside Dining Outside the Town",
          alt: "TOK Restaurant's Paddy-View Dining",
        },
        {
          url: "/images/destinations/vietnam/culture/vietnam-culture-lanterns.webp",
          caption: "Fresh Tra Que Herbs — The Essence of Central Vietnamese Cuisine",
          alt: "Fresh Vietnamese culinary ingredients and Tra Que herbs",
        },
        {
          url: "/images/accommodations/vietnam/palm-gardens-hoi-an/vietnam-luxury-hotel-palm-gardens-hoi-an-beachfront-3.webp",
          caption: "Afternoon Sea Breeze Lounging Back at Palm Gardens",
          alt: "Beachfront view at Palm Gardens Resort Hoi An",
        },
      ],
      courseSpecs: {
        yardage: "N/A",
        par: "N/A",
        courseType: "Cultural Jeep Safari",
      },
    },
    {
      day: 5,
      id: "day-5",
      title: "Tropical Parklands & Mountain Pass",
      subtitle: "Laguna Golf Lăng Cô | Sir Nick Faldo Design",
      architect: "Sir Nick Faldo",
      courseName: "Laguna Golf Lăng Cô",
      courseHref: "/courses/vietnam/laguna-lang-co/",
      pacing: "Scenic Excursion Round",
      transferTime: "65 mins via Hai Van Pass",
      whyItWorks:
        "The drive along the coastal mountains of the Hai Van Pass sets up a magical day. Sir Nick Faldo's design winds through dense tropical jungle, active rice paddies with grazing buffalo, and plays directly to the beach.",
      bullets: [
        "18 championship holes flanked by the East Sea and misty Bach Ma mountain peaks",
        "Unique routing featuring active rice paddies and natural granite rock outcrops",
        "Fresh lagoon seafood lunch in Lang Co before returning to the resort",
      ],
      logistics: [
        {
          label: "Stay",
          value:
            "<a href='/accommodations/vietnam/palm-gardens-hoi-an/' style='color: #D4AF37; text-decoration: underline; text-underline-offset: 4px;'>Palm Gardens Resort</a>",
        },
        {
          label: "Play",
          value:
            "<a href='/courses/vietnam/laguna-lang-co/' style='color: #D4AF37; text-decoration: underline; text-underline-offset: 4px;'>Laguna Golf Lăng Cô</a>",
        },
        { label: "Transit", value: "Scenic Hai Van Coastal Route" },
      ],
      images: [
        {
          url: "/images/courses/vietnam/laguna-lang-co/laguna-golf-lang-co-bach-ma-mountain-5.webp",
          caption: "Laguna Golf Lăng Cô — Beachside Greens Framed by Mountain Peaks",
          alt: "Beachside Greens at Laguna Golf Lang Co",
        },
        {
          url: "/images/courses/vietnam/laguna-lang-co/laguna-golf-lang-co-bach-ma-mountain-5.webp",
          caption: "Faldo's Masterpiece Where Ocean Waves Meet Lush Fairways",
          alt: "Laguna Lang Co Sir Nick Faldo beachfront green Vietnam",
        },
        {
          url: "/images/courses/vietnam/laguna-lang-co/laguna-golf-lang-co-nick-faldo-vietnam-1.webp",
          caption: "Bach Ma National Park Mountains Looming Over the Fairways",
          alt: "Laguna Lang Co mountain backdrop and tropical parkland fairways",
        },
        {
          url: "/images/courses/vietnam/laguna-lang-co/laguna-golf-lang-co-jungle-tropical-3.webp",
          caption: "Active Rice Paddy Hazards — Authentically Vietnamese Golf",
          alt: "Laguna Lang Co rice paddies and water hazard fairway routing",
        },
        {
          url: "/images/courses/vietnam/laguna-lang-co/laguna-golf-lang-co-nick-faldo-vietnam-1.webp",
          caption: "Immaculate Fairway Conditions and Strategic Bunkering",
          alt: "Laguna Golf Lang Co Sir Nick Faldo signature fairway turf Vietnam",
        },
      ],
      courseSpecs: {
        yardage: "7,101",
        par: "71",
        courseType: "Parkland / Oceanfront Dunes",
      },
    },
    {
      day: 6,
      id: "day-6",
      title: "Mountain Elevation & Farewell Toast",
      subtitle: "Ba Na Hills Golf Club | Luke Donald Masterpiece",
      architect: "Luke Donald / IMG",
      courseName: "Ba Na Hills Golf Club",
      courseHref: "/courses/vietnam/ba-na-hills/",
      pacing: "Highland Championship Finale",
      transferTime: "50 mins door-to-door",
      whyItWorks:
        "The grand finale ascends into the Truong Son Mountains. Luke Donald's design is Asia's most awarded mountain course—lush highland air, towering ravines, and dramatic elevation shifts followed by a celebratory farewell dinner.",
      bullets: [
        "18 holes on Vietnam's premier highland course with dramatic elevation changes",
        "Tour match play final round with official AGS scorecards and caddie coordination",
        "Celebratory farewell dinner at Palm Gardens Resort overlooking Cua Dai Beach",
      ],
      logistics: [
        {
          label: "Stay",
          value:
            "<a href='/accommodations/vietnam/palm-gardens-hoi-an/' style='color: #D4AF37; text-decoration: underline; text-underline-offset: 4px;'>Palm Gardens Resort</a>",
        },
        {
          label: "Play",
          value:
            "<a href='/courses/vietnam/ba-na-hills/' style='color: #D4AF37; text-decoration: underline; text-underline-offset: 4px;'>Ba Na Hills Golf Club</a>",
        },
        { label: "Celebration", value: "Farewell Champions Dinner at Palm Gardens Resort" },
      ],
      images: [
        {
          url: "/images/courses/vietnam/ba-na-hills/ba-na-hills-aerial-sunset.webp",
          caption: "Ba Na Hills Golf Club — Majestic Mountain Elevation",
          alt: "MOUNTAIN ELEVATION at Ba Na Hills Golf Club",
        },
        {
          url: "/images/courses/vietnam/ba-na-hills/ba-na-hills-golf-club-da-nang-vietnam-1.webp",
          caption: "Luke Donald's Rainforest Fairways and Pristine Approach Greens",
          alt: "Ba Na Hills pristine green complex surrounded by tropical jungle",
        },
        {
          url: "/images/courses/vietnam/ba-na-hills/ba-na-hills-hole-12jpeg.webp",
          caption: "Hole 12 Island Green Surrounded by Jungle Waters",
          alt: "Ba Na Hills Golf Club challenging water carry hole 12",
        },
        {
          url: "/images/courses/vietnam/ba-na-hills/ba-na-hills-golf-club-luke-donald-design-3.webp",
          caption: "Dramatic Elevation Drops Across the Central Highland Valley",
          alt: "Valley panoramic view at Ba Na Hills Golf Club Luke Donald design",
        },
        {
          url: "/images/homepage/ags-difference/horn-of-plenty-winner.webp",
          caption: "The Horn of Plenty — Tour Champion Awards Ceremony",
          alt: "AGS Signature Ritual: The Horn of Plenty - Premium Post-Round Winners Celebration",
        },
      ],
      courseSpecs: {
        yardage: "7,857",
        par: "72",
        courseType: "Highland Mountain",
      },
    },
    {
      day: 7,
      id: "day-7",
      title: "Farewell to Hoi An",
      subtitle: "Morning Ocean Stroll & VIP Airport Transfer",
      architect: "AGS Concierge",
      courseName: "Departure",
      pacing: "Relaxed Departure",
      transferTime: "35 mins to DAD Airport",
      whyItWorks:
        "Savor a final morning coffee on your private balcony, listening to the gentle crash of the ocean waves. A solitary beach walk along the sands of Cua Dai reflects an unforgettable week before your private chauffeur transfers you to Da Nang Airport.",
      bullets: [
        "Leisurely buffet breakfast overlooking the ocean at Palm Gardens Resort",
        "Morning beach stroll or final swim in the 45-meter tropical resort pool",
        "Private VIP executive transfer to Da Nang International Airport (DAD)",
      ],
      logistics: [
        {
          label: "Stay",
          value:
            "<a href='/accommodations/vietnam/palm-gardens-hoi-an/' style='color: #D4AF37; text-decoration: underline; text-underline-offset: 4px;'>Palm Gardens Resort</a>",
        },
        { label: "Transfer", value: "Private VIP Executive Transfer to DAD" },
        { label: "Inclusions", value: "Full Luggage Coordination & Flight Monitoring" },
      ],
      images: [
        {
          url: "/images/accommodations/vietnam/palm-gardens-hoi-an/vietnam-luxury-hotel-palm-gardens-hoi-an-beachfront-3.webp",
          caption: "A Final Morning Walk Along the Sands of Cua Dai Beach",
          alt: "Beachfront view at Palm Gardens Resort Hoi An",
        },
        {
          url: "/images/accommodations/vietnam/palm-gardens-hoi-an/vietnam-luxury-hotel-palm-gardens-hoi-an-outdoor-pool-5.webp",
          caption: "Farewell Poolside Coffee in the Tropical Garden Grounds",
          alt: "Outdoor pool at Palm Gardens Resort Hoi An",
        },
        {
          url: "/images/accommodations/vietnam/palm-gardens-hoi-an/vietnam-luxury-hotel-palm-gardens-hoi-an-aerial-2.webp",
          caption: "Looking Back Across the 5 Hectares of Palm Gardens Resort",
          alt: "Aerial view of Palm Gardens Resort Hoi An",
        },
        {
          url: "/images/accommodations/vietnam/palm-gardens-hoi-an/vietnam-luxury-hotel-palm-gardens-hoi-an-bungalow-4.webp",
          caption: "Tranquil Garden Bungalow Balcony Savoring the Ocean Breeze",
          alt: "Garden bungalow suite at Palm Gardens Resort Hoi An",
        },
        {
          url: "/images/accommodations/vietnam/palm-gardens-hoi-an/vietnam-luxury-hotel-palm-gardens-hoi-an-hero-1.webp",
          caption: "Palm Gardens Resort & Spa — A Truly Blissful Vietnamese Golf Retreat",
          alt: "Palm Gardens Resort Hoi An entrance",
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
    name: "Palm Gardens Beach Resort & Spa",
    tagline:
      "A 5-star beachfront retreat spanning 5 hectares of lush landscaped tropical gardens on Cua Dai Beach.",
    location: "Cua Dai Beach, Hoi An, Vietnam",
    href: "/accommodations/vietnam/palm-gardens-hoi-an/",
    overview:
      "Set directly along the golden sands of Cua Dai Beach, Palm Gardens Beach Resort & Spa Hoi An blends traditional Vietnamese architectural heritage with modern 5-star luxury. With its 45-meter free-form pool, full-service spa, beachfront dining pavilions, and tranquil frangipani walkways, it provides an idyllic, unpack-once retreat just 10 minutes from Hoi An Ancient Town.",
    categories: [
      { id: "exterior", label: "Pool & Beach", count: 4 },
      { id: "suites", label: "Suites & Bungalows", count: 4 },
      { id: "wellness", label: "Gardens & Spa", count: 2 },
    ],
    photos: [
      {
        url: "/images/accommodations/vietnam/palm-gardens-hoi-an/vietnam-luxury-hotel-palm-gardens-hoi-an-hero-1.webp",
        caption: "Palm Gardens Resort & Spa — Grand Beachfront Sanctuary Entrance",
        category: "exterior",
      },
      {
        url: "/images/accommodations/vietnam/palm-gardens-hoi-an/vietnam-luxury-hotel-palm-gardens-hoi-an-aerial-2.webp",
        caption: "Spectacular Aerial View Across 5 Hectares of Coastal Frangipani Grounds",
        category: "exterior",
      },
      {
        url: "/images/accommodations/vietnam/palm-gardens-hoi-an/vietnam-luxury-hotel-palm-gardens-hoi-an-outdoor-pool-5.webp",
        caption: "Free-Form 45-Meter Pool Overlooking Cua Dai Beach",
        category: "exterior",
      },
      {
        url: "/images/accommodations/vietnam/palm-gardens-hoi-an/vietnam-luxury-hotel-palm-gardens-hoi-an-beachfront-3.webp",
        caption: "Direct Access to Ocean Loungers and the Calming East Sea",
        category: "exterior",
      },
      {
        url: "/images/accommodations/vietnam/palm-gardens-hoi-an/vietnam-luxury-hotel-palm-gardens-hoi-an-bungalow-4.webp",
        caption: "Private Garden Bungalow with Shaded Veranda & Sun Loungers",
        category: "suites",
      },
      {
        url: "/images/accommodations/vietnam/palm-gardens-hoi-an/vietnam-luxury-hotel-palm-gardens-hoi-an-deluxe-ocean-villa-6.webp",
        caption: "Deluxe Ocean Villa Suite with Handcrafted Hardwood Furniture",
        category: "suites",
      },
      {
        url: "/images/accommodations/vietnam/palm-gardens-hoi-an/vietnam-luxury-hotel-palm-gardens-hoi-an-beachfront-bungalow.webp",
        caption: "Beachfront Bungalow with Uninterrupted Oceanfront Views",
        category: "suites",
      },
      {
        url: "/images/accommodations/vietnam/palm-gardens-hoi-an/vietnam-luxury-hotel-palm-gardens-hoi-an-palm-suite-bath-7.webp",
        caption: "En-suite Marble Bathroom with Deep Soaking Tub",
        category: "suites",
      },
      {
        url: "/images/accommodations/vietnam/palm-gardens-hoi-an/vietnam-luxury-hotel-palm-gardens-hoi-an-hero.webp",
        caption: "Tropical Frangipani Walkways Throughout the Resort Grounds",
        category: "wellness",
      },
      {
        url: "/images/accommodations/vietnam/palm-gardens-hoi-an/vietnam-luxury-hotel-palm-gardens-hoi-an-outdoor.webp",
        caption: "Palm Spa Pavilions for Post-Round Muscle Recovery",
        category: "wellness",
      },
    ],
    inclusions: [
      {
        icon: "🏊‍♂️",
        title: "45-Meter Free-Form Pool",
        desc: "Expansive swimming pool steps from the beach with poolside towel and cocktail service.",
      },
      {
        icon: "💆‍♂️",
        title: "Palm Spa Sanctuary",
        desc: "Full-service spa offering deep tissue sports massages designed specifically for golfers.",
      },
      {
        icon: "🏖️",
        title: "Private Beachfront",
        desc: "Private sun loungers and umbrellas along the calm waters of Cua Dai Beach.",
      },
      {
        icon: "🍳",
        title: "Daily Buffet Breakfast",
        desc: "International and Vietnamese breakfast spread overlooking the tropical gardens.",
      },
    ],
  },
  inclusions: {
    included: [
      {
        title: "4 Championship Rounds (72 Holes)",
        desc: "Montgomerie Links, Vinpearl Nam Hoi An, Laguna Lăng Cô, and Ba Na Hills with pre-booked morning tee times.",
      },
      {
        title: "1:1 Dedicated Caddies & Shared Motorized Carts",
        desc: "Professional caddie assigned to every player for expert course knowledge, yardages, and green reading.",
      },
      {
        title: "6 Nights 5-Star Beachfront Resort Accommodation",
        desc: "Deluxe accommodation at Palm Gardens Beach Resort & Spa Hoi An with daily buffet breakfast.",
      },
      {
        title: "Hoi An Vintage Jeep & Countryside Safari",
        desc: "Guided open-top Jeep excursion exploring traditional villages, organic gardens, and artisan shophouses.",
      },
      {
        title: "Private VIP Executive Vehicle Fleet",
        desc: "All airport, golf course, and town transfers in dedicated air-conditioned VIP vehicles with cold refreshments.",
      },
      {
        title: "AGS Local Guardian Concierge Support",
        desc: "On-the-ground support coordinating tee times, caddie assignments, dining reservations, and live scoring.",
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
        desc: "Open-top vintage Jeep safaris, silk lantern workshops, and private catamaran cruises are optional add-ons that our team can quote and organize for your group upon request.",
      },
      {
        title: "Personal Travel & Golf Equipment Insurance",
        desc: "We strongly advise comprehensive travel insurance covering international golf gear, baggage transit, and medical care.",
      },
    ],
  },
  pricing: {
    guidePriceUSD: "$1,580",
    guidePriceAUD: "~$2,440 AUD",
    perGolferLabel: "Per golfer, twin-share • Covers Accommodation, Golf Green Fees (with Carts & Caddies) & Private Fleet Transfers",
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
      "* Guide pricing strictly covers your core golf package: championship green fees, carts, caddies, luxury beachfront resort accommodation, and private vehicle fleet transfers. All dining recommendations, rest-day Jeep safaris, and cultural excursions are suggested highlights that our concierge team can seamlessly organize and book for your group on request.",
  },
  faqs: [
    {
      q: "Which golf courses are included in Hoi An Beachfront Bliss?",
      a: "The tour features 4 championship rounds: Montgomerie Links Vietnam, Vinpearl Golf Nam Hoi An, Laguna Golf Lăng Cô (Sir Nick Faldo), and Ba Na Hills Golf Club (Luke Donald).",
    },
    {
      q: "Where is the hotel located relative to the courses and Hoi An town?",
      a: "Palm Gardens Beach Resort is located on Cua Dai Beach in Hoi An, just 10 minutes from Hoi An Ancient Town, 15 minutes from Montgomerie Links, and 25 minutes from Vinpearl Nam Hoi An.",
    },
    {
      q: "What is included with our golf green fees?",
      a: "Each 18-hole championship round includes pre-booked morning green fees, shared motorized golf carts, 1:1 dedicated caddie service, practice range balls, and door-to-door private VIP vehicle transfers.",
    },
    {
      q: "Can our group customize the itinerary or add extra nights?",
      a: "Absolutely. We can swap courses (such as adding Hoiana Shores), upgrade to beachfront bungalow suites, or extend your stay with extra rest days.",
    },
  ],
  schema: {
    name: "Hoi An Beachfront Bliss",
    description:
      "A 7-Day luxury golf retreat in Central Vietnam playing Montgomerie Links, Vinpearl Nam Hoi An, Laguna Lang Co, and Ba Na Hills, anchored at Palm Gardens Beach Resort & Spa.",
    canonicalUrl: "https://www.asiagolfspecialists.com/tours/hoi-an-beachfront-bliss/",
    heroImage:
      "https://www.asiagolfspecialists.com/images/courses/vietnam/laguna-lang-co/laguna-golf-lang-co-jungle-tropical-3.webp",
    minPrice: "1580",
    priceCurrency: "USD",
  },
};
