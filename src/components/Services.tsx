import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import kitchenImg from "@/assets/service-kitchen.jpg";
import bathroomImg from "@/assets/service-bathroom.jpg";
import stairsImg from "@/assets/service-stairs.jpg";
import gourmetImg from "@/assets/service-gourmet.jpg";
import claddingImg from "@/assets/service-cladding.jpg";

const services = [
  { title: "Bancadas de Cozinha", desc: "Execução milimétrica com veios contínuos e acabamento em meia-esquadria invisível.", img: kitchenImg, alt: "Bancada de cozinha em mármore branco pela Itu Mármores" },
  { title: "Banheiros", desc: "Projetos completos com paredes, pisos e bancadas em mármore para ambientes de spa.", img: bathroomImg, alt: "Banheiro revestido em mármore branco com acabamento de alto padrão" },
  { title: "Escadas", desc: "Escadarias em mármore e granito com acabamento polido e antiderrapante sob medida.", img: stairsImg, alt: "Escadaria em mármore branco com corrimão em ferro forjado" },
  { title: "Áreas Gourmet", desc: "Bancadas resistentes e elegantes para churrasqueiras e espaços de convivência ao ar livre.", img: gourmetImg, alt: "Área gourmet com bancada em granito escuro premium" },
  { title: "Revestimentos", desc: "Painéis de pedra natural em grande formato para salas, halls e fachadas residenciais.", img: claddingImg, alt: "Parede revestida com mármore branco em sala de estar moderna" },
];

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="servicos" className="section-padding" ref={ref}>
      <div className="container-narrow">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-xl mb-16"
        >
          <span className="label-caps text-primary mb-4 block">Nossos Serviços</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-medium text-foreground leading-tight">
            Excelência em cada detalhe
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="group relative overflow-hidden bg-background shadow-card border-b-2 border-transparent hover:border-primary transition-colors duration-300"
            >
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src={service.img}
                  alt={service.alt}
                  className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="p-6">
                <span className="label-caps text-primary">{service.title}</span>
                <p className="text-sm text-muted-foreground leading-relaxed mt-2">{service.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
