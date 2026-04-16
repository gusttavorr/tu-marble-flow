import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import realBathroom1 from "@/assets/real-bathroom-1.jpg";
import realBathroom2 from "@/assets/real-bathroom-2.jpg";
import realBathroom3 from "@/assets/real-bathroom-3.jpg";
import realSink1 from "@/assets/real-sink-1.jpg";
import realSink3 from "@/assets/real-sink-3.jpg";
import realShowroom1 from "@/assets/real-showroom-1.jpg";

const WHATSAPP_URL = "https://wa.me/5511988124466?text=Olá, vim pelo site e gostaria de solicitar um orçamento";

const categories = ["Todos", "Cozinhas", "Banheiros", "Áreas Externas"] as const;

const projects = [
  { img: realBathroom1, title: "Banheiro em Mármore Calacatta", material: "Mármore Calacatta", category: "Banheiros", alt: "Banheiro de luxo com mármore Calacatta e vista panorâmica", large: true },
  { img: realSink1, title: "Cuba Esculpida em Pedra Natural", material: "Pedra Natural Bruta", category: "Banheiros", alt: "Cuba esculpida em pedra natural com borda bruta artesanal" },
  { img: realShowroom1, title: "Balcão Comercial Premium", material: "Granito Cinza Polido", category: "Cozinhas", alt: "Balcão comercial com acabamento em granito cinza polido" },
  { img: realBathroom3, title: "Banheiro Completo Alto Padrão", material: "Mármore Branco Venatino", category: "Banheiros", alt: "Banheiro completo revestido em mármore branco com bancada em madeira", large: true },
  { img: realBathroom2, title: "Spa Residencial Panorâmico", material: "Mármore Statuário", category: "Banheiros", alt: "Spa residencial com paredes e piso em mármore e chuveiro de teto" },
  { img: realSink3, title: "Bancada Dupla Artesanal", material: "Pedra Natural Esculpida", category: "Banheiros", alt: "Bancada dupla em pedra natural com torneiras pretas modernas" },
];

const Portfolio = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [filter, setFilter] = useState<string>("Todos");

  const filtered = filter === "Todos" ? projects : projects.filter(p => p.category === filter);

  return (
    <section id="portfolio" className="section-padding" ref={ref}>
      <div className="container-narrow">
        <div className="flex flex-col gap-6 sm:gap-8 mb-10 sm:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="label-caps text-primary mb-3 sm:mb-4 block">Portfólio</span>
            <div className="line-accent mb-6 sm:mb-8" />
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground leading-tight mb-2 sm:mb-3">
              Projetos Reais que{" "}
              <span className="italic text-primary">Já Entregamos</span>
            </h2>
            <p className="text-muted-foreground text-sm sm:text-base max-w-lg">
              Qualidade comprovada em cada detalhe. Solicite seu orçamento rápido pelo WhatsApp.
            </p>
          </motion.div>

          <div className="flex gap-2 flex-wrap">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 sm:px-5 py-2.5 text-xs sm:text-[13px] font-medium tracking-wide rounded-lg transition-all duration-300 ${
                  filter === cat
                    ? "bg-foreground text-primary-foreground"
                    : "border border-border text-muted-foreground hover:text-foreground hover:border-foreground/30"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
          {filtered.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className={`group relative overflow-hidden cursor-pointer rounded-xl ${
                project.large ? "sm:col-span-2" : ""
              }`}
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={project.img}
                  alt={project.alt}
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent sm:opacity-0 sm:group-hover:opacity-100 transition-all duration-500 flex items-end p-4 sm:p-6 md:p-8">
                <div className="sm:translate-y-4 sm:group-hover:translate-y-0 transition-transform duration-500">
                  <span className="label-caps text-primary block mb-1 sm:mb-2">{project.material}</span>
                  <h3 className="font-serif text-lg sm:text-xl md:text-2xl text-white font-semibold">{project.title}</h3>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-10 sm:mt-16 text-center"
        >
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="cta-primary bg-foreground text-primary-foreground rounded-xl"
          >
            Falar no WhatsApp
            <span>→</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;
