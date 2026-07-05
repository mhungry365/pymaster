import { LessonSection } from "@/types/lesson";

export function renderSection(section: LessonSection) {
  switch (section.type) {
    case "hero":
      return <div>Hero Section</div>;

    case "text":
      return <div>Text Section</div>;

    case "memory":
      return <div>Memory Section</div>;

    case "variable-box":
      return <div>Variable Box</div>;

    case "concept-flow":
      return <div>Concept Flow</div>;

    case "animated-code":
      return <div>Animated Code</div>;

    case "common-mistake":
      return <div>Common Mistake</div>;

    case "quiz":
      return <div>Quiz</div>;

    case "practice":
      return <div>Practice</div>;

    case "summary":
      return <div>Summary</div>;

    default:
      return null;
  }
}
