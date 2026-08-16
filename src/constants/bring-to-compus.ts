import {
    AudioLinesIcon,
    BriefcaseBusinessIcon,
    CodeXmlIcon,
    Comment03Icon,
    DatabaseIcon,
    PythonIcon,
    QuestionIcon
} from "@hugeicons/core-free-icons";

export const CARDS = [
  {
    icon: BriefcaseBusinessIcon,
    title: "Business Case Challenge",
    description:
      "Solve real-world business cases and guesstimates. Sharpen your structured thinking, frameworks and recommendations.",
    badges: [
      { title: "Cases", icon: CodeXmlIcon },
      { title: "Guesstimates", icon: QuestionIcon },
      { title: "Communication", icon: Comment03Icon },
    ],
  },
  {
    icon: CodeXmlIcon,
    title: "Tech Analyst Challenge",
    description:
      "Test your SQL, Python and problem-solving skills through practical, real-world data problems with voice explanation",
    badges: [
      { title: "SQL", icon: DatabaseIcon },
      { title: "Python", icon: PythonIcon },
      { title: "Voice Explanation", icon: AudioLinesIcon },
    ],
  },
] as const;