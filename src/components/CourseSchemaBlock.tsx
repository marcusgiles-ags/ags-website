interface BreadcrumbItem {
  name: string;
  item: string;
}

interface CourseSchemaBlockProps {
  name: string;
  description: string;
  url: string;
  imageUrl: string;
  addressLocality: string;
  addressCountry: string; // "VN" | "TH" | "KH"
  numberOfHoles?: number;
  courseLength?: number; // yards
  par?: number;
  designer?: string;
  sameAs?: string[];
  breadcrumbs: BreadcrumbItem[];
}

export default function CourseSchemaBlock({
  name,
  description,
  url,
  imageUrl,
  addressLocality,
  addressCountry,
  numberOfHoles,
  courseLength,
  par,
  designer,
  sameAs,
  breadcrumbs,
}: CourseSchemaBlockProps) {

  const canonicalUrl = url.endsWith("/") ? url : `${url}/`;

  const golfCourseSchema: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "GolfCourse",
    "@id": canonicalUrl,
    name,
    description,
    url: canonicalUrl,
    image: imageUrl.startsWith("http")
      ? imageUrl
      : `https://www.asiagolfspecialists.com${imageUrl}`,
    address: {
      "@type": "PostalAddress",
      addressLocality,
      addressCountry,
    },
  };

  const additionalProperty: Record<string, unknown>[] = [];
  if (numberOfHoles) {
    additionalProperty.push({
      "@type": "PropertyValue",
      name: "Number of Holes",
      value: numberOfHoles,
    });
  }
  if (par) {
    additionalProperty.push({
      "@type": "PropertyValue",
      name: "Par",
      value: par,
    });
  }
  if (courseLength) {
    additionalProperty.push({
      "@type": "PropertyValue",
      name: "Course Length",
      value: courseLength,
      unitText: "yards",
    });
  }
  if (designer) {
    additionalProperty.push({
      "@type": "PropertyValue",
      name: "Course Architect",
      value: designer,
    });
  }
  if (additionalProperty.length > 0) {
    golfCourseSchema.additionalProperty = additionalProperty;
  }
  if (sameAs && sameAs.length > 0) golfCourseSchema.sameAs = sameAs;

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: breadcrumbs.map((crumb, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: crumb.name,
      item: crumb.item.endsWith("/") ? crumb.item : `${crumb.item}/`,
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(golfCourseSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <div className="container" style={{ paddingTop: '1rem', paddingBottom: '0.75rem' }}>
        <p style={{
          fontSize: '0.75rem',
          color: 'rgba(248, 250, 252, 0.4)',
          letterSpacing: '0.08em',
          textTransform: 'uppercase',
          margin: 0,
        }} suppressHydrationWarning>
          Last Updated: {new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
        </p>
      </div>
    </>
  );
}
