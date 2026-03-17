import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Ruler, Gem, Truck, Shield } from "lucide-react";

const differentials = [
  { icon: Ruler, label: "Corte CNC", desc: "Precisão milimétrica com tecnologia alemã de corte." },
  { icon: Gem, label: "Seleção Manual", desc: "Cada chapa é escolhida pessoalmente para seu projeto." },
  { icon: Truck, label: "Instalação Própria", desc: "Equipe especializada do início ao acabamento final." },
  { icon: Shield, label: "Garantia de Acabamento", desc: "Compromisso vitalício com a qualidade do seu projeto." },
];

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="sobre" className="section-padding bg-secondary" ref={ref}>
      <div className="container-narrow">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-2xl mb-16"
        >
          <span className="label-caps text-primary mb-4 block">Sobre Nós</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-medium text-foreground leading-tight mb-6">
            Desde 1968 transformando o cenário de Itu
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Há mais de cinco décadas, a Itu Mármores e Granitos une a força da pedra natural à precisão da tecnologia de ponta. Nossa tradição é construída projeto a projeto, com atendimento personalizado e materiais selecionados para garantir o resultado que arquitetos e clientes exigentes esperam: o erro zero.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {differentials.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="bg-background p-6 shadow-card"
            >
              <item.icon className="text-primary mb-4" size={28} strokeWidth={1} />
              <h3 className="font-serif text-lg font-medium text-foreground mb-2">{item.label}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
