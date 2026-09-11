import { SectionLabel } from "@/components/ui/SectionLabel";
import { capabilities } from "@/lib/content";

export function CapabilityEcosystem() {
  return (
    <section id="capabilities" className="bg-white-warm py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-2xl">
          <SectionLabel>Manufacturing Capability</SectionLabel>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-navy-950 sm:text-4xl">
            One engineering ecosystem, seven disciplines.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-gray-500">
            From tableting to material handling, every machine we build
            shares the same design discipline, GMP compliance and
            after-sales support.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-px overflow-hidden rounded-[var(--radius-lg)] border border-gray-100 bg-gray-100 sm:grid-cols-2 lg:grid-cols-4">
          {capabilities.map((capability) => (
            <div
              key={capability.name}
              className="group bg-white p-8 transition-colors hover:bg-navy-950"
            >
              <h3 className="text-lg font-semibold text-navy-950 group-hover:text-brand-400">
                {capability.name}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-gray-500 group-hover:text-gray-300">
                {capability.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
