import { motion } from "motion/react";
import {
  BookOpen,
  CheckCircle,
  Download,
  FileText,
  GraduationCap,
  ShieldCheck,
  Star,
  Users,
  ArrowRight,
  Menu,
  X,
  Instagram,
  Facebook,
  Youtube
} from "lucide-react";
import { useState } from "react";

const LOGO_URL = "https://storage.googleapis.com/aistudio-user-uploads-731396701163/3z2udfxvginjxtypajfxvw/logo.png";
const HERO_IMAGE_URL = "/hero.jpg"; // Atualizado para .jpg

const Logo = ({ className, size = "md" }: { className?: string, size?: "sm" | "md" | "lg" | "xl" }) => {
  const [error, setError] = useState(false);

  const sizeClasses = {
    sm: "h-10 w-10",
    md: "h-14 w-14",
    lg: "h-24 w-24",
    xl: "w-full max-w-xl"
  };

  if (error) {
    return (
      <div className={`${sizeClasses[size]} bg-brand-yellow rounded-full flex items-center justify-center border-2 border-brand-black shadow-lg ${className}`}>
        <ShieldCheck className="text-brand-black w-2/3 h-2/3" />
      </div>
    );
  }

  return (
    <img
      src={LOGO_URL}
      alt="Vade Concursos"
      onError={() => setError(true)}
      className={`${sizeClasses[size]} rounded-full object-cover ${className}`}
      referrerPolicy="no-referrer"
    />
  );
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-brand-black/95 backdrop-blur-sm text-white border-b border-brand-yellow/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center gap-3 group cursor-pointer">
            <motion.div
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.8 }}
            >
              <Logo size="md" className="border-2 border-brand-yellow shadow-[0_0_15px_rgba(242,201,76,0.4)]" />
            </motion.div>
            <span className="text-2xl font-black tracking-tighter">VADE <span className="text-brand-yellow">CONCURSOS</span></span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            <a href="#inicio" className="hover:text-brand-yellow transition-colors font-medium">Início</a>
            <a href="#materiais" className="hover:text-brand-yellow transition-colors font-medium">Materiais</a>
            <a href="#depoimentos" className="hover:text-brand-yellow transition-colors font-medium">Depoimentos</a>
            <a href="#contato" className="btn-primary py-2 px-6 text-sm">COMECE AGORA</a>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-white">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-brand-black border-b border-brand-yellow/20 px-4 py-6 flex flex-col gap-4"
        >
          <a href="#inicio" onClick={() => setIsOpen(false)} className="text-lg hover:text-brand-yellow">Início</a>
          <a href="#materiais" onClick={() => setIsOpen(false)} className="text-lg hover:text-brand-yellow">Materiais</a>
          <a href="#depoimentos" onClick={() => setIsOpen(false)} className="text-lg hover:text-brand-yellow">Depoimentos</a>
          <a href="#contato" onClick={() => setIsOpen(false)} className="btn-primary text-center">COMECE AGORA</a>
        </motion.div>
      )}
    </nav>
  );
};

