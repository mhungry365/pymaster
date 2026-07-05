import { AnimatedCodeStep } from "@/components/lesson/AnimatedCodeStep";
import { CommonMistakeCard } from "@/components/lesson/CommonMistakeCard";
import { ConceptFlow } from "@/components/lesson/ConceptFlow";
import { MemoryCard } from "@/components/lesson/MemoryCard";
import { VariableBox } from "@/components/lesson/VariableBox";

export function VisualLearningSection() {
  return (
    <section className="grid gap-6">
      <MemoryCard>
        Think of a variable as a labelled box. The label is the variable name,
        and the thing inside the box is the value.
      </MemoryCard>

      <VariableBox name="name" value='"Mingz"' typeLabel="string" />

      <ConceptFlow
        steps={["Create variable", "Store value", "Print variable", "See output"]}
      />

      <AnimatedCodeStep
        steps={[
          {
            code: 'name = "Mingz"',
            explanation:
              'Python creates a variable called name and stores the text "Mingz" inside it.',
          },
          {
            code: 'print(name)',
            explanation:
              "Python looks inside the name variable and prints the stored value.",
          },
          {
            code: "Mingz",
            explanation:
              "This is the output. Python prints the value, not the variable name.",
          },
        ]}
      />

      <CommonMistakeCard
        wrongCode="name == &quot;Mingz&quot;"
        correctCode="name = &quot;Mingz&quot;"
        explanation="Use one equals sign (=) to store a value. Two equals signs (==) are used later when you want to compare two values."
      />
    </section>
  );
}
