import { Button } from "@/components/ui/button";
import { COMPANIES } from "@/constants/companies";
import { cn } from "@/lib/utils";
import { ArrowRight02Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";

type CompanyButtonsProps = {
  selectedIndex: number;
  onSelectCompany: (index: number) => void;
  className?: string;
};

export default function CompanyFilterButtons({
  selectedIndex,
  onSelectCompany,
  className,
}: CompanyButtonsProps) {
  return (
    <div className={cn("mt-12 flex gap-2 sm:gap-4 overflow-x-auto py-2", className)}>
      {COMPANIES.map((item, index) => (
        <Button
          key={item.title}
          variant="outline"
          onClick={() => onSelectCompany(index)}
          className={cn(
            "h-auto min-w-max flex-1 shrink-0 gap-2 text-xs font-medium sm:gap-3 sm:rounded-xl sm:text-sm md:py-1",
            selectedIndex === index &&
              "border-cc-sage-500 dark:border-cc-sage-900 sm:border-2",
          )}
        >
          <img
            src={item.img}
            alt={`${item.title} logo`}
            className="size-8 sm:size-14"
          />
          {item.title}
        </Button>
      ))}
      <Button
        variant="outline"
        className="h-auto min-w-max flex-1 shrink-0 gap-2.5 text-xs font-medium sm:gap-3 sm:rounded-xl sm:text-sm md:py-1"
      >
        View all companies <HugeiconsIcon icon={ArrowRight02Icon} />
      </Button>
    </div>
  );
}
