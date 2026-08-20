"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { type RolePathwayItem } from "@/constants/role-pathways";
import { ArrowUpRight03Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";

export default function RolePathwayCard({ item }: { item: RolePathwayItem }) {
  return (
    <div className="h-full p-1">
      <Card className="mx-auto h-full rounded-3xl p-6 sm:max-w-full sm:p-6">
        <CardContent className="flex flex-1 flex-col px-0 sm:items-center sm:justify-center sm:text-center">
          <div className="bg-cc-sage-100 dark:bg-accent w-fit rounded-2xl p-4 md:rounded-3xl md:p-4.5">
            <HugeiconsIcon
              strokeWidth={1.75}
              icon={item.icon}
              className="size-5 md:size-7"
            />
          </div>

          <h3 className="text-md mt-3 font-medium sm:mt-4 sm:text-lg">
            {item.title}
          </h3>

          <div className="mt-3 flex flex-wrap items-center gap-x-3 gap-y-2 sm:mt-4 sm:justify-center sm:gap-x-3">
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

          <Separator className="my-4 sm:my-6" />

          <p className="text-muted-foreground sm:text-md mb-1 text-xs text-balance md:mb-4">
            {item.description}
          </p>

          <Button
            variant="ghost"
            className="text-primary w-full justify-start text-xs sm:justify-center sm:text-sm"
          >
            {item.buttonLabel || item.title}
            <HugeiconsIcon strokeWidth={1.75} icon={ArrowUpRight03Icon} />
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
