"use client";

import { HugeiconsIcon } from "@hugeicons/react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ANALYST_TRACKS, type TrackId } from "@/constants/analyst-tracks";

type FilterButtonsProps = {
  selectedRoleId: TrackId;
  onSelectRole: (roleId: TrackId) => void;
  className?: string;
};

export default function FilterButtons({
  selectedRoleId,
  onSelectRole,
  className,
}: FilterButtonsProps) {
  return (
    <div
      className={cn(
        "mt-8 flex w-full gap-2 overflow-x-auto pb-2 sm:gap-3 md:mt-10",
        className,
      )}
    >
      {Object.values(ANALYST_TRACKS).map((role) => {
        const isSelected = selectedRoleId === role.id;

        return (
          <Button
            key={role.id}
            type="button"
            variant={isSelected ? "default" : "outline"}
            onClick={() => onSelectRole(role.id)}
            className={cn(
              "h-auto min-w-max flex-1 shrink-0 gap-2.5 rounded-xl px-4 py-3 text-xs font-medium transition-all sm:gap-3 sm:px-5 sm:py-3.5 sm:text-sm",
              isSelected
                ? "bg-cc-sage-900 hover:bg-cc-sage-900/90 dark:bg-cc-sage-900 dark:text-cc-sage-100 border-cc-sage-900 text-white shadow-sm"
                : "hover:bg-accent/80 hover:text-foreground",
            )}
          >
            <HugeiconsIcon
              icon={role.icon}
              strokeWidth={2}
              className="size-4 sm:size-5"
            />
            {role.name}
          </Button>
        );
      })}
    </div>
  );
}
