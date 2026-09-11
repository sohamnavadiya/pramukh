import { SectionLabel } from "@/components/ui/SectionLabel";
import { automationFeatures } from "@/lib/content";

export function EngineeredAutomation() {
  return (
    <section className="bg-navy-950 py-24 text-white-warm lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
          <div>
            <SectionLabel onDark>Engineered Automation</SectionLabel>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
              Intelligence built into the machine, not bolted on.
            </h2>
            <p className="mt-4 max-w-lg text-base leading-relaxed text-gray-300">
              Every machine we build carries its own control discipline —
              automated feeding, real-time weight monitoring and safety
              interlocks that hold precision without constant operator
              intervention.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {automationFeatures.map((feature) => (
              <div
                key={feature.name}
                className="rounded-[var(--radius-md)] border border-white/10 bg-white/[0.03] p-6"
              >
                <div className="h-1.5 w-8 rounded-full bg-brand-400" />
                <h3 className="mt-4 text-sm font-semibold text-white-warm">
                  {feature.name}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-400">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
