import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const BASE_IMG = "http://www.itumarmores.com.br/area_restrita/img_produtos";

const stones = [
  { name: "Branco Polar", image: `${BASE_IMG}/13.jpg` },
  { name: "Preto Absoluto", image: `${BASE_IMG}/36.jpg` },
  { name: "Amarelo Ornamental", image: `${BASE_IMG}/5.jpg` },
  { name: "Verde Ubatuba", image: `${BASE_IMG}/48.jpg` },
  { name: "Bordeaux", image: `${BASE_IMG}/7.jpg` },
  { name: "Carrara", image: `${BASE_IMG}/12.jpg` },
  { name: "Red Dragon", image: `${BASE_IMG}/38.jpg` },
  { name: "Ocean Blue", image: `${BASE_IMG}/33.jpg` },
  { name: "Branco Itaúnas", image: `${BASE_IMG}/9.jpg` },
  { name: "Verde Pavão", image: `${BASE_IMG}/43.jpg` },
];

const VISIBLE_COUNT = 5;
const AUTO_INTERVAL = 3000;

const StoneSlider3D = () => {
  const [centerIndex, setCenterIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (isHovered) return;
    const timer = setInterval(() => {
      setCenterIndex((prev) => (prev + 1) % stones.length);
    }, AUTO_INTERVAL);
    return () => clearInterval(timer);
  }, [isHovered]);

  const next = () => setCenterIndex((prev) => (prev + 1) % stones.length);
  const prev = () => setCenterIndex((prev) => (prev - 1 + stones.length) % stones.length);

  const getVisibleSlides = () => {
    const slides = [];
    const half = Math.floor(VISIBLE_COUNT / 2);
    for (let i = -half; i <= half; i++) {
      const idx = (centerIndex + i + stones.length) % stones.length;
      slides.push({ ...stones[idx], offset: i, idx });
    }
    return slides;
  };

  const visibleSlides = getVisibleSlides();

  return (
    <section className="section-padding bg-foreground overflow-hidden">
      <div className="container-narrow">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="label-caps text-primary mb-4 block">Showroom Virtual</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-medium text-primary-foreground leading-tight mb-4">
            Explore Nossas Pedras
          </h2>
          <p className="text-primary-foreground/60 max-w-xl mx-auto">
            Navegue pela nossa coleção de mármores e granitos em uma experiência imersiva.
          </p>
        </motion.div>

        <div
          className="relative flex items-center justify-center h-[340px] md:h-[420px] lg:h-[480px]"
          style={{ perspective: "1200px" }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <AnimatePresence mode="popLayout">
            {visibleSlides.map((slide) => {
              const { offset } = slide;
              const isCenter = offset === 0;
              const absOffset = Math.abs(offset);

              const translateX = offset * 220;
              const translateZ = isCenter ? 80 : -(absOffset * 120);
              const rotateY = offset * -25;
              const scale = isCenter ? 1.1 : 1 - absOffset * 0.12;
              const opacity = isCenter ? 1 : 1 - absOffset * 0.25;
              const zIndex = VISIBLE_COUNT - absOffset;

              return (
                <motion.div
                  key={slide.idx}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{
                    x: translateX,
                    z: translateZ,
                    rotateY,
                    scale,
                    opacity,
                  }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute cursor-pointer"
                  style={{
                    zIndex,
                    transformStyle: "preserve-3d",
                  }}
                  whileHover={isCenter ? { scale: 1.15, rotateY: 5 } : {}}
                >
                  <div
                    className="relative overflow-hidden border-2"
                    style={{
                      width: isCenter ? "240px" : "200px",
                      height: isCenter ? "300px" : "250px",
                      borderColor: isCenter
                        ? "hsl(var(--primary))"
                        : "hsl(var(--primary) / 0.2)",
                      boxShadow: isCenter
                        ? "0 30px 60px -15px rgba(0,0,0,0.5), 0 0 30px hsl(var(--primary) / 0.15)"
                        : "0 15px 30px -10px rgba(0,0,0,0.3)",
                    }}
                  >
                    <img
                      src={slide.image}
                      alt={slide.name}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                    {/* Reflection / shine effect */}
                    <div
                      className="absolute inset-0 pointer-events-none"
                      style={{
                        background:
                          "linear-gradient(135deg, rgba(255,255,255,0.15) 0%, transparent 50%, rgba(0,0,0,0.1) 100%)",
                      }}
                    />
                  </div>
                  {isCenter && (
                    <motion.p
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                      className="text-center mt-4 text-primary-foreground font-serif text-lg"
                    >
                      {slide.name}
                    </motion.p>
                  )}
                </motion.div>
              );
            })}
          </AnimatePresence>

          {/* Navigation */}
          <button
            onClick={prev}
            className="absolute left-2 md:left-8 z-20 p-3 bg-primary/20 hover:bg-primary/40 text-primary-foreground rounded-full backdrop-blur-sm transition-colors"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={next}
            className="absolute right-2 md:right-8 z-20 p-3 bg-primary/20 hover:bg-primary/40 text-primary-foreground rounded-full backdrop-blur-sm transition-colors"
          >
            <ChevronRight size={24} />
          </button>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {stones.map((_, i) => (
            <button
              key={i}
              onClick={() => setCenterIndex(i)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                i === centerIndex
                  ? "bg-primary w-6"
                  : "bg-primary-foreground/30 hover:bg-primary-foreground/50"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default StoneSlider3D;
