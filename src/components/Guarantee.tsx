import { ShieldCheck, Lock, RefreshCw, CheckCircle2 } from "lucide-react";
import { motion } from "motion/react";

export const Guarantee = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-brand-black via-[#141414] to-brand-black text-white relative overflow-hidden border-y border-white/5">
      {/* Golden Glow Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[32rem] h-[32rem] bg-brand-yellow/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-br from-[#1c1c1c] to-[#121212] border-2 border-brand-yellow/30 rounded-3xl p-8 sm:p-12 lg:p-16 shadow-[0_20px_60px_rgba(0,0,0,0.7)] relative overflow-hidden"
        >
          {/* Decorative Corner Glow */}
          <div className="absolute -top-16 -right-16 w-48 h-48 bg-brand-yellow/15 rounded-full blur-3xl pointer-events-none" />

          <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-14">
            
            {/* Golden Shield Icon Column */}
            <div className="relative shrink-0 flex items-center justify-center">
              <div className="relative w-36 h-36 sm:w-44 sm:h-44 rounded-full border-4 border-brand-yellow/60 bg-gradient-to-br from-brand-yellow/20 via-black/40 to-transparent flex items-center justify-center shadow-[0_0_40px_rgba(242,201,76,0.3)]">
                {/* Rotating subtle ring */}
                <div className="absolute inset-2 rounded-full border border-dashed border-brand-yellow/40 animate-[spin_20s_linear_infinite]" />
                
                <div className="relative flex flex-col items-center text-center">
                  <ShieldCheck size={56} className="text-brand-yellow drop-shadow-[0_0_15px_rgba(242,201,76,0.8)]" />
                  <span className="text-2xl sm:text-3xl font-black text-white font-display mt-1">7 DIAS</span>
                  <span className="text-[10px] tracking-widest uppercase font-bold text-brand-yellow">DE GARANTIA</span>
                </div>
              </div>
            </div>

            {/* Content Column */}
            <div className="text-center lg:text-left flex-grow">
              <div className="inline-flex items-center gap-2 bg-brand-yellow/10 border border-brand-yellow/30 rounded-full px-3.5 py-1 mb-4">
                <span className="w-2 h-2 rounded-full bg-brand-yellow animate-pulse" />
                <span className="text-brand-yellow text-xs font-bold tracking-widest uppercase">
                  COMPRA BLINDADA • RISCO ZERO
                </span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tight text-white mb-4">
                VOCÊ NÃO CORRE <span className="text-brand-yellow">NENHUM RISCO</span>
              </h2>

              <p className="text-zinc-300 text-base sm:text-lg leading-relaxed mb-8">
                Temos tanta confiança na metodologia e na didática dos nossos materiais que o risco é todo nosso. Acesse os PDFs, baixe os cronogramas e teste na prática. Se em até 7 dias você achar que o conteúdo não é para você, devolvemos <strong>100% do seu dinheiro</strong> com uma simples mensagem no WhatsApp.
              </p>

              {/* Trust Badges Row */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-white/10 text-xs sm:text-sm">
                <div className="flex items-center justify-center lg:justify-start gap-2.5 text-zinc-300">
                  <CheckCircle2 size={18} className="text-brand-yellow shrink-0" />
                  <span>Devolução Sem Burocracia</span>
                </div>
                <div className="flex items-center justify-center lg:justify-start gap-2.5 text-zinc-300">
                  <Lock size={18} className="text-brand-yellow shrink-0" />
                  <span>Pagamento 100% Criptografado</span>
                </div>
                <div className="flex items-center justify-center lg:justify-start gap-2.5 text-zinc-300">
                  <RefreshCw size={18} className="text-brand-yellow shrink-0" />
                  <span>Garantia de Atualização</span>
                </div>
              </div>

            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
};
