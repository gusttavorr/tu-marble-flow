import { motion } from "framer-motion";
import heroImg from "@/assets/hero-kitchen.jpg";

const WHATSAPP_URL = "https://wa.me/5511988124466?text=Olá, vim pelo site e gostaria de solicitar um orçamento";

const Hero = () => {
  return (
    <section id="inicio" className="relative min-h-screen flex items-end">
      <div className="absolute inset-0">
        <img
          src={heroImg}
          alt="Bancada de cozinha em mármore branco Calacatta executada pela Itu Mármores"
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/30 to-transparent" />
      </div>

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
              Transforme Seu Ambiente com Mármore e Granito de Alto Padrão
            </h1>
            <p className="text-primary-foreground/70 text-base md:text-lg leading-relaxed mb-8 max-w-lg font-sans">
              Qualidade, acabamento impecável e entrega no prazo. Solicite seu orçamento rápido pelo WhatsApp — atendimento ágil e sem compromisso.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 text-sm font-medium tracking-wide transition-opacity hover:opacity-90"
                style={{ backgroundColor: "#25D366", color: "#fff" }}
              >
                Solicitar Orçamento Agora
              </a>
              <a
                href="#portfolio"
                className="inline-block bg-primary-foreground/10 border border-primary-foreground/30 text-primary-foreground px-8 py-4 text-sm font-medium tracking-wide hover:bg-primary-foreground/20 transition-colors text-center"
              >
                Ver Projetos Reais
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
