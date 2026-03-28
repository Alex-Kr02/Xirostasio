import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#111111] text-[#f5f5f5]">
      {/* Navigation */}
      <nav className="absolute top-0 w-full z-50 px-6 py-6 flex justify-between items-center text-white mix-blend-difference">
        <div className="text-stone-300 font-serif tracking-widest text-xl font-bold uppercase">
          Μ. ΦΙΛΙΠΠΟΥ - Ι. ΤΣΙΡΩΝΗΣ
        </div>
        <div className="hidden md:flex gap-8 text-sm uppercase tracking-widest">
          <a href="#about" className="hover:text-[var(--color-primary)] transition-colors">Η Φάρμα</a>
          <a href="#products" className="hover:text-[var(--color-primary)] transition-colors">Προϊόντα</a>
          <a href="#contact" className="hover:text-[var(--color-primary)] transition-colors">Επικοινωνία</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center text-center px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[#111111]/70 z-10"></div>
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/hero.jpg')" }}
        ></div>

        <div className="relative z-20 max-w-4xl mx-auto flex flex-col items-center">
          <span className="text-[var(--color-primary)] text-sm md:text-base tracking-[0.3em] uppercase mb-4 opacity-90 drop-shadow-md">
            Premium Ελληνικά Κρέατα
          </span>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-white mb-6 leading-tight drop-shadow-xl">
            Μ. ΦΙΛΙΠΠΟΥ <br/> <span className="text-[var(--color-primary)]">&</span> Ι. ΤΣΙΡΩΝΗΣ
          </h1>
          <p className="text-lg md:text-2xl text-stone-300 max-w-2xl font-light mb-10 leading-relaxed shadow-sm">
            Παράδοση, σεβασμός και υψηλή ποιότητα. Από τη φάρμα μας στα Οινόφυτα, απευθείας στο τραπέζι σας. Εγγυόμαστε τα πιο <span className="text-[var(--color-primary)] font-medium">φρέσκα κρέατα</span> στις <span className="text-[var(--color-primary)] font-medium">καλύτερες τιμές</span> της αγοράς.
          </p>
          <a href="#about" className="px-8 py-4 bg-[var(--color-primary)] text-black hover:bg-transparent hover:text-white transition-all duration-300 font-medium tracking-wide border border-[var(--color-primary)]">
            Ανακαλύψτε Τη Φάρμα
          </a>
        </div>
      </section>

      {/* Feature Highlights */}
      <section className="bg-black border-b border-zinc-800 py-10 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-zinc-700">
          <div className="w-full md:w-1/3 pt-4 md:pt-0">
            <h3 className="text-[var(--color-primary)] text-2xl font-serif mb-2">100% Ελληνικό</h3>
            <p className="text-stone-400 text-sm">Δικής μας παραγωγής από τα Οινόφυτα.</p>
          </div>
          <div className="w-full md:w-1/3 pt-4 md:pt-0">
            <h3 className="text-[var(--color-primary)] text-2xl font-serif mb-2">Απόλυτη Φρεσκάδα</h3>
            <p className="text-stone-400 text-sm">Από τη φάρμα κατευθείαν στον καταναλωτή.</p>
          </div>
          <div className="w-full md:w-1/3 pt-4 md:pt-0">
            <h3 className="text-[var(--color-primary)] text-2xl font-serif mb-2">Ασυναγώνιστες Τιμές</h3>
            <p className="text-stone-400 text-sm">Η καλύτερη σχέση ποιότητας - τιμής στην αγορά.</p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-6 md:px-12 bg-[#161616]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
          <div className="md:w-1/2">
            <h2 className="text-4xl md:text-5xl font-serif text-white mb-6">Η Κληρονομιά Μας</h2>
            <p className="text-lg leading-relaxed text-stone-100 mb-6 font-medium">
              Η φάρμα Μ. ΦΙΛΙΠΠΟΥ - Ι. ΤΣΙΡΩΝΗΣ ΕΠΕ εδρεύει στα Οινόφυτα Βοιωτίας, έναν τόπο με μακρά παράδοση στην κτηνοτροφία. Εδώ και χρόνια, δεσμευόμαστε να προσφέρουμε στους πελάτες μας χοιρινό κρέας ασύγκριτης γεύσης και θρεπτικής αξίας στις καλύτερες τιμές της αγοράς.
            </p>
            <p className="text-lg leading-relaxed text-stone-200">
              Με σεβασμό στα ζώα και στο περιβάλλον, εφαρμόζουμε τις πιο σύγχρονες και αυστηρές πρακτικές εκτροφής, διασφαλίζοντας ότι κάθε κομμάτι κρέατος που φτάνει στο πιάτο σας είναι απλώς τέλειο.
            </p>
          </div>
          <div className="md:w-1/2 relative h-96 w-full">
             <div className="absolute inset-0 border-2 border-[var(--color-primary)] translate-x-4 translate-y-4"></div>
             <div 
               className="absolute inset-0 bg-cover bg-center shadow-2xl"
               style={{ backgroundImage: "url('https://images.unsplash.com/photo-1516467508483-a7212febe31a?q=80&w=2673&auto=format&fit=crop')" }}
             ></div>
          </div>
        </div>
      </section>

      {/* Premium Products Section */}
      <section id="products" className="py-24 px-6 md:px-12 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-6xl md:text-8xl font-serif text-[var(--color-primary)]">Η Συλλογή Μας</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Product 1 - Linked to detail page */}
            <Link href="/cuts" className="block group cursor-pointer">
              <div className="relative h-80 overflow-hidden mb-6 rounded-xl border border-zinc-800 group-hover:border-[var(--color-primary)] transition-colors duration-300">
                 <div className="absolute inset-0 bg-[#7F7F7F]/40 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
                 <div 
                  className="absolute inset-0 bg-cover bg-center group-hover:scale-110 transition-transform duration-700"
                  style={{ backgroundImage: "url('/pork-cuts.jpg')" }}
                 ></div>
              </div>
              <h3 className="text-2xl font-serif text-white mb-2 group-hover:text-[var(--color-primary)] transition-colors inline-block">Χοιρινές Μπριζόλες</h3>
              <p className="text-stone-400 mb-3">Εκλεκτή μπριζόλα με ιδανική αναλογία μαρμαρώματος για απόλυτη τρυφερότητα.</p>
              <span className="text-[var(--color-primary)] text-sm tracking-wider uppercase font-semibold group-hover:underline">Δείτε τις Κοπές &rarr;</span>
            </Link>
            {/* Product 2 - Linked to detail page */}
            <Link href="/souvlakia" className="block group cursor-pointer">
              <div className="relative h-80 overflow-hidden mb-6 rounded-xl border border-zinc-800 group-hover:border-[var(--color-primary)] transition-colors duration-300">
                 <div className="absolute inset-0 bg-[#7F7F7F]/40 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
                 <div 
                  className="absolute inset-0 bg-cover bg-center group-hover:scale-110 transition-transform duration-700"
                  style={{ backgroundImage: "url('/souvlakia.jpg')" }}
                 ></div>
              </div>
              <h3 className="text-2xl font-serif text-white mb-2 group-hover:text-[var(--color-primary)] transition-colors inline-block">Σουβλάκια</h3>
              <p className="text-stone-400 mb-3">Αυθεντικά, χειροποίητα σουβλάκια από εκλεκτά κομμάτια κρέατος.</p>
              <span className="text-[var(--color-primary)] text-sm tracking-wider uppercase font-semibold group-hover:underline">Περισσότερα &rarr;</span>
            </Link>
            {/* Product 3 - Linked to detail page */}
            <Link href="/loukanika" className="block group cursor-pointer">
              <div className="relative h-80 overflow-hidden mb-6 rounded-xl border border-zinc-800 group-hover:border-[var(--color-primary)] transition-colors duration-300">
                 <div className="absolute inset-0 bg-[#7F7F7F]/40 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
                 <div 
                  className="absolute inset-0 bg-cover bg-center group-hover:scale-110 transition-transform duration-700"
                  style={{ backgroundImage: "url('/loukanika.jpg')" }}
                 ></div>
              </div>
              <h3 className="text-2xl font-serif text-white mb-2 group-hover:text-[var(--color-primary)] transition-colors inline-block">Λουκάνικα</h3>
              <p className="text-stone-400 mb-3">Εξαιρετικής ποιότητας λουκάνικα γεμάτα με παραδοσιακή γεύση και αρώματα.</p>
              <span className="text-[var(--color-primary)] text-sm tracking-wider uppercase font-semibold group-hover:underline">Περισσότερα &rarr;</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-6 md:px-12 text-center bg-black border-t border-zinc-900">
        <h2 className="text-3xl md:text-5xl font-serif text-white mb-8">Επικοινωνήστε Μαζί Μας</h2>
        <p className="text-lg text-stone-200 max-w-2xl mx-auto mb-12">
          Ενδιαφέρεστε για χονδρική πώληση ή θέλετε να μάθετε περισσότερα για τα προϊόντα μας; Η ομάδα μας είναι στη διάθεσή σας.
        </p>
        
        <div className="flex justify-center mb-16">
          <a href="mailto:info@filippou-tsironis.gr" className="px-10 py-4 bg-[#2a2a2a] text-white font-semibold hover:bg-[var(--color-primary)] hover:text-black transition-colors tracking-wide border border-zinc-700 hover:border-transparent">
            Αποστολή Μηνύματος
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto text-stone-300">
           <div>
              <h4 className="text-white font-serif text-xl mb-2">Τοποθεσία</h4>
              <p className="mb-4">Οινόφυτα Βοιωτίας, Τ.Κ. 32011</p>
              <div className="w-full h-64 rounded-xl overflow-hidden border border-zinc-800 shadow-2xl mt-6 group">
                <iframe
                  title="Google Maps Location"
                  width="100%"
                  height="100%"
                  loading="lazy"
                  allowFullScreen
                  className="transition-all duration-700 w-full h-full"
                  referrerPolicy="no-referrer-when-downgrade"
                  src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3131.644!2d23.629!3d38.284!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzjCsDE3JzA0LjQiTiAyM8KwMzcnNTQuNiJF!5e0!3m2!1sel!2sgr!4v1711580000000"
                ></iframe>
              </div>
           </div>
           <div>
              <h4 className="text-white font-serif text-xl mb-2">Τηλέφωνο</h4>
              <p>
                <a href="tel:+302262031125" className="hover:text-[var(--color-primary)] transition-colors">
                  +30 2262 031125
                </a>
              </p>
           </div>
           <div>
              <h4 className="text-white font-serif text-xl mb-2">Email</h4>
              <p>info@filippou-tsironis.gr</p>
           </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center text-sm text-stone-500 bg-[#111111] border-t border-zinc-900">
        <p>&copy; 2026 Μ. ΦΙΛΙΠΠΟΥ - Ι. ΤΣΙΡΩΝΗΣ ΕΠΕ. Με επιφύλαξη παντός δικαιώματος.</p>
      </footer>
    </div>
  );
}
