"use client";

import { Badge } from "@/components/ui/badge";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { ROLES } from "@/constants/role-pathways";
import { useIsMobile } from "@/hooks/use-mobile";
import { Leaf01Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import RolePathwayCard from "../role-pathways-card";

export default function RolePathways() {
  const isMobile = useIsMobile("sm");

  return (
    <section className="mx-auto mt-8 mb-26 flex max-w-7xl flex-col py-12 md:py-20">
      <div className="flex flex-col items-center justify-center gap-3 px-4 text-center sm:gap-5 sm:px-6 md:px-8">
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

      <Carousel
        opts={{
          align: isMobile ? "center" : "start",
          containScroll: isMobile ? false : "trimSnaps",
          loop: isMobile ? true : false,
        }}
        className="mt-10 max-w-full sm:max-w-full sm:px-6 md:px-8"
      >
        <CarouselContent>
          {ROLES.map((item) => (
            <CarouselItem
              key={item.title}
              className="basis-[70%] sm:basis-1/2 md:basis-1/3 lg:basis-1/4"
            >
              <RolePathwayCard item={item} />
            </CarouselItem>
          ))}
        </CarouselContent>

        <div className="absolute top-[calc(100%+4rem)] left-1/2 flex -translate-x-1/2 items-center gap-8">
          <CarouselPrevious
            variant="secondary"
            className="bg-cc-sage-200 text-cc-sage-900 dark:text-cc-sage-100 border-cc-sage-700 dark:bg-cc-sage-900 static inset-auto size-11 disabled:opacity-40 sm:size-14 sm:[&_svg]:size-5!"
          />
          <CarouselNext
            variant="secondary"
            className="bg-cc-sage-200 text-cc-sage-900 dark:text-cc-sage-100 border-cc-sage-700 dark:bg-cc-sage-900 static inset-auto size-11 disabled:opacity-40 sm:size-14 sm:[&_svg]:size-5!"
          />
        </div>
      </Carousel>
    </section>
  );
}
