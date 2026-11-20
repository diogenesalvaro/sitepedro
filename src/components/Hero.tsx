import { motion } from "motion/react";
import { ShieldCheck, ArrowRight } from "lucide-react";
import { HERO_IMAGE_URL, WHATSAPP_PHONE } from "../data/constants";

export const Hero = () => {
  return (
    <section id="inicio" className="relative pt-32 pb-16 lg:pt-40 lg:pb-32 overflow-hidden bg-brand-black text-white">
      {/* Geometric Pattern Background */}
      <div className="absolute inset-0 opacity-[0.07]" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0l25.98 15v30L30 60 4.02 45V15z' fill-rule='evenodd' stroke='%23f2c94c' stroke-width='1' fill='none'/%3E%3C/svg%3E")`, backgroundSize: '60px 60px' }} />

      {/* Vignette Effect */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.8)_100%)] pointer-events-none" />

      <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-yellow/5 skew-x-12 transform translate-x-1/4" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 bg-brand-yellow/10 border border-brand-yellow/30 rounded-full px-4 py-1 mb-6 relative group cursor-default">
              <div className="absolute inset-0 bg-brand-yellow/20 blur-md rounded-full opacity-50 group-hover:opacity-100 transition-opacity" />
              <ShieldCheck className="text-brand-yellow relative z-10 drop-shadow-[0_0_5px_rgba(242,201,76,0.6)]" size={18} fill="rgba(242, 201, 76, 0.2)" />
              <span className="text-brand-yellow text-sm font-semibold uppercase tracking-wider relative z-10">APROVAÇÃO GARANTIDA</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-[5.5rem] font-black leading-tight lg:leading-none mb-6 lg:mb-8">
              ESTUDE O QUE <br />
              <span className="text-brand-yellow text-3xl sm:text-5xl lg:text-7xl">REALMENTE CAI NA PROVA</span>
            </h1>
            <p className="text-base sm:text-xl lg:text-2xl text-zinc-400 mb-8 lg:mb-10 max-w-xl leading-relaxed">
              Sem perder tempo com conteúdo inútil. Materiais focados na sua aprovação rápida.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#materiais" className="btn-primary inline-flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(242,201,76,0.3)] hover:shadow-[0_0_30px_rgba(242,201,76,0.5)] transition-all">
                ACESSAR MATERIAIS <ArrowRight size={20} />
              </a>
              <a
                href={`https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent("Olá, gostaria de falar com um consultor sobre os materiais do Vade Concursos!")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="border border-white/20 hover:bg-white/10 text-white font-bold py-3 px-8 rounded-lg transition-all backdrop-blur-sm inline-flex items-center justify-center"
              >
                Falar com Consultor
              </a>
            </div>
            <div className="mt-10 flex items-center gap-4 text-sm text-zinc-500">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map(i => (
                  <img key={i} src={`https://i.pravatar.cc/100?img=${i + 10}`} className="w-8 h-8 rounded-full border-2 border-brand-black" alt="User" referrerPolicy="no-referrer" />
                ))}
              </div>
              <span>+2.000 alunos aprovados em todo Brasil</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{
              duration: 1,
              type: "spring",
              stiffness: 100
            }}
            className="relative flex justify-center"
          >
            <motion.div
              animate={{
                y: [0, -20, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="relative z-10"
            >
              <div className="relative w-full max-w-md mx-auto aspect-square rounded-full border-[6px] border-brand-yellow/80 shadow-[0_0_50px_rgba(242,201,76,0.4)] overflow-hidden bg-brand-black flex items-center justify-center p-2">
                <div className="absolute inset-0 bg-brand-yellow/10 animate-pulse" />
                <img
                  src={HERO_IMAGE_URL}
                  alt="Policial Vade Concursos"
                  className="w-[115%] h-[115%] object-cover object-top filter contrast-110 saturate-110 relative z-10"
                />
              </div>

              {/* Enhanced Pulse Ring Effect */}
              <motion.div
                animate={{ scale: [1, 1.4, 1], opacity: [0.5, 0, 0.5] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute inset-[-20px] border-2 border-brand-yellow/30 rounded-full -z-10"
              />
              <motion.div
                animate={{ scale: [1, 1.2, 1], opacity: [0.8, 0.2, 0.8] }}
                transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
                className="absolute inset-[-10px] border border-brand-yellow/50 rounded-full -z-10"
              />
            </motion.div>

            {/* Advanced Multi-layered Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-brand-yellow/20 rounded-full blur-[100px] -z-20 animate-pulse" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-brand-yellow/30 rounded-full blur-[60px] -z-20" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40%] h-[40%] bg-brand-yellow/40 rounded-full blur-[30px] -z-20" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
