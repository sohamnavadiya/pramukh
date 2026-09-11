import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { WhatsAppFloatingButton } from "@/components/WhatsAppFloatingButton";
import { company } from "@/lib/content";
import { siteUrl } from "@/lib/site";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Pramukh Pharma Tech — Pharmaceutical Processing Machinery",
    template: "%s | Pramukh Pharma Tech",
  },
  description:
    "Pramukh Pharma Tech manufactures GMP-compliant tablet presses, dryers, granulators, blenders and mills for pharmaceutical, ayurvedic, cosmetic, chemical, nutraceutical and food industries — exported from India to global markets.",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: "Pramukh Pharma Tech",
    title: "Pramukh Pharma Tech — Pharmaceutical Processing Machinery",
    description:
      "GMP-compliant tablet presses, dryers, granulators, blenders and mills, manufactured in Ahmedabad and exported worldwide.",
    url: siteUrl,
    images: ["/logo.png"],
  },
  twitter: {
    card: "summary",
    title: "Pramukh Pharma Tech — Pharmaceutical Processing Machinery",
    description:
      "GMP-compliant pharmaceutical processing machinery, manufactured in Ahmedabad and exported worldwide.",
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Pramukh Pharma Tech",
  url: siteUrl,
  logo: `${siteUrl}/logo.png`,
  description:
    "Manufacturer, supplier and exporter of pharmaceutical processing machinery for the pharmaceutical, ayurvedic, cosmetic, chemical, nutraceutical and food industries.",
  address: {
    "@type": "PostalAddress",
    streetAddress:
      "66,67 – Mahaveer Industrial Park – 2, Opp. RadheKrishna Gold Estate, Kathawada Village Road",
    addressLocality: "Ahmedabad",
    addressRegion: "Gujarat",
    postalCode: "382430",
    addressCountry: "IN",
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: company.phone,
    email: company.email,
    contactType: "sales",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <Nav />
        <div className="flex-1">{children}</div>
        <Footer />
        <WhatsAppFloatingButton />
      </body>
    </html>
  );
}
