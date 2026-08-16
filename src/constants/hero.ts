import {
    AiBrain03Icon,
    CreditCardNotFoundIcon,
    Login02Icon
} from "@hugeicons/core-free-icons";

import { SecurityCheckIcon } from "@hugeicons/core-free-icons";

export const FEATURES = [
  {
    title: "AI Powered Practice",
    icon: AiBrain03Icon,
  },
  {
    title: "Free To Start",
    icon: SecurityCheckIcon,
  },
  {
    title: "No Credit Card",
    icon: CreditCardNotFoundIcon,
  },
  {
    title: "Instant Access",
    icon: Login02Icon,
  },
] as const;