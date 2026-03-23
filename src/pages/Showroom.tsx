import { motion } from "framer-motion";
import { ArrowLeft, MapPin, Phone, Clock, Mail, Star } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const showroomImages = [
  {
    src: "http://www.itumarmores.com.br/area_restrita/img_produtos/13.jpg",
    alt: "Showroom - Granitos Brancos",
    label: "Granitos Brancos",
  },
  {
    src: "http://www.itumarmores.com.br/area_restrita/img_produtos/36.jpg",
    alt: "Showroom - Granitos Pretos",
    label: "Granitos Pretos",
  },
  {
    src: "http://www.itumarmores.com.br/area_restrita/img_produtos/48.jpg",
    alt: "Showroom - Granitos Verdes",
    label: "Granitos Verdes",
  },
  {
    src: "http://www.itumarmores.com.br/area_restrita/img_produtos/7.jpg",
    alt: "Showroom - Granitos Bordeaux",
    label: "Granitos Especiais",
  },
  {
    src: "http://www.itumarmores.com.br/area_restrita/img_produtos/12.jpg",
    alt: "Showroom - Mármores Importados",
    label: "Mármores Importados",
  },
  {
    src: "http://www.itumarmores.com.br/area_restrita/img_produtos/38.jpg",
    alt: "Showroom - Pedras Exóticas",
    label: "Pedras Exóticas",
  },
];

const WHATSAPP_URL = "https://wa.me/5511988124466?text=Olá! Gostaria de agendar uma visita ao showroom.";

const Showroom = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
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
          <span className="text-sm font-medium text-foreground">Showroom</span>
        </div>
      </div>

      {/* Hero */}
      <section className="relative overflow-hidden bg-foreground text-primary-foreground">
        <div className="container-narrow py-16 md:py-24 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="label-caps text-primary mb-4 block">Visite-nos</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-medium leading-tight mb-6">
              Nosso Showroom
            </h1>
            <p className="text-lg text-primary-foreground/70 max-w-2xl mx-auto mb-8">
              Mais de 200 materiais expostos em nosso espaço de 3.000m². Conheça de perto a qualidade 
              e beleza das pedras naturais que transformam ambientes há mais de 55 anos.
            </p>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3 text-sm font-medium transition-opacity hover:opacity-90 rounded-lg"
              style={{ backgroundColor: "#25D366", color: "#fff" }}
            >
              Agendar Visita pelo WhatsApp
            </a>
          </motion.div>
        </div>
      </section>

      {/* Gallery */}
      <section className="container-narrow py-16 md:py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-serif font-medium text-foreground mb-4">
            Conheça Nosso Espaço
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Nosso showroom reúne as melhores pedras nacionais e importadas, com chapas inteiras para você escolher com segurança.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {showroomImages.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="group relative aspect-[4/3] overflow-hidden border border-border"
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <span className="text-primary-foreground text-sm font-medium">{img.label}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Differentials */}
      <section className="bg-secondary border-y border-border">
        <div className="container-narrow py-16 md:py-24">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            {[
              { icon: Star, title: "Desde 1968", desc: "Mais de 55 anos de tradição em pedras naturais" },
              { icon: MapPin, title: "3.000m² de Exposição", desc: "Centenas de chapas para você escolher pessoalmente" },
              { icon: Phone, title: "Atendimento Especializado", desc: "Equipe técnica para orientar sua escolha" },
            ].map(({ icon: Icon, title, desc }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex flex-col items-center gap-3"
              >
                <Icon size={32} className="text-primary" />
                <h3 className="text-lg font-serif font-medium text-foreground">{title}</h3>
                <p className="text-sm text-muted-foreground">{desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Info + Map */}
      <section className="container-narrow py-16 md:py-24">
        <div className="grid lg:grid-cols-2 gap-12">
          <div className="flex flex-col gap-8">
            <h2 className="text-3xl md:text-4xl font-serif font-medium text-foreground">
              Como Chegar
            </h2>
            <div className="flex gap-4">
              <MapPin size={20} className="text-primary mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-serif text-lg font-medium text-foreground mb-1">Endereço</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Rodovia Presidente Dutra, KM 203<br />
                  Arujá - SP · CEP: 07400-970
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <Phone size={20} className="text-primary mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-serif text-lg font-medium text-foreground mb-1">Telefone / WhatsApp</h3>
                <p className="text-sm text-muted-foreground">(11) 4655-2288 · (11) 98812-4466</p>
              </div>
            </div>
            <div className="flex gap-4">
              <Mail size={20} className="text-primary mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-serif text-lg font-medium text-foreground mb-1">E-mail</h3>
                <p className="text-sm text-muted-foreground">atendimento@itumarmores.com.br</p>
              </div>
            </div>
            <div className="flex gap-4">
              <Clock size={20} className="text-primary mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-serif text-lg font-medium text-foreground mb-1">Horário</h3>
                <p className="text-sm text-muted-foreground">Seg a Sex: 8h às 18h</p>
                <p className="text-sm text-muted-foreground">Sábado: 8h às 12h</p>
              </div>
            </div>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 text-sm font-medium transition-opacity hover:opacity-90 rounded-lg w-fit"
              style={{ backgroundColor: "#25D366", color: "#fff" }}
            >
              Agendar Visita
            </a>
          </div>

          <div className="aspect-video w-full">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3659.5!2d-46.32!3d-23.39!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cdf5c3f4a47abd%3A0x55e2e7599b2c7a2e!2sItu%20M%C3%A1rmores%20e%20Granitos!5e0!3m2!1spt-BR!2sbr!4v1"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização Itu Mármores e Granitos - Showroom"
              className="w-full h-full min-h-[400px]"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Showroom;
