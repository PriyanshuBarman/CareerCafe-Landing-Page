import BringToCampus from "@/components/v2/landing/sections/bring-to-campus";
import CompanyPrep from "@/components/v2/landing/sections/company-prep";
import Hero from "@/components/v2/landing/sections/hero";
import HowItWorks from "@/components/v2/landing/sections/how-it-works";
import Programmes from "@/components/v2/landing/sections/programmes";
import RolePathways from "@/components/v2/landing/sections/role-pathways";

export default function Home() {
  return (
    <div>
      <Hero />
      <Programmes />
      <HowItWorks />
      <RolePathways />
      <CompanyPrep />
      <BringToCampus />
    </div>
  );
}
