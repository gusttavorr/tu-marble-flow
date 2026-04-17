import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Star, Quote } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/5511988124466?text=Olá, vim pelo site e gostaria de solicitar um orçamento";

const testimonials = [
  {
    name: "Arq. Fernanda Lima",
    role: "Arquiteta de Interiores",
    text: "Trabalho com a ITU MÁRMORES há 8 anos. A precisão do corte e a qualidade do acabamento são incomparáveis na região. Meus clientes sempre ficam impressionados.",
  },
  {
    name: "Ricardo Mendes",
    role: "Proprietário Residencial",
    text: "Reformamos toda a cozinha com mármore Calacatta. O resultado superou todas as expectativas. Atendimento impecável do primeiro contato à instalação final.",
  },
  {
    name: "Arq. Paulo Santana",
    role: "Escritório PS Arquitetura",
    text: "A equipe entende perfeitamente o que um projeto de alto padrão exige. Sempre entregam no prazo e com qualidade que não preciso inspecionar duas vezes.",
  },
];

const Testimonials = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="depoimentos" className="dark-section section-padding" ref={ref}>
      <div className="container-narrow">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-10 sm:mb-16"
        >
          <span className="label-caps text-primary mb-3 sm:mb-4 block">Depoimentos</span>
          <div className="line-accent mx-auto mb-6 sm:mb-8" />
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-white leading-tight mb-2 sm:mb-3">
            A confiança de quem <span className="italic text-primary">já escolheu</span>
          </h2>
          <p className="text-white/40 text-sm sm:text-base">Mais de 100 clientes atendidos com excelência</p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4">
          {testimonials.map((item, i) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="glass-card p-6 sm:p-8 md:p-10 flex flex-col group hover:border-primary/20 transition-all duration-500"
            >
              <Quote size={28} className="text-primary/30 mb-4 sm:mb-6" />
              <div className="flex gap-1 mb-4 sm:mb-5">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} size={12} className="fill-primary text-primary" />
                ))}
              </div>
              <p className="text-white/70 text-sm sm:text-[15px] leading-relaxed mb-6 sm:mb-8 flex-1 italic">
                "{item.text}"
              </p>
              <div className="pt-4 sm:pt-6 border-t border-white/10">
                <p className="font-serif text-base sm:text-lg font-semibold text-white">{item.name}</p>
                <p className="text-[12px] sm:text-[13px] text-white/40 mt-1">{item.role}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-10 sm:mt-16 text-center"
        >
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="cta-primary rounded-xl"
            style={{ backgroundColor: "#25D366", color: "#fff" }}
          >
            Falar no WhatsApp
            <span>→</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
