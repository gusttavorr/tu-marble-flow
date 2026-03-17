import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin, Phone, Clock, Mail } from "lucide-react";

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contato" className="section-padding" ref={ref}>
      <div className="container-narrow">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-xl mb-16"
        >
          <span className="label-caps text-primary mb-4 block">Contato</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-medium text-foreground leading-tight">
            Visite nosso showroom
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex flex-col gap-8"
          >
            <div className="flex gap-4">
              <MapPin size={20} className="text-primary mt-1 flex-shrink-0" strokeWidth={1.5} />
              <div>
                <h3 className="font-serif text-lg font-medium text-foreground mb-1">Endereço</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Rodovia Presidente Dutra, KM203<br />
                  Caixa Postal 176<br />
                  Arujá - SP<br />
                  CEP: 07400-970
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <Phone size={20} className="text-primary mt-1 flex-shrink-0" strokeWidth={1.5} />
              <div>
                <h3 className="font-serif text-lg font-medium text-foreground mb-1">Telefone</h3>
                <p className="text-sm text-muted-foreground">(11) 4655-2288</p>
              </div>
            </div>
            <div className="flex gap-4">
              <Mail size={20} className="text-primary mt-1 flex-shrink-0" strokeWidth={1.5} />
              <div>
                <h3 className="font-serif text-lg font-medium text-foreground mb-1">E-mail</h3>
                <p className="text-sm text-muted-foreground">atendimento@itumarmores.com.br</p>
                <p className="text-sm text-muted-foreground">orcamentos@itumarmores.com.br</p>
              </div>
              </div>
            </div>
            <div className="flex gap-4">
              <Clock size={20} className="text-primary mt-1 flex-shrink-0" strokeWidth={1.5} />
              <div>
                <h3 className="font-serif text-lg font-medium text-foreground mb-1">Horário</h3>
                <p className="text-sm text-muted-foreground">Seg a Sex: 8h às 18h</p>
                <p className="text-sm text-muted-foreground">Sábado: 8h às 12h</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="aspect-video w-full"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3660.5!2d-47.299!3d-23.264!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDE1JzUwLjQiUyA0N8KwMTcnNTYuNCJX!5e0!3m2!1spt-BR!2sbr!4v1"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização Itu Mármores e Granitos"
              className="w-full h-full min-h-[300px]"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
