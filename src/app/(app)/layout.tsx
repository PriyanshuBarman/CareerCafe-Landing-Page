import ScrollToTop from "@/components/scroll-to-top";
import VariantSwitcher from "@/components/variant-switcher";

export default function Applayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative">
      {children}
      <VariantSwitcher />
      <ScrollToTop />
    </div>
  );
}
