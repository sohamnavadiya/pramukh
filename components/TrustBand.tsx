import { Badge } from "@/components/ui/Badge";
import { industries } from "@/lib/content";

export function TrustBand() {
  return (
    <section className="border-b border-gray-100 bg-white-warm py-14">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <p className="text-center text-sm font-medium text-gray-500">
          Engineering machinery trusted across six industries, exported from
          India to global markets
        </p>

        <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {industries.map((industry) => (
            <div
              key={industry.name}
              className="flex items-center justify-center rounded-[var(--radius-sm)] border border-gray-100 bg-white py-4 text-center text-sm font-semibold text-gray-600"
            >
              {industry.name}
            </div>
          ))}
        </div>

        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Badge>GMP Compliant</Badge>
          <Badge>SS304 / SS316 Construction</Badge>
          <Badge>Pan-India &amp; Global Export</Badge>
        </div>
      </div>
    </section>
  );
}
