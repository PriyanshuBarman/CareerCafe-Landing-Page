import BringToCampus from "@/components/v1/landing/sections/bring-to-campus";
import CompanyPrep from "@/components/v1/landing/sections/company-prep";
import Hero2 from "@/components/v1/landing/sections/hero";
import HowItWorks from "@/components/v1/landing/sections/how-it-works";
import Programmes from "@/components/v1/landing/sections/programmes";
import RolePathways from "@/components/v1/landing/sections/role-pathways";

export default function Home() {
  return (
    <div>
      <Hero2 />
      <Programmes />
      <HowItWorks />
      <RolePathways />
      <CompanyPrep />
      <BringToCampus />
    </div>
  );
}
