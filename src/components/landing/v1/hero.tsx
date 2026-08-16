import { LinkButton } from "@/components/link-button";
import { Badge } from "@/components/ui/badge";
import {
  MedalFirstPlaceIcon,
  Rocket01Icon,
  Telescope01Icon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import Link from "next/link";

import { FEATURES } from "@/constants/hero";

export default function Hero() {
  return (
    <section className="mx-auto flex min-h-[calc(100vh-4rem)] w-full max-w-7xl flex-col items-center justify-between gap-12 px-4 py-18 md:px-6 lg:flex-row">
      <div className="my-auto flex flex-col max-lg:items-center max-lg:justify-center">
        <Badge
          className="border-border rounded-full py-3 pr-3 pl-2 [&>svg]:size-4!"
          render={<Link href="#" />}
          variant="secondary"
        >
          <HugeiconsIcon icon={MedalFirstPlaceIcon} strokeWidth={1.75} />
          India&apos;s #1 Practical Learning Platform
        </Badge>

        <h1 className="mt-6 max-w-[17ch] text-3xl leading-[1.2]! font-medium tracking-[-0.04em] max-lg:text-center md:text-5xl lg:text-[2.75rem] xl:text-[3.75rem]">
          Practice the skills. Perform in the interview.
        </h1>

        <p className="text-foreground/60 mt-4 max-w-[60ch] text-balance max-lg:text-center sm:mt-6 sm:text-xl/normal">
          Practice job-relevant skills via live sessions, AI-powered mock
          interviews and real-world projects — and get personalized feedback to
          ace every round.
        </p>

        <div className="mt-8 flex w-full flex-col items-center gap-4 max-lg:justify-center sm:mt-12 sm:flex-row sm:gap-4">
          <LinkButton
            href="#"
            className="rounded-full p-5.5 max-sm:w-full max-sm:text-xs sm:p-6"
          >
            <HugeiconsIcon
              strokeWidth={2}
              icon={Rocket01Icon}
              className="size-5"
            />
            Start Practicing Free
          </LinkButton>
          <LinkButton
            href="#"

            variant="outline"
            className="rounded-full p-5.5 max-sm:w-full max-sm:text-xs sm:p-6"
          >
            <HugeiconsIcon
              strokeWidth={1.75}
              icon={Telescope01Icon}
              className="size-5"
            />
            Explore Programs
          </LinkButton>
        </div>

        <div className="mt-14 flex flex-wrap items-center justify-center gap-4 sm:justify-start sm:gap-8 md:gap-x-8 md:gap-y-4">
          {FEATURES.map((item) => (
            <div
              key={item.title}
              className="flex cursor-default items-center gap-2"
            >
              <HugeiconsIcon icon={item.icon} className="size-5 sm:size-6" />
              <span className="font-[450] max-sm:text-[0.8125rem]">
                {item.title}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-accent aspect-video w-full rounded-xl lg:aspect-auto lg:h-[calc(100vh-8rem)] lg:w-1/2" />
    </section>
  );
}
