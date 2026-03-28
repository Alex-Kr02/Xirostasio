import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "Premium Κοπές Χοιρινής Μπριζόλας | Μ. ΦΙΛΙΠΠΟΥ - Ι. ΤΣΙΡΩΝΗΣ ΕΠΕ",
  description: "Ανακαλύψτε τις 4 premium κοπές χοιρινής μπριζόλας της φάρμας μας στα Οινόφυτα: Μπριζόλες λαιμού, σπαλομπριζόλες, μπριζόλες κόντρα και μπριζόλες για δίαιτα.",
};

export default function PorkCutsPage() {
  return (
    <div className="min-h-screen bg-[#111111] text-[#f5f5f5] pt-32 pb-24 px-6 md:px-12">
      <div className="max-w-4xl mx-auto">
        
        <Link href="/#products" className="text-[var(--color-primary)] hover:underline flex items-center gap-2 mb-12 uppercase tracking-widest text-sm font-semibold">
          &larr; Επιστροφή στα Προϊόντα
        </Link>
        
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-serif text-[var(--color-primary)] mb-6">
            Χοιρινή Μπριζόλα <br/>
            <span className="text-white text-3xl md:text-5xl font-light">Οι 4 Κορυφαίες Κοπές</span>
          </h1>
          <p className="text-xl text-stone-300 font-light">
            Επιλέξτε την κατάλληλη κοπή για τις δικές σας μαγειρικές δημιουργίες.
          </p>
        </div>

        <div className="relative w-full h-[400px] rounded-2xl overflow-hidden mb-20 border border-zinc-800 shadow-2xl">
          <Image 
            src="/pork-cuts.jpg" 
            alt="Κοπές Χοιρινού Κρέατος" 
            fill 
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1c1c1c]/90 to-transparent"></div>
        </div>

        <div className="space-y-16">
          {/* Cut 1 */}
          <div className="bg-zinc-900/50 p-8 md:p-10 rounded-2xl border border-zinc-800 hover:border-zinc-700 transition-colors flex flex-col md:flex-row gap-10 items-start">
            <div className="md:w-2/3">
              <h2 className="text-3xl font-serif text-white mb-4 flex items-center gap-4">
                <span className="text-[var(--color-primary)]">1.</span> Μπριζόλες Λαιμού
              </h2>
              <p className="text-stone-300 text-lg leading-relaxed font-light">
                Είναι <span className="text-white font-medium">πολύ μαλακές</span> λόγω της υψηλής περιεκτικότητάς τους σε λίπος, που φτάνει από 20% έως 40%, ανάλογα με το σιτηρέσιο του ζώου. Γίνονται πολύ νόστιμες ως τηγανιά, γιατί διατηρούν την τρυφερότητά τους. 
              </p>
              <div className="mt-4 p-4 bg-[#1a1a1a] rounded-lg text-sm text-stone-300 border-l-2 border-[var(--color-primary)]">
                <strong>Tip μαγειρέματος:</strong> Κατά το ψήσιμο δεν προτείνεται να προσθέσουμε κάποια λιπαρή ουσία. Προτιμάμε να τις ψήνουμε σε μέτρια φωτιά, ώστε να βγάλουν σιγά-σιγά το λίπος τους. Θα πρέπει να έχουν πάχος το λιγότερο 1,5 εκ., ώστε να μείνουν μαλακές στο εσωτερικό.
              </div>
            </div>
            <div className="md:w-1/3 w-full h-64 relative rounded-xl overflow-hidden border border-zinc-800 flex-shrink-0">
               <Image 
                 src="/pork-neck-cut.png" 
                 alt="Μπριζόλες Λαιμού" 
                 fill 
                 className="object-cover"
               />
            </div>
          </div>

          {/* Cut 2 */}
          <div className="bg-zinc-900/50 p-8 md:p-10 rounded-2xl border border-zinc-800 hover:border-zinc-700 transition-colors">
            <h2 className="text-3xl font-serif text-white mb-4 flex items-center gap-4">
              <span className="text-[var(--color-primary)]">2.</span> Σπαλομπριζόλες & Μπριζόλες από πλευρά
            </h2>
            <p className="text-stone-300 text-lg leading-relaxed font-light">
              Θεωρούνται ιδανικές για τηγάνι, είναι μέτρια λιπαρές, με λίπος από <span className="text-white font-medium">10% έως 30%</span>.
            </p>
            <div className="mt-4 p-4 bg-[#1a1a1a] rounded-lg text-sm text-stone-300 border-l-2 border-[var(--color-primary)]">
              <strong>Tip μαγειρέματος:</strong> Ιδανικό πάχος για να μη στεγνώσουν κατά το μαγείρεμα είναι από 1,5 έως 2 εκ., ώστε να προλάβουν να ψηθούν εξίσου μέσα και έξω και να διατηρήσουν την κατάλληλη υγρασία.
            </div>
          </div>

          {/* Cut 3 */}
          <div className="bg-zinc-900/50 p-8 md:p-10 rounded-2xl border border-zinc-800 hover:border-zinc-700 transition-colors">
            <h2 className="text-3xl font-serif text-white mb-4 flex items-center gap-4">
              <span className="text-[var(--color-primary)]">3.</span> Μπριζόλες Κόντρα
            </h2>
            <p className="text-stone-300 text-lg leading-relaxed font-light">
              Έχουν <span className="text-white font-medium">ελάχιστο ενδομυϊκό λίπος</span> (λιγότερο από 10%), γι’ αυτό γίνονται, κατά προτίμηση, μαγειρευτές. Επίσης, είναι πολύ νόστιμες ως σνίτσελ.
            </p>
            <div className="mt-4 p-4 bg-[#1a1a1a] rounded-lg text-sm text-stone-300 border-l-2 border-[var(--color-primary)]">
              <strong>Tip μαγειρέματος:</strong> Στο τηγάνι χρειάζεται προσοχή για να μη στεγνώσουν, οπότε τις προτιμάμε σε πάχος περίπου 2 εκ. Τις «ψήνουμε» σκεπασμένες, για να διατηρούνται οι υδρατμοί κατά το μαγείρεμα.
            </div>
          </div>

          {/* Cut 4 */}
          <div className="bg-zinc-900/50 p-8 md:p-10 rounded-2xl border border-zinc-800 hover:border-[var(--color-primary)] transition-colors relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-[var(--color-primary)] text-black text-xs font-bold uppercase tracking-wider px-4 py-1 rounded-bl-lg">Ιδανικο για Διαιτα</div>
            <h2 className="text-3xl font-serif text-white mb-4 flex items-center gap-4">
              <span className="text-[var(--color-primary)]">4.</span> Μπριζόλες για Δίαιτα (Μάτι)
            </h2>
            <p className="text-stone-300 text-lg leading-relaxed font-light">
              Στις μπριζόλες κόντρα υπάρχει ένα στρογγυλό, καθαρό κομμάτι κρέατος, το οποίο κάποιοι κρεοπώλες ονόμασαν «μάτι». Θεωρείται από τους διαιτολόγους <span className="text-white font-medium">κατάλληλο για διατροφή</span> που στοχεύει στην απώλεια βάρους.
            </p>
            <p className="text-stone-300 text-lg leading-relaxed font-light mt-4">
              Σε αυτό το τμήμα της μπριζόλας το ενδομυϊκό λίπος είναι ελάχιστο και βρίσκεται κυρίως περιμετρικά.
            </p>
            <div className="mt-4 p-4 bg-[#111111]/60 rounded-lg text-sm text-[var(--color-primary)] border-l-2 border-[var(--color-primary)]">
              <strong>Tip:</strong> Μπορούμε να ζητήσουμε από τον κρεοπώλη μας να αφαιρέσει το λίπος και να μας κόψει από εκεί μπριζόλες πάχους 1,5 εκ., ιδανικές για όσους προσέχουν, αλλά δεν μπορούν να στερηθούν το κρέας.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
