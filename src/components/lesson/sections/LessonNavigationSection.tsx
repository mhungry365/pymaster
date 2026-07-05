import Link from "next/link";
import type { Lesson } from "@/types";

type Props = {
  previousLesson?: Lesson;
  nextLesson?: Lesson;
};

export function LessonNavigationSection({
  previousLesson,
  nextLesson,
}: Props) {
  return (
    <section className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 sm:p-8">
      <p className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-400">
        Lesson navigation
      </p>

      <div className="mt-4 grid gap-4 md:grid-cols-2">
        <div className="rounded-2xl border border-white/10 bg-slate-950/50 p-5">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
            Previous
          </p>

          {previousLesson ? (
            <>
              <h2 className="mt-3 text-xl font-semibold text-white">
                {previousLesson.title}
              </h2>
              <Link
                href={`/lessons/${previousLesson.slug}`}
                className="mt-5 inline-flex h-11 items-center justify-center rounded-full border border-white/10 px-5 text-sm font-semibold text-white transition hover:border-emerald-300/50 hover:bg-white/5"
              >
                Review Previous
              </Link>
            </>
          ) : (
            <p className="mt-3 text-slate-400">
              This is the first lesson in the path.
            </p>
          )}
        </div>

        <div className="rounded-2xl border border-emerald-300/20 bg-emerald-300/10 p-5">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-emerald-200">
            Next
          </p>

          <h2 className="mt-3 text-xl font-semibold text-white">
            {nextLesson ? nextLesson.title : "Next lesson coming soon"}
          </h2>

          <p className="mt-3 text-sm leading-6 text-emerald-100">
            {nextLesson
              ? nextLesson.description
              : "More Python Basics lessons are on the way."}
          </p>

          <Link
            href={nextLesson ? `/lessons/${nextLesson.slug}` : "/curriculum"}
            className="mt-5 inline-flex h-11 items-center justify-center rounded-full bg-emerald-400 px-5 text-sm font-semibold text-slate-950 transition hover:bg-emerald-300"
          >
            {nextLesson ? "Open Next Lesson" : "Back to Curriculum"}
          </Link>
        </div>
      </div>
    </section>
  );
}
