"use client";

import { useMemo, useState } from "react";
import { ChallengeCard } from "@/components/practice/challenge-card";
import { FillBlankCard } from "@/components/practice/fill-blank-card";
import { PracticeProgress } from "@/components/practice/practice-progress";
import { PracticeQuestionCard } from "@/components/practice/practice-question-card";
import { PracticeSummaryCard } from "@/components/practice/practice-summary-card";
import { miniChallenge, practiceQuestions } from "@/data/questions";
import { useProgress } from "@/hooks/use-progress";

type AnswerState = {
  value: string;
  isCorrect: boolean;
};

export function PracticeExperience() {
  const { completePracticeQuestion, progress } = useProgress();
  const [answers, setAnswers] = useState<Record<string, AnswerState>>({});
  const [challengeResponse, setChallengeResponse] = useState("");
  const completedPracticeIds = progress.completedPracticeQuestionIds;

  const completedQuestionCount = useMemo(
    () =>
      practiceQuestions.filter((question) =>
        completedPracticeIds.includes(question.id),
      ).length,
    [completedPracticeIds],
  );
  const isChallengeComplete = completedPracticeIds.includes(miniChallenge.id);
  const completedCount = completedQuestionCount + (isChallengeComplete ? 1 : 0);
  const totalCount = practiceQuestions.length + 1;
  const earnedXp =
    practiceQuestions.reduce(
      (total, question) =>
        total +
        (completedPracticeIds.includes(question.id) ? question.xpReward : 0),
      0,
    ) + (isChallengeComplete ? miniChallenge.xpReward : 0);
  const totalXp =
    practiceQuestions.reduce(
      (total, question) => total + question.xpReward,
      0,
    ) + miniChallenge.xpReward;
  const progressPercent =
    totalCount > 0 ? Math.round((completedCount / totalCount) * 100) : 0;

  function updateAnswer(
    questionId: string,
    value: string,
    isCorrect: boolean,
  ) {
    const question = practiceQuestions.find((item) => item.id === questionId);

    setAnswers((currentAnswers) => ({
      ...currentAnswers,
      [questionId]: { value, isCorrect },
    }));

    if (isCorrect && question) {
      completePracticeQuestion(questionId, question.xpReward);
    }
  }

  return (
    <div className="grid gap-6">
      <PracticeProgress
        completedCount={completedCount}
        totalCount={totalCount}
        earnedXp={earnedXp}
        totalXp={totalXp}
      />
      <PracticeSummaryCard
        totalQuestions={totalCount}
        completedQuestions={completedCount}
        earnedXp={earnedXp}
        totalXp={totalXp}
        progressPercent={progressPercent}
      />

      <div className="grid gap-6">
        {practiceQuestions.map((question) => {
          if (question.type === "fill-blank") {
            return (
              <FillBlankCard
                key={question.id}
                question={question}
                answer={answers[question.id]?.value}
                isCompleted={completedPracticeIds.includes(question.id)}
                onChangeAnswer={updateAnswer}
              />
            );
          }

          return (
            <PracticeQuestionCard
              key={question.id}
              question={question}
              selectedOptionId={answers[question.id]?.value}
              isCompleted={completedPracticeIds.includes(question.id)}
              onSelectAnswer={updateAnswer}
            />
          );
        })}

        <ChallengeCard
          challenge={miniChallenge}
          response={challengeResponse}
          isComplete={isChallengeComplete}
          onChangeResponse={setChallengeResponse}
          onComplete={() =>
            completePracticeQuestion(miniChallenge.id, miniChallenge.xpReward)
          }
        />
      </div>
    </div>
  );
}
