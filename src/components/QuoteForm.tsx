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
    const phone = form.whatsapp.replace(/\D/g, "");
    window.open(`https://wa.me/5511999999999?text=${text}`, "_blank");
  };

  return (
    <section id="orcamento" className="section-padding bg-foreground" ref={ref}>
      <div className="container-narrow">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="label-caps text-primary mb-4 block">Orçamento</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-medium text-primary-foreground leading-tight mb-6">
              Inicie seu projeto conosco
            </h2>
            <p className="text-primary-foreground/60 leading-relaxed mb-8">
              Preencha o formulário e nossa equipe entrará em contato pelo WhatsApp para um atendimento consultivo personalizado. Sem compromisso.
            </p>
            <div className="flex flex-col gap-2 text-primary-foreground/50 text-sm">
              <span>✦ Resposta em até 2 horas úteis</span>
              <span>✦ Orçamento detalhado e transparente</span>
              <span>✦ Visita técnica sem custo</span>
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            onSubmit={handleSubmit}
            className="flex flex-col gap-4"
          >
            <input
              type="text"
              placeholder="Seu nome"
              required
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="bg-primary-foreground/10 border border-primary-foreground/10 text-primary-foreground placeholder:text-primary-foreground/30 px-4 py-3.5 text-sm focus:outline-none focus:border-primary transition-colors"
            />
            <input
              type="tel"
              placeholder="WhatsApp (com DDD)"
              required
              value={form.whatsapp}
              onChange={(e) => setForm({ ...form, whatsapp: e.target.value })}
              className="bg-primary-foreground/10 border border-primary-foreground/10 text-primary-foreground placeholder:text-primary-foreground/30 px-4 py-3.5 text-sm focus:outline-none focus:border-primary transition-colors"
            />
            <select
              required
              value={form.type}
              onChange={(e) => setForm({ ...form, type: e.target.value })}
              className="bg-primary-foreground/10 border border-primary-foreground/10 text-primary-foreground px-4 py-3.5 text-sm focus:outline-none focus:border-primary transition-colors appearance-none"
            >
              <option value="" className="text-foreground">Tipo de projeto</option>
              {projectTypes.map((t) => (
                <option key={t} value={t} className="text-foreground">{t}</option>
              ))}
            </select>
            <textarea
              placeholder="Conte-nos sobre seu projeto..."
              rows={4}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="bg-primary-foreground/10 border border-primary-foreground/10 text-primary-foreground placeholder:text-primary-foreground/30 px-4 py-3.5 text-sm focus:outline-none focus:border-primary transition-colors resize-none"
            />
            <button
              type="submit"
              className="bg-primary text-primary-foreground px-8 py-4 text-sm font-medium tracking-wide hover:opacity-90 transition-opacity flex items-center justify-center gap-2 mt-2"
            >
              <Send size={16} />
              Iniciar Atendimento Exclusivo
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default QuoteForm;
