"use client";

import { usePathname } from "next/navigation";

import { LinkButton } from "./link-button";

const variants = [
  { title: "Minimal Variant", href: "/v1" },
  { title: "Exact Variant", href: "/v2" },
];

export default function VariantSwitcher() {
  const pathname = usePathname();
  return (
    <div className="bg-accent fixed bottom-5 left-1/2 z-60 mx-auto flex w-fit -translate-x-1/2 items-center gap-1 rounded-full border p-0.75">
      {variants.map((item) => {
        const isActive = pathname.includes(item.href);
        return (
          <LinkButton
            key={item.href}
            href={item.href}
            size="sm"
            variant={isActive ? "default" : "ghost"}
            className="rounded-full p-6"
          >
            {item.title}
          </LinkButton>
        );
      })}
    </div>
  );
}
