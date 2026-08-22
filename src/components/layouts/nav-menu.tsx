import type { ComponentProps } from "react";
import Link from "next/link";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

const MENU_LINKS = [
  { name: "Pathways", href: "#" },
  { name: "Practice", href: "#" },
  { name: "Success Stories", href: "#" },
  { name: "Resources", href: "#" },
  { name: "Pricing", href: "#" },
];

export default function NavMenu(props: ComponentProps<typeof NavigationMenu>) {
  return (
    <NavigationMenu {...props}>
      <NavigationMenuList
        data-orientation={props.orientation}
        className="gap-3 data-[orientation=vertical]:-ms-2 data-[orientation=vertical]:flex-col data-[orientation=vertical]:items-start data-[orientation=vertical]:justify-start lg:gap-4"
      >
        {MENU_LINKS.map((item) => (
          <NavigationMenuItem key={item.name}>
            <NavigationMenuLink
              className={navigationMenuTriggerStyle()}
              render={<Link href="#" />}
            >
              {item.name}
            </NavigationMenuLink>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
}
