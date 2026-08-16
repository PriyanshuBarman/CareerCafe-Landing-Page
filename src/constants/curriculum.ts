import {
    BriefcaseBusinessIcon,
    CodeFolderIcon,
    Comment03Icon,
    DatabaseIcon,
    PythonIcon,
    QuestionIcon
} from "@hugeicons/core-free-icons";

export const CURRICULUM = [
  {
    title: "SQL",
    percentage: 80,
    icon: DatabaseIcon,
  },
  { title: "Python", percentage: 65, icon: PythonIcon },
  {
    title: "Business Cases",
    percentage: 58,
    icon: BriefcaseBusinessIcon,
  },
  { title: "Guesstimates", percentage: 50, icon: QuestionIcon },
  { title: "Projects", percentage: 60, icon: CodeFolderIcon },
  { title: "Communication", percentage: 58, icon: Comment03Icon },
] as const;