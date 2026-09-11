import { SectionLabel } from "@/components/ui/SectionLabel";
import { industries } from "@/lib/content";

export function IndustriesServed() {
  return (
    <section id="industries" className="bg-white-warm py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-2xl">
          <SectionLabel>Industries We Serve</SectionLabel>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-navy-950 sm:text-4xl">
            Six industries. One manufacturing standard.
          </h2>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {industries.map((industry) => (
            <div
              key={industry.name}
              className="rounded-[var(--radius-md)] border border-gray-100 bg-white p-7 shadow-[var(--shadow-card)] transition-shadow hover:shadow-[var(--shadow-card-hover)]"
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
  );
}
