import Logo from "@/components/logo";
import { Login01Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { LinkButton } from "../../link-button";
import ThemeToggle from "../../theme-toggle";
import NavMenu from "./nav-menu";
import { NavigationSheet } from "./navigation-sheet";

export default function Navbar() {
  return (
    <nav className="bg-background/10 sticky top-0 z-50 h-16 border-b backdrop-blur-sm">
      <div className="mx-auto flex h-full max-w-(--breakpoint-xl) items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-12">
          <Logo />
        </div>

        {/* Desktop Menu */}
        <NavMenu className="hidden md:block" />

        <div className="flex items-center gap-3">
          <ThemeToggle enableHotKey className="sm:rounded-full sm:p-5" />

          <LinkButton
            href="#"
            variant="outline"
            className="rounded-full px-4 py-5 max-sm:hidden"
          >
            <HugeiconsIcon icon={Login01Icon} className="size-5" />
            Login
          </LinkButton>

          <LinkButton href="#" className="rounded-full p-5 max-sm:hidden">
            Start Practicing Free
          </LinkButton>

          {/* Mobile Menu */}
          <div className="md:hidden">
            <NavigationSheet />
          </div>
        </div>
      </div>
    </nav>
  );
}
