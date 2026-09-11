import Image from "next/image";
import Link from "next/link";
import { company, featuredProducts } from "@/lib/content";
import { generalEnquiryMessage, whatsappLink } from "@/lib/whatsapp";

export function Footer() {
  return (
    <footer className="bg-navy-950 py-16 text-gray-400">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-10 sm:grid-cols-3 lg:grid-cols-5">
          <div className="col-span-2 sm:col-span-3 lg:col-span-2">
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/logo.png"
                alt="Pramukh Pharma Tech"
                width={32}
                height={32}
                className="h-8 w-8 rounded-full bg-white-warm p-0.5"
              />
              <span className="text-sm font-semibold tracking-wide text-white-warm">
                PRAMUKH PHARMA TECH
              </span>
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed">
              {company.address}
            </p>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-gray-500">
              Products
            </p>
            <ul className="mt-4 space-y-2 text-sm">
              {featuredProducts.slice(0, 5).map((product) => (
                <li key={product.slug}>
                  <Link
                    href={`/products/${product.slug}`}
                    className="hover:text-brand-400"
                  >
                    {product.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/products" className="text-brand-400 hover:text-brand-300">
                  View all products →
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-gray-500">
              Company
            </p>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <Link href="/about" className="hover:text-brand-400">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/#industries" className="hover:text-brand-400">
                  Industries
                </Link>
              </li>
              <li>
                <Link href="/#quality" className="hover:text-brand-400">
                  Quality &amp; Compliance
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-brand-400">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-gray-500">
              Contact
            </p>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <a href={company.phoneHref} className="hover:text-brand-400">
                  {company.phone}
                </a>
              </li>
              <li>
                <a href={company.emailHref} className="hover:text-brand-400">
                  {company.email}
                </a>
              </li>
              <li>
                <a
                  href={whatsappLink(generalEnquiryMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-brand-400"
                >
                  WhatsApp Us
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-8 text-xs text-gray-500">
          © {new Date().getFullYear()} Pramukh Pharma Tech. All rights
          reserved.
        </div>
      </div>
    </footer>
  );
}
