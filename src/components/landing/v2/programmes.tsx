import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { PROGRAMMES } from "@/constants/our-programmes";
import { ArrowUpRight03Icon, CheckIcon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { LinkButton } from "@/components/link-button";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

const COLOR_STYLES = {
  sage: {
    bg: "bg-cc-sage-100 dark:bg-cc-sage-900/50",
    border: "border-cc-sage-200 dark:border-cc-sage-700/50",
    ring: "ring-cc-sage-200 dark:ring-cc-sage-700/50",
    gradient:
      "bg-gradient-to-b from-cc-sage-100/60 via-card to-card dark:from-cc-sage-900/30 dark:via-card dark:to-card",
  },
  orange: {
    bg: "bg-cc-orange/30 dark:bg-cc-orange/70",
    border: "border-cc-orange dark:border-cc-orange/50",
    ring: "ring-cc-orange dark:ring-cc-orange/50",
    gradient:
      "bg-gradient-to-b from-cc-orange/15 via-card to-card dark:from-cc-orange/15 dark:via-card dark:to-card",
  },
} as const;

export default function Programmes() {
  return (
    <section className="mx-auto mt-8 max-w-7xl px-4 py-12 md:px-6 md:py-20">
      <h2 className="text-center text-xl font-semibold sm:text-2xl md:text-3xl">
        Our Programmes
      </h2>

      <div className="mt-10 grid gap-8 sm:mt-14 md:grid-cols-3 lg:gap-10">
        {PROGRAMMES.map((card) => {
          const styles = COLOR_STYLES[card.color];

          return (
            <Card
              key={card.title}
              className={cn("rounded-4xl p-4 md:p-6", styles.gradient)}
            >
              <div
                className={cn("mt-2 ml-2 w-fit rounded-full p-4", styles.bg)}
              >
                <HugeiconsIcon icon={card.icon} className="size-9 md:size-12" />
              </div>
              <CardHeader>
                <CardTitle className="flex flex-wrap items-center gap-2 md:gap-4 md:text-xl">
                  {card.title}
                  <Badge variant="outline" className={cn("p-4 max-sm:-ml-1")}>
                    {card.badgeText}
                  </Badge>
                </CardTitle>
                <CardDescription className="md:text-md mt-2">
                  {card.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mt-2 space-y-2 md:space-y-3">
                  {card.content.map((item, index) => (
                    <div
                      key={index}
                      className="md:text-md flex items-center gap-2 text-sm"
                    >
                      <HugeiconsIcon
                        strokeWidth={1.75}
                        icon={CheckIcon}
                        className="text-green-600"
                      />
                      {item}
                    </div>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="mt-3 border-none bg-transparent px-0 pb-5 sm:pb-7">
                <LinkButton
                  href={card.footer.href}
                  variant="outline"
                  className="dark:text-foreground w-full rounded-full max-sm:text-xs p-6"
                >
                  {card.footer.text}
                  <HugeiconsIcon strokeWidth={2} icon={ArrowUpRight03Icon} />
                </LinkButton>
              </CardFooter>
            </Card>
          );
        })}
      </div>
    </section>
  );
}
