import VariantSwitcher from "@/components/variant-switcher";

export default function Applayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      {children}
      <VariantSwitcher />
    </div>
  );
}
