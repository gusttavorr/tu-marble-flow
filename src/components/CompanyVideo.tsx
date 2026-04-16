import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const CompanyVideo = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="video-institucional" className="section-padding bg-background" ref={ref}>
      <div className="container-narrow">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-8 sm:mb-12"
        >
          <span className="label-caps text-primary mb-3 sm:mb-4 block">Conheça a Empresa</span>
          <div className="line-accent mx-auto mb-6 sm:mb-8" />
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground leading-tight mb-3 sm:mb-4">
            Vídeo{" "}
            <span className="italic text-primary">Institucional</span>
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base">
            Assista e conheça nossa história, estrutura e compromisso com a excelência.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative aspect-video rounded-2xl overflow-hidden bg-muted/30 border border-border/50"
        >
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/C28k2eGgTAQ?si=dnUFKT7Joh5jRWdD"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            className="absolute inset-0 w-full h-full"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default CompanyVideo;
