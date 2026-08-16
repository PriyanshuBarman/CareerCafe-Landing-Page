import { LinkButton } from "@/components/link-button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { CARDS } from "@/constants/bring-to-compus";
import { ArrowUpRight01Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";

export default function BringToCampus() {
  return (
    <section className="dark:bg-background bg-zinc-50">
      <div className="mx-auto mt-8 max-w-7xl px-4 py-14 md:px-6 md:py-26">
        <div className="flex flex-col items-center justify-center text-center text-balance">
          <h2 className="text-xl font-semibold sm:text-2xl md:text-3xl">
            Bring the analyst challenge to your campus.
          </h2>
          <p className="text-muted-foreground mt-3 text-sm text-balance sm:mt-4 sm:text-xl">
            Engaging, role-relevant challenges that help students learn, compete
            and get noticed.
          </p>

          <LinkButton
            href="#"
            className="mt-6 rounded-full border-none p-5 max-sm:text-xs sm:p-6"
          >
            Explore Campus Challenge
            <HugeiconsIcon icon={ArrowUpRight01Icon} strokeWidth={2} />
          </LinkButton>
        </div>

        <div className="mt-10 grid gap-8 sm:mt-14 md:grid-cols-2 md:gap-12">
          {CARDS.map((card) => (
            <Card
              key={card.title}
              className="relative rounded-4xl p-6 shadow ring-0 md:p-8"
            >
              <BackgroundPattern />
              <CardContent className="px-0">
                <div className="bg-accent w-fit rounded-2xl p-4 md:rounded-4xl md:p-4.5">
                  <HugeiconsIcon icon={card.icon} className="md:size-9" />
                </div>

                <h3 className="mt-4 flex flex-wrap items-center gap-2 text-base font-medium md:gap-4 md:text-xl">
                  {card.title}
                </h3>

                <p className="md:text-md text-muted-foreground mt-2">
                  {card.description}
                </p>

                <div className="mt-4 flex flex-wrap gap-2 md:mt-6 md:gap-3">
                  {card.badges.map((badge) => (
                    <Badge
                      key={badge.title}
                      variant="secondary"
                      className="bg-accent gap-1 rounded-lg px-3 py-3.5 md:gap-2 md:px-4 md:py-4.5 [&>svg]:size-4! md:[&>svg]:size-6!"
                    >
                      <HugeiconsIcon icon={badge.icon} strokeWidth={1.75} />
                      <span className="text-wrap">{badge.title}</span>
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

function BackgroundPattern() {
  return (
    <div
      className="absolute inset-0 -top-px z-0"
      style={{
        backgroundImage: `
        linear-gradient(to right, var(--border) 1px, transparent 1px),
        linear-gradient(to bottom, var(--border) 1px, transparent 1px)
      `,
        backgroundSize: "20px 20px",
        backgroundPosition: "0 0, 0 0",
        maskImage: `
          repeating-linear-gradient(
              to right,
              black 0px,
              black 3px,
              transparent 3px,
              transparent 8px
            ),
            repeating-linear-gradient(
              to bottom,
              black 0px,
              black 3px,
              transparent 3px,
              transparent 8px
            ),
            radial-gradient(ellipse 100% 80% at 100% 0%, #000 50%, transparent 100%)
      `,
        WebkitMaskImage: `
    repeating-linear-gradient(
              to right,
              black 0px,
              black 3px,
              transparent 3px,
              transparent 8px
            ),
            repeating-linear-gradient(
              to bottom,
              black 0px,
              black 3px,
              transparent 3px,
              transparent 8px
            ),
            radial-gradient(ellipse 80% 80% at 100% 0%, #000 50%, transparent 90%)
      `,
        maskComposite: "intersect",
        WebkitMaskComposite: "source-in",
      }}
    />
  );
}
