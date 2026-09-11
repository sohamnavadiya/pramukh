import { Button } from "@/components/ui/Button";
import { HeroVisual } from "@/components/HeroVisual";
import { generalEnquiryMessage, whatsappLink } from "@/lib/whatsapp";

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-navy-950 pt-36 pb-24 text-white-warm lg:pt-44 lg:pb-32"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-70"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 80% 20%, rgba(0,160,227,0.12), transparent 60%)",
        }}
        aria-hidden
      />

      <div className="relative mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2 lg:px-8">
        <div>
          <p className="kicker kicker-on-dark">
            Pharmaceutical Processing Machinery — Ahmedabad, India
          </p>
          <h1 className="mt-4 text-4xl font-semibold leading-[1.08] tracking-tight sm:text-5xl lg:text-[3.75rem]">
            Precision-engineered machinery for pharmaceutical manufacturing.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-gray-300">
            Pramukh Pharma Tech designs and manufactures GMP-compliant tablet
            presses, dryers, granulators, blenders and mills — trusted across
            six industries, exported from India to global markets.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Button href={whatsappLink(generalEnquiryMessage)} variant="primary">
              Request a Quote
            </Button>
            <Button href="/products" variant="secondary-dark">
              Explore Products
            </Button>
          </div>
        </div>

        <HeroVisual />
      </div>
    </section>
  );
}
