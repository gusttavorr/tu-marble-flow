import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import heroImg from "@/assets/hero-kitchen.jpg";
import kitchenImg from "@/assets/portfolio-kitchen-1.jpg";
import bathroomImg from "@/assets/portfolio-bathroom-1.jpg";
import exteriorImg from "@/assets/portfolio-exterior-1.jpg";
import claddingImg from "@/assets/service-cladding.jpg";
import stairsImg from "@/assets/service-stairs.jpg";

const WHATSAPP_URL = "https://wa.me/5511988124466?text=Olá, vim pelo site e gostaria de solicitar um orçamento";

const categories = ["Todos", "Cozinhas", "Banheiros", "Áreas Externas"] as const;

const projects = [
  { img: heroImg, title: "Ilha em Calacatta Gold", material: "Mármore Calacatta", category: "Cozinhas", alt: "Ilha de cozinha em mármore Calacatta Gold executada pela Itu Mármores", large: true },
  { img: bathroomImg, title: "Spa Residencial", material: "Mármore Branco Paraná", category: "Banheiros", alt: "Banheiro completo em mármore branco com detalhes dourados" },
  { img: kitchenImg, title: "Cozinha Via Láctea", material: "Granito Via Láctea Escovado", category: "Cozinhas", alt: "Cozinha com bancada em granito preto Via Láctea" },
  { img: exteriorImg, title: "Terraço Contemporâneo", material: "Quartzito Natural", category: "Áreas Externas", alt: "Terraço com piso em pedra natural", large: true },
  { img: claddingImg, title: "Painel Escultural", material: "Mármore Statuário", category: "Cozinhas", alt: "Parede em mármore Statuário em living de alto padrão" },
  { img: stairsImg, title: "Escadaria Clássica", material: "Mármore Branco Clássico", category: "Banheiros", alt: "Escadaria monumental em mármore branco" },
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
