import { Hero } from "@/components/Hero";
import { TrustBand } from "@/components/TrustBand";
import { CapabilityEcosystem } from "@/components/CapabilityEcosystem";
import { ProductShowcase } from "@/components/ProductShowcase";
import { EngineeredAutomation } from "@/components/EngineeredAutomation";
import { IndustriesServed } from "@/components/IndustriesServed";
import { StatsBand } from "@/components/StatsBand";
import { QualityCompliance } from "@/components/QualityCompliance";
import { Outcomes } from "@/components/Outcomes";
import { Insights } from "@/components/Insights";
import { FinalCta } from "@/components/FinalCta";

export default function Home() {
  return (
    <main>
      <Hero />
      <TrustBand />
      <CapabilityEcosystem />
      <ProductShowcase />
      <EngineeredAutomation />
      <IndustriesServed />
      <StatsBand />
      <QualityCompliance />
      <Outcomes />
      <Insights />
      <FinalCta />
    </main>
  );
}
