import type { Metadata } from "next";
import { Inter, Lora } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import "leaflet/dist/leaflet.css";
import Footer from "@/components/layout/Footer";



/* Main UI font */
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

/* Editorial / heading font */
const lora = Lora({
  subsets: ["latin"],
  variable: "--font-lora",
  display: "swap",
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://aplombsoft.com"),

  title: {
    default: "Aplomb Soft | IT & Software Solutions Company",
    template: "%s | Aplomb Soft",
  },

  description:
    "Aplomb Soft is an IT and software development company delivering scalable web, cloud, blockchain, and enterprise solutions for growing businesses.",

  keywords: [
    "Aplomb Soft",
    "ASPL",
    "IT services company",
    "software development company",
    "web development",
    "cloud solutions",
    "blockchain development",
    "enterprise software",
  ],

  authors: [{ name: "Aplomb Soft Pvt. Ltd." }],
  creator: "Aplomb Soft",
  publisher: "Aplomb Soft",

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  openGraph: {
    type: "website",
    url: "https://aplombsoft.com",
    title: "Aplomb Soft | IT & Software Solutions",
    description:
      "We build scalable software, cloud, and digital solutions that help businesses grow faster.",
    siteName: "Aplomb Soft",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Aplomb Soft - IT & Software Solutions",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Aplomb Soft | IT & Software Solutions",
    description:
      "Modern IT, software development, and digital solutions for growing businesses.",
    images: ["/og-image.png"],
  },

  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    apple: "/apple-touch-icon.png",
  },
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${lora.variable} font-inter antialiased bg-white text-slate-900`}
      >
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
