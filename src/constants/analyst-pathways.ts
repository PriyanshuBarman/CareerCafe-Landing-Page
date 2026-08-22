import {
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
  User03Icon,
  WorkflowSquare06Icon,
} from "@hugeicons/core-free-icons";
import type { IconSvgObject } from "@hugeicons/core-free-icons/types";

type RoleBadge = {
  title: string;
  icon?: IconSvgObject;
};

export type AnalystPathwayItem = {
  icon: IconSvgObject;
  title: string;
  description: string;
  badges: RoleBadge[];
  buttonLabel?: string;
  href?: string;
};

export const ROLES = [
  {
    icon: ChartUpIcon,
    title: "Business Analyst",
    description: "Structure business problems and turn insights into action.",
    href: "/analyst-tracks?role=business",
    badges: [
      { title: "SQL", icon: DatabaseIcon },
      { title: "Requirements", icon: DashboardSquare02Icon },
      { title: "Business Cases", icon: FileSpreadsheetIcon },
    ],
  },
  {
    icon: DatabaseSearchIcon,
    title: "Data Analyst",
    description: "Query, interpret and explain data with clarity.",
    href: "/analyst-tracks?role=data",
    badges: [
      { title: "SQL", icon: DatabaseIcon },
      { title: "Excel & BI", icon: FileSpreadsheetIcon },
      { title: "Statistics", icon: ChartAnalysisIcon },
    ],
  },
  {
    icon: CodeXmlIcon,
    title: "Technical Analyst",
    description: "Solve technical problems with practical analyst thinking.",
    href: "/analyst-tracks?role=technical",
    badges: [
      { title: "SQL", icon: DatabaseIcon },
      { title: "Python", icon: PythonIcon },
      { title: "Data Workflows", icon: WorkflowSquare06Icon },
    ],
  },
  {
    icon: User03Icon,
    title: "Consulting Analyst",
    description: "Structure recommendations and defend your thinking clearly.",
    href: "/analyst-tracks?role=consulting",
    badges: [
      { title: "Cases", icon: CodeXmlIcon },
      { title: "Guesstimates", icon: QuestionIcon },
      { title: "Communication", icon: Comment03Icon },
    ],
  },
] as const satisfies AnalystPathwayItem[];
