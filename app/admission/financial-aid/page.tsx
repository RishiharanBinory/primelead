// app/financial-aid/page.tsx
import MainHero from "@/components/admission/financial-aid/financialAidHero";
import FinancialAidProcess from "@/components/admission/financial-aid/FinancialAidProcess";
import TypesOfAid from "@/components/admission/financial-aid/TypesOfAid";
import AidDetailSection, {
  studentFinanceData,
  grantsData,
  bursariesData,
} from "@/components/admission/financial-aid/AidDetailSection";
import FormOverlap from "@/components/FormOverlap";
import CallToAction from "@/components/CallToAction";

export default function FinancialAidPage() {
  return (
    <main>
      <MainHero />

      <FinancialAidProcess />
      <TypesOfAid />
      <AidDetailSection data={studentFinanceData} />
      <AidDetailSection data={grantsData} />
      <AidDetailSection data={bursariesData} />
      <FormOverlap />
      <CallToAction />
    </main>
  );
}
