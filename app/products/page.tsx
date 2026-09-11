import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { WhatsAppLink } from "@/components/ui/WhatsAppLink";
import { categories, products } from "@/lib/products";
import { productEnquiryMessage } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "Pharmaceutical Processing Machinery Catalog",
  description:
    "Browse Pramukh Pharma Tech's full range of GMP-compliant pharmaceutical processing machinery — tablet presses, dryers, granulators, blenders, mills and material handling equipment.",
  alternates: { canonical: "/products" },
};

export default function ProductsPage() {
  return (
    <>
      <PageHero
        kicker="Product Catalog"
        title="19 machines. One manufacturing standard."
        description="Every machine we build is GMP-compliant, stainless-steel constructed and backed by after-sales support — from tableting through material handling."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Products" }]}
      />

      <main className="bg-white-warm py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          {categories.map((category) => {
            const items = products.filter((p) => p.category === category);
            return (
              <section key={category} className="mb-20 last:mb-0">
                <h2 className="text-2xl font-semibold tracking-tight text-navy-950">
                  {category}
                </h2>
                <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {items.map((product) => (
                    <div
                      key={product.slug}
                      className="flex flex-col overflow-hidden rounded-[var(--radius-md)] border border-gray-100 bg-white shadow-[var(--shadow-card)] transition-shadow hover:shadow-[var(--shadow-card-hover)]"
                    >
                      <Link href={`/products/${product.slug}`} className="relative h-44 w-full overflow-hidden bg-gray-100">
                        <Image
                          src={product.image}
                          alt={product.name}
                          fill
                          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                          className="object-cover transition-transform duration-300 hover:scale-105"
                        />
                      </Link>
                      <div className="flex flex-1 flex-col p-5">
                        <Link href={`/products/${product.slug}`}>
                          <h3 className="text-base font-semibold text-navy-950 hover:text-brand-700">
                            {product.name}
                          </h3>
                        </Link>
                        <p className="mt-2 flex-1 text-sm leading-relaxed text-gray-500">
                          {product.tagline}
                        </p>
                        <div className="mt-4 flex items-center justify-between gap-3">
                          <Link
                            href={`/products/${product.slug}`}
                            className="text-sm font-semibold text-brand-700 hover:text-brand-500"
                          >
                            View Details →
                          </Link>
                          <WhatsAppLink
                            message={productEnquiryMessage(product.name)}
                            variant="outline"
                          >
                            Enquire
                          </WhatsAppLink>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            );
          })}
        </div>
      </main>
    </>
  );
}
