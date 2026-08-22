import { Coffee02Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";

import { cn } from "@/lib/utils";
import { LinkButton } from "@/components/link-button";

export default function Logo({ className }: { className?: string }) {
  return (
    <LinkButton
      href="/"
      variant="ghost"
      className={cn("h-fit w-fit gap-2 px-0 hover:bg-transparent", className)}
    >
      <HugeiconsIcon
        icon={Coffee02Icon}
        strokeWidth={1.75}
        className="text-primary sm:size-7"
      />

      <span className="text-md tracking-tight sm:text-lg">
        Career<span className="text-primary">Cafe</span>
      </span>
    </LinkButton>
  );
}
