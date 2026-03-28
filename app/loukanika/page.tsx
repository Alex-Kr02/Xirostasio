import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "Λουκάνικα | Μ. ΦΙΛΙΠΠΟΥ - Ι. ΤΣΙΡΩΝΗΣ ΕΠΕ",
  description: "Παραδοσιακά χωριάτικα λουκάνικα σε διάφορες γεύσεις: πρασάτο και καυτερό. Με την εγγύηση της φάρμας μας.",
};

export default function LoukanikaPage() {
  return (
    <div className="min-h-screen bg-[#111111] text-[#f5f5f5] pt-32 pb-24 px-6 md:px-12 flex items-center justify-center">
      <div className="max-w-4xl mx-auto w-full">
        
        <Link href="/#products" className="text-[var(--color-primary)] hover:underline flex items-center gap-2 mb-12 uppercase tracking-widest text-sm font-semibold">
          &larr; Επιστροφή στα Προϊόντα
        </Link>
        
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-serif text-[var(--color-primary)] mb-6">Λουκάνικα</h1>
          <p className="text-2xl text-white font-serif italic tracking-wide">
             Χωριάτικο, Πρασάτο, Καυτερό
          </p>
        </div>

        <div className="relative w-full h-[500px] rounded-2xl overflow-hidden mb-12 border border-zinc-800 shadow-2xl">
          <Image 
            src="/loukanika.jpg" 
            alt="Λουκάνικα - Χωριάτικο, Πρασάτο, Καυτερό" 
            fill 
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-[#111111]/50"></div>
          <div className="absolute bottom-10 left-10 right-10 flex justify-center">
             <div className="bg-[#111111]/80 backdrop-blur-md px-10 py-6 rounded-xl border border-[var(--color-primary)]/50 shadow-xl">
               <p className="text-white text-xl md:text-2xl font-light text-center leading-relaxed">
                  Επιλέξτε το κλασικό <span className="text-[var(--color-primary)] font-medium">χωριάτικο</span>, το αρωματικό <span className="text-[var(--color-primary)] font-medium">πρασάτο</span> ή το πικάντικο <span className="text-[var(--color-primary)] font-medium">καυτερό</span>. Δική μας παραγωγή, με εγγυημένη νοστιμιά.
               </p>
             </div>
          </div>
        </div>

      </div>
    </div>
  );
}
