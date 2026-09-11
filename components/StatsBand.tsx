import { stats } from "@/lib/content";

export function StatsBand() {
  return (
    <section className="bg-navy-900 py-16 text-white-warm">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-4xl font-semibold text-brand-400 sm:text-5xl">
                {stat.value}
              </p>
              <p className="mt-2 text-sm font-medium text-gray-300">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
