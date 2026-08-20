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
import { PROGRAMMES } from "@/constants/programmes";
import {
  ArrowUpRight01Icon,
  GoogleGeminiIcon,
  Timer02Icon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import ProgrammeCard from "../program-card";

export default function Programmes() {
  return (
    <section className="mx-auto mt-8 max-w-7xl px-4 py-12 sm:px-6 md:py-20 lg:px-8">
      <div className="flex flex-col items-center justify-center gap-3 text-center sm:gap-5">
        <h2 className="text-xl font-semibold sm:text-2xl md:text-3xl lg:text-4xl">
          Choose the Programme That Fits Your Stage
        </h2>

        <p className="text-muted-foreground text-sm sm:text-base lg:text-xl">
          Start by picking the programme that matches where you are in your
          journey. Detailed syllabus, pricing and policies live on dedicated
          programme pages.
        </p>
      </div>

      <div className="mt-10 grid gap-8 sm:mt-14 md:grid-cols-2 md:gap-10">
        {PROGRAMMES.map((programme) => (
          <ProgrammeCard key={programme.title} programme={programme} />
        ))}
      </div>

      <Item
        variant="outline"
        className="bg-primary/5 mt-10 rounded-2xl p-4 sm:px-8"
      >
        <ItemMedia className="bg-primary/20 rounded-full p-3">
          <HugeiconsIcon
            strokeWidth={1.75}
            icon={Timer02Icon}
            className="text-primary sm:size-8"
          />
        </ItemMedia>

        <ItemContent className="flex sm:flex-row sm:items-center">
          <ItemTitle className="text-primary sm:text-base">
            Interview Sprint
          </ItemTitle>
          <Separator
            orientation="vertical"
            className="bg-ring/50 mx-4 h-10 max-sm:hidden lg:mx-12"
          />

          <ItemDescription className="text-foreground flex-1 text-xs sm:text-center sm:text-sm">
            Interview coming up soon? Explore Interview Sprint - a focused route
            for short-term preparation.
          </ItemDescription>
        </ItemContent>

        <ItemActions>
          <Button
            variant="ghost"
            className="text-primary hover:bg-primary hover:text-primary-foreground dark:border-primary/50 dark:hover:bg-primary/50 dark:text-foreground border-primary size-8 rounded-full text-xs md:h-9 md:w-fit md:rounded-md md:px-5 md:text-sm"
          >
            <span className="max-md:hidden">Explore Sprint</span>
            <HugeiconsIcon strokeWidth={2} icon={ArrowUpRight01Icon} />
          </Button>
        </ItemActions>
      </Item>

      <div className="mt-12 flex items-center justify-center gap-4 px-2">
        <div className="bg-cc-sage-100 dark:bg-cc-sage-700 w-fit shrink-0 rounded-full p-2">
          <HugeiconsIcon
            strokeWidth={2}
            icon={GoogleGeminiIcon}
            className="text-cc-sage-900 dark:text-cc-sage-100 size-4"
          />
        </div>
        <p className="text-muted-foreground text-xs text-balance sm:text-sm">
          Designed to help students choose quickly before exploring role and
          company pathways.
        </p>
      </div>
    </section>
  );
}
