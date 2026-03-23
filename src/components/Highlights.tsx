import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Truck, Box, Zap, Award } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/5511988124466?text=Olá, vim pelo site e gostaria de solicitar um orçamento";

const highlights = [
  {
    icon: Truck,
    title: "Entrega Rápida e Instalação Profissional",
    desc: "Agilidade na produção e compromisso com prazos para você não perder tempo. Nossa equipe cuida de tudo — da medição à instalação final.",
    cta: "Solicitar Orçamento Agora",
  },
  {
    icon: Box,
    title: "Visualize Seu Projeto Antes da Execução",
    desc: "Desenvolvemos projetos em 3D para você ver exatamente como ficará antes de produzir. Sem surpresas — só satisfação garantida.",
    cta: "Quero Meu Projeto Sob Medida",
  },
  {
    icon: Zap,
    title: "Atendimento Consultivo Especializado",
    desc: "Nossa equipe ajuda você a escolher o material perfeito para cada ambiente, considerando estética, durabilidade e orçamento.",
    cta: "Falar com Especialista",
  },
  {
    icon: Award,
    title: "Garantia de Qualidade Premium",
    desc: "Todos os nossos projetos contam com garantia de acabamento e qualidade dos materiais selecionados.",
    cta: "Saiba Mais",
  },
];

const Highlights = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding" ref={ref}>
      <div className="container-narrow">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="label-caps text-primary mb-4 block">Diferenciais</span>
          <div className="line-accent mx-auto mb-8" />
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground leading-tight max-w-3xl mx-auto">
            Por que escolher a <span className="italic text-primary">Itu Mármores</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {highlights.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`group p-8 md:p-10 border border-border hover:border-primary/30 transition-all duration-500 hover:shadow-elevated ${
                i === 1 ? "bg-foreground text-white border-transparent hover:border-primary/30" : ""
              }`}
            >
              <item.icon
                className={`mb-6 transition-transform duration-300 group-hover:scale-110 ${
                  i === 1 ? "text-primary" : "text-primary"
                }`}
                size={36}
                strokeWidth={1}
              />
              <h3 className={`text-xl md:text-2xl font-serif font-semibold mb-4 ${
                i === 1 ? "text-white" : "text-foreground"
              }`}>
                {item.title}
              </h3>
              <p className={`leading-relaxed mb-6 ${
                i === 1 ? "text-white/50" : "text-muted-foreground"
              }`}>
                {item.desc}
              </p>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:gap-3 transition-all duration-300"
              >
                {item.cta}
                <span>→</span>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Highlights;
