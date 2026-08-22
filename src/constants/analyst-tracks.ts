import {
  ChartAnalysisIcon,
  ChartUpIcon,
  CodeXmlIcon,
  DashboardSquare02Icon,
  DatabaseIcon,
  DatabaseSearchIcon,
  File02Icon,
  FileSpreadsheetIcon,
  Presentation01Icon,
  PythonIcon,
  QuestionIcon,
  Settings02Icon,
  Target02Icon,
  User03Icon,
  WorkflowSquare06Icon,
} from "@hugeicons/core-free-icons";
import type { IconSvgObject } from "@hugeicons/core-free-icons/types";

export type TrackSkill = {
  name: string;
  icon?: IconSvgObject;
};

export type TrackAbout = {
  focus: string;
  strengths: string;
  typicalTools: string;
  careerGrowth: string[];
};

export type TrackId = "business" | "data" | "technical" | "consulting";

export type AnalystTrack = {
  id: TrackId;
  name: string;
  icon: IconSvgObject;
  description: string;
  typicalWork: string[];
  coreSkills: TrackSkill[];
  interviewFocus: string[];
  about: TrackAbout;
  practiceLink: string;
  interviewQuestionsLink: string;
};

export const ANALYST_TRACKS: Record<TrackId, AnalystTrack> = {
  business: {
    id: "business",
    name: "Business Analyst",
    icon: ChartUpIcon,
    description: "Solve business problems and improve processes.",
    typicalWork: [
      "Understand business requirements and map processes",
      "Analyze operational workflows and identify bottlenecks",
      "Work with stakeholders to align business and technical needs",
      "Conduct cost-benefit analysis and track KPIs",
    ],
    coreSkills: [
      { name: "SQL", icon: DatabaseIcon },
      { name: "Excel", icon: FileSpreadsheetIcon },
      { name: "Requirements Gathering", icon: DashboardSquare02Icon },
      { name: "Process Modeling", icon: WorkflowSquare06Icon },
      { name: "Business Cases", icon: File02Icon },
    ],
    interviewFocus: [
      "Business case studies & guesstimates",
      "SQL & data interpretation",
      "Requirement elicitation & scoping",
      "Process mapping & user stories",
      "Projects walkthrough",
      "Behavioral & stakeholder questions",
    ],
    about: {
      focus:
        "Bridging business needs with technology solutions to improve operations.",
      strengths: "Structured thinking, communication, problem breakdown.",
      typicalTools: "Excel, SQL, JIRA, Lucidchart, Power BI/Tableau",
      careerGrowth: [
        "Business Analyst",
        "Senior Analyst",
        "Lead Analyst",
        "Product / Business Manager",
      ],
    },
    practiceLink: "#practice-business",
    interviewQuestionsLink: "#questions-business",
  },
  data: {
    id: "data",
    name: "Data Analyst",
    icon: DatabaseSearchIcon,
    description: "Turn data into insights that drive better decisions.",
    typicalWork: [
      "Collect, clean and analyze data",
      "Create reports and dashboards",
      "Identify trends and insights",
      "Support data-driven decision making",
    ],
    coreSkills: [
      { name: "SQL", icon: DatabaseIcon },
      { name: "Python", icon: PythonIcon },
      { name: "Excel", icon: FileSpreadsheetIcon },
      { name: "Statistics", icon: ChartAnalysisIcon },
      { name: "BI tools", icon: DashboardSquare02Icon },
    ],
    interviewFocus: [
      "SQL",
      "Python fundamentals",
      "Statistics & Probability",
      "Data interpretation",
      "Projects",
      "Behavioral questions",
    ],
    about: {
      focus: "Working with data to extract meaningful insights.",
      strengths: "Analytical thinking, curiosity, attention to detail.",
      typicalTools: "SQL, Python, Excel, Power BI/Tableau, Sheets",
      careerGrowth: [
        "Data Analyst",
        "Senior Analyst",
        "Lead Analyst",
        "Data Manager",
      ],
    },
    practiceLink: "#practice-data",
    interviewQuestionsLink: "#questions-data",
  },
  technical: {
    id: "technical",
    name: "Technical Analyst",
    icon: CodeXmlIcon,
    description: "Work with data, systems and technical problem solving.",
    typicalWork: [
      "Analyze system logs, database queries and API bottlenecks",
      "Build automated scripts and data pipelines",
      "Collaborate with engineers on technical architecture specs",
      "Troubleshoot issues and support scalable integrations",
    ],
    coreSkills: [
      { name: "SQL", icon: DatabaseIcon },
      { name: "Python", icon: PythonIcon },
      { name: "APIs & Integration", icon: CodeXmlIcon },
      { name: "Data Pipelines", icon: WorkflowSquare06Icon },
      { name: "Debugging & Logs", icon: Settings02Icon },
    ],
    interviewFocus: [
      "SQL optimization & database concepts",
      "Python scripting & basic DSA",
      "System integration, APIs & data flows",
      "Technical troubleshooting & root cause analysis",
      "Technical projects walkthrough",
      "Behavioral questions",
    ],
    about: {
      focus:
        "Diagnosing technical issues, building pipelines and supporting system integrations.",
      strengths: "Technical problem solving, code fluency, systems thinking.",
      typicalTools: "SQL, Python, Postman, Git, Linux CLI, Airflow",
      careerGrowth: [
        "Technical Analyst",
        "Senior Technical Analyst",
        "Systems Architect",
        "Data Engineer",
      ],
    },
    practiceLink: "#practice-technical",
    interviewQuestionsLink: "#questions-technical",
  },
  consulting: {
    id: "consulting",
    name: "Consulting Analyst",
    icon: User03Icon,
    description: "Solve business challenges using structured thinking.",
    typicalWork: [
      "Structure ambiguous business problems using frameworks",
      "Conduct market research, benchmarking and sizing",
      "Build financial models and slide presentations",
      "Present strategic recommendations to leadership",
    ],
    coreSkills: [
      { name: "Case Solving", icon: Target02Icon },
      { name: "Guesstimates", icon: QuestionIcon },
      { name: "Excel & Modeling", icon: FileSpreadsheetIcon },
      { name: "PowerPoint & Storytelling", icon: Presentation01Icon },
      { name: "SQL & Data Sense", icon: DatabaseIcon },
    ],
    interviewFocus: [
      "Interactive business cases",
      "Guesstimates & mental math",
      "Commercial acumen & business models",
      "Structured problem breakdown (MECE)",
      "Executive presentation & projects",
      "Behavioral & leadership fit",
    ],
    about: {
      focus:
        "Solving complex client problems with hypothesis-driven frameworks and decks.",
      strengths: "Problem structuring, fast synthesis, executive presence.",
      typicalTools: "PowerPoint, Excel, Think-Cell, Case Frameworks",
      careerGrowth: [
        "Consulting Analyst",
        "Senior Associate",
        "Engagement Manager",
        "Associate Partner",
      ],
    },
    practiceLink: "#practice-consulting",
    interviewQuestionsLink: "#questions-consulting",
  },
};
