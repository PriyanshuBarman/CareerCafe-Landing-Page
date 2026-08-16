import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { COMPANY_CARDS } from "@/constants/companies";
import { ArrowUpRight03Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Marquee } from "@/components/ui/marquee";

export default function CompanyPrep() {
  return (
    <section className="max-w-8xl mx-auto mt-8 py-12 md:py-20">
      <h2 className="px-4 text-center text-xl font-semibold sm:text-2xl md:px-6 md:text-3xl">
        Prepare for the company, not just the topic.
      </h2>

      <Marquee className="mt-10 flex gap-8 mask-x-from-90% sm:mt-14 sm:mask-x-from-80% sm:[--gap:2rem]">
        {COMPANY_CARDS.map((item) => (
          <Link key={item.title} href={item.href} className="rounded-4xl">
            <Card className="h-full max-w-xs rounded-4xl p-4 sm:max-w-md sm:p-8">
              <CardContent className="flex flex-1 flex-col px-0">
                <div className="flex items-center gap-4">
                  <Avatar className="size-12 after:border-none sm:size-18">
                    <AvatarImage src={item.img} alt={`${item.title} logo`} />
                    <AvatarFallback />
                  </Avatar>

                  <div>
                    <h3 className="text-sm font-medium sm:text-lg">
                      {item.title}
                    </h3>
                    <div className="text-muted-foreground mt-2 flex items-center gap-2">
                      {item.badges.map((badge) => (
                        <Badge
                          variant="secondary"
                          key={badge.title}
                          className="max-sm:text-2xs gap-1 rounded-sm px-2 py-1 md:gap-2 md:rounded-md md:px-2.5 md:py-3.5 md:[&>svg]:size-4!"
                        >
                          <HugeiconsIcon
                            icon={badge.icon}
                            strokeWidth={1.75}
                            className="max-sm:hidden"
                          />
                          {badge.title}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>

                <p className="text-muted-foreground my-4 max-sm:px-1 sm:my-6 sm:text-base">
                  {item.description}
                </p>

                <Button
                  variant="ghost"
                  className="text-primary mt-auto px-0 mr-auto hover:bg-transparent max-sm:text-xs"
                >
                  {item.buttonLabel}
                  <HugeiconsIcon strokeWidth={2} icon={ArrowUpRight03Icon} />
                </Button>
              </CardContent>
            </Card>
          </Link>
        ))}
      </Marquee>
    </section>
  );
}
