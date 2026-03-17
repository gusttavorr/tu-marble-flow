import { motion } from "framer-motion";
import heroImg from "@/assets/hero-kitchen.jpg";

const WHATSAPP_URL = "https://wa.me/5511999999999?text=Olá! Gostaria de solicitar um orçamento consultivo.";

const Hero = () => {
  return (
    <section id="inicio" className="relative min-h-screen flex items-end">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImg}
          alt="Bancada de cozinha em mármore branco Calacatta executada pela Itu Mármores"
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/30 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 section-padding pb-16 md:pb-24 w-full">
        <div className="container-narrow">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-2xl"
          >
            <span className="label-caps text-primary mb-4 block">Tradição desde 1968</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-medium text-primary-foreground leading-[1.1] mb-6">
              Projetos em Mármore e Granito de Alto Padrão
            </h1>
            <p className="text-primary-foreground/70 text-base md:text-lg leading-relaxed mb-8 max-w-lg font-sans">
              Transformamos ambientes com sofisticação, durabilidade e acabamento impecável. A precisão do corte. A alma da pedra.
            </p>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-primary-foreground text-foreground px-8 py-4 text-sm font-medium tracking-wide hover:opacity-90 transition-opacity"
            >
              Solicitar Orçamento Consultivo
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
