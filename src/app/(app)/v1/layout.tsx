import Footer from "@/components/layouts/v1/footer";
import Navbar from "@/components/layouts/v1/navbar";

export default function Applayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
