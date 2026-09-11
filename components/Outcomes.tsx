import Image from "next/image";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { outcomes, testimonials } from "@/lib/content";

export function Outcomes() {
  return (
    <section className="bg-white-warm py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-2xl">
          <SectionLabel>Outcomes</SectionLabel>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-navy-950 sm:text-4xl">
            Measured in throughput, not adjectives.
          </h2>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {outcomes.map((outcome) => (
            <div key={outcome.name} className="border-l-2 border-brand-500 pl-5">
              <h3 className="text-base font-semibold text-navy-950">
                {outcome.name}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-500">
                {outcome.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-20 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="rounded-[var(--radius-md)] border border-gray-100 bg-white p-6 shadow-[var(--shadow-card)]"
            >
              <div className="flex items-center gap-3">
                <Image
                  src={testimonial.image}
                  alt=""
                  width={36}
                  height={36}
                  className="h-9 w-9 rounded-full object-cover"
                />
                <p className="text-sm font-semibold text-navy-950">
                  {testimonial.name}
                </p>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-gray-500">
                &ldquo;{testimonial.quote}&rdquo;
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
