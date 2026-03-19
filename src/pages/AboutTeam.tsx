import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Building2, Mountain, Gem, Globe, Users, Award, MapPin } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/5511988124466?text=Olá! Gostaria de conhecer mais sobre a Itu Mármores e Granitos.";

const groupCompanies = [
  {
    name: "Itu Mármores e Granitos",
    role: "Beneficiamento e Comercialização",
    desc: "A empresa principal do grupo, referência em rochas ornamentais desde 1968. Responsável pelo beneficiamento, corte, acabamento e comercialização de mármores, granitos e pedras exóticas para todo o Brasil e exterior.",
    icon: Gem,
  },
  {
    name: "SOMIBRAS",
    role: "Sociedade de Mineração Brasileira Ltda.",
    desc: "Braço de mineração do grupo, responsável pela extração e fornecimento de matéria-prima de alta qualidade diretamente das jazidas próprias, garantindo controle total da cadeia produtiva.",
    icon: Mountain,
  },
  {
    name: "MIC",
    role: "Mineração Irmãos Conceição",
    desc: "Empresa de mineração que carrega o nome da família fundadora. Opera jazidas próprias e fornece blocos selecionados de granito e outras rochas ornamentais para o grupo.",
    icon: Building2,
  },
];

const milestones = [
  { year: "1968", text: "Fundação da Itu Mármores e Granitos pela família Conceição em Arujá, SP." },
  { year: "1980s", text: "Expansão das operações de mineração com a criação da SOMIBRAS e MIC." },
  { year: "1990s", text: "Início das exportações internacionais para Europa, Ásia e Oriente Médio." },
  { year: "2000s", text: "Modernização tecnológica com equipamentos CNC de precisão alemã." },
  { year: "2010s", text: "Parceria com Grupo Cosentino (Dekton e Silestone). Showroom em São Paulo." },
  { year: "2018", text: "Comemoração de 50 anos com mais de 150 mil m² de área operacional." },
  { year: "Hoje", text: "Referência nacional em rochas ornamentais com presença em mais de 15 países." },
];

const internationalPresence = [
  "Itália", "Alemanha", "Espanha", "Estados Unidos", "Japão",
  "Dubai", "Arábia Saudita", "Líbia", "Qatar", "Turquia",
];

const fadeUp = {
  initial: { opacity: 0, y: 30 } as const,
  animate: { opacity: 1, y: 0 } as const,
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
};

