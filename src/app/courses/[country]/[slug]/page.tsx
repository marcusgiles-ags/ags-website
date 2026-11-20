import type { Metadata } from "next";
import { notFound } from "next/navigation";
import CoursePageTemplate from "@/components/CoursePageTemplate";
import { getAllCourseParams, getCourseData } from "@/lib/courses";

export const dynamicParams = false;

export async function generateStaticParams() {
  return getAllCourseParams();
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ country: string; slug: string }>;
}): Promise<Metadata> {
  const { country, slug } = await params;
  const course = getCourseData(country, slug);
  if (!course) return { title: "Course Not Found" };

  const canonicalUrl = `https://www.asiagolfspecialists.com${course.url}`;
  const titleVal = course.metadata.titleIsAbsolute
    ? { absolute: course.metadata.title }
    : course.metadata.title;

  return {
    title: titleVal,
    description: course.metadata.description,
    keywords: course.metadata.keywords,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      type: "website",
      title: course.metadata.title,
      description: course.metadata.description,
      url: canonicalUrl,
      siteName: "Asia Golf Specialists",
      images: [
        {
          url: course.metadata.ogImage,
          width: 1200,
          height: 630,
          alt: course.metadata.ogAlt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: course.metadata.title,
      description: course.metadata.description,
      images: [course.metadata.ogImage],
    },
  };
}

export default async function CoursePage({
  params,
}: {
  params: Promise<{ country: string; slug: string }>;
}) {
  const { country, slug } = await params;
  const course = getCourseData(country, slug);
  if (!course) notFound();

  return <CoursePageTemplate course={course} />;
}
