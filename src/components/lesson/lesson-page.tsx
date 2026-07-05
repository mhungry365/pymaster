import Link from "next/link";
import { CodeBlock } from "@/components/lesson/code-block";
import { LessonCompleteButton } from "@/components/lesson/lesson-complete-button";
import { LessonHero } from "@/components/lesson/lesson-hero";
import { PracticeTask } from "@/components/lesson/practice-task";
import { QuizCard } from "@/components/lesson/quiz-card";
import { VisualNoteCard } from "@/components/lesson/visual-note-card";
import { AppHeader } from "@/components/app-header";
import type { Lesson } from "@/types";

type LessonPageProps = {
  lesson: Lesson;
  nextLesson?: Lesson;
};

export function LessonPage({ lesson, nextLesson }: LessonPageProps) {
  const pairedPracticeCount = Math.max(
    lesson.fillBlankChallenges.length,
    lesson.practiceTasks.length,
  );

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <AppHeader />
      <div className="mx-auto w-full max-w-7xl px-6 py-10 sm:px-8 lg:px-12">
        <LessonHero
          title={lesson.title}
          difficulty={lesson.difficulty}
          estimatedTime={lesson.estimatedTime}
          xpReward={lesson.xp}
        />

        <div className="mt-8 grid gap-8">
          <section className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 sm:p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-emerald-300">
              {lesson.module}
            </p>
            <h2 className="mt-3 text-2xl font-semibold text-white">
              What you will learn
            </h2>
            <p className="mt-3 max-w-3xl leading-7 text-slate-300">
              {lesson.description}
            </p>
            <ul className="mt-5 grid gap-3 md:grid-cols-2">
              {lesson.learningObjectives.map((objective) => (
                <li key={objective} className="flex gap-3 text-sm text-slate-300">
                  <span className="mt-1 h-2 w-2 rounded-full bg-emerald-300" />
                  <span>{objective}</span>
                </li>
              ))}
            </ul>
          </section>

          {lesson.sections.map((section) => (
            <div key={section.title} className="grid gap-6">
              <section className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 sm:p-8">
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-emerald-300">
                  Explanation
                </p>
                <h2 className="mt-3 text-2xl font-semibold text-white">
                  {section.title}
                </h2>
                <div className="mt-5 grid gap-4 text-base leading-8 text-slate-300">
                  {section.content.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </section>

              {section.visual ? (
                <VisualNoteCard
                  title={section.visual.title}
                  description={section.visual.description}
                  variableName={section.visual.label}
                  variableValue={section.visual.value}
                  labelCaption="Name"
                  valueCaption="Stored value"
                />
              ) : null}
            </div>
          ))}

          <div className="grid gap-4">
            {lesson.codeExamples.map((example) => (
              <CodeBlock
                key={example.title}
                title={example.title}
                code={example.code}
              />
            ))}
            <div className="rounded-3xl border border-emerald-300/20 bg-emerald-300/10 p-5 sm:flex sm:items-center sm:justify-between sm:gap-6">
              <div>
                <h2 className="text-xl font-semibold text-white">
                  Try this in Playground
                </h2>
                <p className="mt-2 text-sm leading-6 text-emerald-100">
                  Open the playground to edit similar examples and compare your
                  prediction with simulated output.
                </p>
              </div>
              <Link
                href="/playground"
                className="mt-5 inline-flex h-12 items-center justify-center rounded-full bg-emerald-400 px-6 text-sm font-semibold text-slate-950 transition hover:bg-emerald-300 sm:mt-0"
              >
                Open Playground
              </Link>
            </div>
          </div>

          {lesson.quizzes.map((quiz) => (
            <QuizCard key={quiz.question} quiz={quiz} />
          ))}

          {Array.from({ length: pairedPracticeCount }).map((_, index) => {
            const fillBlank = lesson.fillBlankChallenges[index];
            const task = lesson.practiceTasks[index];

            if (!fillBlank || !task) {
              return null;
            }

            return (
              <PracticeTask
                key={`${fillBlank.prompt}-${task.title}`}
                fillBlank={fillBlank}
                task={task}
              />
            );
          })}

          <section className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 sm:p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-emerald-300">
              Summary
            </p>
            <h2 className="mt-3 text-2xl font-semibold text-white">
              What you learned
            </h2>
            <ul className="mt-5 grid gap-3">
              {lesson.summary.map((item) => (
                <li key={item} className="flex gap-3 text-slate-300">
                  <span className="mt-2 h-2 w-2 rounded-full bg-emerald-300" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          <LessonCompleteButton lessonSlug={lesson.slug} xpReward={lesson.xp} />

          <section className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 sm:p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-400">
              Up next
            </p>
            <h2 className="mt-3 text-2xl font-semibold text-white">
              {nextLesson ? nextLesson.title : "Next lesson coming soon"}
            </h2>
            <p className="mt-3 max-w-2xl leading-7 text-slate-300">
              {nextLesson
                ? nextLesson.description
                : "More Python Basics lessons are on the way. Review the curriculum to choose what to practice next."}
            </p>
            <Link
              href={nextLesson ? `/lessons/${nextLesson.slug}` : "/curriculum"}
              className="mt-6 inline-flex h-12 items-center justify-center rounded-full border border-white/10 px-6 text-sm font-semibold text-white transition hover:border-emerald-300/50 hover:bg-white/5"
            >
              {nextLesson ? "Open Next Lesson" : "Back to Curriculum"}
            </Link>
          </section>
        </div>
      </div>
    </main>
  );
}
