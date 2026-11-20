import type { TourData } from "@/types/tour";
import venueMedia from "@/data/venue-media.json";

export default function TourSchemaGraph({ data }: { data: TourData }) {
  const tourTitle = data.schema.name;

  return (
    <>
      {/* 1. TouristTrip Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "TouristTrip",
            "@id": data.schema.canonicalUrl,
            "name": tourTitle,
            "description": data.schema.description,
            "url": data.schema.canonicalUrl,
            "image": data.schema.heroImage.startsWith("http")
              ? data.schema.heroImage
              : `https://www.asiagolfspecialists.com${data.schema.heroImage}`,
            "touristType": ["Golfers", "Luxury Leisure Travelers"],
            "offers": {
              "@type": "Offer",
              "price": data.schema.minPrice,
              "priceCurrency": data.schema.priceCurrency,
              "priceSpecification": {
                "@type": "PriceSpecification",
                "minPrice": data.schema.minPrice,
                "priceCurrency": data.schema.priceCurrency,
              },
              "availability": "https://schema.org/InStock",
              "seller": {
                "@type": "TravelAgency",
                "name": "Asia Golf Specialists",
                "url": "https://www.asiagolfspecialists.com/",
                "image": "https://www.asiagolfspecialists.com/images/brand-library/logos/ags-clubmark-outline-white.webp",
                "address": {
                  "@type": "PostalAddress",
                  "streetAddress": "27 Nguyen Phan Vinh",
                  "addressLocality": "Hoi An",
                  "addressRegion": "Da Nang",
                  "postalCode": "550000",
                  "addressCountry": "VN",
                },
              },
              "url": "https://www.asiagolfspecialists.com/quote/",
            },
            "provider": {
              "@type": "TravelAgency",
              "name": "Asia Golf Specialists",
              "url": "https://www.asiagolfspecialists.com/",
              "image": "https://www.asiagolfspecialists.com/images/brand-library/logos/ags-clubmark-outline-white.webp",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "27 Nguyen Phan Vinh",
                "addressLocality": "Hoi An",
                "addressRegion": "Da Nang",
                "postalCode": "550000",
                "addressCountry": "VN",
              },
            },
            "itinerary": {
              "@type": "ItemList",
              "itemListElement": data.chapters.map((chapter) => ({
                "@type": "ListItem",
                "position": chapter.day,
                "item": {
                  "@type": "TouristAttraction",
                  "name": `Day ${chapter.day}: ${chapter.title}`,
                  "description": chapter.subtitle,
                  ...(chapter.courseHref
                    ? { url: `https://www.asiagolfspecialists.com${chapter.courseHref}` }
                    : {}),
                },
              })),
            },
          }),
        }}
      />

      {/* 2. FAQPage Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": data.faqs.map((faq) => ({
              "@type": "Question",
              "name": faq.q,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.a,
              },
            })),
          }),
        }}
      />

      {/* 3. BreadcrumbList Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://www.asiagolfspecialists.com/",
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "Signature Tours",
                "item": "https://www.asiagolfspecialists.com/tours/",
              },
              {
                "@type": "ListItem",
                "position": 3,
                "name": data.schema.name,
                "item": data.schema.canonicalUrl,
              },
            ],
          }),
        }}
      />

      {/* 4. VideoObject Schemas */}
      {data.chapters
        .map((c) => {
          const media = c.courseHref ? (venueMedia as Record<string, any>)[c.courseHref] : null;
          if (media && media.hasVideo && media.embedId) {
            const countryMap: Record<string, string> = {
              vietnam: "Vietnam",
              thailand: "Thailand",
              cambodia: "Cambodia",
            };
            const locationLabel = (media.country && countryMap[media.country]) || "Southeast Asia";
            return {
              "@context": "https://schema.org",
              "@type": "VideoObject",
              "name": media.videoTitle || `${media.facilityName} Official Flyover`,
              "description": `Official venue aerial flyover and architectural preview of ${media.facilityName} in ${locationLabel}, featured on ${data.schema.name} tour by Asia Golf Specialists.`,
              "thumbnailUrl": [`https://img.youtube.com/vi/${media.embedId}/hqdefault.jpg`],
              "uploadDate": "2024-01-01T08:00:00+07:00",
              "embedUrl": `https://www.youtube-nocookie.com/embed/${media.embedId}`,
              "contentUrl": `https://www.youtube.com/watch?v=${media.embedId}`,
            };
          }
          return null;
        })
        .filter(Boolean)
        .map((videoSchema, idx) => (
          <script
            key={idx}
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(videoSchema),
            }}
          />
        ))}
    </>
  );
}
