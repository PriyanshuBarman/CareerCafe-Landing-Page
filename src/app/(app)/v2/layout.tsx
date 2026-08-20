import Footer from "@/components/layouts/footer";
import Navbar from "@/components/layouts/navbar";

export default function Applayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
