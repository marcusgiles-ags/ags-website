import type { TourData } from "@/types/tour";

export const theCoastalSprintData: TourData = {
  slug: "the-coastal-sprint",
  titlePrefix: "The Coastal",
  titleHighlight: "Sprint",
  subtitle:
    "A high-impact 4-day, 3-night express golf escape to Central Vietnam. Play two world-class contrasting masterpieces—Hoiana Shores and Ba Na Hills—based at Palm Gardens Beach Resort & Spa in Hoi An.",
  country: "Vietnam",
  flag: "🇻🇳",
  heroBadge: "🇻🇳 Express Vietnam Golf Circuit • Da Nang & Hoi An",
  heroImage:
    "/images/courses/vietnam/ba-na-hills/ba-na-hills-golf-club-night-golf-4.webp",
  quickStats: [
    { label: "Duration", value: "4 Days / 3 Nights", icon: "🗓️" },
    { label: "Championship Golf", value: "2 Rounds (36 Holes)", icon: "⛳" },
    { label: "Luxury Sanctuary", value: "Palm Gardens Beach Resort", icon: "🏖️" },
    { label: "Guide Price", value: "From $890 USD", sub: "(~$1,380 AUD)", icon: "💎" },
  ],
  curatorBrief: {
    badge: "Curator's Overview",
    title: "Maximum Golf, Zero Wasted Motion",
    paragraphs: [
      "Engineered for time-pressed Australian golfers taking a long weekend or short break, The Coastal Sprint strips away all logistical friction. You touch down in Da Nang, transfer straight to your 5-star beachfront resort in Hoi An, and confront two of Asia's most celebrated golf courses back-to-back.",
      "By pairing Robert Trent Jones Jr.'s windswept coastal links at Hoiana Shores with Luke Donald's mist-cloaked mountain challenge at Ba Na Hills, you experience the absolute best of Vietnam's contrasting golf topography in just four days. Seamless VIP vehicle transfers, pre-booked prime morning tee times, and evenings immersed in the lantern-lit culinary scene of ancient Hoi An make every hour count.",
    ],
    pacingLabel: "Tour Pacing",
    pacingDesc: "Express Sprint (2 Rounds in 3 Nights, 1 Resort Base, Zero Repacking)",
    quote: "The ultimate 4-day golf reset: links on Friday, mountains on Saturday, home by Sunday.",
    author: "AGS Senior Tour Director",
  },
  chapters: [
    {
      day: 1,
      id: "day-1",
      title: "Arrival & Coastal Acclimation",
      subtitle: "Welcome to Hoi An & Ancient Town Stroll",
      architect: "AGS Host Welcoming",
      courseName: "Palm Gardens Beach Resort",
      courseHref: "/accommodations/vietnam/palm-gardens-hoi-an/",
      pacing: "Effortless Arrival",
      transferTime: "35 mins from DAD Airport",
      whyItWorks:
        "Skip the luggage queues and taxi haggles. A dedicated private AGS chauffeur whisks your party straight from Da Nang Airport to Palm Gardens Resort on Cua Dai Beach, giving you time for an afternoon swim and sunset stroll through Hoi An's silk-lantern streets.",
      bullets: [
        "Private VIP airport arrival meet-and-greet at Da Nang International Airport (DAD)",
        "Exclusive check-in at Palm Gardens Beach Resort & Spa nestled in 5 hectares of tropical gardens",
        "Evening stroll through UNESCO World Heritage Hoi An Ancient Town under glowing silk lanterns",
      ],
      logistics: [
        {
          label: "Stay",
          value:
            "<a href='/accommodations/vietnam/palm-gardens-hoi-an/' style='color: #D4AF37; text-decoration: underline; text-underline-offset: 4px;'>Palm Gardens Resort</a>",
        },
        { label: "Transit", value: "Private VIP Executive Vehicle" },
        { label: "Evening", value: "Hoi An Ancient Town Lantern Stroll" },
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
          caption: "Private Coastal Beachfront with Golden Sands and Ocean Loungers",
          alt: "Beachfront view at Palm Gardens Resort Hoi An",
        },
        {
          url: "/images/accommodations/vietnam/palm-gardens-hoi-an/vietnam-luxury-hotel-palm-gardens-hoi-an-bungalow-4.webp",
          caption: "Garden View Bungalow Suites Nestled in Tropical Frangipani",
          alt: "Garden bungalow suite at Palm Gardens Resort Hoi An",
        },
        {
          url: "/images/destinations/vietnam/culture/hoi-an-lantern-boat.webp",
          caption: "Hoi An Ancient Town — Twilight Lantern Reflections on the River",
          alt: "Hoi An ancient town lantern boat river cruise Vietnam",
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
      title: "Links Perfection by the East Sea",
      subtitle: "Hoiana Shores Golf Club | Robert Trent Jones II",
      architect: "Robert Trent Jones Jr.",
      courseName: "Hoiana Shores Golf Club",
      courseHref: "/courses/vietnam/hoiana-shores/",
      pacing: "Morning Championship Round",
      transferTime: "20 mins door-to-door",
      whyItWorks:
        "Waste zero time diving into the action. Hoiana Shores brings pure Scottish links architecture to tropical shores. The back nine plays right along the crashing surf of the East Sea, demanding precision shotmaking in coastal breezes.",
      bullets: [
        "18 holes on Vietnam's premier coastal links with personal 1:1 caddies and shared carts",
        "Spectacular closing stretch along the shoreline with views of Cham Island",
        "Post-round restorative spa treatment back at Palm Gardens Resort",
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
            "<a href='/courses/vietnam/hoiana-shores/' style='color: #D4AF37; text-decoration: underline; text-underline-offset: 4px;'>Hoiana Shores Golf Club</a>",
        },
        { label: "Distance", value: "20 minutes door-to-door private transfer" },
      ],
      images: [
        {
          url: "/images/courses/vietnam/hoiana-shores/hoiana-heart-bunker.webp",
          caption: "Hoiana Shores — Robert Trent Jones II's Iconic Heart Bunker",
          alt: "Hoiana Shores Golf Club heart bunker coastal links Vietnam",
        },
        {
          url: "/images/courses/vietnam/ba-na-hills/ba-na-hills-golf-club-night-golf-4.webp",
          caption: "Fairways Rolling Directly Against the East Sea Shoreline",
          alt: "Hoiana Shores beachfront golf course Vietnam",
        },
        {
          url: "/images/courses/vietnam/hoiana-shores/hoiana-shores-golf-club-dunes-hoi-an-4.webp",
          caption: "Undulating Natural Sand Dunes & Strategic Waste Areas",
          alt: "Hoiana Shores dunes fairway routing",
        },
        {
          url: "/images/courses/vietnam/hoiana-shores/hoiana-17backwidelow-0508-scaled.webp",
          caption: "Hole 17 Ocean Links Looking Out to Cham Island",
          alt: "Hoiana Shores 17th hole ocean view",
        },
        {
          url: "/images/courses/vietnam/hoiana-shores/club-house-scaled.webp",
          caption: "Palatial 19th Hole Clubhouse Sunset Terrace",
          alt: "Hoiana Shores luxury golf clubhouse terrace and dining",
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
      title: "Mountain Mastery & Truong Son Vistas",
      subtitle: "Ba Na Hills Golf Club | Luke Donald Design",
      architect: "Luke Donald / IMG",
      courseName: "Ba Na Hills Golf Club",
      courseHref: "/courses/vietnam/ba-na-hills/",
      pacing: "Mountain Expedition Round",
      transferTime: "50 mins door-to-door",
      whyItWorks:
        "From sea-level sand dunes to mountain peaks in 24 hours. Ba Na Hills delivers a totally different test—cooler highland air, jaw-dropping elevation drops, and lush virgin rainforest flanking every hole.",
      bullets: [
        "18 championship holes carved through dramatic highland terrain with Luke Donald's bunkering",
        "Severe elevation changes demanding strategic club selection and accurate iron play",
        "Celebratory farewell dinner in Hoi An Ancient Town with local craft beers",
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
        { label: "Celebration", value: "Farewell Dinner & Mates' Debrief in Ancient Town" },
      ],
      images: [
        {
          url: "/images/courses/vietnam/ba-na-hills/ba-na-hills-aerial-sunset.webp",
          caption: "Ba Na Hills Golf Club — Twilight Mountain Splendor",
          alt: "Sunset aerial view over Ba Na Hills Golf Club",
        },
        {
          url: "/images/courses/vietnam/ba-na-hills/ba-na-hills-golf-club-da-nang-vietnam-1.webp",
          caption: "Luke Donald's Rainforest Layout & Signature Bunkering",
          alt: "Ba Na Hills pristine green complex surrounded by tropical jungle",
        },
        {
          url: "/images/courses/vietnam/ba-na-hills/ba-na-hills-hole-12jpeg.webp",
          caption: "Hole 12 Island-Style Green & Mountain Water Hazard",
          alt: "Ba Na Hills Golf Club hole 12 island green Da Nang",
        },
        {
          url: "/images/courses/vietnam/ba-na-hills/ba-na-hills-golf-club-luke-donald-design-3.webp",
          caption: "Dramatic Elevation Drops Across the Central Valley",
          alt: "Valley panoramic view at Ba Na Hills Golf Club Luke Donald design",
        },
        {
          url: "/images/courses/vietnam/ba-na-hills/ba-na-hills-golf-club-hole-11-night-high-res.webp",
          caption: "Championship Floodlighting on the Back Nine",
          alt: "Ba Na Hills Golf Club Hole 11 lit under floodlights at night",
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
      title: "Short & Sweet Departure",
      subtitle: "Morning Beach Walk & VIP Airport Transfer",
      architect: "AGS Concierge",
      courseName: "Departure",
      pacing: "Relaxed Departure",
      transferTime: "35 mins to DAD Airport",
      whyItWorks:
        "No crack-of-dawn rush. Savor breakfast overlooking Cua Dai Beach, take a morning dip in the pool, and let your private chauffeur handle luggage and airport transit with precision timing.",
      bullets: [
        "Leisurely buffet breakfast overlooking the ocean at Palm Gardens Resort",
        "Final morning beach stroll or restorative dip in the resort's 45-meter pool",
        "Private VIP executive transfer to Da Nang International Airport (DAD)",
      ],
      logistics: [
        {
          label: "Stay",
          value:
            "<a href='/accommodations/vietnam/palm-gardens-hoi-an/' style='color: #D4AF37; text-decoration: underline; text-underline-offset: 4px;'>Palm Gardens Resort</a>",
        },
        { label: "Transfer", value: "Private VIP Executive Transfer to DAD" },
        { label: "Inclusions", value: "Luggage Coordination & Flight Monitoring" },
      ],
      images: [
        {
          url: "/images/accommodations/vietnam/palm-gardens-hoi-an/vietnam-luxury-hotel-palm-gardens-hoi-an-aerial-2.webp",
          caption: "Aerial Panorama of Palm Gardens Resort on Cua Dai Beach",
          alt: "Aerial view of Palm Gardens Resort Hoi An",
        },
        {
          url: "/images/accommodations/vietnam/palm-gardens-hoi-an/vietnam-luxury-hotel-palm-gardens-hoi-an-outdoor-pool-5.webp",
          caption: "Farewell Morning Swim Before Your Flight Home",
          alt: "Outdoor pool at Palm Gardens Resort Hoi An",
        },
        {
          url: "/images/accommodations/vietnam/palm-gardens-hoi-an/vietnam-luxury-hotel-palm-gardens-hoi-an-beachfront-3.webp",
          caption: "Peaceful Morning Sands Along the Cua Dai Coastline",
          alt: "Beachfront view at Palm Gardens Resort Hoi An",
        },
        {
          url: "/images/accommodations/vietnam/palm-gardens-hoi-an/vietnam-luxury-hotel-palm-gardens-hoi-an-bungalow-4.webp",
          caption: "Tranquil Tropical Gardens Surrounding the Bungalows",
          alt: "Garden bungalow suite at Palm Gardens Resort Hoi An",
        },
        {
          url: "/images/courses/vietnam/hoiana-shores/club-house-scaled.webp",
          caption: "Memories of Central Vietnam — High-Speed, High-Impact Golf",
          alt: "Hoiana Shores luxury golf clubhouse terrace and dining",
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
      "A 5-star beachfront haven set on 5 hectares of lush landscaped gardens on Cua Dai Beach.",
    location: "Cua Dai Beach, Hoi An, Vietnam",
    href: "/accommodations/vietnam/palm-gardens-hoi-an/",
    overview:
      "Nestled along the pristine sands of Cua Dai Beach, Palm Gardens Beach Resort & Spa Hoi An blends traditional Vietnamese architectural heritage with modern luxury. Featuring a massive 45-meter free-form pool, full-service spa, beachfront dining pavilions, and lush tropical gardens, it serves as the ultimate restorative base for an express golf escape.",
    categories: [
      { id: "exterior", label: "Pool & Beach", count: 4 },
      { id: "suites", label: "Suites & Bungalows", count: 4 },
      { id: "wellness", label: "Gardens & Spa", count: 2 },
    ],
    photos: [
      {
        url: "/images/accommodations/vietnam/palm-gardens-hoi-an/vietnam-luxury-hotel-palm-gardens-hoi-an-hero-1.webp",
        caption: "Palm Gardens Resort & Spa — Welcoming Beachfront Entrance",
        category: "exterior",
      },
      {
        url: "/images/accommodations/vietnam/palm-gardens-hoi-an/vietnam-luxury-hotel-palm-gardens-hoi-an-aerial-2.webp",
        caption: "Spectacular Aerial View Across 5 Hectares of Tropical Gardens",
        category: "exterior",
      },
      {
        url: "/images/accommodations/vietnam/palm-gardens-hoi-an/vietnam-luxury-hotel-palm-gardens-hoi-an-outdoor-pool-5.webp",
        caption: "Free-Form Swimming Pool Surrounded by Coconut Palms",
        category: "exterior",
      },
      {
        url: "/images/accommodations/vietnam/palm-gardens-hoi-an/vietnam-luxury-hotel-palm-gardens-hoi-an-beachfront-3.webp",
        caption: "Direct Access to the Golden Sands of Cua Dai Beach",
        category: "exterior",
      },
      {
        url: "/images/accommodations/vietnam/palm-gardens-hoi-an/vietnam-luxury-hotel-palm-gardens-hoi-an-bungalow-4.webp",
        caption: "Private Garden Bungalow with Shaded Veranda",
        category: "suites",
      },
      {
        url: "/images/accommodations/vietnam/palm-gardens-hoi-an/vietnam-luxury-hotel-palm-gardens-hoi-an-deluxe-ocean-villa-6.webp",
        caption: "Deluxe Ocean Villa Suite with Handcrafted Hardwood Furniture",
        category: "suites",
      },
      {
        url: "/images/accommodations/vietnam/palm-gardens-hoi-an/vietnam-luxury-hotel-palm-gardens-hoi-an-beachfront-bungalow.webp",
        caption: "Beachfront Bungalow with Uninterrupted Sea Views",
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
        desc: "Expansive swimming pool steps from the beach with poolside towel and bar service.",
      },
      {
        icon: "💆‍♂️",
        title: "Palm Spa Sanctuary",
        desc: "Full-service spa offering deep tissue and sports massages designed for golfers.",
      },
      {
        icon: "🏖️",
        title: "Private Beachfront",
        desc: "Private loungers and umbrellas along the calm waters of Cua Dai Beach.",
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
        title: "2 Championship Rounds (36 Holes)",
        desc: "Hoiana Shores Golf Club and Ba Na Hills Golf Club with pre-booked morning tee times.",
      },
      {
        title: "1:1 Dedicated Caddies & Shared Motorized Carts",
        desc: "Personal caddie assigned to every player for expert course knowledge and green reading.",
      },
      {
        title: "3 Nights 5-Star Resort Accommodation",
        desc: "Deluxe accommodation at Palm Gardens Beach Resort & Spa Hoi An with daily buffet breakfast.",
      },
      {
        title: "Private VIP Executive Vehicle Fleet",
        desc: "All airport, golf course, and town transfers in dedicated air-conditioned VIP vehicles.",
      },
      {
        title: "AGS Local Guardian Concierge Support",
        desc: "On-the-ground support coordinating tee times, caddie assignments, and restaurant bookings.",
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
        desc: "Extra twilight golf rounds, countryside excursions, and spa treatments are optional add-ons that our team can quote and organize for your group upon request.",
      },
      {
        title: "Personal Travel & Golf Equipment Insurance",
        desc: "We strongly advise comprehensive travel insurance covering international golf gear, baggage transit, and medical care.",
      },
    ],
  },
  pricing: {
    guidePriceUSD: "$890",
    guidePriceAUD: "~$1,380 AUD",
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
      "* Guide pricing strictly covers your core golf package: championship green fees, carts, caddies, luxury resort accommodation, and private vehicle fleet transfers. All dining recommendations and cultural excursions are suggested highlights that our concierge team can seamlessly organize and book for your group on request.",
  },
  faqs: [
    {
      q: "Which golf courses are played on The Coastal Sprint?",
      a: "The tour includes 2 championship rounds: Hoiana Shores Golf Club (Robert Trent Jones Jr.) and Ba Na Hills Golf Club (Luke Donald).",
    },
    {
      q: "Can this 4-day tour be customized with an extra round?",
      a: "Yes. Many guests arrive early on Day 1 or play a twilight round at Montgomerie Links or BRG Da Nang. We can tailor the schedule to fit your flight times.",
    },
    {
      q: "Where is the hotel located relative to Hoi An and the courses?",
      a: "Palm Gardens Beach Resort is located on Cua Dai Beach in Hoi An, just 10 minutes from Hoi An Ancient Town and 20 minutes from Hoiana Shores Golf Club.",
    },
    {
      q: "What is included with our golf green fees?",
      a: "Each 18-hole championship round includes pre-booked prime morning green fees, shared motorized golf carts, 1:1 dedicated caddie service, and private round-trip VIP vehicle transfers.",
    },
  ],
  schema: {
    name: "The Coastal Sprint",
    description:
      "A 4-Day luxury Da Nang and Hoi An golf escape featuring Hoiana Shores and Ba Na Hills, anchored at Palm Gardens Beach Resort & Spa.",
    canonicalUrl: "https://www.asiagolfspecialists.com/tours/the-coastal-sprint/",
    heroImage:
      "https://www.asiagolfspecialists.com/images/courses/vietnam/ba-na-hills/ba-na-hills-golf-club-night-golf-4.webp",
    minPrice: "890",
    priceCurrency: "USD",
  },
};
