import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/PageHero";
import { WhatsAppLink } from "@/components/ui/WhatsAppLink";
import { getProductBySlug, products } from "@/lib/products";
import { productEnquiryMessage } from "@/lib/whatsapp";

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return {};

  return {
    title: `${product.name} — Manufacturer & Supplier`,
    description: product.tagline,
    alternates: { canonical: `/products/${product.slug}` },
    openGraph: {
      title: `${product.name} | Pramukh Pharma Tech`,
      description: product.tagline,
      images: [{ url: product.image }],
    },
  };
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) notFound();

  const related = products
    .filter((p) => p.category === product.category && p.slug !== product.slug)
    .slice(0, 3);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.tagline,
    image: product.image,
    category: product.category,
    brand: {
      "@type": "Organization",
      name: "Pramukh Pharma Tech",
    },
    manufacturer: {
      "@type": "Organization",
      name: "Pramukh Pharma Tech",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <PageHero
        kicker={product.category}
        title={product.name}
        description={product.tagline}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Products", href: "/products" },
          { label: product.name },
        ]}
      />

      <main className="bg-white-warm py-20 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8">
          <div>
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[var(--radius-lg)] bg-gray-100">
              <Image
                src={product.image}
                alt={product.name}
                fill
                sizes="(min-width: 1024px) 55vw, 100vw"
                className="object-cover"
                priority
              />
            </div>

            <p className="mt-8 text-base leading-relaxed text-gray-600">
              {product.intro}
            </p>

            <h2 className="mt-10 text-xl font-semibold text-navy-950">
              Key Features
            </h2>
            <ul className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {product.keyFeatures.map((feature) => (
                <li
                  key={feature}
                  className="rounded-[var(--radius-sm)] border border-gray-100 bg-white p-4 text-sm leading-relaxed text-gray-600"
                >
                  {feature}
                </li>
              ))}
            </ul>

            <h2 className="mt-10 text-xl font-semibold text-navy-950">
              Applications
            </h2>
            <ul className="mt-4 space-y-2">
              {product.applications.map((application) => (
                <li
                  key={application}
                  className="border-l-2 border-brand-500 pl-4 text-sm leading-relaxed text-gray-600"
                >
                  {application}
                </li>
              ))}
            </ul>

            {product.workingPrinciple && (
              <>
                <h2 className="mt-10 text-xl font-semibold text-navy-950">
                  Working Principle
                </h2>
                <p className="mt-4 text-sm leading-relaxed text-gray-600">
                  {product.workingPrinciple.summary}
                </p>
                <ol className="mt-4 space-y-3">
                  {product.workingPrinciple.steps.map((step, i) => (
                    <li key={step} className="flex gap-4 text-sm leading-relaxed text-gray-600">
                      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-navy-950 text-xs font-semibold text-brand-400">
                        {i + 1}
                      </span>
                      <span>{step}</span>
                    </li>
                  ))}
                </ol>
              </>
            )}

            <h2 className="mt-10 text-xl font-semibold text-navy-950">
              Why Choose Pramukh Pharma Tech
            </h2>
            <ul className="mt-4 space-y-2">
              {product.whyChooseUs.map((reason) => (
                <li
                  key={reason}
                  className="flex items-start gap-3 text-sm leading-relaxed text-gray-600"
                >
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-500" />
                  {reason}
                </li>
              ))}
            </ul>
          </div>

          <aside>
            <div className="sticky top-28 rounded-[var(--radius-lg)] border border-gray-100 bg-white p-7 shadow-[var(--shadow-card)]">
              <p className="text-sm font-semibold uppercase tracking-wider text-gray-500">
                Enquire about this machine
              </p>
              <p className="mt-3 text-sm leading-relaxed text-gray-600">
                Get pricing, lead times and specification support for the{" "}
                {product.name} directly from our team.
              </p>
              <div className="mt-6 flex flex-col gap-3">
                <WhatsAppLink message={productEnquiryMessage(product.name)}>
                  Enquire on WhatsApp
                </WhatsAppLink>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-[var(--radius-sm)] border border-gray-200 px-5 py-3 text-sm font-semibold text-navy-950 transition-colors hover:border-brand-500 hover:text-brand-700"
                >
                  Contact Us
                </Link>
              </div>
            </div>

            {related.length > 0 && (
              <div className="mt-10">
                <p className="text-sm font-semibold uppercase tracking-wider text-gray-500">
                  Related in {product.category}
                </p>
                <div className="mt-4 flex flex-col gap-3">
                  {related.map((item) => (
                    <Link
                      key={item.slug}
                      href={`/products/${item.slug}`}
                      className="flex items-center gap-3 rounded-[var(--radius-sm)] border border-gray-100 bg-white p-3 transition-shadow hover:shadow-[var(--shadow-card)]"
                    >
                      <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-[var(--radius-sm)] bg-gray-100">
                        <Image
                          src={item.image}
                          alt={item.name}
                          fill
                          sizes="48px"
                          className="object-cover"
                        />
                      </div>
                      <span className="text-sm font-medium text-navy-950">
                        {item.name}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </aside>
        </div>
      </main>
    </>
  );
}
