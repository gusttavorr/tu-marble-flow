import { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowDown } from "lucide-react";
import heroVideo1 from "@/assets/hero-video.mp4.asset.json";
import heroVideo2 from "@/assets/hero-video-2.mp4.asset.json";
import heroVideo3 from "@/assets/hero-video-3.mp4.asset.json";
import heroVideo4 from "@/assets/hero-video-4.mp4.asset.json";
import heroImg from "@/assets/hero-kitchen.jpg";

const WHATSAPP_URL = "https://wa.me/5511988124466?text=Olá, vim pelo site e gostaria de solicitar um orçamento";

const videos = [
  heroVideo1.url,
  heroVideo2.url,
  heroVideo3.url,
  heroVideo4.url,
];

const Hero = () => {
  const [current, setCurrent] = useState(0);
  const [nextReady, setNextReady] = useState(false);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const timerRef = useRef<ReturnType<typeof setTimeout>>();

  const advance = useCallback(() => {
    setCurrent((prev) => (prev + 1) % videos.length);
    setNextReady(false);
  }, []);

  // Auto-advance every 8 seconds
  useEffect(() => {
    timerRef.current = setTimeout(advance, 8000);
    return () => clearTimeout(timerRef.current);
  }, [current, advance]);

  // Preload the next video
  useEffect(() => {
    const nextIdx = (current + 1) % videos.length;
    const nextVideo = videoRefs.current[nextIdx];
    if (nextVideo) {
      nextVideo.currentTime = 0;
      nextVideo.load();
    }
  }, [current]);

  return (
    <section id="inicio" className="relative min-h-[100svh] flex items-center justify-center overflow-hidden">
      {/* Video Carousel Background */}
      <div className="absolute inset-0">
        <AnimatePresence mode="sync">
          <motion.div
            key={current}
            initial={{ opacity: 0, scale: 1.08 }}
            animate={{ opacity: 1, scale: 1.02 }}
            exit={{ opacity: 0, scale: 1 }}
            transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-0"
          >
            <video
              ref={(el) => { videoRefs.current[current] = el; }}
              src={videos[current]}
              autoPlay
              muted
              loop
              playsInline
              poster={heroImg}
              className="w-full h-full object-cover"
            />
          </motion.div>
        </AnimatePresence>
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
      </div>

      {/* Video indicators */}
      <div className="absolute bottom-20 sm:bottom-24 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {videos.map((_, i) => (
          <button
            key={i}
            onClick={() => { clearTimeout(timerRef.current); setCurrent(i); }}
            className="group p-1"
            aria-label={`Vídeo ${i + 1}`}
          >
            <div className="relative h-[3px] w-8 sm:w-10 rounded-full bg-white/20 overflow-hidden">
              {i === current && (
                <motion.div
                  className="absolute inset-y-0 left-0 bg-white rounded-full"
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 8, ease: "linear" }}
                />
              )}
              {i < current && (
                <div className="absolute inset-0 bg-white/50 rounded-full" />
              )}
            </div>
          </button>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 section-padding w-full pt-24 sm:pt-28">
        <div className="container-narrow flex flex-col items-center text-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="label-caps text-primary mb-4 sm:mb-6 block"
          >
            ✦ Tradição desde 1968 ✦
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-serif font-bold text-white leading-[1.1] mb-6 sm:mb-8 max-w-5xl"
          >
            Transforme Seu Ambiente com{" "}
            <span className="text-gradient-gold italic">Mármore & Granito</span>{" "}
            de Alto Padrão
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-white/60 text-sm sm:text-base md:text-lg leading-relaxed mb-8 sm:mb-12 max-w-2xl font-sans px-2"
          >
            Qualidade, acabamento impecável e entrega no prazo. 
            Solicite seu orçamento rápido pelo WhatsApp — atendimento ágil e sem compromisso.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto px-2 sm:px-0"
          >
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="cta-primary rounded-xl w-full sm:w-auto"
              style={{ backgroundColor: "#25D366", color: "#fff" }}
            >
              <span>Solicitar Orçamento</span>
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </a>
            <a
              href="#portfolio"
              className="cta-outline border-white/20 text-white hover:border-white/40 hover:bg-white/5 rounded-xl w-full sm:w-auto"
            >
              Ver Projetos
            </a>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
      >
        <span className="text-white/40 text-[10px] tracking-[0.3em] uppercase font-sans hidden sm:block">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <ArrowDown size={16} className="text-white/40" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
