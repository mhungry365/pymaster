import { notFound } from "next/navigation";
import { LessonPage } from "@/components/lesson/lesson-page";
import {
  getAllLessons,
  getLessonBySlug,
  getNextLesson,
  getPreviousLesson,
} from "@/data/lessons";

type LessonRouteProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return getAllLessons().map((lesson) => ({
    slug: lesson.slug,
  }));
}

export default async function DynamicLessonPage({ params }: LessonRouteProps) {
  const { slug } = await params;
  const lesson = getLessonBySlug(slug);

  if (!lesson) {
    notFound();
  }

  return (
    <LessonPage
      lesson={lesson}
      nextLesson={getNextLesson(slug)}
      previousLesson={getPreviousLesson(slug)}
    />
  );
}
