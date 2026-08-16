import { ArrowUpRight01Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";

import { LinkButton } from "@/components/link-button";
import { Separator } from "@/components/ui/separator";

const RATINGS = [
  { label: "Technical", score: 8.0, max: 10, percentage: 80 },
  { label: "Communication", score: 7.5, max: 10, percentage: 75 },
  { label: "Confidence", score: 7.0, max: 10, percentage: 70 },
];

export default function AiHumanCta() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-12 sm:py-16 md:px-6">
      <div className="bg-accent/50 border-border flex flex-col items-center rounded-2xl border px-6 py-12 text-center sm:px-12 sm:py-16 md:flex-row">
        <div className="flex-1">
          <h2 className="text-xl font-semibold text-balance sm:text-2xl md:text-[1.6875rem]">
            AI practice. Human validation
          </h2>
          <p className="text-muted-foreground mt-3 text-sm sm:mt-4 sm:text-xl">
            Get detailed feedback from experienced analysts on your technical
            skills, communication and problem-solving approach.
          </p>

          <LinkButton
            href="#"
            className="mt-10 w-full rounded-full p-5 max-sm:text-xs md:mt-12 md:w-fit md:p-6"
          >
            <HugeiconsIcon
              strokeWidth={1.75}
              icon={ArrowUpRight01Icon}
              className="mr-2 size-5"
            />
            Book a Human Mock
          </LinkButton>
        </div>

        {/* Mobile: Horizontal */}
        <Separator orientation="horizontal" className="my-10 block md:hidden" />
        {/* Desktop: Vertical */}
        <Separator
          orientation="vertical"
          className="bg-ring/50 mx-14 hidden h-60 md:block"
        />

        <div className="flex flex-1 flex-col gap-4 text-left max-md:w-3/4 md:gap-6">
          <div>
            <h3 className="text-sm font-medium md:text-lg">Overall Score</h3>
            <p>
              <span className="text-2xl font-semibold sm:text-3xl">7.8 </span>
              <span className="text-base sm:text-xl">/ 10</span>
            </p>
          </div>

          {RATINGS.map((item) => (
            <div key={item.label} className="w-full">
              <div className="flex justify-between text-sm sm:font-medium md:text-base">
                <span>{item.label}</span>
                <span>
                  {item.score.toFixed(1)} / {item.max}
                </span>
              </div>
              {/* Progress bar */}
              <div className="bg-input mt-2 h-1.75 overflow-hidden rounded-full sm:h-2 md:mt-3">
                <div
                  className="bg-primary h-full"
                  style={{ width: `${item.percentage}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
