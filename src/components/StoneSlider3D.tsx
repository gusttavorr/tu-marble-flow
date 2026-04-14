import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { stones } from "@/data/stones";
import { useIsMobile } from "@/hooks/use-mobile";

const AUTO_INTERVAL = 3000;

const StoneSlider3D = () => {
  const [centerIndex, setCenterIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();
  const isMobile = useIsMobile();

  const VISIBLE_COUNT = isMobile ? 3 : 5;

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

  // Responsive sizes
  const centerW = isMobile ? 180 : 240;
  const centerH = isMobile ? 230 : 300;
  const sideW = isMobile ? 140 : 200;
  const sideH = isMobile ? 180 : 250;
  const spacing = isMobile ? 140 : 220;

  return (
    <section className="section-padding bg-foreground overflow-hidden">
      <div className="container-narrow">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-16"
        >
          <span className="label-caps text-primary mb-3 sm:mb-4 block">Showroom Virtual</span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-medium text-primary-foreground leading-tight mb-3 sm:mb-4">
            Explore Nossas Pedras
          </h2>
          <p className="text-primary-foreground/60 max-w-xl mx-auto text-sm sm:text-base">
            Clique em qualquer pedra para conhecer sua história e características.
          </p>
        </motion.div>

        <div
          className="relative flex items-center justify-center h-[280px] sm:h-[340px] md:h-[420px] lg:h-[480px]"
          style={{ perspective: "1200px" }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <AnimatePresence mode="popLayout">
            {visibleSlides.map((slide) => {
              const { offset } = slide;
              const isCenter = offset === 0;
              const absOffset = Math.abs(offset);

              const translateX = offset * spacing;
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
                  onClick={() => navigate(`/pedra/${slide.id}`)}
                >
                  <div
                    className="relative overflow-hidden rounded-xl border-2"
                    style={{
                      width: isCenter ? `${centerW}px` : `${sideW}px`,
                      height: isCenter ? `${centerH}px` : `${sideH}px`,
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
                      className="text-center mt-3 sm:mt-4 text-primary-foreground font-serif text-sm sm:text-lg"
                    >
                      {slide.name}
                    </motion.p>
                  )}
                </motion.div>
              );
            })}
          </AnimatePresence>

          <button
            onClick={prev}
            className="absolute left-1 sm:left-2 md:left-8 z-20 p-2.5 sm:p-3 bg-primary/20 hover:bg-primary/40 text-primary-foreground rounded-full backdrop-blur-sm transition-colors active:scale-90"
          >
            <ChevronLeft size={20} className="sm:w-6 sm:h-6" />
          </button>
          <button
            onClick={next}
            className="absolute right-1 sm:right-2 md:right-8 z-20 p-2.5 sm:p-3 bg-primary/20 hover:bg-primary/40 text-primary-foreground rounded-full backdrop-blur-sm transition-colors active:scale-90"
          >
            <ChevronRight size={20} className="sm:w-6 sm:h-6" />
          </button>
        </div>

        {/* Pagination dots - limit on mobile */}
        <div className="flex justify-center gap-1.5 sm:gap-2 mt-6 sm:mt-8 flex-wrap max-w-xs sm:max-w-none mx-auto">
          {stones.map((_, i) => (
            <button
              key={i}
              onClick={() => setCenterIndex(i)}
              className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full transition-all duration-300 ${
                i === centerIndex
                  ? "bg-primary w-4 sm:w-6"
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
