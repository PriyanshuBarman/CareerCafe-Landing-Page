import { Rocket01Icon, Telescope02Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";

import { LinkButton } from "@/components/link-button";

export default function FinalCta() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-12 sm:py-16 md:px-6">
      <div className="bg-accent/50 border-border relative rounded-2xl border px-6 py-12 sm:px-12 sm:py-16">
        <BackgroundPattern />

        <div className="isolate flex flex-col items-center text-center">
          <h2 className="text-xl font-semibold text-balance sm:text-2xl md:text-[1.6875rem]">
            Your next interview should not be your first real practice.
          </h2>
          <p className="text-muted-foreground mt-3 max-w-2xl text-sm sm:mt-4 sm:text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
            illo nisi itaque asperiores, accusamus labore in praesentium
            laudantium.
          </p>

          <div className="mt-8 flex w-full flex-col items-center justify-center gap-4 sm:mt-12 sm:w-fit sm:flex-row">
            <LinkButton
              href="#"
              className="w-full rounded-full p-5 max-sm:text-xs sm:p-6"
            >
              <HugeiconsIcon
                strokeWidth={1.5}
                icon={Rocket01Icon}
                className="mr-2 size-5"
              />
              Start Free Practice
            </LinkButton>
            <LinkButton
              href="#"
              variant="outline"
              className="w-full rounded-full p-5 max-sm:text-xs sm:p-6"
            >
              <HugeiconsIcon
                strokeWidth={1.5}
                icon={Telescope02Icon}
                className="mr-2 size-5"
              />
              Explore CareerCafe
            </LinkButton>
          </div>
        </div>
      </div>
    </section>
  );
}

function BackgroundPattern() {
  return (
    <div
      className="absolute inset-0 -top-px -left-px"
      style={{
        backgroundImage: `
        linear-gradient(to right, var(--border) 1px, transparent 1px),
        linear-gradient(to bottom, var(--border) 1px, transparent 1px)
      `,
        backgroundSize: "20px 20px",
        backgroundPosition: "0 0, 0 0",
        maskImage: `
        repeating-linear-gradient(
              to right,
              black 0px,
              black 3px,
              transparent 3px,
              transparent 8px
            ),
            repeating-linear-gradient(
              to bottom,
              black 0px,
              black 3px,
              transparent 3px,
              transparent 8px
            ),
            radial-gradient(ellipse 70% 60% at 50% 0%, #000 60%, transparent 100%)
      `,
        WebkitMaskImage: `
 repeating-linear-gradient(
              to right,
              black 0px,
              black 3px,
              transparent 3px,
              transparent 8px
            ),
            repeating-linear-gradient(
              to bottom,
              black 0px,
              black 3px,
              transparent 3px,
              transparent 8px
            ),
            radial-gradient(ellipse 70% 60% at 50% 0%, #000 60%, transparent 100%)
      `,
        maskComposite: "intersect",
        WebkitMaskComposite: "source-in",
      }}
    />
  );
}
