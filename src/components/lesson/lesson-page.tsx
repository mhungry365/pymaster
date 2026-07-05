import { AppHeader } from "@/components/app-header";
import { LessonCompleteButton } from "@/components/lesson/lesson-complete-button";
import { LessonHero } from "@/components/lesson/lesson-hero";
import { CodeExamplesSection } from "@/components/lesson/sections/CodeExamplesSection";
import { LearningObjectivesSection } from "@/components/lesson/sections/LearningObjectivesSection";
import { LessonNavigationSection } from "@/components/lesson/sections/LessonNavigationSection";
import { MistakeAndMemorySection } from "@/components/lesson/sections/MistakeAndMemorySection";
import { PracticeSection } from "@/components/lesson/sections/PracticeSection";
import { QuizSection } from "@/components/lesson/sections/QuizSection";
import { RealWorldExamplesSection } from "@/components/lesson/sections/RealWorldExamplesSection";
import { SummarySection } from "@/components/lesson/sections/SummarySection";
import { VisualLearningSection } from "@/components/lesson/sections/VisualLearningSection";
import { VisualNoteCard } from "@/components/lesson/visual-note-card";
import { Card } from "@/components/ui/Card";
import type { Lesson } from "@/types";

type LessonPageProps = {
  lesson: Lesson;
  nextLesson?: Lesson;
  previousLesson?: Lesson;
};

export function LessonPage({
  lesson,
  nextLesson,
  previousLesson,
}: LessonPageProps) {
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
          <LearningObjectivesSection
            module={lesson.module}
            description={lesson.description}
            objectives={lesson.learningObjectives}
          />

          <RealWorldExamplesSection examples={lesson.realWorldExamples} />

          {lesson.slug === "python-variables" ? <VisualLearningSection /> : null}

          {lesson.sections.map((section) => (
            <div key={section.title} className="grid gap-6">
              <Card>
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-emerald-300">
                  Lesson section
                </p>

                <h2 className="mt-3 text-2xl font-bold text-white">
                  {section.title}
                </h2>

                <div className="mt-5 grid gap-4 text-base leading-8 text-slate-300">
                  {section.content.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </Card>

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

          <MistakeAndMemorySection
            commonMistakes={lesson.commonMistakes}
            memoryTip={lesson.memoryTip}
          />

          <CodeExamplesSection examples={lesson.codeExamples} />

          <QuizSection quizzes={lesson.quizzes} />

          <PracticeSection
            fillBlankChallenges={lesson.fillBlankChallenges}
            practiceTasks={lesson.practiceTasks}
          />

          <SummarySection items={lesson.summary} />

          <LessonCompleteButton lessonSlug={lesson.slug} xpReward={lesson.xp} />

          <LessonNavigationSection
            previousLesson={previousLesson}
            nextLesson={nextLesson}
          />
        </div>
      </div>
    </main>
  );
}
