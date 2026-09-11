import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Button } from "@/components/ui/Button";
import { capabilities, company, industries } from "@/lib/content";
import { generalEnquiryMessage, whatsappLink } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Pramukh Pharma Tech designs and manufactures GMP-compliant pharmaceutical processing machinery from Ahmedabad, India — exported to global markets across six industries.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        kicker="About Pramukh Pharma Tech"
        title="Engineering pharmaceutical machinery from Ahmedabad, to the world."
        description="We manufacture, supply and export pharmaceutical processing machinery — built to GMP standard, tested before dispatch, and backed by after-sales support long after the sale."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "About" }]}
      />

      <main className="bg-white-warm">
        <section className="py-20 lg:py-28">
          <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-2 lg:px-8">
            <div>
              <p className="kicker">Our Story</p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-navy-950 sm:text-4xl">
                Built on the shop floor, not a boardroom.
              </h2>
              <div className="mt-6 space-y-4 text-base leading-relaxed text-gray-600">
                <p>
                  Pramukh Pharma Tech started as a small manufacturing
                  operation in Ahmedabad, Gujarat, building tablet presses and
                  processing machinery for the pharmaceutical industry. Over
                  the years, that focus has widened — the same engineering
                  discipline now serves ayurvedic, cosmetic, chemical,
                  nutraceutical and food manufacturers too.
                </p>
                <p>
                  What hasn&apos;t changed is the standard: every machine we
                  build is engineered to GMP compliance, constructed in
                  corrosion-resistant stainless steel, and tested before it
                  leaves our facility — not retrofitted to pass inspection
                  afterward.
                </p>
                <p>
                  Today we manufacture, supply and export a full range of
                  pharmaceutical processing machinery — tablet presses,
                  dryers, granulators, blenders, mills and material handling
                  equipment — to customers across India and international
                  markets.
                </p>
              </div>
            </div>

            <div>
              <p className="kicker">What We Believe</p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-navy-950 sm:text-4xl">
                Team over individual. Value over shortcuts.
              </h2>
              <div className="mt-6 space-y-4 text-base leading-relaxed text-gray-600">
                <p>
                  We think of the company as one team, not a collection of
                  individuals — everyone at Pramukh Pharma Tech, regardless of
                  role, is expected to collaborate toward the same goal:
                  machinery that genuinely meets the customer&apos;s
                  requirements.
                </p>
                <p>
                  Every project we take on has to clear three bars: it has to
                  meet the client&apos;s actual requirements, it has to be
                  efficient in both concept and design, and it has to hold up
                  to a value-oriented standard — not just a price point.
                </p>
              </div>

              <div className="mt-8 flex flex-wrap gap-4">
                <Button href={whatsappLink(generalEnquiryMessage)} variant="secondary-light">
                  Talk to Our Team
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="border-t border-gray-100 bg-gray-50 py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <p className="kicker">Manufacturing Capability</p>
            <h2 className="mt-3 max-w-2xl text-3xl font-semibold tracking-tight text-navy-950 sm:text-4xl">
              One engineering ecosystem, seven disciplines.
            </h2>
            <div className="mt-12 grid grid-cols-1 gap-px overflow-hidden rounded-[var(--radius-lg)] border border-gray-100 bg-gray-100 sm:grid-cols-2 lg:grid-cols-4">
              {capabilities.map((capability) => (
                <div key={capability.name} className="bg-white p-8">
                  <h3 className="text-lg font-semibold text-navy-950">
                    {capability.name}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-gray-500">
                    {capability.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <p className="kicker">Industries We Serve</p>
            <h2 className="mt-3 max-w-2xl text-3xl font-semibold tracking-tight text-navy-950 sm:text-4xl">
              Six industries. One manufacturing standard.
            </h2>
            <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {industries.map((industry) => (
                <div
                  key={industry.name}
                  className="rounded-[var(--radius-md)] border border-gray-100 bg-white p-7 shadow-[var(--shadow-card)]"
                >
                  <h3 className="text-lg font-semibold text-navy-950">
                    {industry.name}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-gray-500">
                    {industry.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="border-t border-gray-100 bg-navy-950 py-16 text-white-warm">
          <div className="mx-auto max-w-5xl px-6 text-center lg:px-8">
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
              Visit us in Ahmedabad, or reach out from anywhere.
            </h2>
            <p className="mt-4 text-base leading-relaxed text-gray-300">
              {company.address}
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Button href={whatsappLink(generalEnquiryMessage)} variant="primary">
                Request a Quote on WhatsApp
              </Button>
              <Button href="/contact" variant="secondary-dark">
                Contact Us
              </Button>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
