import { Instagram, Facebook, Youtube } from "lucide-react";
import { Logo } from "./Logo";
import { WHATSAPP_PHONE, WHATSAPP_DISPLAY } from "../data/constants";

export const Footer = () => {
  return (
    <footer id="contato" className="bg-brand-black text-white pt-12 pb-10 border-t border-white/10">
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
              <a href="https://www.instagram.com/vade.concursos/" target="_blank" rel="noopener noreferrer" className="relative group text-zinc-400 hover:text-brand-yellow transition-all" aria-label="Instagram">
                <div className="absolute inset-0 bg-brand-yellow/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                <Instagram size={24} className="relative z-10 drop-shadow-[0_0_8px_rgba(242,201,76,0.3)]" />
              </a>
              <a href="https://www.youtube.com/@vadeconcursos" target="_blank" rel="noopener noreferrer" className="relative group text-zinc-400 hover:text-brand-yellow transition-all" aria-label="YouTube">
                <div className="absolute inset-0 bg-brand-yellow/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                <Youtube size={24} className="relative z-10 drop-shadow-[0_0_8px_rgba(242,201,76,0.3)]" />
              </a>
              <button className="relative group text-zinc-400 hover:text-brand-yellow transition-all" aria-label="Facebook">
                <div className="absolute inset-0 bg-brand-yellow/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                <Facebook size={24} className="relative z-10 drop-shadow-[0_0_8px_rgba(242,201,76,0.3)]" />
              </button>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 uppercase tracking-widest">Links Úteis</h4>
            <ul className="space-y-4 text-zinc-400">
              <li><button className="hover:text-brand-yellow transition-colors">Sobre Nós</button></li>
              <li><button className="hover:text-brand-yellow transition-colors">Nossos Cursos</button></li>
              <li><button className="hover:text-brand-yellow transition-colors">Blog do Concurseiro</button></li>
              <li><button className="hover:text-brand-yellow transition-colors">Política de Privacidade</button></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 uppercase tracking-widest">Contato</h4>
            <ul className="space-y-4 text-zinc-400">
              <li className="flex items-center gap-3">
                <span className="text-brand-yellow font-bold">Email:</span> contato@vadeconcursos.com.br
              </li>
              <li className="flex items-center gap-3">
                <span className="text-brand-yellow font-bold">WhatsApp:</span>
                <a
                  href={`https://wa.me/${WHATSAPP_PHONE}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-brand-yellow transition-colors underline-offset-4 hover:underline"
                >
                  {WHATSAPP_DISPLAY}
                </a>
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
