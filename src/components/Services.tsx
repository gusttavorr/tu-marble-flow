import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import kitchenImg from "@/assets/hero-kitchen.jpg";
import bathroomImg from "@/assets/service-bathroom.jpg";
import stairsImg from "@/assets/service-stairs.jpg";
import gourmetImg from "@/assets/service-gourmet.jpg";
import claddingImg from "@/assets/service-cladding.jpg";

const WHATSAPP_URL = "https://wa.me/5511988124466?text=Olá, vim pelo site e gostaria de solicitar um orçamento";

const services = [
  { title: "Bancadas de Cozinha", desc: "Execução milimétrica com veios contínuos e acabamento em meia-esquadria invisível.", img: kitchenImg, alt: "Bancada de cozinha em mármore branco pela Itu Mármores" },
  { title: "Banheiros", desc: "Projetos completos com paredes, pisos e bancadas em mármore para ambientes de spa.", img: bathroomImg, alt: "Banheiro revestido em mármore branco com acabamento de alto padrão" },
  { title: "Escadas", desc: "Escadarias em mármore e granito com acabamento polido e antiderrapante sob medida.", img: stairsImg, alt: "Escadaria em mármore branco com corrimão em ferro forjado" },
  { title: "Áreas Gourmet", desc: "Bancadas resistentes e elegantes para churrasqueiras e espaços de convivência.", img: gourmetImg, alt: "Área gourmet com bancada em granito escuro premium" },
  { title: "Revestimentos", desc: "Painéis de pedra natural em grande formato para salas, halls e fachadas.", img: claddingImg, alt: "Parede revestida com mármore branco em sala de estar moderna" },
];

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="servicos" className="dark-section section-padding" ref={ref}>
      <div className="container-narrow">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="label-caps text-primary mb-4 block">O Que Fazemos</span>
          <div className="line-accent mx-auto mb-8" />
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-white leading-tight mb-4">
            Soluções Sob Medida para{" "}
            <span className="italic text-primary">Valorizar</span> Seu Espaço
          </h2>
          <p className="text-white/50">
            Mais de 100 clientes atendidos com excelência. Cada projeto é único.
          </p>
        </motion.div>

        {/* Bento-style grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`group relative overflow-hidden cursor-pointer ${
                i === 0 ? "lg:col-span-2 lg:row-span-2" : ""
              }`}
            >
              <div className={`overflow-hidden ${i === 0 ? "aspect-[4/3] lg:aspect-auto lg:h-full" : "aspect-[4/3]"}`}>
                <img
                  src={service.img}
                  alt={service.alt}
                  className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end">
                <div className="p-6 md:p-8 w-full">
                  <span className="label-caps text-primary block mb-2">{service.title}</span>
                  <p className="text-white/60 text-sm leading-relaxed max-w-md opacity-0 group-hover:opacity-100 transition-opacity duration-500 translate-y-2 group-hover:translate-y-0">
                    {service.desc}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-12 text-center"
        >
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-10 py-4 text-sm font-semibold tracking-wider uppercase text-white bg-primary hover:shadow-glow transition-all duration-300"
          >
            Quero Meu Projeto Sob Medida
            <span>→</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
