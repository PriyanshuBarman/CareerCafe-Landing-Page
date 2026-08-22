"use client";

import { ArrowUpRight03Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";

import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { LinkButton } from "@/components/link-button";
import { type AnalystPathwayItem } from "@/constants/analyst-pathways";

export default function AnalystPathwayCard({
  item,
}: {
  item: AnalystPathwayItem;
}) {
  return (
    <Card className="mx-auto h-full w-full rounded-3xl p-5 sm:max-w-full sm:p-6">
      <CardHeader className="flex flex-row items-center gap-4 px-0 sm:flex-col">
        <div className="bg-cc-sage-100 dark:bg-accent w-fit rounded-2xl p-4 md:rounded-3xl md:p-4.5">
          <HugeiconsIcon
            strokeWidth={1.75}
            icon={item.icon}
            className="size-5 md:size-7"
          />
        </div>

        <CardTitle className="text-md font-medium sm:text-lg">
          {item.title}
        </CardTitle>
      </CardHeader>

      <CardContent className="flex flex-1 flex-col px-0 sm:items-center sm:justify-center sm:text-center">
        <div className="flex flex-wrap items-center gap-x-3 gap-y-2 sm:justify-center sm:gap-x-3">
          {item.badges.map((badge) => (
            <Badge
              key={badge.title}
              className="bg-cc-sage-100/50 text-foreground dark:bg-accent text-2xs rounded-md px-2 py-3 font-[450] sm:px-2.5 sm:py-3.5 sm:text-xs [&>svg]:size-4! sm:[&>svg]:size-4!"
            >
              {badge.icon && (
                <HugeiconsIcon icon={badge.icon} strokeWidth={1.75} />
              )}
              <span>{badge.title}</span>
            </Badge>
          ))}
        </div>

        <Separator className="max-sm:hidden sm:my-6" />

        <p className="text-muted-foreground sm:text-md mt-3 px-1 text-xs text-balance sm:mt-0">
          {item.description}
        </p>
      </CardContent>

      <CardFooter className="bg-card border-none px-0 pt-0">
        <LinkButton
          href={item.href || "/analyst-tracks"}
          variant="link"
          className="text-primary w-full justify-start px-1 py-5 text-xs sm:justify-center sm:text-sm"
        >
          {item.buttonLabel || item.title}
          <HugeiconsIcon strokeWidth={1.75} icon={ArrowUpRight03Icon} />
        </LinkButton>
      </CardFooter>
    </Card>
  );
}
