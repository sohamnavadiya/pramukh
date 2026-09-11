import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { WhatsAppLink } from "@/components/ui/WhatsAppLink";
import { company } from "@/lib/content";
import { generalEnquiryMessage } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Pramukh Pharma Tech — call, email or WhatsApp us, or visit our manufacturing facility in Kathawada, Ahmedabad, Gujarat.",
  alternates: { canonical: "/contact" },
};

const mapEmbedSrc = `https://www.google.com/maps?q=${encodeURIComponent(
  "Pramukh Pharma Tech, Mahaveer Industrial Park 2, Kathawada, Ahmedabad, Gujarat 382430"
)}&output=embed`;

const contactCards = [
  {
    label: "Call Us",
    value: company.phone,
    href: company.phoneHref,
  },
  {
    label: "Mail Us",
    value: company.email,
    href: company.emailHref,
  },
  {
    label: "Company Address",
    value: company.address,
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        kicker="Get In Touch"
        title="Speak with our team."
        description="Whether it's a spec question, a quote or a site visit — reach us directly, no forms or gatekeeping."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Contact" }]}
      />

      <main className="bg-white-warm py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
            {contactCards.map((card) => (
              <div
                key={card.label}
                className="rounded-[var(--radius-md)] border border-gray-100 bg-white p-7 shadow-[var(--shadow-card)]"
              >
                <p className="text-xs font-semibold uppercase tracking-wider text-gray-500">
                  {card.label}
                </p>
                {card.href ? (
                  <a
                    href={card.href}
                    className="mt-3 block text-base font-medium text-navy-950 hover:text-brand-700"
                  >
                    {card.value}
                  </a>
                ) : (
                  <p className="mt-3 text-base leading-relaxed text-gray-600">
                    {card.value}
                  </p>
                )}
              </div>
            ))}
          </div>

          <div className="mt-10 rounded-[var(--radius-lg)] border border-gray-100 bg-navy-950 p-10 text-white-warm">
            <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
              <div>
                <h2 className="text-xl font-semibold">
                  Prefer WhatsApp? So do most of our customers.
                </h2>
                <p className="mt-2 max-w-xl text-sm leading-relaxed text-gray-300">
                  Message us directly for the fastest response — pricing,
                  specifications and lead times.
                </p>
              </div>
              <WhatsAppLink message={generalEnquiryMessage}>
                Chat on WhatsApp
              </WhatsAppLink>
            </div>
          </div>

          <div className="mt-16 overflow-hidden rounded-[var(--radius-lg)] border border-gray-100">
            <iframe
              title="Pramukh Pharma Tech location"
              src={mapEmbedSrc}
              width="100%"
              height="420"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="block"
            />
          </div>
        </div>
      </main>
    </>
  );
}
