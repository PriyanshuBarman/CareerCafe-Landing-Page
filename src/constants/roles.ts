import {
  Brain03Icon,
  ChartAnalysisIcon,
  ChartUpIcon,
  CodeXmlIcon,
  Comment03Icon,
  DashboardSquare02Icon,
  DatabaseIcon,
  DatabaseSearchIcon,
  FileSpreadsheetIcon,
  PythonIcon,
  QuestionIcon,
  User03Icon
} from "@hugeicons/core-free-icons";

export const ROLES = [
  {
    icon: ChartUpIcon,
    title: "Business Analyst",
    description:
      "Focus on data-driven insights, reporting and business acumen.",
    badges: [
      { title: "Excel", icon: FileSpreadsheetIcon },
      { title: "SQL", icon: DatabaseIcon },
      { title: "Dashboards", icon: DashboardSquare02Icon },
    ],
  },
  {
    icon: DatabaseSearchIcon,
    title: "Data Analyst",
    description:
      "Work with data, uncover patterns and build analytical models.",
    badges: [
      { title: "SQL", icon: DatabaseIcon },
      { title: "Python", icon: PythonIcon },
      { title: "Stats", icon: ChartAnalysisIcon },
    ],
  },
  {
    icon: CodeXmlIcon,
    title: "Technical Analyst",
    description: "Solve problems with code and strong analytical thinking.",
    badges: [
      { title: "SQL", icon: DatabaseIcon },
      { title: "Python", icon: PythonIcon },
      { title: "DSA Basics", icon: Brain03Icon },
    ],
  },
  {
    icon: User03Icon,
    title: "Consulting Analyst",
    description:
      "Tackle business cases, estimates and structured communication.",
    badges: [
      { title: "Cases", icon: CodeXmlIcon },
      { title: "Guesstimates", icon: QuestionIcon },
      { title: "Communication", icon: Comment03Icon },
    ],
  },
] as const;
