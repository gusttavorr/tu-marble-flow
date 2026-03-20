import { useParams, useNavigate } from "react-router-dom";
import { stones } from "@/data/stones";
import { ArrowLeft, MessageCircle, MapPin, Layers, Sparkles, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useEffect } from "react";
import StoneProjectVisualizer from "@/components/StoneProjectVisualizer";

const WHATSAPP_BASE = "https://wa.me/5511988124466?text=";

const StonePage = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const stone = stones.find((s) => s.id === id);
  const pageRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll();
  const whatsappOpacity = useTransform(scrollYProgress, [0.15, 0.3], [0, 1]);
  const whatsappY = useTransform(scrollYProgress, [0.15, 0.3], [60, 0]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!stone) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center">
          <h1 className="text-2xl font-serif text-foreground mb-4">Pedra não encontrada</h1>
          <Button onClick={() => navigate("/")} variant="outline">
            Voltar ao início
          </Button>
        </div>
      </div>
    );
  }

  const whatsappMsg = encodeURIComponent(
    `Olá! Estou interessado(a) no ${stone.category} ${stone.name}. Gostaria de mais informações e orçamento.`
  );

  return (
    <div ref={pageRef} className="min-h-screen bg-background">
      {/* Top bar */}
      <div className="sticky top-0 z-40 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container-narrow flex items-center gap-4 py-3">
          <button
            onClick={() => navigate("/")}
            className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft size={20} />
            <span className="text-sm">Voltar</span>
          </button>
          <span className="text-sm text-muted-foreground">/</span>
          <span className="text-sm font-medium text-foreground">{stone.name}</span>
        </div>
      </div>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="container-narrow py-12 md:py-20">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7 }}
              className="relative aspect-[3/4] overflow-hidden border-2 border-primary/20 shadow-elevated"
            >
              <img
                src={stone.image}
                alt={stone.name}
                className="w-full h-full object-cover"
              />
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(255,255,255,0.1) 0%, transparent 50%, rgba(0,0,0,0.15) 100%)",
                }}
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <span className="label-caps text-primary mb-2 block">{stone.category}</span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-medium text-foreground leading-tight mb-4">
                {stone.name}
              </h1>
              <p className="text-lg text-muted-foreground mb-6">{stone.description}</p>

              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <MapPin size={16} className="text-primary" />
                  <span>Origem: {stone.origin}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Layers size={16} className="text-primary" />
                  <span>{stone.category}</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mb-6">
                {stone.finish.map((f) => (
                  <span
                    key={f}
                    className="px-3 py-1 text-xs rounded-full bg-primary/10 text-primary border border-primary/20"
                  >
                    {f}
                  </span>
                ))}
              </div>

              <div className="flex flex-wrap gap-2">
                {stone.application.map((a) => (
                  <span
                    key={a}
                    className="px-3 py-1 text-xs rounded-full bg-muted text-muted-foreground"
                  >
                    {a}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Project Visualizer */}
      <StoneProjectVisualizer stone={stone} />

      {/* History */}
      <section className="bg-muted/30 border-y border-border">
        <div className="container-narrow py-16 md:py-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <Sparkles size={28} className="text-primary mx-auto mb-4" />
            <h2 className="text-3xl md:text-4xl font-serif font-medium text-foreground mb-8">
              A História por trás da pedra
            </h2>
            <p className="text-lg leading-relaxed text-muted-foreground">{stone.history}</p>
          </motion.div>
        </div>
      </section>

      {/* Characteristics */}
      <section className="container-narrow py-16 md:py-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-serif font-medium text-foreground text-center mb-12">
            Características
          </h2>
          <div className="grid sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
            {stone.characteristics.map((c, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-start gap-3 p-4 rounded-lg bg-muted/40 border border-border"
              >
                <CheckCircle size={20} className="text-primary mt-0.5 shrink-0" />
                <span className="text-foreground">{c}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Why Choose */}
      <section className="bg-foreground">
        <div className="container-narrow py-16 md:py-24 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-serif font-medium text-primary-foreground mb-6">
              Por que escolher o {stone.name}?
            </h2>
            <p className="text-lg text-primary-foreground/70 mb-10">{stone.whyChoose}</p>
            <a
              href={`${WHATSAPP_BASE}${whatsappMsg}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button size="lg" className="gap-2 text-base px-8">
                <MessageCircle size={20} />
                Solicitar Orçamento via WhatsApp
              </Button>
            </a>
          </motion.div>
        </div>
      </section>

      {/* Floating WhatsApp CTA on scroll */}
      <motion.div
        style={{ opacity: whatsappOpacity, y: whatsappY }}
        className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50"
      >
        <a
          href={`${WHATSAPP_BASE}${whatsappMsg}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-6 py-3 rounded-full shadow-elevated text-sm font-medium text-background transition-transform hover:scale-105"
          style={{ backgroundColor: "#25D366" }}
        >
          <MessageCircle size={18} fill="currentColor" />
          Quero o {stone.name} — Falar no WhatsApp
        </a>
      </motion.div>
    </div>
  );
};

export default StonePage;
