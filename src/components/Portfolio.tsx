import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import heroImg from "@/assets/hero-kitchen.jpg";
import kitchenImg from "@/assets/portfolio-kitchen-1.jpg";
import bathroomImg from "@/assets/portfolio-bathroom-1.jpg";
import exteriorImg from "@/assets/portfolio-exterior-1.jpg";
import claddingImg from "@/assets/service-cladding.jpg";
import stairsImg from "@/assets/service-stairs.jpg";

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
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [filter, setFilter] = useState<string>("Todos");

  const filtered = filter === "Todos" ? projects : projects.filter(p => p.category === filter);

  return (
    <section id="portfolio" className="section-padding bg-secondary" ref={ref}>
      <div className="container-narrow">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12"
        >
          <div>
            <span className="label-caps text-primary mb-4 block">Portfólio</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-medium text-foreground leading-tight">
              Projetos que falam por si
            </h2>
          </div>
          <div className="flex gap-2 flex-wrap">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-2 text-sm transition-colors duration-200 ${
                  filter === cat
                    ? "bg-foreground text-primary-foreground"
                    : "bg-background text-muted-foreground hover:text-foreground"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {filtered.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className={`group relative overflow-hidden cursor-pointer ${
                project.large ? "md:col-span-2" : ""
              }`}
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={project.img}
                  alt={project.alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  loading="lazy"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                <div>
                  <span className="label-caps text-primary block mb-1">{project.material}</span>
                  <h3 className="font-serif text-xl text-primary-foreground">{project.title}</h3>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
