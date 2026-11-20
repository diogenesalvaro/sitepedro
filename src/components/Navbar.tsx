import { useState } from "react";
import { motion } from "motion/react";
import { Menu, X } from "lucide-react";
import { Logo } from "./Logo";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavClick = () => setIsOpen(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-brand-black/95 backdrop-blur-sm text-white border-b border-brand-yellow/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <a href="#inicio" className="flex items-center gap-3 group cursor-pointer" aria-label="Voltar ao Início">
            <motion.div
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.8 }}
            >
              <Logo size="md" className="border-2 border-brand-yellow shadow-[0_0_15px_rgba(242,201,76,0.4)]" />
            </motion.div>
            <span className="text-2xl font-black tracking-tighter">VADE <span className="text-brand-yellow">CONCURSOS</span></span>
          </a>

          <div className="hidden md:flex items-center gap-8">
            <a href="#inicio" className="hover:text-brand-yellow transition-colors font-medium">Início</a>
            <a href="#materiais" className="hover:text-brand-yellow transition-colors font-medium">Materiais</a>
            <a href="#depoimentos" className="hover:text-brand-yellow transition-colors font-medium">Depoimentos</a>
            <a href="#faq" className="hover:text-brand-yellow transition-colors font-medium">Dúvidas</a>
            <a href="#materiais" className="btn-primary py-2 px-6 text-sm">COMECE AGORA</a>
          </div>

          <div className="md:hidden">
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="text-white"
              aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
            >
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
          <a href="#inicio" onClick={handleNavClick} className="text-lg hover:text-brand-yellow">Início</a>
          <a href="#materiais" onClick={handleNavClick} className="text-lg hover:text-brand-yellow">Materiais</a>
          <a href="#depoimentos" onClick={handleNavClick} className="text-lg hover:text-brand-yellow">Depoimentos</a>
          <a href="#faq" onClick={handleNavClick} className="text-lg hover:text-brand-yellow">Dúvidas (FAQ)</a>
          <a href="#materiais" onClick={handleNavClick} className="btn-primary text-center">COMECE AGORA</a>
        </motion.div>
      )}
    </nav>
  );
};
