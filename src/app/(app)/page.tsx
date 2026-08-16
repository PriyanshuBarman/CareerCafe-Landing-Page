import { LinkButton } from "@/components/link-button";
import { ArrowUpRight01Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";

const variants = [
  { title: "Minimal (Orange only)", href: "/v1" },
  { title: "Exact", href: "/v2" },
];

export default function Page() {
  return (
    <div className="flex h-svh flex-col items-center justify-center gap-8 bg-white">
      {variants.map((item) => (
        <LinkButton
          key={item.href}
          href={item.href}
          className="rounded-full p-6"
        >
         Variant - {item.title}
          <HugeiconsIcon strokeWidth={2} icon={ArrowUpRight01Icon} />
        </LinkButton>
      ))}
    </div>
  );
}
