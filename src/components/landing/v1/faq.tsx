import {
  Accordion,
  AccordionContent,
  AccordionItem,
} from "@/components/ui/accordion";
import { FAQ } from "@/constants/faq";
import { cn } from "@/lib/utils";
import { Accordion as AccordionPrimitive } from "@base-ui/react/accordion";
import { PlusSignIcon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";

export default function Faq() {
  return (
    <section className="mx-auto max-w-4xl px-4 py-12 md:px-16 md:py-20">
      <h2 className="text-center text-xl font-semibold sm:text-2xl md:text-3xl">
        Frequently Asked Questions
      </h2>
      <p className="text-muted-foreground mt-3 text-center text-sm text-balance sm:mt-4 sm:text-xl">
        Quick answers to common questions about our products and services.
      </p>

      <Accordion className="mt-8 space-y-4 sm:mt-10">
        {FAQ.map(({ question, answer }, index) => (
          <AccordionItem
            className="bg-accent rounded-xl border-none px-4 sm:px-6"
            key={question}
            value={`question-${index}`}
          >
            <AccordionPrimitive.Header className="flex items-center">
              <AccordionPrimitive.Trigger
                className={cn(
                  "flex flex-1 items-center justify-between py-4 font-medium tracking-tight transition-all aria-expanded:pb-3 max-sm:text-sm! [&[aria-expanded=true]>svg]:rotate-45",
                  "text-start text-lg",
                )}
              >
                {question}
                <HugeiconsIcon
                  strokeWidth={1.75}
                  icon={PlusSignIcon}
                  className="text-muted-foreground h-5 w-5 shrink-0 transition-transform duration-200"
                />
              </AccordionPrimitive.Trigger>
            </AccordionPrimitive.Header>
            <AccordionContent className="text-muted-foreground sm:text-base">
              {answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
}
