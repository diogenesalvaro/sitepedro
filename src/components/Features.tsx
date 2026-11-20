import { motion } from "motion/react";
import { FileText, Users, Download } from "lucide-react";
import { LOGO_URL } from "../data/constants";

export const Features = () => {
  const features = [
    {
      icon: <FileText className="text-brand-yellow" size={40} fill="rgba(242, 201, 76, 0.2)" />,
      title: "PDFs Esquematizados",
      desc: "Memorize 2x mais rápido com visual law e mapas mentais. Chega de ler PDFs infinitos que não caem na prova."
    },
    {
      icon: <Users className="text-brand-yellow" size={40} fill="rgba(242, 201, 76, 0.2)" />,
      title: "Suporte Especializado",
      desc: "Tire dúvidas direto com quem já foi aprovado. Não é robô, é mentor."
    },
    {
      icon: <Download className="text-brand-yellow" size={40} />,
      title: "Acesso Offline",
      desc: "Baixe todo o material e estude de onde quiser, sem depender de internet."
    }
  ];

  return (
    <section className="py-28 bg-[#121212] relative overflow-hidden">
      {/* Subtle Hexagonal Pattern Background */}
      <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0l25.98 15v30L30 60 4.02 45V15z' fill-rule='evenodd' stroke='%23f2c94c' stroke-width='1' fill='none'/%3E%3C/svg%3E")`, backgroundSize: '60px 60px' }} />

      {/* Watermark Logo */}
      <div className="absolute -right-20 -bottom-20 opacity-[0.02] pointer-events-none">
        <img src={LOGO_URL} alt="" className="w-[600px] rotate-12" referrerPolicy="no-referrer" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-white text-2xl sm:text-3xl lg:text-4xl font-black mb-4 uppercase tracking-tight">POR QUE O VADE É A SUA MELHOR ESCOLHA?</h2>
          <div className="w-20 h-1.5 bg-brand-yellow mx-auto rounded-full shadow-[0_0_15px_rgba(242,201,76,0.6)]" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((f, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -10 }}
              className="p-8 rounded-2xl bg-[#1a1a1a] border border-white/10 shadow-[0_8px_30px_rgba(0,20,50,0.3)] hover:border-brand-yellow/30 hover:shadow-[0_15px_40px_rgba(0,30,70,0.5)] transition-all group"
            >
              <div className="mb-8 relative inline-flex items-center justify-center">
                {/* Golden Glow effect behind icon */}
                <div className="absolute inset-0 bg-brand-yellow/30 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative text-brand-yellow drop-shadow-[0_0_12px_rgba(242,201,76,0.6)] group-hover:scale-110 transition-transform duration-300">
                  {f.icon}
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3 text-white group-hover:text-brand-yellow transition-colors">{f.title}</h3>
              <p className="text-zinc-400 leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
