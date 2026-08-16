import QuickStats from "@/components/landing/v2/quick-stats";
import BringToCampus from "@/components/landing/v2/bring-to-campus";
import Curriculum from "@/components/landing/v2/curriculum";
import Hero from "@/components/landing/v2/hero";
import Programmes from "@/components/landing/v2/programmes";
import CompanyPrep from "@/components/landing/v2/company-prep";
import FinalCta from "@/components/landing/v2/final-cta";
import AiHumanCta from "@/components/landing/v2/ai-human-cta";
import PracticeDemo from "@/components/landing/v2/practice-demo";
import DashboardDemo from "@/components/landing/v2/dashboard-demo";
import Roles from "@/components/landing/v2/roles";
import Faq from "@/components/landing/v2/faq";

export default function Home() {
  return (
    <div className="bg-cc-page dark:bg-background">
      <Hero />
      <QuickStats />
      <Roles />
      <Curriculum />
      <PracticeDemo />
      <DashboardDemo />
      <CompanyPrep />
      <Programmes />
      <AiHumanCta />
      <BringToCampus />
      <Faq />
      <FinalCta />
    </div>
  );
}
