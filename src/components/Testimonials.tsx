import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Arq. Fernanda Lima",
    role: "Arquiteta de Interiores",
    text: "Trabalho com a Itu Mármores há 8 anos. A precisão do corte e a qualidade do acabamento são incomparáveis na região. Meus clientes sempre ficam impressionados.",
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
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="depoimentos" className="section-padding" ref={ref}>
      <div className="container-narrow">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-xl mb-16"
        >
          <span className="label-caps text-primary mb-4 block">Depoimentos</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-medium text-foreground leading-tight">
            A confiança de quem já escolheu
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((item, i) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-secondary p-8 flex flex-col"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} size={14} className="fill-primary text-primary" />
                ))}
              </div>
              <p className="text-foreground/80 text-sm leading-relaxed mb-6 flex-1 italic">
                "{item.text}"
              </p>
              <div>
                <p className="font-serif text-base font-medium text-foreground">{item.name}</p>
                <p className="text-xs text-muted-foreground">{item.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