const AboutTeam = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-foreground text-primary-foreground">
        <div className="max-w-6xl mx-auto px-5 md:px-8 lg:px-16">
          <div className="flex items-center h-20">
            <button
              onClick={() => navigate("/")}
              className="flex items-center gap-2 text-primary-foreground/70 hover:text-primary-foreground transition-colors"
            >
              <ArrowLeft size={18} />
              <span className="text-sm">Voltar ao Início</span>
            </button>
          </div>
        </div>
      </div>

      {/* Hero */}
      <section className="bg-foreground text-primary-foreground pb-20 pt-8">
        <div className="max-w-6xl mx-auto px-5 md:px-8 lg:px-16">
          <motion.div {...fadeUp} className="max-w-3xl">
            <span className="text-primary text-sm tracking-[0.2em] uppercase font-medium mb-4 block">
              Quem Somos
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-medium leading-tight mb-6">
              Uma família, três empresas, <br className="hidden md:block" />
              <span className="text-primary">meio século de tradição.</span>
            </h1>
            <p className="text-primary-foreground/70 text-lg leading-relaxed max-w-2xl">
              A história da Itu Mármores e Granitos é a história da família Conceição — 
              uma trajetória que começou em 1968 e se tornou referência nacional e 
              internacional no mercado de rochas ornamentais.
            </p>
          </motion.div>
        </div>
      </section>

      {/* A Família Fundadora */}
      <section className="section-padding">
        <div className="max-w-6xl mx-auto px-5 md:px-8 lg:px-16">
          <motion.div
            {...fadeUp}
            className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center"
          >
            <div>
              <span className="text-primary text-sm tracking-[0.2em] uppercase font-medium mb-4 block">
                A Família Fundadora
              </span>
              <h2 className="text-3xl md:text-4xl font-serif font-medium text-foreground leading-tight mb-6">
                Família Conceição
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Os irmãos Conceição fundaram a Itu Mármores e Granitos em 1968, na cidade 
                  de Arujá, São Paulo. O que começou como uma pequena operação de beneficiamento 
                  de pedras cresceu e se tornou um dos maiores grupos do setor de rochas 
                  ornamentais do Brasil.
                </p>
                <p>
                  Com visão empreendedora, expandiram o negócio verticalmente — da extração 
                  à instalação — criando a SOMIBRAS (Sociedade de Mineração Brasileira) e a 
                  MIC (Mineração Irmãos Conceição), garantindo controle total sobre a qualidade 
                  desde a jazida até o acabamento final.
                </p>
                <p>
                  Hoje, o grupo opera em uma área de mais de <strong>150 mil m²</strong>, 
                  emprega dezenas de profissionais especializados e já entregou milhares de 
                  projetos em mais de <strong>15 países</strong> ao redor do mundo.
                </p>
              </div>
            </div>
            <div className="bg-secondary p-8 md:p-12">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <span className="text-4xl md:text-5xl font-serif font-medium text-primary block">57+</span>
                  <span className="text-sm text-muted-foreground mt-1 block">Anos de história</span>
                </div>
                <div className="text-center">
                  <span className="text-4xl md:text-5xl font-serif font-medium text-primary block">150k</span>
                  <span className="text-sm text-muted-foreground mt-1 block">m² de área</span>
                </div>
                <div className="text-center">
                  <span className="text-4xl md:text-5xl font-serif font-medium text-primary block">15+</span>
                  <span className="text-sm text-muted-foreground mt-1 block">Países atendidos</span>
                </div>
                <div className="text-center">
                  <span className="text-4xl md:text-5xl font-serif font-medium text-primary block">3</span>
                  <span className="text-sm text-muted-foreground mt-1 block">Empresas no grupo</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Empresas do Grupo */}
      <section className="section-padding bg-secondary">
        <div className="max-w-6xl mx-auto px-5 md:px-8 lg:px-16">
          <motion.div {...fadeUp}>
            <span className="text-primary text-sm tracking-[0.2em] uppercase font-medium mb-4 block">
              O Grupo
            </span>
            <h2 className="text-3xl md:text-4xl font-serif font-medium text-foreground leading-tight mb-12">
              Três empresas, uma missão
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {groupCompanies.map((company, i) => (
              <motion.div
                key={company.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-background p-8 shadow-card"
              >
                <company.icon className="text-primary mb-4" size={32} strokeWidth={1} />
                <h3 className="font-serif text-xl font-medium text-foreground mb-1">
                  {company.name}
                </h3>
                <span className="text-primary text-xs tracking-[0.15em] uppercase block mb-4">
                  {company.role}
                </span>
                <p className="text-sm text-muted-foreground leading-relaxed">{company.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding">
        <div className="max-w-6xl mx-auto px-5 md:px-8 lg:px-16">
          <motion.div {...fadeUp}>
            <span className="text-primary text-sm tracking-[0.2em] uppercase font-medium mb-4 block">
              Nossa Trajetória
            </span>
            <h2 className="text-3xl md:text-4xl font-serif font-medium text-foreground leading-tight mb-12">
              Marcos da nossa história
            </h2>
          </motion.div>

          <div className="relative">
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px" />
            {milestones.map((item, i) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className={`relative flex items-start gap-6 mb-8 md:mb-6 ${
                  i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                } md:items-center`}
              >
                <div className={`hidden md:block md:w-1/2 ${i % 2 === 0 ? "text-right pr-12" : "text-left pl-12"}`}>
                  <p className="text-muted-foreground leading-relaxed">{item.text}</p>
                </div>
                <div className="relative z-10 flex items-center justify-center w-8 h-8 md:w-10 md:h-10 bg-primary text-primary-foreground rounded-full text-xs md:text-sm font-medium shrink-0">
                  {item.year.length <= 4 ? item.year.slice(-2) : "•"}
                </div>
                <div className={`md:w-1/2 ${i % 2 === 0 ? "md:pl-12" : "md:pr-12"}`}>
                  <span className="font-serif text-lg font-medium text-foreground">{item.year}</span>
                  <p className="text-muted-foreground leading-relaxed md:hidden mt-1">{item.text}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Presença Internacional */}
      <section className="section-padding bg-foreground text-primary-foreground">
        <div className="max-w-6xl mx-auto px-5 md:px-8 lg:px-16">
          <motion.div {...fadeUp} className="text-center mb-12">
            <Globe className="text-primary mx-auto mb-4" size={36} strokeWidth={1} />
            <h2 className="text-3xl md:text-4xl font-serif font-medium leading-tight mb-4">
              Presença Internacional
            </h2>
            <p className="text-primary-foreground/70 max-w-xl mx-auto">
              Projetos entregues nos mais exigentes mercados do mundo, com a qualidade 
              que só mais de cinco décadas de experiência garantem.
            </p>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-3">
            {internationalPresence.map((country, i) => (
              <motion.span
                key={country}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
                className="border border-primary-foreground/20 px-5 py-2.5 text-sm text-primary-foreground/80 hover:border-primary hover:text-primary transition-colors"
              >
                {country}
              </motion.span>
            ))}
          </div>
        </div>
      </section>

      {/* Localização */}
      <section className="section-padding">
        <div className="max-w-6xl mx-auto px-5 md:px-8 lg:px-16">
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div {...fadeUp}>
              <MapPin className="text-primary mb-4" size={28} strokeWidth={1} />
              <h3 className="font-serif text-xl font-medium text-foreground mb-2">Matriz — Arujá</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-1">
                Rodovia Presidente Dutra, KM 203
              </p>
              <p className="text-muted-foreground text-sm leading-relaxed mb-1">
                Arujá — SP, CEP 07400-970
              </p>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Fone: (11) 4655-2288
              </p>
            </motion.div>
            <motion.div {...fadeUp}>
              <Award className="text-primary mb-4" size={28} strokeWidth={1} />
              <h3 className="font-serif text-xl font-medium text-foreground mb-2">Showroom — São Paulo</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-1">
                Alameda Gabriel Monteiro da Silva, 278
              </p>
              <p className="text-muted-foreground text-sm leading-relaxed mb-1">
                São Paulo — SP
              </p>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Fone: (11) 4654-8585
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-secondary">
        <div className="max-w-6xl mx-auto px-5 md:px-8 lg:px-16 text-center">
          <motion.div {...fadeUp}>
            <Users className="text-primary mx-auto mb-4" size={36} strokeWidth={1} />
            <h2 className="text-3xl md:text-4xl font-serif font-medium text-foreground leading-tight mb-4">
              Conheça nossa equipe pessoalmente
            </h2>
            <p className="text-muted-foreground max-w-lg mx-auto mb-8">
              Agende uma visita à nossa fábrica ou showroom e conheça de perto o trabalho 
              de mais de cinco décadas de dedicação às rochas ornamentais.
            </p>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-foreground text-primary-foreground px-8 py-3.5 text-sm font-medium transition-opacity hover:opacity-90"
            >
              Agendar Visita via WhatsApp
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AboutTeam;
