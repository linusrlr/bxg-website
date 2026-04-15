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
  title: "BXG Muay Thai Academy | Muay Thai Classes in Tanjong Katong, Singapore",
  description:
    "BXG Muay Thai Academy offers Muay Thai classes in Tanjong Katong, Singapore for all skill levels. Beginner-friendly fundamentals, pad work, and advanced sessions. 30+ classes weekly, 7 days a week.",
  keywords: [
    "Muay Thai Singapore",
    "Muay Thai classes Singapore",
    "BXG Muay Thai Academy",
    "Muay Thai Tanjong Katong",
    "beginner Muay Thai Singapore",
    "Muay Thai gym Singapore",
    "martial arts Singapore",
    "Muay Thai training",
    "kickboxing Singapore",
    "Muay Thai for beginners",
    "combat sports Singapore",
    "Muay Thai East Singapore",
    "self defense classes Singapore",
    "BXG MTA",
  ],
  openGraph: {
    title: "BXG Muay Thai Academy | Train With Purpose",
    description:
      "Singapore's legacy Muay Thai academy in Tanjong Katong. 30+ classes weekly for all skill levels. From first punch to fight night.",
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
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SportsActivityLocation",
              name: "BXG Muay Thai Academy",
              description:
                "Muay Thai classes in Tanjong Katong, Singapore. Beginner-friendly fundamentals, pad work, and advanced sessions for all skill levels.",
              address: {
                "@type": "PostalAddress",
                streetAddress: "260 Tanjong Katong Rd",
                addressLocality: "Singapore",
                postalCode: "437048",
                addressCountry: "SG",
              },
              telephone: "+6588679387",
              url: "",
              geo: {
                "@type": "GeoCoordinates",
                latitude: 1.306,
                longitude: 103.896,
              },
              openingHoursSpecification: [
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: ["Monday", "Wednesday", "Friday"],
                  opens: "09:30",
                  closes: "21:00",
                },
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: ["Tuesday", "Thursday"],
                  opens: "09:30",
                  closes: "21:00",
                },
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: ["Saturday", "Sunday"],
                  opens: "10:30",
                  closes: "12:30",
                },
              ],
              sameAs: [
                "https://www.instagram.com/bxgmta/",
                "https://linktr.ee/bxgmta",
              ],
            }),
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
