import React from "react";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import HeroSlider from "@/components/HeroSlider";
import DestinationBackLink from "@/components/DestinationBackLink";
import CourseSchemaBlock from "@/components/CourseSchemaBlock";
import CourseFAQSection from "@/components/CourseFAQSection";
import CuratorScorecard from "@/components/CuratorScorecard";
import VenueItineraries from "@/components/VenueItineraries";
import VenueVideoSection from "@/components/media/VenueVideoSection";
import CourseNavigation from "@/components/CourseNavigation";
import InlineFastInquiry from "@/components/InlineFastInquiry";
import CourseWhatsAppButton from "@/components/CourseWhatsAppButton";
import type { CourseData } from "@/lib/courses";

const TIER_LABEL: Record<"P" | "V" | "C", string> = {
  P: "Personally Played & Inspected — Marcus Giles",
  V: "Site-Verified by AGS On-Ground Team",
  C: "Curated AGS Partner — Vetted via Client & Caddie Feedback",
};

export default function CoursePageTemplate({ course }: { course: CourseData }) {
  const countryCoursesLink = `/destinations/${course.country}/courses/`;
  const canonicalUrl = `https://www.asiagolfspecialists.com${course.url}`;
  const inspectionBadge =
    course.scorecard.experienceTier && TIER_LABEL[course.scorecard.experienceTier]
      ? TIER_LABEL[course.scorecard.experienceTier]
      : course.scorecard.inspectionDate;

  return (
    <main style={{ backgroundColor: "#020617", color: "var(--color-tertiary)", minHeight: "100vh" }}>
      <Navbar />

      {/* Heritage Hero */}
      <header className="hero" style={{ minHeight: "85vh" }}>
        <div
          style={{
            position: "absolute",
            inset: 0,
            zIndex: 0,
            WebkitMaskImage: "linear-gradient(to bottom, black 65%, transparent 100%)",
            maskImage: "linear-gradient(to bottom, black 65%, transparent 100%)",
          }}
        >
          <HeroSlider images={course.images.map((i) => i.src)} />
          <div className="hero-overlay" style={{ position: "absolute", inset: 0, zIndex: 2 }}></div>
        </div>
        <div className="container" style={{ position: "relative", zIndex: 10 }}>
          <DestinationBackLink country={course.countryName} countryLink={countryCoursesLink} />
          <div
            className="badge"
            style={{
              display: "inline-block",
              padding: "0.5rem 1rem",
              border: "1px solid var(--color-gold)",
              color: "var(--color-gold)",
              fontSize: "0.75rem",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              marginBottom: "1.5rem",
            }}
          >
            {course.hero.badge}
          </div>
          <h1 style={{ marginBottom: "1rem", fontSize: "clamp(3rem, 6vw, 5.5rem)" }}>
            {course.hero.h1Line1}
            {course.hero.h1Gold ? (
              <>
                <br />
                <span className="text-gold">{course.hero.h1Gold}</span>
              </>
            ) : null}
          </h1>
          {course.hero.quote ? (
            <p
              style={{ fontSize: "1.25rem", maxWidth: "700px", fontStyle: "italic", color: "#ccc" }}
              itemProp="description"
              id="exec-summary"
            >
              {course.hero.quote}
            </p>
          ) : null}
        </div>
      </header>

      {/* Course Specifications & Overview */}
      <section className="section" style={{ paddingTop: "4rem" }}>
        <div className="container" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "4rem" }}>
          <div className="article-content">
            <h2 style={{ marginBottom: "2rem", fontSize: "clamp(2rem, 3vw, 2.75rem)" }}>
              Course <span className="text-gold">Specifications</span>
            </h2>
            <table style={{ width: "100%", borderCollapse: "collapse", border: "1px solid rgba(212, 175, 55, 0.2)" }}>
              <tbody>
                {course.specs.map((row, i) => (
                  <tr key={i}>
                    <th
                      style={{
                        textAlign: "left",
                        padding: "1rem",
                        borderBottom: "1px solid rgba(212, 175, 55, 0.2)",
                        color: "var(--color-gold)",
                      }}
                    >
                      {row.label}
                    </th>
                    <td style={{ padding: "1rem", borderBottom: "1px solid rgba(212, 175, 55, 0.2)" }}>
                      {row.href ? (
                        <a
                          href={row.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{ color: "#D4AF37", textDecoration: "none" }}
                          className="hover:underline"
                        >
                          {row.value}
                        </a>
                      ) : (
                        row.value
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div>
            <h2 style={{ marginBottom: "2rem", fontSize: "clamp(2rem, 3vw, 2.75rem)" }}>
              The <span className="text-gold">Overview</span>
            </h2>
            <div style={{ color: "#ccc", lineHeight: "1.8", fontSize: "1.1rem" }}>
              {course.overviewParagraphs.map((p, i) => (
                <p key={i} style={{ marginBottom: "1.25rem" }}>
                  {p}
                </p>
              ))}
              {course.subCourseLinks && course.subCourseLinks.length > 0 ? (
                <div style={{ marginTop: "2rem", display: "flex", flexWrap: "wrap", gap: "1rem" }}>
                  {course.subCourseLinks.map((lnk) => (
                    <Link
                      key={lnk.href}
                      href={lnk.href.endsWith("/") ? lnk.href : `${lnk.href}/`}
                      className="btn btn-primary"
                      style={{
                        padding: "0.75rem 1.5rem",
                        border: "1px solid var(--color-gold)",
                        color: "var(--color-gold)",
                        textDecoration: "none",
                        display: "inline-block",
                      }}
                    >
                      {lnk.label}
                    </Link>
                  ))}
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </section>

      {/* Direct Course Concierge & Fast Enquiry (T8 Conversion Lift) */}
      <section
        className="section"
        style={{
          paddingTop: "1rem",
          paddingBottom: "3.5rem",
          borderBottom: "1px solid rgba(212, 175, 55, 0.12)",
        }}
      >
        <div className="container" style={{ maxWidth: "960px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "1.75rem" }}>
            <CourseWhatsAppButton
              courseName={course.schema.name}
              countryName={course.countryName}
            />
          </div>
          <InlineFastInquiry
            packageTitle={`Play ${course.schema.name}`}
            destination={`${course.schema.addressLocality}, ${course.countryName}`}
          />
        </div>
      </section>

      {/* Gallery & Venue Video */}
      <section
        className="section"
        style={{ backgroundColor: "rgba(255,255,255,0.02)", paddingTop: "4.5rem", paddingBottom: "3.5rem" }}
      >
        <div className="container">
          <h2 style={{ marginBottom: "2rem", textAlign: "center", fontSize: "clamp(2rem, 3vw, 2.75rem)" }}>
            {course.galleryHeading.prefix}{" "}
            <span className="text-gold">{course.galleryHeading.gold}</span>
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "1.5rem" }}>
            {course.images.map((img, i) => (
              <div
                key={i}
                style={{
                  borderRadius: "var(--radius-md)",
                  overflow: "hidden",
                  border: "1px solid rgba(212, 175, 55, 0.1)",
                  transition: "transform 0.3s ease",
                  display: "block",
                }}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  width={400}
                  height={300}
                  style={{ width: "100%", height: "150px", objectFit: "cover" }}
                />
                <div
                  style={{
                    padding: "0.75rem",
                    fontSize: "0.8rem",
                    color: "var(--color-secondary)",
                    textAlign: "center",
                    backgroundColor: "#020617",
                  }}
                >
                  {img.caption || `Image ${i + 1}`}
                </div>
              </div>
            ))}
          </div>

          <VenueVideoSection pagePath={course.url} />
        </div>
      </section>

      {/* Course Structured Data */}
      <CourseSchemaBlock
        sameAs={course.schema.sameAs}
        name={course.schema.name}
        description={course.schema.description}
        url={canonicalUrl}
        imageUrl={course.schema.imageUrl}
        addressLocality={course.schema.addressLocality}
        addressCountry={course.schema.addressCountry}
        numberOfHoles={course.schema.numberOfHoles}
        courseLength={course.schema.courseLength}
        par={course.schema.par}
        designer={course.schema.designer}
        breadcrumbs={[
          { name: "Home", item: "https://www.asiagolfspecialists.com/" },
          { name: course.countryName, item: `https://www.asiagolfspecialists.com/destinations/${course.country}/` },
          {
            name: `${course.countryName} Courses`,
            item: `https://www.asiagolfspecialists.com${countryCoursesLink}`,
          },
          { name: course.schema.name, item: canonicalUrl },
        ]}
      />

      {/* Curator's Brief */}
      {course.curatorBriefHtml.length > 0 ? (
        <section
          className="geo-summary"
          style={{
            background: "var(--color-primary)",
            padding: "4rem 2rem",
            borderBottom: "1px solid rgba(212, 175, 55, 0.1)",
          }}
        >
          <div className="container" style={{ maxWidth: "800px", margin: "0 auto", textAlign: "center" }}>
            <h2
              style={{
                color: "var(--color-gold)",
                fontSize: "1.5rem",
                textTransform: "uppercase",
                letterSpacing: "0.2em",
                marginBottom: "1.5rem",
              }}
            >
              The Curator&apos;s Brief
            </h2>
            <div style={{ color: "rgba(245, 241, 230, 0.8)", fontSize: "1.1rem", lineHeight: 1.8, textAlign: "left" }}>
              {course.curatorBriefHtml.map((html, idx) => (
                <p
                  key={idx}
                  style={{ marginBottom: idx < course.curatorBriefHtml.length - 1 ? "1rem" : 0 }}
                  dangerouslySetInnerHTML={{ __html: html }}
                />
              ))}
              {course.reviewLink ? (
                <p
                  style={{
                    marginTop: "1rem",
                    padding: "1rem",
                    backgroundColor: "rgba(212, 175, 55, 0.08)",
                    borderLeft: "3px solid #D4AF37",
                    borderRadius: "4px",
                  }}
                >
                  <strong>In-Depth Review:</strong> Read our comprehensive course breakdown —{" "}
                  <Link
                    href={course.reviewLink.href.endsWith("/") ? course.reviewLink.href : `${course.reviewLink.href}/`}
                    style={{ color: "#D4AF37", textDecoration: "underline", fontWeight: 600 }}
                  >
                    {course.reviewLink.label}
                  </Link>
                  .
                </p>
              ) : null}
            </div>
          </div>
        </section>
      ) : null}

      {/* Curatorial Evaluation */}
      <CuratorScorecard
        itemType="GolfCourse"
        itemName={course.scorecard.itemName}
        itemUrl={canonicalUrl}
        sameAs={course.schema.sameAs}
        itemImage={course.scorecard.itemImage}
        addressLocality={course.schema.addressLocality}
        addressCountry={course.schema.addressCountry}
        overallScore={course.scorecard.overallScore}
        maxScore={course.scorecard.maxScore}
        gradeBadge={course.scorecard.gradeBadge}
        inspectionDate={inspectionBadge}
        leadCurator="Marcus Giles"
        leadCuratorTitle="Founder & Managing Director, Asia Golf Specialists"
        criteria={course.scorecard.criteria}
        verdict={course.scorecard.verdict}
      />

      <VenueItineraries venueHref={course.url} venueName={course.schema.name} venueType="course" />

      <CourseFAQSection courseName={course.schema.name} faqs={course.faqs} />

      <CourseNavigation
        prev={course.nav.prev}
        next={course.nav.next}
        country={course.countryName}
        countryLink={countryCoursesLink}
      />
    </main>
  );
}
