import Link from "next/link";

export type Crumb = { label: string; href?: string };

export function PageHero({
  kicker,
  title,
  description,
  breadcrumbs,
}: {
  kicker: string;
  title: string;
  description?: string;
  breadcrumbs: Crumb[];
}) {
  return (
    <section className="relative overflow-hidden bg-navy-950 pt-36 pb-16 text-white-warm lg:pt-44 lg:pb-20">
      <div
        className="pointer-events-none absolute inset-0 opacity-60"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 85% 0%, rgba(0,160,227,0.14), transparent 60%)",
        }}
        aria-hidden
      />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-2 text-sm text-gray-400">
          {breadcrumbs.map((crumb, i) => (
            <span key={crumb.label} className="flex items-center gap-2">
              {i > 0 && <span aria-hidden>/</span>}
              {crumb.href ? (
                <Link href={crumb.href} className="hover:text-brand-400">
                  {crumb.label}
                </Link>
              ) : (
                <span className="text-gray-300">{crumb.label}</span>
              )}
            </span>
          ))}
        </nav>

        <p className="kicker kicker-on-dark mt-6">{kicker}</p>
        <h1 className="mt-3 max-w-3xl text-3xl font-semibold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
          {title}
        </h1>
        {description && (
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-gray-300">
            {description}
          </p>
        )}
      </div>
    </section>
  );
}
