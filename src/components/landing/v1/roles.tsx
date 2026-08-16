import { Button } from "@/components/ui/button";
import { ROLES } from "@/constants/roles";
import { cn } from "@/lib/utils";
import { ArrowUpRightIcon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";

export default function Roles() {
  return (
    <section className="mx-auto mt-10 max-w-7xl overflow-clip px-4 py-12 text-center md:px-6 md:py-20">
      <h2 className="text-xl font-semibold sm:text-2xl md:text-3xl">
        Choose your analyst direction.
      </h2>
      <p className="text-muted-foreground mt-3 text-sm text-balance sm:mt-4 sm:text-xl">
        One foundation. Different interview directions.
      </p>

      <div className="relative mx-auto mt-12 grid grid-cols-1 border nth-3:border sm:mt-16 sm:grid-cols-2 lg:grid-cols-4">
        <div className="absolute -inset-y-14 left-0 -translate-x-px border-s border-dashed mask-y-from-95%" />
        <div className="absolute -inset-y-14 right-0 translate-x-px border-s border-dashed mask-y-from-95%" />
        <div className="absolute -inset-x-14 top-0 -translate-y-px border-t border-dashed mask-x-from-95%" />
        <div className="absolute -inset-x-14 bottom-0 translate-y-px border-b border-dashed mask-x-from-95%" />

        {ROLES.map((role) => (
          <div
            className={cn(
              "odd:bg-muted/40 relative -mt-px flex w-full flex-col items-center gap-2 border-t p-4 pt-9 sm:p-6 sm:pt-12",
              "lg:not-nth-[3n+1]:border-e",
              "max-lg:odd:border-e max-sm:odd:border-e-0",
            )}
            key={role.title}
          >
            <HugeiconsIcon
              icon={role.icon}
              strokeWidth={1.25}
              className="fill-foreground/10 text-foreground size-10 sm:size-12"
            />
            <h3 className="mt-4 font-medium tracking-[-0.005em] sm:mt-6 sm:text-lg">
              {role.title}
            </h3>
            <p className="text-muted-foreground mb-4 text-sm text-balance sm:mb-6 sm:text-base">
              {role.description}
            </p>
            <Button
              className="mt-auto font-medium max-sm:text-xs"
              variant="link"
            >
              Learn More <HugeiconsIcon strokeWidth={2} icon={ArrowUpRightIcon} />
            </Button>
          </div>
        ))}
      </div>
    </section>
  );
}
