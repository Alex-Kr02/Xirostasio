"use client";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isPending, setIsPending] = useState(false);
  const [formData, setFormData] = useState({
    businessName: "",
    afm: "",
    phone: "",
    address: "",
    quantity: ""
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsPending(true);

    try {
      const response = await fetch('/api/quote', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setIsSubmitted(true);
      } else {
        alert("Κάτι πήγε στραβά. Παρακαλώ δοκιμάστε ξανά.");
      }
    } catch (error) {
      console.error(error);
      alert("Σφάλμα σύνδεσης. Παρακαλώ δοκιμάστε ξανά.");
    } finally {
      setIsPending(false);
    }
  };

  const heroRef = useRef(null);
  const aboutRef = useRef(null);
  const faqRef = useRef(null);
  const contactRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Initialize Lenis
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    lenis.on('scroll', ScrollTrigger.update);

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);

    // Hero Animations
    const heroCtx = gsap.context(() => {
      gsap.from(".hero-content > *", {
        y: 60,
        opacity: 0,
        duration: 1.5,
        stagger: 0.2,
        ease: "power4.out",
        delay: 0.5
      });
    }, heroRef);

    // Section Reveal Animations
    const sections = [aboutRef, faqRef, contactRef];
    sections.forEach((section) => {
      gsap.from(section.current, {
        scrollTrigger: {
          trigger: section.current,
          start: "top 80%",
          toggleActions: "play none none none"
        },
        y: 50,
        opacity: 0,
        duration: 1.2,
        ease: "power3.out"
      });
    });

    return () => {
      lenis.destroy();
      heroCtx.revert();
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);



  const closeModal = () => {
    setIsModalOpen(false);
    setIsSubmitted(false);
    setFormData({
      businessName: "",
      afm: "",
      phone: "",
      address: "",
      quantity: ""
    });
  };
  const faqStructuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Πού βρίσκεται η χοιροτροφική μονάδα;",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Η χοιροτροφική μονάδα μας βρίσκεται στα Οινόφυτα Βοιωτίας, σε κομβικό σημείο μόλις 30 λεπτά από την Αθήνα. Εξυπηρετούμε χονδρική και λιανική πώληση με φρέσκο 100% ελληνικό χοιρινό κρέας στις καλύτερες τιμές της αγοράς."
        }
      },
      {
        "@type": "Question",
        "name": "Κάνετε χονδρική πώληση σε επαγγελματίες;",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Ναι, συνεργαζόμαστε με κρεοπωλεία, εστιατόρια, ξενοδοχεία, ψητοπωλεία και επιχειρήσεις μαζικής εστίασης, προσφέροντας σταθερή ποιότητα, συνέπεια στις παραδόσεις και ανταγωνιστικές τιμές χονδρικής."
        }
      },
      {
        "@type": "Question",
        "name": "Ποιες περιοχές εξυπηρετεί η μονάδα;",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Η μονάδα μας στα Οινόφυτα πραγματοποιεί διανομή χοιρινού κρέατος σε όλη την Ελλάδα, με άμεση εξυπηρέτηση σε Αθήνα, Αττική, Βοιωτία, Εύβοια και υπόλοιπη χώρα κατόπιν συνεννόησης."
        }
      },
      {
        "@type": "Question",
        "name": "Πώς μπορώ να επικοινωνήσω με τη μονάδα;",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Μπορείτε να επικοινωνήσετε μαζί μας τηλεφωνικά στο +30 2262 031125, μέσω email στο ftpigstore@gmail.com ή από τη φόρμα επικοινωνίας της ιστοσελίδας μας για παραγγελίες και συνεργασίες."
        }
      }
    ]
  };

  return (
    <div className="min-h-screen bg-[#111111] text-[#f5f5f5]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }}
      />
      {/* Navigation */}
      <nav className="absolute top-0 w-full z-50 px-4 md:px-6 py-8 flex justify-center items-center text-white mix-blend-difference">
        <div className="flex gap-10 md:gap-16 text-xs md:text-sm uppercase tracking-[0.3em] font-bold">
          <a href="#about" className="hover:text-[var(--color-primary)] transition-colors">Η Φάρμα</a>
          <a href="#contact" className="hover:text-[var(--color-primary)] transition-colors">Επικοινωνία</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section ref={heroRef} className="relative h-screen flex items-center justify-center text-center px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[#111111]/70 z-10"></div>
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/hero.jpg')" }}
        ></div>

        <div className="hero-content relative z-20 max-w-4xl mx-auto flex flex-col items-center">
          <span className="text-[var(--color-primary)] text-sm md:text-base tracking-[0.3em] uppercase mb-4 opacity-90 drop-shadow-md">
            100% Ελληνικά Κρέατα
          </span>
          <h1 className="text-[clamp(0.8rem,3.5vw,8rem)] font-serif text-white mb-6 leading-tight drop-shadow-xl whitespace-nowrap px-4">
            Μ. ΦΙΛΙΠΠΟΥ - Ι. ΤΣΙΡΩΝΗΣ&nbsp;&nbsp;ΕΠΕ
          </h1>
          <p className="text-lg md:text-2xl text-stone-300 max-w-2xl font-light mb-10 leading-relaxed shadow-sm">
            Σεβασμός στην Παράδοση και την Υψηλή Ποιότητα, από τη Φάρμα μας στα Οινόφυτα.
          </p>
          <a href="#contact" className="px-8 py-4 bg-[var(--color-primary)] text-black hover:bg-transparent hover:text-white transition-all duration-300 font-medium tracking-wide border border-[var(--color-primary)]">
            Επικοινωνήστε Μαζί Μας
          </a>
        </div>
      </section>



      {/* About Section */}
      <section id="about" ref={aboutRef} className="py-24 px-6 md:px-12 bg-[#161616]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
          <div className="md:w-1/2">
            <h2 className="text-4xl md:text-5xl font-serif text-white mb-6">Ποιότητα με Παράδοση από το 1974</h2>
            <p className="text-lg leading-relaxed text-stone-100 mb-6 font-medium">
              Η φάρμα Μ.&nbsp;ΦΙΛΙΠΠΟΥ&nbsp;-&nbsp;Ι.&nbsp;ΤΣΙΡΩΝΗΣ&nbsp;&nbsp;ΕΠΕ βρίσκεται στα Οινόφυτα Βοιωτίας, μια περιοχή με βαθιές ρίζες και μακρά παράδοση στην κτηνοτροφία. Από το 1974 έως σήμερα, παραμένουμε πιστοί στις αξίες που μας καθιέρωσαν: ποιότητα, συνέπεια και σεβασμό προς τον καταναλωτή.
            </p>
            <p className="text-lg leading-relaxed text-stone-200 mb-6">
              Με πολυετή εμπειρία και αφοσίωση, προσφέρουμε χοιρινό κρέας εξαιρετικής γεύσης, υψηλής θρεπτικής αξίας και άριστης ποιότητας.
            </p>
            <p className="text-lg leading-relaxed text-stone-200">
              Επενδύουμε διαρκώς σε σύγχρονες εγκαταστάσεις και εφαρμόζουμε αυστηρά πρότυπα εκτροφής, με σεβασμό στην ευζωία των ζώων και την προστασία του περιβάλλοντος. Έτσι, διασφαλίζουμε ότι κάθε προϊόν που φτάνει στο τραπέζι σας ανταποκρίνεται στα υψηλότερα πρότυπα.
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



      {/* FAQ Section */}
      <section id="faq" ref={faqRef} className="py-24 px-6 md:px-12 bg-[#111111] border-t border-zinc-900">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-serif text-white mb-6">Συχνές Ερωτήσεις</h2>
            <p className="text-lg text-stone-400">Όλες οι πληροφορίες που χρειάζεστε για τις υπηρεσίες και τα προϊόντα μας.</p>
          </div>
          
          <div className="space-y-4">
            {faqStructuredData.mainEntity.map((faq, index) => (
              <details key={index} className="group bg-[#161616] border border-zinc-800 rounded-xl overflow-hidden transition-all duration-300 hover:border-zinc-700">
                <summary className="flex items-center justify-between cursor-pointer p-6 md:p-8 font-serif text-lg md:text-xl text-white list-none select-none">
                  {faq.name}
                  <span className="text-[var(--color-primary)] transition-transform duration-300 group-open:rotate-45 text-3xl font-light leading-none">+</span>
                </summary>
                <div className="px-6 md:px-8 pb-8 text-stone-300 leading-relaxed font-light">
                  {faq.acceptedAnswer.text.split("Οινόφυτα Βοιωτίας").map((part, i, arr) => (
                    <span key={i}>
                      {part}
                      {i < arr.length - 1 && (
                        <a 
                          href="https://www.google.com/maps/dir//M+FILIPPOU+-+I+TSIRONIS+Ltd.,+Inofita+320+11/@38.0374246,23.8452736,14z/data=!4m8!4m7!1m0!1m5!1m1!1s0x14a10efaa51b775d:0xcd8166ec1a04f827!2m2!1d23.6318076!2d38.2847185"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[var(--color-primary)] hover:underline underline-offset-4 font-medium"
                        >
                          Οινόφυτα Βοιωτίας
                        </a>
                      )}
                    </span>
                  ))}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" ref={contactRef} className="py-24 px-6 md:px-12 text-center bg-black border-t border-zinc-900">
        <h2 className="text-3xl md:text-5xl font-serif text-white mb-8">Επικοινωνήστε Μαζί Μας</h2>
        <p className="text-lg text-stone-200 max-w-2xl mx-auto mb-12">
          Ενδιαφέρεστε για χονδρική πώληση ή θέλετε να μάθετε περισσότερα για τα προϊόντα μας; Η ομάδα μας είναι στη διάθεσή σας.
        </p>
        
        <div className="mb-16">
          <button 
            onClick={() => setIsModalOpen(true)}
            className="px-10 py-5 bg-[var(--color-primary)] text-black hover:bg-white transition-all duration-300 font-bold uppercase tracking-widest border border-[var(--color-primary)] shadow-[0_0_20px_rgba(var(--color-primary-rgb),0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.2)]"
          >
            Πάρε Προσφορά
          </button>
        </div>
        


        <address className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto text-stone-300 not-italic">
           <div>
              <h4 className="text-white font-serif text-xl mb-2">Τοποθεσία</h4>
              <p className="mb-4">Οινόφυτα Βοιωτίας, Τ.Κ. 32011</p>
              <div className="w-full h-64 rounded-xl overflow-hidden border border-zinc-800 shadow-2xl mt-6 group relative">
                <iframe
                  title="Google Maps - Μ. ΦΙΛΙΠΠΟΥ - Ι. ΤΣΙΡΩΝΗΣ ΕΠΕ στα Οινόφυτα"
                  width="100%"
                  height="100%"
                  loading="lazy"
                  allowFullScreen
                  className="transition-all duration-700 w-full h-full"
                  referrerPolicy="no-referrer-when-downgrade"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3131.7743768697214!2d23.629232676460806!3d38.28472268262087!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14a10efaa51b775d%3A0xcd8166ec1a04f827!2zzpwgzqbOmc6bzpnOoM6gzp_OpSAtIM6ZIM6kzqPOmc6hzqnOnc6XzqMgzpXOoM6V!5e0!3m2!1sel!2sgr!4v1777224323779!5m2!1sel!2sgr"
                ></iframe>
                <a 
                  href="https://www.google.com/maps/dir//M+FILIPPOU+-+I+TSIRONIS+Ltd.,+Inofita+320+11/@38.0374246,23.8452736,14z/data=!4m8!4m7!1m0!1m5!1m1!1s0x14a10efaa51b775d:0xcd8166ec1a04f827!2m2!1d23.6318076!2d38.2847185"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute bottom-4 right-4 bg-black/80 backdrop-blur-sm text-[var(--color-primary)] px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider border border-[var(--color-primary)]/30 hover:bg-[var(--color-primary)] hover:text-black transition-all duration-300 opacity-0 group-hover:opacity-100"
                >
                  Οδηγίες Χάρτη
                </a>
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
              <p>
                <a href="mailto:ftpigstore@gmail.com" className="hover:text-[var(--color-primary)] transition-colors">
                  ftpigstore@gmail.com
                </a>
              </p>
           </div>
        </address>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center text-sm text-stone-500 bg-[#111111] border-t border-zinc-900">
        <p className="text-[10px] sm:text-sm px-4">
          &copy; 2026 <span className="whitespace-nowrap">Μ. ΦΙΛΙΠΠΟΥ - Ι. ΤΣΙΡΩΝΗΣ&nbsp;&nbsp;ΕΠΕ.</span> Με επιφύλαξη παντός δικαιώματος.
        </p>
      </footer>

      {/* Quote Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-in fade-in duration-300">
          <div className="relative w-full max-w-lg bg-[#1a1a1a] border border-zinc-800 p-8 md:p-10 shadow-2xl rounded-2xl overflow-hidden">
            <button 
              onClick={closeModal}
              className="absolute top-4 right-4 text-stone-500 hover:text-white transition-colors text-2xl"
            >
              ✕
            </button>

            {!isSubmitted ? (
              <>
                <h3 className="text-3xl font-serif text-white mb-2 text-center">Αίτημα Προσφοράς</h3>
                <p className="text-stone-400 text-center mb-8 font-light">Συμπληρώστε τα στοιχεία σας και θα επικοινωνήσουμε μαζί σας.</p>
                
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="block text-xs uppercase tracking-widest text-[var(--color-primary)] mb-2 font-bold">Όνομα Επιχείρησης</label>
                    <input 
                      required
                      type="text" 
                      className="w-full bg-black/50 border border-zinc-800 rounded-lg p-4 text-white focus:border-[var(--color-primary)] focus:outline-none transition-colors"
                      value={formData.businessName}
                      onChange={(e) => setFormData({...formData, businessName: e.target.value})}
                    />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs uppercase tracking-widest text-[var(--color-primary)] mb-2 font-bold">ΑΦΜ</label>
                      <input 
                        required
                        type="text" 
                        className="w-full bg-black/50 border border-zinc-800 rounded-lg p-4 text-white focus:border-[var(--color-primary)] focus:outline-none transition-colors"
                        value={formData.afm}
                        onChange={(e) => setFormData({...formData, afm: e.target.value})}
                      />
                    </div>
                    <div>
                      <label className="block text-xs uppercase tracking-widest text-[var(--color-primary)] mb-2 font-bold">Τηλέφωνο</label>
                      <input 
                        required
                        type="tel" 
                        className="w-full bg-black/50 border border-zinc-800 rounded-lg p-4 text-white focus:border-[var(--color-primary)] focus:outline-none transition-colors"
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs uppercase tracking-widest text-[var(--color-primary)] mb-2 font-bold">Διεύθυνση</label>
                    <input 
                      required
                      type="text" 
                      className="w-full bg-black/50 border border-zinc-800 rounded-lg p-4 text-white focus:border-[var(--color-primary)] focus:outline-none transition-colors"
                      value={formData.address}
                      onChange={(e) => setFormData({...formData, address: e.target.value})}
                    />
                  </div>
                  <div>
                    <label className="block text-xs uppercase tracking-widest text-[var(--color-primary)] mb-2 font-bold">Εκτιμώμενη Ποσότητα / Μήνα</label>
                    <input 
                      required
                      type="text" 
                      placeholder="π.χ. 500kg"
                      className="w-full bg-black/50 border border-zinc-800 rounded-lg p-4 text-white focus:border-[var(--color-primary)] focus:outline-none transition-colors"
                      value={formData.quantity}
                      onChange={(e) => setFormData({...formData, quantity: e.target.value})}
                    />
                  </div>
                  <button 
                    type="submit"
                    disabled={isPending}
                    className="w-full py-5 bg-[var(--color-primary)] text-black font-bold uppercase tracking-widest rounded-lg hover:bg-white transition-all duration-300 mt-4 shadow-lg shadow-[var(--color-primary)]/10 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isPending ? "Αποστολή..." : "Υποβολή Αιτήματος"}
                  </button>
                </form>
              </>
            ) : (
              <div className="text-center py-10 animate-in zoom-in duration-500">
                <div className="w-20 h-20 bg-[var(--color-primary)]/10 border-2 border-[var(--color-primary)] rounded-full flex items-center justify-center mx-auto mb-8">
                  <span className="text-4xl text-[var(--color-primary)]">✓</span>
                </div>
                <h3 className="text-3xl font-serif text-white mb-4">Ευχαριστούμε για την προτίμησή σας!</h3>
                <p className="text-stone-300 text-lg font-light leading-relaxed mb-8">
                  Η ομάδα μας θα έρθει σύντομα σε επικοινωνία μαζί σας.
                </p>
                <button 
                  onClick={closeModal}
                  className="px-8 py-3 border border-zinc-700 text-stone-400 hover:text-white hover:border-white transition-all rounded-lg"
                >
                  Κλείσιμο
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
