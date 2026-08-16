import QuickStats from "@/components/landing/v1/quick-stats";
import BringToCampus from "@/components/landing/v1/bring-to-campus";
import Curriculum from "@/components/landing/v1/curriculum";
import Hero from "@/components/landing/v1/hero";
import Programmes from "@/components/landing/v1/programmes";
import CompanyPrep from "@/components/landing/v1/company-prep";
import FinalCta from "@/components/landing/v1/final-cta";
import AiHumanCta from "@/components/landing/v1/ai-human-cta";
import PracticeDemo from "@/components/landing/v1/practice-demo";
import DashboardDemo from "@/components/landing/v1/dashboard-demo";
import Roles from "@/components/landing/v1/roles";
import Faq from "@/components/landing/v1/faq";

export default function Home() {
  return (
    <div>
      <Hero />
      <QuickStats />
      <Roles />
      <Curriculum />
      <PracticeDemo />
      <DashboardDemo />
      <CompanyPrep />
      <AiHumanCta />
      <BringToCampus />
      <Programmes />
      <Faq />
      <FinalCta />
    </div>
  );
}
