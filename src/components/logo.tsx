import { LinkButton } from "@/components/link-button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";

export default function Logo({ className }: { className?: string }) {
  return (
    <LinkButton
      href="/"
      variant="ghost"
      className={cn("h-fit w-fit gap-2 px-0 hover:bg-transparent", className)}
    >
      <Avatar className="after:border-none">
        <AvatarImage src="./logo.webp" alt="logo" />
        <AvatarFallback />
      </Avatar>

      <span className="text-md tracking-tight sm:text-lg">
        Career<span className="text-primary">Cafe</span>
      </span>
    </LinkButton>
  );
}
