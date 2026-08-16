import { QUICK_STATS } from "@/constants/quick-stats";
import { HugeiconsIcon } from "@hugeicons/react";

export default function QuickStats() {
  return (
    <div>
      <div className="mx-auto mt-14 grid max-w-7xl grid-cols-2 items-center max-md:mask-y-from-85% max-md:mask-x-from-85% md:grid-cols-4 md:py-12">
        {QUICK_STATS.map((item) => (
          <div
            key={item.title}
            className="border-ring/50 flex h-36 cursor-default flex-col items-center justify-center gap-2 border-r px-6 last:border-t max-md:nth-3:border-t md:h-28 md:gap-4 md:last:border-transparent"
          >
            <HugeiconsIcon
              icon={item.icon}
              className="size-7 shrink-0 sm:size-12"
            />
            <div className="flex flex-col items-center gap-1 text-center md:gap-2">
              <span className="text-lg leading-tight font-medium tracking-tight tabular-nums md:text-2xl md:font-semibold">
                {item.title}
              </span>
              <span className="text-muted-foreground md:text-md text-xs leading-snug font-[450]">
                {item.description}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
