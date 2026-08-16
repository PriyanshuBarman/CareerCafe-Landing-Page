import { Rocket01Icon, Telescope02Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";

import { LinkButton } from "@/components/link-button";

export default function FinalCta() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-12 sm:py-16 md:px-6">
      <div className="bg-cc-charcoal relative rounded-2xl px-6 py-12 text-white sm:px-12 sm:py-16">
        <div className="isolate flex flex-col items-center text-center">
          <h2 className="text-xl font-semibold text-balance sm:text-2xl md:text-[1.6875rem]">
            Your next interview should not be your first real practice.
          </h2>
          <p className="text-muted-foreground mt-3 max-w-2xl text-sm sm:mt-4 sm:text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
            illo nisi itaque asperiores, accusamus labore in praesentium
            laudantium, maxime nulla consequatur. Iure odio, sint mollitia nam
            nobis esse dolor optio.
          </p>

          <div className="mt-8 flex w-full flex-col items-center justify-center gap-4 sm:mt-12 sm:w-fit sm:flex-row">
            <LinkButton
              href="#"
              className="rounded-full w-full p-5 text-white max-sm:text-xs sm:p-6"
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
              className="border-border/20 w-full rounded-full bg-transparent p-5 text-white max-sm:text-xs sm:p-6"
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
