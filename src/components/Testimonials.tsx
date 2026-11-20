import { Star } from "lucide-react";
import { TESTIMONIALS } from "../data/constants";

export const Testimonials = () => {
  return (
    <section id="depoimentos" className="py-28 bg-brand-black text-white overflow-hidden relative">
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-yellow rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-black uppercase mb-4">Quem estudou, <span className="text-brand-yellow">passou!</span></h2>
          <p className="text-zinc-400">Histórias reais de pessoas que mudaram de vida com o Vade Concursos.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t, i) => (
            <div key={i} className="bg-zinc-900/80 border border-white/10 shadow-[0_8px_30px_rgba(0,20,50,0.3)] hover:shadow-[0_15px_40px_rgba(0,30,70,0.5)] transition-all p-8 rounded-3xl">
              <div className="flex gap-1 mb-6">
                {[1, 2, 3, 4, 5].map(s => <Star key={s} size={16} className="fill-brand-yellow text-brand-yellow" />)}
              </div>
              <p className="text-lg italic mb-8 text-zinc-300">"{t.text}"</p>
              <div className="flex items-center gap-4">
                <img src={`https://i.pravatar.cc/100?img=${i + 20}`} className="w-12 h-12 rounded-full" alt={t.name} referrerPolicy="no-referrer" />
                <div>
                  <h4 className="font-bold">{t.name}</h4>
                  <p className="text-brand-yellow text-sm font-semibold">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
