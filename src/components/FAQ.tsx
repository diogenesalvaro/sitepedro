import { useState } from "react";
import { ChevronDown, HelpCircle, MessageCircle } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { WHATSAPP_PHONE } from "../data/constants";

interface FAQItem {
  question: string;
  answer: string;
}

const FAQS: FAQItem[] = [
  {
    question: "Como recebo o acesso ao material após o pagamento?",
    answer: "O acesso é imediato! Assim que o seu pagamento for confirmado (no Pix ou Cartão de Crédito a liberação é instantânea), você receberá um e-mail com os dados de acesso exclusivos para baixar todos os PDFs, cronogramas e bônus diretamente no seu computador, tablet ou celular."
  },
  {
    question: "O material é atualizado caso o edital oficial seja publicado?",
    answer: "Sim! Todos os nossos pacotes contam com garantia de atualização pós-edital 100% gratuita. Caso a banca organizadora altere disciplinas, tópicos ou legislações, nosso time pedagógico atualiza os PDFs e disponibiliza na sua área de membros sem você pagar nenhum centavo a mais."
  },
  {
    question: "Posso baixar e imprimir os PDFs e mapas mentais?",
    answer: "Com certeza! Os arquivos não possuem travas de impressão. Você pode baixar todos os materiais em formato PDF de alta resolução para estudar offline, encadernar, imprimir ou fazer anotações no tablet e celular."
  },
  {
    question: "Por quanto tempo terei acesso ao conteúdo?",
    answer: "O acesso é vitalício para o concurso escolhido! Uma vez feito o download, os arquivos são seus para sempre, permitindo revisões constantes até o dia da sua aprovação e posse."
  },
  {
    question: "Não tenho muito tempo para estudar. O material serve para mim?",
    answer: "Foi desenvolvido exatamente para concurseiros com rotina corrida! Nossos resumos usam Visual Law, esquemas e mapas mentais focados estritamente no que tem maior probabilidade de cair na prova. Você economiza meses lendo apostilas gigantescas e vai direto ao ponto que garante sua vaga."
  },
  {
    question: "Como funciona a garantia incondicional de 7 dias?",
    answer: "É risco zero absoluto: você tem 7 dias para acessar o material, testar a didática e aplicar o cronograma. Se por qualquer motivo você não gostar, basta nos mandar uma mensagem no WhatsApp que reembolsamos 100% do seu valor, sem perguntas e sem letras miúdas."
  }
];

export const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 bg-brand-black text-white relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[35rem] h-[35rem] bg-brand-yellow/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-brand-yellow/10 border border-brand-yellow/30 rounded-full px-4 py-1 mb-4">
            <HelpCircle className="text-brand-yellow" size={15} />
            <span className="text-brand-yellow text-xs font-bold tracking-widest uppercase">
              Tire Suas Dúvidas
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight">
            PERGUNTAS <span className="text-brand-yellow">FREQUENTES</span>
          </h2>
          <p className="text-zinc-400 text-base sm:text-lg mt-3 max-w-xl mx-auto">
            Tudo o que você precisa saber sobre nossos materiais e metodologia antes de dar o próximo passo rumo à posse.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className={`border rounded-2xl transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? "bg-[#1c1c1c] border-brand-yellow/50 shadow-[0_8px_25px_rgba(242,201,76,0.1)]"
                    : "bg-[#161616] border-white/10 hover:border-white/20"
                }`}
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full py-5 px-6 sm:px-8 text-left flex items-center justify-between gap-4 transition-colors"
                  aria-expanded={isOpen}
                >
                  <span className="text-base sm:text-lg font-bold text-white group-hover:text-brand-yellow">
                    {faq.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full border border-white/15 flex items-center justify-center shrink-0 transition-transform duration-300 ${
                      isOpen
                        ? "rotate-180 bg-brand-yellow text-brand-black border-brand-yellow"
                        : "text-zinc-400 bg-white/5"
                    }`}
                  >
                    <ChevronDown size={18} />
                  </div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                    >
                      <div className="px-6 sm:px-8 pb-6 pt-1 text-sm sm:text-base text-zinc-300 leading-relaxed border-t border-white/5">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Still have questions banner */}
        <div className="mt-12 text-center bg-[#181818] border border-white/10 rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-center sm:text-left">
            <h4 className="text-base sm:text-lg font-bold text-white">Ainda ficou com alguma dúvida?</h4>
            <p className="text-xs sm:text-sm text-zinc-400 mt-0.5">
              Fale diretamente com nossa equipe pedagógica pelo WhatsApp.
            </p>
          </div>
          <a
            href={`https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent("Olá! Estava olhando o FAQ do site e ainda fiquei com uma dúvida...")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary py-3 px-6 text-xs sm:text-sm whitespace-nowrap inline-flex items-center gap-2 shrink-0"
          >
            <MessageCircle size={17} />
            <span>Chamar no WhatsApp</span>
          </a>
        </div>

      </div>
    </section>
  );
};
