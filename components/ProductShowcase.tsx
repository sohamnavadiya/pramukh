import Image from "next/image";
import Link from "next/link";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { featuredProducts } from "@/lib/content";

export function ProductShowcase() {
  return (
    <section id="products" className="bg-gray-50 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div className="max-w-2xl">
            <SectionLabel>Product Range</SectionLabel>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-navy-950 sm:text-4xl">
              Machinery built for precision at scale.
            </h2>
          </div>
          <Link
            href="/products"
            className="text-sm font-semibold text-brand-700 hover:text-brand-500"
          >
            View full catalog →
          </Link>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {featuredProducts.map((product) => (
            <Link
              key={product.slug}
              href={`/products/${product.slug}`}
              className="group flex flex-col overflow-hidden rounded-[var(--radius-md)] border border-gray-100 bg-white shadow-[var(--shadow-card)] transition-shadow hover:shadow-[var(--shadow-card-hover)]"
            >
              <div className="relative h-44 w-full overflow-hidden bg-gray-100">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-1 flex-col p-5">
                <h3 className="text-base font-semibold text-navy-950">
                  {product.name}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-gray-500">
                  {product.tagline}
                </p>
                <span className="mt-4 text-sm font-semibold text-brand-700 transition-colors group-hover:text-brand-500">
                  View Details →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
