import { Card, CardContent } from "@/components/ui/card";
import { ROLES } from "@/constants/roles";
import { ArrowUpRight03Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

export default function Roles() {
  return (
    <section className="mx-auto mt-8 max-w-7xl px-4 py-14 md:px-6 md:py-26">
      <h2 className="text-center text-xl font-semibold sm:text-2xl md:text-3xl">
        Choose your analyst direction.
      </h2>
      <p className="text-muted-foreground mt-3 text-center text-sm text-balance sm:text-xl">
        One foundation. Different interview directions.
      </p>

      <div className="mt-10 grid gap-4 sm:mt-14 md:grid-cols-2 md:gap-6 lg:grid-cols-4">
        {ROLES.map((card) => (
          <Link key={card.title} href="#" className="rounded-4xl">
            <Card className="h-full rounded-4xl p-6 transition-all duration-300 hover:scale-102 md:p-7">
              <CardContent className="flex flex-1 flex-col px-0">
                <div className="bg-cc-sage-100 dark:bg-accent w-fit rounded-2xl p-4 md:rounded-3xl md:p-4.5">
                  <HugeiconsIcon
                    strokeWidth={1.75}
                    icon={card.icon}
                    className="size-6 md:size-6.5"
                  />
                </div>

                <h3 className="text-md mt-4 font-medium sm:text-lg">
                  {card.title}
                </h3>

                <div className="mt-4 flex flex-wrap items-center gap-x-2 gap-y-2 sm:mt-6 sm:gap-x-3">
                  {card.badges.map((badge) => (
                    <span
                      key={badge.title}
                      className="bg-cc-sage-100 dark:bg-accent flex items-center gap-1 rounded-md border-r p-2 py-1 text-xs font-[450] md:gap-2 md:text-xs [&>svg]:size-4! md:[&>svg]:size-4!"
                    >
                      <HugeiconsIcon icon={badge.icon} strokeWidth={1.75} />
                      <span>{badge.title}</span>
                    </span>
                  ))}
                </div>

                <p className="text-muted-foreground sm:text-md mt-3 text-sm md:mt-4">
                  {card.description}
                </p>

                <Badge
                  variant="ghost"
                  className="mt-auto ml-auto rounded-full hover:bg-transparent [&>svg]:size-4! md:[&>svg]:size-5!"
                >
                  <HugeiconsIcon strokeWidth={1.75} icon={ArrowUpRight03Icon} />
                </Badge>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </section>
  );
}
