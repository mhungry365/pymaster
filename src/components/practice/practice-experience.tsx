"use client";

import { useMemo, useState } from "react";
import { ChallengeCard } from "@/components/practice/challenge-card";
import { FillBlankCard } from "@/components/practice/fill-blank-card";
import { PracticeProgress } from "@/components/practice/practice-progress";
import { PracticeQuestionCard } from "@/components/practice/practice-question-card";
import { miniChallenge, practiceQuestions } from "@/data/questions";

type AnswerState = {
  value: string;
  isCorrect: boolean;
};

export function PracticeExperience() {
  const [answers, setAnswers] = useState<Record<string, AnswerState>>({});
  const [challengeResponse, setChallengeResponse] = useState("");
  const [isChallengeComplete, setIsChallengeComplete] = useState(false);

  const completedQuestionCount = useMemo(
    () =>
      practiceQuestions.filter((question) => answers[question.id]?.isCorrect)
        .length,
    [answers],
  );
  const completedCount =
    completedQuestionCount + (isChallengeComplete ? 1 : 0);
  const totalCount = practiceQuestions.length + 1;
  const earnedXp =
    practiceQuestions.reduce(
      (total, question) =>
        total + (answers[question.id]?.isCorrect ? question.xpReward : 0),
      0,
    ) + (isChallengeComplete ? miniChallenge.xpReward : 0);
  const totalXp =
    practiceQuestions.reduce(
      (total, question) => total + question.xpReward,
      0,
    ) + miniChallenge.xpReward;

  function updateAnswer(
    questionId: string,
    value: string,
    isCorrect: boolean,
  ) {
    setAnswers((currentAnswers) => ({
      ...currentAnswers,
      [questionId]: { value, isCorrect },
    }));
  }

  return (
    <div className="grid gap-6">
      <PracticeProgress
        completedCount={completedCount}
        totalCount={totalCount}
        earnedXp={earnedXp}
        totalXp={totalXp}
      />

      <div className="grid gap-6">
        {practiceQuestions.map((question) => {
          if (question.type === "fill-blank") {
            return (
              <FillBlankCard
                key={question.id}
                question={question}
                answer={answers[question.id]?.value}
                onChangeAnswer={updateAnswer}
              />
            );
          }

          return (
            <PracticeQuestionCard
              key={question.id}
              question={question}
              selectedOptionId={answers[question.id]?.value}
              onSelectAnswer={updateAnswer}
            />
          );
        })}

        <ChallengeCard
          challenge={miniChallenge}
          response={challengeResponse}
          isComplete={isChallengeComplete}
          onChangeResponse={setChallengeResponse}
          onComplete={() => setIsChallengeComplete(true)}
        />
      </div>
    </div>
  );
}
