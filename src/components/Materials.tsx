import { useState, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import type { Swiper as SwiperType } from 'swiper';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import { 
  ChevronLeft, 
  ChevronRight, 
  CheckCircle2, 
  Star, 
  ArrowRight, 
  ShieldCheck, 
  Sparkles 
} from 'lucide-react';
import { MATERIALS_ITEMS, MATERIAL_CATEGORIES, WHATSAPP_PHONE } from '../data/constants';

export const Materials = () => {
  const [activeCategory, setActiveCategory] = useState<string>("Todos");
  const swiperRef = useRef<SwiperType | null>(null);

  const filteredItems = activeCategory === "Todos" 
    ? MATERIALS_ITEMS 
    : MATERIALS_ITEMS.filter(item => item.category === activeCategory);

  return (
    <section id="materiais" className="py-24 lg:py-32 bg-brand-black text-white relative overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-brand-yellow/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 right-0 w-[30rem] h-[30rem] bg-brand-yellow/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-brand-yellow/10 border border-brand-yellow/30 rounded-full px-3.5 py-1 mb-4">
              <Sparkles className="text-brand-yellow" size={14} />
              <span className="text-brand-yellow text-xs font-bold tracking-widest uppercase">
                Vitrine de Materiais Estratégicos
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight">
              ESTUDE COM QUEM <span className="text-brand-yellow">ENTREGA RESULTADO</span>
            </h2>
            <p className="text-zinc-400 text-base sm:text-lg mt-3 leading-relaxed">
              Materiais sintetizados, focados 100% no que as bancas mais cobram. Selecione sua área e acelere sua nomeação.
            </p>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={() => swiperRef.current?.slidePrev()}
              aria-label="Slide anterior"
              className="w-12 h-12 rounded-full border border-white/15 bg-white/5 hover:bg-brand-yellow hover:text-brand-black hover:border-brand-yellow text-white flex items-center justify-center transition-all duration-300 active:scale-90 shadow-lg backdrop-blur-sm group"
            >
              <ChevronLeft size={22} className="group-hover:-translate-x-0.5 transition-transform" />
            </button>
            <button
              onClick={() => swiperRef.current?.slideNext()}
              aria-label="Próximo slide"
              className="w-12 h-12 rounded-full border border-white/15 bg-white/5 hover:bg-brand-yellow hover:text-brand-black hover:border-brand-yellow text-white flex items-center justify-center transition-all duration-300 active:scale-90 shadow-lg backdrop-blur-sm group"
            >
              <ChevronRight size={22} className="group-hover:translate-x-0.5 transition-transform" />
            </button>
          </div>
        </div>

        {/* Category Filters Bar */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 no-scrollbar scroll-smooth">
          {MATERIAL_CATEGORIES.map((category) => {
            const isActive = activeCategory === category;
            return (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold whitespace-nowrap transition-all duration-300 border ${
                  isActive
                    ? "bg-brand-yellow text-brand-black border-brand-yellow shadow-[0_0_20px_rgba(242,201,76,0.35)] scale-105"
                    : "bg-[#181818] text-zinc-400 border-white/10 hover:border-brand-yellow/40 hover:text-white"
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>

        {/* Carousel Container with Lateral Fade Masks */}
        <div className="relative">
          {/* Subtle Lateral Fade Shadows (Infinite Edge Look) */}
          <div className="pointer-events-none hidden md:block absolute -left-2 top-0 bottom-0 w-24 bg-gradient-to-r from-brand-black via-brand-black/80 to-transparent z-20" />
          <div className="pointer-events-none hidden md:block absolute -right-2 top-0 bottom-0 w-24 bg-gradient-to-l from-brand-black via-brand-black/80 to-transparent z-20" />

          <Swiper
            key={activeCategory}
            modules={[Autoplay]}
            onBeforeInit={(swiper) => {
              swiperRef.current = swiper;
            }}
            spaceBetween={24}
            slidesPerView={1.15}
            loop={filteredItems.length > 2}
            allowTouchMove={true}
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            speed={700}
            breakpoints={{
              640: { slidesPerView: 2.1, spaceBetween: 24 },
              1024: { slidesPerView: 3.05, spaceBetween: 28 },
            }}
            className="w-full !overflow-visible py-4"
          >
            {filteredItems.map((item) => (
              <SwiperSlide key={item.id} className="!h-auto flex items-stretch">
                <div className="w-full h-full bg-[#181818] border border-white/10 rounded-3xl overflow-hidden shadow-[0_10px_35px_rgba(0,0,0,0.5)] hover:border-brand-yellow/40 hover:shadow-[0_18px_50px_rgba(242,201,76,0.15)] transition-all duration-400 group flex flex-col justify-between">
                  
                  {/* Image & Badges Banner */}
                  <div className="relative h-64 sm:h-72 p-4 flex items-center justify-center bg-gradient-to-b from-[#242424] via-[#1a1a1a] to-[#141414] overflow-hidden shrink-0 border-b border-white/5">
                    <div className="absolute inset-0 bg-brand-yellow/5 blur-2xl rounded-full scale-75 pointer-events-none" />
                    
                    <img
                      src={item.img}
                      alt={item.title}
                      className="h-full w-auto max-h-56 sm:max-h-60 object-contain rounded-lg drop-shadow-[0_14px_28px_rgba(0,0,0,0.9)] group-hover:scale-105 transition-transform duration-500 ease-out z-10"
                      referrerPolicy="no-referrer"
                    />

                    {/* Promotional Tag */}
                    <div className="absolute top-4 left-4 bg-brand-yellow text-brand-black text-xs font-black px-3.5 py-1.5 rounded-full uppercase tracking-wider shadow-[0_4px_15px_rgba(242,201,76,0.4)] z-20">
                      {item.tag}
                    </div>

                    {/* Rating Pill */}
                    <div className="absolute top-4 right-4 bg-black/70 backdrop-blur-md border border-white/10 text-white text-xs font-semibold px-2.5 py-1 rounded-full flex items-center gap-1.5 shadow-md z-20">
                      <Star size={13} className="fill-brand-yellow text-brand-yellow" />
                      <span>{item.rating}</span>
                      <span className="text-zinc-400 text-[10px]">({item.reviews})</span>
                    </div>

                    {/* Category Label */}
                    <div className="absolute bottom-2 left-4 text-[10px] font-bold uppercase tracking-widest text-brand-yellow bg-black/60 px-2 py-0.5 rounded backdrop-blur-sm z-20">
                      {item.category}
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-6 sm:p-7 flex flex-col flex-grow justify-between">
                    <div>
                      <h3 className="text-xl font-bold mb-4 text-white group-hover:text-brand-yellow transition-colors duration-300 line-clamp-2 min-h-[3.5rem] flex items-start leading-snug">
                        {item.title}
                      </h3>

                      {/* Benefits Checklist */}
                      <div className="space-y-2.5 mb-6 text-xs sm:text-sm text-zinc-300">
                        {item.benefits.map((benefit, bIdx) => (
                          <div key={bIdx} className="flex items-start gap-2.5">
                            <CheckCircle2 size={16} className="text-brand-yellow shrink-0 mt-0.5" />
                            <span className="leading-snug text-zinc-300">{benefit}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Price and CTA Anchor */}
                    <div className="mt-auto pt-5 border-t border-white/10">
                      <div className="flex items-baseline justify-between mb-4">
                        <div>
                          <span className="text-xs text-zinc-500 line-through block">
                            De {item.originalPrice}
                          </span>
                          <span className="text-xs text-zinc-400">por apenas</span>
                        </div>
                        <div className="text-right">
                          <div className="text-xl sm:text-2xl font-black text-brand-yellow font-display leading-none">
                            {item.installments}
                          </div>
                          <span className="text-[11px] text-zinc-400 font-medium">
                            ou {item.price} à vista
                          </span>
                        </div>
                      </div>

                      {/* High-Converting CTA Button linking to Kiwify Checkout */}
                      <a
                        href={item.checkoutUrl || "#"}
                        target={item.checkoutUrl && item.checkoutUrl.startsWith("http") ? "_blank" : "_self"}
                        rel="noopener noreferrer"
                        className="w-full btn-primary py-3.5 px-4 text-sm font-black flex items-center justify-center gap-2 group/btn shadow-[0_4px_20px_rgba(242,201,76,0.25)] hover:shadow-[0_6px_25px_rgba(242,201,76,0.4)] transition-all"
                      >
                        <span>QUERO MINHA VAGA</span>
                        <ArrowRight size={18} className="group-hover/btn:translate-x-1 transition-transform" />
                      </a>

                      {/* Security Guarantee Microcopy with Kiwify Badge */}
                      <div className="flex items-center justify-center gap-1.5 mt-3 text-[11px] text-zinc-400 font-medium text-center">
                        <ShieldCheck size={13} className="text-brand-yellow shrink-0" />
                        <span>Pagamento Seguro via <strong>Kiwify</strong> • 7 Dias de Garantia</span>
                      </div>
                    </div>

                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Bottom Banner - Custom Mentorship / Request */}
        <div className="mt-14 bg-gradient-to-r from-zinc-900 via-[#1e1e1e] to-zinc-900 border border-white/10 rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="flex items-center gap-4 text-center md:text-left">
            <div className="w-12 h-12 rounded-xl bg-brand-yellow/10 border border-brand-yellow/30 flex items-center justify-center text-brand-yellow shrink-0">
              <ShieldCheck size={26} />
            </div>
            <div>
              <h4 className="text-base sm:text-lg font-bold text-white">Não encontrou o concurso dos seus sonhos?</h4>
              <p className="text-xs sm:text-sm text-zinc-400 mt-0.5">
                Nossa equipe pedagógica mapeia editais sob demanda. Fale agora com um dos nossos consultores.
              </p>
            </div>
          </div>
          <a
            href={`https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent("Olá, gostaria de solicitar um material específico!")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary py-3 px-6 text-xs sm:text-sm whitespace-nowrap hover:border-brand-yellow/50 transition-all"
          >
            Solicitar Material Específico
          </a>
        </div>

      </div>
    </section>
  );
};
