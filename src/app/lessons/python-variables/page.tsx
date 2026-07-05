import { CodeBlock } from "@/components/lesson/code-block";
import { LessonCompleteButton } from "@/components/lesson/lesson-complete-button";
import { LessonHero } from "@/components/lesson/lesson-hero";
import { PracticeTask } from "@/components/lesson/practice-task";
import { QuizCard } from "@/components/lesson/quiz-card";
import { VisualNoteCard } from "@/components/lesson/visual-note-card";
import { AppHeader } from "@/components/app-header";
import { pythonVariablesLesson } from "@/data/lessons";

export default function PythonVariablesLessonPage() {
  const lesson = pythonVariablesLesson;

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <AppHeader />
      <div className="mx-auto w-full max-w-7xl px-6 py-10 sm:px-8 lg:px-12">
        <LessonHero
          title={lesson.title}
          difficulty={lesson.difficulty}
          estimatedTime={lesson.estimatedTime}
          xpReward={lesson.xpReward}
        />

        <div className="mt-8 grid gap-8">
          <section className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 sm:p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-emerald-300">
              Explanation
            </p>
            <h2 className="mt-3 text-2xl font-semibold text-white">
              What is a variable?
            </h2>
            <div className="mt-5 grid gap-4 text-base leading-8 text-slate-300">
              {lesson.explanation.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </section>

          <VisualNoteCard {...lesson.visualNote} />

          <CodeBlock
            title={lesson.codeExample.title}
            code={lesson.codeExample.code}
          />

          <QuizCard quiz={lesson.quiz} />

          <PracticeTask
            fillBlank={lesson.fillBlank}
            task={lesson.practiceTask}
          />

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

          <LessonCompleteButton xpReward={lesson.xpReward} />
        </div>
      </div>
    </main>
  );
}
