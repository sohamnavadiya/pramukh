import { SectionLabel } from "@/components/ui/SectionLabel";
import { qualityStandards } from "@/lib/content";

export function QualityCompliance() {
  return (
    <section id="quality" className="bg-gray-50 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-2xl">
          <SectionLabel>Quality &amp; Compliance</SectionLabel>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-navy-950 sm:text-4xl">
            Compliance engineered in, not inspected in after.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-gray-500">
            Every machine leaves our facility built to standard — not
            retrofitted to pass one.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {qualityStandards.map((standard) => (
            <div
              key={standard.name}
              className="rounded-[var(--radius-md)] border border-gray-100 bg-white p-7"
            >
              <h3 className="text-base font-semibold text-navy-950">
                {standard.name}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-gray-500">
                {standard.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
