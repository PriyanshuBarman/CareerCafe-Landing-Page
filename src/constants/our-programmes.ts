import {
  Award04Icon,
  BotMessageSquareIcon,
  BubbleChatSpark01Icon,
  CalendarRangeIcon,
  EnergyIcon,
  GraduationCapIcon,
  Male02Icon,
} from "@hugeicons/core-free-icons";

export const PROGRAMMES = [
  {
    color: "sage",
    icon: GraduationCapIcon,
    title: "Analyst Foundation",
    badgeText: "For 1st & 2nd Year Students",
    description:
      "Build strong fundamentals and practical skills through guided learning & practice.",
    content: [
      "Concepts & Notes",
      "SQL, Python, Excel, Pandas",
      "MCQs, Puzzles, Quizzes",
      "Build consistency & confidence",
    ],
    badges: [
      { title: "12 Months Validity", icon: CalendarRangeIcon },
      { title: "AI Powered Mocks", icon: BotMessageSquareIcon },
      { title: "Expert Guidance", icon: GraduationCapIcon },
    ],
    footer: {
      text: "Explore Foundation",
      href: "#",
    },
  },
  {
    color: "orange",
    icon: Award04Icon,
    title: "Placement Pass",
    badgeText: "For Pre-Final & Final Year Students",
    description:
      "Role-specific prep, interview simulations and human validation.",
    content: [
      "Role & company specific prep",
      "AI + Human mock interviews",
      "Case studies & Guesstimates",
      "Resume & Project defence",
    ],
    badges: [
      { title: "6 Months Validity", icon: CalendarRangeIcon },
      { title: "Human Mock Interviews", icon: Male02Icon },
      { title: "Personalized Feedback", icon: BubbleChatSpark01Icon },
    ],
    footer: {
      text: "Explore Placement Pass",
      href: "#",
    },
  },
  {
    color: "sage",
    icon: EnergyIcon,
    title: "Interview Sprint",
    badgeText: "Interview-ready candidate",
    description:
      "Role-specific prep, interview simulations and human validation.",
    content: [
      "Role & company specific prep",
      "AI + Human mock interviews",
      "Case studies & Guesstimates",
      "Resume & Project defence",
    ],
    badges: [
      { title: "6 Months Validity", icon: CalendarRangeIcon },
      { title: "Human Mock Interviews", icon: Male02Icon },
      { title: "Personalized Feedback", icon: BubbleChatSpark01Icon },
    ],
    footer: {
      text: "Explore Interview Sprint",
      href: "#",
    },
  },
] as const;
