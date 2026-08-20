import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemMedia,
  ItemTitle,
} from "@/components/ui/item";
import { Separator } from "@/components/ui/separator";
import { ROLES } from "@/constants/role-pathways";
import {
  ArrowUpRight01Icon,
  BubbleChatQuestionIcon,
  Leaf01Icon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import RolePathwayCard from "../role-pathways-card";

export default function RolePathways() {
  const regularRoles = ROLES.filter(
    (r) => !("variant" in r && r.variant === "sage"),
  );
  const sageRole = ROLES.find((r) => "variant" in r && r.variant === "sage");

  return (
    <section className="mx-auto mt-8 mb-26 flex max-w-350 flex-col px-4 py-12 sm:px-6 md:px-8 md:py-20">
      <div className="flex flex-col items-center justify-center gap-3 text-center sm:gap-5">
        <Badge className="text-cc-sage-900 dark:bg-cc-sage-900/30 text-2xs bg-cc-sage-100 rounded-full py-3 pr-3 pl-2 tracking-wider sm:gap-2 sm:py-3.5 sm:pr-3.5 sm:pl-2.5 sm:text-xs [&>svg]:size-5.25!">
          <HugeiconsIcon
            strokeWidth={1.75}
            icon={Leaf01Icon}
            className="fill-cc-sage-900 dark:text-cc-sage-900/30 text-cc-sage-100"
          />
          ANALYST PATHWAYS
        </Badge>

        <h2 className="text-xl font-semibold sm:text-2xl md:text-3xl lg:text-4xl">
          From practice to interview readiness.
        </h2>
        <p className="text-muted-foreground text-sm text-balance sm:text-base lg:text-xl">
          Build skills, simulate real analyst interviews, and finish with expert
          human validation.
        </p>
      </div>

      {/* Row 1: 4 role cards in a responsive grid */}
      <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {regularRoles.map((item) => (
          <RolePathwayCard key={item.title} item={item} />
        ))}
      </div>

      {/* Row 2: "Not Sure Yet?" sage card as an Item component (full-width banner) */}
      {sageRole && (
        <Item
          variant="outline"
          className="bg-cc-sage-100/60 border-cc-sage-200 dark:bg-cc-sage-900/15 dark:border-cc-sage-700/30 p- mt-6 rounded-2xl sm:px-6"
        >
          <ItemMedia className="bg-cc-sage-900/10 dark:bg-cc-sage-900/30 rounded-full p-3">
            <HugeiconsIcon
              strokeWidth={1.75}
              icon={BubbleChatQuestionIcon}
              className="text-cc-sage-900 sm:size-6"
            />
          </ItemMedia>

          <ItemContent className="flex sm:flex-row sm:items-center">
            <ItemTitle className="text-cc-sage-900 md:ml-2 dark:text-cc-sage-100 sm:text-sm md:text-base">
              Not Sure Yet?
            </ItemTitle>
            <Separator
              orientation="vertical"
              className="bg-cc-sage-700/30 mx-4 h-10 max-sm:hidden lg:mx-12"
            />
            <ItemDescription className="flex-1 text-xs sm:text-center sm:text-sm">
              Start with a guided path recommendation based on your interests
              and current stage.
            </ItemDescription>
          </ItemContent>

          <ItemActions>
            <Button
              variant="ghost"
              className="text-cc-sage-900 hover:bg-cc-sage-900 hover:text-cc-sage-100 md:dark:border-cc-sage-700/50 dark:text-cc-sage-100 dark:hover:bg-cc-sage-900/50 md:border-cc-sage-700 size-8 rounded-full border text-xs md:h-9 md:w-fit md:rounded-md md:px-5 md:text-sm"
            >
              <span className="max-md:hidden">Help Me Choose</span>
              <HugeiconsIcon strokeWidth={2} icon={ArrowUpRight01Icon} />
            </Button>
          </ItemActions>
        </Item>
      )}
    </section>
  );
}
