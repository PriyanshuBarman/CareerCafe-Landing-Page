import { LinkButton } from "@/components/link-button";
import { CURRICULUM } from "@/constants/curriculum";
import { cn } from "@/lib/utils";
import {
  ArrowRight02Icon,
  ArrowUpRight01Icon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";

export default function CurriculumTwo() {
  return (
    <section className="bg-cc-sage-100 dark:bg-background">
      <div className="mx-auto mt-8 max-w-7xl px-4 py-14 md:px-6 md:py-26">
        <div className="flex flex-col items-center justify-center text-center text-balance">
          <h2 className="text-xl font-semibold sm:text-2xl md:text-3xl">
            Build the foundation interviews actually test.
          </h2>
          <p className="text-muted-foreground mt-3 text-sm text-balance sm:text-xl">
            Master every core area with a structured learning path designed for
            analyst roles.
          </p>

          <LinkButton
            href="#"
            className="bg-cc-sage-900! dark:text-foreground mt-6 rounded-full border-none p-5 shadow max-sm:text-xs sm:p-6"
          >
            View full curriculum
            <HugeiconsIcon icon={ArrowUpRight01Icon} strokeWidth={2} />
          </LinkButton>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-y-10 sm:mt-16 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-6 lg:gap-y-14">
          {CURRICULUM.map((item, index) => (
            <div key={item.title} className="flex items-center">
              {/* Item content */}
              <div className="flex flex-1 flex-col items-center gap-3 lg:gap-4">
                {/* Large icon circle */}
                <div className="border-cc-sage-200 hover:border-cc-sage-500 dark:border-cc-sage-900/50 dark:hover:border-cc-sage-700 bg-background dark:bg-accent relative flex size-18 items-center justify-center rounded-full border-2 transition-all duration-300 hover:shadow-lg sm:size-22 lg:size-24 xl:size-28">
                  {/* Step number badge */}
                  <span className="text-2xs bg-cc-sage-900 absolute -top-1 -right-1 flex size-6 items-center justify-center rounded-full font-medium text-white shadow-md sm:size-7 sm:text-xs sm:font-bold">
                    {index + 1}
                  </span>

                  <HugeiconsIcon
                    strokeWidth={1.25}
                    icon={item.icon}
                    className="text-cc-sage-900 dark:text-cc-sage-500 size-7 sm:size-9 lg:size-10 xl:size-12"
                  />
                </div>

                {/* Title */}
                <h3 className="text-sm font-semibold sm:text-base">
                  {item.title}
                </h3>
              </div>

              {/* Right arrow — hidden at end of each row and for last item */}
              {index !== CURRICULUM.length - 1 && (
                <HugeiconsIcon
                  icon={ArrowRight02Icon}
                  strokeWidth={1.75}
                  className={cn(
                    "text-cc-sage-500 dark:text-cc-sage-700 size-5 shrink-0 sm:size-6 lg:size-7",
                    index % 2 === 1 && "max-sm:hidden",
                    index % 3 === 2 && "sm:hidden lg:block",
                  )}
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
