import type { Metadata } from "next";
import { Inter, Lora } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "greek"],
});

const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Μ. ΦΙΛΙΠΠΟΥ - Ι. ΤΣΙΡΩΝΗΣ ΕΠΕ | Premium Ελληνικά Κρέατα | Οινόφυτα",
  description: "Η φάρμα Μ. ΦΙΛΙΠΠΟΥ - Ι. ΤΣΙΡΩΝΗΣ ΕΠΕ στα Οινόφυτα Βοιωτίας προσφέρει υψηλής ποιότητας, 100% ελληνικό χοιρινό κρέας. Χονδρική πώληση, σουβλάκια, λουκάνικα και premium κοπές.",
  keywords: ["χοιρινό κρέας", "ελληνικά κρέατα", "φάρμα Οινόφυτα", "χονδρική κρεάτων", "Μ. ΦΙΛΙΠΠΟΥ - Ι. ΤΣΙΡΩΝΗΣ", "σουβλάκια χονδρική", "λουκάνικα χωριάτικα", "Οινόφυτα Βοιωτίας", "χοιρινό χοντρική", "χοιρινό κρέας χοντρική", "Λουκάνικα χοντρική", "γύρος χοντρική", "χοιρινός γύρος χοντρική", "Χοντρική πώληση", "Χοντρική κρέατος", "Φρέσκο κρέας", "Ελληνικό κρέας", "100% ελληνικό κρέας", "Φρέσκο ελληνικό κρέας", "Χοιρινός κιμάς χονδρική", "Ελληνικός κιμάς", "Ελληνικός χοιρινός κιμάς", "Χοιρινό χονδρική"],
  authors: [{ name: "Μ. ΦΙΛΙΠΠΟΥ - Ι. ΤΣΙΡΩΝΗΣ ΕΠΕ" }],
  creator: "Μ. ΦΙΛΙΠΠΟΥ - Ι. ΤΣΙΡΩΝΗΣ ΕΠΕ",
  publisher: "Μ. ΦΙΛΙΠΠΟΥ - Ι. ΤΣΙΡΩΝΗΣ ΕΠΕ",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Μ. ΦΙΛΙΠΠΟΥ - Ι. ΤΣΙΡΩΝΗΣ ΕΠΕ | Premium Ελληνικά Κρέατα",
    description: "Υψηλής ποιότητας 100% ελληνικό χοιρινό κρέας από τη φάρμα μας στα Οινόφυτα Βοιωτίας από το 1974.",
    url: "https://filippou-tsironis.gr",
    siteName: "Μ. ΦΙΛΙΠΠΟΥ - Ι. ΤΣΙΡΩΝΗΣ ΕΠΕ",
    images: [
      {
        url: "/hero.jpg",
        width: 1200,
        height: 630,
        alt: "Φάρμα Μ. ΦΙΛΙΠΠΟΥ - Ι. ΤΣΙΡΩΝΗΣ ΕΠΕ στα Οινόφυτα",
      },
    ],
    locale: "el_GR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Μ. ΦΙΛΙΠΠΟΥ - Ι. ΤΣΙΡΩΝΗΣ ΕΠΕ | Premium Ελληνικά Κρέατα",
    description: "Υψηλής ποιότητας 100% ελληνικό χοιρινό κρέας από τη φάρμα μας στα Οινόφυτα Βοιωτίας.",
    images: ["/hero.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": ["Farm", "WholesaleStore", "LocalBusiness"],
    "name": "Μ. ΦΙΛΙΠΠΟΥ - Ι. ΤΣΙΡΩΝΗΣ ΕΠΕ",
    "image": "https://filippou-tsironis.gr/hero.jpg",
    "@id": "https://filippou-tsironis.gr",
    "url": "https://filippou-tsironis.gr",
    "telephone": "+302262031125",
    "email": "ftpigstore@gmail.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Οινόφυτα Βοιωτίας",
      "addressLocality": "Οινόφυτα",
      "addressRegion": "Βοιωτία",
      "postalCode": "32011",
      "addressCountry": "GR"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 38.284722,
      "longitude": 23.629232
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday"
      ],
      "opens": "07:00",
      "closes": "15:00"
    },
    "foundingDate": "1974",
    "description": "Η φάρμα Μ. ΦΙΛΙΠΠΟΥ - Ι. ΤΣΙΡΩΝΗΣ ΕΠΕ βρίσκεται στα Οινόφυτα Βοιωτίας και προσφέρει υψηλής ποιότητας 100% ελληνικό χοιρινό κρέας, σουβλάκια, λουκάνικα και premium κοπές."
  };

  return (
    <html lang="el" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body
        className={`${inter.variable} ${lora.variable} antialiased`}
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
