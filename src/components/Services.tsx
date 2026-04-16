import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import realBathroom1 from "@/assets/real-bathroom-1.jpg";
import realBathroom2 from "@/assets/real-bathroom-2.jpg";
import realSink1 from "@/assets/real-sink-1.jpg";
import realCountertop1 from "@/assets/real-countertop-1.jpg";
import realShowroom2 from "@/assets/real-showroom-2.jpg";

const WHATSAPP_URL = "https://wa.me/5511988124466?text=Olá, vim pelo site e gostaria de solicitar um orçamento";

const services = [
  { title: "Bancadas de Cozinha", desc: "Execução milimétrica com veios contínuos e acabamento em meia-esquadria invisível.", img: realCountertop1, alt: "Bancada de cozinha em pedra natural com acabamento premium" },
  { title: "Banheiros", desc: "Projetos completos com paredes, pisos e bancadas em mármore para ambientes de spa.", img: realBathroom1, alt: "Banheiro revestido em mármore Calacatta com vista panorâmica" },
  { title: "Cubas Esculpidas", desc: "Peças artesanais em pedra natural com borda bruta, unindo rusticidade e sofisticação.", img: realSink1, alt: "Cuba esculpida em pedra natural com torneira preta moderna" },
  { title: "Áreas Gourmet", desc: "Bancadas resistentes e elegantes para churrasqueiras e espaços de convivência.", img: realShowroom2, alt: "Showroom com balcão em granito cinza e acabamento premium" },
  { title: "Revestimentos", desc: "Painéis de pedra natural em grande formato para salas, halls e fachadas.", img: realBathroom2, alt: "Parede revestida com mármore branco Statuário em banheiro de luxo" },
];

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="servicos" className="dark-section section-padding" ref={ref}>
      <div className="container-narrow">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center max-w-2xl mx-auto mb-10 sm:mb-16"
        >
          <span className="label-caps text-primary mb-3 sm:mb-4 block">O Que Fazemos</span>
          <div className="line-accent mx-auto mb-6 sm:mb-8" />
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-white leading-tight mb-3 sm:mb-4">
            Soluções Sob Medida para{" "}
            <span className="italic text-primary">Valorizar</span> Seu Espaço
          </h2>
          <p className="text-white/50 text-sm sm:text-base">
            Mais de 100 clientes atendidos com excelência. Cada projeto é único.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`group relative overflow-hidden rounded-xl cursor-pointer ${
                i === 0 ? "sm:col-span-2 sm:row-span-2" : ""
              }`}
            >
              <div className={`overflow-hidden ${i === 0 ? "aspect-[4/3] sm:aspect-auto sm:h-full min-h-[250px]" : "aspect-[4/3]"}`}>
                <img
                  src={service.img}
                  alt={service.alt}
                  className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end">
                <div className="p-4 sm:p-6 md:p-8 w-full">
                  <span className="label-caps text-primary block mb-1 sm:mb-2">{service.title}</span>
                  <p className="text-white/70 sm:text-white/60 text-xs sm:text-sm leading-relaxed max-w-md sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-500 sm:translate-y-2 sm:group-hover:translate-y-0">
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
          className="mt-8 sm:mt-12 text-center"
        >
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="cta-primary bg-primary text-primary-foreground rounded-xl"
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
