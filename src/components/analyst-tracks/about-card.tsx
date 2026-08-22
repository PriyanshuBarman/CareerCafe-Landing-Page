import {
  StarIcon,
  Target02Icon,
  ToolsIcon,
  TradeUpIcon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Item,
  ItemContent,
  ItemDescription,
  ItemGroup,
  ItemMedia,
  ItemTitle,
} from "@/components/ui/item";
import type { AnalystTrack } from "@/constants/analyst-tracks";

type AboutCardProps = {
  activeRole: AnalystTrack;
};

export default function AboutCard({ activeRole }: AboutCardProps) {
  return (
    <Card className="h-fit p-6 sm:p-6 md:w-1/3">
      <CardHeader className="px-0">
        <CardTitle className="text-md sm:text-base md:text-lg">
          About this role
        </CardTitle>
      </CardHeader>

      <CardContent className="px-0">
        <ItemGroup>
          {[
            {
              icon: Target02Icon,
              title: "Focus",
              description: activeRole.about.focus,
            },
            {
              icon: StarIcon,
              title: "Strengths needed",
              description: activeRole.about.strengths,
            },
            {
              icon: ToolsIcon,
              title: "Typical tools",
              description: activeRole.about.typicalTools,
            },
            {
              icon: TradeUpIcon,
              title: "Career growth",
              description: activeRole.about.careerGrowth.join(" → "),
            },
          ].map((item) => (
            <Item
              key={item.title}
              size="xs"
              className="gap-3 rounded-xl px-0 sm:gap-4"
            >
              <ItemMedia
                variant="icon"
                className="bg-cc-sage-100 dark:bg-cc-sage-900/30 rounded-lg p-3 sm:p-3"
              >
                <HugeiconsIcon
                  strokeWidth={1.75}
                  icon={item.icon}
                  className="size-4 sm:size-5"
                />
              </ItemMedia>
              <ItemContent>
                <ItemTitle className="text-xs sm:text-sm">
                  {item.title}
                </ItemTitle>
                <ItemDescription className="text-2xs sm:text-xs">
                  {item.description}
                </ItemDescription>
              </ItemContent>
            </Item>
          ))}
        </ItemGroup>
      </CardContent>
    </Card>
  );
}
