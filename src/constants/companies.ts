import {
  CaseSensitiveIcon,
  PythonIcon,
  SqlIcon,
} from "@hugeicons/core-free-icons";

export const COMPANY_CARDS = [
  {
    href: "#",
    img: "./zs.png",
    title: "ZS Associates",
    description: "Company-specific mocks, past questions and case frameworks.",
    badges: [
      { title: "SQL", icon: SqlIcon },
      { title: "Python", icon: PythonIcon },
      { title: "Cases", icon: CaseSensitiveIcon },
    ],
    buttonLabel: "Start ZS Mock",
  },
  {
    href: "#",
    img: "./american-express.png",
    title: "American Express",
    description: "Ace AmEx interviews with curated practice and insights.",
    badges: [
      { title: "SQL", icon: SqlIcon },
      { title: "Cases", icon: CaseSensitiveIcon },
      { title: "Communication", icon: CaseSensitiveIcon },
    ],
    buttonLabel: "Explore Prep",
  },
  {
    href: "#",
    img: "./goldman-sachs.png",
    title: "Goldman Sachs",
    description: "Technical and case prep tailored for analyst roles.",
    badges: [
      { title: "Python", icon: PythonIcon },
      { title: "DSA Basics", icon: CaseSensitiveIcon },
      { title: "Cases", icon: CaseSensitiveIcon },
    ],
    buttonLabel: "Explore Prep",
  },
  {
    href: "#",
    img: "./deloitte.png",
    title: "Deloitte",
    description: "Role-wise prep with real interview questions and tips.",
    badges: [
      { title: "SQL", icon: SqlIcon },
      { title: "Cases", icon: CaseSensitiveIcon },
      { title: "Guesstimates", icon: CaseSensitiveIcon },
    ],
    buttonLabel: "Explore Prep",
  },
] as const;
