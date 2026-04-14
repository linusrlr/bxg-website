import type { Metadata } from "next";
import { Bebas_Neue, Barlow, Barlow_Condensed } from "next/font/google";
import "./globals.css";

const bebasNeue = Bebas_Neue({
  variable: "--font-bebas",
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

const barlow = Barlow({
  variable: "--font-barlow",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const barlowCondensed = Barlow_Condensed({
  variable: "--font-barlow-condensed",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "BXG Muay Thai Academy — Singapore's Legacy Muay Thai Gym",
  description:
    "Singapore's original Muay Thai academy since 2003. Expert-led classes from fundamentals to competition. Drop-in $45, unlimited from $258/month.",
  keywords: [
    "Muay Thai Singapore",
    "Muay Thai Academy",
    "BXG Muay Thai",
    "Muay Thai Tanjong Katong",
    "Muay Thai classes Singapore",
    "martial arts Singapore",
  ],
  openGraph: {
    title: "BXG Muay Thai Academy — Train With Purpose",
    description:
      "22+ years of authentic Muay Thai training in Tanjong Katong, Singapore. Classes 7 days a week.",
    locale: "en_SG",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${bebasNeue.variable} ${barlow.variable} ${barlowCondensed.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
