import Logo from "@/components/logo";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { SidebarLeft01Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import NavMenu from "./nav-menu";

export const NavigationSheet = () => {
  return (
    <Sheet>
      <SheetTrigger render={<Button size="icon" variant="outline" className='bg-transparent border-border/50' />}>
        <HugeiconsIcon icon={SidebarLeft01Icon} />
      </SheetTrigger>
      <SheetContent className="px-6 py-3">
        <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
        <Logo />
        <NavMenu className="mt-6 [&>div]:h-full" orientation="vertical" />
      </SheetContent>
    </Sheet>
  );
};
