import type { TourData } from "@/types/tour";

export const vietnamCentralCoastData: TourData = {
  slug: "vietnam-central-coast",
  titlePrefix: "The An Bang",
  titleHighlight: "Invitational",
  subtitle:
    "A 7-day flagship sojourn along Vietnam's Golf Coast. 4 championship rounds across Luke Donald, Robert Trent Jones Jr., Colin Montgomerie, and Jack Nicklaus layouts, based at your private beachfront villa estate in An Bang.",
  country: "Vietnam",
  flag: "🇻🇳",
  heroBadge: "🇻🇳 Vietnam Flagship Tournament Circuit • Da Nang & Hoi An",
  heroImage:
    "/images/courses/vietnam/hoiana-shores/hoiana-heart-bunker.webp",
  quickStats: [
    { label: "Duration", value: "7 Days / 6 Nights", icon: "🗓️" },
    { label: "Championship Golf", value: "4 Rounds (72 Holes)", icon: "⛳" },
    { label: "Luxury Sanctuary", value: "Private Beachfront Villa", icon: "🏖️" },
    { label: "Guide Price", value: "From $1,550 USD", sub: "(~$2,390 AUD)", icon: "💎" },
  ],
  curatorBrief: {
    badge: "Curator's Overview",
    title: "The Ultimate Mates' Tournament Compound",
    paragraphs: [
      "The An Bang Invitational was born from a simple insight: elite traveling golf groups don't want hotel lobby queues, shared tourist buses, or dining separated across a hundred restaurant tables. They want their own private beachfront headquarters with a pool, cold beers on tap, private caddies, and championship fairways.",
      "Anchored at Holiday Villa An Bang right on the sand of Central Vietnam, this 7-day flagship tour delivers a competitive match-play format across four contrasting masterpieces: the mountain heights of Ba Na Hills, the roaring ocean links of Hoiana Shores, the boutique bunkering of Montgomerie Links, and the bulkhead stadium drama of BRG Nicklaus. Curated chef dinners, poolside recovery rituals, and our signature Horn of Plenty trophy ceremony complete the experience.",
    ],
    pacingLabel: "Tour Pacing",
    pacingDesc: "Tournament Pacing (4 Rounds, 1 Sartorial Rest Day, Zero Hotel Swaps)",
    quote: "True tournament camaraderie happens in the garden pool after the round.",
    author: "AGS Founder & Central Coast Guardian",
  },
  chapters: [
    {
      day: 1,
      id: "day-1",
      title: "The Villa Arrival & Coastal Acclimation",
      subtitle: "From Runway to Beachfront Living",
      architect: "AGS Host Welcoming",
      courseName: "An Bang Beachfront Estate",
      courseHref: "/accommodations/vietnam/an-bang-beach-villas/",
      pacing: "Effortless Arrival",
      transferTime: "30 mins from DAD Airport",
      whyItWorks:
        "Forget the lobby queues of 500-room international resorts. Enter your private beachfront estate in the heart of An Bang fishing village, step onto the sands of the East Sea, and settle in with sunset beers on the lawn.",
      bullets: [
        "Private VIP arrival escort from Da Nang International Airport (DAD)",
        "Exclusive whole-villa check-in with cold towels, welcome refreshments, and tournament briefing",
        "Late afternoon swim directly out your private beach gate followed by village exploring",
      ],
      logistics: [
        {
          label: "Stay",
          value:
            "<a href='/accommodations/vietnam/an-bang-beach-villas/' style='color: #D4AF37; text-decoration: underline; text-underline-offset: 4px;'>Holiday Villa An Bang</a>",
        },
        { label: "Transit", value: "Private AGS VIP High-Roof Fleet" },
        { label: "The Vibe", value: "Immediate transition to coastal-calm" },
      ],
      images: [
        {
          url: "/images/accommodations/vietnam/an-bang-holiday-villa/vietnam-private-villa-an-bang-holiday-villa-beach-lifestyle-hero.webp",
          caption: "Holiday Villa An Bang - Your Private Beachfront Compound in Hoi An",
          alt: "Holiday Villa An Bang beachfront luxury private estate Hoi An",
        },
        {
          url: "/images/accommodations/vietnam/an-bang-holiday-villa/holiday-villa-outdoor-living.webp",
          caption: "Spacious Open-Air Living Pavilion — Post-Travel Relaxation",
          alt: "Outdoor living area at Holiday Villa An Bang Vietnam",
        },
        {
          url: "/images/accommodations/vietnam/an-bang-holiday-villa/vietnam-private-villa-an-bang-holiday-villa-private-pool-7.webp",
          caption: "Private Garden Swimming Pool for Post-Flight Revival",
          alt: "Private swimming pool at Holiday Villa An Bang Hoi An",
        },
        {
          url: "/images/accommodations/vietnam/an-bang-holiday-villa/holiday-villa-an-bang-beach.webp",
          caption: "Private Footpath Direct to the Warm Sands of An Bang Beach",
          alt: "Direct beachfront access from Holiday Villa An Bang Hoi An",
        },
        {
          url: "/images/accommodations/vietnam/an-bang-holiday-villa/holiday-villa-front.webp",
          caption: "Private Estate Gates and Tropical Frangipani Gardens",
          alt: "Holiday Villa An Bang facade and entrance grounds",
        },
      ],
      courseSpecs: {
        yardage: "N/A",
        par: "N/A",
        courseType: "Beachfront Villa Compound",
      },
    },
    {
      day: 2,
      id: "day-2",
      title: "Mountain Mastery & Leaderboard BBQ",
      subtitle: "Ba Na Hills Golf Club | Luke Donald Design",
      architect: "Luke Donald / IMG",
      courseName: "Ba Na Hills Golf Club",
      courseHref: "/courses/vietnam/ba-na-hills/",
      pacing: "Mountain Expedition Round",
      transferTime: "45 mins door-to-door",
      whyItWorks:
        "Kick off the tournament in the mist-shrouded Truong Son foothills. Luke Donald's layout features dramatic elevation drops and pristine highland turf, followed by a private chef BBQ back at the villa.",
      bullets: [
        "18 championship holes through dense mountain jungle with pre-assigned caddies",
        "Villa recovery ritual: private cedar sauna, ice bath plunge, and poolside massage",
        "Inaugural tournament leaderboard update over a private chef BBQ feast on the terrace",
      ],
      logistics: [
        {
          label: "Stay",
          value:
            "<a href='/accommodations/vietnam/an-bang-beach-villas/' style='color: #D4AF37; text-decoration: underline; text-underline-offset: 4px;'>Holiday Villa An Bang</a>",
        },
        {
          label: "Play",
          value:
            "<a href='/courses/vietnam/ba-na-hills/' style='color: #D4AF37; text-decoration: underline; text-underline-offset: 4px;'>Ba Na Hills Golf Club</a>",
        },
        { label: "Dinner", value: "Curated Private Chef Seafood BBQ (Available to organize)" },
      ],
      images: [
        {
          url: "/images/courses/vietnam/ba-na-hills/ba-na-hills-hole-12jpeg.webp",
          caption: "Ba Na Hills Golf Club — Golf in the Mountain Clouds",
          alt: "Ba Na Hills Golf Club hole 12 island green Da Nang",
        },
        {
          url: "/images/courses/vietnam/ba-na-hills/ba-na-hills-golf-club-da-nang-vietnam-1.webp",
          caption: "Luke Donald's Lush Fairways Framed by Virgin Rainforest",
          alt: "Ba Na Hills pristine green complex surrounded by tropical jungle",
        },
        {
          url: "/images/courses/vietnam/ba-na-hills/ba-na-hills-aerial-sunset.webp",
          caption: "Highland Valley Vistas as Twilight Descends",
          alt: "Sunset aerial view over Ba Na Hills Golf Club",
        },
        {
          url: "/images/courses/vietnam/ba-na-hills/ba-na-hills-golf-club-luke-donald-design-3.webp",
          caption: "Severe Elevation Changes Testing Distance Control",
          alt: "Valley panoramic view at Ba Na Hills Golf Club Luke Donald design",
        },
        {
          url: "/images/courses/vietnam/ba-na-hills/ba-na-hills-golf-club-hole-11-night-high-res.webp",
          caption: "Full Championship Floodlighting on Hole 11",
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
      day: 3,
      id: "day-3",
      title: "Tropical Links Heaven",
      subtitle: "Hoiana Shores Golf Club | Robert Trent Jones II",
      architect: "Robert Trent Jones Jr.",
      courseName: "Hoiana Shores Golf Club",
      courseHref: "/courses/vietnam/hoiana-shores/",
      pacing: "Morning Coastal Round",
      transferTime: "22 mins door-to-door",
      whyItWorks:
        "Just 20 minutes from the villa, Hoiana Shores delivers world-top-100 Scottish links soul along the tropical coast. The ocean breeze and rumpled Zeon Zoysia fairways demand pure shotmaking creativity.",
      bullets: [
        "18 oceanfront links holes playing directly alongside Cham Island waters",
        "Afternoon options: garden terrace sundowners or VIP entry to Nox Beach Club",
        "Leaderboard debrief with craft beers overlooking the golden dunes",
      ],
      logistics: [
        {
          label: "Stay",
          value:
            "<a href='/accommodations/vietnam/an-bang-beach-villas/' style='color: #D4AF37; text-decoration: underline; text-underline-offset: 4px;'>Holiday Villa An Bang</a>",
        },
        {
          label: "Play",
          value:
            "<a href='/courses/vietnam/hoiana-shores/' style='color: #D4AF37; text-decoration: underline; text-underline-offset: 4px;'>Hoiana Shores Golf Club</a>",
        },
        { label: "Nightlife", value: "Hoiana Casino & Nox Beach Club (Optional)" },
      ],
      images: [
        {
          url: "/images/courses/vietnam/hoiana-shores/hoiana-heart-bunker.webp",
          caption: "Hoiana Shores — Coastal Links Mastery and the Iconic Heart Bunker",
          alt: "Hoiana Shores Golf Club heart bunker coastal links Vietnam",
        },
        {
          url: "/images/courses/vietnam/hoiana-shores/hoiana-shores-beachfront-golf.webp",
          caption: "Seaside Links Action Right on the East Sea Shoreline",
          alt: "Hoiana Shores beachfront golf course Vietnam",
        },
        {
          url: "/images/courses/vietnam/hoiana-shores/hoiana-shores-golf-club-dunes-hoi-an-4.webp",
          caption: "Undulating Natural Sand Dunes & Strategic Waste Hazards",
          alt: "Hoiana Shores dunes fairway routing",
        },
        {
          url: "/images/courses/vietnam/hoiana-shores/hoiana-17backwidelow-0508-scaled.webp",
          caption: "Hole 17 Ocean Links Looking Across to Cham Island",
          alt: "Hoiana Shores 17th hole ocean view",
        },
        {
          url: "/images/tours/vietnam/hoiana-casino-sports-bar.webp",
          caption: "Evening Entertainment at Hoiana Sports Bar & Casino Lounge",
          alt: "Hoiana Casino Sports Bar entertainment and nightlife in Central Vietnam",
        },
      ],
      courseSpecs: {
        yardage: "7,004",
        par: "71",
        courseType: "Pure Coastal Links",
      },
    },
    {
      day: 4,
      id: "day-4",
      title: "Boutique Parkland & The Flavors of Faifo",
      subtitle: "Montgomerie Links & Mango Rooms by Chef Duc",
      architect: "Colin Montgomerie",
      courseName: "Montgomerie Links Vietnam",
      courseHref: "/courses/vietnam/montgomerie-links/",
      pacing: "Mid-Tournament Precision Round",
      transferTime: "15 mins door-to-door",
      whyItWorks:
        "Colin Montgomerie crafted a boutique parkland layout weaving through native casuarina pines and sandy dunes. Tonight we venture into Hoi An Ancient Town for an extraordinary dinner at Mango Rooms.",
      bullets: [
        "18 holes on Vietnam's premier boutique course with pristine greens and deep bunkers",
        "Villa freshen-up with poolside gin & tonics before departing for the Ancient Town",
        "Dinner at Mango Rooms with Chef Duc Tran serving bold, Latin-Vietnamese fusion",
      ],
      logistics: [
        {
          label: "Stay",
          value:
            "<a href='/accommodations/vietnam/an-bang-beach-villas/' style='color: #D4AF37; text-decoration: underline; text-underline-offset: 4px;'>Holiday Villa An Bang</a>",
        },
        {
          label: "Play",
          value:
            "<a href='/courses/vietnam/montgomerie-links/' style='color: #D4AF37; text-decoration: underline; text-underline-offset: 4px;'>Montgomerie Links Vietnam</a>",
        },
        { label: "Dinner", value: "Mango Rooms (UNESCO Ancient Town)" },
      ],
      images: [
        {
          url: "/images/courses/vietnam/montgomerie-links/montgomerie-links-vietnam-da-nang-1-hero.webp",
          caption: "Montgomerie Links Vietnam — Classic Parkland Elegance",
          alt: "Montgomerie Links Vietnam golf course fairway Da Nang",
        },
        {
          url: "/images/courses/vietnam/montgomerie-links/montgomerie-links-vietnam-coastal-hole-3.webp",
          caption: "Strategic Casuarina Pines & Extensive Sandy Waste Areas",
          alt: "Strategic Bunkering at Montgomerie Links Vietnam",
        },
        {
          url: "/images/courses/vietnam/montgomerie-links/montgomerie-links-vietnam-greens-bunkers-4.webp",
          caption: "Immaculate Green Complexes Demanding Accurate Approach Play",
          alt: "Montgomerie Links greens and bunkers",
        },
        {
          url: "/images/courses/vietnam/montgomerie-links/montgomerie-links-vietnam-clubhouse-5.webp",
          caption: "Montgomerie Links Modern Clubhouse & 19th Hole Dining",
          alt: "Montgomerie Links Vietnam clubhouse",
        },
        {
          url: "/images/tours/vietnam/mango-rooms-chef-duc-tran.webp",
          caption: "Eclectic Dining at Mango Rooms with Chef Duc Tran",
          alt: "Eclectic Dining at Mango Rooms with Chef Duc Tran in Hoi An",
        },
      ],
      courseSpecs: {
        yardage: "7,090",
        par: "72",
        courseType: "Parkland Dunes",
      },
    },
    {
      day: 5,
      id: "day-5",
      title: "The Sartorial Rest Day & Village Craft",
      subtitle: "Bespoke Hoi An Tailoring & Private Garden Sanctuary",
      architect: "Local Guardian Host",
      courseName: "Hoi An Heritage & An Bang",
      pacing: "Tactical Rest & Cultural Exploration",
      transferTime: "10 mins to Ancient Town",
      whyItWorks:
        "The clubs rest as we celebrate the Golden Age of Travel. Savor a slow morning at the villa, commission bespoke suits or blazers from Hoi An's master tailors, and dine amidst scenic rice paddies.",
      bullets: [
        "Private VIP appointment at Yaly Couture or Bebe Tailors for custom linen blazers and shirts",
        "Explore An Bang's artisan coffee scene or join a Tra Que organic village cooking masterclass",
        "Optional sunset dinner at TOK Restaurant set directly on the emerald rice paddies",
      ],
      logistics: [
        {
          label: "Stay",
          value:
            "<a href='/accommodations/vietnam/an-bang-beach-villas/' style='color: #D4AF37; text-decoration: underline; text-underline-offset: 4px;'>Holiday Villa An Bang</a>",
        },
        { label: "Activity", value: "Bespoke Tailoring & Local Exploration" },
        { label: "Evening", value: "TOK Restaurant Paddy-View Dining (Optional)" },
      ],
      images: [
        {
          url: "/images/tours/vietnam/yaly-couture-experienced-tailor-hoi-an.webp",
          caption: "Master Tailoring in Hoi An — Bespoke Garments Crafted Overnight",
          alt: "Master Tailor measuring bespoke garments in Hoi An Ancient Town",
        },
        {
          url: "/images/tours/vietnam/tok-restaurant-on-rice-paddies.webp",
          caption: "TOK Restaurant's Peaceful Paddy-View Dining in Cam Thanh",
          alt: "TOK Restaurant's Paddy-View Dining",
        },
        {
          url: "/images/destinations/vietnam/culture/hoi-an-lantern-boat.webp",
          caption: "Hoi An Lantern River Cruise at Twilight",
          alt: "Hoi An lantern boat on Thu Bon River",
        },
        {
          url: "/images/accommodations/vietnam/an-bang-holiday-villa/holiday-villa-sauna-2.webp",
          caption: "Mid-Tour Wellness — Private Cedar Sauna & Ice Bath",
          alt: "Holiday Villa An Bang cedar sauna",
        },
        {
          url: "/images/accommodations/vietnam/an-bang-holiday-villa/holiday-villa-outdoor-living.webp",
          caption: "Afternoon Garden Lounging by the Frangipani Trees",
          alt: "Outdoor living area at Holiday Villa An Bang",
        },
      ],
      courseSpecs: {
        yardage: "N/A",
        par: "N/A",
        courseType: "Cultural Rest Day",
      },
    },
    {
      day: 6,
      id: "day-6",
      title: "The Nicklaus Finale & Champions Feast",
      subtitle: "BRG Da Nang (Nicklaus Course) & Surf & Turf Beach Club",
      architect: "Jack Nicklaus Design",
      courseName: "BRG Da Nang Golf Resort (Nicklaus)",
      courseHref: "/courses/vietnam/brg-da-nang-nicklaus/",
      pacing: "Final Round Championship Shootout",
      transferTime: "18 mins door-to-door",
      whyItWorks:
        "The tournament championship comes down to the timber bulkhead walls of BRG Nicklaus. Afterward, celebrate your tour champion with an al fresco beachfront banquet at The Surf & Turf Beach Club.",
      bullets: [
        "18 championship holes with authentic Florida timber bulkheads and water carries",
        "Tour match play final round with official AGS scorekeeping",
        "Farewell Champions Dinner at The Surf & Turf on An Bang Beach with Horn of Plenty ceremony",
      ],
      logistics: [
        {
          label: "Stay",
          value:
            "<a href='/accommodations/vietnam/an-bang-beach-villas/' style='color: #D4AF37; text-decoration: underline; text-underline-offset: 4px;'>Holiday Villa An Bang</a>",
        },
        {
          label: "Play",
          value:
            "<a href='/courses/vietnam/brg-da-nang-nicklaus/' style='color: #D4AF37; text-decoration: underline; text-underline-offset: 4px;'>BRG Da Nang (Nicklaus Course)</a>",
        },
        { label: "Celebration", value: "Surf & Turf Champions Dinner & Horn of Plenty Presentation" },
      ],
      images: [
        {
          url: "/images/courses/vietnam/brg-da-nang-nicklaus/brg-da-nang-golf-resort-nicklaus-water-feature-3.webp",
          caption: "BRG Legends Nicklaus Course — Island Bulkhead Green Challenge",
          alt: "BRG Legends Golf Resort – Nicklaus Course",
        },
        {
          url: "/images/courses/vietnam/brg-da-nang-nicklaus/brg-da-nang-golf-resort-nicklaus-fairway-vietnam-4.webp",
          caption: "Manicured Stadium Fairways and Sparkling Water Hazards",
          alt: "BRG Da Nang Golf Resort Nicklaus course fairway Da Nang",
        },
        {
          url: "/images/tours/vietnam/surf-and-turf-restaurant-evening.webp",
          caption: "The Surf & Turf Beach Club — Sunset Farewell Dinner in An Bang",
          alt: "The Surf & Turf Beach Club evening dining in An Bang",
        },
        {
          url: "/images/restaurants-bars/vietnam/surf-and-turf-beachclub-hoi-an.webp",
          caption: "Freshly Grilled Local Seafood & Prime Steaks for the Champions",
          alt: "Beachside feast at Surf and Turf An Bang",
        },
        {
          url: "/images/homepage/ags-difference/horn-of-plenty-winner.webp",
          caption: "The Horn of Plenty — Presentation to the Tour Champion",
          alt: "AGS Signature Ritual: The Horn of Plenty - Premium Post-Round Winners Celebration",
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
      title: "The Final Ocean Dip & Farewell",
      subtitle: "Morning Beachfront Swim & VIP Departure",
      architect: "AGS Concierge",
      courseName: "Departure",
      pacing: "Relaxed Departure",
      transferTime: "30 mins to DAD Airport",
      whyItWorks:
        "No early checkout chaos. Take a final morning dip in the East Sea directly out your gate, enjoy breakfast on the terrace, and board your private VIP executive transfer to Da Nang International Airport.",
      bullets: [
        "Final morning sunrise swim and coffee on the garden terrace",
        "Effortless baggage handling by villa team and private chauffeur transfer",
        "Seamless transfer to DAD airport timed perfectly for homeward flights",
      ],
      logistics: [
        {
          label: "Stay",
          value:
            "<a href='/accommodations/vietnam/an-bang-beach-villas/' style='color: #D4AF37; text-decoration: underline; text-underline-offset: 4px;'>Holiday Villa An Bang</a>",
        },
        { label: "Transfer", value: "Private VIP Departure Transfer to DAD" },
        { label: "Activity", value: "Morning Beach Dip & Fresh Breakfast" },
      ],
      images: [
        {
          url: "/images/accommodations/vietnam/an-bang-holiday-villa/vietnam-private-villa-an-bang-holiday-villa-beach-lifestyle-hero.webp",
          caption: "Holiday Villa An Bang — A Final Morning Dip in the Ocean",
          alt: "Final morning dip at the private beachfront Holiday Villa in An Bang",
        },
        {
          url: "/images/accommodations/vietnam/an-bang-holiday-villa/holiday-villa-an-bang-beach.webp",
          caption: "Direct Sand Access for a Farewell Sunrise Stroll",
          alt: "An Bang beachfront walkway",
        },
        {
          url: "/images/accommodations/vietnam/an-bang-holiday-villa/vietnam-private-villa-an-bang-holiday-villa-private-pool-7.webp",
          caption: "Poolside Terrace Breakfast Before Airport Departure",
          alt: "Private swimming pool at Holiday Villa An Bang",
        },
        {
          url: "/images/accommodations/vietnam/an-bang-holiday-villa/holiday-villa-sauna-2.webp",
          caption: "Post-Tour Restoration — Private Cedar Sauna Suite",
          alt: "Holiday Villa An Bang cedar sauna",
        },
        {
          url: "/images/accommodations/vietnam/an-bang-holiday-villa/holiday-villa-front.webp",
          caption: "Leaving Your Vietnamese Beachfront Home Away from Home",
          alt: "Holiday Villa An Bang facade",
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
    name: "Holiday Villa An Bang",
    tagline:
      "A private beachfront compound on the golden sands of An Bang, engineered for tournament groups.",
    location: "An Bang Beach, Hoi An, Vietnam",
    href: "/accommodations/vietnam/an-bang-beach-villas/",
    overview:
      "Holiday Villa An Bang is your tournament estate. Featuring whole-compound privacy, a central pool, outdoor debrief pavilion, private cedar sauna, and cold-plunge ice bath, your party enjoys complete seclusion just 10 minutes from Hoi An Ancient Town and direct beach gate access to the East Sea.",
    categories: [
      { id: "exterior", label: "Pool & Grounds", count: 4 },
      { id: "suites", label: "Master Suites", count: 4 },
      { id: "wellness", label: "Wellness & Spa", count: 2 },
    ],
    photos: [
      {
        url: "/images/accommodations/vietnam/an-bang-holiday-villa/holiday-villa-front.webp",
        caption: "Holiday Villa An Bang — Welcoming Estate Facade & Frangipani Gardens",
        category: "exterior",
      },
      {
        url: "/images/accommodations/vietnam/an-bang-holiday-villa/vietnam-private-villa-an-bang-holiday-villa-beach-lifestyle-hero.webp",
        caption: "Direct Beachfront Gate Opening to the Sands of An Bang Beach",
        category: "exterior",
      },
      {
        url: "/images/accommodations/vietnam/an-bang-holiday-villa/vietnam-private-villa-an-bang-holiday-villa-private-pool-7.webp",
        caption: "Private Garden Swimming Pool for Post-Round Group Debriefs",
        category: "exterior",
      },
      {
        url: "/images/accommodations/vietnam/an-bang-holiday-villa/holiday-villa-outdoor-living.webp",
        caption: "Open-Air Living Pavilion — Daily Leaderboard & BBQ Lounge",
        category: "exterior",
      },
      {
        url: "/images/accommodations/vietnam/an-bang-holiday-villa/holiday-villa-bedroom-bathroom-4.webp",
        caption: "Master Suite — Deep Soaking Stone Tub & Open-Air Rain Shower",
        category: "suites",
      },
      {
        url: "/images/accommodations/vietnam/an-bang-holiday-villa/holiday-villa-bedroom-5.webp",
        caption: "King Master Bedroom with Garden Views and Premium Linens",
        category: "suites",
      },
      {
        url: "/images/accommodations/vietnam/an-bang-holiday-villa/holiday-villa-bedroom-6.webp",
        caption: "Deluxe Twin Bedroom Suite with High Ceilings & Private Balcony",
        category: "suites",
      },
      {
        url: "/images/accommodations/vietnam/an-bang-holiday-villa/holiday-villa-bathroom-3.webp",
        caption: "En-suite Stone Vanity and Designer Bathroom Amenities",
        category: "suites",
      },
      {
        url: "/images/accommodations/vietnam/an-bang-holiday-villa/holiday-villa-sauna-2.webp",
        caption: "Private Cedar Sauna — Tournament Recovery Suite",
        category: "wellness",
      },
      {
        url: "/images/accommodations/vietnam/an-bang-holiday-villa/holiday-villa-an-bang-beach.webp",
        caption: "Private Footpath Direct to the Warm Waters of An Bang Beach",
        category: "wellness",
      },
    ],
    inclusions: [
      {
        icon: "🏊‍♂️",
        title: "Private Garden Pool",
        desc: "Secluded tropical garden pool exclusively for your group, serviced with daily housekeeping.",
      },
      {
        icon: "🧖‍♂️",
        title: "Cedar Sauna & Cold Plunge",
        desc: "Flush fatigue and lactic acid after 18 competitive holes with dedicated wellness amenities.",
      },
      {
        icon: "🌊",
        title: "Beach Gate Access",
        desc: "Step straight from your lawn onto the sand for sunset swims or beach club strolls.",
      },
      {
        icon: "👨‍🍳",
        title: "Private Chef BBQ Dinners",
        desc: "Inaugural BBQ feast prepared by your private chef right on the villa garden terrace.",
      },
    ],
  },
  inclusions: {
    included: [
      {
        title: "4 Championship Tournament Rounds (72 Holes)",
        desc: "Ba Na Hills, Hoiana Shores, Montgomerie Links, and BRG Da Nang Nicklaus Course with pre-booked prime morning tee times.",
      },
      {
        title: "1:1 Dedicated Caddies & Shared Motorized Carts",
        desc: "Single caddie per golfer for professional yardages, ball spotting, and green reading.",
      },
      {
        title: "6 Nights Luxury Beachfront Villa Accommodation",
        desc: "Whole-villa occupancy at Holiday Villa An Bang with private pool, daily breakfast, and housekeeping.",
      },
      {
        title: "2 Signature Group Feasts Included",
        desc: "Private Chef Welcome BBQ at the villa (Day 2) and farewell Champions Dinner at The Surf & Turf Beach Club (Day 6).",
      },
      {
        title: "Private VIP Executive Fleet Transit",
        desc: "All airport, golf course, and dinner transfers in private high-roof VIP vehicles with chilled refreshments.",
      },
      {
        title: "AGS Local Guardian & Horn of Plenty Ceremony",
        desc: "On-the-ground concierge managing all golf logistics, dinner tables, and our iconic winner's trophy presentation.",
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
        desc: "Private chef villa BBQs, catamaran cruises to Cham Island, and bespoke tailoring are optional add-ons that our team can quote and organize for your group upon request.",
      },
      {
        title: "Personal Travel & Golf Equipment Insurance",
        desc: "We strongly advise comprehensive travel insurance covering international golf gear, baggage transit, and medical care.",
      },
    ],
  },
  pricing: {
    guidePriceUSD: "$1,550",
    guidePriceAUD: "~$2,390 AUD",
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
      "* Guide pricing strictly covers your core golf package: championship green fees, carts, caddies, luxury beachfront villa accommodation, and private vehicle fleet transfers. All dining recommendations, rest-day excursions, and celebratory dinners are suggested highlights that our concierge team can seamlessly organize and book for your group on request.",
  },
  faqs: [
    {
      q: "Which golf courses are included in The An Bang Invitational?",
      a: "The tour features 4 championship rounds across Central Vietnam: Ba Na Hills Golf Club (Luke Donald), Hoiana Shores Golf Club (Robert Trent Jones Jr.), Montgomerie Links Vietnam (Colin Montgomerie), and BRG Da Nang Golf Resort (Jack Nicklaus Design).",
    },
    {
      q: "Are group dinners and caddies included in the tour price?",
      a: "Yes. Every round includes 1:1 dedicated caddies, shared carts, and practice balls. The tour also includes two signature group dinners: a Private Chef BBQ at the villa on Day 2 and the Champions Dinner at The Surf & Turf Beach Club on Day 6.",
    },
    {
      q: "Can we add extra rounds or customize the accommodation?",
      a: "Absolutely. We can add a fifth round at Sir Nick Faldo's Laguna Lăng Cô, upgrade bedrooms, arrange private yacht charters to Cham Island, or extend your stay with extra nights.",
    },
    {
      q: "How does airport arrival and transit work?",
      a: "Your group is met right outside baggage claim at Da Nang International Airport (DAD) by your private AGS chauffeur and executive vehicle. All golf course transfers are operated privately door-to-door.",
    },
  ],
  schema: {
    name: "The An Bang Invitational",
    description:
      "A 7-Day flagship luxury golf tour along Vietnam's Golf Coast featuring Ba Na Hills, Hoiana Shores, Montgomerie Links, and BRG Da Nang Nicklaus, based at Holiday Villa An Bang.",
    canonicalUrl: "https://www.asiagolfspecialists.com/tours/vietnam-central-coast/",
    heroImage:
      "https://www.asiagolfspecialists.com/images/courses/vietnam/hoiana-shores/hoiana-heart-bunker.webp",
    minPrice: "1550",
    priceCurrency: "USD",
  },
};
