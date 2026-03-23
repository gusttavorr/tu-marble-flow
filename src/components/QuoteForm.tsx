import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Send } from "lucide-react";

const projectTypes = [
  "Bancada de Cozinha",
  "Banheiro",
  "Escada",
  "Área Gourmet",
  "Revestimento",
  "Outro",
];

const QuoteForm = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [form, setForm] = useState({ name: "", whatsapp: "", type: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Olá! Meu nome é ${form.name}.%0A%0ATipo de projeto: ${form.type}%0A%0A${form.message}`;
    window.open(`https://wa.me/5511988124466?text=${text}`, "_blank");
  };

  const inputClass = "w-full bg-transparent border border-white/10 text-white placeholder:text-white/25 px-5 py-4 text-sm focus:outline-none focus:border-primary transition-all duration-300";

  return (
    <section id="orcamento" className="dark-section section-padding" ref={ref}>
      <div className="container-narrow">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="label-caps text-primary mb-4 block">Orçamento</span>
            <div className="line-accent mb-8" />
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-white leading-tight mb-8">
              Solicite Seu <span className="italic text-primary">Orçamento</span> Agora
            </h2>
            <p className="text-white/40 leading-relaxed mb-10 text-base">
              Atendimento ágil e sem compromisso. Preencha o formulário e nossa equipe entra em contato pelo WhatsApp.
            </p>
            <div className="flex flex-col gap-4 text-white/30 text-sm">
              <div className="flex items-center gap-3">
                <span className="text-primary text-lg">✦</span>
                <span>Resposta em até 2 horas úteis</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-primary text-lg">✦</span>
                <span>Orçamento detalhado e transparente</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-primary text-lg">✦</span>
                <span>Visita técnica sem custo</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-primary text-lg">✦</span>
                <span>Projetos em 3D antes da execução</span>
              </div>
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            onSubmit={handleSubmit}
            className="flex flex-col gap-4"
          >
            <input
              type="text"
              placeholder="Seu nome"
              required
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className={inputClass}
            />
            <input
              type="tel"
              placeholder="WhatsApp (com DDD)"
              required
              value={form.whatsapp}
              onChange={(e) => setForm({ ...form, whatsapp: e.target.value })}
              className={inputClass}
            />
            <select
              required
              value={form.type}
              onChange={(e) => setForm({ ...form, type: e.target.value })}
              className={`${inputClass} appearance-none`}
            >
              <option value="" className="bg-foreground">Tipo de projeto</option>
              {projectTypes.map((t) => (
                <option key={t} value={t} className="bg-foreground">{t}</option>
              ))}
            </select>
            <textarea
              placeholder="Conte-nos sobre seu projeto..."
              rows={4}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className={`${inputClass} resize-none`}
            />
            <button
              type="submit"
              className="group px-10 py-5 text-sm font-semibold tracking-wider uppercase hover:shadow-glow hover:scale-[1.02] transition-all duration-300 flex items-center justify-center gap-3 mt-2"
              style={{ backgroundColor: "#25D366", color: "#fff" }}
            >
              <Send size={16} />
              Solicitar Orçamento Agora
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default QuoteForm;
