import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "Σουβλάκια | Μ. ΦΙΛΙΠΠΟΥ - Ι. ΤΣΙΡΩΝΗΣ ΕΠΕ",
  description: "Αυθεντικά καλαμάκια (σουβλάκια) κομμένα πλατιά και τετράγωνα για το τέλειο ψήσιμο.",
};

export default function SouvlakiaPage() {
  return (
    <div className="min-h-screen bg-background text-foreground pt-32 pb-24 px-6 md:px-12 flex items-center justify-center">
      <div className="max-w-4xl mx-auto w-full">
        
        <Link href="/#products" className="text-[var(--color-primary)] hover:underline flex items-center gap-2 mb-12 uppercase tracking-widest text-sm font-semibold">
          &larr; Επιστροφή στα Προϊόντα
        </Link>
        
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-serif text-[var(--color-primary)] mb-6">Σουβλάκια</h1>
          <p className="text-2xl text-stone-800 dark:text-white font-serif italic tracking-wide">
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
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
          <div className="absolute bottom-10 left-10 right-10 flex justify-center">
             <div className="bg-black/70 backdrop-blur-md px-10 py-6 rounded-xl border border-[var(--color-primary)]/50">
               <p className="text-white text-xl md:text-2xl font-light text-center">
                  Κομμένα με ακρίβεια <span className="text-[var(--color-primary)] font-medium">πλατιά</span> και <span className="text-[var(--color-primary)] font-medium">τετράγωνα</span>, τα σουβλάκια μας εξασφαλίζουν ομοιόμορφο ψήσιμο και απόλυτη γευστική εμπειρία.
               </p>
             </div>
          </div>
        </div>

      </div>
    </div>
  );
}
