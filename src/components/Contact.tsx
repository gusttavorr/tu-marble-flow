import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin, Phone, Clock, Mail } from "lucide-react";

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const contactInfo = [
    { icon: MapPin, title: "Endereço", lines: ["Rodovia Presidente Dutra, KM203", "Caixa Postal 176", "Arujá - SP · CEP: 07400-970"] },
    { icon: Phone, title: "Telefone", lines: ["(11) 4655-2288"] },
    { icon: Mail, title: "E-mail", lines: ["atendimento@itumarmores.com.br"] },
    { icon: Clock, title: "Horário", lines: ["Seg a Sex: 8h às 18h", "Sábado: 8h às 12h"] },
  ];

  return (
    <section id="contato" className="section-padding" ref={ref}>
      <div className="container-narrow">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="label-caps text-primary mb-4 block">Contato</span>
          <div className="line-accent mx-auto mb-8" />
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground leading-tight">
            Visite nosso <span className="italic text-primary">Showroom</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-2 flex flex-col gap-8"
          >
            {contactInfo.map((item, i) => (
              <div key={item.title} className="flex gap-4 group">
                <div className="w-10 h-10 flex items-center justify-center border border-border group-hover:border-primary/30 transition-colors duration-300">
                  <item.icon size={18} className="text-primary" strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="font-serif text-base font-semibold text-foreground mb-1">{item.title}</h3>
                  {item.lines.map((line, j) => (
                    <p key={j} className="text-sm text-muted-foreground leading-relaxed">{line}</p>
                  ))}
                </div>
              </div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-3"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3659.5!2d-46.32!3d-23.39!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cdf5c3f4a47abd%3A0x55e2e7599b2c7a2e!2sItu%20M%C3%A1rmores%20e%20Granitos!5e0!3m2!1spt-BR!2sbr!4v1"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização Itu Mármores e Granitos"
              className="w-full h-full min-h-[400px]"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
