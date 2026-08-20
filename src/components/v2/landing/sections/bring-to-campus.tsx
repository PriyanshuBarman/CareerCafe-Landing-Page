import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Item,
  ItemContent,
  ItemDescription,
  ItemGroup,
  ItemMedia,
  ItemTitle,
} from "@/components/ui/item";
import { Separator } from "@/components/ui/separator";
import {
  ArrowUpRight01Icon,
  BankIcon,
  CalendarCheckIcon,
  ChartUpIcon,
  SecurityCheckIcon,
  UserMultiple02Icon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { Fragment } from "react";

const ITEMS = [
  {
    icon: UserMultiple02Icon,
    title: "Student Engagement",
    description: "Interactive challenges and workshops that students love.",
  },
  {
    icon: ChartUpIcon,
    title: "Analyst Career Exposure",
    description: "Real-world skills, frameworks and mentor-led sessions.",
  },
  {
    icon: CalendarCheckIcon,
    title: "Smooth End-to-End Execution",
    description: "We handle everything-so your team can focus on impact.",
  },
];

export default function BringToCampus() {
  return (
    <section className="mt-18 bg-[#30382B]">
      <div className="text-background dark:text-foreground mx-auto max-w-7xl px-4 py-12 sm:px-6 md:py-20 lg:px-8">
        <Card className="border-cc-sage-700 dark:text-foreground text-background grid gap-18 rounded-4xl border bg-transparent p-8 lg:grid-cols-2">
          {/* Col 1 */}
          <div>
            <Badge
              variant="ghost"
              className="text-cc-sage-700 text-2xs gap-2 rounded-full py-3.5 pr-3.5 pl-2.5 tracking-wider sm:text-xs [&>svg]:size-5.25!"
            >
              <HugeiconsIcon strokeWidth={1.75} icon={BankIcon} />
              CAMPUS EVENTS
            </Badge>

            <h3 className="text-base mt-4 font-medium sm:text-3xl">
              Bring CareerCafe to Your Campus
            </h3>

            <p className="sm:text-md mt-2 text-xs text-balance sm:mt-4">
              Analyst-focused campus experiences that help students practise,
              compete and explore career readiness.
            </p>

            <ItemGroup className="mt-8 gap-2">
              {ITEMS.map((item) => (
                <Item key={item.title} className="gap-4 px-0">
                  <ItemMedia
                    variant="icon"
                    className="border-cc-sage-700 text-cc-sage-500 rounded-2xl border p-4 shadow-xl"
                  >
                    <HugeiconsIcon
                      strokeWidth={1.5}
                      icon={item.icon}
                      className="size-4 sm:size-5"
                    />
                  </ItemMedia>
                  <ItemContent className="after:border-ring/25 relative after:absolute after:right-0 after:-bottom-2 after:left-0 after:border-b">
                    <ItemTitle className="text-xs sm:text-base">
                      {item.title}
                    </ItemTitle>
                    <ItemDescription className="text-xs sm:text-sm">
                      {item.description}
                    </ItemDescription>
                  </ItemContent>
                </Item>
              ))}
            </ItemGroup>

            <div className="mt-12 flex flex-wrap items-center gap-4">
              <Button
                variant="ghost"
                className="border-cc-sage-700 dark:text-cc-sage-500 text-cc-sage-500 hover:text-cc-sage-500 w-full flex-1 rounded-full border p-5 text-xs hover:bg-transparent sm:p-6 sm:text-sm"
              >
                Explore Event Format
              </Button>
              <Button className="dark:text-foreground flex-1 rounded-full p-5 text-xs sm:p-6 sm:text-sm">
                Host a Campus Event
                <HugeiconsIcon strokeWidth={2} icon={ArrowUpRight01Icon} />
              </Button>
            </div>
          </div>

          {/* Col 2 */}
          <div className="flex flex-col items-center justify-center">
            <div className="w-full rounded-3xl bg-[#EEE7D5] p-2">
              {/* Image Placeholder */}
              <div className="bg-foreground/50 dark:bg-accent/50 aspect-video rounded-3xl" />

              <div className="gap- flex flex-wrap items-center justify-center px-4 py-8 max-sm:hidden sm:justify-between">
                {ITEMS.map((item, index) => (
                  <Fragment key={item.title}>
                    <div className="flex flex-col items-center justify-center gap-2 text-center">
                      <div className="bg-cc-sage-500/50 text-cc-sage-900 w-fit rounded-full p-4">
                        <HugeiconsIcon
                          strokeWidth={1.75}
                          icon={item.icon}
                          className="size-3 sm:size-5"
                        />
                      </div>
                      <p className="text-foreground dark:text-background text-2xs font-medium">
                        {item.title}
                      </p>
                    </div>
                    {index < ITEMS.length - 1 && (
                      <Separator
                        orientation="vertical"
                        className="bg-ring/50"
                      />
                    )}
                  </Fragment>
                ))}
              </div>
            </div>

            <div className="text-muted-foreground mt-auto flex items-center justify-center gap-2 pt-8 text-start text-xs sm:gap-4 sm:text-sm">
              <HugeiconsIcon
                strokeWidth={2}
                icon={SecurityCheckIcon}
                className="text-cc-sage-500 dark:text-cc-sage-100 size-4 sm:size-5"
              />
              <span>Designed for colleges, clubs and placement cells.</span>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}
