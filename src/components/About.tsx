import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Ruler, Gem, Truck, Shield } from "lucide-react";

const differentials = [
  { icon: Ruler, label: "Corte CNC", desc: "Precisão milimétrica com tecnologia alemã de corte." },
  { icon: Gem, label: "Seleção Manual", desc: "Cada chapa é escolhida pessoalmente para seu projeto." },
  { icon: Truck, label: "Instalação Própria", desc: "Equipe especializada do início ao acabamento final." },
  { icon: Shield, label: "Garantia Total", desc: "Compromisso vitalício com a qualidade do seu projeto." },
];

const stats = [
  { value: 500, suffix: "+", label: "Projetos Entregues" },
  { value: 55, suffix: "+", label: "Anos de Tradição" },
  { value: 100, suffix: "%", label: "Satisfação dos Clientes" },
];

const AnimatedCounter = ({ value, suffix, inView }: { value: number; suffix: string; inView: boolean }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 2000;
    const increment = value / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [inView, value]);

  return <span className="stat-number">{count}{suffix}</span>;
};

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="sobre" ref={ref}>
      {/* Stats Bar */}
      <div className="dark-section py-12 sm:py-16 md:py-20">
        <div className="container-narrow px-5 sm:px-6 md:px-10 lg:px-20">
          <div className="grid grid-cols-3 gap-4 sm:gap-8 md:gap-12">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className="text-center"
              >
                <AnimatedCounter value={stat.value} suffix={stat.suffix} inView={isInView} />
                <p className="text-dark-muted text-[10px] sm:text-xs md:text-sm mt-1 sm:mt-2 tracking-wide uppercase font-sans">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* About Content */}
      <div className="section-padding">
        <div className="container-narrow">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-12 lg:gap-24 items-start">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              <span className="label-caps text-primary mb-3 sm:mb-4 block">Sobre Nós</span>
              <div className="line-accent mb-6 sm:mb-8" />
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground leading-[1.1] mb-6 sm:mb-8">
                Desde 1968 transformando ambientes com <span className="italic text-primary">excelência</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed text-sm sm:text-base mb-4 sm:mb-6">
                Há mais de cinco décadas, a Itu Mármores e Granitos une a força da pedra natural à precisão da tecnologia de ponta.
              </p>
              <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
                Nossa tradição é construída projeto a projeto, com atendimento personalizado e materiais selecionados para garantir o resultado que arquitetos e clientes exigentes esperam: o erro zero.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              {differentials.map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                  className="group p-5 sm:p-6 border border-border rounded-xl hover:border-primary/30 transition-all duration-500 hover:shadow-card"
                >
                  <item.icon className="text-primary mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300" size={24} strokeWidth={1.5} />
                  <h3 className="font-serif text-base sm:text-lg font-semibold text-foreground mb-1.5 sm:mb-2">{item.label}</h3>
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
