import { QuizCard } from "@/components/lesson/quiz-card";
import type { Lesson } from "@/types";

type Props = {
  quizzes: Lesson["quizzes"];
};

export function QuizSection({ quizzes }: Props) {
  return (
    <div className="grid gap-4">
      {quizzes.map((quiz) => (
        <QuizCard key={quiz.question} quiz={quiz} />
      ))}
    </div>
  );
}