const Hero = () => {
  return (
    <section id="inicio" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-brand-black text-white">
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
            <h1 className="text-5xl lg:text-7xl font-black leading-tight mb-6">
              ESTUDE O QUE <br />
              <span className="text-brand-yellow text-4xl lg:text-6xl">REALMENTE CAI NA PROVA</span>
            </h1>
            <p className="text-xl text-zinc-400 mb-8 max-w-lg">
              Sem perder tempo com conteúdo inútil. Materiais focados na sua aprovação rápida.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="btn-primary flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(242,201,76,0.3)] hover:shadow-[0_0_30px_rgba(242,201,76,0.5)] transition-all">
                ACESSAR MATERIAIS <ArrowRight size={20} />
              </button>
              <button className="border border-white/20 hover:bg-white/10 text-white font-bold py-3 px-8 rounded-lg transition-all backdrop-blur-sm">
                Falar com Consultor
              </button>
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

const Features = () => {
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
    <section className="py-24 bg-[#121212] relative overflow-hidden">
      {/* Subtle Hexagonal Pattern Background */}
      <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0l25.98 15v30L30 60 4.02 45V15z' fill-rule='evenodd' stroke='%23f2c94c' stroke-width='1' fill='none'/%3E%3C/svg%3E")`, backgroundSize: '60px 60px' }} />

      {/* Watermark Logo */}
      <div className="absolute -right-20 -bottom-20 opacity-[0.02] pointer-events-none">
        <img src={LOGO_URL} alt="" className="w-[600px] rotate-12" referrerPolicy="no-referrer" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-white text-4xl font-black mb-4 uppercase tracking-tight">POR QUE O VADE É A SUA MELHOR ESCOLHA?</h2>
          <div className="w-20 h-1.5 bg-brand-yellow mx-auto rounded-full shadow-[0_0_15px_rgba(242,201,76,0.6)]" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((f, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -10 }}
              className="p-8 rounded-2xl bg-[#1a1a1a] border border-white/5 hover:border-brand-yellow/30 hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)] transition-all group"
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

const Materials = () => {
  const items = [
    {
      title: "Combo Policial 2024",
      tag: "Mais Vendido",
      img: "https://picsum.photos/seed/police/600/400"
    },
    {
      title: "Tribunais (Técnico e Analista)",
      tag: "Novo",
      img: "https://picsum.photos/seed/court/600/400"
    },
    {
      title: "Carreiras Administrativas",
      tag: "Oferta",
      img: "https://picsum.photos/seed/admin/600/400"
    }
  ];

  return (
    <section id="materiais" className="py-24 bg-zinc-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <div className="max-w-2xl">
            <h2 className="text-4xl font-black uppercase mb-4">Nossos Melhores Materiais</h2>
            <p className="text-zinc-600 text-lg">Escolha o pacote ideal para a sua carreira e comece a estudar hoje mesmo.</p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {items.map((item, i) => (
            <div key={i} className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all group">
              <div className="relative h-64 overflow-hidden">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 left-4 bg-brand-yellow text-brand-black text-xs font-black px-3 py-1 rounded-full uppercase">
                  {item.tag}
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                <button className="w-full btn-secondary py-4">Quero Garantir Minha Vaga</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Testimonials = () => {
  return (
    <section id="depoimentos" className="py-24 bg-brand-black text-white overflow-hidden relative">
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-yellow rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-black uppercase mb-4">Quem estudou, <span className="text-brand-yellow">passou!</span></h2>
          <p className="text-zinc-400">Histórias reais de pessoas que mudaram de vida com o Vade Concursos.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            { name: "Lucas Silva", role: "Aprovado PM-SP", text: "O material do Vade é simplesmente fenomenal. Os resumos me pouparam meses de estudo desnecessário." },
            { name: "Mariana Costa", role: "Aprovada TJ-MG", text: "Eu não tinha muito tempo para estudar. Com os PDFs esquematizados, consegui focar no que importava." },
            { name: "Ricardo Oliveira", role: "Aprovado PRF", text: "As questões comentadas são o grande diferencial. Você aprende a lógica da banca de forma rápida." }
          ].map((t, i) => (
            <div key={i} className="bg-zinc-900/50 border border-white/10 p-8 rounded-3xl">
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

const Footer = () => {
  return (
    <footer id="contato" className="bg-brand-black text-white pt-20 pb-10 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <Logo size="md" className="h-12 w-12 border-2 border-brand-yellow" />
              <span className="text-2xl font-bold tracking-tighter">VADE <span className="text-brand-yellow">CONCURSOS</span></span>
            </div>
            <p className="text-zinc-400 max-w-md mb-8">
              Nossa missão é democratizar o acesso ao estudo de alta qualidade, ajudando milhares de brasileiros a alcançarem a estabilidade financeira através do concurso público.
            </p>
            <div className="flex gap-6">
              <a href="https://www.instagram.com/vade.concursos/" target="_blank" rel="noopener noreferrer" className="relative group text-zinc-400 hover:text-brand-yellow transition-all">
                <div className="absolute inset-0 bg-brand-yellow/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                <Instagram size={24} className="relative z-10 drop-shadow-[0_0_8px_rgba(242,201,76,0.3)]" />
              </a>
              <a href="https://www.youtube.com/@vadeconcursos" target="_blank" rel="noopener noreferrer" className="relative group text-zinc-400 hover:text-brand-yellow transition-all">
                <div className="absolute inset-0 bg-brand-yellow/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                <Youtube size={24} className="relative z-10 drop-shadow-[0_0_8px_rgba(242,201,76,0.3)]" />
              </a>
              <a href="#" className="relative group text-zinc-400 hover:text-brand-yellow transition-all">
                <div className="absolute inset-0 bg-brand-yellow/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                <Facebook size={24} className="relative z-10 drop-shadow-[0_0_8px_rgba(242,201,76,0.3)]" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 uppercase tracking-widest">Links Úteis</h4>
            <ul className="space-y-4 text-zinc-400">
              <li><a href="#" className="hover:text-brand-yellow transition-colors">Sobre Nós</a></li>
              <li><a href="#" className="hover:text-brand-yellow transition-colors">Nossos Cursos</a></li>
              <li><a href="#" className="hover:text-brand-yellow transition-colors">Blog do Concurseiro</a></li>
              <li><a href="#" className="hover:text-brand-yellow transition-colors">Política de Privacidade</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 uppercase tracking-widest">Contato</h4>
            <ul className="space-y-4 text-zinc-400">
              <li className="flex items-center gap-3">
                <span className="text-brand-yellow font-bold">Email:</span> contato@vadeconcursos.com.br
              </li>
              <li className="flex items-center gap-3">
                <span className="text-brand-yellow font-bold">WhatsApp:</span> (11) 99999-9999
              </li>
              <li className="flex items-center gap-3">
                <span className="text-brand-yellow font-bold">Endereço:</span> Pau dos ferro, 1000 - RN
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-10 border-t border-white/10 text-center text-zinc-500 text-sm">
          <p>© {new Date().getFullYear()} Vade Concursos. Todos os direitos reservados. Desenvolvido com foco na sua aprovação.</p>
        </div>
      </div>
    </footer>
  );
};

export default function LandingPage() {
  return (
    <div className="min-h-screen font-sans selection:bg-brand-yellow selection:text-brand-black">
      <Navbar />
      <Hero />
      <Features />
      <Materials />
      <Testimonials />

      {/* Final CTA Section */}
      <section className="py-24 bg-brand-yellow relative overflow-hidden">
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
          <h2 className="text-brand-black text-4xl md:text-5xl font-black mb-8 uppercase">A sua aprovação começa aqui.</h2>
          <p className="text-brand-black/80 text-xl mb-10 max-w-2xl mx-auto font-medium">
            Não deixe para amanhã a mudança de vida que você pode começar hoje. Junte-se aos milhares de aprovados do Vade Concursos.
          </p>
          <button className="btn-secondary text-xl px-12 py-5 shadow-2xl">
            Quero Começar Agora
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
