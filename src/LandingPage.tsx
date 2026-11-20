import { motion } from "motion/react";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Features } from "./components/Features";
import { Materials } from "./components/Materials";
import { Guarantee } from "./components/Guarantee";
import { Testimonials } from "./components/Testimonials";
import { FAQ } from "./components/FAQ";
import { Footer } from "./components/Footer";
import { Logo } from "./components/Logo";
import { WhatsAppButton } from "./components/WhatsAppButton";
import { LOGO_URL } from "./data/constants";

export default function LandingPage() {
  return (
    <div className="min-h-screen font-sans selection:bg-brand-yellow selection:text-brand-black relative">
      {/* Global Noise Texture Overlay */}
      <div 
        className="pointer-events-none fixed inset-0 z-[100] opacity-[0.03]"
        style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}
      ></div>
      <Navbar />
      <Hero />
      <Features />
      <Materials />
      <Guarantee />
      <Testimonials />
      <FAQ />

      {/* Final CTA Section */}
      <section className="py-28 bg-brand-yellow relative overflow-hidden">
        <div className="absolute left-0 top-0 opacity-10 pointer-events-none">
          <img src={LOGO_URL} alt="" className="w-96 -translate-x-1/2 -translate-y-1/2" referrerPolicy="no-referrer" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="mx-auto mb-8 flex justify-center"
          >
            <Logo size="lg" className="border-4 border-brand-black shadow-2xl" />
          </motion.div>
          <h2 className="text-brand-black text-3xl sm:text-4xl md:text-5xl font-black mb-6 sm:mb-8 uppercase">A sua aprovação começa aqui.</h2>
          <p className="text-brand-black/80 text-base sm:text-xl mb-8 sm:mb-10 max-w-2xl mx-auto font-medium">
            Não deixe para amanhã a mudança de vida que você pode começar hoje. Junte-se aos milhares de aprovados do Vade Concursos.
          </p>
          <a href="#materiais" className="btn-secondary text-base sm:text-xl px-8 sm:px-12 py-4 sm:py-5 shadow-2xl inline-block hover:scale-105 active:scale-95 transition-transform">
            Quero Começar Agora
          </a>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}
