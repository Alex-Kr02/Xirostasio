import Link from "next/link";
import Image from "next/image";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Σουβλάκια | Μ. ΦΙΛΙΠΠΟΥ - Ι. ΤΣΙΡΩΝΗΣ ΕΠΕ",
  description: "Αυθεντικά χοιρινά καλαμάκια (σουβλάκια) κομμένα πλατιά και τετράγωνα για το τέλειο ψήσιμο. 100% Ελληνικό Κρέας.",
  openGraph: {
    title: "Σουβλάκια | Μ. ΦΙΛΙΠΠΟΥ - Ι. ΤΣΙΡΩΝΗΣ ΕΠΕ",
    description: "Αυθεντικά χοιρινά καλαμάκια (σουβλάκια) κομμένα πλατιά και τετράγωνα για το τέλειο ψήσιμο.",
    url: "https://filippou-tsironis.gr/souvlakia",
    siteName: "Μ. ΦΙΛΙΠΠΟΥ - Ι. ΤΣΙΡΩΝΗΣ ΕΠΕ",
    images: [
      {
        url: "/souvlakia.jpg",
        width: 1200,
        height: 630,
        alt: "Σουβλάκια - Πλατιά, τετράγωνα",
      },
    ],
    locale: "el_GR",
    type: "article",
  },
};

export default function SouvlakiaPage() {
  const structuredData = {
    "@context": "https://schema.org/",
    "@type": "Product",
    "name": "Χοιρινά Σουβλάκια",
    "image": "https://filippou-tsironis.gr/souvlakia.jpg",
    "description": "Αυθεντικά χοιρινά καλαμάκια (σουβλάκια) κομμένα πλατιά και τετράγωνα για το τέλειο ψήσιμο. Ιδανικά για χονδρική πώληση.",
    "brand": {
      "@type": "Brand",
      "name": "Μ. ΦΙΛΙΠΠΟΥ - Ι. ΤΣΙΡΩΝΗΣ ΕΠΕ"
    }
  };

  return (
    <div className="min-h-screen bg-[#111111] text-[#f5f5f5] pt-32 pb-24 px-6 md:px-12 flex items-center justify-center">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <div className="max-w-4xl mx-auto w-full">
        
        <Link href="/#products" className="text-[var(--color-primary)] hover:underline flex items-center gap-2 mb-12 uppercase tracking-widest text-sm font-semibold">
          &larr; Επιστροφή στα Προϊόντα
        </Link>
        
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-serif text-[var(--color-primary)] mb-6">Σουβλάκια</h1>
          <p className="text-2xl text-white font-serif italic tracking-wide">
            "Πλατιά, τετράγωνα"
          </p>
        </div>

        <div className="relative w-full h-[500px] rounded-2xl overflow-hidden mb-12 border border-zinc-800 shadow-2xl">
          <Image 
            src="/souvlakia.jpg" 
            alt="Σουβλάκια - Πλατιά, τετράγωνα" 
            fill 
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-[#111111]/50"></div>
          <div className="absolute bottom-10 left-10 right-10 flex justify-center">
             <div className="bg-[#111111]/80 backdrop-blur-md px-10 py-6 rounded-xl border border-[var(--color-primary)]/50 shadow-xl">
               <p className="text-white text-xl md:text-2xl font-light text-center leading-relaxed">
                  Κομμένα με ακρίβεια <span className="text-[var(--color-primary)] font-medium">πλατιά</span> και <span className="text-[var(--color-primary)] font-medium">τετράγωνα</span>, τα σουβλάκια μας εξασφαλίζουν ομοιόμορφο ψήσιμο και απόλυτη γευστική εμπειρία.
               </p>
             </div>
          </div>
        </div>

      </div>
    </div>
  );
}
