import { Button } from "@/components/ui/Button";
import { company } from "@/lib/content";
import { generalEnquiryMessage, whatsappLink } from "@/lib/whatsapp";

export function FinalCta() {
  return (
    <section id="contact" className="relative overflow-hidden bg-navy-950 py-24 text-white-warm lg:py-32">
      <div
        className="pointer-events-none absolute inset-0 opacity-70"
        style={{
          background:
            "radial-gradient(ellipse 70% 60% at 50% 0%, rgba(0,160,227,0.14), transparent 65%)",
        }}
        aria-hidden
      />
      <div className="relative mx-auto max-w-3xl px-6 text-center lg:px-8">
        <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
          Engineering the future of pharmaceutical manufacturing.
        </h2>
        <p className="mt-6 text-base leading-relaxed text-gray-300">
          Speak with our team about tablet presses, dryers, granulators,
          blenders and mills built for your production line.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Button href={whatsappLink(generalEnquiryMessage)} variant="primary">
            Request a Quote on WhatsApp
          </Button>
          <Button href={company.emailHref} variant="secondary-dark">
            Email Us
          </Button>
        </div>
      </div>
    </section>
  );
}
