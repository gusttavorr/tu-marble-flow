import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, ChefHat, Bath, Flame, Eye, Sparkles, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import envCozinha from "@/assets/env-cozinha.jpg";
import envBanheiro from "@/assets/env-banheiro.jpg";
import envGourmet from "@/assets/env-gourmet.jpg";
import type { Stone } from "@/data/stones";

const WHATSAPP_BASE = "https://wa.me/5511988124466?text=";

const environments = [
  { id: "cozinha", label: "Cozinha", icon: ChefHat, image: envCozinha },
  { id: "banheiro", label: "Banheiro", icon: Bath, image: envBanheiro },
  { id: "gourmet", label: "Área Gourmet", icon: Flame, image: envGourmet },
];

const StoneProjectVisualizer = ({ stone }: { stone: Stone }) => {
  const [activeEnv, setActiveEnv] = useState("cozinha");
  const current = environments.find((e) => e.id === activeEnv)!;

  const whatsappMsg = encodeURIComponent(
    `Olá, vi o modelo com a pedra ${stone.name} na ${current.label} e gostaria de um orçamento`
  );

  return (
    <section className="bg-secondary border-y border-border">
      <div className="container-narrow py-16 md:py-24">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-12"
        >
          <span className="label-caps text-primary mb-3 block">Simulação de Projeto</span>
          <h2 className="text-3xl md:text-4xl font-serif font-medium text-foreground leading-tight mb-3">
            Veja Como Ficaria Seu Projeto
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Escolha o ambiente e visualize o {stone.name} aplicado. Tenha mais segurança na sua escolha.
          </p>
        </motion.div>

        {/* Environment selector */}
        <div className="flex justify-center gap-3 mb-8">
          {environments.map((env) => {
            const Icon = env.icon;
            const isActive = env.id === activeEnv;
            return (
              <button
                key={env.id}
                onClick={() => setActiveEnv(env.id)}
                className={`flex items-center gap-2 px-5 py-3 rounded-lg text-sm font-medium transition-all duration-300 ${
                  isActive
                    ? "bg-primary text-primary-foreground shadow-md"
                    : "bg-background text-muted-foreground hover:bg-muted border border-border"
                }`}
              >
                <Icon size={18} />
                <span className="hidden sm:inline">{env.label}</span>
              </button>
            );
          })}
        </div>

        {/* Visualization area */}
        <div className="relative max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeEnv}
              initial={{ opacity: 0, scale: 0.97, filter: "blur(4px)" }}
              animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
              exit={{ opacity: 0, scale: 0.97, filter: "blur(4px)" }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="relative overflow-hidden rounded-lg shadow-elevated"
            >
              <img
                src={current.image}
                alt={`${stone.name} aplicado em ${current.label}`}
                className="w-full aspect-[3/2] object-cover"
                loading="lazy"
              />

              {/* Stone texture badge */}
              <div className="absolute top-4 right-4 flex items-center gap-3 bg-background/90 backdrop-blur-sm rounded-lg p-2 pr-4 shadow-md border border-border">
                <img
                  src={stone.image}
                  alt={stone.name}
                  className="w-10 h-10 rounded object-cover border border-primary/30"
                />
                <div>
                  <p className="text-xs text-muted-foreground">Pedra selecionada</p>
                  <p className="text-sm font-medium text-foreground">{stone.name}</p>
                </div>
              </div>

              {/* Environment label */}
              <div className="absolute bottom-4 left-4 bg-foreground/80 backdrop-blur-sm text-primary-foreground px-4 py-2 rounded-lg text-sm font-medium">
                {current.label} com {stone.name}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Differentials */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-6 mt-8 mb-8"
        >
          {[
            { icon: Eye, text: "Projeto em 3D personalizado" },
            { icon: Sparkles, text: "Ajudamos você a escolher" },
            { icon: Shield, text: "Atendimento rápido pelo WhatsApp" },
          ].map(({ icon: Icon, text }) => (
            <div key={text} className="flex items-center gap-2 text-sm text-muted-foreground">
              <Icon size={16} className="text-primary" />
              <span>{text}</span>
            </div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center"
        >
          <p className="text-foreground font-medium mb-4">
            Gostou desse modelo? Faça seu orçamento com essa pedra agora
          </p>
          <a
            href={`${WHATSAPP_BASE}${whatsappMsg}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              size="lg"
              className="gap-2 text-base px-8"
              style={{ backgroundColor: "#25D366" }}
            >
              <MessageCircle size={20} />
              Solicitar Orçamento no WhatsApp
            </Button>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default StoneProjectVisualizer;
