import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Truck, Box } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/5511988124466?text=Olá, vim pelo site e gostaria de solicitar um orçamento";

const Highlights = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding bg-secondary" ref={ref}>
      <div className="container-narrow">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Entrega Rápida */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="bg-background p-8 md:p-10 shadow-card flex flex-col"
          >
            <Truck className="text-primary mb-5" size={36} strokeWidth={1} />
            <h3 className="text-2xl md:text-3xl font-serif font-medium text-foreground mb-3">
              Entrega Rápida e Instalação Profissional
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-6 flex-1">
              Agilidade na produção e compromisso com prazos para você não perder tempo. Nossa equipe cuida de tudo — da medição à instalação final.
            </p>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
            >
              Solicitar Orçamento Agora →
            </a>
          </motion.div>

          {/* Projetos 3D */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="bg-foreground p-8 md:p-10 shadow-card flex flex-col"
          >
            <Box className="text-primary mb-5" size={36} strokeWidth={1} />
            <h3 className="text-2xl md:text-3xl font-serif font-medium text-primary-foreground mb-3">
              Visualize Seu Projeto Antes da Execução
            </h3>
            <p className="text-primary-foreground/60 leading-relaxed mb-6 flex-1">
              Desenvolvemos projetos em 3D para você ver exatamente como ficará antes de produzir. Sem surpresas — só satisfação garantida.
            </p>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
            >
              Quero Meu Projeto Sob Medida →
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Highlights;
