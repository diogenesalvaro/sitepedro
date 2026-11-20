export const LOGO_URL = "https://storage.googleapis.com/aistudio-user-uploads-731396701163/3z2udfxvginjxtypajfxvw/logo.png";
export const HERO_IMAGE_URL = "/hero.jpg";

// Configurações de Contato & WhatsApp
export const WHATSAPP_PHONE = "5584981085040";
export const WHATSAPP_MESSAGE = "Olá! Vim pelo site do Vade Concursos e gostaria de tirar uma dúvida sobre os materiais.";
export const WHATSAPP_DISPLAY = "(84) 98108-5040";


export interface MaterialItem {
  id: string;
  title: string;
  category: "Polícia Penal" | "Polícia Militar" | "Redação & Discursivas";
  tag: string;
  tagColor?: string;
  originalPrice: string;
  price: string;
  installments: string;
  rating: number;
  reviews: number;
  benefits: string[];
  img: string;
  checkoutUrl: string; // Link de pagamento da Kiwify
}

export const MATERIAL_CATEGORIES = [
  "Todos",
  "Polícia Penal",
  "Polícia Militar",
  "Redação & Discursivas"
] as const;

export const MATERIALS_ITEMS: MaterialItem[] = [
  {
    id: "policia-penal-pe",
    title: "Combo Polícia Penal PE 2026 (PPPE)",
    category: "Polícia Penal",
    tag: "Edital Iminente 🔥",
    originalPrice: "R$ 197",
    price: "R$ 77",
    installments: "12x de R$ 7,70",
    rating: 4.9,
    reviews: 382,
    benefits: [
      "PDFs Esquematizados com foco total no edital PPPE",
      "Legislação Estadual & Execução Penal comentada",
      "+1.500 Questões Gabaritadas da banca",
      "Cronograma Tático de reta final para aprovação"
    ],
    img: "/materiais/policia-penal-pe.png",
    checkoutUrl: "https://pay.kiwify.com.br/LINK_KIWIFY_PPPE"
  },
  {
    id: "redacao-pppe",
    title: "Curso de Redação Nota Máxima PPPE 2026",
    category: "Redação & Discursivas",
    tag: "Diferencial Aprovado ✍️",
    originalPrice: "R$ 147",
    price: "R$ 47",
    installments: "12x de R$ 4,70",
    rating: 5.0,
    reviews: 219,
    benefits: [
      "Estruturas prontas e modelos de redação nota 10",
      "Temas quentes focados na Segurança Pública de PE",
      "Critérios de correção detalhados da banca examinadora",
      "Folhas de treino oficial e técnicas anti-bloqueio"
    ],
    img: "/materiais/redacao-pppe.png",
    checkoutUrl: "https://pay.kiwify.com.br/LINK_KIWIFY_REDACAO"
  },
  {
    id: "combo-pmma",
    title: "Combo Completo PMMA 2026 (Soldado & Oficial)",
    category: "Polícia Militar",
    tag: "Mais Vendido 🚀",
    originalPrice: "R$ 247",
    price: "R$ 87",
    installments: "12x de R$ 8,70",
    rating: 4.9,
    reviews: 467,
    benefits: [
      "Teoria esquematizada de todas as matérias do concurso",
      "Vade Mecum com Legislação Militar do Maranhão",
      "Banco de questões com gabarito fundamentado",
      "Acesso imediato e atualizações pós-edital"
    ],
    img: "/materiais/combo-pmma.png",
    checkoutUrl: "https://pay.kiwify.com.br/LINK_KIWIFY_PMMA"
  },
  {
    id: "policia-penal-pb",
    title: "Polícia Penal da Paraíba (PPPB - Reta Final)",
    category: "Polícia Penal",
    tag: "Super Completo 🎯",
    originalPrice: "R$ 197",
    price: "R$ 67",
    installments: "12x de R$ 6,70",
    rating: 4.8,
    reviews: 315,
    benefits: [
      "Conteúdo verticalizado conforme o edital da PB",
      "Resumos visuais e mapas mentais de alta retenção",
      "Questões comentadas de Direito e Específicas",
      "Revisão estratégica dos assuntos de maior incidência"
    ],
    img: "/materiais/policia-penal-pb.png",
    checkoutUrl: "https://pay.kiwify.com.br/LINK_KIWIFY_PPPB"
  }
];

export const TESTIMONIALS = [
  { 
    name: "Lucas Silva", 
    role: "Aprovado PM-SP", 
    text: "O material do Vade é simplesmente fenomenal. Os resumos me pouparam meses de estudo desnecessário." 
  },
  { 
    name: "Mariana Costa", 
    role: "Aprovada TJ-MG", 
    text: "Eu não tinha muito tempo para estudar. Com os PDFs esquematizados, consegui focar no que importava." 
  },
  { 
    name: "Ricardo Oliveira", 
    role: "Aprovado PRF", 
    text: "As questões comentadas são o grande diferencial. Você aprende a lógica da banca de forma rápida." 
  }
];
